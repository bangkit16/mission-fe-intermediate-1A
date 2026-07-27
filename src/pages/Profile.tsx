import { useState } from "react";
import { useSelector } from "react-redux";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import Card from "../components/common/Card";
import { ProfileHeader } from "../features/profile/components/ProfileHeader";
import { ProfileSidebar } from "../features/profile/components/ProfileSidebar";
import {
  ProfileForm,
  type ProfileFormData,
} from "../features/profile/components/ProfileForm";
import { selectUser, login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../services/api/usersService";

interface ProfileState extends ProfileFormData {
  profileImage: string;
}

function Profile() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [profile, setProfile] = useState<ProfileState>({
    fullName: user?.fullName ?? "",
    email: user?.email ?? "",
    countryCode: user?.countryCode ?? "+62",
    phoneNumber: user?.phoneNumber ?? "",
    profileImage: user?.profileImage ?? "https://i.pravatar.cc/40",
  });

  const updateUserMutation = useMutation({
    mutationFn: (data: ProfileState) => updateUser(user?.id ?? "", data),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.SyntheticEvent) => {
    e.preventDefault();

    updateUserMutation.mutate(profile , {
      onSuccess: () => {
        if (user) {
          dispatch(login({ ...user, ...profile }));
        }
        alert("Data berhasil disimpan!");
      }
    });
  };

  return (
    <LayoutBeranda>
      <SectionContainer>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <ProfileSidebar />
          <main className="flex-1 w-full space-y-5">
            <Card className="md:p-3 p-1 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-6">
              <ProfileHeader
                profileImage={profile.profileImage}
                fullName={profile.fullName}
                email={profile.email}
              />

              <hr className="border-gray-200 mb-8" />

              <ProfileForm
                profile={profile}
                onChange={handleChange}
                onSubmit={handleSave}
              />
            </Card>
          </main>
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default Profile;

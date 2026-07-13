import React, { useState } from "react";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import Card from "../components/common/Card";
import { ProfileHeader } from "../features/profile/components/ProfileHeader";
import { ProfileSidebar } from "../features/profile/components/ProfileSidebar";
import {
  ProfileForm,
  type ProfileFormData,
} from "../features/profile/components/ProfileForm";

interface ProfileState extends ProfileFormData {
  profileImage: string;
}

function Profile() {
  const [profile, setProfile] = useState<ProfileState>({
    fullName: "Jennie Ruby Jane",
    email: "rubyjane@gmail.com",
    countryCode: "+62",
    phoneNumber: "81234567890",
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Data berhasil disimpan:", profile);
    alert("Data berhasil disimpan!");
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

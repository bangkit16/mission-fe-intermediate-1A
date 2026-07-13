import React from 'react';

// ================================================
// Interface Props — semua data dan fungsi dioper
// melalui props secara eksplisit
// ================================================
export interface ProfileHeaderProps {
  /** URL foto profil */
  profileImage: string;
  /** Nama lengkap user */
  fullName: string;
  /** Alamat email user */
  email: string;
  /** Handler saat tombol ganti foto diklik */
  onChangePhoto?: () => void;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================
export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profileImage,
  fullName,
  email,
  onChangePhoto,
  className,
}) => {
  // --- Render ---
  return (
    <div className={`flex items-center gap-4 mb-6 ${className ?? ''}`}>
      <img
        src={profileImage}
        alt="Profile"
        className="w-20 h-20 rounded-xl object-cover"
      />
      <div>
        <h2 className="text-xl font-bold text-gray-900">{fullName}</h2>
        <p className="text-gray-500 text-sm mb-1">{email}</p>
        <button
          type="button"
          onClick={onChangePhoto}
          className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
        >
          Ganti Foto Profil
        </button>
      </div>
    </div>
  );
};

ProfileHeader.displayName = 'ProfileHeader';

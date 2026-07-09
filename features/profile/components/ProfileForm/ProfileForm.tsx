import React from 'react';

// ================================================
// Interface Props — semua data dan fungsi dioper
// melalui props secara eksplisit
// ================================================
export interface ProfileFormData {
  fullName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
}

export interface ProfileFormProps {
  /** Data profile yang akan diedit */
  profile: ProfileFormData;
  /** Handler saat nilai input berubah */
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  /** Handler saat form di-submit */
  onSubmit: (e: React.SyntheticEvent) => void;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================
export const ProfileForm: React.FC<ProfileFormProps> = ({
  profile,
  onChange,
  onSubmit,
  className,
}) => {
  // --- Render ---
  return (
    <form onSubmit={onSubmit} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end mb-6">
        {/* Input Nama Lengkap (Highlight Hijau) */}
        <div className="relative md:col-span-5">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-medium text-green-500 z-10">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={onChange}
            className="w-full px-3 py-3 border-2 border-green-500 rounded-xl text-gray-800 focus:outline-none text-sm"
          />
        </div>

        {/* Input E-Mail */}
        <div className="relative md:col-span-4">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-400 z-10">
            E-Mail
          </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={onChange}
            className="w-full px-3 py-3 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-gray-400 text-sm"
          />
        </div>

        {/* Input Nomor HP (Dropdown Kode Negara + Input Nomor) */}
        <div className="md:col-span-3 flex gap-2">
          {/* Dropdown Kode Negara */}
          <div className="relative w-1/3">
            <select
              name="countryCode"
              value={profile.countryCode}
              onChange={onChange}
              className="w-full pl-3 pr-8 py-3 border border-gray-200 rounded-xl text-gray-800 bg-white appearance-none focus:outline-none focus:border-gray-400 text-sm cursor-pointer"
            >
              <option value="+62">+62</option>
              <option value="+1">+1</option>
              <option value="+65">+65</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Input Digit No. Hp */}
          <div className="relative w-2/3">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-400 z-10">
              No. Hp
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={onChange}
              className="w-full px-3 py-3 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-gray-400 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Tombol Simpan */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-[#32d14c] hover:bg-[#2cb843] text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm shadow-sm"
        >
          Simpan
        </button>
      </div>
    </form>
  );
};

ProfileForm.displayName = 'ProfileForm';

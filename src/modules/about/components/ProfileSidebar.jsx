import profileImg from "../../../assets/images/profile.png";
import { generalInfo } from "../../../constants/profileData";
export default function ProfileSidebar() {
  return (
    <aside aria-label="Personal Profile" className="w-full md:flex-1">
      <div className="bg-brand-red text-brand-cream p-8 rounded-xl shadow-xl">
        <header className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-brand-cream mb-4">My Profile</h3>
          <figure className="text-center">
            <img
              src={profileImg}
              alt="Profile of Rafi Kahfi Yugi"
              className="w-36 h-36 rounded-full border-4 border-brand-blue object-cover mx-auto mb-3"
            />
            <figcaption className="font-bold text-lg">Rafi Kahfi Yugi</figcaption>
          </figure>
        </header>
        <div className="mt-6">
          <h4 className="text-brand-blue font-bold text-lg border-b border-brand-cream pb-1 mb-4">General Info</h4>
          <dl className="space-y-3">
            {generalInfo.map((item) => (
              <div key={item.id}>
                <dt className="font-bold text-sm text-brand-blue">{item.term}</dt>
                <dd className="text-base">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </aside>
  );
}

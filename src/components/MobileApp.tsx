import { ReactComponent as Apple } from '../assets/apple.svg'
import { ReactComponent as PlayStore } from '../assets/google.svg'
import appImg from '../assets/app.png'

const MobileApp = () => {
  return (
    <div className="w-2/3 my-44 mx-auto grid grid-cols-2 gap-x-10 justify-between bg-white rounded-36 p-10 pr-0 pb-0">
      <div>
        <p className="font-bai-jamjuree text-text font-semibold text-4xl">
          Try the mobile App
        </p>
        <p className="text-light-text text-lg mt-5 mb-10">
          TrueLocal is available on Android and Iphones, download to have it at
          your fingertip.
        </p>
        <ul role="group" className="flex items-center gap-x-6">
          {["App Store", "Google Play"].map((item, index) => (
            <li key={index}>
              <button className="text-white flex gap-x-1 items-center bg-primary font-medium py-3 px-7 rounded-20 font-poppins">
                {item === "App Store" ? <Apple /> : <PlayStore />}
                <span className="text-sm">
                  Available on
                  <span className="font-bold inline-block text-base">
                    {item}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end -mt-20">
        <img src={appImg} alt="Mobile App" className="rounded-br-36 h-[400px]" />
      </div>
    </div>
  );
}

export default MobileApp
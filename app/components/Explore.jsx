import { assets } from '@/assets/assets';
import Image from 'next/image';

export default function MissionAndVision() { return ( <div id='explore' className="min-h-screen bg-white px-4 py-10 md:px-20"> <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">MISSION AND VISIONS</h1> <div className="w-24 h-2 bg-blue-500 mx-auto mb-10 rounded-full" />

<div className="grid md:grid-cols-2 gap-10 items-start">
    <div>
      <Image
        src={assets.edu_icon}
        alt="People having a meeting"
        width={600}
        height={400}
        className="rounded-xl shadow-lg"
      />
    </div>

    <div>
      <Image
        src={assets.graphics_icon}
        alt="Visa and passport process"
        width={600}
        height={400}
        className="rounded-xl shadow-lg"
      />
    </div>
  </div>

  <div className="mt-10 space-y-6 text-gray-800 text-lg md:text-xl">
    <p>
      <strong>The vision of "Foresee"</strong> is to develop a pathway for students aspiring for studying abroad with the perfect career choices and thereby creating success of both students and us.
    </p>

    <p>
      <strong>The mission of "Foresee"</strong> is to create a students community of same culture, ideas and values on foreign lands with a perfect and needed ideas for them to grow.
    </p>
  </div>

</div>

); }
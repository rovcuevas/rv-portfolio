import bikepackingImg from "../images/bikepacking.png";
import motorcycleImg from "../images/motorcycle.jpg";
import mtbImg from "../images/mtb.png";
import ragleyImg from "../images/ragley.png"; 



export default function PortfolioWebsite() {
  const portfolioItems = [
    {
      title: "Bikapacking Adventure",
      category: "Long-Form Edit",
      description:
        "Bikepacking and outdoor adventure edit focused on cinematic transitions and storytelling.",
      image: bikepackingImg,
      link: "https://youtu.be/VLDI2_chAPQ?si=gXG0y--LmhJT_Z34",
       vertical: false,
    },

    {
      title: "Motorcycle Adventure Reel",
      category: "Short-Form Edit",
      description:
        "Fast-paced riding and outdoor adventure edit focused on cinematic transitions and storytelling.",
      image: motorcycleImg,
      link: "https://drive.google.com/file/d/1iK7I3RuWL1KuOfKe6RpkO7_p-r-jGrxQ/view?usp=drive_link",
       vertical: false,
    },

    {
      title: "Fitness Motivation Edit",
      category: "TikTok / Reels",
      description:
        "Workout-focused short-form edit with captions, beat-sync cuts, and motivational pacing.",
      image: mtbImg,
      link: "https://drive.google.com/file/d/1v5avBLfxtys-m3p_gfW_aI1gwrBWR34v/view?usp=sharing",
      vertical: true,
    },
    
    {
      title: "Pet Content Edit",
      category: "Funny Short-Form",
      description:
        "Lighthearted cat content using meme-style pacing, captions, and trending audio concepts.",
      image: ragleyImg,
      link: "https://www.tiktok.com/@rayleighandragley/video/7489054924827872520?_r=1&_t=ZS-96ZDOt5jm77",
      vertical: true
    },


  ];

  const skills = [
    "CapCut Pro",
    "Adobe Photoshop",
    "YouTube Editing",
    "Instagram Reels",
    "TikTok Editing",
    "Thumbnail Design",
    "Short-Form Content",
    "Social Media Content",
    "Video Pacing",
    "Content Planning",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              Video Editor • Content Creator
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Rov Van Cuevas
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Aspiring professional video editor specializing in short-form
              social media content for YouTube, TikTok, Instagram Reels, and
              lifestyle brands.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition"
              >
                View Portfolio
              </a>

              <a
                href="mailto:rovcuevas@gmail.com"
                className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* ABOUT CARD */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6">About Me</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              I’ve been editing videos for around 5 years as a hobby and I’m
              now transitioning into professional video editing and content
              creation.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              I create and edit content focused on motorcycles, moto-camping,
              bikepacking, fitness, outdoor adventures, and fun content
              featuring my two pet cats.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My editing style focuses on clean pacing, engaging captions,
              trending short-form formats, and natural social-media-style
              storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="px-6 py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Skills & Tools</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-gray-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="px-6 py-20 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4">Portfolio</h2>

          <p className="text-gray-400 text-lg">
            Featured editing work and sample content projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-[1.02] transition duration-300"
            >
              {/* THUMBNAIL IMAGE */}
              <div
                className={`overflow-hidden ${
                  item.vertical ? "aspect-[9/16]" : "aspect-video" 
                }`}
              >
                <img
                  src={item.image.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>  
              <div className="p-6">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                  {item.category}
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* VIDEO LINK BUTTON */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-5 py-2 rounded-xl font-medium hover:opacity-90 transition"
                >
                  Watch Video
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Available for Remote Video Editing Work
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Open to long-term collaborations for YouTube, TikTok, Instagram
            Reels, podcasts, fitness content, lifestyle brands, and short-form
            content editing.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="mailto:rovcuevas@gmail.com"
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/rovcuevas/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
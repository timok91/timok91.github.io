import Image from 'next/image';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="profile-container">
          <div className="profile-image">
            <Image 
              src="/images/profile.png" 
              alt="" 
              width={200} 
              height={200}
              priority
              className="profile-photo"
            />
          </div>
          <div className="profile-info">
            <h1>Timo Krug</h1>
            <h2>M.Sc.</h2>
            <p>Psychologist, specialized in Neuroscience & Research Methods | 
          Senior Consultant, Head of Psychometrics & Innovation</p>
        </div>
      </div>
      </section>
      
      <section className="featured-work">
        <h2>Featured Work</h2>
        <div className="featured-items">
          <div className="featured-item">
            <h3>Latest Publication</h3>
            <p>&apos;I see you&apos;: Pupillometric assessment of the causal role of affect sharing in vicarious fear learning [Poster Presentation]</p>
            <p> --- </p>
            <a href="/publications">View All Publications</a>
          </div>
          
          <div className="featured-item">
            <h3>Recent Blog Post</h3>
            <p>"Title of your latest blog post"</p>
            <p> --- </p>
            <a href="/blog">View All Posts</a>
          </div>
          
          <div className="featured-item">
            <h3>Featured Project</h3>
            <p>"Automated Item-Generation and Validation"</p>
            <p> --- </p>
            <a href="/projects">View All Projects</a>
          </div>
        </div>
      </section>
      
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: timo.krug@outlook.de</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/timo-krug" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        
        </div>
      </section>
    </div>
  );
}
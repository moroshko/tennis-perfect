import Image from "next/image";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

function HomePage() {
  return (
    <main>
      <div className={styles.aboutTennisPerfect}>
        <p>
          Tennis Perfect offers private coaching and clinics for players of all
          ages and abilities, as well as special programs for adults in
          Melbourne.
        </p>
        <p>
          We believe in a student-focused approach, where players take an active
          role in their development by setting goals and working on their ‘inner
          game’ as well as strategic and technical skills.
        </p>
        <p>
          Our lessons are designed to build a solid foundation to get you
          started, then rapidly improve your game and work towards your goals in
          tennis.
        </p>
      </div>
      <div className={styles.aboutOlga}>
        <div className={styles.aboutOlgaContent}>
          <p>
            Our team is led by international professional player{" "}
            <strong>Olga Kalodzitsa</strong>.
          </p>
          <p>Olga’s tennis achievements include:</p>
          <ul>
            <li>
              Winning the National Championship in her home country of Belarus
            </li>
            <li>Top 10 ranking in European Under 16’s</li>
            <li>ITF ranking of 240</li>
            <li>
              Held WTA ranking before going to university in the United States,
              and won two NCAA National Championships with her team.
            </li>
          </ul>
          <p>
            Olga’s former students include WTA, ITF, and US college players, as
            well as players of all levels in New York City, The Hamptons, Miami,
            Europe, and Melbourne. As a USPTA Certified Tennis Professional, she
            ran her own program for a number of years as Head Coach for one of
            New York City’s premier clubs.
          </p>
          <p>
            Olga takes a unique approach to each student, finding ways to
            improve their game in a short period of time. She always believes in
            her students’ ability to learn, as this is essential in helping them
            to achieve their full potential.
          </p>
        </div>
        <div>
          <Image
            src="/images/olga.jpg"
            alt="Picture of Olga"
            width={320}
            height={427}
            priority
          />
        </div>
      </div>
      <Button margin="32px 0 0 0" href="/contact">
        Book a lesson
      </Button>
    </main>
  );
}

HomePage.pageDescription =
  "Professional tennis coach working with children and adults in Melbourne. Specialises in private tennis lessons, group lessons, cardio tennis, high-performance tennis programs, and tennis camps.";

export default HomePage;

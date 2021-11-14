import React from "react";

import Figure from "react-bootstrap/Figure";
import Media from "react-bootstrap/Media";
import ListGroup from "react-bootstrap/ListGroup";

import GeneralFitnessForm from "./GeneralFitnessForm";
import GroupForm from "./GroupForm";
import HockeyForm from "./HockeyForm";
import IndividuelForm from "./IndividuelForm";
import NetballForm from "./NetballForm";
import RugbyForm from "./RugbyForm";

function CoachingForm() {
  return (
    <div className="container">
      <Figure>
        <Figure.Image
          width={300}
          height={300}
          alt="rugby action photo"
          src="https://res.cloudinary.com/wimvb/image/upload/v1609000723/image_9f3cf895-acb4-423e-bf35-aa84e74fc3c620190123_084635_xzyqsj.jpg"
          thumbnail
        />
      </Figure>
      <Figure>
        <Figure.Image
          width={320}
          height={320}
          alt="rugby action photo"
          src="https://res.cloudinary.com/wimvb/image/upload/v1609000723/image_1f2eb7ee-df3a-4e54-ab03-f8b42581ff6420180911_154315_wrm8gn.jpg"
          thumbnail
        />
      </Figure>
      <Figure>
        <Figure.Image
          width={315}
          height={315}
          alt="rugby action photo"
          src="https://res.cloudinary.com/wimvb/image/upload/v1609000717/image_2e3dc328-e65e-4760-8801-b25f37752a4820190123_225133_wiidbg.jpg"
          thumbnail
        />
      </Figure>
      <Media>
        <Media.Body>
          <h2>What is Coaching in Sport?</h2>
          <sub>
            <a href="https://www.topendsports.com" target="blank">
              Info from Topend Sports
            </a>
          </sub>
          <p>
            Sports coaches assist athletes in developing to their full
            potential. They are responsible for training athletes in a sport by
            analyzing their performances, instructing in relevant skills and by
            providing encouragement. But you are also responsible for the
            guidance of the athlete in life and their chosen sport.
          </p>
          <p>
            Consequently, the role of the coach will be many and varied, from
            instructor, assessor, friend, mentor, facilitator, chauffeur,
            demonstrator, adviser, supporter, fact finder, motivator, counselor,
            organizer, planner and the Fountain of all Knowledge.
          </p>
          <p>
            In relation to sports, the role of the coach is to create the right
            conditions for learning to happen and to find ways of motivating the
            athletes. Most athletes are highly motivated and therefore the task
            is to maintain that motivation and to generate excitement and
            enthusiasm.
          </p>
          <p>
            The coach will need to be able to: assist athletes to prepare
            training programs, communicate effectively with athletes, assist
            athletes to develop new skills, use evaluation tests to monitor
            training progress and predict performance.
          </p>
          <p>
            Therefore, you can see that it is a very difficult task and requires
            a very special person.
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body>
          <h2> What is a personal trainer?</h2>
          <p>
            <strong>A personal trainer …</strong>
          </p>
          <h3>1. Understands enough about the human body to get a result</h3>
          <p>
            That is, you know how to impose a level of stress that helps a
            client lose fat, increase strength, or improve in something that
            matters to the client.
          </p>
          <h3>2. Typically starts with just one tool in the bag.</h3>
          <p>
            If you’re a powerlifter, you have all your clients work with a
            barbell. If you’re a CrossFitter, all your clients are going to do
            box jumps and kettlebell swings. If you’re a bodybuilder, your
            clients will get lots of muscle-isolation work with dumbbells and
            machines.
          </p>
          <h3>3. Talks nonstop.</h3>
          <p>
            You count every rep aloud, verbally correct every part of every
            exercise, and throw science around like a tennis ball. Most of all
            you encourage. Because everything is “awesome,” words like “good” or
            even “great” lose their value. The session becomes a giant word
            salad, confusing and distracting the client and diminishing the
            value of your own cues.
          </p>
          <h3>What is a fitness coach?</h3>
          <p>
            A fitness coach, more than anything else, understands the difference
            between what a client wants and what that client needs. She
            identifies the underlying issues that prevent a client from
            achieving her stated goals, and knows how to solve those problems.
          </p>
          <p>
            <strong>
              The most effectives coaches do that in three important ways.
            </strong>
          </p>
          <h3>Fitness coaching key</h3>
          <p>
            <strong>#1: Say more by saying less</strong>
          </p>
          <p>
            In my early days, I never passed up a chance to give a client a
            motivational speech, or to launch into an explanation of energy
            systems. Sometimes it worked. Some clients needed that extra shot of
            inspiration to get their juices flowing. Some wanted to know what
            was going on beneath the hood, and why we were doing something one
            way instead of another way. More often, the response was confusion.
            I got a lot of blank stares back then. And I’m sure I responded with
            blank stares of my own. Like, how could they not get fired up by my
            “clear eyes, full hearts, can’t lose” pep talk? How are they not
            fascinated by my masterful lecture on exercise science? But then I
            noticed something: When I stopped talking, clients paid attention.
            They assumed I wanted to say something, and the longer I held off
            saying it, the more important it must be. Now I may not say anything
            while a client works. I’ll wait until the end of the set, when I’ll
            compliment something specific (“I like the way you generated power
            through the hips on those last two reps”) and offer a simple cue for
            the next set (“this time we’re going to lift the chest a little
            higher and tuck those shoulder blades into your back pockets”).
          </p>
          <p>
            I’m not suggesting you take a vow of silence. That would be weird.
          </p>
          <p>
            <strong>But I am making these points:</strong>
          </p>
          <ListGroup as="ul">
            <ListGroup.Item as="li">
              • The fewer compliments you give, the more excited your clients
              will be to receive them.
            </ListGroup.Item>
            <ListGroup.Item as="li">
              • If you wait for a client to ask for an explanation, the client
              is more likely to appreciate and perhaps even be impressed by your
              answer. Or, to put it more simply, the less you say, the more
              value it will have.
            </ListGroup.Item>
            <ListGroup.Item as="li">
              • The fewer cues you offer, the harder your clients will work to
              implement them.
            </ListGroup.Item>
          </ListGroup>
          <p>
            <strong>#2: Notice what other trainers miss</strong>
          </p>
          <p>
            When a personal trainer watches a client squat, it’s usually from
            one angle, focusing on one aspect of the movement. Does the back
            stay flat? Are the knees staying over the toes? If he sees a
            problem, that’s what he cues: “Knees out.” “Back flat.”
          </p>
          <p>
            A fitness coach, meanwhile, figures out why the client’s form is
            off, or why certain movements might be painful. That doesn’t happen
            overnight. It takes years of studying anatomy and physiology,
            reading textbooks until your eyes bleed and your brain turns to
            slush. And then watching the client’s entire movement chain, rather
            than assuming a problem begins and ends in the joint where you
            happen to observe it, or where the client feels pain.
          </p>
          <p>
            Suppose I see the client’s knee slip into valgus, for example. I’ll
            look at his ankle, see it wobble, and cue the client to push through
            the heel instead of his big toe.
          </p>
          <p>
            <strong>
              #3: Listen to what the clients want, but give them what they need
            </strong>
          </p>
          <p>
            Let’s say a client comes to the gym with the classic goal of losing
            weight.
          </p>
          <p>
            If you’re a personal trainer, your first instinct is to attack the
            goal head-on. You’ll work the client in a way that burns as many
            calories as possible in the time you have together. And you’ll
            probably speed up the weight loss by giving her the most restrictive
            diet she can handle.
          </p>
          <p>
            It could very well work. For a while. But it’s only a matter of time
            before the client’s willpower wears down, or she gets hurt, or she
            just gets tired of being so tired after every workout.
          </p>
          <p>
            The fitness coach, meanwhile, understands that the better a client
            moves, the more she’ll enjoy moving. That’s why the coach focuses on
            strength and skill acquisition. Instead of turning the client into a
            quivering puddle of sweat workout after workout, week after week,
            the coach begins with competence in the fundamental movement
            patterns. Then she increases the client’s strength on exercises
            within each movement pattern.
          </p>
          <p>
            <strong>
              Finally, she changes the client’s mental approach to nutrition.
            </strong>
          </p>
          <p>
            Instead of focusing on what not to eat if she wants to lose weight,
            the coach encourages her to think about what she should eat to get
            the best results from their workouts.
          </p>
          <p>
            The diet could be exactly the same—more lean protein, more
            vegetables, fewer highly processed foods with added sugars and
            fats—but the coach flips the script in the client’s mind. Good food
            choices are about performance and function, not about restriction or
            punishment.
          </p>
          <p>
            You know it’s working when your weight-loss client shows up on
            Monday talking about how much she enjoyed the hike she took over the
            weekend. How strong she felt on the trail, even while climbing hills
            or scrambling over rocks. And how good she felt afterwards, without
            the knee pain she used to experience if she walked up a flight of
            stairs.
          </p>
          <p>
            Now she isn’t someone who merely endures exercise. She enjoys it. A
            client who enjoys movement will reward you with compliance, and with
            compliance you get results.
          </p>
          <sub>
            <a
              href="https://www.theptdc.com/are-you-a-professional-fitness-coach-or-a-personal-trainer-whats-the-difference"
              target="blank"
            >
              By OTC – Online Trainer Academy
            </a>
          </sub>
        </Media.Body>
      </Media>
      <GeneralFitnessForm />
      <GroupForm />
      <HockeyForm />
      <IndividuelForm />
      <NetballForm />
      <RugbyForm />
    </div>
  );
}

export default CoachingForm;

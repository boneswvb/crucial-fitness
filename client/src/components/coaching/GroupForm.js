import React from 'react';

import Media from 'react-bootstrap/Media';

function GroupForm() {
  return (
    <div className="container">
      <h1>Group Coaching</h1>
      <Media>
        <Media.Body>
          <h2>What Is Group Fitness?</h2>
          <p>
            Any form of fitness, which is done in a group setting and lead by an instructor
            or a trainer, can fall under the group fitness category. Class formats can be based
            on cardio, strength, core, or any combination of the three.
            The leader of your class will point you in the right direction, but choosing which
            class to attend is completely up to you. Whatever your goal may be, group fitness
            can help you get there.
          </p>
          <h2>What Are the Advantages and Disadvantages of Group Fitness Training?</h2>
          <p>
            Most people would agree that having a personal trainer would positively impact their
            fitness goals. The drawback for many, however, is that having a coach one-on-one can
            be expensive or intimidating.
          </p>
          <p>
            Training in a group fixes these problems. Many fitness centers have a group class
            schedule with an abundance of free or discounted offerings. These classes provide
            participants with specialized instruction for little-to-no cost.
          </p>
          <p>
            Working out in a group setting also allows participants to meet and interact with other
            people who have similar goals. As friendships form, a sense of accountability develops
            between everyone. This motivates individuals to not skip their workout, which helps them
            reach their goals faster. While anyone can benefit from group classes, they may not be
            the right fit for everyone. For example, if someone is starting to exercise for the
            first time in their life, it might be intimidating to be in a crowd trying to
            step-touch to the 32-count of the instructor’s latest playlist.
          </p>
          <p>
            Safety can also be a concern for first-time participants. Many classes are attended by
            regulars who are aware of proper form and do not need individualized instruction. If a
            person is not familiar with most exercise movements, he or she might see more benefit
            from the one-on-one attention given by a personal trainer.
          </p>
          <p>
            Overall, the choice of whether or not to attend a group fitness class should be based
            on a person’s goals, familiarity with exercise, and comfort level exercising within a
            crowd of people.
          </p>
        </Media.Body>
      </Media>
      <sub>By Exercise.com</sub>
    </div>
  );
}

export default GroupForm;

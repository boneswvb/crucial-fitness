import React from "react";

import Media from "react-bootstrap/Media";

function ConcussionRtpForm() {
  return (
    <div className="container">
      <Media>
        <Media.Body>
          <h2>Concussion - RTP</h2>
          <h4>What is RTP – Return To Play?</h4>
          <p>
            After a concussion, an athlete should only return to sports
            practices with the approval and under the supervision of their
            health care provider. When available, be sure to also work closely
            with your team’s certified athletic trainer.
          </p>
          <p>
            There are six gradual steps that you, along with a health care
            provider, should follow to help safely return an athlete to play.
            Remember, this is a gradual process. These steps should not be
            completed in one day, but instead over days, weeks, or months. It is
            important for an athlete’s parent(s) and coach(es) to watch for
            concussion symptoms after each day’s return to play progression
            activity. An athlete should only move to the next step if they do
            not have any new symptoms at the current step. If an athlete’s
            symptoms come back or if he or she gets new symptoms, this is a sign
            that the athlete is pushing too hard. The athlete should stop these
            activities and the athlete’s medical provider should be contacted.
            After more rest and no concussion symptoms, the athlete can start at
            the previous step.
          </p>
          <p>
            Step 1: Back to regular activities (such as school)
            <br />
            Athlete is back to their regular activities (such as school) and has
            the green-light from their healthcare provider to begin the return
            to play process. An athlete’s return to regular activities involves
            a stepwise process. It starts with a few days of rest (2-3 days) and
            is followed by light activity (such as short walks) and moderate
            activity (such as riding a stationary bike) that do not worsen
            symptoms. You can learn more about the steps to return to regular
            activities at: &nbsp;
            <a
              href="https://www.cdc.gov/headsup/basics/concussion_recovery.html"
              target="blank"
            >
              https://www.cdc.gov/headsup/basics/concussion_recovery.html
            </a>
            .
          </p>
          <p>
            Step 2: Light aerobic activity
            <br />
            Begin with light aerobic exercise only to increase an athlete’s
            heart rate. This means about 5 to 10 minutes on an exercise bike,
            walking, or light jogging. No weight lifting at this point.
          </p>
          <p>
            Step 3: Moderate activity
            <br />
            Continue with activities to increase an athlete’s heart rate with
            body or head movement. This includes moderate jogging, brief
            running, moderate-intensity stationary biking, moderate-intensity
            weightlifting (less time and/or less weight from their typical
            routine).
          </p>
          <p>
            Step 4: Heavy, non-contact activity
            <br />
            Add heavy non-contact physical activity, such as sprinting/running,
            high-intensity stationary biking, regular weightlifting routine,
            non-contact sport-specific drills (in 3 planes of movement).
          </p>
          <p>
            Step 5: Practice & full contact
            <br />
            Young athlete may return to practice and full contact (if
            appropriate for the sport) in controlled practice.
          </p>
          <p>
            Step 6: Competition
            <br />
            Young athlete may return to competition.
          </p>
        </Media.Body>
      </Media>
    </div>
  );
}

export default ConcussionRtpForm;

import {
  CalendarCheck,
  MessageCircle,
  Camera,
  Sparkles,
} from 'lucide-react';
import { steps } from '../data';

const stepIcons = {
  CalendarCheck,
  MessageCircle,
  Camera,
  Sparkles,
};

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">From booking to boat</span>
          <h2>Four steps, zero paperwork.</h2>
        </div>
        <div className="steps">
          {steps.map((step) => {
            const Icon = stepIcons[step.icon];
            return (
              <div key={step.title} className="step">
                <span className="ico">
                  <Icon />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

<<<<<<< HEAD
import React, { useState } from 'react';
import '../assets/css/Faq.css'; // Import your Faq.css file

const Faq = () => {
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission logic here (send to server, etc.)
    // For now, we'll just set submitted to true
    setSubmitted(true);
  };

  return (
      <div className="faq-container">
      <div className="user-query-container">
        <p>If you have any questions not answered here, please do not hesitate to get in touch. No question is silly!</p>
        {/* Submission Form */}
        <form onSubmit={handleSubmit}>
          <label>
            Have a question?
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter your question here..."
            />
          </label>
          <button type="submit">Submit</button>
        </form>

        {/* Success Message */}
        {submitted && <p className="success-message">Successfully submitted! Waiting for response.</p>}
      </div>

      <div className="faq-box-container">
        <h3>Frequently Asked Questions</h3>

        {/* Your existing FAQ content goes here */}
        <div className="faq-box">
          <h3>I'm not flexible - can I do yoga?</h3>
          <p>
            Yes! In fact, you are a perfect candidate for yoga. Many people think
            that they need to be flexible to begin yoga, but that’s a little bit
            like thinking that you need to be able to play tennis in order to
            take tennis lessons. Come as you are, and you will find that yoga
            practice will help you become more flexible. This newfound agility
            will be balanced by strength, coordination, as well as a sense of
            physical confidence and overall well-being.
          </p>
        </div>

        <div className="faq-box">
          <h3>I'm not fit - can I do yoga?</h3>
          <p>
            Yes, absolutely. There is no assumed level of fitness required for
            the yoga classes and workshops I teach. You could be a couch potato
            or an athlete; yoga can benefit everyone. Yoga can help you gain a
            sense of physical confidence and overall well-being.
          </p>
        </div>
        <div className="faq-box">
          <h3>What should I wear?</h3>
          <p>
          Some people wear baggy, loose fitting bottoms or shorts and a t shirt. Other people wear tight, stretchy leggings + tops. The only thing that matters is that you wear comfortable clothes that you can easily move and stretch in. It's good to have clothes that keep you cool when you are active in yoga, but to bring a jumper for relaxation, when the body rapidly cools down. Some people also bring socks and a jumper  (maybe even a small blanket) for the relaxation.
          </p>
        </div>
        <div className="faq-box">
          <h3>Do I need a yoga mat?</h3>
          <p>
          All the equipment, including mats, you need for class is provided.  If you prefer to bring your own yoga mat that's fine too. If you want to also practice at home then having your own mat is a great idea, they are available from lots of places and I also have ones you can buy like the ones we use in class.
          </p>
        </div>
        <div className="faq-box">
          <h3>When should I eat before a class?</h3>
          <p>
          When it comes to food and digestion, each individual is different and needs to find out what works for them. In general I do not recommend a eating a large meal within 2 hours of a class - if you must eat within 2 hours of a class then a light meal or snack that it easily digested is best. Its recommended to be hydrated before a class so drink some water.
          </p>
        </div>
        <div className="faq-box">
          <h3>What if I am late for a class?</h3>
          <p>
          Ideally, please arrive a few minutes before  the class starts. But things happen, and sometimes people are late, I totally understand. If you can let me know beforehand, but if not please still come to class, and just quietly enter the class so as not to disturb others. If you're pregnant or coming to a baby class, anytime you arrive is fine (even just for relaxation at the end!).
          </p>
        </div>
        <div className="faq-box">
          <h3>Why do I need to book a block of classes?</h3>
          <p>
          It takes a few classes to start to feel the benefits and make yoga part of your life. Classes are limited in space so it is necessary to book a place. If you miss a class you may be able to attend another one in the same block, or we may be able to carry it over to the next one. Contact me to discuss this.
          </p>
        </div>
        <div className="faq-box">
          <h3>How do I pay for classes?</h3>
          <p>
          To pay for classes please contact me, and you can make a direct transfer, pay with paypal or use a cheque or cash.
          </p>
        </div>
        <div className="faq-box">
          <h3>Why do I need to book a block of classes?</h3>
          <p>
          It takes a few classes to start to feel the benefits and make yoga part of your life. Classes are limited in space so it is necessary to book a place. If you miss a class you may be able to attend another one in the same block, or we may be able to carry it over to the next one. Contact me to discuss this.
          </p>
        </div>
        <div className="faq-box">
          <h3>How is yoga different from stretching, or other kinds of fitness?</h3>
          <p>
          Unlike stretching or other fitness training, yoga is more than just physically working your body. Within the physical practice of yoga we connect the movement of the body to the rhythm of our breath, which helps to focus and relax the mind by directing our attention inward. Yoga can improve your bodies strength, flexibilty and balance, whilst also calming your mind and improving your posture and how you breath.
          </p>
        </div>
        <div className="faq-box">
          <h3>What is yoga?</h3>
          <p>
          Yoga focuses on strength, flexibility and breathing to enhance both physical and mental wellbeing. It originated in India many hundreds of years ago, and has continually evolved towards the form that is popular throughout the world today. There are many different styles of yoga practices today. My approach although rooted in this amazing centuries old  tradition, is modern and straightforward in approach to make it accessible and welcoming to all.
          </p>
        </div>
        {/* Add more questions as needed */}
      </div>
    </div>
  );
};

export default Faq;
=======
import React, { useState } from 'react';
import '../assets/css/Faq.css'; // Import your Faq.css file

const Faq = () => {
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission logic here (send to server, etc.)
    // For now, we'll just set submitted to true
    setSubmitted(true);
  };

  return (
      <div className="faq-container">
      <div className="user-query-container">
        <p>If you have any questions not answered here, please do not hesitate to get in touch. No question is silly!</p>
        {/* Submission Form */}
        <form onSubmit={handleSubmit}>
          <label>
            Have a question?
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter your question here..."
            />
          </label>
          <button type="submit">Submit</button>
        </form>

        {/* Success Message */}
        {submitted && <p className="success-message">Successfully submitted! Waiting for response.</p>}
      </div>

      <div className="faq-box-container">
        <h3>Frequently Asked Questions</h3>

        {/* Your existing FAQ content goes here */}
        <div className="faq-box">
          <h3>I'm not flexible - can I do yoga?</h3>
          <p>
            Yes! In fact, you are a perfect candidate for yoga. Many people think
            that they need to be flexible to begin yoga, but that’s a little bit
            like thinking that you need to be able to play tennis in order to
            take tennis lessons. Come as you are, and you will find that yoga
            practice will help you become more flexible. This newfound agility
            will be balanced by strength, coordination, as well as a sense of
            physical confidence and overall well-being.
          </p>
        </div>

        <div className="faq-box">
          <h3>I'm not fit - can I do yoga?</h3>
          <p>
            Yes, absolutely. There is no assumed level of fitness required for
            the yoga classes and workshops I teach. You could be a couch potato
            or an athlete; yoga can benefit everyone. Yoga can help you gain a
            sense of physical confidence and overall well-being.
          </p>
        </div>
        <div className="faq-box">
          <h3>What should I wear?</h3>
          <p>
          Some people wear baggy, loose fitting bottoms or shorts and a t shirt. Other people wear tight, stretchy leggings + tops. The only thing that matters is that you wear comfortable clothes that you can easily move and stretch in. It's good to have clothes that keep you cool when you are active in yoga, but to bring a jumper for relaxation, when the body rapidly cools down. Some people also bring socks and a jumper  (maybe even a small blanket) for the relaxation.
          </p>
        </div>
        <div className="faq-box">
          <h3>Do I need a yoga mat?</h3>
          <p>
          All the equipment, including mats, you need for class is provided.  If you prefer to bring your own yoga mat that's fine too. If you want to also practice at home then having your own mat is a great idea, they are available from lots of places and I also have ones you can buy like the ones we use in class.
          </p>
        </div>
        <div className="faq-box">
          <h3>When should I eat before a class?</h3>
          <p>
          When it comes to food and digestion, each individual is different and needs to find out what works for them. In general I do not recommend a eating a large meal within 2 hours of a class - if you must eat within 2 hours of a class then a light meal or snack that it easily digested is best. Its recommended to be hydrated before a class so drink some water.
          </p>
        </div>
        <div className="faq-box">
          <h3>What if I am late for a class?</h3>
          <p>
          Ideally, please arrive a few minutes before  the class starts. But things happen, and sometimes people are late, I totally understand. If you can let me know beforehand, but if not please still come to class, and just quietly enter the class so as not to disturb others. If you're pregnant or coming to a baby class, anytime you arrive is fine (even just for relaxation at the end!).
          </p>
        </div>
        <div className="faq-box">
          <h3>Why do I need to book a block of classes?</h3>
          <p>
          It takes a few classes to start to feel the benefits and make yoga part of your life. Classes are limited in space so it is necessary to book a place. If you miss a class you may be able to attend another one in the same block, or we may be able to carry it over to the next one. Contact me to discuss this.
          </p>
        </div>
        <div className="faq-box">
          <h3>How do I pay for classes?</h3>
          <p>
          To pay for classes please contact me, and you can make a direct transfer, pay with paypal or use a cheque or cash.
          </p>
        </div>
        <div className="faq-box">
          <h3>Why do I need to book a block of classes?</h3>
          <p>
          It takes a few classes to start to feel the benefits and make yoga part of your life. Classes are limited in space so it is necessary to book a place. If you miss a class you may be able to attend another one in the same block, or we may be able to carry it over to the next one. Contact me to discuss this.
          </p>
        </div>
        <div className="faq-box">
          <h3>How is yoga different from stretching, or other kinds of fitness?</h3>
          <p>
          Unlike stretching or other fitness training, yoga is more than just physically working your body. Within the physical practice of yoga we connect the movement of the body to the rhythm of our breath, which helps to focus and relax the mind by directing our attention inward. Yoga can improve your bodies strength, flexibilty and balance, whilst also calming your mind and improving your posture and how you breath.
          </p>
        </div>
        <div className="faq-box">
          <h3>What is yoga?</h3>
          <p>
          Yoga focuses on strength, flexibility and breathing to enhance both physical and mental wellbeing. It originated in India many hundreds of years ago, and has continually evolved towards the form that is popular throughout the world today. There are many different styles of yoga practices today. My approach although rooted in this amazing centuries old  tradition, is modern and straightforward in approach to make it accessible and welcoming to all.
          </p>
        </div>
        {/* Add more questions as needed */}
      </div>
    </div>
  );
};

export default Faq;
>>>>>>> ee95a7b5ddd4d03b66daaf354fe62178931e0b79

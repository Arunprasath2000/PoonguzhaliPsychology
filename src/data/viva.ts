import type { VivaQuestion } from "./types";

// Viva (oral exam) mode: an examiner-style question, a model answer to reveal,
// and follow-up probes the examiner might ask next.

export const VIVA: VivaQuestion[] = [
  {
    id: "v-1",
    category: "disorders",
    question: "Explain the difference between Bipolar I and Bipolar II.",
    modelAnswer:
      "Both are mood disorders with alternating highs and lows. Bipolar I requires at least one full manic episode lasting seven days or more (or needing hospitalisation), which can be severe enough to include psychosis; depression is common but not required. Bipolar II requires at least one hypomanic episode — a milder high of four or more days — together with a major depressive episode, and crucially the person has never had a full manic episode. If they ever do, the diagnosis becomes Bipolar I.",
    followUps: [
      "How long must a manic episode last?",
      "Can Bipolar II include psychosis?",
      "Which type often has more disabling depression?",
    ],
  },
  {
    id: "v-2",
    category: "psychoanalysis",
    question: "Describe Freud's defense mechanisms with examples.",
    modelAnswer:
      "Defense mechanisms are unconscious strategies the ego uses to reduce anxiety from conflict between the id, superego, and reality. Repression pushes distressing thoughts out of awareness. Denial refuses to accept reality. Projection attributes one's own unacceptable feelings to others. Displacement redirects an impulse onto a safer target, such as shouting at family after being scolded by a boss. Sublimation, considered the healthiest, channels impulses into socially useful activity like sport or art. Regression reverts to childlike behaviour, and rationalisation invents logical-sounding excuses.",
    followUps: [
      "Which defense mechanism is considered the healthiest?",
      "Which part of the psyche uses defense mechanisms?",
      "Give an everyday example of projection.",
    ],
  },
  {
    id: "v-3",
    category: "psychoanalysis",
    question: "Outline Freud's structural model of the mind.",
    modelAnswer:
      "Freud divided the psyche into three parts. The id is present at birth, entirely unconscious, and operates on the pleasure principle, seeking immediate gratification. The superego is the internalised moral conscience striving for perfection. The ego is the realistic mediator operating on the reality principle, balancing the id's demands against the superego's rules and external reality. Anxiety arises when the ego struggles to keep these forces balanced, prompting defense mechanisms.",
    followUps: [
      "Which structure is present from birth?",
      "What principle does the ego operate on?",
      "How does this model relate to defense mechanisms?",
    ],
  },
  {
    id: "v-4",
    category: "development",
    question: "Walk me through Piaget's stages of cognitive development.",
    modelAnswer:
      "Piaget proposed four stages. In the sensorimotor stage (0–2) infants learn through senses and actions and develop object permanence. In the preoperational stage (2–7) children use symbols and language but are egocentric and lack conservation. In the concrete operational stage (7–11) they think logically about concrete objects and master conservation and reversibility. In the formal operational stage (11 and up) they can reason abstractly and hypothetically. Children build knowledge through schemas, adjusting them by assimilation and accommodation.",
    followUps: [
      "What is object permanence, and when does it appear?",
      "Define conservation.",
      "Explain assimilation versus accommodation.",
    ],
  },
  {
    id: "v-5",
    category: "learning",
    question: "Compare classical and operant conditioning.",
    modelAnswer:
      "Classical conditioning, studied by Pavlov, links two stimuli so that a neutral stimulus comes to trigger an automatic, involuntary response; the learner is passive. Operant conditioning, studied by Skinner, shapes voluntary behaviour through its consequences — reinforcement increases behaviour and punishment decreases it, and the learner actively operates on the environment. In short, classical is stimulus–stimulus and reflexive, while operant is behaviour–consequence and voluntary.",
    followUps: [
      "Is negative reinforcement the same as punishment?",
      "Which schedule produces the most persistent behaviour?",
      "Give an example of classical conditioning.",
    ],
  },
  {
    id: "v-6",
    category: "cognition",
    question: "Explain the multi-store model of memory.",
    modelAnswer:
      "The Atkinson–Shiffrin model proposes three stores. Sensory memory holds a large amount of information very briefly; attention transfers some of it to short-term memory, which holds about seven plus or minus two items for roughly fifteen to thirty seconds. Rehearsal then transfers information into long-term memory, which is potentially unlimited and long-lasting. Later, Baddeley and Hitch refined short-term memory into a working memory system with a central executive, phonological loop, and visuospatial sketchpad.",
    followUps: [
      "What is the capacity of short-term memory?",
      "What process moves information from sensory to short-term memory?",
      "How did the working memory model improve on this?",
    ],
  },
  {
    id: "v-7",
    category: "social",
    question: "What is the difference between conformity and obedience?",
    modelAnswer:
      "Both are forms of social influence. Conformity is changing one's behaviour or beliefs to match a group of peers, often through implicit pressure — demonstrated by Asch's line experiments. Obedience is following a direct order from an authority figure, demonstrated by Milgram's shock experiments where ordinary people administered apparently dangerous shocks when instructed. So conformity comes from peers and is usually implicit, while obedience comes from authority and is explicit.",
    followUps: [
      "Name the classic study for each.",
      "What are compliance, identification, and internalisation?",
      "Why did Milgram's participants obey?",
    ],
  },
  {
    id: "v-8",
    category: "social",
    question: "Explain cognitive dissonance with a classic study.",
    modelAnswer:
      "Cognitive dissonance, proposed by Festinger, is the uncomfortable tension we feel when holding two inconsistent beliefs or acting against a belief. We are motivated to reduce it by changing a belief, changing behaviour, or adding a justification. In Festinger and Carlsmith's study, participants paid only one dollar to tell others a boring task was enjoyable later rated it as more enjoyable than those paid twenty dollars, because with little external justification they changed their own attitude to reduce the dissonance.",
    followUps: [
      "Why did the $1 group change their attitude more?",
      "Name three ways to reduce dissonance.",
      "Who proposed the theory?",
    ],
  },
  {
    id: "v-9",
    category: "personality",
    question: "Describe the Big Five model of personality.",
    modelAnswer:
      "The Five-Factor Model describes personality along five broad dimensions remembered as OCEAN: Openness, which is curiosity and imagination; Conscientiousness, which is organisation and discipline; Extraversion, which is sociability and energy from others; Agreeableness, which is compassion and cooperation; and Neuroticism, which is emotional instability and anxiety. These traits are dimensional rather than categorical, are stable over time, show heritability, and appear across cultures, making it the most empirically supported trait model.",
    followUps: [
      "What does each letter of OCEAN stand for?",
      "Which trait best predicts academic success?",
      "How is a trait model different from a type model?",
    ],
  },
  {
    id: "v-10",
    category: "biological",
    question: "Describe how neurons communicate.",
    modelAnswer:
      "A neuron receives signals through its dendrites, integrates them in the cell body, and sends an electrical action potential down the axon, which is sped up by the myelin sheath. At the terminal buttons the electrical signal triggers the release of neurotransmitters into the synapse, the gap between neurons. These chemicals bind to receptors on the next neuron. So communication is electrical within a neuron and chemical between neurons, and leftover neurotransmitter is cleared by reuptake — the process many antidepressants target.",
    followUps: [
      "What does the myelin sheath do?",
      "How do SSRIs affect this process?",
      "Name a neurotransmitter and its function.",
    ],
  },
  {
    id: "v-11",
    category: "therapy",
    question: "What is CBT and why is it effective?",
    modelAnswer:
      "Cognitive Behavioural Therapy is based on the principle that thoughts, feelings, and behaviours are interconnected, so changing unhelpful thoughts and behaviours improves emotions. The therapist helps the client identify cognitive distortions such as catastrophising or all-or-nothing thinking and test them against reality through cognitive restructuring, alongside behavioural techniques like activity scheduling and exposure. It is present-focused, structured, and time-limited, with strong research evidence for depression and anxiety.",
    followUps: [
      "Name two cognitive distortions.",
      "How does CBT differ from psychodynamic therapy?",
      "What behavioural technique treats phobias?",
    ],
  },
  {
    id: "v-12",
    category: "research",
    question: "Explain the difference between reliability and validity.",
    modelAnswer:
      "Reliability is the consistency of a measure — whether it gives the same result on repeated testing, across items, or between different raters. Validity is its accuracy — whether it actually measures what it claims to measure. A useful example is a bathroom scale that always reads two kilograms too heavy: it is reliable because it is consistent, but not valid because it is wrong. Importantly, a measure can be reliable without being valid, but it cannot be truly valid without also being reliable.",
    followUps: [
      "Give an example of something reliable but not valid.",
      "Name a type of validity.",
      "Can a test be valid but unreliable?",
    ],
  },
];

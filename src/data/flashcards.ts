import type { Flashcard } from "./types";

// Front = prompt/term, Back = concise answer. Used by Flashcards mode with a
// flip animation and a swipe/known-unknown tracker.

export const FLASHCARDS: Flashcard[] = [
  { id: "f-1", category: "disorders", front: "Bipolar I requires...", back: "At least one full manic episode (≥7 days). Depression optional." },
  { id: "f-2", category: "disorders", front: "Bipolar II requires...", back: "Hypomania + major depression, but never full mania." },
  { id: "f-3", category: "disorders", front: "Anhedonia", back: "Loss of interest or pleasure in activities — a core depression symptom." },
  { id: "f-4", category: "disorders", front: "Positive vs negative symptoms of schizophrenia", back: "Positive = added (hallucinations, delusions). Negative = lost (flat affect, avolition)." },
  { id: "f-5", category: "disorders", front: "Obsession vs compulsion", back: "Obsession = intrusive thought; compulsion = the repetitive act done to relieve it." },
  { id: "f-6", category: "disorders", front: "PTSD duration cutoff", back: ">1 month = PTSD; <1 month = Acute Stress Disorder." },
  { id: "f-7", category: "disorders", front: "Neurosis vs psychosis", back: "Neurosis keeps insight & reality; psychosis loses touch with reality." },

  { id: "f-8", category: "psychoanalysis", front: "Repression", back: "Pushing distressing thoughts out of conscious awareness — the master defense." },
  { id: "f-9", category: "psychoanalysis", front: "Projection", back: "Attributing your own unacceptable feelings to another person." },
  { id: "f-10", category: "psychoanalysis", front: "Sublimation", back: "Channeling unacceptable impulses into socially useful activity — the healthiest defense." },
  { id: "f-11", category: "psychoanalysis", front: "Displacement", back: "Redirecting an impulse from a threatening target onto a safer one." },
  { id: "f-12", category: "psychoanalysis", front: "Id / Ego / Superego", back: "Id = pleasure principle; Superego = morality; Ego = reality principle (mediator)." },
  { id: "f-13", category: "psychoanalysis", front: "Psychosexual stages (in order)", back: "Oral, Anal, Phallic, Latency, Genital." },
  { id: "f-14", category: "psychoanalysis", front: "Freud's iceberg", back: "Conscious (tip), Preconscious (retrievable), Unconscious (vast hidden driver)." },

  { id: "f-15", category: "development", front: "Piaget's 4 stages", back: "Sensorimotor, Preoperational, Concrete operational, Formal operational." },
  { id: "f-16", category: "development", front: "Object permanence", back: "Knowing objects still exist when out of sight — sensorimotor stage." },
  { id: "f-17", category: "development", front: "Assimilation vs accommodation", back: "Assimilation = fit new info into old schema; accommodation = change the schema." },
  { id: "f-18", category: "development", front: "Erikson: adolescence", back: "Identity vs Role Confusion." },
  { id: "f-19", category: "development", front: "Kohlberg's 3 levels", back: "Preconventional (punishment/reward), Conventional (approval/law), Postconventional (principles)." },
  { id: "f-20", category: "development", front: "Secure attachment", back: "Distressed at separation, comforted at reunion; uses caregiver as a safe base." },

  { id: "f-21", category: "learning", front: "Classical conditioning", back: "Associating two stimuli to produce an involuntary response (Pavlov)." },
  { id: "f-22", category: "learning", front: "Operant conditioning", back: "Learning voluntary behaviour through consequences (Skinner)." },
  { id: "f-23", category: "learning", front: "Negative reinforcement", back: "Removing an unpleasant stimulus to INCREASE behaviour (not punishment!)." },
  { id: "f-24", category: "learning", front: "Variable ratio schedule", back: "Reward after unpredictable number of responses — highest, most persistent rate." },
  { id: "f-25", category: "learning", front: "Bobo doll study", back: "Bandura — children imitate observed aggression (observational learning)." },

  { id: "f-26", category: "cognition", front: "Multi-store memory model", back: "Sensory → Short-term → Long-term (attention & rehearsal move info along)." },
  { id: "f-27", category: "cognition", front: "STM capacity", back: "About 7 ± 2 items (Miller); duration ~15–30 seconds." },
  { id: "f-28", category: "cognition", front: "Episodic vs semantic memory", back: "Episodic = personal events; semantic = facts/general knowledge." },
  { id: "f-29", category: "cognition", front: "Proactive interference", back: "OLD learning interferes with recalling NEW information." },
  { id: "f-30", category: "cognition", front: "Confirmation bias", back: "Seeking/favouring information that confirms existing beliefs." },

  { id: "f-31", category: "social", front: "Conformity vs obedience", back: "Conformity = peer/group pressure (Asch); obedience = authority's order (Milgram)." },
  { id: "f-32", category: "social", front: "Fundamental Attribution Error", back: "Over-attributing others' behaviour to character, underrating the situation." },
  { id: "f-33", category: "social", front: "Self-serving bias", back: "Crediting success to self, blaming failure on the situation." },
  { id: "f-34", category: "social", front: "Cognitive dissonance", back: "Discomfort from conflicting beliefs/actions, motivating change (Festinger)." },

  { id: "f-35", category: "personality", front: "Big Five (OCEAN)", back: "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism." },
  { id: "f-36", category: "personality", front: "Self-actualisation", back: "Top of Maslow's hierarchy — realising one's full potential." },
  { id: "f-37", category: "personality", front: "Diathesis–stress model", back: "A predisposition (diathesis) + a stressor triggers a disorder." },

  { id: "f-38", category: "biological", front: "Dopamine", back: "Reward, motivation, movement; linked to Parkinson's and schizophrenia." },
  { id: "f-39", category: "biological", front: "GABA vs glutamate", back: "GABA = main inhibitory (calming); glutamate = main excitatory." },
  { id: "f-40", category: "biological", front: "Sympathetic vs parasympathetic", back: "Sympathetic = fight/flight; parasympathetic = rest/digest." },
  { id: "f-41", category: "biological", front: "Reuptake", back: "Reabsorption of neurotransmitter from the synapse; SSRIs block serotonin reuptake." },

  { id: "f-42", category: "therapy", front: "CBT core idea", back: "Thoughts, feelings, and behaviours are linked; change thinking/behaviour to feel better." },
  { id: "f-43", category: "therapy", front: "Unconditional positive regard", back: "Rogers' humanistic technique — full acceptance of the client." },
  { id: "f-44", category: "therapy", front: "SSRIs", back: "Antidepressants that increase serotonin availability by blocking reuptake." },

  { id: "f-45", category: "research", front: "IV vs DV", back: "IV = manipulated (cause); DV = measured (effect)." },
  { id: "f-46", category: "research", front: "Reliability vs validity", back: "Reliability = consistency; validity = measuring the right thing." },
  { id: "f-47", category: "research", front: "Correlation coefficient range", back: "−1 to +1; correlation does not equal causation." },
  { id: "f-48", category: "research", front: "Debriefing", back: "Explaining the study's true purpose to participants afterward." },
];

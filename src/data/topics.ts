import type { Topic } from "./types";

// Curated, exam-oriented psychology explanations written in plain language.
// Body text supports a tiny markdown subset: **bold**, "- " bullets, and blank
// lines between paragraphs (see MarkText.tsx for the renderer).

export const TOPICS: Topic[] = [
  // ─────────────────────────── DISORDERS ───────────────────────────
  {
    id: "bipolar-i-vs-ii",
    title: "Bipolar I vs Bipolar II",
    category: "disorders",
    tags: ["mood disorder", "mania", "hypomania", "depression", "dsm-5"],
    summary:
      "Bipolar I needs at least one full manic episode; Bipolar II needs hypomania plus major depression, but never full mania.",
    body: `Both are **mood disorders** where a person swings between high-energy states and low, depressed states. The difference is how *intense* the "high" gets.

**Bipolar I** requires at least one full **manic episode** — an extreme high lasting 7+ days (or any length if hospitalisation is needed). Mania can be severe enough to cause psychosis or serious life disruption. Depression often occurs but is not required for the diagnosis.

**Bipolar II** requires at least one **hypomanic episode** (a milder high, 4+ days) *and* at least one **major depressive episode**. The person has never had a full manic episode — if they ever do, the diagnosis becomes Bipolar I.

A common myth is that Bipolar II is just a "lighter" version. In reality the *depressive* side of Bipolar II is often longer and more disabling than in Bipolar I.`,
    keyPoints: [
      "Bipolar I = ≥1 full manic episode (depression optional).",
      "Bipolar II = hypomania + major depression, never full mania.",
      "Mania ≥7 days; hypomania ≥4 days and less severe.",
      "One full manic episode ever = Bipolar I, not II.",
      "Bipolar II depression can be more disabling than the highs.",
    ],
    compare: {
      label: "Bipolar I vs Bipolar II",
      a: "Bipolar I",
      b: "Bipolar II",
      rows: [
        ["Required high", "Full mania (≥7 days)", "Hypomania (≥4 days)"],
        ["Depression", "Common, not required", "Required (major depression)"],
        ["Severity of high", "Severe, can need hospital", "Milder, rarely hospitalised"],
        ["Psychosis in the high", "Possible", "Never (would reclassify as I)"],
      ],
    },
    mnemonic: "II = the 'quieter' number → hypomania, not full mania.",
  },
  {
    id: "depression-mdd",
    title: "Major Depressive Disorder (MDD)",
    category: "disorders",
    tags: ["depression", "mood", "mdd", "sig e caps"],
    summary:
      "A period of 2+ weeks with depressed mood or loss of interest plus several other symptoms that impair daily life.",
    body: `**Major Depressive Disorder** is diagnosed when someone has a **major depressive episode**: at least 2 weeks of either depressed mood or loss of interest/pleasure (**anhedonia**), plus additional symptoms, causing real impairment.

You need **5 of 9** symptoms, and at least one must be depressed mood or anhedonia. A classic memory aid is **SIG E CAPS**:
- **S**leep changes
- **I**nterest loss (anhedonia)
- **G**uilt / worthlessness
- **E**nergy loss
- **C**oncentration problems
- **A**ppetite/weight change
- **P**sychomotor changes (agitation or slowing)
- **S**uicidal thoughts

Depression is more than sadness — it is a persistent, whole-body change in mood, thinking, and functioning.`,
    keyPoints: [
      "≥2 weeks; ≥5 of 9 symptoms.",
      "Must include depressed mood OR anhedonia.",
      "Remember with SIG E CAPS.",
      "Causes clinically significant impairment.",
    ],
    mnemonic: "SIG E CAPS — Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidality.",
  },
  {
    id: "anxiety-vs-fear",
    title: "Anxiety vs Fear",
    category: "disorders",
    tags: ["anxiety", "fear", "gad", "panic"],
    summary:
      "Fear is a response to a present, real threat; anxiety is anticipation of a future, often uncertain threat.",
    body: `Though used interchangeably in daily talk, psychology separates them.

**Fear** is the alarm reaction to an **immediate, identifiable danger** — a snake in front of you. It triggers the fight-or-flight response *now*.

**Anxiety** is oriented to the **future**: worry and tension about something that *might* happen, often vague or uncertain. Muscle tension, restlessness, and dread are common.

Generalised Anxiety Disorder (GAD) involves excessive, hard-to-control worry more days than not for 6+ months.`,
    keyPoints: [
      "Fear = present, specific threat.",
      "Anxiety = future-oriented, uncertain threat.",
      "Both use the sympathetic nervous system.",
      "GAD = uncontrollable worry ≥6 months.",
    ],
  },
  {
    id: "ocd",
    title: "Obsessive-Compulsive Disorder (OCD)",
    category: "disorders",
    tags: ["ocd", "obsessions", "compulsions", "anxiety"],
    summary:
      "Intrusive, unwanted thoughts (obsessions) drive repetitive behaviours (compulsions) done to reduce distress.",
    body: `**OCD** has two linked parts.

**Obsessions** are recurrent, intrusive, unwanted thoughts, urges, or images (e.g., fear of contamination) that cause anxiety.

**Compulsions** are repetitive behaviours or mental acts (e.g., hand-washing, checking, counting) performed to neutralise the obsession or prevent a feared outcome. Relief is temporary, which reinforces the cycle.

The person usually *knows* the behaviour is excessive but feels driven to do it. It becomes a disorder when it consumes time (often >1 hour/day) or impairs functioning.`,
    keyPoints: [
      "Obsession = intrusive thought; compulsion = the ritual to relieve it.",
      "Relief is temporary → reinforces the loop.",
      "Insight is often intact (person knows it's excessive).",
      "Treated with ERP (exposure & response prevention) + SSRIs.",
    ],
  },
  {
    id: "schizophrenia-symptoms",
    title: "Schizophrenia: Positive vs Negative Symptoms",
    category: "disorders",
    tags: ["schizophrenia", "psychosis", "hallucinations", "delusions"],
    summary:
      "Positive symptoms add abnormal experiences (hallucinations, delusions); negative symptoms remove normal functions (flat affect, avolition).",
    body: `**Schizophrenia** is a chronic psychotic disorder affecting thought, perception, and behaviour. Symptoms are grouped by whether they *add* or *subtract*.

**Positive symptoms** are excesses added to normal experience:
- Hallucinations (often auditory)
- Delusions (fixed false beliefs)
- Disorganised speech and behaviour

**Negative symptoms** are deficits — normal functions lost:
- Flat/blunted affect
- Avolition (lack of motivation)
- Alogia (poverty of speech)
- Anhedonia and social withdrawal

There are also **cognitive symptoms** (poor attention, memory). Positive symptoms respond better to antipsychotics; negative symptoms are harder to treat.`,
    keyPoints: [
      "Positive = added (hallucinations, delusions).",
      "Negative = taken away (flat affect, avolition, alogia).",
      "'Positive/negative' means added/subtracted, NOT good/bad.",
      "Diagnosis needs symptoms for ≥6 months (DSM-5).",
    ],
    compare: {
      label: "Positive vs Negative Symptoms",
      a: "Positive",
      b: "Negative",
      rows: [
        ["Meaning", "Added experiences", "Lost functions"],
        ["Examples", "Hallucinations, delusions", "Flat affect, avolition"],
        ["Drug response", "Better", "Poorer"],
      ],
    },
  },
  {
    id: "ptsd",
    title: "Post-Traumatic Stress Disorder (PTSD)",
    category: "disorders",
    tags: ["ptsd", "trauma", "flashbacks", "hyperarousal"],
    summary:
      "A disorder after trauma marked by intrusion (flashbacks), avoidance, negative mood/cognition, and hyperarousal.",
    body: `**PTSD** develops after exposure to actual or threatened death, serious injury, or violence. Four symptom clusters:
- **Intrusion** — flashbacks, nightmares, unwanted memories.
- **Avoidance** — steering clear of reminders.
- **Negative changes in mood/cognition** — guilt, detachment, distorted blame.
- **Arousal/reactivity** — hypervigilance, startle, irritability, sleep problems.

Symptoms last **more than 1 month**. If similar symptoms occur and resolve within a month of the trauma, it is **Acute Stress Disorder** instead.`,
    keyPoints: [
      "Four clusters: intrusion, avoidance, negative mood, hyperarousal.",
      ">1 month duration for PTSD.",
      "<1 month = Acute Stress Disorder.",
      "Trauma-focused CBT and EMDR are evidence-based treatments.",
    ],
  },
  {
    id: "neurosis-vs-psychosis",
    title: "Neurosis vs Psychosis",
    category: "disorders",
    tags: ["neurosis", "psychosis", "insight", "reality"],
    summary:
      "In neurosis contact with reality and insight are kept; in psychosis the person loses touch with reality.",
    body: `These older but exam-relevant terms contrast severity.

**Neurosis** covers distressing but reality-based conditions (anxiety, phobias, mild depression). The person keeps **insight** — they know something is wrong — and stays in contact with reality.

**Psychosis** involves a **break from reality**: hallucinations, delusions, and usually **poor insight**. Schizophrenia and severe bipolar/depressive episodes with psychotic features are examples.`,
    keyPoints: [
      "Neurosis → insight kept, reality intact.",
      "Psychosis → insight lost, reality distorted.",
      "Neurosis is distressing but not detached from reality.",
    ],
    compare: {
      label: "Neurosis vs Psychosis",
      a: "Neurosis",
      b: "Psychosis",
      rows: [
        ["Reality contact", "Preserved", "Lost"],
        ["Insight", "Present", "Usually absent"],
        ["Examples", "Anxiety, phobia", "Schizophrenia"],
      ],
    },
  },

  // ─────────────────────── PSYCHOANALYSIS ───────────────────────
  {
    id: "freud-defense-mechanisms",
    title: "Freud's Defense Mechanisms",
    category: "psychoanalysis",
    tags: ["freud", "defense mechanisms", "ego", "unconscious", "repression"],
    summary:
      "Unconscious strategies the ego uses to protect itself from anxiety and unacceptable impulses.",
    body: `**Defense mechanisms** are unconscious tactics the **ego** uses to manage anxiety caused by conflict between the **id** (desires), **superego** (morals), and reality. They distort reality to protect the self. First described by Freud and expanded by his daughter Anna Freud.

Common mechanisms:
- **Repression** — pushing distressing thoughts out of awareness. (The master defense.)
- **Denial** — refusing to accept reality ("I'm not sick").
- **Projection** — attributing your own unacceptable feelings to others ("*You* hate me").
- **Displacement** — redirecting an impulse onto a safer target (angry at boss → shout at family).
- **Sublimation** — channeling impulses into socially useful activity (aggression → sport). *The healthiest.*
- **Regression** — reverting to earlier, childlike behaviour under stress.
- **Rationalisation** — inventing logical excuses for unacceptable behaviour.
- **Reaction formation** — acting the opposite of a threatening feeling.

Everyone uses them; they become unhealthy only when overused or rigid.`,
    keyPoints: [
      "Used by the EGO to reduce anxiety, operate unconsciously.",
      "Repression is the foundational defense.",
      "Sublimation is considered the most mature/healthy.",
      "Projection = your feelings seen in others.",
      "Displacement = impulse redirected to a safer target.",
    ],
    mnemonic: "Sublimation is 'sublime' → the healthiest defense.",
  },
  {
    id: "id-ego-superego",
    title: "Id, Ego, and Superego",
    category: "psychoanalysis",
    tags: ["freud", "id", "ego", "superego", "structural model"],
    summary:
      "Freud's three-part mind: the impulsive id, the moral superego, and the mediating ego.",
    body: `Freud's **structural model** divides the psyche into three parts.

- **Id** — present at birth, fully unconscious. Runs on the **pleasure principle**: wants immediate gratification of drives (hunger, sex, aggression).
- **Superego** — the internalised moral conscience ("should/shouldn't"), striving for perfection.
- **Ego** — the realistic mediator. Runs on the **reality principle**, balancing the id's demands, the superego's rules, and the outside world.

Anxiety arises when the ego struggles to keep these forces balanced, prompting defense mechanisms.`,
    keyPoints: [
      "Id = pleasure principle (wants it now).",
      "Superego = morality/conscience.",
      "Ego = reality principle (the mediator).",
      "Only the ego deals directly with reality.",
    ],
    compare: {
      label: "The three structures",
      a: "Id",
      b: "Superego",
      rows: [
        ["Principle", "Pleasure", "Morality"],
        ["Wants", "Immediate gratification", "Perfection / ideals"],
        ["Awareness", "Unconscious", "Partly conscious"],
      ],
    },
  },
  {
    id: "psychosexual-stages",
    title: "Freud's Psychosexual Stages",
    category: "psychoanalysis",
    tags: ["freud", "psychosexual", "oral", "anal", "phallic", "fixation"],
    summary:
      "Five stages (oral, anal, phallic, latency, genital) where libido focuses on different body zones; unresolved conflict causes fixation.",
    body: `Freud proposed personality forms through five **psychosexual stages**, each centred on a pleasure zone. Conflict that is not resolved leads to **fixation**.

- **Oral** (0–1): mouth. Fixation → smoking, overeating, dependency.
- **Anal** (1–3): toilet training. Fixation → orderly/stingy ("anal-retentive") or messy.
- **Phallic** (3–6): genitals; the **Oedipus/Electra complex** appears.
- **Latency** (6–puberty): sexual urges dormant; focus on skills and friends.
- **Genital** (puberty on): mature sexual interest in others.

**Mnemonic: "Old Age Pensioners Love Grapes."**`,
    keyPoints: [
      "Order: Oral, Anal, Phallic, Latency, Genital.",
      "Unresolved conflict → fixation.",
      "Oedipus/Electra complex is in the phallic stage.",
      "Latency has no libidinal focus.",
    ],
    mnemonic: "Old (Oral) Age (Anal) Pensioners (Phallic) Love (Latency) Grapes (Genital).",
  },
  {
    id: "unconscious-mind",
    title: "Conscious, Preconscious, Unconscious",
    category: "psychoanalysis",
    tags: ["freud", "iceberg", "unconscious", "topographic"],
    summary:
      "Freud's iceberg: a small conscious tip, a retrievable preconscious, and a vast hidden unconscious that drives behaviour.",
    body: `Freud's **topographic model** compares the mind to an **iceberg**.

- **Conscious** — the small tip: what you are aware of right now.
- **Preconscious** — just below the surface: memories you can easily bring to mind.
- **Unconscious** — the huge hidden mass: repressed wishes, fears, and drives that shape behaviour without our awareness.

Freud believed the unconscious surfaces through dreams, slips of the tongue ("Freudian slips"), and symptoms.`,
    keyPoints: [
      "Conscious = current awareness (tip).",
      "Preconscious = easily retrievable.",
      "Unconscious = hidden but powerful driver.",
      "Revealed via dreams and slips.",
    ],
  },

  // ─────────────────────── DEVELOPMENT ───────────────────────
  {
    id: "piaget-stages",
    title: "Piaget's Stages of Cognitive Development",
    category: "development",
    tags: ["piaget", "cognitive development", "object permanence", "conservation"],
    summary:
      "Four stages of how children think: sensorimotor, preoperational, concrete operational, formal operational.",
    body: `Piaget said children actively build knowledge through **schemas**, adjusting them via **assimilation** (fitting new info into existing schemas) and **accommodation** (changing schemas for new info). Thinking matures in four stages:

- **Sensorimotor** (0–2): learn through senses/actions; gain **object permanence**.
- **Preoperational** (2–7): symbols and language, but **egocentric** and lacking **conservation**.
- **Concrete operational** (7–11): logical thinking about concrete things; master conservation and reversibility.
- **Formal operational** (11+): abstract and hypothetical reasoning.`,
    keyPoints: [
      "Sensorimotor → object permanence.",
      "Preoperational → egocentrism, no conservation.",
      "Concrete operational → conservation, logic on concrete items.",
      "Formal operational → abstract/hypothetical thought.",
      "Assimilation vs accommodation adjust schemas.",
    ],
    mnemonic: "Some People Can Fly: Sensorimotor, Preoperational, Concrete, Formal.",
  },
  {
    id: "erikson-stages",
    title: "Erikson's Psychosocial Stages",
    category: "development",
    tags: ["erikson", "psychosocial", "identity", "lifespan"],
    summary:
      "Eight lifespan stages, each a social crisis to resolve (e.g., trust vs mistrust, identity vs role confusion).",
    body: `Erikson extended development across the **whole lifespan** as eight **psychosocial crises**. Resolving each builds a strength; failing leaves difficulty.

1. Trust vs Mistrust (infancy)
2. Autonomy vs Shame/Doubt (toddler)
3. Initiative vs Guilt (preschool)
4. Industry vs Inferiority (school age)
5. Identity vs Role Confusion (adolescence)
6. Intimacy vs Isolation (young adult)
7. Generativity vs Stagnation (middle age)
8. Integrity vs Despair (old age)

Unlike Freud, Erikson stressed **social** relationships over sexual drives and continued development into adulthood.`,
    keyPoints: [
      "8 stages across the whole lifespan.",
      "Adolescence = Identity vs Role Confusion (a favourite exam item).",
      "Each stage is a crisis to resolve.",
      "Social, not sexual, focus (vs Freud).",
    ],
  },
  {
    id: "kohlberg-moral",
    title: "Kohlberg's Stages of Moral Development",
    category: "development",
    tags: ["kohlberg", "moral development", "heinz dilemma"],
    summary:
      "Three levels of moral reasoning — preconventional, conventional, postconventional — each with two stages.",
    body: `Using dilemmas like the **Heinz dilemma**, Kohlberg mapped *how* people justify right and wrong, not what they choose.

- **Preconventional** (self-interest): 1) avoid punishment, 2) gain reward.
- **Conventional** (social rules): 3) be a "good boy/girl", 4) maintain law and order.
- **Postconventional** (abstract principles): 5) social contract, 6) universal ethical principles.

Reasoning matters more than the answer. Critics (e.g., Gilligan) argued the model underweights an ethic of **care** and had a male bias.`,
    keyPoints: [
      "3 levels × 2 stages = 6.",
      "Preconventional = punishment/reward.",
      "Conventional = approval/law.",
      "Postconventional = principles/ethics.",
      "Focuses on reasoning, not the choice.",
    ],
  },
  {
    id: "attachment-styles",
    title: "Attachment Styles (Ainsworth)",
    category: "development",
    tags: ["attachment", "ainsworth", "strange situation", "bowlby"],
    summary:
      "The Strange Situation identified secure, anxious-ambivalent, and avoidant attachment (later disorganised).",
    body: `Building on **Bowlby's** attachment theory, **Ainsworth's Strange Situation** observed infants' reactions to a caregiver leaving and returning.

- **Secure** — distressed at separation, comforted on reunion; caregiver is a safe base.
- **Anxious-ambivalent (resistant)** — very distressed, hard to soothe, clingy yet angry.
- **Avoidant** — little distress, avoids caregiver on return.
- **Disorganised** (added later) — confused, contradictory behaviour, often linked to frightening care.

Early attachment shapes later relationships.`,
    keyPoints: [
      "Method: the Strange Situation.",
      "Secure, anxious-ambivalent, avoidant, disorganised.",
      "Secure = uses caregiver as safe base.",
      "Bowlby (theory) → Ainsworth (measurement).",
    ],
  },

  // ─────────────────────── LEARNING ───────────────────────
  {
    id: "classical-vs-operant",
    title: "Classical vs Operant Conditioning",
    category: "learning",
    tags: ["pavlov", "skinner", "conditioning", "reinforcement", "behaviourism"],
    summary:
      "Classical links two stimuli to create an automatic response; operant links behaviour to its consequences.",
    body: `Two core forms of learning in behaviourism.

**Classical conditioning (Pavlov)** — an automatic, involuntary response gets linked to a new stimulus. A neutral stimulus (bell) paired with an unconditioned stimulus (food) becomes a **conditioned stimulus** that triggers a **conditioned response** (salivation). Learning is about *associating stimuli*; the learner is passive.

**Operant conditioning (Skinner)** — voluntary behaviour is shaped by **consequences**. Reinforcement increases behaviour; punishment decreases it. The learner is active and "operates" on the environment.`,
    keyPoints: [
      "Classical = stimulus–stimulus, involuntary (Pavlov).",
      "Operant = behaviour–consequence, voluntary (Skinner).",
      "Classical: learner passive; operant: learner active.",
      "Reinforcement ↑ behaviour, punishment ↓ behaviour.",
    ],
    compare: {
      label: "Classical vs Operant",
      a: "Classical",
      b: "Operant",
      rows: [
        ["Pioneer", "Pavlov", "Skinner"],
        ["Response type", "Involuntary/reflex", "Voluntary"],
        ["Mechanism", "Associate 2 stimuli", "Behaviour ↔ consequence"],
        ["Learner", "Passive", "Active"],
      ],
    },
  },
  {
    id: "reinforcement-punishment",
    title: "Reinforcement vs Punishment (Positive/Negative)",
    category: "learning",
    tags: ["reinforcement", "punishment", "skinner", "operant"],
    summary:
      "Reinforcement increases behaviour, punishment decreases it; positive means add a stimulus, negative means remove one.",
    body: `In operant conditioning, two dimensions combine.

- **Reinforcement** *increases* a behaviour; **punishment** *decreases* it.
- **Positive** means *adding* something; **negative** means *removing* something.

So:
- **Positive reinforcement** — add a pleasant stimulus (give a treat) → behaviour ↑.
- **Negative reinforcement** — remove an unpleasant stimulus (stop nagging) → behaviour ↑.
- **Positive punishment** — add an unpleasant stimulus (scold) → behaviour ↓.
- **Negative punishment** — remove a pleasant stimulus (take the phone) → behaviour ↓.

Key trap: **negative reinforcement is NOT punishment** — it still *increases* behaviour.`,
    keyPoints: [
      "Reinforcement ↑, punishment ↓.",
      "Positive = add, negative = remove.",
      "Negative reinforcement increases behaviour (common exam trap).",
      "Reinforcement is generally more effective than punishment.",
    ],
    compare: {
      label: "The 2×2 of consequences",
      a: "Reinforcement (↑)",
      b: "Punishment (↓)",
      rows: [
        ["Positive (add)", "Give a reward", "Add a scolding"],
        ["Negative (remove)", "Stop the nagging", "Remove the phone"],
      ],
    },
  },
  {
    id: "reinforcement-schedules",
    title: "Schedules of Reinforcement",
    category: "learning",
    tags: ["schedules", "ratio", "interval", "skinner"],
    summary:
      "Fixed/variable × ratio/interval schedules; variable ratio produces the highest, most resistant response rate.",
    body: `How often reinforcement is given changes behaviour strongly.

- **Fixed Ratio (FR)** — reward after a set number of responses (e.g., every 10th). High rate, brief pause after reward.
- **Variable Ratio (VR)** — reward after an unpredictable number (slot machines). **Highest, steadiest rate; most resistant to extinction.**
- **Fixed Interval (FI)** — reward for first response after a set time (weekly pay). "Scalloped" pattern.
- **Variable Interval (VI)** — reward after unpredictable time. Slow, steady.

**Ratio** schedules (based on count) generally beat **interval** schedules (based on time) for response rate.`,
    keyPoints: [
      "Ratio = number of responses; Interval = time.",
      "Variable ratio → highest rate & most extinction-resistant.",
      "Fixed interval → 'scalloped' response curve.",
      "Gambling works on variable ratio.",
    ],
  },
  {
    id: "observational-learning",
    title: "Observational Learning (Bandura)",
    category: "learning",
    tags: ["bandura", "bobo doll", "modelling", "social learning"],
    summary:
      "We learn by watching models; the Bobo doll study showed children imitate observed aggression.",
    body: `Bandura's **social learning theory** says we learn by **observing and imitating** others (models), not only through direct reinforcement.

His **Bobo doll experiment** showed children who watched an adult hit the doll imitated that aggression later. Learning was influenced by **vicarious reinforcement** (seeing the model rewarded or punished).

Four steps to model behaviour — **Attention, Retention, Reproduction, Motivation** (ARRM).`,
    keyPoints: [
      "Learn by watching models (no direct reward needed).",
      "Bobo doll = imitated aggression.",
      "Vicarious reinforcement matters.",
      "Steps: Attention, Retention, Reproduction, Motivation.",
    ],
    mnemonic: "ARRM the model: Attention, Retention, Reproduction, Motivation.",
  },

  // ─────────────────────── COGNITION ───────────────────────
  {
    id: "memory-stores",
    title: "Multi-Store Model of Memory",
    category: "cognition",
    tags: ["memory", "sensory", "short-term", "long-term", "atkinson shiffrin"],
    summary:
      "Atkinson–Shiffrin's model: sensory memory → short-term memory → long-term memory, moved along by attention and rehearsal.",
    body: `The **Atkinson–Shiffrin model** describes three stores:

- **Sensory memory** — very brief (<1s visual, a few seconds auditory), huge capacity; most fades unless attended to.
- **Short-term memory (STM)** — ~15–30 seconds, capacity about **7 ± 2** items (Miller). **Attention** moves info here.
- **Long-term memory (LTM)** — potentially unlimited and long-lasting. **Rehearsal** transfers info from STM to LTM.

**Working memory** (Baddeley & Hitch) later refined STM into an active system with a central executive, phonological loop, and visuospatial sketchpad.`,
    keyPoints: [
      "Sensory → STM → LTM.",
      "STM capacity ≈ 7±2 (Miller); duration ~15–30 s.",
      "Attention: sensory→STM; Rehearsal: STM→LTM.",
      "Working memory model refined STM.",
    ],
  },
  {
    id: "ltm-types",
    title: "Types of Long-Term Memory",
    category: "cognition",
    tags: ["memory", "explicit", "implicit", "procedural", "episodic", "semantic"],
    summary:
      "LTM splits into explicit (episodic, semantic) and implicit (procedural) memory.",
    body: `Long-term memory has distinct systems.

- **Explicit (declarative)** — conscious, "knowing that":
  - **Episodic** — personal events ("my last birthday").
  - **Semantic** — facts and general knowledge ("Paris is in France").
- **Implicit (non-declarative)** — unconscious, "knowing how":
  - **Procedural** — skills and habits (riding a bike).

Amnesia often spares procedural memory while damaging episodic memory.`,
    keyPoints: [
      "Explicit = conscious (episodic + semantic).",
      "Implicit = unconscious (procedural).",
      "Episodic = events; semantic = facts.",
      "Procedural = skills, resistant to amnesia.",
    ],
  },
  {
    id: "forgetting",
    title: "Why We Forget",
    category: "cognition",
    tags: ["forgetting", "interference", "decay", "retrieval failure"],
    summary:
      "Main theories: trace decay, interference (proactive/retroactive), retrieval failure, and motivated forgetting.",
    body: `Several explanations for forgetting:

- **Trace decay** — memory traces fade over time if not used.
- **Interference** — other memories disrupt recall:
  - **Proactive** — old learning blocks new (old phone number intrudes).
  - **Retroactive** — new learning blocks old.
- **Retrieval failure** — the memory is stored but cues are missing (tip-of-the-tongue); links to **context** and **state-dependent** cues.
- **Motivated forgetting/repression** — anxiety-driven (Freudian).`,
    keyPoints: [
      "Decay = fading over time.",
      "Proactive: OLD interferes with NEW.",
      "Retroactive: NEW interferes with OLD.",
      "Retrieval failure = missing cues.",
    ],
    mnemonic: "PRO-active = PRior learning intrudes forward.",
  },
  {
    id: "cognitive-biases",
    title: "Common Cognitive Biases",
    category: "cognition",
    tags: ["bias", "heuristics", "confirmation bias", "availability"],
    summary:
      "Mental shortcuts (heuristics) cause predictable errors like confirmation, availability, and anchoring biases.",
    body: `**Heuristics** are mental shortcuts that are fast but error-prone, producing **cognitive biases**.

- **Confirmation bias** — favour info that confirms existing beliefs.
- **Availability heuristic** — judge likelihood by how easily examples come to mind (fear plane crashes after news).
- **Representativeness heuristic** — judge by how much something fits a stereotype, ignoring base rates.
- **Anchoring** — over-rely on the first piece of information.
- **Hindsight bias** — "I knew it all along."

Kahneman and Tversky pioneered this research.`,
    keyPoints: [
      "Heuristics = fast shortcuts; biases = their errors.",
      "Confirmation bias supports current beliefs.",
      "Availability = ease of recall drives judgement.",
      "Anchoring = first number sticks.",
    ],
  },

  // ─────────────────────── SOCIAL ───────────────────────
  {
    id: "conformity-obedience",
    title: "Conformity vs Obedience",
    category: "social",
    tags: ["asch", "milgram", "conformity", "obedience", "social influence"],
    summary:
      "Conformity is yielding to group pressure among peers; obedience is following the direct order of an authority.",
    body: `Both are forms of **social influence** but differ in source.

**Conformity** — changing behaviour/beliefs to match a **group of peers**; often implicit. **Asch's line study** showed people conform to obviously wrong majorities. Types: **compliance** (public only), **identification**, **internalisation** (genuine).

**Obedience** — following a **direct order** from an **authority figure**. **Milgram's** shock experiments showed ordinary people would deliver apparently dangerous shocks when instructed.`,
    keyPoints: [
      "Conformity = peer/group pressure (Asch).",
      "Obedience = authority's order (Milgram).",
      "Conformity often implicit; obedience explicit.",
      "Compliance < identification < internalisation (depth).",
    ],
    compare: {
      label: "Conformity vs Obedience",
      a: "Conformity",
      b: "Obedience",
      rows: [
        ["Source", "Peers/group", "Authority figure"],
        ["Pressure", "Implicit", "Explicit order"],
        ["Classic study", "Asch (lines)", "Milgram (shocks)"],
      ],
    },
  },
  {
    id: "attribution-theory",
    title: "Attribution Theory & the Fundamental Attribution Error",
    category: "social",
    tags: ["attribution", "fae", "actor observer", "self-serving"],
    summary:
      "We explain behaviour by internal (dispositional) or external (situational) causes; the FAE over-blames a person's character.",
    body: `**Attribution** is how we explain the causes of behaviour.
- **Internal/dispositional** — due to the person's traits.
- **External/situational** — due to circumstances.

Biases:
- **Fundamental Attribution Error (FAE)** — over-attribute *others'* behaviour to character while underrating the situation.
- **Actor–observer bias** — blame the situation for our own actions but character for others'.
- **Self-serving bias** — credit success to ourselves, blame failure on circumstances.`,
    keyPoints: [
      "Internal (traits) vs external (situation) causes.",
      "FAE: over-blame others' character.",
      "Self-serving bias protects self-esteem.",
      "Actor–observer: 'I'm situational, you're dispositional.'",
    ],
  },
  {
    id: "cognitive-dissonance",
    title: "Cognitive Dissonance",
    category: "social",
    tags: ["festinger", "dissonance", "attitude change"],
    summary:
      "The mental discomfort of holding conflicting beliefs/actions, which motivates us to reduce the inconsistency.",
    body: `**Festinger's** theory: holding two inconsistent thoughts — or acting against a belief — creates uncomfortable tension called **cognitive dissonance**. We are motivated to reduce it by:
- changing a belief,
- changing behaviour, or
- adding a justification.

In the classic study, participants paid **$1** to lie about a boring task rated it *more* enjoyable than those paid **$20** — with little external justification ($1), they changed their attitude to reduce dissonance.`,
    keyPoints: [
      "Conflict between beliefs/actions → discomfort.",
      "Reduced by changing belief, behaviour, or adding justification.",
      "$1/$20 study: less reward → more attitude change.",
      "Festinger & Carlsmith (1959).",
    ],
  },

  // ─────────────────────── PERSONALITY ───────────────────────
  {
    id: "big-five",
    title: "The Big Five Personality Traits (OCEAN)",
    category: "personality",
    tags: ["big five", "ocean", "traits", "five factor"],
    summary:
      "Five broad trait dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.",
    body: `The **Five-Factor Model** is the most empirically supported trait model. Traits sit on a spectrum, remembered as **OCEAN**:

- **Openness** — imagination, curiosity, novelty-seeking.
- **Conscientiousness** — organisation, discipline, dependability.
- **Extraversion** — sociability, energy from others.
- **Agreeableness** — compassion, cooperation, trust.
- **Neuroticism** — emotional instability, anxiety, moodiness.

The traits are stable, heritable, and found across cultures.`,
    keyPoints: [
      "OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.",
      "Traits are dimensions, not types.",
      "Most research-supported personality model.",
      "Conscientiousness predicts job/academic success.",
    ],
    mnemonic: "OCEAN.",
  },
  {
    id: "humanistic-maslow",
    title: "Maslow's Hierarchy of Needs",
    category: "personality",
    tags: ["maslow", "hierarchy", "self-actualisation", "humanistic"],
    summary:
      "Needs form a pyramid from physiological to safety, love, esteem, and self-actualisation at the top.",
    body: `Maslow's **humanistic** theory arranges human motivation as a pyramid; lower needs are generally met before higher ones dominate.

1. **Physiological** — food, water, sleep.
2. **Safety** — security, stability.
3. **Love/belonging** — relationships, acceptance.
4. **Esteem** — achievement, respect.
5. **Self-actualisation** — realising one's full potential.

Later versions add cognitive, aesthetic, and transcendence needs. Critics note the strict order does not always hold.`,
    keyPoints: [
      "Pyramid: Physiological → Safety → Love → Esteem → Self-actualisation.",
      "Lower (deficiency) needs before higher (growth) needs.",
      "Self-actualisation = fulfilling potential.",
      "Humanistic, positive view of people.",
    ],
  },
  {
    id: "nature-vs-nurture",
    title: "Nature vs Nurture",
    category: "personality",
    tags: ["nature", "nurture", "heredity", "environment", "epigenetics"],
    summary:
      "The debate over how much genetics (nature) vs environment (nurture) shapes behaviour — now seen as an interaction.",
    body: `**Nature** refers to inherited, genetic influences; **nurture** to environment, learning, and experience.

Modern psychology rejects an either/or answer: behaviour arises from **interaction**. Twin and adoption studies estimate **heritability**, and **epigenetics** shows environment can switch genes on/off. Example: someone may inherit a *predisposition* for a disorder (nature) that only appears under stress (nurture) — the **diathesis–stress model**.`,
    keyPoints: [
      "Nature = genes; nurture = environment.",
      "Modern view: interaction, not either/or.",
      "Twin/adoption studies estimate heritability.",
      "Diathesis–stress: predisposition + trigger.",
    ],
  },

  // ─────────────────────── BIOLOGICAL ───────────────────────
  {
    id: "neuron-synapse",
    title: "The Neuron and Synaptic Transmission",
    category: "biological",
    tags: ["neuron", "synapse", "neurotransmitter", "action potential"],
    summary:
      "Neurons send electrical signals along the axon and communicate chemically across synapses via neurotransmitters.",
    body: `A **neuron** is the basic unit of the nervous system.
- **Dendrites** receive signals.
- The **cell body (soma)** integrates them.
- The **axon** carries the electrical **action potential** away, sped up by the **myelin sheath**.
- **Terminal buttons** release **neurotransmitters** into the **synapse** (gap), which bind to the next neuron's receptors.

Signalling is **electrical within** a neuron and **chemical between** neurons. Leftover neurotransmitter is cleared by **reuptake** — the target of many antidepressants.`,
    keyPoints: [
      "Dendrite → soma → axon → terminal.",
      "Electrical within, chemical across synapse.",
      "Myelin speeds conduction.",
      "Reuptake clears the synapse (SSRIs block it).",
    ],
  },
  {
    id: "key-neurotransmitters",
    title: "Key Neurotransmitters",
    category: "biological",
    tags: ["dopamine", "serotonin", "gaba", "acetylcholine", "neurotransmitters"],
    summary:
      "Dopamine (reward/movement), serotonin (mood), GABA (inhibition), glutamate (excitation), acetylcholine (memory/muscle).",
    body: `Neurotransmitters carry specific messages:
- **Dopamine** — reward, motivation, movement. Too little → Parkinson's; dysregulation linked to schizophrenia and addiction.
- **Serotonin** — mood, sleep, appetite. Low levels linked to depression (SSRIs raise it).
- **GABA** — main **inhibitory** transmitter; calms the brain (targeted by anti-anxiety drugs).
- **Glutamate** — main **excitatory** transmitter; learning and memory.
- **Acetylcholine** — muscle movement and memory (low in Alzheimer's).
- **Norepinephrine** — arousal, alertness, fight-or-flight.`,
    keyPoints: [
      "Dopamine = reward & movement.",
      "Serotonin = mood (SSRIs).",
      "GABA = inhibitory (calming); glutamate = excitatory.",
      "Acetylcholine = memory & muscle (Alzheimer's).",
    ],
  },
  {
    id: "nervous-system",
    title: "Divisions of the Nervous System",
    category: "biological",
    tags: ["cns", "pns", "sympathetic", "parasympathetic", "autonomic"],
    summary:
      "CNS (brain + spinal cord) and PNS; PNS splits into somatic and autonomic (sympathetic vs parasympathetic).",
    body: `The nervous system has two main parts.

- **Central Nervous System (CNS)** — brain and spinal cord.
- **Peripheral Nervous System (PNS)** — all other nerves, split into:
  - **Somatic** — voluntary muscle control and sensory input.
  - **Autonomic** — automatic functions, further split into:
    - **Sympathetic** — "fight or flight" (arousal ↑).
    - **Parasympathetic** — "rest and digest" (calms the body).

Sympathetic and parasympathetic work in balance.`,
    keyPoints: [
      "CNS = brain + spinal cord.",
      "PNS = somatic + autonomic.",
      "Sympathetic = fight/flight; parasympathetic = rest/digest.",
      "Autonomic controls involuntary functions.",
    ],
    mnemonic: "Sympathetic → Stress; Parasympathetic → Peace.",
  },

  // ─────────────────────── THERAPY ───────────────────────
  {
    id: "cbt",
    title: "Cognitive Behavioural Therapy (CBT)",
    category: "therapy",
    tags: ["cbt", "beck", "cognitive", "thoughts", "behaviour"],
    summary:
      "A structured therapy that changes unhelpful thought patterns and behaviours to improve emotions.",
    body: `**CBT** is based on the idea that **thoughts, feelings, and behaviours are linked** — change unhelpful thoughts and behaviours and emotions improve.

Therapists help clients spot **cognitive distortions** (e.g., catastrophising, all-or-nothing thinking) and test them against reality (**cognitive restructuring**), while using behavioural techniques like activity scheduling and **exposure**. It is **present-focused**, structured, and time-limited — strong evidence for anxiety and depression. Rooted in **Beck** (cognitive therapy) and **Ellis** (REBT).`,
    keyPoints: [
      "Thoughts ↔ feelings ↔ behaviour.",
      "Targets cognitive distortions via restructuring.",
      "Present-focused, structured, short-term.",
      "Strong evidence for depression & anxiety.",
    ],
  },
  {
    id: "therapy-approaches",
    title: "Major Therapy Approaches Compared",
    category: "therapy",
    tags: ["psychodynamic", "humanistic", "behavioural", "cognitive", "therapy"],
    summary:
      "Psychodynamic (insight), humanistic (growth), behavioural (conditioning), cognitive (thoughts) differ in cause and method.",
    body: `Four broad schools of treatment:

- **Psychodynamic** — problems stem from unconscious conflict; uses free association and interpretation to gain **insight** (Freud).
- **Humanistic** — people have a drive to grow; the therapist offers **unconditional positive regard** and empathy (Rogers' person-centred therapy).
- **Behavioural** — problems are learned; uses conditioning (systematic desensitisation, token economies) to change behaviour.
- **Cognitive** — problems come from faulty thinking; restructures thoughts (Beck, Ellis).

Modern practice is often **integrative** or **eclectic**, combining methods.`,
    keyPoints: [
      "Psychodynamic → unconscious insight.",
      "Humanistic → growth, unconditional positive regard.",
      "Behavioural → conditioning.",
      "Cognitive → change thinking.",
    ],
  },
  {
    id: "biomedical-therapy",
    title: "Biomedical Treatments",
    category: "therapy",
    tags: ["ssri", "antipsychotic", "medication", "ect"],
    summary:
      "Drug and physical treatments: antidepressants, antipsychotics, anxiolytics, mood stabilisers, and ECT.",
    body: `Biomedical approaches treat the **biological** basis of disorders.

- **Antidepressants** — e.g., **SSRIs** increase serotonin availability; used for depression and anxiety.
- **Antipsychotics** — reduce dopamine activity to treat psychosis/schizophrenia.
- **Anxiolytics** — e.g., benzodiazepines boost GABA to reduce anxiety.
- **Mood stabilisers** — e.g., **lithium** for bipolar disorder.
- **ECT (electroconvulsive therapy)** — for severe, treatment-resistant depression.

Often combined with psychotherapy for best results.`,
    keyPoints: [
      "SSRIs → serotonin ↑ (depression/anxiety).",
      "Antipsychotics → dopamine ↓.",
      "Lithium → bipolar mood stabiliser.",
      "ECT → severe, resistant depression.",
    ],
  },

  // ─────────────────────── RESEARCH ───────────────────────
  {
    id: "variables",
    title: "Independent vs Dependent Variables",
    category: "research",
    tags: ["variables", "iv", "dv", "experiment", "confound"],
    summary:
      "The IV is manipulated by the researcher; the DV is measured. Confounds are unwanted variables that distort results.",
    body: `In an experiment:
- **Independent Variable (IV)** — what the researcher **changes/manipulates** (the presumed cause).
- **Dependent Variable (DV)** — what is **measured** (the effect); it *depends* on the IV.
- **Confounding variable** — an uncontrolled variable that could offer an alternative explanation.
- **Control** — keeping other variables constant so only the IV varies.

Tip: the DV is the **D**ata you record.`,
    keyPoints: [
      "IV = manipulated (cause).",
      "DV = measured (effect).",
      "Confounds threaten validity.",
      "Control isolates the IV's effect.",
    ],
    mnemonic: "DV = the Data you measure; IV = what you 'Insert/change'.",
  },
  {
    id: "reliability-validity",
    title: "Reliability vs Validity",
    category: "research",
    tags: ["reliability", "validity", "measurement", "psychometrics"],
    summary:
      "Reliability is consistency; validity is accuracy (measuring what you intend). A test can be reliable but not valid.",
    body: `Two qualities of a good measure.

**Reliability** — **consistency**: does the test give the same result on repeat (test–retest), across items (internal), or between raters (inter-rater)?

**Validity** — **accuracy**: does it measure what it claims to? Types include content, construct, and criterion validity.

A scale that is always 2 kg heavy is **reliable** (consistent) but **not valid** (wrong). You can be reliable without being valid, but not truly valid without reliability.`,
    keyPoints: [
      "Reliability = consistency.",
      "Validity = measures the right thing.",
      "Reliable ≠ valid (broken-scale example).",
      "Validity requires reliability, not vice versa.",
    ],
  },
  {
    id: "correlation-causation",
    title: "Correlation vs Causation",
    category: "research",
    tags: ["correlation", "causation", "third variable", "experiment"],
    summary:
      "Correlation shows a relationship between variables; only experiments with manipulation can establish causation.",
    body: `A **correlation** measures how two variables move together, from **−1 to +1**. Positive = move the same way; negative = opposite; 0 = no linear relationship.

But **correlation does not equal causation**. Two variables may correlate because:
- A causes B,
- B causes A (reverse causation), or
- a **third variable** causes both.

Only a controlled **experiment** (manipulating the IV, controlling confounds) can support causal claims.`,
    keyPoints: [
      "Correlation coefficient: −1 to +1.",
      "Correlation ≠ causation.",
      "Watch for third-variable and reverse causation.",
      "Experiments establish cause.",
    ],
  },
  {
    id: "research-ethics",
    title: "Research Ethics in Psychology",
    category: "research",
    tags: ["ethics", "consent", "debriefing", "irb"],
    summary:
      "Core principles: informed consent, no harm, confidentiality, right to withdraw, and debriefing.",
    body: `Ethical guidelines protect participants:
- **Informed consent** — participants agree knowing what's involved.
- **No harm / minimise risk** — physical and psychological.
- **Confidentiality** — protect data and identity.
- **Right to withdraw** — leave anytime without penalty.
- **Deception** — only if justified, followed by...
- **Debriefing** — full explanation afterward.

An ethics board (**IRB**) reviews studies. Milgram's and Zimbardo's studies are classic ethical cautionary tales.`,
    keyPoints: [
      "Informed consent before participation.",
      "Protect from harm & keep data confidential.",
      "Right to withdraw at any time.",
      "Debrief after any deception; IRB oversight.",
    ],
  },
];

const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Parties to a Crime / Accomplice Liability for Homicide",
        fp: "Arthur and Bill plan to burglarize a warehouse. Arthur tells Bill he brought a gun 'just to scare the guard.' Bill agrees to keep watch outside. Inside, the guard draws a weapon, and Arthur shoots and kills him.",
        q: "Can Bill be convicted of murder?",
        opts: [
            "No, because he only agreed to participate in a property crime and explicitly stayed outside the building.",
            "No, because Arthur used the gun defensively when the guard drew his weapon first.",
            "Yes, under the felony murder rule.",
            "Yes, because he physically handed the weapon to Arthur prior to entering the commercial structure."
        ],
        ans: 2,
        exp: "Under the felony murder rule, all co-felons are liable for a death caused by one of them during the commission of an inherently dangerous felony (such as burglary), provided the death was a foreseeable consequence[cite: 22]. A lethal confrontation during a commercial burglary is foreseeable[cite: 22]."
    },
    {
        id: 2,
        topic: "Homicide / Felony Murder (Redline Rule)",
        fp: "Arthur and Bill plan to burglarize a warehouse. Arthur tells Bill he brought a gun 'just to scare the guard.' Bill agrees to keep watch outside. Inside, the guard draws a weapon, and Arthur shoots and kills him.\n\nAssume instead the guard shoots and kills Arthur.",
        q: "Can Bill be convicted of felony murder for Arthur's death in a majority (agency) jurisdiction?",
        opts: [
            "Yes, because Bill's participation in the burglary makes him strictly liable.",
            "No, because the guard was not a co-felon acting in furtherance of the crime.",
            "No, because Bill was acting as a mere lookout rather than a principal.",
            "Yes, because the guard's use of lethal force was a highly foreseeable response to the initiation of an armed nighttime burglary."
        ],
        ans: 1,
        exp: "Under the agency theory of felony murder (and the related Redline rule), a felon is not liable for the death of a co-felon who is justifiably killed by a police officer, security guard, or victim acting in lawful self-defense or crime prevention[cite: 22]."
    },
    {
        id: 3,
        topic: "Inchoate Crimes / Accomplice Withdrawal",
        fp: "Arthur and Bill plan to burglarize a warehouse. Arthur tells Bill he brought a gun 'just to scare the guard.' Bill agrees to keep watch outside. Inside, the guard draws a weapon, and Arthur shoots and kills him.\n\nSuppose Bill left the scene 5 minutes before Arthur entered the warehouse, without telling Arthur.",
        q: "Is Bill still liable for the burglary?",
        opts: [
            "Yes, because withdrawal requires an affirmative communication to the co-conspirator in time for them to abandon the plan.",
            "No, because physical absence from the scene severs all accessorial liability.",
            "No, because he did not break the threshold.",
            "Yes, because the initial agreement inherently creates absolute joint and several liability for all subsequent acts indefinitely."
        ],
        ans: 0,
        exp: "To effectively withdraw as an accomplice and avoid liability for the principal's subsequent crimes, the accomplice must repudiate their encouragement and communicate that withdrawal to the principal before the crime becomes unstoppable[cite: 22]. Silently slipping away is insufficient[cite: 22]."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Property Crimes / Larceny (Mistake of Fact & Abandoned Property)",
        fp: "Chloe is walking through a public park and finds a diamond ring on a bench. Believing it was intentionally abandoned, she takes it. The next day, she sees a flyer indicating the ring was lost and offering a reward. She decides to keep it.",
        q: "Is Chloe guilty of common law larceny for the initial taking?",
        opts: [
            "Yes, because she committed a physical asportation of another's property.",
            "No, because her honest belief that the property was abandoned negates the trespassory taking and the intent to steal.",
            "Yes, because rings cannot be legally abandoned under the common law framework governing valuable jewelry.",
            "No, because larceny strictly requires the victim to be physically present and aware of the deprivation at the exact moment of the taking."
        ],
        ans: 1,
        exp: "Larceny requires a trespassory taking with the specific intent to steal the property of another[cite: 22]. If a person honestly believes property is abandoned, they lack the intent to steal another's property, making the initial taking non-trespassory[cite: 22]."
    },
    {
        id: 5,
        topic: "Property Crimes / Larceny (Continuing Trespass)",
        fp: "Chloe is walking through a public park and finds a diamond ring on a bench. Believing it was intentionally abandoned, she takes it. The next day, she sees a flyer indicating the ring was lost and offering a reward. She decides to keep it.",
        q: "Does the continuing trespass doctrine apply when she later decides to keep the ring?",
        opts: [
            "Yes, because she eventually formed the malicious specific intent to steal.",
            "Yes, because retaining lost property after finding the rightful owner is a strict liability property crime.",
            "No, because the doctrine only applies if the initial taking was wrongful or trespassory, and her initial taking was innocent.",
            "No, because the flyer was posted in a public area, which legally invalidates the original owner's continuous claim of right."
        ],
        ans: 2,
        exp: "The continuing trespass doctrine fictionally extends a trespassory taking until the moment the defendant forms the intent to steal[cite: 22]. However, it ONLY applies if the initial taking was wrongful (trespassory)[cite: 22]. Because Chloe's initial taking was innocent (believing the ring was abandoned), the doctrine does not apply[cite: 22]."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Property Crimes / Embezzlement vs. Larceny (Custody vs Possession)",
        fp: "David is a low-level bank employee whose only duty is to sweep the floors. One night, he finds a sealed bag of cash accidentally left on a manager's desk. David rips open the bag, takes the cash, and flees.",
        q: "What property crime did David commit?",
        opts: [
            "Embezzlement, because as an employee of the bank, he possessed legal and fiduciary custody of all assets on the premises.",
            "Larceny, because as a janitor, he had mere custody or no lawful possession of the cash, making his taking a trespassory act.",
            "Robbery, because he used physical, constructive force against the sealed canvas bag.",
            "False pretenses, because he obtained the money by deceptive concealment."
        ],
        ans: 1,
        exp: "Embezzlement requires the fraudulent conversion of property by someone already in LAWFUL POSSESSION of it[cite: 22]. Low-level employees (like a janitor) who have restricted access to property generally only have 'custody' of it, not lawful possession[cite: 22]. Therefore, taking the property is a trespassory taking, constituting larceny[cite: 22]."
    },
    {
        id: 7,
        topic: "Property Crimes / Larceny (Breaking Bulk)",
        fp: "David is a low-level bank employee whose only duty is to sweep the floors. One night, he finds a sealed bag of cash accidentally left on a manager's desk. David rips open the bag, takes the cash, and flees.\n\nIf David was actually an independent armored courier hired to transport the sealed bag to another branch, does ripping it open change his liability?",
        opts: [
            "Yes, because breaking a seal constitutes common law burglary when performed during the nighttime hours.",
            "Yes, because 'breaking bulk' terminates a bailee's lawful possession, making the taking larceny.",
            "No, it remains embezzlement regardless.",
            "No, because commercial couriers are legally classified as independent contractors rather than traditional common law bailees."
        ],
        ans: 1,
        exp: "A bailee (like a courier) generally has lawful possession of property entrusted to them, making conversion embezzlement[cite: 22]. However, under the common law 'breaking bulk' doctrine, if a bailee opens a sealed container and takes the contents, their lawful possession terminates[cite: 22]. The taking becomes a trespassory taking, constituting larceny[cite: 22]."
    },
    {
        id: 8,
        topic: "Property Crimes / Larceny (Intent to Permanently Deprive)",
        fp: "David is a low-level bank employee whose only duty is to sweep the floors. One night, he finds a sealed bag of cash accidentally left on a manager's desk. David rips open the bag, takes the cash, and flees.\n\nAssume David took the bag intending to return it the next morning after showing it off to his friends, but he lost it at a casino.",
        q: "Is he guilty of larceny?",
        opts: [
            "No, because he did not possess the specific intent to permanently deprive the bank of the funds at the exact moment of the physical taking.",
            "Yes, because the physical money was permanently lost.",
            "Yes, because showing off cash inherently creates an irrebuttable presumption of malicious intent to steal.",
            "No, because gambling losses are universally considered involuntary conversions."
        ],
        ans: 0,
        exp: "Larceny is a specific intent crime requiring the intent to permanently deprive the owner of the property AT THE TIME of the taking[cite: 22]. If David genuinely intended to return the money the next morning, he lacked the requisite intent for larceny when he took the bag[cite: 22]. (Losing the money recklessly might expose him to other liability, but it does not retroactively create the specific intent for larceny)[cite: 22]."
    },
    // FACT PATTERN 4 (Q9-Q10)
    {
        id: 9,
        topic: "Homicide / Depraved Heart Murder",
        fp: "Emily, angry at society, drops a 50-pound bowling ball off a highway overpass into moving traffic. She doesn't care who she hits. The ball crushes a car's windshield, killing the driver, Frank.",
        q: "What is the most appropriate homicide charge against Emily?",
        opts: [
            "First-degree murder, because using a heavy object constitutes premeditated intent.",
            "Involuntary manslaughter.",
            "Second-degree murder, because her actions demonstrated a reckless indifference to an unjustifiably high risk to human life.",
            "Voluntary manslaughter, because her societal anger acted as sudden provocation."
        ],
        ans: 2,
        exp: "Murder requires malice aforethought[cite: 22]. Malice can be implied when a defendant acts with a 'depraved heart'—a reckless indifference to an unjustifiably high risk to human life[cite: 22]. Dropping a 50-pound bowling ball into moving highway traffic perfectly satisfies this standard, making it second-degree murder[cite: 22]."
    },
    {
        id: 10,
        topic: "Homicide / Transferred Intent",
        fp: "Emily, angry at society, drops a 50-pound bowling ball off a highway overpass into moving traffic. She doesn't care who she hits. The ball crushes a car's windshield, killing the driver, Frank.\n\nAssume Emily was actually aiming specifically at her ex-boyfriend's car, but missed and hit Frank's car instead.",
        q: "What legal doctrine makes Emily fully liable for the intentional murder of Frank?",
        opts: [
            "The doctrine of concurrent causation.",
            "The felony murder rule, because throwing objects is an inherently dangerous felony.",
            "The doctrine of transferred intent.",
            "The doctrine of factual impossibility, which prevents her from claiming she aimed at the wrong vehicle."
        ],
        ans: 2,
        exp: "Under the doctrine of transferred intent, a defendant who intends to kill or injure one person but accidentally kills or injures a different, unintended person is guilty of the intentional crime against the actual victim[cite: 22]. Emily's intent to kill her ex-boyfriend transfers to Frank[cite: 22]."
    },
    // FACT PATTERN 5 (Q11-Q13)
    {
        id: 11,
        topic: "Inchoate Crimes / Conspiracy (MPC Unilateral Approach)",
        fp: "George, Henry, and Ian agree to import illegal narcotics. George provides the funds, Henry drives the boat, and Ian acts as the buyer. Unbeknownst to George and Henry, Ian is an undercover DEA agent.",
        q: "Under the Model Penal Code (MPC), can George and Henry be convicted of conspiracy with Ian?",
        opts: [
            "No, because the involvement of an undercover agent completely nullifies the entire criminal enterprise under all legal frameworks.",
            "Yes, because the MPC utilizes a unilateral approach to conspiracy, focusing on the individual defendant's culpability and intent to agree.",
            "No, due to the strict common law bilateral agreement rule.",
            "Yes, but only if Ian actually purchases and consumes the narcotics."
        ],
        ans: 1,
        exp: "The Model Penal Code adopts a 'unilateral' approach to conspiracy[cite: 22]. Under this approach, a defendant can be convicted of conspiracy if they themselves agree to commit a crime with another person, regardless of whether the other person (like an undercover officer) actually intends to carry out the agreement[cite: 22]."
    },
    {
        id: 12,
        topic: "Inchoate Crimes / Conspiracy (Wharton's Rule Exception)",
        fp: "George, Henry, and Ian agree to import illegal narcotics. George provides the funds, Henry drives the boat, and Ian acts as the buyer. Unbeknownst to George and Henry, Ian is an undercover DEA agent.",
        q: "If the charge is conspiracy to distribute narcotics (a crime requiring a buyer and a seller), does Wharton's Rule bar the conspiracy charge?",
        opts: [
            "Yes, because it logically requires exactly two people.",
            "Yes, because the undercover agent invalidates the commercial transaction.",
            "No, because Wharton's Rule strictly applies only to violent capital offenses.",
            "No, because there are three participants, which is more than the number logically necessary to complete the substantive offense."
        ],
        ans: 3,
        exp: "Wharton's Rule prohibits a conspiracy charge for crimes that logically require two people (e.g., bribery, dueling, selling drugs)[cite: 22]. However, an exception applies if the number of conspirators exceeds the minimum number required to commit the underlying offense[cite: 22]. Because three people are involved, the rule does not bar the charge[cite: 22]."
    },
    {
        id: 13,
        topic: "Defenses / Entrapment (Subjective Test)",
        fp: "George, Henry, and Ian agree to import illegal narcotics. George provides the funds, Henry drives the boat, and Ian acts as the buyer. Unbeknownst to George and Henry, Ian is an undercover DEA agent.",
        q: "If George claims entrapment, what must he show under the majority (subjective) test?",
        opts: [
            "That the government induced the crime and he was not predisposed to commit it.",
            "That the government's conduct was so outrageous that it violated his fundamental constitutional due process rights.",
            "That he was completely unaware that the imported goods were legally classified as controlled substances.",
            "That he was physically threatened."
        ],
        ans: 0,
        exp: "The majority 'subjective test' for entrapment requires the defendant to prove two elements: (1) the criminal design originated with law enforcement (inducement), and (2) the defendant was not predisposed to commit the crime prior to the government contact[cite: 22]."
    },
    // FACT PATTERN 6 (Q14-Q16)
    {
        id: 14,
        topic: "Defenses / Involuntary Intoxication",
        fp: "Karen takes her newly prescribed allergy medication in the correct dosage. She has an unprecedented, extreme adverse reaction that triggers severe visual hallucinations. Believing her neighbor is a zombie, she breaks into his house and attacks him with a broom.",
        q: "Does Karen have a valid defense based on her medication?",
        opts: [
            "No, because she voluntarily swallowed the pills, making her strictly liable for any resulting behavioral side effects.",
            "Yes, but only against property crimes.",
            "No, because the attack involved a deadly weapon, which automatically overrides any medically induced cognitive impairment defenses.",
            "Yes, involuntary intoxication serves as a complete defense if it renders the defendant temporarily legally insane."
        ],
        ans: 3,
        exp: "Involuntary intoxication is treated the same as insanity[cite: 22]. Taking prescribed medication and experiencing an unforeseeable, extreme adverse reaction constitutes involuntary intoxication[cite: 22]. It provides a complete defense to a crime if, because of the intoxication, the defendant was unable to understand the nature of the act or distinguish right from wrong[cite: 22]."
    },
    {
        id: 15,
        topic: "Property Crimes / Burglary & Intoxication",
        fp: "Karen takes her newly prescribed allergy medication in the correct dosage. She has an unprecedented, extreme adverse reaction that triggers severe visual hallucinations. Believing her neighbor is a zombie, she breaks into his house and attacks him with a broom.",
        q: "If Karen is charged with burglary, how does her intoxication affect the charge?",
        opts: [
            "It mitigates the charge to a general intent trespass offense.",
            "It has no effect on burglary.",
            "It completely negates the specific intent required for burglary, as her hallucinatory state prevented her from intending to commit a felony inside.",
            "It establishes malice aforethought by proving she entered the dwelling house at night."
        ],
        ans: 2,
        exp: "Burglary is a specific intent crime requiring the intent to commit a felony inside the dwelling[cite: 22]. Even if the intoxication were voluntary, severe intoxication that prevents the formation of the specific intent is a valid defense to burglary[cite: 22]."
    },
    {
        id: 16,
        topic: "Defenses / Voluntary Intoxication (General Intent Limitation)",
        fp: "Karen takes her newly prescribed allergy medication in the correct dosage. She has an unprecedented, extreme adverse reaction that triggers severe visual hallucinations. Believing her neighbor is a zombie, she breaks into his house and attacks him with a broom.",
        q: "If the intoxication was voluntary rather than involuntary, could she use it as a defense to the general intent crime of battery?",
        opts: [
            "No, because voluntary intoxication is never a recognized legal defense to general intent or recklessness-based crimes.",
            "Yes, because severe intoxication negates all forms of criminal mens rea.",
            "Yes, provided she did not specifically intend to strike the neighbor.",
            "No, unless she was entirely physically blacked out."
        ],
        ans: 0,
        exp: "Battery is a general intent crime[cite: 22]. Voluntary intoxication is NEVER a defense to general intent crimes, because the act of voluntarily consuming the intoxicating substance legally substitutes for the reckless mental state required for the offense[cite: 22]."
    },
    // FACT PATTERN 7 (Q17-Q18)
    {
        id: 17,
        topic: "Crimes against Person / Kidnapping (Asportation)",
        fp: "Larry holds up a convenience store with a gun. He forces the manager, Mark, to empty the safe. To ensure his escape, Larry forces Mark into the trunk of his car, drives 20 miles to a deserted road, and leaves Mark tied to a tree.",
        q: "Is Larry guilty of kidnapping?",
        opts: [
            "No, because the movement was purely incidental.",
            "No, because Mark was eventually left alive and unharmed.",
            "Yes, because moving the victim 20 miles in a trunk is substantial asportation that increases the risk of harm.",
            "Yes, because any physical movement of a victim during a commercial robbery is automatically classified as a federal kidnapping offense."
        ],
        ans: 2,
        exp: "Kidnapping requires unlawful confinement plus asportation (movement) of the victim[cite: 22]. The movement must be substantial or increase the risk of harm to the victim[cite: 22]. Forcing a victim into a trunk and driving them 20 miles to a deserted road clearly satisfies this requirement[cite: 22]."
    },
    {
        id: 18,
        topic: "Property Crimes / Robbery (Presence)",
        fp: "Larry holds up a convenience store with a gun. He forces the manager, Mark, to empty the safe. To ensure his escape, Larry forces Mark into the trunk of his car, drives 20 miles to a deserted road, and leaves Mark tied to a tree.",
        q: "Did Larry commit robbery regarding the safe?",
        opts: [
            "Yes, because he used a firearm.",
            "No, because the safe technically belonged to the corporate entity, not Mark.",
            "No, because the manager survived the encounter without physical injury.",
            "Yes, because he used the threat of immediate physical force to take property from the manager's person or presence."
        ],
        ans: 3,
        exp: "Robbery is the trespassory taking of personal property from the person or presence of another by force or threat of immediate physical harm[cite: 22]. Holding the manager at gunpoint to force him to empty the safe satisfies all elements[cite: 22]."
    },
    // FACT PATTERN 8 (Q19-Q20)
    {
        id: 19,
        topic: "Property Crimes / Burglary (Dwelling Requirement)",
        fp: "Nancy approaches a large, occupied residential houseboat moored at a marina at 2:00 AM. She breaks a window, climbs inside, and steals a laptop. To destroy evidence, she sets the curtains on fire, causing the boat to burn and sink.",
        q: "Can Nancy be convicted of common law burglary?",
        opts: [
            "Yes, because a houseboat regularly used for sleeping purposes qualifies as a dwelling house under the common law.",
            "No, because a boat is a mobile vehicle rather than a permanent structure.",
            "Yes, because breaking any window automatically satisfies the elements.",
            "No, because maritime vessels are exclusively governed by federal admiralty law rather than traditional state penal codes."
        ],
        ans: 0,
        exp: "Common law burglary strictly requires the breaking and entering of a DWELLING house[cite: 22]. However, a dwelling is defined as any structure regularly used for sleeping purposes[cite: 22]. An occupied residential houseboat qualifies as a dwelling under the common law[cite: 22]."
    },
    {
        id: 20,
        topic: "Property Crimes / Arson (Charring Requirement)",
        fp: "Nancy approaches a large, occupied residential houseboat moored at a marina at 2:00 AM. She breaks a window, climbs inside, and steals a laptop. To destroy evidence, she sets the curtains on fire, causing the boat to burn and sink.",
        q: "Is Nancy guilty of common law arson?",
        opts: [
            "No, she only set fire to personal property (the curtains).",
            "No, because her primary intent was to destroy evidence rather than malice.",
            "Yes, because setting fire to any personal property within a structure is arson.",
            "Yes, because she maliciously burned the dwelling house of another, and the fire spread to the structure of the boat, causing it to sink."
        ],
        ans: 3,
        exp: "Common law arson requires the malicious burning of the dwelling house of another[cite: 22]. While burning just the curtains (personal property) is not arson, the fire spread and destroyed the boat (the structure of the dwelling itself)[cite: 22]. Her intent to destroy evidence satisfies the reckless malice requirement[cite: 22]."
    },
    // FACT PATTERN 9 (Q21-Q23)
    {
        id: 21,
        topic: "Defenses / Self-Defense (Proportionate Force)",
        fp: "Oscar is standing on his front porch when Pete, a neighborhood bully, approaches holding a baseball bat. Pete yells, 'I'm going to bash your skull in!' Oscar pulls a legally owned handgun and shoots Pete.",
        q: "Was Oscar's use of deadly force justified?",
        opts: [
            "Yes, he faced an imminent deadly threat.",
            "No, because a baseball bat is not considered a deadly weapon.",
            "No, because he was required to retreat inside his house and lock the door before utilizing any form of lethal defensive countermeasures.",
            "Yes, because property owners have an absolute right to execute trespassers."
        ],
        ans: 0,
        exp: "A person may use deadly force in self-defense if they reasonably believe they are in imminent danger of death or great bodily harm[cite: 22]. A baseball bat swung at someone's head is a deadly weapon[cite: 22]. Oscar was justified in using proportionate lethal force to repel the lethal threat[cite: 22]."
    },
    {
        id: 22,
        topic: "Defenses / Duty to Retreat & Castle Doctrine",
        fp: "Oscar is standing on his front porch when Pete, a neighborhood bully, approaches holding a baseball bat. Pete yells, 'I'm going to bash your skull in!' Oscar pulls a legally owned handgun and shoots Pete.",
        q: "In a minority jurisdiction requiring retreat before using deadly force, must Oscar retreat?",
        opts: [
            "Yes, because he was on the porch, which is outside the strict protective boundaries of the interior dwelling.",
            "No, because Pete was armed.",
            "Yes, because the duty to retreat applies universally without exceptions.",
            "No, because the 'castle doctrine' exception eliminates the duty to retreat when a person is attacked in their home or its immediate curtilage (porch)."
        ],
        ans: 3,
        exp: "Even in minority jurisdictions that require a victim to retreat before using deadly force, the 'castle doctrine' provides an absolute exception: a person is never required to retreat when attacked inside their own home or its immediate curtilage (such as an attached front porch)[cite: 22]."
    },
    {
        id: 23,
        topic: "Homicide / Imperfect Self-Defense",
        fp: "Oscar is standing on his front porch when Pete, a neighborhood bully, approaches holding a baseball bat. Pete yells, 'I'm going to bash your skull in!' Oscar pulls a legally owned handgun and shoots Pete.\n\nSuppose Oscar unreasonably believed Pete's foam prop bat was a real wooden bat. If Oscar shoots Pete, what is the likely charge?",
        opts: [
            "First-degree murder, because he intentionally discharged a firearm.",
            "Involuntary manslaughter, because his failure to identify the prop weapon constitutes gross criminal negligence under the circumstances.",
            "Voluntary manslaughter.",
            "Second-degree murder, because his belief was objectively unreasonable."
        ],
        ans: 2,
        exp: "Under the doctrine of imperfect self-defense, if a defendant holds an honest but objectively unreasonable belief that deadly force is necessary to prevent imminent death or great bodily harm, this belief negates malice aforethought[cite: 22]. The murder charge is mitigated to voluntary manslaughter[cite: 22]."
    },
    // FACT PATTERN 10 (Q24-Q25)
    {
        id: 24,
        topic: "Property Crimes / Forgery",
        fp: "Quinn is an art dealer. He purchases a cheap replica painting, signs 'Salvador Dalí' on the bottom, and creates a fake certificate of authenticity. He sells it to Rita for $50,000, telling her it is genuine.",
        q: "What crime did Quinn commit by signing Dalí's name and creating the certificate?",
        opts: [
            "Extortion.",
            "Larceny by trick, because he used deceit to alter a physical document.",
            "Embezzlement, because he exercised unauthorized dominion over the art market.",
            "Forgery, because he falsely made or altered a writing with apparent legal significance and the specific intent to defraud."
        ],
        ans: 3,
        exp: "Forgery is the making or altering of a false writing with apparent legal significance, with the specific intent to defraud[cite: 22]. Forging a famous artist's signature and creating a fake certificate of authenticity satisfies all elements[cite: 22]."
    },
    {
        id: 25,
        topic: "Property Crimes / False Pretenses",
        fp: "Quinn is an art dealer. He purchases a cheap replica painting, signs 'Salvador Dalí' on the bottom, and creates a fake certificate of authenticity. He sells it to Rita for $50,000, telling her it is genuine.",
        q: "What crime did Quinn commit by selling the painting to Rita?",
        opts: [
            "Robbery, because the exchange of fake goods is constructive force.",
            "False pretenses, because he obtained legal title to Rita's money through an intentional false representation of a material fact.",
            "Larceny by trick.",
            "Embezzlement, because Rita entrusted him with the $50,000 prior to the transaction."
        ],
        ans: 1,
        exp: "False pretenses requires obtaining title to the property of another by an intentional false statement of past or existing fact, with intent to defraud[cite: 22]. Because Rita intended to transfer ownership (title) of the $50,000 to Quinn in the sale, the crime is false pretenses, not larceny by trick[cite: 22]."
    }
];
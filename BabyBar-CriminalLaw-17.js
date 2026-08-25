const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Homicide / Omissions & Duty to Rescue",
        fp: "Alice, a specialized cave-diving guide, takes Bob (a novice) on an extreme dive. Halfway through, Alice discovers Bob is having an affair with her husband. Enraged, she intentionally cuts his primary guideline and swims away, intending for him to get lost and drown. Bob gets lost. Later, Charlie, another diver, finds Bob trapped and running out of air. Charlie has a spare tank but decides not to give it to Bob because Charlie wants Bob's rare dive watch. Bob drowns.",
        q: "What is Charlie's criminal liability for Bob's death?",
        opts: [
            "First-degree murder, because Charlie possessed a subjective, malicious intent to allow the victim to die to secure a financial asset.",
            "Voluntary manslaughter, because the sudden emergency environment creates an imperfect justification for preserving limited resources.",
            "No crime, because Charlie had no legal duty to act.",
            "Depraved heart murder, due to his extreme and reckless indifference to the value of human life under emergency conditions."
        ],
        ans: 2,
        exp: "Criminal liability for an omission (failure to act) only arises if the defendant has a strict legal duty to act (e.g., parent/child, contractual duty, or having created the peril)[cite: 28]. Despite Charlie's malicious motive (wanting the watch), a stranger generally has no legal affirmative duty to rescue a drowning person[cite: 28]."
    },
    {
        id: 2,
        topic: "Homicide / Proximate Causation (Intervening Omissions)",
        fp: "Alice, a specialized cave-diving guide, takes Bob (a novice) on an extreme dive. Halfway through, Alice discovers Bob is having an affair with her husband. Enraged, she intentionally cuts his primary guideline and swims away, intending for him to get lost and drown. Bob gets lost. Later, Charlie, another diver, finds Bob trapped and running out of air. Charlie has a spare tank but decides not to give it to Bob because Charlie wants Bob's rare dive watch. Bob drowns.",
        q: "Is Alice the proximate cause of Bob's death?",
        opts: [
            "Yes, because cutting the guideline was the direct cause of the peril, and a third party's mere failure to rescue does not constitute a superseding intervening act that severs the chain of proximate causation.",
            "No, because Charlie's refusal to provide the spare tank broke the chain of legal causation.",
            "No, because Bob ultimately succumbed to natural asphyxiation rather than direct physical trauma inflicted by the defendant.",
            "Yes, because guides are held strictly liable for any fatalities."
        ],
        ans: 0,
        exp: "A defendant is the proximate cause of death if the result is a foreseeable consequence of their actions[cite: 28]. An intervening 'omission' (someone else failing to save the victim) is almost never considered a superseding cause[cite: 28]. Alice intentionally created the fatal peril, making her the proximate cause of death despite Charlie's failure to rescue[cite: 28]."
    },
    {
        id: 3,
        topic: "Inchoate Crimes / Attempted Murder",
        fp: "Alice, a specialized cave-diving guide, takes Bob (a novice) on an extreme dive. Halfway through, Alice discovers Bob is having an affair with her husband. Enraged, she intentionally cuts his primary guideline and swims away, intending for him to get lost and drown. Bob gets lost. Later, Charlie, another diver, finds Bob trapped and running out of air. Charlie has a spare tank but decides not to give it to Bob because Charlie wants Bob's rare dive watch. Bob drowns.\n\nAssume instead that Bob found his own way out and survived without injury.",
        q: "If Bob survives, what is Alice's highest criminal liability?",
        opts: [
            "Aggravated battery.",
            "Attempted murder, because she performed a substantial step with the specific intent to cause his death.",
            "No crime, because factual impossibility prevented the occurrence of any tangible physical harm.",
            "Solicitation to commit manslaughter."
        ],
        ans: 1,
        exp: "Attempted murder requires the specific intent to kill and an overt act beyond mere preparation (a substantial step)[cite: 28]. Cutting a novice diver's lifeline in an extreme cave system with the specific intent that he drown clearly constitutes a substantial step, making her guilty of attempted murder when he survives[cite: 28]."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Property Crimes / Embezzlement (Fiduciary)",
        fp: "David is the chief investment officer for a hedge fund, having broad discretionary authority over a $10 million client account. David decides to steal the money. He wires the entire $10 million from the client account into a non-extradition country bank account under his own name and flees.",
        q: "What property crime did David commit regarding the $10 million?",
        opts: [
            "False pretenses.",
            "Larceny by trick.",
            "Common law robbery.",
            "Embezzlement, because he fraudulently converted the financial assets of another while he already possessed lawful, discretionary control over the funds."
        ],
        ans: 3,
        exp: "Embezzlement requires the fraudulent conversion of the property of another by someone already in lawful possession[cite: 28]. As chief investment officer with discretionary authority, David had lawful possession (constructive control) of the funds[cite: 28]. Transferring them to his personal offshore account constitutes embezzlement[cite: 28]."
    },
    {
        id: 5,
        topic: "Property Crimes / False Pretenses",
        fp: "David is the chief investment officer for a hedge fund, having broad discretionary authority over a $10 million client account. David decides to steal the money. He wires the entire $10 million from the client account into a non-extradition country bank account under his own name and flees.\n\nBefore fleeing, David contacts a wealthy private investor. David falsely promises to invest the investor's $5 million into a high-yield government bond. Believing the lie, the investor wires $5 million directly to David's personal account. David immediately steals this money as well.",
        q: "What crime did David commit regarding the $5 million wire transfer?",
        opts: [
            "False pretenses, because he obtained title through deceit.",
            "Embezzlement, because he was acting within his general corporate capacity as an investment officer when communicating with the victim.",
            "Larceny by trick, because the victim only intended to transfer physical custody of the electronic funds.",
            "Extortion."
        ],
        ans: 0,
        exp: "False pretenses requires the defendant to obtain TITLE to property by an intentional false statement of fact with intent to defraud[cite: 28]. Because the investor intended to transfer full ownership (title) of the $5 million to David based on his lie about the bond investment, the crime is false pretenses[cite: 28]."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Property Crimes / Burglary (Common Law)",
        fp: "Evan voluntarily takes illegal PCP, triggering a severe psychosis. He breaks into a public art museum at night, believing the security guard is a hostile combatant in a war zone. Evan shoots the guard, causing serious injuries.",
        q: "Is Evan guilty of common law burglary for entering the museum?",
        opts: [
            "Yes, because he breached the structure at night.",
            "No, because a commercial museum is not a dwelling house, which is strictly required for common law burglary.",
            "No, because his severe hallucinations completely negated his physical volition, rendering the entry involuntary.",
            "Yes, because he committed a violent felony immediately upon crossing the threshold."
        ],
        ans: 1,
        exp: "Common law burglary strictly requires the breaking and entering of a DWELLING HOUSE of another in the nighttime[cite: 28]. A public art museum is a commercial or public structure, not a dwelling house, precluding a common law burglary conviction[cite: 28]."
    },
    {
        id: 7,
        topic: "Defenses / Imperfect Self-Defense vs. Intoxication",
        fp: "Evan voluntarily takes illegal PCP, triggering a severe psychosis. He breaks into a public art museum at night, believing the security guard is a hostile combatant in a war zone. Evan shoots the guard, causing serious injuries.\n\nAssume the guard dies, and Evan is charged with murder.",
        q: "Can Evan assert traditional (perfect) self-defense?",
        opts: [
            "Yes, because he genuinely believed he faced an imminent lethal threat.",
            "No, because the guard was unarmed and in uniform.",
            "No, because the privilege of perfect self-defense requires an objectively reasonable belief of imminent deadly harm, and a belief induced purely by voluntary intoxication is objectively unreasonable as a matter of law.",
            "Yes, but only to mitigate the offense to voluntary manslaughter under the imperfect self-defense doctrine."
        ],
        ans: 2,
        exp: "Perfect self-defense requires that the defendant's belief in the need for deadly force be BOTH honest (subjective) and objectively reasonable[cite: 28]. A belief based entirely on a drug-induced hallucination from voluntary PCP consumption is inherently objectively unreasonable, destroying perfect self-defense[cite: 28]."
    },
    {
        id: 8,
        topic: "Defenses / Insanity & Voluntary Intoxication",
        fp: "Evan voluntarily takes illegal PCP, triggering a severe psychosis. He breaks into a public art museum at night, believing the security guard is a hostile combatant in a war zone. Evan shoots the guard, causing serious injuries.",
        q: "Can Evan successfully claim the insanity defense?",
        opts: [
            "Yes, if the M'Naghten standard applies in the jurisdiction and he could not distinguish right from wrong.",
            "Yes, under the irresistible impulse standard, because he lacked volitional control.",
            "No, because he utilized a deadly weapon.",
            "No, because temporary psychosis caused solely by voluntary intoxication is not a recognized mental disease."
        ],
        ans: 3,
        exp: "To qualify for the insanity defense, the defendant's incapacity must be caused by a valid 'mental disease or defect.'[cite: 28] A temporary psychotic state or hallucination brought on solely by the voluntary ingestion of illicit drugs (like PCP) does not legally qualify as a mental disease for the insanity defense[cite: 28]."
    },
    // FACT PATTERN 4 (Q9-Q10)
    {
        id: 9,
        topic: "Inchoate Crimes / Attempt & Factual Impossibility",
        fp: "Gina and Harry agree to import what they believe are strictly banned counterfeit designer bags. Gina pays Informant Ian $5,000 to drive the bags over the border. Ian is actually an undercover customs agent. Furthermore, the bags they imported were legally licensed and not counterfeit, though Gina and Harry genuinely believed they were illegal fakes.",
        q: "Are Gina and Harry guilty of attempted smuggling of counterfeit goods?",
        opts: [
            "No, because the goods were legal, constituting pure legal impossibility.",
            "Yes, because under modern statutes, factual impossibility is not a defense if the act would have constituted a crime had the circumstances been exactly as the defendants genuinely believed them to be.",
            "No, because the involvement of the undercover agent prevented the completion of the offense.",
            "Yes, because paying a federal agent constitutes bribery, establishing strict liability."
        ],
        ans: 1,
        exp: "Because it is indeed a crime to import counterfeit goods, their mistake regarding the actual authenticity of the specific bags they possessed is a 'factual impossibility.'[cite: 28] Under modern attempt law (and the Model Penal Code), factual impossibility is never a defense to an attempt charge[cite: 28]. They are judged on the facts as they believed them to be[cite: 28]."
    },
    {
        id: 10,
        topic: "Inchoate Crimes / Conspiracy & Undercover Agents",
        fp: "Gina and Harry agree to import what they believe are strictly banned counterfeit designer bags. Gina pays Informant Ian $5,000 to drive the bags over the border. Ian is actually an undercover customs agent. Furthermore, the bags they imported were legally licensed and not counterfeit, though Gina and Harry genuinely believed they were illegal fakes.",
        q: "Are Gina and Harry guilty of conspiracy despite Ian being an undercover agent?",
        opts: [
            "No, because the strict bilateral agreement rule prevents any conspiracy conviction when a government agent is heavily involved in the operations.",
            "No, because Wharton's rule applies to smuggling rings.",
            "Yes, because Gina and Harry formed a valid agreement with each other, regardless of Ian's feigned intent.",
            "Yes, because the Pinkerton doctrine extends liability to all parties interacting with law enforcement."
        ],
        ans: 2,
        exp: "Even under the traditional common law bilateral approach (which requires a genuine agreement between at least two parties), Gina and Harry genuinely agreed WITH EACH OTHER to commit the crime[cite: 28]. Ian's feigned intent does not invalidate the genuine agreement that existed between Gina and Harry[cite: 28]."
    },
    // FACT PATTERN 5 (Q11-Q13)
    {
        id: 11,
        topic: "Property Crimes / Robbery vs. Extortion",
        fp: "Jack approaches Karen at an ATM. He pulls a knife and says, 'Give me your PIN and card right now, or I'll slash your throat.' Karen complies. Jack realizes the ATM is out of cash. He keeps the card and tells Karen, 'I know where you live. Deposit $10,000 in this account by tomorrow, or I will come to your house and kill your family.'",
        q: "What crime did Jack commit regarding the ATM card?",
        opts: [
            "Robbery, because he obtained the victim's personal property directly from her physical presence by utilizing the threat of immediate, lethal physical violence.",
            "Extortion.",
            "Embezzlement.",
            "False pretenses."
        ],
        ans: 0,
        exp: "Robbery requires a taking of personal property (the ATM card) from the person or presence of another by force or the threat of IMMEDIATE physical harm[cite: 28]. Threatening to slash her throat 'right now' clearly establishes the imminent physical threat necessary for robbery[cite: 28]."
    },
    {
        id: 12,
        topic: "Property Crimes / Extortion (Future Harm)",
        fp: "Jack approaches Karen at an ATM. He pulls a knife and says, 'Give me your PIN and card right now, or I'll slash your throat.' Karen complies. Jack realizes the ATM is out of cash. He keeps the card and tells Karen, 'I know where you live. Deposit $10,000 in this account by tomorrow, or I will come to your house and kill your family.'",
        q: "What crime did Jack commit regarding the $10,000 demand?",
        opts: [
            "Robbery.",
            "Larceny by trick, because he used coercion.",
            "False imprisonment, because she could not leave the ATM area.",
            "Extortion, because he threatened future violence against her family."
        ],
        ans: 3,
        exp: "Extortion (blackmail) involves obtaining property or compelling action by means of a threat of FUTURE harm[cite: 28]. Threatening to come to her house and kill her family 'tomorrow' is a threat of future physical harm, distinct from the immediate threat required for robbery[cite: 28]."
    },
    {
        id: 13,
        topic: "General Principles / Merger Doctrine (Separate Acts)",
        fp: "Jack approaches Karen at an ATM. He pulls a knife and says, 'Give me your PIN and card right now, or I'll slash your throat.' Karen complies. Jack realizes the ATM is out of cash. He keeps the card and tells Karen, 'I know where you live. Deposit $10,000 in this account by tomorrow, or I will come to your house and kill your family.'",
        q: "Do the crimes of robbery and extortion merge in this scenario?",
        opts: [
            "Yes, because they were committed during a continuous criminal transaction at a single geographic location.",
            "Yes, because double jeopardy prevents multiple punishments for overlapping property theft charges.",
            "No, they are distinct criminal acts.",
            "No, because they involve different dollar amounts."
        ],
        ans: 2,
        exp: "The merger doctrine typically applies to lesser included offenses (e.g., larceny merges into robbery) or inchoate crimes merging into completed crimes[cite: 28]. Here, Jack committed two distinct, separate acts involving different property (the card vs. the future $10k) and different threats (immediate throat slashing vs. future family harm)[cite: 28]. They do not merge[cite: 28]."
    },
    // FACT PATTERN 6 (Q14-Q16)
    {
        id: 14,
        topic: "Property Crimes / Arson (Common Law)",
        fp: "Leo intends to burn down a rival's art gallery. He hires Mike to do it. Mike pours gasoline in the gallery and lights a match. The fire destroys the building. Unknown to Mike or Leo, a homeless man was sleeping in the back room and dies in the fire. The jurisdiction follows the agency theory of felony murder and the traditional merger doctrine.",
        q: "Is Leo guilty of common law arson?",
        opts: [
            "No, because the targeted structure was a commercial gallery rather than a dwelling house.",
            "Yes, because the malicious burning of any permanent architectural structure satisfies the common law definition.",
            "No, because he was not physically present at the scene of the crime when the match was struck.",
            "Yes, because the use of an accelerant constitutes per se malice."
        ],
        ans: 0,
        exp: "At strict common law, arson is defined as the malicious burning of the DWELLING house of another[cite: 28]. A commercial art gallery is not a dwelling house, precluding a common law arson conviction (though modern statutes routinely cover commercial buildings)[cite: 28]."
    },
    {
        id: 15,
        topic: "Homicide / Felony Murder (Merger Doctrine / Ireland Rule)",
        fp: "Leo intends to burn down a rival's art gallery. He hires Mike to do it. Mike pours gasoline in the gallery and lights a match. The fire destroys the building. Unknown to Mike or Leo, a homeless man was sleeping in the back room and dies in the fire. The jurisdiction follows the agency theory of felony murder and the traditional merger doctrine.\n\nAssume the jurisdiction uses modern statutory felony murder, which includes arson of commercial buildings.",
        q: "Does the arson merge into the homicide, barring a felony murder charge?",
        opts: [
            "Yes, under the Ireland rule, because the destructive act directly caused the lethal physical injuries.",
            "No, because arson has an independent felonious purpose.",
            "Yes, because a human being died within the structure during the commission of the offense.",
            "No, because arson is a specific intent crime that never merges under any circumstances."
        ],
        ans: 1,
        exp: "Under the merger doctrine (Ireland rule), a felony murder charge cannot be based on a felony that is an integral part of the homicide (e.g., assault or battery) because it merges[cite: 28]. However, arson has an independent collateral felonious purpose (the destruction of property)[cite: 28]. Thus, it does not merge and serves as a valid predicate for felony murder[cite: 28]."
    },
    {
        id: 16,
        topic: "Homicide / Felony Murder (Co-Felon Liability & Foreseeability)",
        fp: "Leo intends to burn down a rival's art gallery. He hires Mike to do it. Mike pours gasoline in the gallery and lights a match. The fire destroys the building. Unknown to Mike or Leo, a homeless man was sleeping in the back room and dies in the fire. The jurisdiction follows the agency theory of felony murder and the traditional merger doctrine.",
        q: "Is Leo liable for the homeless man's death under felony murder?",
        opts: [
            "No, because he was not present.",
            "No, the death was unforeseeable because they genuinely did not know the man was sleeping inside.",
            "Yes, because all conspirators are strictly liable for all acts of their associates.",
            "Yes, because a death resulting from the burning of a commercial building is a highly foreseeable consequence of committing the inherently dangerous felony of arson."
        ],
        ans: 3,
        exp: "Under the felony murder rule and accomplice/conspirator liability, a defendant is liable for a death caused by a co-felon during an inherently dangerous felony if the death is a foreseeable result[cite: 28]. It is highly foreseeable that someone (a guard, a homeless person, a firefighter) might be inside or near a burning building and die as a result of the arson[cite: 28]."
    },
    // FACT PATTERN 7 (Q17-Q18)
    {
        id: 17,
        topic: "Crimes against Person / Kidnapping (Asportation)",
        fp: "Nina points a gun at a taxi driver, Oscar, and forces him to drive 100 miles across the state while she sleeps in the back. During the drive, Oscar sees a police checkpoint, stops the car, and runs away.",
        q: "Is Nina guilty of kidnapping?",
        opts: [
            "No, because Oscar was operating his own vehicle.",
            "No, because she was asleep during the transit, thereby lacking continuous physical control over the victim's movements.",
            "Yes, because forcing a victim to drive a vehicle 100 miles constitutes substantial asportation that significantly increases the victim's risk of physical harm.",
            "Yes, but the charge is mitigated to false imprisonment."
        ],
        ans: 2,
        exp: "Kidnapping requires unlawful confinement and substantial asportation (movement) that increases the risk of harm[cite: 28]. Forcing a victim at gunpoint to drive their vehicle 100 miles clearly satisfies the substantial movement requirement[cite: 28]. Nina's temporary sleep does not negate the ongoing coercive threat she established[cite: 28]."
    },
    {
        id: 18,
        topic: "Crimes against Person / False Imprisonment Merger",
        fp: "Nina points a gun at a taxi driver, Oscar, and forces him to drive 100 miles across the state while she sleeps in the back. During the drive, Oscar sees a police checkpoint, stops the car, and runs away.",
        q: "If Nina is charged with both kidnapping and false imprisonment, what is the outcome?",
        opts: [
            "The false imprisonment charge merges into the kidnapping charge.",
            "She can be punished consecutively for both distinct offenses.",
            "The false imprisonment charge is dismissed for lack of specific intent.",
            "The charges are automatically consolidated into extortion."
        ],
        ans: 0,
        exp: "False imprisonment (unlawful confinement) is a lesser included offense of kidnapping (unlawful confinement plus asportation)[cite: 28]. Under the Double Jeopardy Clause and standard merger doctrines, a defendant cannot be separately convicted and punished for both the greater and lesser included offenses based on the same continuous act[cite: 28]."
    },
    // FACT PATTERN 8 (Q19-Q21)
    {
        id: 19,
        topic: "Property Crimes / Burglary (Intent Timing)",
        fp: "Paul climbs through an open window of a house at night to escape a pack of wild dogs. Once inside, he feels safe. 30 minutes later, he sees a valuable painting and decides to steal it. He puts it in his bag. As he leaves through the front door, he pushes the locked door open.",
        q: "Is Paul guilty of common law burglary?",
        opts: [
            "Yes, because he stole a valuable painting after unlawfully crossing the residential threshold during nighttime hours.",
            "No, because he did not possess the specific intent to commit a felony at the exact time he entered the dwelling.",
            "Yes, because pushing the front door open to exit the premises satisfies the constructive breaking requirement under common law.",
            "No, because the 'open window' exception grants implied consent to all individuals seeking emergency shelter."
        ],
        ans: 1,
        exp: "Common law burglary requires the specific intent to commit a felony inside the dwelling AT THE TIME of the breaking and entering[cite: 28]. Because Paul only intended to escape the dogs upon entry, he lacked the requisite specific intent[cite: 28]. Additionally, breaking OUT of a house does not constitute burglary at common law[cite: 28]."
    },
    {
        id: 20,
        topic: "Defenses / Necessity vs Larceny",
        fp: "Paul climbs through an open window of a house at night to escape a pack of wild dogs. Once inside, he feels safe. 30 minutes later, he sees a valuable painting and decides to steal it. He puts it in his bag. As he leaves through the front door, he pushes the locked door open.",
        q: "Does the defense of necessity shield Paul from the larceny charge?",
        opts: [
            "Yes, because he was forced to enter the house to escape the immediate physical threat posed by the wild dogs.",
            "Yes, because necessity provides absolute transactional immunity for all crimes committed during an ongoing catastrophic emergency.",
            "No, because wild animals are considered natural forces rather than human coercion, triggering duress instead.",
            "No, because while the sudden emergency justified his initial trespass into the home to save his life, it did not legally justify the subsequent, completely unrelated theft of the painting."
        ],
        ans: 3,
        exp: "The necessity defense justifies committing a crime only if it is reasonably necessary to avoid a greater, imminent harm[cite: 28]. While necessity justifies Paul's initial trespass (entering the house to avoid being mauled by dogs), stealing a painting 30 minutes later was completely unnecessary for his survival, so the defense does not apply to the theft[cite: 28]."
    },
    {
        id: 21,
        topic: "Property Crimes / Burglary (Breaking Out)",
        fp: "Paul climbs through an open window of a house at night to escape a pack of wild dogs. Once inside, he feels safe. 30 minutes later, he sees a valuable painting and decides to steal it. He puts it in his bag. As he leaves through the front door, he pushes the locked door open.",
        q: "Did Paul's act of pushing the locked door open to leave constitute a 'breaking' for the purposes of common law burglary?",
        opts: [
            "Yes, because overcoming any physical barrier requires the application of mechanical force.",
            "Yes, because turning a doorknob qualifies as a sufficient exertion of energy.",
            "No, because breaking out of a structure does not constitute common law burglary.",
            "No, because the door was already unlocked from the inside."
        ],
        ans: 2,
        exp: "Common law burglary requires a breaking and entering INTO the dwelling[cite: 28]. Pushing a door open to EXIT the building (breaking out) does not satisfy the 'breaking' element of traditional common law burglary[cite: 28]."
    },
    // FACT PATTERN 9 (Q22-Q23)
    {
        id: 22,
        topic: "Parties to a Crime / Accomplice Withdrawal",
        fp: "Quinn asks Rita to help him steal a car by disabling the alarm. Rita disables the alarm. Before Quinn arrives to take the car, Rita regrets her actions, calls Quinn and says, 'I'm not helping you.' However, she leaves the alarm disabled. Quinn steals the car.",
        q: "Did Rita effectively withdraw from her role as an accomplice?",
        opts: [
            "Yes, because she clearly communicated her renunciation over the phone.",
            "No, because to successfully withdraw from accessorial liability, she must not only communicate her renunciation but also take affirmative steps to neutralize her prior material assistance before the crime occurs.",
            "Yes, because the principal acknowledged her verbal withdrawal.",
            "No, withdrawal requires a formal police confession."
        ],
        ans: 1,
        exp: "To successfully withdraw as an accomplice, a person must repudiate their prior aid, communicate their withdrawal to the principal, AND neutralize any material assistance they previously provided before the crime becomes unstoppable[cite: 28]. By leaving the alarm disabled, Rita failed to neutralize her material aid, rendering her withdrawal ineffective[cite: 28]."
    },
    {
        id: 23,
        topic: "Parties to a Crime / Accomplice Liability",
        fp: "Quinn asks Rita to help him steal a car by disabling the alarm. Rita disables the alarm. Before Quinn arrives to take the car, Rita regrets her actions, calls Quinn and says, 'I'm not helping you.' However, she leaves the alarm disabled. Quinn steals the car.",
        q: "Is Rita guilty of larceny as an accomplice?",
        opts: [
            "No, because she verbally withdrew.",
            "No, because she was not physically present at the scene during the taking.",
            "Yes, under strict liability standards.",
            "Yes, because she provided material aid with the requisite specific intent."
        ],
        ans: 3,
        exp: "An accomplice is one who aids, abets, or encourages the principal in the commission of the crime, with the specific intent that the crime be committed[cite: 28]. Rita intentionally disabled the alarm to facilitate the theft[cite: 28]. Because her withdrawal was legally ineffective, she remains fully liable as an accomplice to larceny[cite: 28]."
    },
    // FACT PATTERN 10 (Q24-Q25)
    {
        id: 24,
        topic: "General Principles / Strict Liability & Mistake of Fact",
        fp: "Steve manages a hazardous waste facility. A federal statute makes it a strict liability felony to discharge chemical X into public waterways. Steve personally opens a main drainage valve, reasonably believing the tank contains purified water due to a massive labeling error by the supplier. The tank actually contains chemical X, which flows into the river.",
        q: "Is Steve's reasonable mistake of fact a defense to the strict liability offense?",
        opts: [
            "No, because strict liability offenses do not require a culpable mental state that a mistake could negate.",
            "Yes, because an honest and reasonable mistake of fact is an absolute defense to all recognized criminal charges.",
            "No, because federal statutes override the common law.",
            "Yes, because he lacked the malicious intent to pollute the local environment."
        ],
        ans: 0,
        exp: "Strict liability offenses (often public welfare offenses like environmental dumping) require no proof of a culpable mental state (mens rea) regarding the prohibited act[cite: 28]. Because no mens rea is required, a mistake of fact—even if entirely honest and objectively reasonable—is never a defense[cite: 28]."
    },
    {
        id: 25,
        topic: "General Principles / Strict Liability Actus Reus",
        fp: "Steve manages a hazardous waste facility. A federal statute makes it a strict liability felony to discharge chemical X into public waterways. Steve personally opens a main drainage valve, reasonably believing the tank contains purified water due to a massive labeling error by the supplier. The tank actually contains chemical X, which flows into the river.",
        q: "What must the prosecution prove to secure a conviction against Steve?",
        opts: [
            "That he acted with gross criminal negligence regarding the facility's safety protocols.",
            "That he harbored malice aforethought.",
            "That he demonstrated a reckless disregard for the safety of the public waterways.",
            "Only that he performed the voluntary physical actus reus of opening the valve which resulted in the prohibited discharge of the regulated chemical."
        ],
        ans: 3,
        exp: "For a strict liability offense, the prosecution does not need to prove intent, recklessness, or negligence (mens rea)[cite: 28]. They must only prove that the defendant committed the voluntary physical act (actus reus)—opening the valve—that caused the statutorily prohibited result (discharging the chemical)[cite: 28]."
    }
];
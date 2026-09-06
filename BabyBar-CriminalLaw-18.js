const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Homicide / Proximate Cause & Transferred Intent Limits",
        fp: "Alice aims a specialized armor-piercing rifle at Bob, intending to kill him. The bullet strikes Bob, but passes completely through him, causing only a non-lethal flesh wound. However, the high-velocity bullet continues into an adjacent industrial building, striking a highly pressurized, unmarked gas line. The gas line violently explodes, collapsing the building. An unknown trespasser, Charlie, is crushed and killed by the falling debris.",
        q: "Is Alice guilty of the first-degree murder of Charlie under the doctrine of transferred intent?",
        opts: [
            "No, because the bizarre, extraordinarily unforeseeable manner of death via gas explosion severs proximate causation, rendering the transferred intent doctrine inapplicable.",
            "Yes, because transferred intent holds defendants strictly liable for any resulting civilian fatalities, regardless of the intervening causal chain.",
            "No, because the doctrine of transferred intent is completely inapplicable to capital-level homicide prosecutions.",
            "Yes, because Charlie's status as an illegal trespasser is irrelevant to the initial formation of specific malice aforethought against Bob."
        ],
        ans: 0,
        exp: "Transferred intent applies when a defendant intends to kill one person but kills another. However, the defendant must still be the PROXIMATE CAUSE of the victim's death. The bizarre and highly extraordinary chain of events (bullet passing through, hitting an unmarked gas line, causing an explosion and building collapse) is an unforeseeable superseding sequence that severs proximate causation."
    },
    {
        id: 2,
        topic: "Inchoate Crimes / Attempted Murder",
        fp: "Alice aims a specialized armor-piercing rifle at Bob, intending to kill him. The bullet strikes Bob, but passes completely through him, causing only a non-lethal flesh wound. However, the high-velocity bullet continues into an adjacent industrial building, striking a highly pressurized, unmarked gas line. The gas line violently explodes, collapsing the building. An unknown trespasser, Charlie, is crushed and killed by the falling debris.",
        q: "What is Alice's criminal liability regarding Bob?",
        opts: [
            "No crime, because the bullet failed to inflict a fatal injury.",
            "Attempted murder, because she took a substantial step with specific intent to kill.",
            "Aggravated assault only, because she failed to cause death.",
            "Voluntary manslaughter, due to her failure to complete the intended objective."
        ],
        ans: 1,
        exp: "Attempted murder requires the specific intent to kill and an overt act beyond mere preparation (a substantial step). Firing a rifle directly at the victim with the intent to kill him satisfies all elements of attempted murder, regardless of whether the victim survives."
    },
    {
        id: 3,
        topic: "Homicide / Depraved Heart Murder",
        fp: "Alice aims a specialized armor-piercing rifle at Bob, intending to kill him. The bullet strikes Bob, but passes completely through him, causing only a non-lethal flesh wound. However, the high-velocity bullet continues into an adjacent industrial building, striking a highly pressurized, unmarked gas line. The gas line violently explodes, collapsing the building. An unknown trespasser, Charlie, is crushed and killed by the falling debris.",
        q: "Could Alice be successfully prosecuted for the depraved heart murder of Charlie?",
        opts: [
            "No, because she did not intend to harm Charlie.",
            "No, because the gas line was unmarked, meaning she could not have known the specific risk of a catastrophic explosion.",
            "Yes, because firing an armor-piercing weapon in a populated urban environment exhibits an extreme and reckless indifference to human life.",
            "Yes, because depraved heart murder is a strict liability offense."
        ],
        ans: 2,
        exp: "Depraved heart murder requires an extreme, conscious disregard for an unjustifiably high risk to human life. Firing a high-powered, armor-piercing rifle in a populated urban area constitutes extreme recklessness that creates a massive risk to bystanders, potentially satisfying the malice requirement for second-degree murder even if the exact mechanism (the gas line) was unknown."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Defenses / Battered Spouse Syndrome & Imperfect Self-Defense",
        fp: "Diane has been severely physically abused by her husband, Edgar, for years. One night, Edgar falls asleep on the couch. Diane, terrified he will beat her again when he wakes up, uses her phone to hire a hitman, Frank, to kill Edgar while he sleeps. Frank arrives and shoots Edgar dead.",
        q: "Can Diane successfully assert traditional self-defense?",
        opts: [
            "Yes, because she reasonably believed she was in danger.",
            "Yes, because battered spouse syndrome completely eliminates the imminence requirement.",
            "No, because the hiring of a third party to assassinate a sleeping victim entirely lacks the required element of an imminent lethal threat.",
            "No, because she used a third party instead of killing him herself."
        ],
        ans: 2,
        exp: "Traditional self-defense requires that the defendant reasonably believe they face an IMMINENT threat of death or great bodily harm. Edgar was asleep, and hiring a hitman demonstrates a lack of immediate, split-second necessity. Battered spouse syndrome may help explain reasonableness, but it does not completely abolish the imminence requirement for contract killings of sleeping persons."
    },
    {
        id: 5,
        topic: "Parties to a Crime / Principal Liability (Hitman)",
        fp: "Diane has been severely physically abused by her husband, Edgar, for years. One night, Edgar falls asleep on the couch. Diane, terrified he will beat her again when he wakes up, uses her phone to hire a hitman, Frank, to kill Edgar while he sleeps. Frank arrives and shoots Edgar dead.",
        q: "What is Frank's criminal liability for the homicide?",
        opts: [
            "First-degree murder, because a contract killing is inherently premeditated and deliberate.",
            "Voluntary manslaughter, because he acted as an agent for a provoked victim.",
            "Second-degree murder, because he lacked personal malice against Edgar.",
            "Involuntary manslaughter, because he was merely performing a requested service."
        ],
        ans: 0,
        exp: "A contract killing is the classic example of first-degree murder. The hitman (Frank) formulates the intent to kill, plans the execution, and carries it out for financial gain, perfectly satisfying the requirements of premeditation and deliberation. He does not inherit Diane's potential mitigation."
    },
    // FACT PATTERN 3 (Q6-Q7)
    {
        id: 6,
        topic: "Property Crimes / Embezzlement Distinctions (Corporate Hack)",
        fp: "George is a low-level IT maintenance worker at a massive corporation. He has no authority over corporate finances or bank accounts. One night, he hacks into the CEO's terminal, accesses the corporate banking portal, and executes a transfer of $1,000,000 to his own offshore account.",
        q: "Why is George NOT guilty of embezzlement?",
        opts: [
            "Because he utilized a computer rather than completing a manual physical taking.",
            "Because he never acquired lawful possession of the corporate funds prior to the unauthorized digital conversion.",
            "Because the monetary amount vastly exceeded the statutory limits for white-collar financial infractions.",
            "Because he was a recognized employee of the corporation."
        ],
        ans: 1,
        exp: "Embezzlement requires the fraudulent conversion of property by someone who is ALREADY in lawful possession of it (like a CFO or a trusted bailee). Because George was a low-level IT worker with no lawful authority or trusted possession over the funds, he could not embezzle them."
    },
    {
        id: 7,
        topic: "Property Crimes / False Pretenses vs Larceny",
        fp: "George is a low-level IT maintenance worker at a massive corporation. He has no authority over corporate finances or bank accounts. One night, he hacks into the CEO's terminal, accesses the corporate banking portal, and executes a transfer of $1,000,000 to his own offshore account.",
        q: "What property crime did George commit?",
        opts: [
            "Robbery, because the hacking bypasses digital security via constructive force.",
            "Larceny by trick, because the bank intended to retain title.",
            "False pretenses, because he obtained title to the electronic funds through a deceptive cyber scheme.",
            "Extortion, because he utilized illicit access."
        ],
        ans: 2,
        exp: "By logging in as the CEO, George fraudulently represented himself to the bank as an authorized party. The bank, relying on this deception, intended to (and did) transfer full ownership (title) of the $1,000,000 to the destination account. Obtaining title by intentional deceit is false pretenses."
    },
    // FACT PATTERN 4 (Q8-Q9)
    {
        id: 8,
        topic: "Inchoate Crimes / Conspiracy & Withdrawal Timing",
        fp: "Hannah, Ian, and Jack agree to rob a bank. They outline the plan perfectly. Unknown to the others, Jack is an undercover police officer. The night before the robbery, Hannah feels guilty. She throws her designated ski mask in the trash and stays home in bed, but she does not communicate this to Ian or Jack. Ian proceeds to the bank alone and attempts the robbery.",
        q: "Is Hannah guilty of conspiracy to commit robbery?",
        opts: [
            "No, because she physically discarded her equipment.",
            "No, because the presence of the undercover officer legally nullified the entire agreement.",
            "Yes, but only as an accessory before the fact.",
            "Yes, because she formed a valid bilateral agreement with Ian, and an overt act was completed prior to her silent withdrawal."
        ],
        ans: 3,
        exp: "Conspiracy requires an agreement and an overt act. Hannah and Ian (two non-police actors) formed a valid bilateral agreement. Once an overt act occurred, the conspiracy was complete. Her later silent withdrawal does not erase the already completed crime of conspiracy."
    },
    {
        id: 9,
        topic: "Parties to a Crime / Accomplice Withdrawal (Ineffective)",
        fp: "Hannah, Ian, and Jack agree to rob a bank. They outline the plan perfectly. Unknown to the others, Jack is an undercover police officer. The night before the robbery, Hannah feels guilty. She throws her designated ski mask in the trash and stays home in bed, but she does not communicate this to Ian or Jack. Ian proceeds to the bank alone and attempts the robbery.",
        q: "Is Hannah liable for Ian's attempted robbery?",
        opts: [
            "Yes, because a legally effective withdrawal requires an affirmative communication to all co-conspirators neutralizing her prior assistance, which she failed to execute.",
            "No, because she was not physically present.",
            "No, because her destruction of the ski mask served as a legally sufficient neutralization of her material aid.",
            "Yes, but her liability is strictly capped at a misdemeanor."
        ],
        ans: 0,
        exp: "To successfully withdraw and avoid liability for the SUBSEQUENT crimes of co-conspirators, a defendant must communicate their withdrawal to all co-conspirators in time for them to abandon the plan. Hannah's silent withdrawal by staying home and throwing away her mask was ineffective to shield her from Ian's attempt."
    },
    // FACT PATTERN 5 (Q10-Q11)
    {
        id: 10,
        topic: "Property Crimes / Burglary (Constructive Breaking & Dwelling)",
        fp: "Karen knocks on the door of Liam's hotel room, falsely claiming to be 'Room Service.' Liam opens the door. Karen walks in, intending to steal his laptop. She searches the room but finds nothing of value. Frustrated, she intentionally sets fire to Liam's expensive suitcase resting on the bed. The suitcase burns completely, but the fire is extinguished before the bed or walls catch fire.",
        q: "Did Karen commit common law burglary?",
        opts: [
            "No, because a hotel room is a commercial lodging rather than a permanent private dwelling house.",
            "Yes, because a hotel room is considered a dwelling, and gaining entry via fraud constitutes a constructive breaking.",
            "No, because she failed to steal any property from the premises.",
            "Yes, because setting the suitcase on fire automatically satisfies the specific intent requirement."
        ],
        ans: 1,
        exp: "A hotel room used for sleeping is considered a 'dwelling house' under the common law. A 'breaking' can be constructive, such as gaining entry by fraud or trick (claiming to be room service). Since she entered with intent to commit a felony (theft), it satisfies the core elements."
    },
    {
        id: 11,
        topic: "Property Crimes / Arson (Charring Requirement)",
        fp: "Karen knocks on the door of Liam's hotel room, falsely claiming to be 'Room Service.' Liam opens the door. Karen walks in, intending to steal his laptop. She searches the room but finds nothing of value. Frustrated, she intentionally sets fire to Liam's expensive suitcase resting on the bed. The suitcase burns completely, but the fire is extinguished before the bed or walls catch fire.",
        q: "Is Karen guilty of common law arson?",
        opts: [
            "Yes, because she intentionally utilized fire within an enclosed residential structure.",
            "Yes, because the suitcase was destroyed by a malicious act.",
            "No, because common law arson strictly requires the burning of the dwelling structure itself, and only personal property was burned here.",
            "No, because she originally entered the room with the intent to steal rather than the intent to burn."
        ],
        ans: 2,
        exp: "Common law arson requires the malicious burning of the dwelling house of another. The burning must cause some structural damage (charring) to the building itself or its fixtures. Burning personal property contained within the house (like a suitcase) without damaging the structure does not constitute common law arson."
    },
    // FACT PATTERN 6 (Q12-Q13)
    {
        id: 12,
        topic: "Homicide / Provocative Act Doctrine & Co-Felon Death",
        fp: "Mike and Nick commit an armed robbery of a convenience store. The police arrive outside. Mike grabs the store owner, holds a gun to his head, and uses him as a human shield to walk out the front door. Police snipers fire at Mike. The bullet misses Mike, but strikes and kills Nick, the co-felon, who was running out behind Mike.",
        q: "Under the Redline rule and the provocative act doctrine, can Mike be liable for Nick's death?",
        opts: [
            "No, because the police officer's bullet caused the death.",
            "No, because the felony murder rule never applies when the victim is a participant in the underlying crime.",
            "Yes, because all felons are strictly liable for any fatalities.",
            "Yes, because using a human shield constitutes highly provocative conduct establishing implied malice, overcoming standard co-felon limitations."
        ],
        ans: 3,
        exp: "While the traditional Redline rule states that felony murder does not apply when a co-felon is justifiably killed by police, the 'provocative act' doctrine provides an alternate path to murder liability. If a felon commits an independent, highly reckless act (using a human shield) that provokes lethal return fire, they can be convicted of murder based on their own implied malice, even if the person killed is a co-felon."
    },
    {
        id: 13,
        topic: "Homicide / Felony Murder Merger Doctrine",
        fp: "Mike and Nick commit an armed robbery of a convenience store. The police arrive outside. Mike grabs the store owner, holds a gun to his head, and uses him as a human shield to walk out the front door. Police snipers fire at Mike. The bullet misses Mike, but strikes and kills Nick, the co-felon, who was running out behind Mike.",
        q: "Does the underlying robbery merge into the homicide, barring a felony murder charge?",
        opts: [
            "No, because robbery is an independent collateral felony with a separate felonious purpose.",
            "Yes, because the robbery involved violent physical force against the store owner.",
            "Yes, because the taking of a hostage directly caused the lethal response.",
            "No, because merger doctrines only apply to inchoate offenses like attempt and solicitation."
        ],
        ans: 0,
        exp: "The merger doctrine (Ireland rule) prevents a felony murder charge if the underlying felony is an integral part of the homicide (e.g., assault or battery). Robbery is an independent felony with an independent purpose (acquiring property) and therefore does NOT merge, allowing it to serve as a valid predicate for felony murder."
    },
    // FACT PATTERN 7 (Q14-Q15)
    {
        id: 14,
        topic: "Defenses / Voluntary Intoxication & Mistake of Fact",
        fp: "Olivia is heavily and voluntarily intoxicated at a nightclub. When leaving, she grabs a $10,000 mink coat from the coat check, honestly but unreasonably believing it is her own cheap synthetic jacket. She takes it home. The next morning, she wakes up sober, realizes the coat is an extremely valuable mink that doesn't belong to her, but decides to sell it to a pawn shop anyway.",
        q: "Is Olivia guilty of larceny at the exact moment she initially took the coat from the nightclub?",
        opts: [
            "Yes, because voluntary intoxication is never a defense to property crimes.",
            "No, because her mistake of fact, though induced by voluntary intoxication, negated the specific intent to steal at the time of the taking.",
            "Yes, because her mistake was objectively unreasonable.",
            "No, because the coat check attendant voluntarily surrendered physical custody of the garment."
        ],
        ans: 1,
        exp: "Larceny is a specific intent crime requiring the intent to permanently deprive the owner at the time of the taking. Voluntary intoxication can cause a mistake of fact (believing the coat is hers). Because this honest mistake negates the specific intent to steal, the initial taking was not larceny."
    },
    {
        id: 15,
        topic: "Property Crimes / Larceny (Continuing Trespass Limits)",
        fp: "Olivia is heavily and voluntarily intoxicated at a nightclub. When leaving, she grabs a $10,000 mink coat from the coat check, honestly but unreasonably believing it is her own cheap synthetic jacket. She takes it home. The next morning, she wakes up sober, realizes the coat is an extremely valuable mink that doesn't belong to her, but decides to sell it to a pawn shop anyway.",
        q: "Does the continuing trespass doctrine apply when she sells the coat the next day?",
        opts: [
            "Yes, because she ultimately formed the requisite malicious intent.",
            "Yes, because selling stolen property is a strict liability commercial offense.",
            "No, because her initial taking was innocent rather than trespassory, rendering the doctrine entirely inapplicable.",
            "No, because the nightclub abandoned their legal claim to the property."
        ],
        ans: 2,
        exp: "The continuing trespass doctrine fictionally extends a trespassory taking until the moment the defendant forms the intent to steal. However, it ONLY applies if the initial taking was wrongful (trespassory). Because Olivia's initial taking was innocent (believing the coat was hers), the doctrine does not apply to her later decision to sell it."
    },
    // FACT PATTERN 8 (Q16-Q17)
    {
        id: 16,
        topic: "Parties to a Crime / Accomplice Liability (Stake in Venture)",
        fp: "Paul operates an underground weapons dealing business. He knows that Quinn is a hitman planning to murder Ray. Quinn asks to buy a specialized sniper rifle. Paul usually sells the rifle for $1,000, but knowing it will be used for a high-profile assassination, he demands $5,000 as a 'hush fee.' Quinn agrees, buys the gun, and kills Ray.",
        q: "Is Paul liable as an accomplice to the murder?",
        opts: [
            "No, because a merchant is never liable for the subsequent misuse of commercial products.",
            "No, because he did not physically pull the trigger or act as a lookout.",
            "Yes, but only under the strict parameters of the felony murder rule.",
            "Yes, because charging an excessive premium establishes a financial stake in the criminal venture, satisfying the specific intent to facilitate the offense."
        ],
        ans: 3,
        exp: "While selling ordinary goods at a normal price with knowledge of a crime does not typically make the seller an accomplice, charging a 'premium' because of the illegal nature of the buyer's intended use establishes a stake in the venture. This satisfies the specific intent requirement, making the seller an accomplice."
    },
    {
        id: 17,
        topic: "Inchoate Crimes / Conspiracy (Stake in Venture)",
        fp: "Paul operates an underground weapons dealing business. He knows that Quinn is a hitman planning to murder Ray. Quinn asks to buy a specialized sniper rifle. Paul usually sells the rifle for $1,000, but knowing it will be used for a high-profile assassination, he demands $5,000 as a 'hush fee.' Quinn agrees, buys the gun, and kills Ray.",
        q: "Can Paul be convicted of conspiracy to commit murder?",
        opts: [
            "Yes, because his financial stake in the venture implies a tacit bilateral agreement to the completion of the criminal objective.",
            "No, because conspiracy requires a formal, written or explicitly verbalized contractual arrangement.",
            "No, because Paul was merely an accessory after the fact.",
            "Yes, because the sale of any firearm constitutes a per se conspiracy under modern federal statutes."
        ],
        ans: 0,
        exp: "Conspiracy requires an agreement to commit a crime. While a simple sale doesn't usually prove agreement, when a seller charges an exorbitant premium based on the illegal use, courts infer a tacit agreement to the criminal enterprise because the seller now shares a financial interest in its success."
    },
    // FACT PATTERN 9 (Q18-Q19)
    {
        id: 18,
        topic: "Defenses / Entrapment (Subjective Test Predisposition)",
        fp: "Sam is a known, active drug dealer with multiple recent convictions for selling heroin. An undercover officer targets Sam. The officer approaches Sam and asks to buy drugs. Sam initially refuses, saying he is laying low. The officer then repeatedly threatens to plant evidence and arrest Sam's elderly mother unless Sam sells him the drugs. Sam complies out of fear for his mother.",
        q: "Under the subjective test for entrapment, will Sam's defense succeed?",
        opts: [
            "Yes, because the officer's threats constituted severe and unlawful coercion.",
            "No, because his prior history as a drug dealer demonstrates he was predisposed to commit the offense, defeating the subjective test.",
            "Yes, because the government initiated the transaction.",
            "No, because entrapment is completely unavailable for narcotics offenses."
        ],
        ans: 1,
        exp: "The subjective test for entrapment requires the defendant to prove they were NOT predisposed to commit the crime prior to government contact. Because Sam is a known, active dealer with recent convictions, he is legally predisposed to sell drugs. Therefore, the subjective entrapment defense fails, regardless of the officer's severe tactics."
    },
    {
        id: 19,
        topic: "Defenses / Outrageous Government Conduct (Due Process)",
        fp: "Sam is a known, active drug dealer with multiple recent convictions for selling heroin. An undercover officer targets Sam. The officer approaches Sam and asks to buy drugs. Sam initially refuses, saying he is laying low. The officer then repeatedly threatens to plant evidence and arrest Sam's elderly mother unless Sam sells him the drugs. Sam complies out of fear for his mother.",
        q: "Given that standard entrapment fails, what alternative defense provides Sam the best chance for dismissal?",
        opts: [
            "Duress, because the officer's threats were directed at a third party.",
            "Necessity, because he chose the lesser of two evils.",
            "Outrageous Government Conduct, because the police tactics were so extreme and coercive that they violated fundamental constitutional due process.",
            "Mistake of law, because he believed complying with an officer was a legal requirement."
        ],
        ans: 2,
        exp: "When law enforcement tactics are so extreme, coercive, and fundamentally unfair that they shock the conscience (e.g., threatening to frame a suspect's elderly mother to force a sale), the defendant can invoke the 'Outrageous Government Conduct' defense. This is a violation of the Due Process Clause, resulting in dismissal even if the defendant was predisposed."
    },
    // FACT PATTERN 10 (Q20-Q22)
    {
        id: 20,
        topic: "Crimes against Person / Kidnapping vs. Confinement",
        fp: "Tom breaks into Ursula's house at gunpoint. He forces her to sit in a chair in her living room. He keeps his gun pointed at her for 24 straight hours. He demands that she sign a legal deed transferring ownership of her house to him. Exhausted and terrified, she signs the deed. Tom takes the paper and leaves.",
        q: "Is Tom guilty of kidnapping?",
        opts: [
            "Yes, because the confinement lasted for an extended, continuous 24-hour period.",
            "Yes, because he utilized a loaded deadly weapon.",
            "No, because he completely failed to move the victim from one location to another, completely lacking the requisite element of asportation.",
            "No, because Ursula signed the deed voluntarily."
        ],
        ans: 2,
        exp: "Kidnapping requires BOTH unlawful confinement and 'asportation' (movement) of the victim. Despite holding Ursula hostage for 24 hours at gunpoint, Tom never moved her from the location. Without movement, the crime is false imprisonment, not kidnapping."
    },
    {
        id: 21,
        topic: "Crimes against Person / False Imprisonment",
        fp: "Tom breaks into Ursula's house at gunpoint. He forces her to sit in a chair in her living room. He keeps his gun pointed at her for 24 straight hours. He demands that she sign a legal deed transferring ownership of her house to him. Exhausted and terrified, she signs the deed. Tom takes the paper and leaves.",
        q: "By forcing her to remain in the chair for 24 hours, what crime against the person did Tom commit?",
        opts: [
            "False imprisonment, because he intentionally and unlawfully confined her to a bounded area against her will.",
            "Kidnapping, due to the extreme length of time.",
            "Aggravated assault only.",
            "Robbery, because he stole her personal liberty."
        ],
        ans: 0,
        exp: "False imprisonment is the intentional, unlawful confinement of a person to a bounded area without their valid consent. Holding someone in a chair at gunpoint for 24 hours perfectly satisfies all elements of false imprisonment."
    },
    {
        id: 22,
        topic: "Property Crimes / Robbery (Real Property Limitation)",
        fp: "Tom breaks into Ursula's house at gunpoint. He forces her to sit in a chair in her living room. He keeps his gun pointed at her for 24 straight hours. He demands that she sign a legal deed transferring ownership of her house to him. Exhausted and terrified, she signs the deed. Tom takes the paper and leaves.",
        q: "Did Tom commit common law robbery regarding the house itself?",
        opts: [
            "Yes, because he used the immediate threat of lethal force to secure the asset.",
            "No, because real property (a house) cannot be the subject of common law robbery, which strictly applies only to personal property.",
            "Yes, because the signed deed physically represents the real estate.",
            "No, because Ursula did not suffer actual physical injury."
        ],
        ans: 1,
        exp: "Robbery is the trespassory taking of PERSONAL property from the person or presence of another by force. Real property (real estate/a house) cannot be the subject of larceny or robbery under traditional common law."
    },
    // FACT PATTERN 11 (Q23)
    {
        id: 23,
        topic: "Inchoate Crimes / Attempt (Factual Impossibility)",
        fp: "Victor is on trial for fraud. He approaches a woman he sincerely believes is a juror on his case and offers her $10,000 to vote 'not guilty.' The woman is actually just a court clerk with absolutely no voting power or influence over the jury. She immediately reports Victor to the judge.",
        q: "What is Victor's liability for his actions?",
        opts: [
            "No crime, because it was legally impossible for a court clerk to cast a jury vote.",
            "Completed bribery, because the money was offered.",
            "Attempted bribery, because his mistake constitutes a factual impossibility, which is never a valid defense to a criminal attempt charge.",
            "Solicitation, because he merely asked a question without transferring the funds."
        ],
        ans: 2,
        exp: "Attempt requires specific intent and a substantial step. Factual impossibility (the fact that the woman was a clerk, not a juror) is not a defense to an attempt charge. Victor is judged based on the facts as he believed them to be. Since he believed she was a juror and offered the bribe, he is guilty of attempted bribery."
    },
    // FACT PATTERN 12 (Q24-Q25)
    {
        id: 24,
        topic: "Homicide / Proximate Cause (Victim's Foreseeable Reaction)",
        fp: "Wendy intentionally feeds a highly corrosive, agonizing poison to Xander. Xander ingests it and immediately suffers horrific, unbearable internal pain. Desperate to escape the agonizing torment, Xander intentionally throws himself out of a 10-story window and dies upon impacting the pavement.",
        q: "Is Wendy the proximate cause of Xander's death?",
        opts: [
            "No, because Xander's intentional act of suicide constitutes a superseding intervening cause that entirely breaks the chain of legal causation.",
            "No, because the poison itself did not inflict the fatal structural damage.",
            "Yes, because the 'eggshell skull' rule holds all defendants strictly liable.",
            "Yes, because a victim's foreseeable, desperate act to escape agonizing pain inflicted by the defendant does not break the chain of proximate causation."
        ],
        ans: 3,
        exp: "A defendant is the proximate cause of death if the result is a foreseeable consequence of their actions. If a defendant inflicts a painful or terrifying injury, and the victim takes a desperate, foreseeable action to escape the pain or danger (like jumping out a window), the victim's reaction is a dependent intervening cause and does not break the chain of causation."
    },
    {
        id: 25,
        topic: "Homicide / First-Degree Murder (Poison)",
        fp: "Wendy intentionally feeds a highly corrosive, agonizing poison to Xander. Xander ingests it and immediately suffers horrific, unbearable internal pain. Desperate to escape the agonizing torment, Xander intentionally throws himself out of a 10-story window and dies upon impacting the pavement.",
        q: "Assuming proximate causation is established, what is Wendy's highest homicide liability?",
        opts: [
            "Involuntary manslaughter.",
            "Voluntary manslaughter.",
            "Second-degree murder.",
            "First-degree murder, because a killing perpetrated by means of poison is statutorily designated as a premeditated and deliberate homicide."
        ],
        ans: 3,
        exp: "First-degree murder encompasses intentional killings committed with premeditation and deliberation. In nearly all jurisdictions, killings perpetrated by specific, inherently premeditated methods—such as lying in wait, torture, or the administration of poison—are automatically classified as first-degree murder by statute."
    }
];
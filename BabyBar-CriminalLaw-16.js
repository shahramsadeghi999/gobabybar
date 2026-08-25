const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Homicide / Superseding Cause",
        fp: "Albert intends to shoot his rival, Ben. He fires at Ben in a crowded mall but misses, hitting a high-pressure steam pipe. The pipe bursts, scalding Ben and an innocent shopper, Claire. Both are rushed to the hospital. A rogue doctor, Dr. Dan, intentionally gives Ben a lethal injection of potassium out of personal hatred. Claire dies of a secondary infection naturally resulting from her severe burns.",
        q: "Is Albert the proximate cause of Ben's death?",
        opts: [
            "Yes, because the 'eggshell skull' rule holds defendants strictly liable for all hospital deaths.",
            "Yes, because medical malpractice is always a foreseeable dependent intervening cause that does not break the chain of causation.",
            "No, because the doctor's intentional, malicious, and independent act of homicide constitutes an unforeseeable superseding intervening cause.",
            "No, because Albert missed his original intended target, which severs direct physical causation."
        ],
        ans: 2,
        exp: "Proximate cause is severed by an unforeseeable, independent intervening event (a superseding cause)[cite: 27]. While ordinary medical negligence is foreseeable, a doctor intentionally and maliciously murdering a patient is highly unforeseeable[cite: 27]. This acts as a superseding cause, breaking the chain of legal causation[cite: 27]."
    },
    {
        id: 2,
        topic: "Homicide / Transferred Intent",
        fp: "Albert intends to shoot his rival, Ben. He fires at Ben in a crowded mall but misses, hitting a high-pressure steam pipe. The pipe bursts, scalding Ben and an innocent shopper, Claire. Both are rushed to the hospital. A rogue doctor, Dr. Dan, intentionally gives Ben a lethal injection of potassium out of personal hatred. Claire dies of a secondary infection naturally resulting from her severe burns.",
        q: "Regarding Claire's death, what is Albert's liability?",
        opts: [
            "Involuntary manslaughter, because striking the steam pipe was a reckless rather than intentional act against Claire.",
            "Murder, because his specific intent to kill Ben transfers to the unintended victim, and the secondary infection is a foreseeable dependent intervening cause of death.",
            "Voluntary manslaughter, because Albert was operating under severe emotional distress when he discharged the firearm.",
            "No liability, because the bursting of the steam pipe was an extraordinary mechanical failure that breaks the chain of causation."
        ],
        ans: 1,
        exp: "Under the doctrine of transferred intent, a defendant who intends to kill one person but accidentally kills a different person is guilty of intentional murder[cite: 27]. Claire's secondary infection is a highly foreseeable medical complication of the burns, making it a dependent intervening cause that does not break the chain[cite: 27]."
    },
    {
        id: 3,
        topic: "Inchoate Crimes / Attempted Murder",
        fp: "Albert intends to shoot his rival, Ben. He fires at Ben in a crowded mall but misses, hitting a high-pressure steam pipe. The pipe bursts, scalding Ben and an innocent shopper, Claire. Both are rushed to the hospital. A rogue doctor, Dr. Dan, intentionally gives Ben a lethal injection of potassium out of personal hatred. Claire dies of a secondary infection naturally resulting from her severe burns.",
        q: "Because the doctor's actions broke the chain of causation for Ben's death, what is Albert's highest criminal liability regarding Ben?",
        opts: [
            "Attempted murder, because he harbored the specific intent to kill Ben and took a substantial step by firing the weapon.",
            "Aggravated battery, because the completed physical injury merges and extinguishes any preliminary inchoate homicide charges.",
            "Attempted voluntary manslaughter, because the intervention of third parties mitigates the requisite malice aforethought.",
            "No crime, because the superseding event provides absolute transactional immunity to the original aggressor under common law."
        ],
        ans: 0,
        exp: "If a superseding cause prevents a defendant from being convicted of the completed homicide, the defendant remains fully liable for attempted murder[cite: 27]. Albert possessed the specific intent to kill and fired the gun (a substantial step), fulfilling all elements of the inchoate offense[cite: 27]."
    },
    // FACT PATTERN 2 (Q4-Q6)
    {
        id: 4,
        topic: "Defenses / Voluntary vs Involuntary Intoxication",
        fp: "Edgar takes a legally prescribed medication for anxiety. However, he intentionally drinks a gallon of whiskey with it, explicitly ignoring a prominent warning label that states, 'Do not mix with alcohol; may cause severe psychosis.' He enters a state of toxic psychosis and honestly believes his roommate, Fred, is a hostile alien. Edgar beats Fred to death.",
        q: "How will Edgar's intoxication be classified under the law?",
        opts: [
            "Involuntary, because the psychosis was a medical side effect of a lawfully prescribed pharmaceutical drug.",
            "Involuntary, because he did not possess the specific intent to induce a psychotic state when he consumed the beverages.",
            "Voluntary, but only if the prosecution can prove he had experienced identical psychotic episodes in the past.",
            "Voluntary, because he knowingly consumed an intoxicating substance while disregarding explicit medical warnings about the severe psychological side effects."
        ],
        ans: 3,
        exp: "Intoxication is voluntary if the defendant knowingly ingests an intoxicating substance or knowingly disregards specific medical warnings about mixing prescribed medications with alcohol[cite: 27]. Because Edgar ignored the explicit warning, his resulting intoxication and psychosis are legally classified as voluntary[cite: 27]."
    },
    {
        id: 5,
        topic: "Defenses / Insanity & Voluntary Intoxication",
        fp: "Edgar takes a legally prescribed medication for anxiety. However, he intentionally drinks a gallon of whiskey with it, explicitly ignoring a prominent warning label that states, 'Do not mix with alcohol; may cause severe psychosis.' He enters a state of toxic psychosis and honestly believes his roommate, Fred, is a hostile alien. Edgar beats Fred to death.",
        q: "Can Edgar use his temporary psychosis to completely excuse the killing under the insanity defense?",
        opts: [
            "No, because a temporary psychotic state induced solely by voluntary intoxication does not qualify as a recognized mental disease or defect for the purposes of the insanity defense.",
            "Yes, because he genuinely lacked the cognitive capacity to understand the nature and quality of his physical actions.",
            "Yes, provided the jurisdiction utilizes the Model Penal Code standard rather than the traditional M'Naghten rule.",
            "No, because the insanity defense is constitutionally prohibited in all capital homicide prosecutions involving deadly weapons."
        ],
        ans: 0,
        exp: "To qualify for the insanity defense, the defendant's incapacity must be caused by a 'mental disease or defect.'[cite: 27] A temporary psychotic state or hallucination brought on by voluntary intoxication (even an extreme, unpredictable reaction) does not legally qualify as a mental disease[cite: 27]."
    },
    {
        id: 6,
        topic: "Homicide / Imperfect Self-Defense & Intoxication",
        fp: "Edgar takes a legally prescribed medication for anxiety. However, he intentionally drinks a gallon of whiskey with it, explicitly ignoring a prominent warning label that states, 'Do not mix with alcohol; may cause severe psychosis.' He enters a state of toxic psychosis and honestly believes his roommate, Fred, is a hostile alien. Edgar beats Fred to death.",
        q: "Could Edgar mitigate the murder charge to voluntary manslaughter?",
        opts: [
            "No, because voluntary intoxication automatically establishes the premeditation and deliberation required for first-degree murder.",
            "No, because the victim was unarmed at the time of the fatal physical altercation, rendering any defensive claim inherently void.",
            "Yes, under the doctrine of imperfect self-defense, if his intoxication caused an honest but unreasonable belief in the need for deadly force, which negates malice aforethought.",
            "Yes, because his subjective hatred of aliens constitutes adequate legal provocation under the traditional common law heat of passion framework."
        ],
        ans: 2,
        exp: "Under the doctrine of imperfect self-defense, if a defendant holds an honest but objectively unreasonable belief that deadly force is necessary (such as an insane delusion of attack), it negates malice aforethought[cite: 27]. This mitigates what would be murder down to voluntary manslaughter, even if the delusion was induced by voluntary intoxication[cite: 27]."
    },
    // FACT PATTERN 3 (Q7-Q9)
    {
        id: 7,
        topic: "Property Crimes / Embezzlement (Bailee)",
        fp: "Gina runs a specialized antique restoration shop. Harry brings his $50,000 antique clock to Gina for repairs. Gina genuinely intends to repair it. Three days later, facing sudden severe debt, she sells the clock to a pawn shop and tells Harry it was stolen by a burglar.",
        q: "What property crime did Gina commit regarding the clock?",
        opts: [
            "Larceny by trick, because she utilized deceptive business practices to acquire the asset.",
            "Embezzlement, because she fraudulently converted the property of another while she was already in lawful possession of it as a bailee.",
            "False pretenses, because she intentionally lied to Harry about the fictional burglar to secure permanent ownership.",
            "Robbery, because the unauthorized deprivation of a highly valuable heirloom constitutes constructive force."
        ],
        ans: 1,
        exp: "Embezzlement requires the fraudulent conversion of property by someone already in LAWFUL possession of it[cite: 27]. As an artisan entrusted with repairing the clock, Gina was a bailee with lawful possession[cite: 27]. Selling it to pay off her debts constitutes a fraudulent conversion[cite: 27]."
    },
    {
        id: 8,
        topic: "Property Crimes / Larceny by Trick Distinctions",
        fp: "Gina runs a specialized antique restoration shop. Harry brings his $50,000 antique clock to Gina for repairs. Gina genuinely intends to repair it. Three days later, facing sudden severe debt, she sells the clock to a pawn shop and tells Harry it was stolen by a burglar.",
        q: "Why is Gina NOT guilty of larceny by trick?",
        opts: [
            "Because the monetary value of the antique clock vastly exceeded the statutory thresholds for trickery.",
            "Because Harry voluntarily relinquished full legal title to the property when he commissioned the repairs.",
            "Because she operated a licensed commercial retail establishment.",
            "Because she did not harbor the specific intent to steal at the exact moment she obtained custody of the clock."
        ],
        ans: 3,
        exp: "Larceny by trick requires that the defendant use fraud or deceit to obtain custody of the property, with the INTENT to steal it existing AT THE TIME of the transfer[cite: 27]. Because Gina honestly intended to repair the clock initially, she formed the intent to steal later, precluding larceny[cite: 27]."
    },
    {
        id: 9,
        topic: "Property Crimes / False Pretenses Distinctions",
        fp: "Gina runs a specialized antique restoration shop. Harry brings his $50,000 antique clock to Gina for repairs. Gina genuinely intends to repair it. Three days later, facing sudden severe debt, she sells the clock to a pawn shop and tells Harry it was stolen by a burglar.",
        q: "Why does Gina's lie about the burglar NOT constitute false pretenses?",
        opts: [
            "Because false pretenses strictly requires the use of counterfeit financial instruments or forged signatures.",
            "Because the statement involved a claim of future harm rather than a past or existing factual event.",
            "Because she used the lie to cover up a completed crime, rather than using the lie as the means to induce the victim to transfer legal title to her.",
            "Because Harry did not actually believe her deceptive narrative."
        ],
        ans: 2,
        exp: "False pretenses requires the defendant to obtain title to property BY MEANS OF an intentional false statement[cite: 27]. Gina already had lawful possession of the clock, and the crime of embezzlement was complete the moment she sold it[cite: 27]. Her lie to Harry occurred after the fact to cover it up[cite: 27]."
    },
    // FACT PATTERN 4 (Q10-Q11)
    {
        id: 10,
        topic: "Inchoate Crimes / Common Law Solicitation (Communication intercepted)",
        fp: "Irene wants to kill her husband. She writes a detailed letter to a known hitman, Jack, offering him $50,000 to do it, and includes a down payment. She puts the letter in her mailbox. The mail carrier collects it, suspects something is wrong, opens it, and gives it to the police. Jack never receives the letter.",
        q: "Under strict traditional common law rules, is Irene guilty of the completed crime of solicitation?",
        opts: [
            "No, because at traditional common law, the solicitation is not complete unless the communication actually reaches the intended solicitee.",
            "Yes, because she performed an overt act by placing the document into the stream of interstate commerce.",
            "Yes, because the crime is fully completed the exact moment the defendant forms the specific intent to solicit a felony offense.",
            "No, because she failed to provide the full financial compensation required to formalize the criminal contract."
        ],
        ans: 0,
        exp: "At strict traditional common law, the crime of solicitation is not complete unless the urging/request actually reaches the intended solicitee[cite: 27]. Because the letter was intercepted and Jack never received it, Irene is only guilty of attempted solicitation at common law[cite: 27]. (Note: The Model Penal Code changes this, making it completed solicitation even if intercepted)."
    },
    {
        id: 11,
        topic: "Inchoate Crimes / Attempted Murder (Solicitation as Substantial Step?)",
        fp: "Irene wants to kill her husband. She writes a detailed letter to a known hitman, Jack, offering him $50,000 to do it, and includes a down payment. She puts the letter in her mailbox. The mail carrier collects it, suspects something is wrong, opens it, and gives it to the police. Jack never receives the letter.",
        q: "Is Irene guilty of attempted murder?",
        opts: [
            "Yes, because hiring a professional assassin unequivocally satisfies the dangerous proximity test required for attempted homicide.",
            "No, because merely soliciting another person to commit a crime is generally considered mere preparation and does not constitute the requisite substantial step or dangerous proximity for attempted murder.",
            "Yes, because she possessed the specific intent to kill and surrendered physical control of the down payment.",
            "No, because the interception of the letter by federal authorities rendered the completion of the offense legally impossible."
        ],
        ans: 1,
        exp: "Courts generally hold that mere solicitation of another person to commit a crime (even offering payment) is 'mere preparation' and does not cross the line into the substantial step or dangerous proximity required for a criminal attempt charge of the target offense[cite: 27]."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Parties to a Crime / Accomplice Withdrawal (Ineffective)",
        fp: "Kevin and Liam plan to rob an armored car. Kevin provides Liam with a customized explosive charge to blow the car's doors. On the morning of the robbery, Kevin changes his mind. He calls Liam and says, 'I'm out, don't do it.' Liam says, 'Too late, I'm doing it anyway.' Kevin hangs up. Liam uses the explosive, robs the car, and kills a guard.",
        q: "Did Kevin effectively withdraw from his role as an accomplice?",
        opts: [
            "Yes, because he explicitly and unequivocally communicated his renunciation to the principal actor prior to the execution of the target offense.",
            "Yes, because a verbal repudiation instantly dissolves all prior accessorial liability under modern statutory frameworks.",
            "No, because he failed to submit a formal written confession to local law enforcement authorities.",
            "No, because an accomplice who provides material assistance must also act to neutralize that assistance (such as retrieving the explosives or alerting police) to effectuate a valid withdrawal."
        ],
        ans: 3,
        exp: "To successfully withdraw as an accomplice, a person must repudiate their prior aid, communicate their withdrawal to the principal, AND neutralize any material assistance provided[cite: 27]. Kevin failed to retrieve the explosives or notify the police, rendering his verbal withdrawal legally ineffective[cite: 27]."
    },
    {
        id: 13,
        topic: "Homicide / Felony Murder (Accomplice Liability)",
        fp: "Kevin and Liam plan to rob an armored car. Kevin provides Liam with a customized explosive charge to blow the car's doors. On the morning of the robbery, Kevin changes his mind. He calls Liam and says, 'I'm out, don't do it.' Liam says, 'Too late, I'm doing it anyway.' Kevin hangs up. Liam uses the explosive, robs the car, and kills a guard.",
        q: "Is Kevin liable for the guard's death?",
        opts: [
            "No, because the Redline doctrine automatically immunizes an unarmed accomplice from the lethal actions of the primary perpetrator.",
            "No, because his verbal attempt to withdraw entirely severed the chain of proximate legal causation.",
            "Yes, because as an accomplice to the inherently dangerous robbery, he is vicariously liable for the foreseeable felony murder committed by the principal.",
            "Yes, but his liability is capped at involuntary manslaughter because he was not physically present at the scene."
        ],
        ans: 2,
        exp: "Because Kevin's withdrawal was ineffective, he remains fully liable as an accomplice to the armed robbery[cite: 27]. Under the felony murder rule, all participants in an inherently dangerous felony are liable for a murder committed by a co-felon during the commission of the crime, provided the death was foreseeable[cite: 27]."
    },
    {
        id: 14,
        topic: "Inchoate Crimes / Conspiracy & Withdrawal",
        fp: "Kevin and Liam plan to rob an armored car. Kevin provides Liam with a customized explosive charge to blow the car's doors. On the morning of the robbery, Kevin changes his mind. He calls Liam and says, 'I'm out, don't do it.' Liam says, 'Too late, I'm doing it anyway.' Kevin hangs up. Liam uses the explosive, robs the car, and kills a guard.",
        q: "Is Kevin guilty of conspiracy to commit robbery?",
        opts: [
            "Yes, because the crime of conspiracy was already complete upon the agreement and the overt act of supplying the explosives, and a subsequent withdrawal is never a defense to the conspiracy charge itself.",
            "No, because his verbal withdrawal retroactively nullified the initial bilateral agreement.",
            "Yes, but only if the prosecution proves he shared a specific financial stake in the illicit proceeds of the robbery.",
            "No, because conspiracy strictly requires all participating parties to be physically present during the commission of the target felony."
        ],
        ans: 0,
        exp: "Conspiracy is complete the moment the agreement is made and an overt act is performed (providing explosives)[cite: 27]. Once the crime of conspiracy is complete, subsequent withdrawal is not a defense to the conspiracy charge itself, though an effective withdrawal will shield them from liability for SUBSEQUENT substantive crimes[cite: 27]."
    },
    // FACT PATTERN 6 (Q15-Q17)
    {
        id: 15,
        topic: "Crimes against Person / Kidnapping (Asportation)",
        fp: "Mary is walking down a busy public street. Nick points a gun at her and says, 'Walk into this abandoned house or I'll shoot.' Mary complies. Inside, Nick locks her in a closet for three days, demanding her family pay a ransom. The family refuses, so Nick eventually lets her go unharmed.",
        q: "Does forcing Mary from the street into the abandoned house satisfy the asportation element of kidnapping?",
        opts: [
            "No, because the distance traveled from the sidewalk to the interior structure was relatively short and therefore legally de minimis.",
            "Yes, because moving a victim from a highly visible public street to an isolated, abandoned location substantially increases the risk of harm, fulfilling the movement requirement.",
            "No, because she walked under her own physical power rather than being forcibly carried or placed inside a moving motor vehicle.",
            "Yes, because any unauthorized restriction of a victim's freedom of movement automatically constitutes kidnapping."
        ],
        ans: 1,
        exp: "Kidnapping requires unlawful confinement and 'asportation' (movement) that is substantial or increases the risk of harm independent of the underlying crime[cite: 27]. Moving a victim from a public street to a secluded abandoned house drastically increases the risk of harm, easily satisfying the asportation requirement[cite: 27]."
    },
    {
        id: 16,
        topic: "Crimes against Person / Aggravated Kidnapping (Specific Intent)",
        fp: "Mary is walking down a busy public street. Nick points a gun at her and says, 'Walk into this abandoned house or I'll shoot.' Mary complies. Inside, Nick locks her in a closet for three days, demanding her family pay a ransom. The family refuses, so Nick eventually lets her go unharmed.",
        q: "Is the crime of kidnapping for ransom generally classified as a specific or general intent crime?",
        opts: [
            "General intent, because it merely requires the voluntary physical act of confining a human being.",
            "Strict liability, because of the extreme societal danger posed by hostage situations.",
            "General intent, because all false imprisonment offenses are categorically classified as general intent.",
            "Specific intent, because aggravated kidnapping for ransom requires the defendant to confine the victim with the explicit, specific purpose of extorting money or securing a distinct secondary objective."
        ],
        ans: 3,
        exp: "While simple kidnapping is often a general intent crime, aggravated kidnapping (such as kidnapping for ransom, robbery, or sexual assault) is a specific intent crime[cite: 27]. The defendant must possess the specific purpose of obtaining money or another illicit objective[cite: 27]."
    },
    {
        id: 17,
        topic: "Crimes against Person / False Imprisonment Merger",
        fp: "Mary is walking down a busy public street. Nick points a gun at her and says, 'Walk into this abandoned house or I'll shoot.' Mary complies. Inside, Nick locks her in a closet for three days, demanding her family pay a ransom. The family refuses, so Nick eventually lets her go unharmed.",
        q: "Is Nick also separately punishable for false imprisonment for locking her in the closet?",
        opts: [
            "No, because false imprisonment is a lesser included offense that entirely merges into the completed greater crime of kidnapping.",
            "Yes, because false imprisonment is an independent collateral felony that survives inchoate merger doctrines.",
            "No, because the victim ultimately survived the encounter without suffering permanent physical bodily injury.",
            "Yes, because kidnapping exclusively pertains to the transportation phase, while false imprisonment governs the stationary confinement phase."
        ],
        ans: 0,
        exp: "False imprisonment is a lesser included offense of kidnapping[cite: 27]. Under the Double Jeopardy Clause and standard merger doctrines, a defendant cannot be separately punished for both the greater offense (kidnapping) and the lesser included offense (false imprisonment) based on the same continuous act of confinement[cite: 27]."
    },
    // FACT PATTERN 7 (Q18-Q20)
    {
        id: 18,
        topic: "Property Crimes / Burglary (Mens Rea Timing)",
        fp: "Oscar breaks into Patty's house at midnight to escape a sudden, violent hailstorm. He has no intent to steal or commit any crime. Once inside, he sees Patty's expensive jewelry on the table. He decides to steal it. As he leaves, he trips over a space heater, inadvertently knocking it over. The house catches fire and burns down.",
        q: "Is Oscar guilty of common law burglary?",
        opts: [
            "No, because he did not possess the specific intent to commit a felony at the exact moment he broke and entered the dwelling.",
            "Yes, because he breached the physical threshold of a residential structure during the nighttime hours.",
            "Yes, because his subsequent theft retroactively establishes his unlawful intent under the continuing trespass doctrine.",
            "No, because the structure was completely destroyed, extinguishing the underlying property offense."
        ],
        ans: 0,
        exp: "Common law burglary requires the specific intent to commit a felony inside the dwelling AT THE TIME of the breaking and entering[cite: 27]. Because Oscar only intended to escape the storm upon entry, he lacked the specific intent required for burglary[cite: 27]."
    },
    {
        id: 19,
        topic: "Property Crimes / Larceny (Trespassory Taking)",
        fp: "Oscar breaks into Patty's house at midnight to escape a sudden, violent hailstorm. He has no intent to steal or commit any crime. Once inside, he sees Patty's expensive jewelry on the table. He decides to steal it. As he leaves, he trips over a space heater, inadvertently knocking it over. The house catches fire and burns down.",
        q: "Is Oscar guilty of larceny regarding the jewelry?",
        opts: [
            "No, because his original entry onto the property was justified by private necessity, rendering all subsequent acquisitions lawful.",
            "Yes, because he committed a trespassory taking and carrying away of the personal property of another with the specific intent to permanently deprive.",
            "No, because the destruction of the house via fire consumed the physical evidence required to prove the theft.",
            "Yes, because he utilized constructive physical force to bypass the residential security systems."
        ],
        ans: 1,
        exp: "Larceny is the trespassory taking and carrying away of the personal property of another with the intent to steal[cite: 27]. Even though his initial entry was justified by necessity, his subsequent taking of the jewelry was an unprivileged, trespassory taking[cite: 27]."
    },
    {
        id: 20,
        topic: "Property Crimes / Arson (Malice Requirement)",
        fp: "Oscar breaks into Patty's house at midnight to escape a sudden, violent hailstorm. He has no intent to steal or commit any crime. Once inside, he sees Patty's expensive jewelry on the table. He decides to steal it. As he leaves, he trips over a space heater, inadvertently knocking it over. The house catches fire and burns down.",
        q: "Is Oscar guilty of common law arson for the destruction of the house?",
        opts: [
            "Yes, because he was engaged in an inherently dangerous felony when the property damage occurred, triggering strict liability.",
            "No, because the structure was owned by a third party, and arson exclusively applies to commercial structures.",
            "Yes, because any burning of a dwelling house during the nighttime satisfies the elements of the offense.",
            "No, because accidentally tripping over a space heater lacks the malicious intent (intentional or reckless burning) required for common law arson."
        ],
        ans: 3,
        exp: "Common law arson requires the MALICIOUS burning of the dwelling of another[cite: 27]. Malice requires an intentional burning or reckless disregard of an obvious risk of burning[cite: 27]. Accidentally tripping over a heater during flight lacks the requisite malice[cite: 27]."
    },
    // FACT PATTERN 8 (Q21-Q23)
    {
        id: 21,
        topic: "Defenses / Necessity (Homicide Limitation at Common Law)",
        fp: "Quinn is driving a school bus full of children. The bus's brakes fail completely on a steep hill. Quinn sees two options: steer the bus off a cliff, killing all the children, or steer onto a crowded sidewalk, running over and killing three pedestrians. Quinn chooses the sidewalk. The three pedestrians are killed.",
        q: "Under strict traditional common law, can Quinn assert the necessity defense for the deaths of the pedestrians?",
        opts: [
            "Yes, because saving a larger number of innocent lives mathematically outweighs the lesser evil of sacrificing three pedestrians.",
            "No, because traditional common law absolutely prohibits the use of the necessity defense to justify the intentional taking of an innocent human life, regardless of the number of lives saved.",
            "Yes, because the emergency was caused by a mechanical failure rather than the defendant's own criminal negligence.",
            "No, because necessity exclusively applies to the protection of real property and is entirely inapplicable to personal injury cases."
        ],
        ans: 1,
        exp: "The traditional common law rule (famously established in R v Dudley and Stephens) holds that necessity is NEVER a defense to the intentional taking of an innocent human life, even to save a greater number of lives[cite: 27]. (Note: The Model Penal Code generally allows it if the evil avoided is greater, but the prompt asks for traditional common law)[cite: 27]."
    },
    {
        id: 22,
        topic: "Defenses / Duress vs. Necessity (Source of Threat)",
        fp: "Quinn is driving a school bus full of children. The bus's brakes fail completely on a steep hill. Quinn sees two options: steer the bus off a cliff, killing all the children, or steer onto a crowded sidewalk, running over and killing three pedestrians. Quinn chooses the sidewalk. The three pedestrians are killed.",
        q: "Why is Quinn unable to claim the defense of duress?",
        opts: [
            "Because duress requires the defendant to be physically restrained.",
            "Because the victims were innocent bystanders rather than the original aggressors.",
            "Because duress requires a coercive threat of physical force from another human being, whereas Quinn's emergency was caused by a mechanical failure and natural forces.",
            "Because duress only mitigates crimes to lesser included misdemeanors."
        ],
        ans: 2,
        exp: "The key distinction between the two defenses is the source of the threat[cite: 27]. Duress involves coercion by another HUMAN being who threatens immediate physical harm[cite: 27]. Necessity (the choice of evils defense) typically involves pressure created by physical, mechanical, or NATURAL forces[cite: 27]."
    },
    {
        id: 23,
        topic: "Homicide / Involuntary Manslaughter (Emergency Doctrine)",
        fp: "Quinn is driving a school bus full of children. The bus's brakes fail completely on a steep hill. Quinn sees two options: steer the bus off a cliff, killing all the children, or steer onto a crowded sidewalk, running over and killing three pedestrians. Quinn chooses the sidewalk. The three pedestrians are killed.",
        q: "If Quinn is charged with vehicular manslaughter, what is his best defense?",
        opts: [
            "That the pedestrians assumed the risk by walking near a public roadway.",
            "That the school district maintains absolute sovereign immunity for all transportation-related casualties.",
            "That he lacked criminal negligence, because his split-second decision was a reasonable response to a sudden, catastrophic emergency that he did not create.",
            "That the doctrine of transferred intent completely shields drivers during mechanical failure events."
        ],
        ans: 2,
        exp: "Manslaughter requires a showing of criminal negligence or recklessness[cite: 27]. Under the sudden emergency doctrine, a person confronted with a sudden, unexpected emergency not of their own making is not held to the same standard of calm reflection as one who has time to deliberate[cite: 27]. Quinn's choice to save the children was arguably reasonable under the extreme circumstances, negating criminal negligence[cite: 27]."
    },
    // FACT PATTERN 9 (Q24-Q25)
    {
        id: 24,
        topic: "Property Crimes / Extortion (Threat to Property)",
        fp: "Sam is a freelance web developer. A client, Tom, refuses to pay the $5,000 contract fee for a completed website. Sam calls Tom and says, 'Pay me the $5,000 you owe me by tomorrow, or I will hack your company's servers and delete your entire database.' Tom pays the money.",
        q: "Is Sam guilty of extortion?",
        opts: [
            "No, because the threat involved digital data rather than tangible physical assets or bodily injury.",
            "No, because commercial disputes are exclusively relegated to civil breach of contract litigation.",
            "Yes, because he obtained property through the threat of immediate physical force.",
            "Yes, because he obtained property by threatening future harm to the victim's business and property."
        ],
        ans: 3,
        exp: "Extortion (blackmail) is obtaining property from another by means of a threat of future harm, including threats to destroy property or cause economic/business ruin[cite: 27]. Sam's threat to delete the database satisfies the elements of extortion[cite: 27]."
    },
    {
        id: 25,
        topic: "Defenses / Claim of Right (Extortion Limitation)",
        fp: "Sam is a freelance web developer. A client, Tom, refuses to pay the $5,000 contract fee for a completed website. Sam calls Tom and says, 'Pay me the $5,000 you owe me by tomorrow, or I will hack your company's servers and delete your entire database.' Tom pays the money.",
        q: "Does the 'claim of right' doctrine protect Sam from the extortion charge since he was legally owed the $5,000?",
        opts: [
            "Yes, because the common law always permits the use of coercive threats to recover liquidated civil debts.",
            "No, because in most modern jurisdictions, the claim of right defense is strictly unavailable to justify obtaining property through extortionate threats, even if the underlying debt is valid.",
            "Yes, because he did not utilize a deadly weapon during the collection attempt.",
            "No, because web development services do not constitute tangible property under the penal code."
        ],
        ans: 1,
        exp: "While a 'claim of right' (an honest belief in ownership) can negate the intent to steal in simple larceny cases, modern courts universally reject the claim of right defense for violent crimes or extortion[cite: 27]. Using illegal threats of harm to collect a valid debt is still extortion[cite: 27]."
    }
];
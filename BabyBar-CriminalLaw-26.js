const examData = [
    // SOURCE: MBE-CriminalLaw.pdf, Question 1
    {
        id: 1,
        topic: "Inchoate Crimes / Conspiracy (Circumstantial Evidence)",
        fp: "A woman and her sister took a trip to the Caribbean. When they passed through U.S. Customs inspection upon their return, the customs officials found liquid cocaine in several bottles each of them was carrying. They were arrested. Upon separate questioning by customs officers, the woman broke down and cried, 'I told my sister there were too many officers at this airport.' The sister did not give a statement.\n\nThe woman and her sister were indicted for conspiracy to import cocaine. They were tried separately. At the woman's trial, after the government introduced the above evidence and rested its case, her lawyer moved for a judgment of acquittal on grounds of insufficient evidence.",
        q: "Should the court grant the motion?",
        opts: [
            "No, because the evidence shows that both the woman and her sister agreed to import cocaine.",
            "No, because the evidence shows that both the woman and her sister possessed cocaine.",
            "Yes, because the evidence shows only that the woman and her sister committed separate crimes of cocaine possession.",
            "Yes, because the evidence shows that the woman effectively withdrew from the conspiracy when she cooperated by giving a statement."
        ],
        ans: 0,
        exp: "Conspiracy is an agreement between two or more persons to accomplish a crime[cite: 33]. The existence of an agreement need not be proven by direct evidence; circumstantial evidence can suffice[cite: 33]. The woman's admission that she told her sister that there were 'too many officers at this airport,' taken together with the fact that both were carrying bottles of liquid cocaine, was sufficient circumstantial evidence of an agreement to send the case to the jury[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 2
    {
        id: 2,
        topic: "Homicide / Murder (Intent to Cause Serious Bodily Harm)",
        fp: "A man and his friend were watching a televised football game at the man's home. Upset by a penalty called by the referee, the friend threw a bottle of beer at the man's television, breaking the screen. Enraged, the man picked up a nearby hammer and hit the friend on the head with it. The friend died from the blow.\n\nThe crimes below are listed in descending order of seriousness.",
        q: "In a jurisdiction that follows common law principles, what is the most serious crime of which the man could properly be convicted?",
        opts: [
            "Murder.",
            "Voluntary manslaughter.",
            "Involuntary manslaughter.",
            "Assault."
        ],
        ans: 0,
        exp: "At common law, an intent to inflict serious bodily injury satisfies the malice aforethought requirement for murder[cite: 33]. Swinging a hammer at a person's head justifies an inference of intent to cause at least serious bodily harm, supporting a murder conviction[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 3
    {
        id: 3,
        topic: "Inchoate Crimes / Attempted Robbery (Factual Impossibility)",
        fp: "A man had spent the evening drinking at a local bar and was weaving down the street on his way home, singing. Suddenly, a person wearing a cartoon character mask jumped out from an alley, pointed his gun at the man, and snarled, 'This is loaded, buddy, and I don't mind using it. Hand over your cash pronto.' The man was so drunk that he failed to understand what was going on and started to howl with laughter at the sight of the cartoon mask. Surprised and rattled by the man's reaction, the masked gunman fled. The man soon recovered his composure and staggered home safely.\n\nThe crimes below are listed in descending order of seriousness.",
        q: "What is the most serious crime of which the masked gunman may properly be charged and convicted?",
        opts: [
            "Attempted robbery.",
            "Attempted battery.",
            "Attempted larceny.",
            "No crime."
        ],
        ans: 0,
        exp: "Factual impossibility is no defense to an attempt charge[cite: 33]. Had the facts been as the gunman believed (that the victim was capable of fear and would comply with the threat of force), the completed crime of robbery would have occurred[cite: 33]. Thus, the gunman is guilty of attempted robbery[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 4
    {
        id: 4,
        topic: "Homicide / Murder (Mens Rea Requirement)",
        fp: "A common law jurisdiction defines first-degree murder as any murder that is (1) committed by means of poison or (2) premeditated. All other murder is second-degree murder, and manslaughter is defined as at common law.\n\nAn employee was angry with her boss for denying her a raise. Intending to cause her boss discomfort, the employee secretly dropped into his coffee three over-the-counter laxative pills. The boss drank the coffee containing the pills. Although the pills would not have been dangerous to an ordinary person, because the boss was already taking other medication, he suffered a seizure and died.",
        q: "If the employee is charged with murder in the first degree, should she be convicted?",
        opts: [
            "Yes, only because she used poison.",
            "Yes, only because she acted with premeditation.",
            "Yes, both because she used poison and because she acted with premeditation.",
            "No."
        ],
        ans: 3,
        exp: "Murder requires malice aforethought (intent to kill, intent to inflict great bodily harm, or reckless indifference to an unjustifiably high risk to human life)[cite: 33]. The employee intended only to cause 'discomfort,' which does not satisfy malice aforethought[cite: 33]. Because the underlying act did not constitute murder, she cannot be convicted of first-degree murder under the statute[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 5
    {
        id: 5,
        topic: "Parties to a Crime / Accomplice Liability (Encouragement)",
        fp: "A man asked his girlfriend to lend him something he could use to break into his neighbor's padlocked storage shed in order to steal a lawn mower. She handed him a crowbar. He took the crowbar but then found a bolt cutter that the neighbor had left outside the shed. Using the bolt cutter, he cut the padlock on the shed and took the mower, which he then used to mow his girlfriend's lawn. She was surprised and pleased by this gesture.\n\nBurglary in the jurisdiction applies to any structure or building, and there is no nighttime element.\n\nThe girlfriend has been charged as an accomplice to burglary and larceny.",
        q: "Of which crimes, if any, is she guilty?",
        opts: [
            "Burglary and larceny.",
            "Burglary, but not larceny, because she intended to assist only in the breaking.",
            "Larceny, but not burglary, because she provided no actual assistance to the breaking but received a benefit from the larceny.",
            "Neither burglary nor larceny, because she provided no actual assistance."
        ],
        ans: 0,
        exp: "An accomplice is liable for crimes she aids, abets, or encourages[cite: 33]. By providing the crowbar knowing of the plan to break into the shed and steal the mower, the girlfriend encouraged both the burglary and the larceny[cite: 33]. The fact that the principal ultimately used a different tool does not eliminate her liability as an accomplice[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 6
    {
        id: 6,
        topic: "General Principles / Burden of Proof (Alibi)",
        fp: "A defendant was tried for armed robbery. The state introduced evidence that a man, identified by witnesses as the defendant, entered a convenience store at 11 p.m. on March 5, threatened the clerk with a gun, and took $75 from the cash register.\n\nThe defendant did not testify, but his sister did. She testified that on March 5, at the time of the robbery, the defendant was with her in a city 300 miles away. On cross-examination, the sister admitted having given a statement to the police in which she had said that the defendant was not with her on March 5, but she claimed that the earlier statement was mistaken.\n\nThe court instructed the jury that in order to convict the defendant, they had to find all of the elements of the crime beyond a reasonable doubt.",
        q: "As to the defendant's claim of alibi, which of the following additional instructions would be proper?",
        opts: [
            "Alibi is a matter of defense and so must be established by the defendant; however, the burden of persuasion is by a preponderance of the evidence, not beyond a reasonable doubt.",
            "Before you may consider the defendant's claim of alibi, you must decide whether he has produced sufficient evidence to raise the issue.",
            "If you have a reasonable doubt as to whether the defendant was present at the convenience store at about 11 p.m. on March 5, you must find him not guilty.",
            "If the defendant's evidence has caused you to have a reasonable doubt as to whether he was the robber, you must find him not guilty."
        ],
        ans: 2,
        exp: "The prosecution bears the burden of proving every element of the offense beyond a reasonable doubt, including the defendant's presence at the scene of the crime[cite: 33]. An alibi is not an affirmative defense, but a direct negation of an essential element of the prosecution's case; thus, no burden of proof or persuasion may be placed on the defendant[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 7
    {
        id: 7,
        topic: "Parties to a Crime / Accomplice (Mental State)",
        fp: "While on their way home from a ball game, a driver and his passenger stopped at an all-night gas station. The passenger offered to pay for the gas. While the passenger pumped gas, he was surprised to see the driver enter the station, take money from the unattended cash drawer, and get back in the car. The passenger paid the attendant for the gas, and the driver drove off. The driver offered to reimburse the passenger for the gas, but the passenger declined. After discovering the missing cash, the gas station attendant called the police, and the driver was later stopped. The driver escaped with the stolen money, however, and was never prosecuted.",
        q: "If the passenger is prosecuted for theft as an accomplice, should he be convicted?",
        opts: [
            "No, because he had no intent to promote the commission of the offense.",
            "No, because the driver, the principal, was never prosecuted.",
            "Yes, because he facilitated commission of the offense by failing to make any effort to stop it.",
            "Yes, because he paid the attendant while he knew the driver was holding the stolen money."
        ],
        ans: 0,
        exp: "Accomplice liability requires proof that the accomplice intended to aid, encourage, or facilitate the commission of the target offense[cite: 33]. The passenger had no prior knowledge of the theft, did not intend to facilitate it, and had no legal duty to stop the driver[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 8
    {
        id: 8,
        topic: "Inchoate Crimes / Attempt (Overt Act)",
        fp: "An undercover police detective told a local drug dealer that she wanted to buy cocaine, but that she needed time to raise the necessary funds. The drug dealer said that he needed time to get the cocaine. They agreed to meet again in ten days. An hour later, without a warrant, other officers forcibly entered the drug dealer's apartment and arrested him for attempted possession of a controlled substance.",
        q: "If the drug dealer is prosecuted in a common-law jurisdiction for attempted possession of cocaine, should he be convicted?",
        opts: [
            "No, because he had not taken sufficient acts toward commission of the crime.",
            "No, because he was illegally arrested.",
            "Yes, because by objective standards an agreement between them had occurred.",
            "Yes, because his intention to obtain the cocaine was unequivocally expressed."
        ],
        ans: 0,
        exp: "At common law, attempt requires an overt act beyond mere preparation that comes dangerously close to completion of the crime[cite: 33]. Merely stating a need for time and agreeing to meet ten days later does not constitute an overt act beyond preparation[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 9
    {
        id: 9,
        topic: "Homicide / Involuntary Manslaughter (Misdemeanor-Manslaughter)",
        fp: "One evening, a woman was driving above the speed limit on a country road. As she rounded a sharp curve, she lost control of the car and crossed over to the shoulder on the other side of the road. Her car hit a truck that was parked on the shoulder with its hood up while its driver waited for a tow truck. The force of the collision threw the driver out of the truck and down an embankment. The driver died from his injuries.\n\nDriving above the speed limit and causing an accident can be charged as reckless driving, a misdemeanor in the jurisdiction.",
        q: "What is the most serious homicide offense, if any, of which the woman can properly be convicted?",
        opts: [
            "Murder, based on malice aforethought.",
            "Voluntary manslaughter, based on reckless operation of a vehicle.",
            "Involuntary manslaughter, based on the misdemeanor of reckless driving.",
            "No homicide offense."
        ],
        ans: 2,
        exp: "Under the misdemeanor-manslaughter rule, an accidental death resulting from the commission of an unlawful act (a misdemeanor such as reckless driving) constitutes involuntary manslaughter[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 10
    {
        id: 10,
        topic: "Property Crimes / Robbery & Mistake of Fact",
        fp: "After being fired from his job, the defendant drank almost a quart of vodka and decided to ride the bus home. While on the bus, he saw a briefcase he mistakenly thought was his own, and began struggling with the passenger carrying the briefcase. The defendant knocked the passenger to the floor, took the briefcase, and fled. The defendant was arrested and charged with robbery.",
        q: "The defendant should be",
        opts: [
            "acquitted, because he used no threats and was intoxicated.",
            "acquitted, because his mistake negated the required specific intent.",
            "convicted, because his intoxication was voluntary.",
            "convicted, because mistake is no defense to robbery."
        ],
        ans: 1,
        exp: "Robbery requires the specific intent to steal the personal property of another[cite: 33]. If the defendant honestly (even unreasonably) believed the briefcase belonged to him, this mistake of fact negates the specific intent to steal property belonging to another[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 11
    {
        id: 11,
        topic: "Property Crimes / Larceny (Asportation)",
        fp: "While browsing in a clothing store, a thief decided to take a purse without paying for it. She placed the purse under her coat and took a couple of steps toward the exit. She then realized that a sensor tag on the purse would set off an alarm. She placed the purse near the counter from which she had removed it.",
        q: "The thief has committed",
        opts: [
            "no crime, because the purse was never removed from the store.",
            "no crime, because she withdrew from her criminal enterprise.",
            "only attempted larceny, because she intended to take the purse out of the store.",
            "larceny, because she took the purse from its original location and concealed it with the intent to steal."
        ],
        ans: 3,
        exp: "Larceny is complete upon the slightest movement (asportation) of the property with the intent to permanently deprive[cite: 33]. Moving the purse a couple of steps while concealed under her coat completed the larceny, and returning the property does not undo the crime[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 12
    {
        id: 12,
        topic: "Homicide / First-Degree Murder (Transferred Intent & Concurrence)",
        fp: "An employee decided to kill his boss, after she told him that he would be fired if his work did not improve. The employee knew his boss was scheduled to go on a business trip on Monday morning. On Sunday morning, the employee went to the company parking garage and put a bomb in the company car that his boss usually drove. The bomb was wired to go off when the car engine started. The employee then left town. At 5 a.m. Monday, the employee, after driving all night, was overcome with remorse and had a change of heart. He called the security officer on duty at the company and told him about the bomb. The security officer said he would take care of the matter. An hour later, the officer put a note on the boss' desk telling her of the message. He then looked at the car but could not see any signs of a bomb. He printed a sign saying 'DO NOT USE THIS CAR,' put it on the windshield, and went to call the police. Before the police arrived, a company vice-president (not the boss) got into the car and started the engine. The bomb went off, killing her.\n\nThe jurisdiction defines murder in the first degree as any homicide committed with premeditation and deliberation or any murder in the commission of a common-law felony. Second-degree murder is defined as all other murder at common law. Manslaughter is defined by the common law.",
        q: "The employee is guilty of",
        opts: [
            "murder in the first degree, because, with premeditation and deliberation, he killed whoever would start the car.",
            "murder in the second degree, because he had no intention of killing the company vice-president.",
            "manslaughter, because at the time of the explosion, he had no intent to kill, and the death of the company vice-president was in part the fault of the security officer.",
            "only attempted murder of the boss, because the death of the company vice-president was the result of the security officer's negligence."
        ],
        ans: 0,
        exp: "Concurrence of act and intent is measured at the time the defendant acts (planting the bomb), not when the resulting harm occurs[cite: 33]. Under the doctrine of transferred intent, the premeditated intent to kill the boss transfers to the actual victim killed by the bomb, making the employee guilty of first-degree murder[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 13
    {
        id: 13,
        topic: "Defenses / Self-Defense (Castle Doctrine)",
        fp: "A student and his friend were watching a football game at the student's home when they began to argue. The friend became abusive, and the student asked him to leave. The friend refused, walked into the kitchen, picked up a knife, and said he would cut the student's heart out. The student pulled a gun from under the sofa, walked to his front door, opened it, and again told the friend to leave. The friend again refused. Instead, he walked slowly toward the student, brandishing the knife in a threatening manner. The student, rather than running out the door himself, shot in the friend's direction, intending only to scare him. However, the bullet struck the friend, killing him instantly.",
        q: "Charged with murder, the student should be",
        opts: [
            "convicted, because the use of deadly force was unreasonable under the circumstances.",
            "convicted, because he had a clear opportunity and duty to retreat.",
            "acquitted, because he did not intend to kill the friend.",
            "acquitted, because he was acting in self-defense and had no duty to retreat."
        ],
        ans: 3,
        exp: "A person facing an imminent deadly threat is justified in using deadly force in self-defense[cite: 33]. Under the castle doctrine, a person has no duty to retreat inside his own home before utilizing deadly defensive force[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 14
    {
        id: 14,
        topic: "Homicide / Murder vs. Voluntary Manslaughter",
        fp: "In a criminal trial, the evidence showed that the defendant's neighbor tried to kill the defendant by stabbing him. The defendant ran to his room, picked up a gun, and told his neighbor to back off. The neighbor did not, but continued her attack and stabbed him in the arm. The defendant then shot the neighbor twice. The neighbor fell to the floor and lay quietly moaning. After a few seconds, the defendant fired a third shot into the neighbor. The jury found that the neighbor died instantly from the third shot and that the defendant was no longer in fear of being attacked by her.",
        q: "The defendant could properly be convicted of which of the following degrees of criminal homicide, if any?",
        opts: [
            "Attempted murder only.",
            "Manslaughter only.",
            "Murder or manslaughter.",
            "No degree of criminal homicide."
        ],
        ans: 2,
        exp: "Because the defendant was no longer in imminent fear when firing the third shot, perfect self-defense is unavailable[cite: 33]. Depending on whether the jury finds that the defendant fired in a continuing heat of passion upon adequate provocation or had cooled off, he may properly be convicted of either murder or voluntary manslaughter[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 15
    {
        id: 15,
        topic: "Property Crimes / Larceny (Completion)",
        fp: "A computer analyst admired his co-worker's wristwatch and frequently said how much he wished he had one like it. The co-worker decided to give the computer analyst the watch for his birthday the following week.\n\nOn the weekend before the computer analyst's birthday, the computer analyst and the co-worker attended a company picnic. The co-worker took his watch off and left it on a blanket when he went off to join in a touch football game. The computer analyst strolled by, saw the watch on the blanket, and decided to steal it. He bent over and picked up the watch. Before he could pocket it, however, the co-worker returned. When he saw the computer analyst holding the watch, he said, 'I know how much you like that watch. I was planning to give it to you for your birthday. Go ahead and take it now.' The computer analyst kept the watch.",
        q: "The computer analyst has committed",
        opts: [
            "larceny.",
            "attempted larceny.",
            "embezzlement.",
            "no crime."
        ],
        ans: 0,
        exp: "Larceny was fully completed the moment the analyst picked up the watch with the intent to steal it, satisfying both the taking and carrying away (asportation) elements[cite: 33]. The co-worker's subsequent gift did not retroactively erase the completed larceny[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 16
    {
        id: 16,
        topic: "Parties to a Crime / Innocent Agent (Larceny)",
        fp: "A babysitter, while babysitting one night, noticed that the neighbor, who lived next door, had left his house but that the door did not close completely behind him. The babysitter said to the 11-year-old boy she was babysitting, 'Let's play a game. You go next door and see if you can find my portable television set, which I lent to the neighbor, and bring it over here.' The babysitter knew that the neighbor had a portable television set, and the babysitter planned to keep the set for herself. The boy thought the set belonged to his babysitter, went next door, found the television set, and carried it out the front door. At that moment, the neighbor returned home and discovered the boy in his front yard with the television set. The boy explained the 'game' he and the babysitter were playing. The neighbor took back his television set and called the police.",
        q: "The babysitter is",
        opts: [
            "not guilty of larceny or attempted larceny, because the boy did not commit any crime.",
            "not guilty of larceny but guilty of attempted larceny, because she never acquired possession of the television set.",
            "guilty of larceny as an accessory to the boy.",
            "guilty of larceny by the use of an innocent agent."
        ],
        ans: 3,
        exp: "One who causes an innocent agent lacking criminal intent to perform the physical acts of a crime is treated as a principal in the first degree[cite: 33]. The boy's physical taking and asportation are imputed directly to the babysitter, making her guilty of completed larceny[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 17
    {
        id: 17,
        topic: "Homicide & Property Crimes / Burglary, Robbery, Felony Murder",
        fp: "At 11:00 p.m., a husband and his wife were accosted in the entrance to their apartment building by the defendant, who was armed as well as masked. The defendant ordered the couple to take him into their apartment. After they entered the apartment, the defendant forced the wife to bind and gag her husband and then to open a safe which contained a diamond necklace. The defendant then tied her up and fled with the necklace. He was apprehended by apartment building security guards. Before the guards could return to the apartment, but after the defendant was arrested, the husband, straining to free himself, suffered a massive heart attack and died.",
        q: "The defendant is guilty of",
        opts: [
            "burglary, robbery, and murder.",
            "robbery and murder only.",
            "burglary and robbery only.",
            "robbery only."
        ],
        ans: 0,
        exp: "The defendant is guilty of burglary (constructive breaking via threat of force into a dwelling at night with felonious intent), robbery (taking the necklace by force and intimidation from the victims' presence), and felony murder (the husband's fatal heart attack was proximately caused by being bound during the robbery)[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 18
    {
        id: 18,
        topic: "Inchoate Crimes / Attempted Drug Sale (Factual Impossibility)",
        fp: "A jail inmate wanted to make some money, so she decided to sell cocaine. She asked her friend, who was reputed to have access to illegal drugs, to supply her with cocaine so she could resell it. The friend agreed and sold the inmate a bag of white powder. The inmate then repackaged the white powder into smaller containers and sold one to an undercover police officer, who promptly arrested the inmate. The inmate immediately confessed and said that her friend was her supplier.",
        q: "If the friend knew the white powder was not cocaine but the inmate believed it was, which of the following is correct?",
        opts: [
            "Both the friend and the inmate are guilty of attempting to sell cocaine.",
            "Neither the friend nor the inmate is guilty of attempting to sell cocaine.",
            "The friend is guilty of attempting to sell cocaine, but the inmate is not.",
            "The friend is not guilty of attempting to sell cocaine, but the inmate is."
        ],
        ans: 3,
        exp: "The inmate possessed the specific intent to sell cocaine and took substantial acts toward that end; factual impossibility (the powder was not real cocaine) is no defense to attempt[cite: 33]. The friend knew the substance was fake and therefore lacked the specific intent to sell real cocaine, precluding attempt liability[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 19
    {
        id: 19,
        topic: "Property Crimes & Homicide / Arson & Felony Murder",
        fp: "A businessman lived on the second floor of a small convenience store/gas station that he owned. One night he refused to sell a customer a six-pack of beer after hours, saying he could not violate the state laws. The customer became enraged and deliberately drove his car into one of the gasoline pumps, severing it from its base. There was an ensuing explosion causing a ball of fire to go from the underground gasoline tank into the building. As a result, the building burned to the ground and the businessman was killed.",
        q: "In a common-law jurisdiction, if the customer is charged with murder and arson, he should be",
        opts: [
            "convicted of both offenses.",
            "convicted of involuntary manslaughter and acquitted of arson.",
            "convicted of arson and involuntary manslaughter.",
            "acquitted of both offenses."
        ],
        ans: 0,
        exp: "Common-law arson requires the malicious burning of a dwelling of another (satisfied by reckless disregard of an obvious risk of fire to the building containing the second-floor residence)[cite: 33]. Because arson is an inherently dangerous felony, the resulting death of the businessman constitutes felony murder[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 20
    {
        id: 20,
        topic: "Defenses / Reasonable Mistake of Fact (Prop Weapon)",
        fp: "A defendant is charged with murder. The evidence shows that she pointed a gun at the victim and pulled the trigger. The gun discharged, killing the victim. The gun belonged to the victim.\n\nThe defendant testifies that the victim told her, and she believed, that the 'gun' was a stage prop that could fire only blanks, and that she fired the gun as part of rehearsing a play with the victim at his house.",
        q: "If the jury believes the defendant's testimony and finds that her mistaken belief that the gun was a prop was reasonable, they should find her",
        opts: [
            "guilty of murder.",
            "guilty of manslaughter.",
            "guilty of either murder or manslaughter.",
            "not guilty of murder or manslaughter."
        ],
        ans: 3,
        exp: "A reasonable mistake of fact negates malice aforethought for murder and criminal negligence for involuntary manslaughter[cite: 33]. If the defendant reasonably believed the weapon was a prop that could not discharge live ammunition, she lacked any culpable mens rea[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 21
    {
        id: 21,
        topic: "Inchoate Crimes / Solicitation (Completion)",
        fp: "A college student approached an undercover police officer and inquired about hiring someone to kill his girlfriend's parents. Unknown to the college student, the police officer pretended to agree to handle the job and secretly taped subsequent conversations with the college student concerning plans and payment. A few days before the payment was due, the college student changed his mind and called the plan off. Nevertheless, the college student was charged with solicitation to commit murder.",
        q: "The college student should be",
        opts: [
            "acquitted, because he withdrew before payment.",
            "acquitted, because no substantial acts were performed.",
            "convicted, because the offense was completed before his attempt to withdraw.",
            "convicted, because the police officer agreed to commit the offense."
        ],
        ans: 2,
        exp: "Solicitation is complete the moment the defendant asks, commands, or urges another to commit a felony with the specific intent that the crime be committed[cite: 33]. At common law, a subsequent renunciation or withdrawal does not undo the completed offense[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 22
    {
        id: 22,
        topic: "Defenses / Self-Defense & Trespass",
        fp: "A homeless young woman broke into the basement of a hotel and fell asleep. She was awakened by a security guard, who demanded that she leave. As the young woman was leaving, she cursed the security guard. Angered, the guard began to beat the young woman on her head with his flashlight. After the second blow, the young woman grabbed a fire extinguisher and sprayed the guard in his face, causing him to lose his sight in one eye.\n\nThe jurisdiction defines aggravated assault as assault with intent to cause serious bodily injury.",
        q: "The most serious crime for which the young woman could properly be convicted is",
        opts: [
            "aggravated assault.",
            "burglary.",
            "assault.",
            "trespass."
        ],
        ans: 3,
        exp: "The young woman was privileged to use reasonable non-deadly force in self-defense against the guard's unlawful beating, complete defense to assault charges[cite: 33]. She did not commit burglary because she had no felonious intent upon entry[cite: 33]. Thus, trespass is the most serious crime of which she can be convicted[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 23
    {
        id: 23,
        topic: "Parties to a Crime / Accomplice Liability (Omission to Intervene)",
        fp: "A gangster and two of his friends were members of a teenage street gang. While they were returning from a dance late one evening, their car collided with a car driven by an elderly woman. After an argument, the gangster attacked the elderly woman with his fists and beat her to death. The two friends watched, and when they saw the woman fall to the ground they urged the gangster to flee. The gangster was eventually apprehended and tried for manslaughter, but the jury could not decide on a verdict.",
        q: "If the gangster's companions are subsequently tried as accomplices to manslaughter, they should be",
        opts: [
            "acquitted, because the gangster was not convicted of the offense.",
            "acquitted, because they did not assist or encourage the gangster to commit the crime.",
            "convicted, because they urged him to flee.",
            "convicted, because they made no effort to intervene."
        ],
        ans: 1,
        exp: "Accomplice liability requires aiding, abetting, or encouraging the commission of the crime before or during its execution[cite: 33]. Merely watching without a legal duty to intervene, or urging the principal to flee after the beating has concluded, does not make bystanders accomplices to manslaughter[cite: 33]."
    },
    // SOURCE: MBE-CriminalLaw.pdf, Question 24
    {
        id: 24,
        topic: "Inchoate Crimes / Conspiracy (Presence at All Offenses)",
        fp: "Four men are charged with conspiracy to commit a series of bank robberies. Nine successful bank robberies took place during the period of the charged conspiracy. Because the robbers wore masks and gloves and stole the bank surveillance tapes, no direct identification of the robbers by the witnesses has been made. Some circumstantial evidence ties each of the men to the overall conspiracy. During cross-examination, a prosecution witness testified that one defendant was in jail on other charges during six of the robberies. That defendant's lawyer has moved for a judgment of acquittal at the close of the government's case.",
        q: "Should the motion be granted?",
        opts: [
            "No, because a conspirator is not required to agree to all of the objects of the conspiracy.",
            "No, because a conspirator need not be present at the commission of each crime conspired upon.",
            "Yes, provided the defendant has complied with the rule requiring pretrial notice of alibi.",
            "Yes, regardless of compliance with the alibi rule, because the government is bound by exculpatory evidence elicited during its case in chief."
        ],
        ans: 1,
        exp: "Conspiracy is complete upon agreement (and an overt act where required)[cite: 33]. A conspirator need not be physically present at the commission of each substantive crime committed by co-conspirators in furtherance of the overarching conspiracy[cite: 33]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 70
    {
        id: 25,
        topic: "Homicide / Felony Murder (Time and Causation)",
        fp: "When the owner of a hardware store went away on vacation, she left her assistant in charge of the store. One day, while the assistant was alone in the store, the defendant entered and pointed a realistic-looking toy pistol at the assistant, demanding all the money in the cash register. The assistant believed that the pistol in the defendant's hand was real and complied with the defendant's demand because he was afraid that if he did not, the defendant would shoot him.\n\nThe following day, the owner returned from her vacation. When the assistant told her about the holdup, the owner became so upset that she suffered a cerebral hemorrhage and died.\n\nThe jurisdiction has a statute that provides as follows: 'Any person who causes the death of another human being with the intent to cause such death or in the course of committing a dangerous felony shall be guilty of murder.'",
        q: "If the defendant is charged with the murder of the owner, should he be found guilty?",
        opts: [
            "Yes, because robbery is a dangerous felony.",
            "Yes, because it was foreseeable that the robbery would result in the death of the owner.",
            "No, because the owner's death did not occur while the defendant was committing a dangerous felony.",
            "No, because the toy pistol that the defendant used could not foreseeably have inflicted an injury upon another person."
        ],
        ans: 2,
        exp: "The felony murder rule applies only when the death occurs during the perpetration or immediate flight from the felony[cite: 32]. Because the store owner suffered a fatal hemorrhage the day after the robbery had concluded, the death did not occur during the course of the felony[cite: 32]."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = examData;
}
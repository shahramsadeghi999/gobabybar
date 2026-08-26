const examData = [
    // SOURCE: FINZ-CriminalLaw.pdf, Question 71
    {
        id: 1,
        topic: "Defenses / Voluntary Intoxication (General vs Specific Intent)",
        fp: "In which of the following fact situations is the defendant's claim of intoxication LEAST likely to be an effective defense?",
        q: "In which of the following fact situations is the defendant's claim of intoxication LEAST likely to be an effective defense?",
        opts: [
            "Charged with rape, the defendant asserts that immediately before the act, he drank a great deal of liquor, and that as a result, he was so intoxicated that he believed the victim to be his wife.",
            "Charged with murder, the defendant asserts that immediately before she shot the victim, an unknown person put alcohol in her orange juice without her knowledge, and that as a result she was so intoxicated that she believed her gun to be a harmless toy.",
            "Charged with attempted robbery, the defendant asserts that at the time she pointed her pistol at the victim and demanded money, she was so intoxicated that she thought the victim was a friend of hers and would know that she was joking.",
            "Charged with larceny of an automobile, the defendant asserts that after injecting heroin into his bloodstream, he was so intoxicated that he believed the automobile to be his own."
        ],
        ans: 0,
        exp: "Voluntary intoxication is a defense only to specific intent crimes because it may prevent the formation of the required specific intent[cite: 32]. Rape is a general intent crime that can be committed recklessly or with criminal negligence regarding consent[cite: 32]. Awareness of the effect of alcohol prevents voluntary intoxication from serving as a defense to general intent offenses like rape[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 72
    {
        id: 2,
        topic: "Property Crimes / Receiving Stolen Property",
        fp: "In which of the following fact situations is the defendant most likely to be convicted of criminally receiving stolen property?",
        q: "In which of the following fact situations is the defendant most likely to be convicted of criminally receiving stolen property?",
        opts: [
            "After a woman was arrested for car theft, the district attorney offered to let her plead guilty to a lesser offense in return for her cooperation in the apprehension of the defendant. At the district attorney's request, the woman offered to sell the defendant the car that she had been caught stealing, telling the defendant that it was stolen. The defendant agreed to purchase it for $300 and was arrested as he handed the cash to the woman.",
            "A man told the defendant that the police were after him for stealing a car, and that he wanted to get rid of the car as soon as possible. When he offered to give the car to the defendant, the defendant said, 'Give it to my brother, but don't tell him it's stolen.' The man gave the car to the defendant's brother without telling him that it was stolen.",
            "An undercover police officer contacted the defendant saying, 'Are you interested in buying stolen cars?' The defendant said, 'If the price is right, I'll take all you can get.' Requisitioning a car from the police department's property division, the officer showed it to the defendant, telling him that the car was stolen. The defendant agreed to purchase the car and was arrested as he handed cash to the officer.",
            "Intending to make a fraudulent claim under his automobile theft insurance policy, a man sold his car to the defendant, telling him that the car was stolen. When the man was subsequently arrested and charged with insurance fraud, he told the police about the circumstances of his sale to the defendant, who was then charged with receiving stolen property."
        ],
        ans: 1,
        exp: "Receiving stolen property consists of acquiring stolen property with knowledge that it was stolen and with the intent to permanently deprive the owner[cite: 32]. Acquisition occurs when the defendant takes possession himself or directs that possession be delivered to a third party (his brother)[cite: 32]. In the other options, the property was either recovered by police (losing its stolen status) or was never actually stolen[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 74
    {
        id: 3,
        topic: "Homicide / Murder (Intent to Cause Serious Bodily Injury)",
        fp: "A man and his son were playing baseball in their backyard. The man hit the ball and the wooden bat they were using split. The broken bat piece flew over the fence and smashed the neighbor's back window. The neighbor had just had the window replaced with very expensive glass. The neighbor came outside and picked up a big broken shard of glass. The man said that he would pay to replace the window and that it was no big deal. The neighbor, annoyed, threw the broken shard at the man's head and speared him in the chest. The man was stabbed in the heart and died instantly.",
        q: "Of which of the following crimes may the neighbor be properly convicted?",
        opts: [
            "Murder.",
            "Voluntary manslaughter, because the neighbor was sufficiently provoked by the expensive broken window.",
            "Voluntary manslaughter, because the neighbor was in the heat of passion when he threw the glass.",
            "Involuntary manslaughter, because there was no indication that the neighbor intended to kill the man."
        ],
        ans: 0,
        exp: "Murder requires malice aforethought, which includes an intent to kill or an intent to inflict serious bodily injury[cite: 32]. Throwing a large, sharp glass shard directly at another person exhibits an intent to kill or inflict grievous bodily harm, satisfying malice for murder[cite: 32]. A broken window is property damage and does not constitute adequate legal provocation to reduce the crime to voluntary manslaughter[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 75
    {
        id: 4,
        topic: "Homicide / Imperfect Self-Defense",
        fp: "The defendant and victim, both scientists working on a new laser gun for the military, were drinking in a bar when they got into an argument about the merits of their work. The two men got off their bar stools and started shoving each other. The victim reached into his pocket and started to take out his cellphone saying, 'You know what? I've actually got a laser gun to work and now you are dead!' The victim had an app on his phone that made a sound like a laser charging up. The victim turned on the sound while the cellphone was still in his pocket. Because the defendant was intoxicated, he mistook the glow of the cellphone screen and the noise as the charging of a real laser gun. He grabbed a glass from the bar, shattered it, and then stabbed the victim. The victim then bled to death. The defendant was charged with murder. At trial, the defense showed that the defendant genuinely but unreasonably believed that the victim was about to shoot him with a laser gun. Consequently, the defendant claimed self-defense.",
        q: "In the majority of states, if the court believes the defendant's claim regarding the circumstances of the victim's death, what crime is the defendant guilty of?",
        opts: [
            "No crime.",
            "Murder.",
            "Voluntary manslaughter.",
            "Depraved heart murder."
        ],
        ans: 2,
        exp: "In the majority of states recognizing imperfect self-defense, an honest but objectively unreasonable belief in the necessity of using deadly force negates malice aforethought, mitigating the homicide from murder to voluntary manslaughter[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 76
    {
        id: 5,
        topic: "Defenses / Diminished Capacity & Premeditation",
        fp: "The defendant was charged with first-degree murder under a statute that defines that crime as 'the deliberate and premeditated unjustified killing of a human being.' At his trial, the defendant offered the testimony of a psychiatrist who attempted to testify that the defendant had a violent temper and that, at the time of the killing, the defendant was so enraged that he was not in control of his acts. In a jurisdiction that has adopted only the M'Naghten test of insanity, is the testimony of the psychiatrist admissible?",
        q: "Is the testimony of the psychiatrist admissible?",
        opts: [
            "Yes, because it tends to establish that the defendant was insane at the time of his act.",
            "Yes, because it tends to establish that the killing was not 'deliberate and premeditated.'",
            "No, because it does not tend to establish insanity under the M'Naghten rule.",
            "No, because in a prosecution for criminal homicide, provocation should be measured by an objective standard."
        ],
        ans: 1,
        exp: "First-degree premeditated murder requires deliberation (a cool mind capable of reflection) and premeditation (actual prior reflection)[cite: 32]. Psychiatric testimony showing that the defendant was in an uncontrolled rage is admissible to negate the specific elements of premeditation and deliberation, even if it does not satisfy the legal insanity standard[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 78
    {
        id: 6,
        topic: "Inchoate Crimes / Co-Conspirator Liability (Pinkerton Rule)",
        fp: "The defendant's roommate heard of someone in a nearby town who bought stolen cars. Because they needed money to pay their rent, the roommate proposed to the defendant that they steal a car and sell it. The defendant agreed, and the two of them went out immediately looking for a car to steal. The roommate got behind the wheel of a car they found and drove the car while the defendant sat beside him. Later, the defendant climbed into the backseat and went to sleep.\n\nWhile the defendant was sleeping, the roommate thought that he noticed a police car following them. Hoping to avoid contact with the police, he turned off onto a road that led into a neighboring state. Shortly after crossing the state line, the roommate and the defendant were arrested by federal police. They were subsequently charged in a federal court with violating the Dyer Act, which makes the interstate transportation of stolen vehicles a federal crime, and with conspiracy to violate the Dyer Act.",
        q: "On the charge of violating the Dyer Act, should the defendant be found guilty?",
        opts: [
            "No, because he could not have anticipated that the roommate would drive the car across the state line.",
            "No, because he did not agree to transport the car across a state line.",
            "No, because transportation of the car across the state line was not necessary to the success of the criminal enterprise.",
            "Yes."
        ],
        ans: 3,
        exp: "Under the Pinkerton doctrine of co-conspirator liability, each member of a conspiracy is vicariously liable for all foreseeable crimes committed by co-conspirators in furtherance of the conspiratorial objective[cite: 32]. Driving the car across state lines to evade police was in furtherance of their escape and the broader theft enterprise, making the defendant liable[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 80
    {
        id: 7,
        topic: "Property Crimes / Receiving Stolen Property (Legal Status of Goods)",
        fp: "After a man was arrested for selling large quantities of illegal substances, he agreed to assist the police in return for a promise that the charges against him would be reduced. In furtherance of their agreement, the police set the man up in the used car business and spread the rumor that the man dealt in stolen vehicles. Subsequently, a woman came to the man's lot offering to sell the man a stolen car. After conferring with a police officer assigned to the investigation, the man purchased the car from the woman. When he had done so, the police arrested the woman and notified the car's owner that it had been recovered. The following day, the defendant came to the man's lot and said that he wished to purchase a stolen car. At the direction of an undercover police officer, the man sold the defendant the car that he had purchased from the woman.",
        q: "If the defendant is charged with receiving stolen property, which of the following would be his most effective argument in defense?",
        opts: [
            "The defendant was entrapped by an agent of the police.",
            "The car that the defendant purchased was not stolen property.",
            "The man's cooperation with the police was coerced.",
            "The police cannot bargain away a defendant's rights in an agreement with a third person."
        ],
        ans: 1,
        exp: "Receiving stolen property requires that the property actually be stolen at the time the defendant receives it[cite: 32]. Once the stolen vehicle was recovered and taken into lawful police custody, it lost its legal character as stolen property, preventing conviction for the completed offense[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 83
    {
        id: 8,
        topic: "Homicide / Depraved Heart Murder (Malice)",
        fp: "The defendant fired a pistol through the ceiling of her apartment because the neighbors had refused several requests to stop making so much noise at their party. She did not intend to hit anyone with the bullet, but she hoped that the shot would frighten her neighbors and chill the atmosphere. After passing through the floor of the apartment above the defendant's, the bullet struck a piece of furniture and ricocheted. It struck the victim, lodging in his shoulder and injuring him.\n\nAn ambulance was called to transport the victim to a hospital for treatment. Because the ambulance driver was driving negligently, the ambulance was involved in a collision that resulted in the victim's death.",
        q: "If the defendant is acquitted on a charge of murdering the victim, what is the most likely reason for the acquittal?",
        opts: [
            "The defendant did not intend to strike anyone with the bullet.",
            "The victim's death was proximately caused by the negligence of the ambulance driver.",
            "The defendant was privileged to abate a nuisance by self-help.",
            "The defendant's conduct did not show a wanton disregard for human life."
        ],
        ans: 3,
        exp: "Common-law murder requires malice aforethought[cite: 32]. Because the defendant did not intend to kill or injure anyone, and was not committing an independent felony, a murder conviction would depend entirely on finding a 'depraved heart' (wanton and reckless disregard for human life)[cite: 32]. Thus, an acquittal on the murder charge must be based on a finding that her conduct lacked wanton disregard for life[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 84
    {
        id: 9,
        topic: "Defenses / Self-Defense (Reasonable Belief)",
        fp: "The victim and the defendant were roommates until they began arguing bitterly. During one argument, the victim moved out of the apartment that they shared. As she left, she said, 'I'm going to get even with you for all the grief you've caused me.' The following day, the defendant's friend told the defendant that the victim had purchased a gun. The friend also said that the victim told her that she was going to shoot the defendant the next time she saw her. As a result, the defendant began carrying a loaded pistol.\n\nSeveral days later, realizing that she still had the key to the defendant's apartment, the victim went back to return it. The defendant was leaving her apartment when she saw the victim walking toward her. As the victim reached into her pocket for the apartment key, the defendant drew her pistol and shot the victim, aiming to hit her in the chest. The bullet grazed the victim's shoulder, inflicting a minor injury. The victim immediately drew her own pistol and shot the defendant with it, striking her in the thigh and inflicting a serious injury.",
        q: "If the defendant is charged with attempted murder, which of the following would be her most effective argument in defense?",
        opts: [
            "The victim's injury was not serious enough to result in death.",
            "The defendant did not succeed in striking the victim in the chest as she intended.",
            "It was reasonable for the defendant to believe that the victim was reaching into her pocket for a gun.",
            "The force that the defendant used was not deadly."
        ],
        ans: 2,
        exp: "A person is privileged to use deadly force in self-defense if she reasonably believes that she is facing an imminent threat of death or serious bodily harm[cite: 32]. Given the victim's prior death threats, the purchase of a gun, and reaching into her pocket, the defendant's reasonable belief of an imminent deadly threat provides a complete defense[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 85
    {
        id: 10,
        topic: "Homicide / Felony Murder (Arson)",
        fp: "Two men were members of a militant political group. As a protest against the use of harmful agricultural chemicals, they planned to burn down a factory that produced such chemicals. To be certain that no persons would be injured in the explosion, they chose a time when they knew that the factory was closed. At 10 P.M., they broke into the factory and wired a fire bomb to a timer that was set to detonate at 11 P.M. At 10:45 P.M., they telephoned the local police and told them that the factory would be bombed in 15 minutes, warning them to evacuate any persons who might happen to be in the area. At 11 P.M., the bomb detonated, causing flames that totally destroyed the factory. Two transients who had broken into the factory at 10:30 P.M. in search of a place to sleep were killed by the blast.",
        q: "If the two men are charged with murder, should they be found guilty?",
        opts: [
            "No, because they did not desire or know that their act would result in the death of a human being.",
            "No, because the deaths of the transients were totally independent of their purpose in blowing up the factory.",
            "Yes, because it was not reasonable to believe that the police could successfully evacuate the area in 15 minutes.",
            "Yes, because the deaths resulted from their commission of a dangerous felony."
        ],
        ans: 3,
        exp: "Under the felony murder rule, an intent to commit an inherently dangerous felony (such as statutory arson/bombing a structure) supplies the malice aforethought required for murder when a death results during its commission[cite: 32]. Specific intent to kill or knowledge of the victims' presence is unnecessary[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 86
    {
        id: 11,
        topic: "Crimes against Person / Kidnapping (Asportation Count)",
        fp: "There were three employees and three customers in a bank when the defendant entered and drew a pistol from his pocket. Waving the pistol in the air, the defendant shouted, 'Freeze! This is a holdup!' Threatening to shoot him if he did not obey, the defendant ordered one of the tellers to open the vault. After the teller had done so, the defendant directed everyone present to lie down on the floor. The defendant then removed all the cash from the vault and left the bank, forcing one of the customers at gunpoint to accompany him into his car as a hostage. After driving for about 15 minutes, the defendant opened the car door and permitted the hostage to get out.",
        q: "Of how many kidnappings may the defendant properly be convicted?",
        opts: [
            "Zero.",
            "One.",
            "Two.",
            "Six."
        ],
        ans: 1,
        exp: "Kidnapping requires unlawful confinement accompanied by asportation (movement) of the victim[cite: 32]. Forcing the customer into a car and driving for 15 minutes constitutes kidnapping[cite: 32]. Ordering the remaining five individuals to lie on the floor inside the bank involves confinement without independent asportation, which constitutes false imprisonment rather than kidnapping[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 87
    {
        id: 12,
        topic: "Property Crimes / Receiving Stolen Property (Stolen Status)",
        fp: "Undercover police officers received an anonymous tip that the defendant was engaged in buying and selling stolen cars. They decided to catch the defendant by pretending to be criminals. One of the officers arranged to meet the defendant, telling the defendant that his friend was looking for a buyer for stolen cars. When the defendant said that he might be interested in purchasing one for resale, the officer offered to put up half the money and to buy it with him as a partner. The defendant agreed, and the officer gave him $1,000 in cash as his share. The officer had requisitioned the money from the police department for that purpose and had it marked in a way that would permit its subsequent identification. The officer then introduced the defendant to the other officer, saying that the other officer was a car thief. The other officer offered to sell the defendant a car that he said he had stolen, but which he had actually requisitioned from the police department for that purpose. After agreeing on a price for the car, the defendant paid the other officer with the marked money that the first officer had given him. The officers immediately placed the defendant under arrest.",
        q: "The defendant is charged with criminally receiving stolen property. Which of the following would be his most effective argument in defense against that charge?",
        opts: [
            "The car that the defendant purchased from the other officer had been requisitioned from the police department.",
            "The money that the defendant used to purchase the car from the other officer had been requisitioned from the police department.",
            "The two officers entrapped the defendant into purchasing the car.",
            "The anonymous tip received by the officers was not sufficient to give them probable cause to believe that the defendant was guilty of a crime."
        ],
        ans: 0,
        exp: "To be convicted of receiving stolen property, the property must actually possess the legal status of stolen property at the time of receipt[cite: 32]. Because the car was requisitioned directly from police department property, it was never stolen, defeating the completed substantive offense[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 88
    {
        id: 13,
        topic: "Property Crimes / Burglary & Arson",
        fp: "Four weeks after breaking her engagement with her boyfriend, the defendant was angry because her boyfriend still had not returned a stereo that he had borrowed from her. She went to his house one night to demand its immediate return. When she got there, the boyfriend was not at home and his door was unlocked. The defendant entered to look for her stereo but could not find it. While searching, she noticed that the boyfriend had a new couch. Thinking that the couch was worth as much as her stereo, she tore open one of its cushions and set it on fire before leaving. The fire destroyed the couch completely and charred the walls and ceiling of the room, although the house itself was not seriously damaged. The defendant was subsequently prosecuted. Statutes in the jurisdiction adopt the common law definitions of burglary, larceny, and arson.",
        q: "If the defendant is charged with burglary and arson, what can she properly be convicted of?",
        opts: [
            "Burglary only.",
            "Arson only.",
            "Burglary and arson.",
            "Neither burglary nor arson."
        ],
        ans: 1,
        exp: "Common-law arson is the malicious burning of the dwelling of another, satisfied by reckless burning resulting in structural charring to the walls and ceiling[cite: 32]. She is not guilty of common-law burglary because upon entering she intended only to retrieve her own stereo under a claim of right, lacking the requisite intent to commit a felony at the time of entry[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 90
    {
        id: 14,
        topic: "Defenses / Insanity (Irresistible Impulse)",
        fp: "As a result of mental illness, the defendant was obsessed with the delusion that his wife, the victim, was building a bomb in the basement of their house, and that she was going to use it to blow up the world. Because he twice tried to kill the victim, he had been confined to a state mental hospital on two occasions. After his most recent release from confinement, the defendant discussed his belief with the police, but they did not take him seriously. Although he knew that he would be imprisoned for murder if he was caught, he pushed the victim down a flight of stairs, thinking that he would save the world by killing her. The victim died of injuries that she sustained in the fall.",
        q: "If the defendant is prosecuted for the murder of the victim, what is his most effective argument in defense?",
        opts: [
            "He did not know that his act was wrong.",
            "He lacked criminal intent.",
            "He was unable to control his conduct.",
            "He did not appreciate the nature and quality of his act."
        ],
        ans: 2,
        exp: "Under the irresistible impulse test for legal insanity, a defendant is acquitted if mental disease rendered him unable to control his conduct or conform his actions to the law[cite: 32]. Under the M'Naghten rule, because he knew his act was legally prohibited (punishable by imprisonment), he would be deemed to know it was wrong, making the irresistible impulse argument his strongest defense[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 92
    {
        id: 15,
        topic: "Inchoate Crimes / Attempt (Specific Intent Requirement)",
        fp: "A teenager, who was 15 years of age, entered the sporting goods department and asked the employee to sell her ammunition for a pistol. The employee placed a box of ammunition on the counter and said, 'That'll be $9, please.' The employee usually worked in another department. Realizing that she did not have any money with her, the teenager left the store without the ammunition, saying that she would return for it later. A statute in the jurisdiction provides as follows: 'Any person who sells ammunition for a firearm to a person below the age of 16 years shall be guilty of a felony. The employer of any person who violates this section during the course of such employment shall be guilty of a misdemeanor punishable by a fine not to exceed $250. It shall not be a defense to a violation of this section that the defendant had no knowledge of the age of the person to whom the sale was made.'\n\nThe teenager did not return to the store.",
        q: "If the employee is charged with attempting to violate the above statute, which of the following would be the employee's most effective argument in defense against that charge?",
        opts: [
            "The employee did not know of the statute or its provisions.",
            "The employee did not know that the teenager was below the age of 16 years.",
            "The owner should be prosecuted under the statute, since she was the employee's employer.",
            "The employee is customarily employed in another department and should not be held to the same standard as a person in the business of selling firearms and ammunition."
        ],
        ans: 1,
        exp: "All criminal attempts are specific intent crimes requiring the specific intent to commit the target offense, even if the completed substantive crime imposes strict liability[cite: 32]. To be guilty of attempted illegal sale to a minor under 16, the employee must have actually known or believed that the purchaser was under 16[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 95
    {
        id: 16,
        topic: "Defenses / Involuntary Intoxication (Excessive Reaction)",
        fp: "After the defendant entered a tavern and sat on a stool at the bar, a friend sitting beside him said, 'Did you ever have this special drink?' The defendant ordered the special drink, although he had never heard of it before. While he realized that the drink had some alcohol in it, he was unaware that it was 90 percent alcohol. When the bartender placed the drink in front of the defendant, the defendant drank it quickly. A few moments later, the defendant fell off his bar stool because he was overcome by the alcohol. He fell against an elderly man, knocking him against the wall and causing the elderly man to fracture several ribs.",
        q: "If the defendant is charged with committing a criminal battery against the elderly man, which of the following additional facts or inferences, if it was the only one true, would provide the defendant with his most effective argument in defense?",
        opts: [
            "The defendant did not intend to become intoxicated by drinking the drink.",
            "The defendant did not know that drinking the drink would cause him to fall off the bar stool.",
            "The defendant did not intend to make contact with the elderly man.",
            "The defendant had never before been overcome by the alcohol in one drink."
        ],
        ans: 3,
        exp: "Criminal battery is a general intent crime[cite: 32]. While voluntary intoxication is no defense to general intent offenses, involuntary intoxication is a complete defense[cite: 32]. Intoxication resulting from an extraordinary, unpredictable, and grossly excessive reaction to an alcoholic beverage may be legally treated as involuntary intoxication[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 96
    {
        id: 17,
        topic: "Defenses / Self-Defense (Reasonable Mistake as to Police)",
        fp: "The defendant was the owner of a tavern. On two occasions in the recent past, thieves entered the defendant's tavern after closing time and stole several thousand dollars' worth of liquor. In an attempt to protect himself against further thefts, the defendant began sleeping in the tavern at night with a loaded pistol by his side. One night, while on his rounds, a police officer noticed that one of the defendant's windows was open and climbed through the window to investigate. Hearing the sound of someone moving about his tavern, the defendant stood up and cocked his pistol. When the officer heard the sound and saw the outline of a person standing by the bar with a pistol in his hand, the officer shouted, 'Drop that gun or I'll shoot!' The defendant and the officer fired their pistols at each other. Each was struck by the other's bullet.",
        q: "If the defendant is charged with attempted murder because of his shooting of the officer, should the court find him guilty?",
        opts: [
            "No, because the defendant reasonably believed that his life was in danger.",
            "Yes, because deadly force is not permitted in defense of property.",
            "Yes, because the intent to kill or inflict great bodily harm can be inferred from the defendant's conduct.",
            "Yes, because at the time of the shooting, the officer was a police officer acting within the scope of his official duties."
        ],
        ans: 0,
        exp: "Self-defense privileges the use of deadly force if the defendant reasonably believes he is in imminent danger of death or great bodily harm[cite: 32]. Because the officer entered through a window unannounced at night and threatened to shoot, the tavern owner's mistaken belief that he was facing a lethal threat from an armed intruder was reasonable, justifying self-defense[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 97
    {
        id: 18,
        topic: "Parties to a Crime / Accomplice Liability (Foreseeability)",
        fp: "The defendant and a bank robber had been in the same cell together while serving time in prison. Soon after their release, the bank robber asked the defendant to join him in robbing a bank. The defendant refused, stating that he did not want to go back to prison. The bank robber said he wouldn't use deadly force, then said that he would rob the bank himself if the defendant would provide him with a place to hide afterwards. The defendant agreed that the bank robber could hide in the defendant's apartment following the robbery in return for one-fourth of the proceeds of the robbery. The following day, the bank robber robbed the bank. While he was attempting to leave the bank, a security guard began shooting at him, and the bank robber fired back, killing a bystander. One week later, the bank robber was arrested at the defendant's apartment, where he had been hiding, and was charged with robbery and felony murder.\n\nThe defendant was subsequently charged with felony murder on the ground that he was an accomplice to the robbery committed by the bank robber that resulted in the death of a bystander.",
        q: "Should the court find the defendant guilty?",
        opts: [
            "No, because he was an accessory after the fact.",
            "No, because he did not know that the bank robber was going to use deadly force to accomplish the robbery.",
            "Yes, only if it was foreseeable that someone would be shot during the course of the robbery.",
            "Yes, because an accomplice is responsible for all crimes committed in furtherance of the crime to which he or she is an accomplice."
        ],
        ans: 2,
        exp: "An accomplice who agrees in advance to facilitate a crime (e.g., providing a pre-arranged hideout for a share of proceeds) is liable for the planned crime and all natural and foreseeable consequences[cite: 32]. Accomplice liability for an unintentional homicide resulting during a robbery attaches only if the death was a foreseeable consequence of the robbery[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 99
    {
        id: 19,
        topic: "Inchoate Crimes / Attempt (Specific Intent & Mistake of Fact)",
        fp: "A statute prohibited the sale of liquor between the hours of midnight and 8 A.M. When a customer came into the defendant's liquor store and asked to buy a bottle of liquor, the defendant looked at the clock and saw that it said five minutes past eleven, so he sold the liquor to the customer. The defendant believed that the clock was correct and did not realize that the previous day the state had changed from standard time to daylight saving time. In fact, the correct time was five minutes past midnight.",
        q: "If the defendant is charged with attempting to violate the statute, should he be found guilty?",
        opts: [
            "Yes, because he sold liquor between midnight and 8 A.M.",
            "Yes, because he should have known the actual time.",
            "Yes, because the statute did not require specific intent.",
            "No, because he believed that the time was five minutes past eleven."
        ],
        ans: 3,
        exp: "Criminal attempt is a specific intent crime requiring the specific intent to commit the proscribed act[cite: 32]. Because the defendant honestly believed the time was 11:05 P.M. (a lawful time to sell liquor), he lacked the specific intent to sell liquor during the prohibited hours of midnight to 8 A.M.[cite: 32]"
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 100
    {
        id: 20,
        topic: "Property Crimes / Larceny (Claim of Right vs. Debt Collection)",
        fp: "The victim borrowed $50 and a watch worth an additional $50 from the defendant. Although the defendant repeatedly requested that the victim return the watch and the money, the victim refused to do so. The defendant and the victim belonged to the same exercise club. One day, while the victim was in the shower, the defendant opened the victim's locker and took $100 from the victim's wallet, returning the wallet to the locker. It was the defendant's intention to keep $50 of the money to pay himself back for the money he had loaned the victim and to keep the other $50 to pay himself for the watch that the victim had refused to return. A statute in the jurisdiction adopts the common law definition of larceny and provides that a larceny of $50 or less is a misdemeanor, while a larceny of more than $50 is a felony.",
        q: "What crime did the defendant commit?",
        opts: [
            "One misdemeanor only.",
            "Two misdemeanors only.",
            "A felony.",
            "No crime."
        ],
        ans: 0,
        exp: "A taking under an honest claim of right to collect a specific liquidated debt of money ($50) negates the felonious intent to steal the property of another[cite: 32]. However, taking cash to compensate for an unreturned chattel (the $50 watch) is an unauthorized self-help conversion that constitutes larceny of $50 (one misdemeanor)[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 101
    {
        id: 21,
        topic: "Homicide / Causation (Substantial Factor / Acceleration)",
        fp: "Because he wanted to run away with his mistress, a man decided to murder his wife by poisoning her. He slipped a lethal dose of poison into her morning coffee and went to work. When the wife came down to the kitchen and drank it, she immediately fell face down on the counter. A few minutes later, the mistress came to the kitchen backdoor and saw the wife face down on the counter. The mistress thought the wife was sleeping, but the wife was really about two hours away from death by the poison. Believing this was her chance to kill the wife, the mistress broke into the house and stabbed the wife in the back with a cleaver. The wound would not have killed the wife except for the fact that she was weakened by the poison. She died 10 minutes later, although she would have lasted a few more hours if she hadn't been stabbed.",
        q: "May the mistress be held criminally liable for the murder?",
        opts: [
            "Yes, because the stabbing sped up the wife's death.",
            "Yes, because the mistress had unlawfully entered the house.",
            "No, because the wife would have died anyway based on the poison.",
            "No, because the stabbing could not have killed the wife on its own."
        ],
        ans: 0,
        exp: "An act that hastens, accelerates, or contributes as a substantial factor to the death of a human being satisfies the cause-in-fact requirement for criminal homicide, even if the victim was already suffering from a terminal or lethal injury[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 102
    {
        id: 22,
        topic: "Inchoate Crimes / Conspiracy & Co-Conspirator Liability for Attempt",
        fp: "The defendant and two other men met while in prison and decided that when they were released, they would rob a bank together. Soon after their release, they planned the robbery, agreeing that the defendant would steal and drive the getaway car and that the two other men would commit the actual robbery. The defendant stole a car for the robbery and brought it to one of the men's house, but the day before the robbery was to be committed, the defendant was arrested for violating the conditions of his parole and was returned to prison. The following day, the two other men went ahead with the plan, entering the bank and threatening to shoot the cashiers if they did not hand over all available cash. A teller pushed a button that alerted the police, and the two men were arrested before leaving the bank.",
        q: "Of which of the following crimes is the defendant guilty?",
        opts: [
            "Attempted robbery.",
            "Conspiracy to commit robbery.",
            "Attempted robbery and conspiracy to commit robbery.",
            "No crime."
        ],
        ans: 2,
        exp: "The defendant is guilty of conspiracy because he entered into an agreement to rob the bank and committed an overt act (stealing a car)[cite: 32]. Under the Pinkerton rule, an unwithdrawn co-conspirator is vicariously liable for all crimes committed by co-conspirators in furtherance of the conspiracy, including the attempted robbery[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 105
    {
        id: 23,
        topic: "Inchoate Crimes / Conspiracy (Target Offense Legality)",
        fp: "Three friends were hanging out while their parents were not home. The first boy was 17 years of age; the girl and the second boy were each 15. Since the girl had engaged in sexual relations with several other boys at the high school, she and the first boy secretly agreed that she would try to seduce the second boy. The girl had some marijuana in her purse, and she and the second boy smoked some of it. Soon, however, the second boy's intoxication made him physically unable to perform. A statute in the jurisdiction provides that '[a] person is guilty of rape in the third degree when, being 17 years of age or more, he or she engages in sexual intercourse with a person under the age of 16 years.'\n\nLaws in the state define a conspiracy as '[a]n agreement to commit a crime between two or more persons with the specific intent to commit a crime.'",
        q: "If the first boy is charged with conspiracy based on his agreement with the girl regarding the seduction of the second boy, what would be the first boy's most effective argument in defense?",
        opts: [
            "The seduction of the second boy would not have been possible without the girl's participation.",
            "The first boy did not commit any overt act that was likely to accomplish the seduction of the second boy.",
            "The girl was unsuccessful in having intercourse with the second boy.",
            "Intercourse between the girl and the second boy would not have been a crime."
        ],
        ans: 3,
        exp: "Conspiracy requires an agreement to commit an act that constitutes a crime[cite: 32]. Because the statute only criminalizes sexual intercourse committed by a person 17 or older, intercourse between two 15-year-olds is not a crime under the statute; thus, an agreement to facilitate that act cannot constitute a criminal conspiracy[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 106
    {
        id: 24,
        topic: "Inchoate Crimes / Attempt as Lesser Included Offense",
        fp: "A store owner wanted to erect a new storage building so that he could expand his business of selling diet food and health supplies. He was afraid, however, that the building department would not issue him a permit to begin construction. A building department clerk said that she would make a false entry in the official records to indicate that a permit had already been issued if the store owner would pay her $500. The store owner agreed and said that he would bring the money the following day. The next day, however, when the store owner went to the clerk's office with $500, he was told that she had been fired.\n\nA statute in the jurisdiction provides as follows: 'Any person who shall give or accept a fee not authorized by law as consideration for the act of any public employee is guilty of bribery, a felony. Any person who shall offer to commit a bribery is guilty of bribery in the second degree, a felony.'",
        q: "If the defendant is prosecuted for attempted bribery in the second degree, should the court find him guilty?",
        opts: [
            "No, because bribery in the second degree is an attempt crime, and there can be no liability for attempting to attempt.",
            "No, because it was the clerk who made the initial offer.",
            "No, because the defendant committed bribery in the second degree when he agreed to pay the clerk for altering the records, and the attempt merged with that crime.",
            "Yes, because attempting to commit bribery in the second degree is a lesser offense included in that crime."
        ],
        ans: 3,
        exp: "An attempt to commit a crime is a lesser included offense of the completed crime[cite: 32]. Because the defendant offered to pay the bribe and showed up with the cash to consummate the transaction, he is guilty of the completed offense and necessarily guilty of the lesser included attempt charge[cite: 32]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 107
    {
        id: 25,
        topic: "Inchoate Crimes / Attempted Murder (Specific Intent to Kill)",
        fp: "Angry because her coworker had insulted her, the defendant decided to get revenge. Because she worked for an exterminator, the defendant had access to cans of a poison gas that was often used to kill termites and other insects. She did not want to kill the coworker, so she carefully read the user manual supplied by the manufacturer. The manual said that the gas was not fatal to human beings, but that exposure to it could cause serious ailments, including blindness and permanent respiratory irritation. When she was sure that no one would see her, the defendant brought a can of the gas to the parking lot and released the poison gas into the coworker's car. At lunchtime, the coworker and his friend sat together in the coworker's car. As a result of their exposure to the gas in the car, the friend died and the coworker became so ill that he was hospitalized for over a month.",
        q: "If the defendant is charged with the attempted murder of the coworker, should she be found guilty?",
        opts: [
            "Yes, because the coworker suffered a serious illness as the result of a criminal act that she performed with intent to cause him great bodily harm.",
            "Yes, because her intent to cause great bodily harm resulted in the death of the friend.",
            "No, because she did not intend to cause the death of any person.",
            "No, because the crime of attempted murder merges with the crime of murder."
        ],
        ans: 2,
        exp: "Attempted murder is a specific intent crime that strictly requires the specific intent to kill[cite: 32]. Although an intent to inflict serious bodily harm satisfies malice aforethought for completed murder, it is insufficient to support a conviction for attempted murder[cite: 32]."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = examData;
}
const examData = [
    // FACT PATTERN 1 (Q1)
    {
        id: 1,
        topic: "Property Crimes / Larceny (Contingent Intent)",
        fp: "The defendant was the chief cashier at a supermarket. As part of her duties, she deposited the day's receipts in the company safe each night. One Friday night, when the store was to be closed for the entire weekend, after depositing the day's receipts in the safe, the defendant removed $500 from the safe without permission. She knew that no one would be looking for the money in the safe during the weekend and planned to take it with her on a gambling junket to Las Vegas. Her intentions were to gamble with the money, and, if she won, to return it on Monday morning. If she lost, she planned to alter the store records to hide the fact that the money was missing.\n\nOn Monday morning, the defendant returned to the supermarket. Having won a few hundred dollars during her weekend gambling trip, she returned the money that she had taken from the safe. One of her coworkers saw her returning the money and questioned her about it until the defendant admitted what she had done.",
        q: "If the defendant is charged with larceny for taking $500 from the safe on Friday night, should she be found guilty?",
        opts: [
            "No, because the owner of the supermarket was not deprived of its use.",
            "No, because when she took the money, she intended to return it if she won.",
            "Yes, because she withheld $25 on Monday morning.",
            "Yes, because she planned to keep the money if she lost."
        ],
        ans: 3,
        exp: "Larceny is a trespassory taking and carrying off of personal property known to be another's with the intent to permanently deprive the owner of it[cite: 32]. Although the defendant planned to return the money in the event of one contingency, she planned not to return it in the event of another[cite: 32]. This contingent intent to permanently deprive is sufficient to make her guilty of larceny when she took and carried off the money on Friday night[cite: 32]."
    },
    // FACT PATTERN 2 (Q2)
    {
        id: 2,
        topic: "Defenses / Mistake of Fact",
        fp: "A statute provides as follows: 'Any person who knowingly sells an intoxicating substance to a person under the age of 21 years shall be guilty of a misdemeanor.' The owner of a cocktail lounge hired the defendant to work as her bartender. Before the defendant began working, the owner read him the above statute and explained the need for him to check the identification of all persons who appeared to be under the age of 21 years. Later that night, a 17-year-old teenager who looked like he was 25 ordered a glass of wine. The teenager showed the defendant an altered driver's license that falsely stated his age to be 22. The defendant was not sure whether the phrase intoxicating substance in the statute included wine, and he served it to the teenager. An undercover police officer who was at the bar observed the transaction.",
        q: "If the defendant is charged with violating the statute, what is his most effective argument in defense?",
        opts: [
            "He did not know whether the statutory phrase intoxicating substance included wine.",
            "He reasonably believed the teenager to be over the age of 21 years.",
            "The undercover police officer entrapped him.",
            "The wine was not an intoxicating substance because the teenager never got a chance to drink it."
        ],
        ans: 1,
        exp: "Although most statutes that forbid the sale of alcohol to minors impose strict liability, this one does not because it prohibits only the 'knowing' sale[cite: 32]. If the defendant reasonably believed that the teenager was over the age of 21, he lacked the knowledge that is requisite to a conviction[cite: 32]."
    },
    // FACT PATTERN 3 (Q3)
    {
        id: 3,
        topic: "Defenses / Self-Defense",
        fp: "After closing down his restaurant at 3 A.M. the defendant was getting in his car to go home when he felt something sharp and metal jab him in the back. A low voice growled, 'I've got a gun. Give me your wallet or I'll shoot you right here.' Because of several recent thefts in the area, the defendant habitually carried a large kitchen knife in his coat pocket. The defendant spun around and stabbed the 'robber' in the chest. The 'robber' fell down to the ground dead. The defendant then realized that the 'robber' was actually the owner of the competing restaurant next door, who was well known for playing practical jokes, and the 'gun' was simply the round handle of a metal spatula. The defendant was arrested and charged with murder.",
        q: "If the defendant asserts that he acted in self-defense, should the court still find him guilty?",
        opts: [
            "No, because the defendant was justified in believing he was about to be robbed.",
            "No, because the defendant's belief that the 'robber' would shoot him was reasonable.",
            "Yes, because the defendant did not turn around and verify that the 'robber' was actually holding a gun.",
            "Yes, because it was unreasonable to spin around and stab an unknown person with a kitchen knife."
        ],
        ans: 1,
        exp: "Self-defense involves a privilege to use reasonable force to prevent what is reasonably perceived as a threat of imminent bodily harm[cite: 32]. If a defendant makes a mistake regarding the need for self-defense, courts will look at whether such a mistake was reasonable[cite: 32]. Here, the recent robberies, time of day, robber's threat, and the metal spatula handle in the back likely made it reasonable for the defendant to believe he was in danger of being shot[cite: 32]."
    },
    // FACT PATTERN 4 (Q4)
    {
        id: 4,
        topic: "Parties to a Crime / Accomplice to Rape",
        fp: "The defendant was a narcotics addict in desperate need of a shot. He offered to permit a drug dealer to have sexual intercourse with his wife in return for drugs. The drug dealer accepted the offer and went home with the defendant. When the defendant told his wife about the arrangement, however, she refused to have any contact with the drug dealer. The defendant struck her several times and held her down while the drug dealer had intercourse with her forcibly. Afterward, the drug dealer handed a packet of heroin to the defendant.",
        q: "Which of the following is the most serious crime of which the defendant can be found guilty?",
        opts: [
            "Rape.",
            "Battery.",
            "Procuring for prostitution.",
            "Possession of narcotics."
        ],
        ans: 0,
        exp: "A person is guilty as an accessory to a crime when he or she aids and abets in its perpetration[cite: 32]. At common law, a defendant commits rape when he or she has sexual intercourse with a woman who is not his wife without the woman's consent[cite: 32]. Although under this definition a husband cannot be guilty as a principal of raping his wife, he can be guilty as an accessory if he aids and abets another to have sexual intercourse with her without her consent[cite: 32]."
    },
    // FACT PATTERN 5 (Q5)
    {
        id: 5,
        topic: "Property Crimes / Larceny vs Burglary",
        fp: "The defendant was about to go to his sister's wedding when he remembered that he had inadvertently left his camera at his friend's house. Although he knew that his friend was out of town, the defendant went to his friend's house in the hope of finding some way to get the camera so that he could take pictures at the wedding. The door was locked, but when the defendant shook the doorknob vigorously with his hand, the door opened. The defendant entered and searched for his camera, but he could not find it. As he was leaving, he saw a silver candy dish on a shelf with several other items and took it to give his sister as a wedding present. He subsequently changed his mind, however, and returned it to his friend.",
        q: "Of which of the following crimes may the defendant properly be convicted?",
        opts: [
            "Larceny.",
            "Burglary.",
            "Attempted burglary.",
            "No crime."
        ],
        ans: 0,
        exp: "Larceny is defined as the trespassory taking and carrying off of personal property known to be another's with the intent to permanently deprive the owner thereof[cite: 32]. Since the defendant's taking and carrying off of the candy dish was inconsistent with his friend's rights, it was trespassory, and giving it to his sister as a wedding present would permanently deprive his friend of it[cite: 32]. He is not guilty of burglary because he entered to recover his own camera, meaning his purpose was not to commit a felony[cite: 32]."
    },
    // FACT PATTERN 6 (Q6)
    {
        id: 6,
        topic: "Inchoate Crimes / Attempted Involuntary Manslaughter",
        fp: "The defendant was a nightclub performer who was billed as 'the man with second sight.' As part of his nightclub act, he would put on a blindfold and walk between the tables, identifying the contents of pockets and purses of members of the audience. One day, as a publicity stunt, he had himself blindfolded and attempted to drive an automobile in rush-hour traffic. Because he was unable to see the road, he collided with the vehicle in front of him. As a result of the impact, the other vehicle burst into flames and three of its occupants were severely burned, one so badly that he permanently lost the use of his legs. If they had not been rescued by a fire company that happened to be passing by, all three would have died.",
        q: "On a charge of attempted involuntary manslaughter, should the defendant be found guilty?",
        opts: [
            "Yes, because his reckless behavior nearly resulted in the death of another human being.",
            "Yes, because he had completed all steps necessary to result in guilt for involuntary manslaughter, and the deaths of the victims were prevented by an independent agency.",
            "No, because he lacked the requisite state of mind to be liable for an attempt.",
            "No, because the crime of involuntary manslaughter is a lesser offense included in murder."
        ],
        ans: 2,
        exp: "A person is guilty of attempting to commit a crime when, with the specific intent to bring about a criminally prohibited result, he or she comes substantially close to achieving that result[cite: 32]. Since involuntary manslaughter is unintended homicide, there can be no attempt to commit it because the requisite state of mind cannot exist[cite: 32]."
    },
    // FACT PATTERN 7 (Q7)
    {
        id: 7,
        topic: "Homicide / Felony Murder Limitations",
        fp: "A state statute provides that 'any person who brings about the death of another human being with the intent to cause said death or in the course of committing burglary, rape, robbery, or kidnapping shall be guilty of murder in the first degree.' The jurisdiction applies common law definitions for the four enumerated felonies. The defendant was attempting to use dynamite to blow open the door of a warehouse so that he could enter to steal its contents. His accomplice was waiting in the getaway car parked at the curb. When the defendant detonated the charge, the resulting explosion damaged the building wall, causing bricks and chunks of mortar to fly through the air. A brick crashed through the windshield of the getaway car, striking the accomplice in the head and killing him.",
        q: "If the defendant is charged with murder in the first degree, which of the following arguments would be his most effective defense?",
        opts: [
            "The statute was not intended to protect the accomplice of a felon.",
            "Burglary as defined by common law is not a dangerous felony.",
            "The accomplice's death was not proximately caused by the defendant's attempt to commit any of the crimes enumerated by the statute.",
            "The accomplice assumed the risk by participating in the commission of a felony."
        ],
        ans: 2,
        exp: "The defendant obviously did not have the intent to cause the death of the accomplice and was obviously not engaged in committing rape, robbery, or kidnapping at the time that the accomplice was killed[cite: 32]. Under the common law definition, burglary is a breaking and entering into the dwelling of another at night for the purpose of committing a felony therein[cite: 32]. Since the defendant was attempting to enter a warehouse rather than a dwelling, he was not committing a burglary either, preventing the application of the statute[cite: 32]."
    },
    // FACT PATTERN 8 (Q8)
    {
        id: 8,
        topic: "Parties to a Crime / Accessory Liability",
        fp: "The defendant, who had applied for employment with a company, learned that the decision as to whether to hire him would be made by the company's personnel manager. Anxious to receive the job, the defendant offered to give the personnel manager his first week's pay if the personnel manager would hire him. The personnel manager accepted the defendant's offer and hired him, later accepting the payment. Subsequently, the defendant and the personnel manager were both charged with violating a state law that provided that 'it shall be a felony for any person with responsibility for hiring others to solicit, demand, or receive anything of value from persons hired in exchange for hiring said persons.' They were tried jointly, the personnel manager as a principal and the defendant as an accessory.",
        q: "What is the defendant's best argument for a dismissal of the charge?",
        opts: [
            "A person cannot be tried as an accessory until the principal has first been tried and convicted.",
            "He did not assist the personnel manager in the commission of the crime.",
            "No person can be charged as an accessory if the crime could not have been committed without his or her participation.",
            "The law was intended to protect people in the defendant's position against people in the personnel manager's position."
        ],
        ans: 3,
        exp: "The victim of a crime does not share the guilt of the perpetrator, even though the victim's participation was necessary to the crime's commission[cite: 32]. If the law was designed to protect people in the defendant's position against people in the personnel manager's position, the defendant can be regarded as the victim of the personnel manager's act and thus escape criminal liability as an accessory[cite: 32]."
    },
    // FACT PATTERN 9 (Q9)
    {
        id: 9,
        topic: "Property Crimes / Robbery",
        fp: "The defendant, in need of money, waited in an alley until the victim walked by on the street. Then, stepping out of the alley, he stuck his hand in his pocket with his finger thrust forward and said, 'I've got a gun in this pocket.' Snatching the victim's purse with the other hand, he ran away. Because she thought that he had a gun, the victim did not attempt to stop him.",
        q: "Of which of the following offenses would the defendant be most likely to be properly convicted?",
        opts: [
            "Robbery.",
            "Larceny by trick.",
            "Embezzlement.",
            "False pretenses."
        ],
        ans: 0,
        exp: "Robbery is larceny accomplished by force or a threat of force directed at the lawful possessor of the property taken[cite: 32]. The defendant's snatching of the purse was accomplished by force, and the hand in his pocket coupled with his words constituted a threat of force[cite: 32]."
    },
    // FACT PATTERN 10 (Q10)
    {
        id: 10,
        topic: "Property Crimes / Larceny & Burglary",
        fp: "When a doctor went away on vacation, he left the key to his apartment with his neighbor, the defendant, who promised to water the doctor's plants until he returned. One day, as the defendant was watering the doctor's plants, she suspected one of them to be marijuana. She watered the rest of the plants and then went to the public library, where she consulted a reference book and found that the suspicious plant was indeed marijuana. She went back to the doctor's apartment and let herself in with the key. Then she pulled the marijuana plant out by its roots and destroyed it by stuffing it into the garbage disposal in her own apartment.\n\nThe jurisdiction applies the common law definition of larceny and has a statute defining burglary as 'breaking and entering into the premises of another for the purpose of committing larceny.'",
        q: "If charged with larceny and burglary, what should the defendant be found guilty of?",
        opts: [
            "Larceny only.",
            "Burglary only.",
            "Larceny and burglary.",
            "Neither larceny nor burglary."
        ],
        ans: 0,
        exp: "Larceny is a trespassory taking and carrying off of property known to be another's with the intent to permanently deprive[cite: 32]. The defendant's taking of the plant was trespassory, and therefore a larceny, because she had been authorized to water it, not to carry it off[cite: 32]. The defendant could not be guilty of burglary since her use of the key that the doctor gave her prevents her entry from constituting a breaking, which requires force against the premises[cite: 32]."
    },
    // FACT PATTERN 11 (Q11)
    {
        id: 11,
        topic: "Crimes against Person / Rape",
        fp: "In the course of robbing a bank, the defendant pointed a gun at three bank tellers and the bank manager and ordered them to go from the bank lobby to the back room while his confederate attempted to open the safe. Threatening to shoot them if they refused, he then ordered one of the bank tellers to undress and commanded the bank manager to have sexual intercourse with her. Fearful that they would be killed otherwise, the manager and teller obeyed the defendant's commands without protesting.",
        q: "Of which of the following crimes is the defendant guilty?",
        opts: [
            "Solicitation to commit rape.",
            "Rape.",
            "Both solicitation to commit rape and rape.",
            "Neither solicitation to commit rape nor rape."
        ],
        ans: 1,
        exp: "Rape is sexual intercourse without consent of the female. Since the bank teller's resistance was overcome by the defendant's threat and her resulting fear of death, the intercourse occurred without her consent[cite: 32]. One who commands another to do an act is responsible for the criminal consequences thereof[cite: 32]. Although the defendant did not himself have sexual intercourse with the teller, he is guilty of rape because he commanded the bank manager to do so[cite: 32]. (Solicitation merges with the completed crime)."
    },
    // FACT PATTERN 12 (Q12)
    {
        id: 12,
        topic: "Property Crimes / Burglary",
        fp: "A man broke into a church in order to desecrate it. He planned to do so by sacrificing a squirrel on top of the altar. When he got inside the church, the squirrel bit him on the finger and escaped. The man believed desecrating a church was a felony, but there were actually no laws at all regarding desecration.",
        q: "If the man is charged with burglary, should he be convicted?",
        opts: [
            "Yes, because he intended to commit a felony when he broke into the church.",
            "Yes, because he would have completed his intended crime if the squirrel hadn't escaped.",
            "No, because he could only be charged with attempted burglary.",
            "No, because what he intended to do was not a crime."
        ],
        ans: 3,
        exp: "Under the common law, burglary is the breaking and entering into the dwelling house of another, at night, with the intent to commit a felony therein[cite: 32]. Here, since what the man was intending to do wasn't actually a crime, he can't be convicted of burglary[cite: 32]. The issue is whether what the man intended to do was a felony in reality, not whether the man merely possessed a mistaken belief that he was intending to commit a felony[cite: 32]."
    },
    // FACT PATTERN 13 (Q13)
    {
        id: 13,
        topic: "Parties to a Crime / Accomplice",
        fp: "Because they were bigots, a man and a woman were angry when a black family moved into a house on their street. Deciding to drive them away and to set an example that would discourage other black people from moving into the neighborhood, they agreed to set fire to the family's home. They went to the house, and the man started pouring gasoline around it. A crowd of onlookers began to gather. The defendant, one of the onlookers, shouted, 'Burn their house down!' intending that the man and the woman would do so. After the man finished pouring the gasoline, the woman lit a match and set it afire, burning the house to the ground.",
        q: "Is the defendant guilty of arson?",
        opts: [
            "Yes, because he aided and abetted in the crime by his presence, coupled with his criminal intent.",
            "Yes, because, intending that the man and the woman would burn the house down, he shouted encouragement.",
            "No, because his words did not create a clear and present danger that did not already exist.",
            "No, because words alone are not sufficient to result in criminal liability."
        ],
        ans: 1,
        exp: "One who, with the intent that a crime will be committed, encourages another to commit that crime, is liable for it as an accessory[cite: 32]. Mere presence at the scene of a crime is not sufficient, even if the defendant intended or was willing for the crime to be committed; however, here the words were coupled with intent and constituted active encouragement[cite: 32]."
    },
    // FACT PATTERN 14 (Q14)
    {
        id: 14,
        topic: "Homicide / Involuntary Manslaughter vs Murder",
        fp: "A high school student thought it would be a funny prank to spike the football team's water with a nausea-inducing chemical so they'd all throw up on the field. She thought doing so would draw attention to the misogyny and toxicity of high school football culture. Despite carefully reading the recommended dosage from the package, the student mismeasured the amount she should put in the water cooler and put in much more than was safe. A football player walked up to the cooler and took a sip. The player had a severe peanut allergy, and the chemical the student used was made from peanuts. The player died later at the hospital. The student was charged with first-degree murder.",
        q: "May the student be convicted of first-degree murder?",
        opts: [
            "Yes, because she deliberately put the chemical in the water cooler intending the players to drink it.",
            "Yes, because the player's death occurred during perpetration of a felony.",
            "No, because she acted not with intent to kill but with an abandoned and malignant heart.",
            "No, because she did not intend to kill anyone."
        ],
        ans: 3,
        exp: "Depending on the seriousness of the wrongdoing, a defendant who engages in wrongful conduct that results in a homicide is guilty of either involuntary homicide or second-degree murder[cite: 32]. Involuntary homicide is appropriate when the wrongful conduct did not create a very high risk of death or serious injury[cite: 32]. Poisoning the water to make the players sick was unlikely to cause death or serious injury, and the student did not intend to kill anyone[cite: 32]."
    },
    // FACT PATTERN 15 (Q15)
    {
        id: 15,
        topic: "Defenses / Intoxication",
        fp: "In which of the following situations is the defendant's claim of intoxication most likely to result in his or her being found not guilty?",
        q: "In which of the following situations is the defendant's claim of intoxication most likely to result in his or her being found not guilty?",
        opts: [
            "In a jurisdiction that applies the common law definition, the defendant is charged with involuntary manslaughter for the death of a pedestrian whom she struck while driving an automobile. The defendant asserts that at the time of the accident, she was so drunk that she did not see the pedestrian in the roadway.",
            "In a jurisdiction in which the statutory age of consent is 18, the defendant is charged with statutory rape after having sexual intercourse with a female who was 17 years of age. The defendant asserts that he was so intoxicated that he did not realize that he was engaging in sexual intercourse.",
            "In a jurisdiction that applies the common law definition, the defendant is charged with murder for the death of a person whom she struck with her automobile. The defendant asserts that, without her knowledge, an unknown person put alcohol in her fruit juice, as a result of which she became so intoxicated that she could not see clearly or control the movements of her hands and feet.",
            "In a jurisdiction that applies the common law definition, the defendant is charged with voluntary manslaughter after killing his wife. He asserts that he was so drunk that he imagined that he saw another man in bed with her, and that he killed her in the drunken rage that resulted."
        ],
        ans: 2,
        exp: "Involuntary intoxication may be a defense to crimes involving recklessness, as well as to specific intent crimes[cite: 32]. The defendant's assertion in (C) that an unknown person put alcohol in her juice without her knowledge could provide her with an effective defense to murder based on reckless driving, because her intoxication was involuntary[cite: 32]. Voluntary intoxication is not a defense to general intent crimes like statutory rape or reckless involuntary manslaughter[cite: 32]."
    },
    // FACT PATTERN 16 (Q16)
    {
        id: 16,
        topic: "Homicide / Murder elements",
        fp: "In which one of the following situations is the defendant LEAST likely to be guilty of murder?",
        q: "In which one of the following situations is the defendant LEAST likely to be guilty of murder?",
        opts: [
            "Having been hired by a third person to beat the victim severely enough to 'put her in the hospital,' the defendant struck the victim repeatedly with a baseball bat in the knees. Although the defendant intended only to break the victim's legs, she died of shock.",
            "Because he suffers from mental disease, the defendant believed the victim to be Adolf Hitler. Intending to kill him, the defendant shot him to death.",
            "Believing the victim to be asleep, the defendant fired 10 bullets into his head. In fact, the victim had died of a heart attack moments before the defendant entered the room and was already dead when the defendant shot him.",
            "The defendant stole a check from the victim's mailbox and attempted to cash it in a bank by masquerading as the victim. Suspecting forgery, the bank teller signaled to the bank guard. As the guard approached, the defendant shot at him. When the guard returned the defendant's fire, one of the guard's bullets ricocheted off a wall and struck a customer, killing him."
        ],
        ans: 2,
        exp: "Murder is defined as criminal homicide with malice aforethought[cite: 32]. Since homicide involves an act that causes the death of a human being, and since the victim's death in (C) did not result from the defendant's act (because the victim was already dead from a heart attack), the defendant could not be guilty of murdering the victim[cite: 32]. (He could only be guilty of attempted murder)."
    },
    // FACT PATTERN 17 (Q17)
    {
        id: 17,
        topic: "Crimes against Person / Kidnapping",
        fp: "A woman was a collector of antique automobiles. One day, she took her infant daughter for a ride in one of the most valuable cars in her collection. On her way, she stopped to buy a newspaper. Because her daughter had fallen asleep in the backseat, the collector left her in the car when she got out. The defendant, a professional car thief who happened to be at the newspaper stand, jumped into the collector's car and drove it away without noticing the daughter in the backseat.\n\nThe defendant realized that he would not be able to sell a stolen car as unusual as this one, so he parked it in a friend's garage, still unaware of the presence of the sleeping child. Getting the collector's name and phone number from some papers in the glove compartment of the car, the defendant phoned her and left a message on her voicemail, telling her that if she did not immediately bring $1,000 in cash to a certain location, he would set the car on fire.\n\nUpon hearing the message, the collector brought $1,000 to the location specified. The defendant, who was waiting for her, took the money and returned the car. The daughter was still sleeping quietly in the backseat.",
        q: "If the defendant is charged with kidnapping, should the court find him guilty?",
        opts: [
            "Yes, because he confined and moved the daughter without her consent.",
            "Yes, because the asportation of the daughter resulted from his commission of a serious felony.",
            "No, because his primary purpose was to steal the car, and the movement of the daughter was only incidental to his accomplishing that purpose.",
            "No, because he did not know that the daughter was in the car."
        ],
        ans: 3,
        exp: "Kidnapping is defined as the intentional asportation and confinement of a person against that person's will, by force or threat, and without lawful authority[cite: 32]. Since the defendant did not know that the daughter was in the car when he drove it away, he lacked the requisite intent[cite: 32]."
    },
    // FACT PATTERN 18 (Q18)
    {
        id: 18,
        topic: "Inchoate Crimes / Attempted Burglary vs Possession",
        fp: "Because he was a professional thief, the defendant owned a skeleton key that could be used to open many different locks. One evening, when he knew that the victim was away on vacation, the defendant went to her home for the purpose of stealing cash that he believed was hidden inside. While he was trying unsuccessfully to use his skeleton key to open the victim's door, the defendant was arrested by a police officer. In fact, the victim had placed her cash in a bank safety deposit box before going on vacation, and her house contained nothing of value.",
        q: "If charged with violating a statute that makes it a crime to 'possess any skeleton key with the intent to use it for the purpose of committing an unlawful entry onto the property of another,' should the court find him guilty?",
        opts: [
            "Yes, because the statute was designed to protect the public against professional thieves.",
            "Yes, because he possessed a skeleton key with the intent to use it for the purpose of committing an unlawful entry.",
            "No, because the crime defined by the statute is merged into the crime of attempted burglary.",
            "No, because to convict him would be to punish him merely for having a guilty mind."
        ],
        ans: 1,
        exp: "Since the statute prohibits possession of a skeleton key with the intent to commit an unlawful entry, and since the defendant was, in fact, attempting to effect an unlawful entry with his skeleton key, he is guilty of violating the statute[cite: 32]. The crime defined by the statute would merge into attempted burglary if charged with it, but in the absence of an attempted burglary charge, the lesser crime can be prosecuted[cite: 32]."
    },
    // FACT PATTERN 19 (Q19)
    {
        id: 19,
        topic: "Defenses / Duress limitation",
        fp: "A bank robber took two tellers hostage inside a bank. The bank robber told the police that if anyone tried to come inside the bank, he would kill someone. A few hours later, the bank robber caught a policeman trying to crawl through an air vent. The police officer was stuck. The bank robber took one of the hostages, put a gun to his head, and handed him a loaded gun pointed at the police officer's head. The bank robber told the hostage that if he didn't shoot the policeman, he'd shoot him. Not wanting to die, the hostage shot and killed the policeman. After the bank robber was caught, the hostage was charged with the death of the police man.",
        q: "Should the court find the hostage guilty of a crime?",
        opts: [
            "Yes, the hostage is guilty of murder.",
            "Yes, the hostage is guilty of involuntary manslaughter because he did not intend to kill the policeman.",
            "No, because the hostage was under duress when he was forced to commit the killing.",
            "No, because the hostage killed the officer out of necessity to save his life."
        ],
        ans: 0,
        exp: "Duress is not a defense to murder because one person's life is not more important than another person's life[cite: 32]. Here, the hostage clearly intended to kill the policeman, and the fact that he did so under duress does not change the analysis[cite: 32]."
    },
    // FACT PATTERN 20 (Q20)
    {
        id: 20,
        topic: "Parties to a Crime / Accomplice & Conspiracy",
        fp: "A student and the defendant were college students who needed money. One night, the student suggested that they hold up a local convenience store. When the defendant told her that she was afraid to get involved in a robbery, the student offered to go into the store alone if the defendant would wait outside in the car with the engine running so that they could make a getaway after the robbery. The defendant agreed on the condition that they split the take. The following day, they went together to a sporting goods store, where the student purchased a shotgun. That night, the defendant drove the student to the convenience store and waited in the parking lot with the engine running. The student went into the store with the shotgun hidden in a paper bag. Once inside, she pointed it at the store clerk and made him give her the contents of the cash register. Then she ran out to the car. When the defendant saw the student running toward the car, she became frightened and drove away without waiting for the student.",
        q: "What is the defendant is guilty of?",
        opts: [
            "Conspiracy only.",
            "Robbery only.",
            "Conspiracy and robbery.",
            "Either conspiracy or robbery, but not both."
        ],
        ans: 2,
        exp: "One who intentionally aids or facilitates the commission of a crime is guilty of the crime as an accessory[cite: 32]. Although the defendant did not point a gun and demand money, she aided and abetted the student by operating the getaway car, making her guilty as an accessory to robbery[cite: 32]. She and the student also committed the separate crime of conspiracy when they agreed on the commission of the robbery, and conspiracy does not merge with the substantive crime[cite: 32]."
    },
    // FACT PATTERN 21 (Q21)
    {
        id: 21,
        topic: "Homicide / Murder (Mens Rea)",
        fp: "In which of the following fact situations is the defendant LEAST likely to be properly convicted of murder?",
        q: "In which of the following fact situations is the defendant LEAST likely to be properly convicted of murder?",
        opts: [
            "The defendant came home to find his wife lying on the floor of their apartment semi-conscious and severely bruised. When he asked her what happened, she said that their neighbor had raped and beaten her. The following morning, the defendant hid behind some bushes waiting for the neighbor to leave his home. When the neighbor stepped out of his door, the defendant, intending to kill him, shot him, causing his death.",
            "A state law required every motor vehicle registered within the state to be covered by a valid policy of liability insurance. The defendant was operating a vehicle for which no liability insurance policy had been issued when he struck a pedestrian, who later died of the resulting injuries.",
            "The defendant placed a small quantity of ant poison in a cup of coffee that he was serving to a date. He did not intend to cause any serious injury, but he hoped that the poison would make her slightly ill so that he could induce her to spend the night in his apartment rather than to go home. His date drank the coffee and died as a result.",
            "The defendant's daughter was suffering from a lingering, incurable, fatal disease. One day, while the defendant was visiting her in the hospital, she screamed and writhed in pain. Wanting to end her suffering, the defendant placed a pillow over her face and held it there until she died of suffocation."
        ],
        ans: 1,
        exp: "A defendant is guilty of murder when he or she proximately causes the death of another human being unlawfully and with malice aforethought[cite: 32]. Since there are no facts indicating that the defendant in (B) intended to kill or cause harm, was escaping from lawful custody, or engaged in conduct demonstrating a reckless disregard for human life, and violation of the insurance statute is not an inherently dangerous felony, the defendant could not be convicted of murder[cite: 32]."
    },
    // FACT PATTERN 22 (Q22)
    {
        id: 22,
        topic: "Inchoate Crimes / Legal Impossibility",
        fp: "A rare migratory bird is protected by international treaty. For this reason, hunting of the bird is restricted to seasons fixed by a law known as the Protection Act. Until recently, the Act permitted hunting of the bird only during the months of March and April. The law was changed last year, however, to permit bird hunting during the additional months of May and June.\n\nThe defendant did not know that the law fixing the hunting season had been changed. Because he did not like to compete with other hunters, he planned to go bird hunting in May, believing that the season ended in March. He invited his friend to join him, but the friend refused. The friend, who was also unaware that the law had been changed, informed a game warden about his conversation with the defendant. The defendant went bird hunting on May 15. He shot at several birds and missed before he succeeded in killing one of them. As soon as he did, the game warden arrested the defendant.",
        q: "If the defendant is charged with attempting to violate the Protection Act, which of the following would be his most effective argument in defense?",
        opts: [
            "He actually succeeded in killing a bird prior to his arrest.",
            "The act that he intended to commit was not a crime.",
            "The friend was in pari delicto with the defendant because he was unaware that the law had been changed.",
            "The attempted crime merged with the completed act."
        ],
        ans: 1,
        exp: "A person is guilty of a criminal attempt when, with the specific intent to bring about a criminally prohibited result, he or she performs some act that comes substantially close to achieving that result[cite: 32]. Many jurisdictions hold that if the result that the defendant specifically intended to bring about was not a crime, the defendant cannot be guilty of a criminal attempt[cite: 32]. This is known as the doctrine of legal impossibility[cite: 32]."
    },
    // FACT PATTERN 23 (Q23)
    {
        id: 23,
        topic: "Homicide / Felony Murder (Flight)",
        fp: "A man tried to rob a convenience store. The man entered, pointed a gun at the clerk, and told the clerk to hand over the money. The clerk screamed and jumped into a walk-in safe, pulling the door closed behind him and locking it. The man panicked, fled to his car, and drove off without taking anything. As he sped down the street at 10 miles per hour over the posted speed, the man cut off a school bus that then crashed into a car that was illegally parked on the road. The bus driver died in the crash. Driving 10 miles per hour over the posted speed limit was a misdemeanor.",
        q: "Which is the most serious crime of which the man can be convicted?",
        opts: [
            "Felony murder, because the bus driver's death occurred during the commission of a felony.",
            "Involuntary manslaughter, because the bus driver's death was accidental.",
            "Misdemeanor manslaughter, because the man's misdemeanor violation caused the bus driver's death.",
            "No crime, because the man did not complete the robbery and the bus driver's death was due to the illegally parked car."
        ],
        ans: 0,
        exp: "If a death occurs during a felony or attempted felony, the defendant is guilty of felony murder[cite: 32]. Importantly, the felony does not end until the defendant reaches a place of safety[cite: 32]. Here, the man committed attempted robbery at the store, a felony, and the death occurred while the man was still fleeing, so the felony was not over yet[cite: 32]."
    },
    // FACT PATTERN 24 (Q24)
    {
        id: 24,
        topic: "Property Crimes / Arson",
        fp: "The defendant was invited to a party at the home of the homeowner. Because he wanted to help make the party a success, the defendant purchased fireworks and brought them to the party. A state statute requires that any person engaging in the use of fireworks have a license and provides that the license may be issued only upon successful completion of a safety course conducted by the fire department. Although the defendant had never completed the safety course and had no license to engage in the use of fireworks, he believed that he was competent to do so without causing any danger. During the party, the defendant set off some of the fireworks in the homeowner's backyard with the homeowner's consent. Although the defendant acted reasonably, one of them exploded prematurely, causing a fire that completely destroyed the homeowner's home.",
        q: "Is the defendant guilty of arson?",
        opts: [
            "Yes, because he violated the statute requiring a license for the use of fireworks.",
            "Yes, because the fire resulted from his conduct.",
            "No, because the homeowner consented to the defendant's use of the fireworks.",
            "No, because the defendant did not intend damage to the homeowner's home."
        ],
        ans: 3,
        exp: "Arson is the intentional or reckless burning of the dwelling of another[cite: 32]. Although the defendant caused the burning of the homeowner's dwelling, he did not do so intentionally since he believed that there would be no damage, and the facts indicate his conduct was reasonable[cite: 32]. A statutory violation alone is not sufficient to satisfy the mens rea requirement for arson[cite: 32]."
    },
    // FACT PATTERN 25 (Q25)
    {
        id: 25,
        topic: "Homicide / Murder (Depraved Heart)",
        fp: "Because he was convicted of driving while intoxicated, the defendant's driver's license was suspended. One day, he made a series of repairs to the engine of his car. That night, after coming home from a party, the defendant decided to test his car by driving it on a quiet residential street on the outskirts of town. Traveling north toward an intersection, he accelerated until he was driving at a speed of 100 miles per hour. The victim, who was driving west, proceeded across the intersection in violation of a red traffic signal light. The defendant saw the victim's car, but because of the speed at which the defendant was traveling, was unable to avoid striking it. The victim was killed in the collision. A statute in the jurisdiction provides as follows: 'No person shall operate a motor vehicle on any public road or highway in this state unless such person shall be the holder of a valid driving license. Violation of this section shall be punishable by a maximum of 30 days in the county jail.'",
        q: "If the defendant is convicted of the murder of the victim, what is the most likely reason for the conviction?",
        opts: [
            "Driving while intoxicated is evidence of culpable negligence.",
            "His speed was evidence of a wanton disregard for human life.",
            "The jurisdiction applies the misdemeanor-manslaughter rule.",
            "The victim's death resulted from the defendant's unlicensed operation of a motor vehicle."
        ],
        ans: 1,
        exp: "Murder is a killing with malice aforethought[cite: 32]. Malice aforethought includes wanton disregard for human life, which means acting in deliberate disregard of the plain and strong likelihood that death or great bodily harm would result[cite: 32]. Operating a motor vehicle at a speed of 100 miles per hour might be found to constitute wanton disregard for human life, making it the only reason listed that could result in a conviction for murder[cite: 32]. (Misdemeanor manslaughter cannot lead to a murder conviction)."
    }
];
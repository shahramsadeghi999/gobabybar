const examData = [
    // SOURCE: FINZ-CriminalLaw.pdf, Question 109
    {
        id: 1,
        topic: "Inchoate Crimes / Conspiracy & Co-Conspirator Murder",
        fp: "Two boys decided to kill another boy that they did not like. To do so, they planned to steal the victim's asthma medication. As the two boys were walking toward the victim's room, one of the boys decided not to go through with the plan. Because he was afraid that the other boy would make fun of him for chickening out, he said nothing to him about his change of mind. Instead, saying that he needed to use the bathroom, he ran away. The other boy then went into the victim's room by himself, found the medicine, and threw the medicine away. Later that night, the victim had an asthma attack and died because he was unable to find his medicine.\n\nA statute in the jurisdiction provides that persons the age of the two boys are adults for the purposes of criminal liability.",
        q: "If the boy who ran away is charged with the murder of the victim, will the court find him guilty?",
        opts: [
            "Yes, because he and the other boy agreed to throw away the victim's medicine in the hope that doing so would cause the victim's death.",
            "Yes, because he aided and abetted in causing the victim's death.",
            "No, because he did not physically participate in throwing away the victim's medicine.",
            "No, because he withdrew from the conspiracy before any overt act was committed."
        ],
        ans: 0,
        exp: "Murder is the unjustified killing of a human being with malice aforethought[cite: 29]. Malice aforethought includes the intent to kill, which means the desire or knowledge that the defendant's act will bring about the death of another person[cite: 29]. Since the other boy threw away the victim's medicine with the desire that doing so would bring about the death of the victim, and since the victim died as a result, the victim was murdered[cite: 29]. A criminal conspiracy is an agreement to commit a crime[cite: 29]. Since the two boys agreed to kill the victim, they were involved in a criminal conspiracy[cite: 29]. Co-conspirators are vicariously liable for any crimes committed in furtherance of the conspiracy[cite: 29]. Since the murder of the victim was committed by the other boy in furtherance of his agreement with the boy who ran away, the boy who ran away is vicariously liable for it[cite: 29]. A is therefore correct[cite: 29].\n\nSince the boy who ran away did no physical act that enabled the other boy to bring about the victim's death, he did not aid or abet him in bringing it about[cite: 29]. B is therefore incorrect[cite: 29]. C is incorrect because the principle of vicarious liability as explained above makes it unnecessary for the boy who ran away to physically participate in the commission of the crime with which he is charged[cite: 29]. One who effectively withdraws from a conspiracy before its goal is accomplished may avoid vicarious guilt for the substantive crime, although not for the crime of conspiracy[cite: 29]. For a withdrawal to be effective, however, the withdrawing conspirator must at least do something that places his or her co-conspirator on notice of his or her withdrawal[cite: 29]. Since the boy who ran away did not do so, he has not effectively withdrawn from the conspiracy, and D is incorrect[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 110
    {
        id: 2,
        topic: "Homicide / Felony Murder (Flight)",
        fp: "A man had just been released from prison after serving a three-year term for aggravated assault. In need of money, he called his old friend, the defendant, and asked whether the defendant would be interested in joining the man in the robbery of a pawnshop. The defendant agreed, but only after making the man promise that there would be no violence. Upon the defendant's insistence, they carried realistic-looking toy guns. When they entered the pawnshop, they drew their toy guns and ordered the pawnshop owner to give them all the money in his cash register and all the gems in his safe. The pawnshop owner took a gun from the safe and shot the man, killing him. The pawnshop owner then aimed the pistol at the defendant, who fled from the store. As the pawnshop owner ran out into the street with his pistol in his hand, the defendant jumped into the car that he and the man had left parked at the curb. Speeding away from the scene without looking or caring where he was going, the defendant accidentally struck a pedestrian, who died of her injuries. By statute, the jurisdiction adopted the felony-murder rule.",
        q: "If the defendant is charged with the murder of the pedestrian, should the court find him guilty?",
        opts: [
            "Yes, because the pedestrian's death resulted from the defendant's attempt to commit a robbery.",
            "Yes, because he drove the car in a criminally negligent manner.",
            "No, because he was in reasonable fear for his own life when attempting to flee in the automobile.",
            "No, because the pedestrian's death did not occur during the commission of a felony."
        ],
        ans: 0,
        exp: "The felony-murder rule provides that the intent to commit a felony is malice aforethought, and that a death that results from the perpetration of a felony is therefore murder[cite: 29]. For this purpose, the perpetration of a felony continues during the defendant's attempt to escape to a place of seeming safety[cite: 29]. The pedestrian's death thus occurred during the perpetration of a robbery, and the defendant could be convicted of murder even if he was driving carefully at the time it occurred[cite: 29].\n\nB, C, and D are therefore incorrect[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 111
    {
        id: 3,
        topic: "Homicide / Omissions & Duty to Rescue",
        fp: "A nine-year-old girl fell into a public pool, striking her head against its edge. Her aunt saw the girl fall and realized that the child would drown if someone did not rescue her. The aunt knew that there was no lifeguard present, and that no one else had seen the girl fall, but she made no effort to rescue the girl although the aunt was a strong swimmer and could easily have done so with no risk to herself. The girl drowned.",
        q: "If the aunt is charged with criminal homicide in the death of the girl, should the court find her guilty?",
        opts: [
            "Yes, because she could have saved the girl without any risk to herself.",
            "Yes, because she knew that she was the only person present who was aware of the girl's plight and who was able to rescue her.",
            "Yes, because she was related to the girl.",
            "No, because she had no duty to aid the girl."
        ],
        ans: 3,
        exp: "In the absence of special circumstances, no person is under a legal duty to render aid to another[cite: 29]. Since a failure to act can lead to criminal responsibility only in the face of a duty to act, the adult's failure to rescue the girl was not a crime[cite: 29].\n\nThis is true even though she could have saved the girl without risk to herself, even though she knew that there was no one else who could rescue the child, and even if she was related to the girl[cite: 29]. A, B, and C are therefore incorrect[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 113
    {
        id: 4,
        topic: "Property Crimes / Larceny (Intent to Permanently Deprive)",
        fp: "The defendant noticed a gold-plated pen on her professor's desk and put it into her pocket. She did so with the intention of returning the pen in a week or two. The following day, however, the pen was stolen from the defendant's briefcase.\n\nThe jurisdiction applies the common law definitions of larceny and burglary.",
        q: "If the defendant is charged with larceny as a result of her taking the gold-plated pen, should she be convicted?",
        opts: [
            "No, because theft of the pen from her briefcase was a superseding cause.",
            "No, because she intended to return the pen in a week or two.",
            "Yes, because the professor was permanently deprived of the pen.",
            "Yes, because theft of the pen from her briefcase was foreseeable."
        ],
        ans: 1,
        exp: "At common law, larceny is defined as intentionally taking and carrying off the personal property of another with the intent to permanently deprive the owner of it[cite: 29]. Since the defendant planned to return the pen to the professor in a week or two, she lacked the intent to permanently deprive him of it[cite: 29].\n\nA is incorrect because if she had the requisite intent at the time she took the pen, the fact that it was later taken from her would not undo the crime that she had already committed[cite: 29]. C is incorrect because the defendant lacked the requisite intent[cite: 29]. There are no facts justifying the inference on which D is based, but even if there were, the defendant's taking would not be a larceny unless she intended (i.e., was substantially certain) that the professor would be permanently deprived of the pen[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 114
    {
        id: 5,
        topic: "Property Crimes / Robbery (Retention by Force)",
        fp: "Between flights, a woman set her briefcase down beside her seat in the airport waiting room. The defendant saw this and walked past her in a casual fashion, picking up the briefcase and walking off with it as he went by. The woman, believing that he had taken it by mistake, ran to him and said, 'Pardon me, sir. You've taken my bag.' The defendant drew a realistic-looking toy pistol, pushed her into a seat, and ran away. The defendant was charged with robbery.",
        q: "Which of the cases below is most applicable as a precedent to this case?",
        opts: [
            "The victim was walking on a crowded street with her purse hanging from a strap over her shoulder when the defendant yanked the purse with sufficient force to break the strap. The defendant then ran off with it into the crowd. The defendant's conviction for robbery was reversed.",
            "The defendant took a package of meat from a showcase in a supermarket and slipped it under his shirt. He left the store without paying for it. The store cashier ran after him into the parking lot and stepped in front of him, blocking his path. The defendant took a straight razor from his pocket and grabbed another customer. He held the razor to the customer's throat, telling the store cashier to get out of the way. The cashier stepped aside, and the defendant ran away, releasing the other customer. The defendant's conviction for robbery was affirmed.",
            "A schoolteacher took her sixth-grade class to visit a display of medieval torture devices at the museum. She sat in a wooden torture chair and had herself shackled into it to demonstrate its operation to her students. The defendant, who worked at the museum, surreptitiously photographed her with an instant camera. He then went to the office of the teacher's husband and showed the husband the photograph of the teacher in the torture chair. The defendant said that his confederates would torture her unless he called them on the phone and told them that the husband had given him $500. The husband gave him the money. The defendant's conviction for robbery was reversed.",
            "When the victim purchased a ticket at the airport for his flight, he checked his baggage. Later, the defendant, wearing a mask and carrying a gun, entered the room where checked baggage was stored. While forcing the room attendant to lie face down on the floor, the defendant opened the victim's suitcase and removed several hundred dollars' worth of negotiable securities. The defendant's conviction for robbery was affirmed."
        ],
        ans: 1,
        exp: "Robbery is larceny accomplished by physical force or threat[cite: 29]. The defendant clearly committed a larceny[cite: 29]. Although he acquired possession and carried off the briefcase without the use of force, the issue is whether his subsequent use of force to retain possession was sufficient to make him guilty of robbery[cite: 29]. B is the only case in which this issue arose[cite: 29].\n\nIn A, no force was used after acquisition of the purse[cite: 29]. In C and D, although force was used to acquire the stolen property, none was used thereafter[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 115
    {
        id: 6,
        topic: "Property Crimes / Accomplice to Larceny vs Extortion",
        fp: "A supermarket cashier borrowed money from the company safe to get through the weekend, then returned it on Monday morning after she was paid. One of her coworkers saw her returning the money and questioned her about it until the cashier admitted what she had done. The coworker stopped her before she closed the safe and said that unless the cashier gave him $25 of the store's money, he would tell the boss. The cashier knew that she could get away with taking $25 because the store records were frequently off by that much and the boss never worried about it. Thus, she took out $25 from the safe and gave it to the coworker.",
        q: "Of which one of the following crimes is the coworker most likely to be guilty as a result of his conduct on Monday morning?",
        opts: [
            "Robbery, because he obtained money from the cashier by threat and intimidation.",
            "Larceny, because he obtained money by inciting and encouraging the cashier to steal $25 from the safe.",
            "Embezzlement, because he obtained his employer's money by violating his duty to report the cashier's conduct.",
            "Fraud, because he obtained money by withholding information that he had a duty to disclose."
        ],
        ans: 1,
        exp: "One who incites and encourages another to commit a crime may be guilty as an accomplice or accessory, especially when he or she derives some direct benefit from the crime[cite: 29]. Since the coworker demanded $25 to cover up the cashier's crime while they were standing in front of the open safe and then watched as the cashier reached into the safe and handed it to him, he can be found guilty as an accessory to larceny[cite: 29].\n\nRobbery is larceny committed by force or threat of force[cite: 29]. A is incorrect because the threat that the coworker made was not of force[cite: 29]. Embezzlement is the fraudulent taking of property that is lawfully in the defendant's possession[cite: 29]. Since the $25 that the coworker took from the cashier was not lawfully in the coworker's possession to begin with, he did not embezzle it[cite: 29]. C is therefore incorrect[cite: 29]. Crimes characterized by the term 'fraud' involve takings that are committed by making misrepresentations that induce the owner to willingly part with possession or title[cite: 29]. D is incorrect because the owner of the supermarket was not induced to part with the money by reliance on a misrepresentation[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 116
    {
        id: 7,
        topic: "General Principles / Vicarious Liability",
        fp: "A statute provides as follows: 'Any person who knowingly sells an intoxicating substance to a person under the age of 21 years shall be guilty of a misdemeanor.' The owner of a cocktail lounge hired a new bartender. Before the bartender began working, the owner read him the above statute and explained the need for him to check the identification of all persons who appeared to be under the age of 21 years. She also told him that if she ever heard of his violating the statute, she would fire him immediately. Later that night, a 17-year-old teenager who looked like he was 25 ordered a glass of wine. The teenager showed the bartender an altered driver's license that falsely stated his age to be 22. The bartender was not sure whether the phrase intoxicating substance in the statute included wine, and he served it to the teenager. An undercover police officer who was at the bar observed the transaction. He then showed his badge, demanding to see the teenager's identification. Recognizing the driver's license as a forgery, he arrested the bartender.",
        q: "The owner is charged with violating the statute, and the prosecutor asserts that she should be held vicariously liable for the bartender's act. Which of the following would be the owner's most effective argument in defense?",
        opts: [
            "The owner did not have personal knowledge of the sale to the teenager.",
            "The owner cautioned the bartender against violation of the statute.",
            "The bartender is not guilty of violating the statute.",
            "The bartender was not acting within the scope of his employment when he sold wine to a minor in violation of the statute."
        ],
        ans: 2,
        exp: "Vicarious liability refers to responsibility that is imposed on one person for a crime committed by another[cite: 29]. If the bartender was not guilty of violating the statute, there has been no crime for which the owner can be held vicariously liable[cite: 29]. Although it is not certain that this argument will succeed, it is the only one listed that could possibly support the owner's defense[cite: 29].\n\nA is incorrect because when vicarious liability is imposed, the fault (or lack of fault) of the person on whom it is imposed is irrelevant[cite: 29]. B is similarly incorrect because vicarious liability may be imposed for the crime committed by an agent even though the agent violated specific instructions in committing it[cite: 29]. D is incorrect because a bartender selling drinks to a bar customer is acting in the scope of employment, since his or her conduct is designed to benefit his or her employer and since he or she is subject to the employer's right of control while doing so[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 117
    {
        id: 8,
        topic: "Homicide / Depraved Heart Murder (Hunting in Suburbs)",
        fp: "The defendant was an avid deer hunter. His favorite place to hunt was a small cemetery in the middle of a densely populated suburban neighborhood. Because the neighborhood had grown so quickly within the past decade, deer were forced to congregate in a few wooded patches in the cemetery, making the likelihood of seeing a deer extremely high. One morning when the defendant was in the cemetery, he saw a deer standing near the cemetery gates about 80 yards away. The defendant shot at the deer. The bullet missed and went through the front window of a nearby house, killing the victim.",
        q: "What is the most serious crime for which the defendant can be convicted?",
        opts: [
            "Battery.",
            "Involuntary manslaughter.",
            "Voluntary manslaughter.",
            "Murder."
        ],
        ans: 3,
        exp: "In nearly all states, the defendant is liable for murder if he or she causes a death while acting with a 'depraved heart' or an extreme indifference to the value of human life[cite: 29]. For depraved heart murder, the risk of death or serious bodily injury has to be so great that the defendant can be said to act with great recklessness[cite: 29]. Importantly, negligence or even gross negligence won't suffice[cite: 29]. Here, hunting deer in a 'densely populated suburban neighborhood' is likely so reckless as to reach the level required for depraved heart murder[cite: 29].\n\nA, B, and C are therefore incorrect[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 118
    {
        id: 9,
        topic: "Crimes against Person / Kidnapping (Incidental Movement)",
        fp: "In the course of robbing a bank, the defendant pointed a gun at three bank tellers and the bank manager and ordered them to go from the bank lobby to the back room while his confederate attempted to open the safe.",
        q: "If the defendant is charged with kidnapping the bank manager, what is his most effective argument in defense?",
        opts: [
            "He did not demand a ransom.",
            "He released the bank manager as soon as the robbery was completed.",
            "Ordering the bank manager to go from the bank lobby to the back room was incidental and necessary to the commission of the robbery.",
            "The bank manager was an adult."
        ],
        ans: 2,
        exp: "Kidnapping is the intentional asportation and confinement of a person against the person's will by means of force or threat and without lawful authority[cite: 29]. Although it is obvious that the defendant intentionally confined the bank manager against his will by means of force and threat and without lawful authority, there is some question as to whether there was an asportation[cite: 29]. Ordinarily, any moving of the victim satisfies the requirement of asportation[cite: 29]. Many jurisdictions now hold, however, that there is no asportation if the movement of the victim was incidental to and a necessary part of the commission of some other substantive crime[cite: 29]. Although it is not certain that a court would accept that view, the argument in C is the only one listed that could possibly support the defendant's defense[cite: 29].\n\nIn some jurisdictions, a ransom demand makes the defendant guilty of a more serious degree of the crime, but no jurisdiction requires a ransom demand as an essential element of kidnapping[cite: 29]. A is therefore incorrect[cite: 29]. B is incorrect because, once committed, a crime cannot be uncommitted[cite: 29]. D is incorrect because the crime of kidnapping can be committed against an adult as well as a child[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 120
    {
        id: 10,
        topic: "Parties to a Crime / Accomplice (Mere Presence)",
        fp: "Because they were bigots, two men were angry when a Chinese family moved into a house on their street. Deciding to drive them away and to set an example that would discourage other Chinese people from moving into the neighborhood, they agreed to set fire to the family's home. They went to the house, and one of the men started pouring gasoline around it. A crowd of onlookers began to gather. The defendant, one of the onlookers, hoped that the men would burn down the house but said nothing. After the first man finished pouring the gasoline, the second man lit a match and set it afire, burning the house to the ground.",
        q: "On a charge of arson, is the defendant guilty?",
        opts: [
            "Yes, because she made no attempt to stop the crime from being committed.",
            "Yes, because her hope that the men would burn the house down amounted to criminal intent.",
            "No, because mere presence coupled with silent approval is not sufficient to result in liability as an accessory.",
            "No, because she was, at most, an accessory after the fact."
        ],
        ans: 2,
        exp: "Unless a defendant was ready, willing, and able to give affirmative assistance in the commission of the crime, his or her presence and silent acquiescence are not sufficient to result in criminal liability[cite: 29].\n\nOrdinarily, one is not under any obligation to attempt to prevent a crime from being committed[cite: 29]. A is therefore incorrect[cite: 29]. B is incorrect because, even with criminal intent, mere presence at the scene of a crime is not sufficient to satisfy the requirement of actus reus[cite: 29]. The defendant was not an accessory at all since her presence was not sufficient participation, but in any event, she could not have been an accessory after the fact since the crime was committed after her involvement began[cite: 29]. D is therefore incorrect[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 122
    {
        id: 11,
        topic: "Property Crimes / Robbery (Threat Against Person vs Property)",
        fp: "A woman was a collector of antique automobiles. One day, she took her infant daughter for a ride in one of the most valuable cars in her collection. On her way, she stopped to buy a newspaper. Because her daughter had fallen asleep in the backseat, the collector left her in the car when she got out. The defendant, a professional car thief who happened to be at the newspaper stand, jumped into the collector's car and drove it away without noticing the daughter in the backseat.\n\nThe defendant realized that he would not be able to sell a stolen car as unusual as this one, so he parked it in a friend's garage, still unaware of the presence of the sleeping child. Getting the collector's name and phone number from some papers in the glove compartment of the car, the defendant phoned her and left a message on her telephone answering machine, telling her that if she did not immediately bring $1,000 in cash to a certain location, he would set the car on fire.\n\nWhen the collector realized that her car, with her daughter in the backseat, was gone, she became frantic and rushed home. When she picked up her phone to call the police, her answering machine played the defendant's message. Upon hearing it, the collector brought $1,000 to the location specified. The defendant, who was waiting for her, took the money and returned the car. The daughter was still sleeping quietly in the backseat.",
        q: "Which of the following additional facts or inferences, if it were the only one true, would be most likely to lead to a conviction of the defendant on a charge of robbery of $1,000 from the collector?",
        opts: [
            "The car was in the collector's possession when the defendant took it.",
            "The collector paid the money to prevent injury to her daughter.",
            "The collector paid the money to prevent damage to her automobile.",
            "By the time the collector showed up with the money, the defendant had discovered the daughter sleeping in the backseat."
        ],
        ans: 3,
        exp: "Robbery is a larceny that is committed by force or threat to use force against the lawful possessor of the property taken or any other person[cite: 29]. If the collector gave the defendant $1,000 because he knowingly threatened to injure the daughter if she did not, his taking of the money was robbery[cite: 29]. Although he did not know that the daughter was in the car when he first made the threat, it could be found that the threat was continued by his conduct[cite: 29]. Thus, if he knew that the daughter was in the car when he received the money from the collector, it might be concluded that he obtained the money by a threat to burn the daughter, not just the car[cite: 29].\n\nA is incorrect for two reasons: First, he did not take the car by force, and second, he is charged with robbery of the cash, not of the car[cite: 29]. B would not make him guilty of robbery unless he knew that the daughter was in the car when he threatened to burn it[cite: 29]. C is incorrect since in most jurisdictions, robbery requires that the threat be directed against a person[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 124
    {
        id: 12,
        topic: "Homicide / Involuntary Manslaughter (Drunk Driving)",
        fp: "The defendant placed a large wager on a football game that he had to win or he was going to have his home foreclosed on. He decided to watch it at a local bar. During the very close game, the defendant was so nervous that he drank several beers and became drunk. At the last minute, the team he bet on scored a touchdown and won the game. The defendant cheered. He then noticed two big men sitting at the other end of the bar who worked for the bookie he had placed the bet with. Fearing the men were going to hurt him because of his win, the defendant got in his car and drove home. A police officer saw him driving erratically and tried to pull him over. A reasonable sober driver would have recognized the car as a police car, but the defendant thought it was the bookie's employees coming to kill him. The defendant made a quick turn onto a busy side street. A pedestrian was crossing the street with his headphones on and without looking. The defendant hit him with the car, and the pedestrian died immediately. The defendant was charged with involuntary manslaughter.",
        q: "Should the defendant be found guilty?",
        opts: [
            "No, because the pedestrian was contributorily negligent in crossing the busy street without looking and with his headphones on.",
            "No, because the defendant did not intend to cause the pedestrian's death.",
            "No, because the defendant genuinely believed he was fleeing for his life.",
            "Yes."
        ],
        ans: 3,
        exp: "A defendant may be liable for involuntary manslaughter if his or her conduct results in the accidental death of another person[cite: 29]. Involuntary manslaughter is particularly applicable to cases where the defendant causes a drunk-driving accident that kills someone[cite: 29]. As long as the intoxication was a significant contributing factor to the accident, the defendant is almost certainly guilty of involuntary manslaughter[cite: 29]. Importantly, most states require only a mental state of gross negligence, and driving while drunk constitutes recklessness (a higher mental state than gross negligence)[cite: 29]. Additionally, in a jurisdiction applying the misdemeanor-manslaughter rule, drunk driving will at least be a misdemeanor[cite: 29]. Here, since defendant's drunk driving constituted recklessness and his intoxication proximately caused the crime by leading to his mistaken belief that he was being chased, the defendant is guilty of involuntary manslaughter[cite: 29]. The fact that the victim may have been contributorily negligent is not a defense to involuntary manslaughter[cite: 29]. A is therefore incorrect[cite: 29]. B is incorrect because involuntary manslaughter does not require the defendant to intend to cause the death of the victim[cite: 29]. C is incorrect because his belief that he was being chased would not provide a defense for the defendant[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 125
    {
        id: 13,
        topic: "Homicide / Felony Murder (Redline Rule)",
        fp: "The defendant and his friend decided to rob a woman at an ATM. When the woman withdrew her money, the defendant hit her with a brick and his friend grabbed her purse. As the two men were fleeing the scene, a police officer yelled for them to stop. When they did not do so, he shot them both. The defendant's friend later died from his injuries.",
        q: "If the defendant is put on trial for felony murder, how should the court rule?",
        opts: [
            "Guilty, because his friend died during the commission of a felony.",
            "Guilty, because his friend died during the commission of a dangerous felony.",
            "Not guilty, because his friend was killed by a police officer.",
            "Not guilty, because the felony was completed when his friend was shot."
        ],
        ans: 2,
        exp: "Felony murder is a foreseeable killing that occurs during the course of a felony[cite: 29]. In the majority of states, a person cannot be found guilty of felony murder for the death of a co-felon if that co-felon is killed by the police[cite: 29]. Here, since the defendant's friend was shot by a police officer, it is unlikely he would be found guilty of felony murder[cite: 29]. Therefore, A and B are incorrect[cite: 29].\n\nD is incorrect because a death that occurs while fleeing the scene still meets the requirements of felony murder, whether or not the felony itself is technically completed[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 126
    {
        id: 14,
        topic: "Crimes against Person / Battery & Attempt Limits",
        fp: "The defendant, who was a law student, was attempting to study for her final examinations. She was having difficulty concentrating because the people in the apartment above hers were having a loud party, and the defendant found the noise distracting. She telephoned, asking her neighbors to stop making so much noise, but they refused to do so. Finally, the defendant fired a pistol through the ceiling of her apartment. She did not intend to hit anyone with the bullet but hoped that the shot would frighten her neighbors and chill the atmosphere. After passing through the floor of the apartment above the defendant's, the bullet struck a piece of furniture and ricocheted. It struck the victim, lodging in his shoulder and injuring him.",
        q: "Which of the following is the most serious crime of which the defendant may be properly convicted?",
        opts: [
            "Battery.",
            "Attempted involuntary manslaughter.",
            "Attempted voluntary manslaughter.",
            "Attempted murder."
        ],
        ans: 0,
        exp: "Criminal battery consists of the intentional, reckless, or criminally negligent application of force to the body of another[cite: 29]. The defendant's act of shooting through the ceiling into an apartment in which she knew there were people probably was at least criminally negligent, and so it probably constituted a battery[cite: 29].\n\nA person is guilty of attempting to commit a crime when, with the specific intent to bring about a criminally proscribed result, he or she comes substantially close to accomplishing that result[cite: 29]. Since involuntary manslaughter is an unintended homicide, no person can have the specific intent to commit it[cite: 29]. Thus, there can be no attempt to commit it, and B is therefore incorrect[cite: 29]. Attempted murder and attempted voluntary manslaughter both require an intent to kill[cite: 29]. Since the defendant did not intend to strike anyone with the bullet, C and D are incorrect[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 127
    {
        id: 15,
        topic: "Homicide / Involuntary Manslaughter (Unintended Result of Assault)",
        fp: "A man paid for a cup of coffee with a credit card and sat down at a table. As he was sitting, he reached into his pocket and realized his wallet was missing. He walked back to the counter and asked the barista if she had his wallet. She said she didn't, but the man didn't believe her. He raised his fist and said, 'If you don't give me my wallet back, I'm breaking your nose!' The barista, who had severe heart and anxiety conditions, had a heart attack and died from fright.",
        q: "What is the most serious crime the man should be found guilty of committing?",
        opts: [
            "Murder.",
            "Voluntary manslaughter.",
            "Involuntary manslaughter.",
            "Assault."
        ],
        ans: 2,
        exp: "Generally, when an intentional battery or assault results in an unintended death, the defendant is guilty of involuntary manslaughter[cite: 29]. Importantly, the man was only attempting to regain his wallet[cite: 29]. Since this would not count as a robbery, the man could not be convicted of felony murder[cite: 29].\n\nA is incorrect because the barista's death was not caused intentionally or as the result of a felony[cite: 29]. B is incorrect because voluntary manslaughter is a provoked intentional killing[cite: 29]. Here, the man did not intend to kill the barista[cite: 29]. D is incorrect because involuntary manslaughter is a more serious crime than assault[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 128
    {
        id: 16,
        topic: "Inchoate Crimes / Conspiracy & Arson Merger",
        fp: "Two men were members of a militant political group. As a protest against the use of harmful agricultural chemicals, they planned to burn down a factory that produced such chemicals. A few days later, they set off a bomb that burned the factory to the ground.\n\nThe jurisdiction has a statute that extends the common law definition of arson to buildings other than dwellings.",
        q: "Of which of the following crimes may the men be properly convicted?",
        opts: [
            "Arson only.",
            "Conspiracy only.",
            "Arson or conspiracy, but not both.",
            "Both arson and conspiracy."
        ],
        ans: 3,
        exp: "At common law, arson was defined as the intentional burning of another's dwelling[cite: 29]. Under the statute given, the definition includes buildings other than dwellings as well[cite: 29]. Since the men desired to burn down the factory, they had the necessary intent[cite: 29]. Since they succeeded in doing so, they are guilty of arson[cite: 29]. Conspiracy consists of an agreement to commit a crime[cite: 29]. Since the men agreed to commit arson, they are guilty of conspiracy[cite: 29]. Conspiracy does not merge with the substantive crime and may be the basis of separate prosecution and conviction[cite: 29]. D is therefore correct[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 129
    {
        id: 17,
        topic: "Property Crimes / Robbery (Claim of Right Defense)",
        fp: "The defendant's toolbox was stolen out of the back of his pickup truck. The next day, the defendant saw the victim walking down the street carrying what the defendant believed was his stolen toolbox. The defendant jumped out of his truck and grabbed the toolbox from the victim, yelling 'If you don't give the toolbox to me, I'm going to shoot you dead!' The victim gave the defendant the toolbox and the defendant drove away. At the next stop sign a block away, the defendant opened the toolbox and realized that the toolbox wasn't in fact his missing toolbox. A police officer who saw the defendant grab the victim's toolbox pulled up in his police car and immediately arrested the defendant.\n\nThe defendant is charged with robbery. At trial, the prosecution shows that because the victim's toolbox was much larger than the defendant's, the defendant was unreasonable in the belief that the toolbox was his stolen toolbox. However, the defendant shows that he honestly believed the toolbox was his.",
        q: "Should the defendant be found guilty?",
        opts: [
            "Yes, because the defendant's belief that the toolbox was his missing toolbox was unreasonable.",
            "Yes, because the defendant threatened to shoot the victim if he didn't give him the toolbox.",
            "No, because the defendant honestly believed the toolbox was his missing toolbox.",
            "No, because there was no indication that the defendant could carry out on his threat."
        ],
        ans: 2,
        exp: "Robbery is a larceny where the property is taken from the person or presence of the owner, and the taking is accomplished by force or threat[cite: 29]. Importantly, a larceny is the trespassory taking and carrying away of the personal property of another with intent to steal[cite: 29]. Consequently, if the defendant is reclaiming his or her own property, then the defendant is not committing robbery[cite: 29]. This is true even if the defendant honestly but unreasonably believes that what he or she is taking is his or her own property[cite: 29]. Here, the defendant has not committed larceny because he is taking back 'his' own property, not property of another[cite: 29].\n\nA, B, and D are therefore incorrect[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 130
    {
        id: 18,
        topic: "Property Crimes / Larceny (Asportation Requirement)",
        fp: "Four weeks after breaking her engagement with her boyfriend, the defendant was angry because her boyfriend still had not returned a stereo that he had borrowed from her. She went to his house one night to demand its immediate return. When she got there, the boyfriend was not at home and his door was unlocked. The defendant entered to look for her stereo but could not find it. While searching, she noticed that the boyfriend had a new couch. Thinking that the couch was worth as much as her stereo, she tore open one of its cushions and set it on fire before leaving. The fire destroyed the couch completely and charred the walls and ceiling of the room, although the house itself was not seriously damaged. The defendant was subsequently prosecuted.\n\nStatutes in the jurisdiction adopt the common law definitions of burglary, larceny, and arson.",
        q: "If the defendant is charged with larceny as a result of the destruction of the couch, which of the following would be her most effective defense against that charge?",
        opts: [
            "The boyfriend's door was unlocked when she entered.",
            "She believed the couch to be equal in value to her stereo.",
            "She did not physically move the couch.",
            "She did not intend to benefit from the destruction of the couch."
        ],
        ans: 2,
        exp: "Larceny is a trespassory taking and carrying off of personal property known to be another's with the intent to permanently deprive the owner[cite: 29]. Since the defendant did not physically move the couch, she may successfully argue that because there was no asportation (i.e., carrying off), there was no larceny[cite: 29].\n\nIt is sometimes argued that one who enters through an unlocked door committed no breaking and, therefore, is not guilty of burglary[cite: 29]. A is incorrect, however, because breaking is not an element of larceny[cite: 29]. If a defendant carried off personal property that actually was his or her own, he or she could not be guilty of larceny because he or she did not take the property of another[cite: 29]. If he or she mistakenly believed that it was his or her own, he or she still would not be guilty of larceny because he or she did not carry off property known to be another's[cite: 29]. The couch was not the defendant's, however, and she knew that it was not hers[cite: 29]. The fact that it was equal in value to her stereo would not, therefore, justify her taking or carrying it off[cite: 29]. B is therefore incorrect[cite: 29]. A person who takes and carries off personal property known to be another's with the intent to permanently deprive is guilty of larceny without regard to whether or not he or she intended to benefit by doing so[cite: 29]. D is therefore incorrect[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 131
    {
        id: 19,
        topic: "General Principles / Omissions (No Duty to Report)",
        fp: "A woman was walking from the parking lot into a mall when she saw a man walking inside with several handguns. The woman turned around and walked back to her car because she suspected the man might be planning to shoot people in the mall. On her way back to her car, she passed a police patrol car with two officers sitting inside but didn't say anything. When the woman got back home, she turned on the news and saw that the man she had seen had shot several people at the mall before being apprehended. Out of guilt, the woman went to the police station and confessed to what she had seen. The jurisdiction defined all crimes as they were defined at common law.",
        q: "What crime is the woman most likely guilty of committing?",
        opts: [
            "Murder.",
            "Voluntary manslaughter.",
            "Involuntary manslaughter.",
            "No crime."
        ],
        ans: 3,
        exp: "The woman did not commit any crime because she did not have a legal duty to warn anyone about the man walking into the mall, despite the fact she suspected he was about to commit a crime he did in fact commit[cite: 29].\n\nConsequently, A, B, and C are incorrect[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 132
    {
        id: 20,
        topic: "General Principles / Actus Reus (Voluntary Act Requirement)",
        fp: "A man was scared of heights. To cure him, his friend, a psychiatrist and experienced mountain climber, convinced him to go mountain climbing with her on Mount Smoke, the highest peak in the state. The mountain was known as a tough and dangerous climb. It was also known for the large amount of poisonous volcanic gases that escaped from vents at the top. These gases were known to cause problems with people's nervous systems. At the top of the mountain, the man and the woman stood on the edge of a cliff to take a selfie. As they were about to take the picture, a freak gust of wind blew a cloud of volcanic gas over them. The toxins in the gas caused both the man and the woman to lose voluntary control of their arms and legs. The woman punched the man, knocking him off the cliff to his death.",
        q: "Is the woman criminally liable for the man's death?",
        opts: [
            "Yes, because her punch was the proximate cause of his death.",
            "Yes, because she voluntarily put herself in contact with a gas known to cause nerve problems.",
            "No, because the wind gust was a freak occurrence and unforeseeable.",
            "No, because the gas made the woman lose control of her arms and legs."
        ],
        ans: 3,
        exp: "One of the elements of every crime is the actus reus, or the requirement that the defendant's conduct be a voluntary act[cite: 29]. If a defendant acts reflexively or while in a state of unconsciousness, his or her actions do not fulfill the actus reus requirement and he or she will not be held criminally liable[cite: 29]. Here, the toxic gas caused the woman to lose voluntary control of her arms or legs, and she had no control over them when she punched the man[cite: 29]. Consequently, she cannot be held criminally liable for his death[cite: 29].\n\nTherefore, A, B, and C are incorrect[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 133
    {
        id: 21,
        topic: "Inchoate Crimes / Conspiracy (Stake in the Venture)",
        fp: "The defendant and a bank robber had been in the same cell together while serving time in prison. Soon after their release, the bank robber asked the defendant to join him in robbing a bank. The defendant refused, stating that he did not want to go back to prison. The bank robber then said that he would rob the bank himself if the defendant would provide him with a place to hide afterward. The defendant agreed that the bank robber could hide in the defendant's apartment following the robbery in return for one-fourth of the proceeds of the robbery. The following day, the bank robber robbed the bank. One week later, the bank robber was arrested at the defendant's apartment.",
        q: "The defendant was charged with conspiracy to commit robbery. Should the court find the defendant guilty?",
        opts: [
            "No, because he did not agree to participate in the actual perpetration of the robbery.",
            "No, because the defendant's agreement to permit the bank robber to stay at his apartment following the robbery was not per se unlawful.",
            "Yes, because he was an accessory to the robbery.",
            "Yes, because he agreed to furnish the bank robber with a place to hide in return for a portion of the proceeds of the robbery."
        ],
        ans: 3,
        exp: "A conspiracy is an agreement by two or more persons to commit a crime[cite: 29]. Ordinarily, one who agrees to furnish services to another that the other will use in committing a crime is not guilty of conspiracy merely because he or she knows the purpose to which the services will be put[cite: 29]. Where, however, the supplier has a stake in the criminal enterprise, his or her agreement to furnish services may constitute a conspiracy to commit the crime[cite: 29]. Since the defendant knew that the bank robber would be using his apartment as a hideout following the robbery, and since the bank robber's promise to compensate the defendant by paying him a percentage of the loot gave the defendant a stake in the criminal enterprise, the defendant may be guilty of conspiracy[cite: 29].\n\nA is therefore incorrect[cite: 29]. B is incorrect for two reasons: First, the defendant's agreement probably was per se unlawful, since he knew that the bank robber would be hiding in his apartment to escape detection (i.e., that he would be harboring a felon), and second, the defendant had a personal stake in the bank robber's crime[cite: 29]. The crime of conspiracy to commit robbery is complete when the defendant agrees with another to commit the robbery, and is a separate crime from the robbery itself[cite: 29]. Thus, the fact that a defendant is guilty of robbery is not relevant to the issue of whether he or she conspired (i.e., agreed) to commit it[cite: 29]. For this reason, C is incorrect[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 134
    {
        id: 22,
        topic: "Homicide / Felony Murder (Arson)",
        fp: "A man and his friend decided to burn the friend's house down to get the insurance money. The friend told the man that he would be out of town that Friday, and that the man could burn the house down then. However, on the agreed-upon Friday, the friend got drunk at a local bar and passed out in his house. The man set fire to the house as planned and accidentally killed the friend.",
        q: "If the man is charged with murder, what should the result be?",
        opts: [
            "Guilty, because the man set the fire.",
            "Guilty, because the man committed insurance fraud.",
            "Not guilty, because the man reasonably believed the friend was out of town.",
            "Not guilty, because the man set the fire as part of a fraudulent scheme with the friend."
        ],
        ans: 0,
        exp: "Under the common law felony-murder rule, a person who kills another during the commission of a dangerous felony is guilty of murder[cite: 29]. Here, arson is a dangerous felony, and the friend died during its commission, so the man is guilty of murder[cite: 29].\n\nB is incorrect because insurance fraud is not a dangerous felony[cite: 29]. C and D are incorrect because they do not change the fact that the friend was killed during the man's commission of a dangerous felony[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 135
    {
        id: 23,
        topic: "Inchoate Crimes / Conspiracy (Bilateral Requirement)",
        fp: "A man asked his friend, a doctor, for help killing his wife. The doctor gave his friend a bottle of 'deadly poison pills,' and told his friend to give his wife two of them for 'certain death.' The pills were actually common muscle relaxants, and were widely available with a prescription. The doctor did not think the pills could kill anyone, although it would probably make his friend's wife go to sleep for a little while. He thought that if his friend gave the pills to his wife and believed he had killed her, he would regret his actions and change his mind. That night, the man slipped the pills into his wife's wine glass. His wife had a severe allergic reaction and almost died.",
        q: "The man was prosecuted for conspiracy to murder his wife. How should the court rule?",
        opts: [
            "Guilty, because he believed the pills were deadly poison.",
            "Guilty, because his wife almost died.",
            "Not guilty, because his wife did not die.",
            "Not guilty, because the doctor did not think the wife would die."
        ],
        ans: 3,
        exp: "Conspiracy occurs when two or more people with the specific intent to commit a crime agree to commit it[cite: 29]. Here, since the doctor did not think the wife would die, he did not really agree to commit murder[cite: 29]. Consequently, there was no conspiracy[cite: 29].\n\nA is incorrect because even if the man believed the pills were deadly poison, he'd still have to reach an agreement to commit a crime with someone else in order to be prosecuted for conspiracy[cite: 29]. Here, no one actually agreed to help him kill his wife[cite: 29]. B and C are incorrect because the crime of conspiracy is complete when the unlawful agreement is made[cite: 29]. The success or failure of the substantive crime the parties agree to do is irrelevant[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 138
    {
        id: 24,
        topic: "Homicide / Depraved Heart Murder (Dangerous Animals)",
        fp: "A woman kept several live tigers in cages in the back of her property in a suburban area. At night, she'd let the tigers out to roam free around her backyard. One of the tigers hopped the backyard's short fence and attacked a man walking by on the sidewalk. The man eventually died as a result of the attack.",
        q: "What is the most serious crime of which the woman can be convicted?",
        opts: [
            "Murder.",
            "Voluntary manslaughter.",
            "Involuntary manslaughter.",
            "No crime."
        ],
        ans: 0,
        exp: "A conviction for murder can be supported by extremely negligent conduct that a reasonable person would realize created an unjustifiable and high risk of death or serious bodily injury[cite: 29]. Here, the woman let tigers run around her suburban backyard[cite: 29]. This is probably enough to meet the standard[cite: 29].\n\nB is incorrect because there needs to be some adequate provocation[cite: 29]. Here, there wasn't any provocation at all[cite: 29]. C is incorrect because the woman's conduct rose to the level of extremely negligent conduct required for depraved heart murder[cite: 29]. As such, C is not the strongest answer even if the woman did not intend to kill anyone[cite: 29]. D is incorrect because the woman could be convicted of murder[cite: 29]."
    },
    // SOURCE: FINZ-CriminalLaw.pdf, Question 140
    {
        id: 25,
        topic: "Defenses / Self-Defense (Escalation by Adulterer)",
        fp: "A man suspected that his wife was having an affair with his best friend. One day, the man called his wife and said that he had a sudden work commitment and had to go out of town for a few days. The man waited a few hours, then went to his home to try and catch his wife and best friend in the act of adultery. The man snuck into his house, went to the bedroom, and discovered his wife and his best friend in bed together. The man screamed and smashed a lamp on the floor. He yelled for his best friend to get out. As the best friend was getting dressed, he pulled a gun out of his pants. The man grabbed a lamp shard from the floor and stabbed the best friend in his chest. The best friend died shortly thereafter.",
        q: "If the man is prosecuted for murder, what should the result be?",
        opts: [
            "The man should be acquitted because the stabbing was justified.",
            "The man should be acquitted because the stabbing was done in the heat of passion.",
            "The man should be convicted because heat of passion would not excuse the stabbing.",
            "The man should be convicted because the stabbing was the result of the man's plan to catch his wife and best friend committing adultery."
        ],
        ans: 0,
        exp: "Here, the best friend was the aggressor and pulled the gun on the man when the man didn't do anything but break a lamp and order the best friend to leave[cite: 29]. The man did not react with deadly force until the best friend pulled a gun on him[cite: 29]. Consequently, the man's actions were justified and he should be acquitted of murder[cite: 29].\n\nB and C are incorrect because the murder was the result of self-defense, not the heat of passion[cite: 29]. D is incorrect because the fact that the murder was the result of the man's plan to catch his best friend and wife does not change the analysis[cite: 29]."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = examData;
}
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
        exp: "Co-conspirators are vicariously liable for all crimes committed by fellow conspirators in furtherance of the conspiracy[cite: 32]. Because the boy who ran away never communicated his withdrawal to his co-conspirator, his attempted withdrawal was legally ineffective, leaving him fully liable for the resulting murder[cite: 32]."
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
        exp: "Under the felony murder rule, the perpetration of a felony continues throughout the immediate flight from the scene until the felon reaches a place of temporary safety[cite: 32]. Because the fatal collision occurred while fleeing from the robbery, the defendant is guilty of felony murder[cite: 32]."
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
        exp: "In the absence of a recognized legal duty (such as parent-child, contract, or creation of peril), an individual has no affirmative legal duty to rescue another[cite: 32]. An aunt does not have a formal common-law parental duty of care, meaning her omission cannot serve as the basis for a criminal homicide charge[cite: 32]."
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
        exp: "Larceny is a specific intent crime requiring the intent to permanently deprive the owner of property at the exact moment of the taking[cite: 32]. Because the defendant genuinely intended to return the pen in a week or two, she lacked the requisite felonious intent to steal[cite: 32]."
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
        exp: "Robbery requires a taking accomplished by force or fear[cite: 32]. In many jurisdictions, using force or threats immediately after acquiring custody to overcome the owner's resistance and retain possession completes a robbery, matching the supermarket precedent[cite: 32]."
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
        exp: "One who incites, encourages, or commands another to commit a crime is liable as an accomplice/accessory to the completed crime[cite: 32]. By coercing and encouraging the cashier to take $25 from the safe for his benefit, the coworker is guilty as an accomplice to larceny[cite: 32]."
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
        exp: "Vicarious liability requires an underlying criminal violation committed by the agent[cite: 32]. If the bartender lacked the mens rea ('knowingly') due to a reasonable mistake of fact regarding the forged identification, no underlying crime occurred for which the owner could be held vicariously liable[cite: 32]."
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
        exp: "Discharging a high-powered firearm toward a residential house in a densely populated suburban area manifests an extreme, reckless indifference to an unjustifiably high risk to human life ('depraved heart'), satisfying malice aforethought for second-degree murder[cite: 32]."
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
        exp: "Movement that is purely incidental to the commission of another underlying crime (such as moving bank employees from a lobby to a back room during a robbery) does not satisfy the independent, substantial asportation element required for kidnapping[cite: 32]."
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
        exp: "Accomplice liability requires an affirmative act of aiding, abetting, or encouraging[cite: 32]. Mere presence at the scene, even when accompanied by silent approval or internal hope that the crime succeeds, is insufficient for accessorial liability[cite: 32]."
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
        exp: "Robbery requires a threat of immediate physical harm directed against a person[cite: 32]. If the defendant discovered the child prior to the exchange, his continuing threat to set the car on fire with the child inside constitutes a threat of physical harm against a person to obtain property, satisfying robbery[cite: 32]."
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
        exp: "Involuntary manslaughter is an unintentional killing resulting from criminal negligence or recklessness[cite: 32]. Drunk driving constitutes criminal recklessness, and the contributory negligence of the pedestrian is no defense in criminal prosecutions[cite: 32]."
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
        exp: "Under the majority agency theory (Redline rule), a felon cannot be convicted of felony murder for the justifiable killing of a co-felon committed by a police officer[cite: 32]."
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
        exp: "Criminal battery is the reckless or criminally negligent application of force to the person of another[cite: 32]. Firing into an occupied apartment constitutes reckless battery[cite: 32]. Attempted involuntary manslaughter does not exist as a matter of law, and attempted murder requires a specific intent to kill[cite: 32]."
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
        exp: "When an unlawful assault or battery unexpectedly results in an unintended death, the defendant is guilty of involuntary manslaughter under the misdemeanor-manslaughter or criminal negligence rule[cite: 32]."
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
        exp: "Conspiracy is a separate and distinct inchoate offense that does not merge into the completed substantive target crime[cite: 32]. Thus, the defendants can be convicted of both conspiracy and arson[cite: 32]."
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
        exp: "Robbery requires an underlying larceny—the trespassory taking of property of another with intent to steal[cite: 32]. An honest belief that the property belongs to the defendant (a claim of right) negates the intent to steal property of another, even if that belief is objectively unreasonable[cite: 32]."
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
        exp: "Larceny requires an asportation (carrying away or physical movement) of the property[cite: 32]. Because the defendant burned the couch in place without moving it, she did not commit larceny[cite: 32]."
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
        exp: "A bystander has no common-law legal duty to report a suspected crime or warn law enforcement, and failure to act does not create criminal liability absent a special duty[cite: 32]."
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
        exp: "A fundamental element of every criminal offense is a voluntary physical act (actus reus)[cite: 32]. Involuntary physical spasms or movements caused by sudden toxic gas exposure lack volition, negating criminal liability[cite: 32]."
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
        exp: "An agreement to provide services to facilitate a crime combined with a financial stake in the venture (a share of the robbery proceeds) establishes the agreement and intent required for criminal conspiracy[cite: 32]."
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
        exp: "Under the common-law felony murder rule, an unintended death occurring during the commission of an inherently dangerous felony (arson) constitutes murder[cite: 32]. The defendant's mistaken belief that the home was unoccupied does not excuse liability[cite: 32]."
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
        exp: "At common law, conspiracy requires a bilateral agreement between two or more parties sharing the specific intent to commit the target offense[cite: 32]. Because the doctor feigned agreement and did not intend for the wife to die, no bilateral conspiracy was formed[cite: 32]."
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
        exp: "Releasing wild tigers to roam free in a residential backyard with an inadequate fence constitutes an extreme and reckless indifference to an unjustifiably high risk to human life, supporting a conviction for depraved heart murder[cite: 32]."
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
        exp: "When the best friend drew a gun, he escalated the conflict by introducing an imminent threat of deadly force[cite: 32]. The husband was legally justified in using deadly force in self-defense to protect his own life[cite: 32]."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = examData;
}
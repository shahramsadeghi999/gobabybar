const examData = [
    // SOURCE: MBE2-CriminalLaw.pdf, Question 27
    {
        id: 1,
        topic: "Homicide / Depraved Heart Murder",
        fp: "Jack, a bank teller, was fired by Morgan, the president of the bank. Jack decided to take revenge against Morgan, but decided against attempting it personally, because he knew Morgan was protected around the clock by bank security guards. Jack knew that Chip had a violent temper and was very jealous. Jack falsely told Chip that Chip's wife, Elsie, was having an affair with Morgan. Enraged, Chip said, 'What am I going to do?' Jack said, 'If it were my wife, I'd just march into his office and blow his brains out.' Chip grabbed a revolver and rushed to the bank. He walked into the bank, carrying the gun in his hand. One of the security guards, believing a holdup was about to occur, shot and killed Chip.",
        q: "If charged with murder of Chip, Jack should be found",
        opts: [
            "guilty, based upon extreme recklessness.",
            "guilty, based upon transferred intent.",
            "not guilty, because he did not intend for Chip to be shot by the security guard.",
            "not guilty, because he did not shoot Chip and he was not acting in concert with the security guard."
        ],
        ans: 0,
        exp: "Jack should be found guilty of Chip's murder because he knowingly put Chip into a situation where Chip was very likely to be shot[cite: 34]. 'Malice aforethought' includes reckless indifference to the value of human life[cite: 34]. Jack manifested reckless indifference by sending Chip into the bank, gun in hand, knowing that the bank was staffed with armed security guards[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 28
    {
        id: 2,
        topic: "Homicide / Second-Degree Murder",
        fp: "A statute in the jurisdiction defines murder in the first degree as knowingly killing another person after deliberation. Deliberation is defined as 'cool reflection for any length of time no matter how brief.' Murder in the second degree is defined as 'all other murder at common law except felony murder.' Felony murder is murder in the third degree. Manslaughter is defined by the common law.\n\nAt 2 a.m., Duncan held up an all-night liquor store using an assault rifle. During the holdup, two police cars with flashing lights drove up in front of the store. In order to create a situation where the police would hesitate to come into the store (and thus give Duncan a chance to escape out the back) Duncan fired several rounds through the front window of the store. Duncan then ran out the back but upon discovering another police car there, surrendered quietly. One of the shots he fired while in the store struck and killed a burglar who was stealing items from a closed store across the street.",
        q: "The most serious degree of criminal homicide Duncan is guilty of is",
        opts: [
            "murder in the first degree.",
            "murder in the second degree.",
            "murder in the third degree.",
            "manslaughter."
        ],
        ans: 1,
        exp: "Duncan committed murder in the second degree because he fired a gun toward an area where he knew others were located, demonstrating reckless indifference to the value of human life (a 'depraved heart')[cite: 34]. The fact that the person actually killed by one of the shots was unknown to Duncan is irrelevant since depraved-heart malice does not require a specific intended victim[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 29
    {
        id: 3,
        topic: "Homicide / Depraved Heart Murder (Russian Roulette)",
        fp: "At a party, a defendant and a victim agreed to play a game they called 'spin the barrel.' The victim took an unloaded revolver, placed one bullet in the barrel, and spun the barrel. The victim then pointed the gun at the defendant's head and pulled the trigger once. The gun did not fire. The defendant then took the gun, pointed it at the victim, spun the barrel, and pulled the trigger once. The gun fired, and the victim fell over dead.\n\nA statute in the jurisdiction defines murder in the first degree as an intentional and premeditated killing or one occurring during the commission of a common-law felony, and murder in the second degree as all other murder at common law. Manslaughter is defined as a killing in the heat of passion upon an adequate legal provocation or a killing caused by gross negligence.",
        q: "The most serious crime for which the defendant can properly be convicted is",
        opts: [
            "murder in the first degree, because the killing was intentional and premeditated and, in any event, occurred during commission of the felony of assault with a deadly weapon.",
            "murder in the second degree, because the defendant's act posed a great threat of serious bodily harm.",
            "manslaughter, because the defendant's act was grossly negligent and reckless.",
            "no crime, because the victim and the defendant voluntarily agreed to play a game and each assumed the risk of death."
        ],
        ans: 1,
        exp: "The defendant's actions fit the requirements for the 'reckless indifference to the value of human life' variety of murder, which is second-degree murder in this jurisdiction[cite: 34]. The defendant intentionally or recklessly disregarded what she knew was an extremely high risk of death or serious bodily harm to the victim[cite: 34]. Consent or assumption of risk by the victim is not a defense to criminal homicide[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 30
    {
        id: 4,
        topic: "Homicide / Omissions & Duty to Act",
        fp: "Trelawney worked at a day care center run by the Happy Faces Day Care Corporation. At the center, one of the young charges, Smith, often arrived with bruises and welts on his back and legs. A statute in the jurisdiction requires all day care workers to report to the police cases where there is probable cause to suspect child abuse and provides for immediate removal from the home of any suspected child abuse victims. Trelawney was not aware of this statute. Nevertheless, he did report Smith's condition to his supervisor, who advised him to keep quiet about it so the day care center would not get into trouble for defaming a parent. About two weeks after Trelawney first noticed Smith's condition, Smith was beaten to death by his father. Trelawney has been charged with murder in the death of Smith. The evidence at trial disclosed, in addition to the above, that the child had been the victim of beatings by the father for some time, and that these earlier beatings had been responsible for the marks that Trelawney had seen. Smith's mother had been aware of the beatings but had not stopped them because she was herself afraid of Smith's father.",
        q: "Trelawney's best argument that he is NOT guilty of murder is",
        opts: [
            "he was not aware of the duty-to-report statute.",
            "he lacked the mental state necessary to the commission of the crime.",
            "his omission was not the proximate cause of death.",
            "the day care corporation, rather than Trelawney, was guilty of the omission, which was sanctioned by its supervisory-level agent."
        ],
        ans: 1,
        exp: "To be guilty of murder, it must be shown that the defendant acted with malice aforethought[cite: 34]. Since Trelawney thought about the abuse and brought the issue to his supervisor's attention, he did not act with reckless indifference to human life or any other mental state that satisfies malice aforethought[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 31
    {
        id: 5,
        topic: "Homicide / Felony Murder (Third-Party Killing)",
        fp: "Steve, in desperate need of money, decided to hold up a local convenience store. Determined not to harm anyone, he carried a toy gun that resembled a real gun. In the store, he pointed the toy gun at the clerk and demanded money. A customer who entered the store and saw the robbery in progress pulled his own gun and fired at Steve. The bullet missed Steve but struck and killed the clerk.\n\nSteve was charged with felony murder.",
        q: "His best argument for being found NOT guilty is that he",
        opts: [
            "did not intend to kill.",
            "did not commit the robbery because he never acquired any money from the clerk.",
            "did not intend to create any risk of harm.",
            "is not responsible for the acts of the customer."
        ],
        ans: 3,
        exp: "Under the majority (agency) theory of felony murder, if the lethal shot is fired by an innocent third party (the customer) who kills another innocent party (the clerk), the felon is not liable for felony murder because the shooter was not acting in furtherance of the common felonious purpose[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 32
    {
        id: 6,
        topic: "Homicide / Felony Murder & Capital Punishment Limitations",
        fp: "Dawson was charged with felony murder because of his involvement in a bank robbery. The evidence at trial disclosed that Smith invited Dawson to go for a ride in his new car, and after a while asked Dawson to drive. As Smith and Dawson drove around town, Smith explained to Dawson that he planned to rob the bank and that he needed Dawson to drive the getaway car. Dawson agreed to drive to the bank and to wait outside while Smith went in to rob it. As they approached the bank, Dawson began to regret his agreement to help with the robbery. Once there, Smith got out of the car. As Smith went out of sight inside the bank, Dawson drove away and went home. Inside the bank, Smith killed a bank guard who tried to prevent him from leaving with the money. Smith ran outside and, finding that his car and Dawson were gone, ran down an alley. He was apprehended a few blocks away. Dawson later turned himself in after hearing on the radio that Smith had killed the guard.\n\nThe jurisdiction has a death penalty that applies to felony murder.",
        q: "Consistent with the law and the Constitution, the jury may convict Dawson of",
        opts: [
            "felony murder and impose the death penalty.",
            "felony murder but not impose the death penalty.",
            "bank robbery only.",
            "no crime."
        ],
        ans: 1,
        exp: "Dawson is liable for felony murder as an accomplice to the robbery because he assisted in driving Smith to the bank[cite: 34]. However, the Eighth Amendment prohibits imposing the death penalty on an accomplice who did not kill, attempt to kill, or intend that lethal force be employed[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 33
    {
        id: 7,
        topic: "Homicide / Second-Degree Murder & Voluntary Intoxication",
        fp: "A state statute defines murder in the first degree as 'knowingly causing the death of another person after deliberation upon the matter.' Second-degree murder is defined as 'knowingly causing the death of another person.' Manslaughter is defined as at common law. Deliberation is defined as 'cool reflection for any length of time, no matter how brief.' The defendant, despondent and angry over losing his job, was contemplating suicide. He took his revolver, went to a bar, and drank until he was very intoxicated. A customer on the next stool was telling the bartender how it was necessary for companies to downsize and become more efficient in order to keep the economy strong. The defendant turned to him and said, 'Why don't you shut the hell up.' The customer responded, 'This is a free country and I can say what I want,' all the while shaking his finger at the defendant. The finger-shaking, combined with the defendant's already bad disposition and the alcohol, enraged the defendant. Trembling with fury, he snatched his revolver from his pocket and shot and killed the customer.",
        q: "What crime did the defendant commit?",
        opts: [
            "Manslaughter, because there was a reasonable explanation for his becoming enraged.",
            "Murder in the first degree, because deliberation can take place in an instant.",
            "Murder in the first degree, because he contemplated taking a human life before becoming intoxicated.",
            "Murder in the second degree, because he knowingly caused the customer's death without deliberation."
        ],
        ans: 3,
        exp: "The defendant knowingly caused the death of another, fulfilling the statutory definition of second-degree murder[cite: 34]. His intoxicated rage prevented the cool reflection required for deliberation (first-degree murder), but mere finger-shaking is legally inadequate provocation to reduce the homicide to voluntary manslaughter[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 34
    {
        id: 8,
        topic: "Homicide / Proximate Cause in Manslaughter",
        fp: "A high school student's teacher told her that she was going to receive a failing grade in history, which would prevent her from graduating. Furious, she reported to the principal that the teacher had fondled her, and the teacher was fired. A year later, still unable to get work because of the scandal, the teacher committed suicide. The student, remorseful, confessed that her accusation had been false.",
        q: "If the student is charged with manslaughter, her best defense would be that she",
        opts: [
            "committed no act that proximately caused the teacher's death.",
            "did not intend to cause the teacher's death.",
            "did not act with malice.",
            "acted under extreme emotional distress."
        ],
        ans: 0,
        exp: "In an involuntary manslaughter prosecution, the defendant's conduct must be the proximate cause of the victim's death[cite: 34]. A suicide occurring a full year later is attenuated and not a natural, probable consequence of the false accusation, making lack of proximate cause her strongest defense[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 35
    {
        id: 9,
        topic: "General Principles / Criminal Negligence Standards",
        fp: "A state adopted the following statute: 'VEHICULAR MANSLAUGHTER. Whoever in the course of driving a motor vehicle as defined in the Vehicle Code is criminally negligent in driving such vehicle or omits to do anything that is his duty to do and shows a wanton and reckless disregard for the safety of other persons and as a result of such act or omission causes the death of a human being is guilty of vehicular manslaughter.'\n\nVehicular manslaughter is punishable by a sentence of not more than ten years in the state prison or not more than one year in the county jail. A defendant, driving along at a reasonable rate of speed, was distracted by a child carrying a silver balloon. He went through a boulevard stop light and killed a pedestrian. He is charged with vehicular manslaughter.",
        q: "Of the following proposed definitions of criminal negligence, which is most favorable to the defendant?",
        opts: [
            "Criminal negligence is something more than the slight negligence necessary to support a civil action for damages. It means disregard for the consequences of the act and indifference to rights of others.",
            "Any person who drives a motor vehicle should realize the danger to others. If he fails to respond to surrounding circumstances, he is criminally negligent. Criminal negligence involves reckless disregard for the lives or safety of others.",
            "To find the defendant guilty of criminal negligence, the jury must find as a fact that he intentionally did something he should not have done or intentionally failed to do something which he should have done under circumstances that demonstrate a conscious disregard of a known danger that his conduct would produce the result which it did produce.",
            "Criminal negligence is something more than the slight negligence usually required for tort liability. It is something less than the wanton misconduct required for civil liability under the guest statute. It is, of course, conduct that demonstrates something less than the abandoned and malignant heart required for murder."
        ],
        ans: 2,
        exp: "A definition requiring an intentional act or omission with 'conscious disregard of a known danger' introduces the strongest subjective requirement, making it the most difficult standard for the prosecution to satisfy and the most favorable to the distracted driver[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 36
    {
        id: 10,
        topic: "Homicide / Misdemeanor-Manslaughter Rule",
        fp: "One evening, a woman was driving above the speed limit on a country road. As she rounded a sharp curve, she lost control of the car and crossed over to the shoulder on the other side of the road. Her car hit a truck that was parked on the shoulder with its hood up while its driver waited for a tow truck. The force of the collision threw the driver out of the truck and down an embankment. The driver died from his injuries.\n\nDriving above the speed limit and causing an accident can be charged as reckless driving, a misdemeanor in the jurisdiction.",
        q: "What is the most serious homicide offense, if any, of which the woman can properly be convicted?",
        opts: [
            "Murder, based on malice aforethought.",
            "Voluntary manslaughter, based on reckless operation of a vehicle.",
            "Involuntary manslaughter, based on the misdemeanor of reckless driving.",
            "No homicide offense."
        ],
        ans: 2,
        exp: "Under the misdemeanor-manslaughter rule, an accidental death caused during the commission of an unlawful act (a misdemeanor such as reckless driving) constitutes involuntary manslaughter[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 37
    {
        id: 11,
        topic: "Homicide / Involuntary Manslaughter as Lesser Included Offense",
        fp: "A woman became extremely intoxicated after a night of heavy drinking at a party. After the party was over, she got into her car and sped off. While driving 70 mph in a 30-mph zone, she struck and killed a pedestrian. Blood tests revealed that her blood alcohol content had been more than twice the legal limit at the time of the accident.\n\nThe woman was tried for murder. At the close of the evidence, the court refused to dismiss the murder charge but offered to give a lesser-offense instruction.",
        q: "What lesser-offense instruction should the defense attorney request?",
        opts: [
            "Depraved-heart homicide.",
            "Involuntary manslaughter.",
            "Voluntary intoxication.",
            "Voluntary manslaughter."
        ],
        ans: 1,
        exp: "Involuntary manslaughter is a lesser-included offense of murder based on criminal negligence or gross vehicular recklessness when the jury finds the defendant's conduct did not rise to the level of depraved-heart malice[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 38
    {
        id: 12,
        topic: "Defenses / Self-Defense & Non-Deadly Force",
        fp: "A defendant was charged with assault and battery in a jurisdiction that followed the 'retreat' doctrine, and he pleaded self-defense. At his trial, the evidence established the following: a man and his wife were enjoying a drink at a tavern when the defendant entered and stood near the door. The wife whispered to her husband that the defendant was the man who had insulted her on the street the day before. The husband approached the defendant and said, 'Get out of here, or I'll break your nose.' The defendant said, 'Don't come any closer, or I'll hurt you.' When the husband raised his fists menacingly, the defendant pulled a can of pepper spray from his pocket, aimed it at the husband's face, and sprayed. The husband fell to the floor, writhing in pain.",
        q: "Should the defendant be convicted?",
        opts: [
            "No, because he had no obligation to retreat before resorting to non-deadly force.",
            "No, because there is no obligation to retreat when one is in an occupied structure.",
            "Yes, because he failed to retreat even though there was an opportunity available.",
            "Yes, because the husband did not threaten to use deadly force against him."
        ],
        ans: 0,
        exp: "A person is never required to retreat before using non-deadly force in self-defense against unlawful non-deadly force[cite: 34]. Pepper spray is non-deadly force, so the defendant was privileged to use it without retreating[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 39
    {
        id: 13,
        topic: "Crimes against Person / Battery",
        fp: "A driver was stopped in traffic when he noticed a bicyclist riding quickly between the lanes of cars. To deter the bicyclist from continuing such dangerous behavior, the driver opened his car door as the bicyclist neared. The bicyclist, unable to stop, hit the door and fell, sustaining serious injuries.",
        q: "In a jurisdiction that follows the common law definition of crimes, which is the most serious crime of which the driver can properly be convicted?",
        opts: [
            "Attempted murder.",
            "Attempted manslaughter.",
            "Battery.",
            "Assault."
        ],
        ans: 2,
        exp: "Common-law battery is the intentional or reckless application of unlawful force to the person of another resulting in bodily harm or offensive contact[cite: 34]. The driver intentionally caused the bicyclist to collide with the door, completing a battery[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 40
    {
        id: 14,
        topic: "General Principles / Burden of Proof & Elements of Rape",
        fp: "A statute provides: A person commits the crime of rape if he has sexual intercourse with a female, not his wife, without her consent.\n\nDunbar is charged with the rape of Sally. At trial, Sally testifies to facts sufficient for a jury to find that Dunbar had sexual intercourse with her, that she did not consent, and that the two were not married. Dunbar testifies in his own defense that he believed that Sally had consented to sexual intercourse and that she was his common-law wife.\n\nAt the conclusion of the case, the court instructed the jury that in order to find Dunbar guilty of rape, it must find beyond a reasonable doubt that he had sexual intercourse with Sally without her consent.\n\nThe court also instructed the jury that it should find the defendant not guilty if it found either that Sally was Dunbar's wife or that Dunbar reasonably believed that Sally had consented to the sexual intercourse, but that the burden of persuasion as to these issues was on the defendant.\n\nThe jury found Dunbar guilty, and Dunbar appealed, contending that the court's instructions on the issues of whether Sally was his wife and whether he reasonably believed she had consented violated his constitutional rights.",
        q: "Dunbar's constitutional rights were",
        opts: [
            "violated by the instructions as to both issues.",
            "violated by the instruction as to whether Sally was his wife, but not violated by the instruction on belief as to consent.",
            "violated by the instruction on belief as to consent, but not violated by the instruction as to whether Sally was his wife.",
            "not violated by either part of the instructions."
        ],
        ans: 1,
        exp: "Due process requires the prosecution to prove every element of the crime beyond a reasonable doubt[cite: 34]. Because the statute defines rape as intercourse with a female 'not his wife,' non-marriage is an essential element, and shifting the burden of persuasion on that element to the defendant violated due process[cite: 34]. Conversely, reasonable belief as to consent operates as an affirmative defense, for which the burden of persuasion may constitutionally be placed on the defendant[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 41
    {
        id: 15,
        topic: "Crimes against Person / Kidnapping (MPC Asportation)",
        fp: "A driver stopped at a red light in his home state. A stranger opened the passenger door, got in, and pointed a gun at the driver. The stranger then directed the driver to keep driving. They drove several miles, crossed into a neighboring state, and drove several more miles. When they reached a remote location, the stranger ordered the driver to pull over. The stranger then robbed the driver of his wallet and cash, and ordered him out of the car. The stranger drove off in the driver's car.\n\nThe stranger is charged with kidnapping in the neighboring state, which has adopted the Model Penal Code.",
        q: "Could the stranger properly be convicted of kidnapping in the neighboring state?",
        opts: [
            "Yes, because the driver was transported under threat of force in the neighboring state.",
            "Yes, because the driver in effect paid ransom for his release.",
            "No, because any kidnapping took place in the driver's home state.",
            "No, because the restraint was incidental to the robbery."
        ],
        ans: 0,
        exp: "Under Model Penal Code § 212.1, kidnapping occurs when a person unlawfully removes another a substantial distance from the vicinity where found to facilitate commission of a felony[cite: 34]. Forcing the driver to travel several miles into and through the neighboring state constitutes substantial movement that is not merely incidental to the robbery[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 42
    {
        id: 16,
        topic: "Property Crimes / False Pretenses vs. Larceny by Trick",
        fp: "Smith asked Jones if he would loan him $500, promising to repay the amount within two weeks. Jones loaned him the $500. The next day Smith took the money to the race track and lost all of it betting on horse races. He then left town for six months. He has not repaid Jones.",
        q: "Smith has committed",
        opts: [
            "both larceny by trick and obtaining money by false pretenses (although he can only be convicted of one offense).",
            "larceny by trick only.",
            "obtaining money by false pretenses only.",
            "neither larceny by trick nor obtaining money by false pretenses."
        ],
        ans: 3,
        exp: "Both larceny by trick and false pretenses require a fraudulent intent existing at the time the money is obtained[cite: 34]. Because there is no evidence that Smith intended not to repay the loan at the time he borrowed the money, he lacked the requisite fraudulent intent for either offense[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 43
    {
        id: 17,
        topic: "Property Crimes / Larceny (Value Thresholds)",
        fp: "David entered the county museum at a time when it was open to the public, intending to steal a Picasso etching. Once inside, he took what he thought was the etching from an unlocked display case and concealed it under his coat. However, the etching was a photocopy of an original that had been loaned to another museum. A sign over the display case containing the photocopy said that similar photocopies were available free at the entrance. David did not see the sign.\n\nBurglary in the jurisdiction is defined as 'entering a building unlawfully with the intent to commit a crime.'",
        q: "David may be convicted of:",
        opts: [
            "burglary and larceny.",
            "burglary and attempted larceny.",
            "larceny.",
            "larceny and attempted larceny."
        ],
        ans: 2,
        exp: "David committed common-law larceny by taking and carrying away personal property belonging to another with intent to steal[cite: 34]. Common-law larceny requires no minimum value threshold[cite: 34]. He did not commit burglary because his initial entry into a museum open to the public was lawful[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 44
    {
        id: 18,
        topic: "Property Crimes / Larceny (Custody vs. Possession)",
        fp: "The defendant worked as the cashier in a restaurant. One night after the restaurant had closed, the defendant discovered that the amount of cash in the cash register did not match the cash register receipt tapes. He took the cash and the tapes, put them in a bag, gave them to the manager of the restaurant, and reported the discrepancy. The manager immediately accused him of taking money from the register and threatened to fire him if he did not make up the difference. The manager placed the bag in the office safe. Angered by what he considered to be an unjust accusation, the defendant waited until the manager left the room and then reached into the still open safe, took the bag containing the cash, and left.",
        q: "The defendant is guilty of",
        opts: [
            "larceny.",
            "embezzlement.",
            "either larceny or embezzlement but not both.",
            "neither larceny nor embezzlement."
        ],
        ans: 0,
        exp: "Once the cashier surrendered the cash to the manager and it was placed in the safe, lawful possession reverted to the employer/manager[cite: 34]. Reaching into the safe to take the money constituted a trespassory taking from the possession of another with intent to steal (larceny), not embezzlement[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 45
    {
        id: 19,
        topic: "Property Crimes / Larceny (Asportation Distance)",
        fp: "A man who had become very drunk left a bar and started to walk home. Another patron of the bar, who had observed the man's condition, followed him. The patron saw the man stumble and fall to the ground near an alley. The patron then began to pull out a gun but saw that the man had passed out asleep in the gutter. The patron reached into the man's pocket, grabbed his wallet, and started to walk away. When the patron heard police officers approaching, he dropped the wallet and ran off.\n\nThe crimes below are listed in descending order of seriousness.",
        q: "What is the most serious crime for which the patron properly could be convicted?",
        opts: [
            "Robbery.",
            "Larceny.",
            "Attempted robbery.",
            "Attempted larceny."
        ],
        ans: 1,
        exp: "The patron committed larceny because any movement or asportation of the property, even over a slight distance, completes the crime[cite: 34]. Dropping the wallet when police arrived does not undo the completed larceny[cite: 34]. It was not robbery because the victim was asleep and no force or fear was used to accomplish the taking[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 46
    {
        id: 20,
        topic: "Property Crimes / Larceny by Trick vs. Robbery",
        fp: "A customer asked to see an expensive watch in a jewelry store. In conversation with the clerk, the customer falsely claimed to be the son of the mayor. When handed the watch, he asked if he could put it on, walk around a bit so he could see how it felt on his wrist, and then briefly step outside to observe it in natural light. The clerk agreed, saying, 'I know I can trust someone like you with the merchandise.' The customer walked out of the store wearing the watch and never returned. A week later, the clerk was at a gathering when she spotted the customer wearing the watch. She told him that he must either pay for the watch or give it back. He hissed, 'I'll knock your block off if you mess with me.' Intimidated, the clerk backed off. The following list of crimes is in descending order of seriousness.",
        q: "What is the most serious crime the customer committed?",
        opts: [
            "Robbery.",
            "Larceny.",
            "False pretenses.",
            "Embezzlement."
        ],
        ans: 1,
        exp: "The customer obtained custody of the watch through deceit with the intent to steal it, which constitutes larceny by trick (a form of common-law larceny)[cite: 34]. It was not robbery because the initial taking was accomplished through trickery rather than force or intimidation[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 47
    {
        id: 21,
        topic: "Property Crimes / Continuing Trespass Doctrine",
        fp: "An executive of an accounting firm was fired and told to immediately leave the building where she worked. The executive went home, but she returned that night to retrieve personal items from her office. When she discovered that her key no longer opened a door to the building, she forced the door open and went to her former office. To avoid attracting attention, she did not turn on any lights. In the dark, she knew that she was taking some items that were not hers; she planned to sort these out later and return them.\n\nUpon arriving home, she found that she had taken a record book and some financial papers that belonged to the firm. After thinking it over and becoming angrier over being fired, she burned the book and papers in her fireplace.\n\nThe jurisdiction has expanded the crime of burglary to include all buildings.",
        q: "What crime(s) has the executive committed?",
        opts: [
            "Burglary and larceny.",
            "Burglary, but not larceny.",
            "Larceny, but not burglary.",
            "Neither larceny nor burglary."
        ],
        ans: 2,
        exp: "The executive did not commit burglary because at the moment of entry she intended only to retrieve personal property, lacking the specific intent to commit a felony inside[cite: 34]. However, under the continuing trespass doctrine, her wrongful initial taking continued until she formed the intent to permanently destroy/deprive the property, making her guilty of larceny upon burning the papers[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 48
    {
        id: 22,
        topic: "Property Crimes / Burglary (Breaking Requirement)",
        fp: "Sam told Horace, his neighbor, that he was going away for two weeks and asked Horace to keep an eye on his house. Horace agreed. Sam gave Horace a key to use to check on the house.\n\nHorace decided to have a party in Sam's house. He invited a number of friends. One friend, Lewis, went into Sam's bedroom, took some of Sam's rings, and put them in his pocket.",
        q: "Which of the following is true?",
        opts: [
            "Horace and Lewis are guilty of burglary.",
            "Horace is guilty of burglary and Lewis is guilty of larceny.",
            "Horace is guilty of trespass and Lewis is guilty of larceny.",
            "Lewis is guilty of larceny and Horace is not guilty of any crime."
        ],
        ans: 3,
        exp: "Neither Horace nor Lewis is guilty of burglary because Horace had permission and a key to enter the dwelling, meaning there was no breaking[cite: 34]. Lewis is guilty of larceny because he took and carried away Sam's rings with intent to steal[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 49
    {
        id: 23,
        topic: "Property Crimes / Burglary (Entry Element)",
        fp: "A woman decided to steal a necklace that belonged to her neighbor. She knew where the neighbor kept the necklace because she had been in the neighbor's house on many occasions when the neighbor had taken off the necklace and put it away in a jewelry box in the bathroom. One night, the woman went to the neighbor's house. The neighbor was away and the house was dark. The woman opened the bathroom window, saw the jewelry box on the counter, and started to climb inside. As her leg cleared the window sill, the neighbor's cat let out a loud screech. Terrified, the woman bolted back outside and fled.\n\nThe crimes below are listed in descending order of seriousness.",
        q: "What is the most serious crime committed by the woman?",
        opts: [
            "Burglary.",
            "Attempted burglary.",
            "Attempted larceny.",
            "No crime."
        ],
        ans: 0,
        exp: "Common-law burglary requires breaking and entering a dwelling at night with felonious intent[cite: 34]. The entry element is fully satisfied when any part of the defendant's body (such as a leg) crosses the threshold into the interior space[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 50
    {
        id: 24,
        topic: "Property Crimes / Robbery & Threat of Immediate Harm",
        fp: "A woman drove her car through the drive-through lane of a fast-food restaurant in the afternoon. When she reached the microphone used to place orders, she said, 'There's a man across the street with a rifle. He can see everything you do. If you do not do exactly what I tell you, he will shoot you. Put all the money from the register into a sack and give it to me when I drive up.' The clerk did not see anyone across the street and was unsure whether anyone was there. However, unwilling to risk harm to himself, he put $500 in a paper bag and handed it to the woman when she drove up to the delivery window. The woman drove off with the money but was arrested a short time later. She had lied about the man with a rifle and had acted alone.",
        q: "Of what crime or crimes can the woman be convicted?",
        opts: [
            "Embezzlement.",
            "Obtaining property by false pretenses.",
            "Robbery and larceny.",
            "Robbery or larceny."
        ],
        ans: 3,
        exp: "The woman's threat of immediate physical harm to the clerk induced him to surrender the money, satisfying the elements of robbery[cite: 34]. Because larceny is a lesser included offense of robbery, the prosecution may convict the defendant of robbery or larceny, but not both[cite: 34]."
    },
    // SOURCE: MBE2-CriminalLaw.pdf, Question 52
    {
        id: 25,
        topic: "Property Crimes / Arson (Duty to Control Fire)",
        fp: "Defendant was upset because he was going to have to close his liquor store due to competition from a discount store in a new shopping mall nearby. In desperation, he decided to set fire to his store to collect the insurance. While looking through the basement for flammable material, he lit a match to read the label on a can. The match burned his finger and, in a reflex action, he dropped the match. It fell into a barrel and ignited some paper. Defendant made no effort to put out the fire but instead left the building. The fire spread and the store was destroyed by fire. Defendant was eventually arrested and indicted for arson.",
        q: "Defendant is",
        opts: [
            "guilty, if he could have put out the fire before it spread and did not do so because he wanted the building destroyed.",
            "guilty, if he was negligent in starting the fire.",
            "not guilty, because even if he wanted to burn the building there was no concurrence between his mens rea and the act of starting the fire.",
            "not guilty, because his starting the fire was the result of a reflex action and not a voluntary act."
        ],
        ans: 0,
        exp: "When a person creates a dangerous condition that starts a fire, they incur an affirmative legal duty to take reasonable steps to extinguish or control it[cite: 34]. Failing to put out the fire when capable of doing so, with the contemporaneous intent that the building burn, satisfies both the actus reus (omission) and mens rea for arson[cite: 34]."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = examData;
}
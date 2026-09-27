// BabyBar-CriminalLaw-30.js
const examData = [
    {
        id: 1,
        topic: "Homicide / Involuntary Manslaughter",
        fp: "A state law requires automobiles to be equipped with a device to reduce the emission of air-polluting substances and provides that any person who knowingly removes such a device from an automobile shall be guilty of a misdemeanor. The defendant was the operator of an automobile service station at which she conducted minor repairs. The victim brought her car to the defendant's station and asked whether there was anything that the defendant could do to improve the car's fuel economy. The defendant said that removing the air-pollution control device would make the car use less fuel, and she offered to do so for a fee. The victim paid the fee, and the defendant removed the device. Although the defendant worked carefully, she accidentally loosened a connection in the exhaust system without knowing she had done so. As a result, when the victim drove away, exhaust gases were leaking from the exhaust system into the victim's car. After driving for a short time, the victim was poisoned by the gases and died.",
        q: "If the defendant is prosecuted for the homicide of the victim, she should be found",
        opts: [
            "guilty of involuntary manslaughter under the unlawful act doctrine, because the victim's death would not have occurred but for the defendant's removal of the air-pollution control device.",
            "guilty of voluntary manslaughter, only if she knew there was a possibility that death could result from a leak in the exhaust system.",
            "guilty of involuntary manslaughter, because an automobile is a dangerous instrumentality and the defendant was culpably negligent.",
            "not guilty."
        ],
        ans: 3,
        exp: "Under the \"unlawful act doctrine\" (also known as the \"misdemeanor-manslaughter rule\"), a person may be guilty of involuntary manslaughter if a death results from his or her commission of a crime that is malum in se or inherently dangerous. Neither of these factors exists here. Therefore, A is incorrect. B is incorrect because voluntary manslaughter requires the intent to kill or cause great bodily harm, and the knowledge that death is possible is not sufficient to constitute such intent. Most jurisdictions hold that criminal or culpable negligence that results in death may support a conviction for involuntary manslaughter. In some of those jurisdictions, culpable negligence is defined as unreasonable conduct in the face of a foreseeable risk. In others, more is required: either that the defendant knew of the risk and willfully disregarded it, or that under the circumstances known to the defendant, his or her conduct created a high degree of risk of death or serious bodily injury. Since the facts do not indicate that the defendant engaged in unreasonable conduct in the face of a foreseeable risk, willfully disregarded a known risk, or under the circumstances knew her conduct created a high risk of death or serious bodily injury, C is incorrect because there is no evidence of criminal negligence."
    },
    {
        id: 2,
        topic: "Defenses / Self-Defense",
        fp: "After striking a police officer with a baseball bat, the defendant was charged with felonious assault. He was found not guilty by reason of insanity, but the judge directed that he report to a state-employed psychiatrist for weekly psychotherapy treatments. One day, while he was in the waiting room of the doctor's office, the defendant drew a knife and waved it at a nurse employed there, shouting, \"Vader must die! The Empire will be restored!\" The nurse took a heavy, decorative, hard plastic replica of a medieval sword from the wall and held it in front of him. When the defendant saw this, he handed his knife to the nurse and knelt before him, crying and saying, \"Forgive me, Lord of the Galaxy.\" Although he realized that the defendant was no longer trying to kill him, the nurse struck him heavily on the head with the plastic sword, causing a fracture of the defendant's skull. The defendant grabbed his knife out of the nurse's hand and stabbed the nurse with it, inflicting a slight injury. The defendant was arrested and charged with the crime of battery.",
        q: "If the defendant asserts that he acted in self-defense, he should be found",
        opts: [
            "not guilty, because the injury that he inflicted upon the nurse was significantly less serious than the injury that the nurse inflicted upon him.",
            "not guilty, if the force that he used against the nurse was reasonable.",
            "guilty, if he knew that the sword in the nurse's hand was made of plastic.",
            "guilty, because he was the initial aggressor."
        ],
        ans: 1,
        exp: "Self-defense involves a privilege to use reasonable force to protect oneself against what reasonably appears to be an imminent threat of bodily harm. Since the nurse had already struck the defendant hard enough and with an object heavy enough to fracture the defendant's skull, and since the nurse still had the weapon in his hand, the perception that the defendant was in danger of imminent bodily harm was probably reasonable. Thus, if the force that he used to protect himself against it was reasonable, its use was privileged.\n\nThe difference between the seriousness of the injuries inflicted by the nurse and the defendant does not by itself establish that the force used by the defendant was reasonable, making A incorrect. Since the plastic sword was not only heavy enough to cause a serious injury, but in fact did cause such an injury, the fact that the defendant knew that it was plastic would not in itself make his response to its threatened use unreasonable. C is therefore incorrect. A person against whom force is initiated is privileged to use reasonable force to defend himself or herself against it. Thus, one who initiates aggression is not ordinarily privileged to use force in response to reasonable force that his or her adversary is using in self-defense. D is incorrect, however, because when the defendant surrendered his knife and fell to his knees, his initial act of aggression had ended. Since the nurse's use of force was not privileged, the defendant was privileged to defend himself against it."
    },
    {
        id: 3,
        topic: "Crimes against Person / Kidnapping",
        fp: "A woman was a collector of antique automobiles. One day, she took her infant daughter for a ride in a 1921 Maple, one of the most valuable cars in her collection. On her way, she stopped to buy a newspaper. Because her daughter had fallen asleep in the backseat, the collector left her in the car when she got out. The defendant, a professional car thief who happened to be at the newspaper stand, jumped into the collector's car and drove it away without noticing the daughter in the backseat.\n\nThe defendant realized that he would not be able to sell a stolen car as unusual as the Maple, so he parked it in a friend's garage, still unaware of the presence of the sleeping child. Getting the collector's name and phone number from some papers in the glove compartment of the car, the defendant phoned her and left a message on her telephone answering machine, telling her that if she did not immediately bring $1,000 in cash to a certain location, he would set the Maple on fire.\n\nWhen the collector realized that her car, with her daughter in the backseat, was gone, she became frantic and rushed home. When she picked up her phone to call the police, her answering machine played the defendant's message. Upon hearing it, the collector brought $1,000 to the location specified. The defendant, who was waiting for her, took the money and returned the car. The daughter was still sleeping quietly in the backseat.",
        q: "If the defendant is charged with kidnapping, he should be found",
        opts: [
            "guilty, since he confined and moved the daughter without her consent.",
            "guilty, since the asportation of the daughter resulted from his commission of a serious felony.",
            "not guilty, since his primary purpose was to steal the car, and the movement of the daughter was only incidental to his accomplishing that purpose.",
            "not guilty, since he did not know that the daughter was in the car."
        ],
        ans: 3,
        exp: "Kidnapping is defined as the intentional asportation and confinement of a person against that person's will, by force or threat, and without lawful authority. Since the defendant did not know that the daughter was in the car when he drove it away, he lacked the requisite intent.\n\nA is therefore incorrect. B is incorrect because kidnapping has no equivalent of the felony-murder rule. C is incorrect since if he knew that the daughter was in the car, the defendant could be guilty of kidnapping even if the asportation of the daughter was secondary to his stealing of the car."
    },
    {
        id: 4,
        topic: "Crimes against Person / Kidnapping",
        fp: "There were three employees and three customers in a bank when the defendant entered and drew a pistol from his pocket. Waving the pistol in the air, the defendant shouted, \"Freeze! This is a holdup!\" Threatening to shoot him if he did not obey, the defendant ordered one of the tellers to open the vault. After the teller had done so, the defendant directed everyone present to lie down on the floor. The defendant then removed all the cash from the vault and left the bank, forcing one of the customers at gunpoint to accompany him into his car as a hostage. After driving for about 15 minutes, the defendant opened the car door and permitted the hostage to get out.",
        q: "Of how many kidnappings may the defendant properly be convicted?",
        opts: [
            "Zero.",
            "One.",
            "Two.",
            "Six."
        ],
        ans: 1,
        exp: "Kidnapping consists of intentionally transporting and confining a person against that person's will by force or threat and without legal authority. The essential difference between kidnapping and criminal false imprisonment is the requirement of asportation: Unless the defendant has moved the victim to the place of confinement, there is no kidnapping. Since the defendant forced the hostage to accompany him to his car, where he confined her for a period of 15 minutes, he has kidnapped her. Because he did not move any of the other victims to the place of their confinement, he did not kidnap them.\n\nA, C, and D are therefore incorrect."
    },
    {
        id: 5,
        topic: "Property Crimes / Receiving Stolen Property",
        fp: "Undercover police officers received an anonymous tip that the defendant was engaged in buying and selling stolen cars. They decided to catch the defendant by pretending to be criminals. One of the officers arranged to meet the defendant, telling the defendant that his friend was looking for a buyer for stolen cars. When the defendant said that he might be interested in purchasing one for resale, the officer offered to put up half the money and to buy it with him as a partner. The defendant agreed, and the officer gave him $1,000 in cash as his share. The officer had requisitioned the money from the police department for that purpose and had it marked in a way that would permit its subsequent identification. The officer then introduced the defendant to the other officer, saying that the other officer was a car thief. The other officer offered to sell the defendant a car that he said he had stolen, but which he had actually requisitioned from the police department for that purpose. After agreeing on a price for the car, the defendant paid the other officer with the marked money that the first officer had given him. The officers immediately placed the defendant under arrest.",
        q: "The defendant is charged with criminally receiving stolen property. Which of the following would be his most effective argument in defense against that charge?",
        opts: [
            "The car that the defendant purchased from the other officer had been requisitioned from the police department.",
            "The money that the defendant used to purchase the car from the other officer had been requisitioned from the police department.",
            "The two officers entrapped the defendant into purchasing the car.",
            "The anonymous tip received by the officers was not sufficient to give them probable cause to believe that the defendant was guilty of a crime."
        ],
        ans: 0,
        exp: "A defendant is guilty of criminally receiving stolen property when he or she acquires stolen personal property with knowledge that it is stolen and with the intent to permanently deprive its owner. Since the car that the defendant purchased from the other officer had been requisitioned from the police department, it was not stolen property. Since the defendant never received stolen property, he cannot be guilty of this crime.\n\nB is incorrect because guilt does not require that the defendant pay for stolen property with his own money (or that he pay for it at all). Police officers are supposed to prevent crime, not to cause it. For this reason, many jurisdictions hold that a defendant who was entrapped (i.e., induced by a police officer to commit a crime that he or she was not otherwise inclined to commit), cannot be convicted of committing it. The officers did not entrap the defendant because the defendant indicated his inclination to purchase a stolen car before either officer suggested that he do so. C is therefore incorrect. A search or arrest warrant may not be issued without a showing of probable cause, but no such showing is required before beginning an investigation. For this reason, D is incorrect."
    },
    {
        id: 6,
        topic: "Property Crimes / Burglary & Arson",
        fp: "Four weeks after breaking her engagement with her boyfriend, the defendant was angry because her boyfriend still had not returned a stereo that he had borrowed from her. She went to his house one night to demand its immediate return. When she got there, the boyfriend was not at home and his door was unlocked. The defendant entered to look for her stereo but could not find it. While searching, she noticed that the boyfriend had a new couch. Thinking that the couch was worth as much as her stereo, she tore open one of its cushions and set it on fire before leaving. The fire destroyed the couch completely and charred the walls and ceiling of the room, although the house itself was not seriously damaged. The defendant was subsequently prosecuted. Statutes in the jurisdiction adopt the common law definitions of burglary, larceny, and arson.",
        q: "If the defendant is charged with burglary and arson, she can properly be convicted of",
        opts: [
            "burglary only.",
            "arson only.",
            "burglary and arson.",
            "neither burglary nor arson."
        ],
        ans: 1,
        exp: "Arson is the intentional or malicious burning of the dwelling of another. Since even the slightest charring of the walls or ceiling is regarded as a burning, there was a burning of the boyfriend's dwelling. Since malice includes recklessness, and since it was clearly reckless to set fire to a couch while it was inside the house, the necessary state of mind is present. The defendant is therefore guilty of arson.\n\nBurglary is the trespassory breaking and entering of the dwelling of another at night with the intent to commit a larceny or any felony therein. The defendant entered the boyfriend's dwelling at night. The unauthorized opening of a closed door can constitute a breaking, and any unauthorized entry is trespassory. Although the defendant did commit a felony inside (i.e., arson), she cannot be guilty of burglary unless she intended to do so when she entered. Since at the time the defendant entered the boyfriend's house, she meant only to retrieve her own property, she did not have the requisite intent to make her guilty of burglary. A and C are therefore incorrect. D is incorrect because the defendant is guilty of arson as explained above."
    },
    {
        id: 7,
        topic: "Defenses / Insanity (M'Naghten)",
        fp: "As a result of mental illness, the defendant was obsessed with the delusion that his wife, the victim, was building a bomb in the basement of their house, and that she was going to use it to blow up the world. Because he twice tried to kill the victim, he had been confined to a state mental hospital on two occasions. After his most recent release from confinement, the defendant discussed his belief with the police, but they did not take him seriously. Although he knew that he would be imprisoned for murder if he was caught, he pushed the victim down a flight of stairs, thinking that he would save the world by killing her. The victim died of injuries that she sustained in the fall.",
        q: "If the defendant is prosecuted for the murder of the victim, his most effective argument in defense would be that, as a result of mental illness,",
        opts: [
            "he did not know that his act was wrong.",
            "he lacked criminal intent.",
            "he was unable to control his conduct.",
            "he did not appreciate the nature and quality of his act."
        ],
        ans: 2,
        exp: "Under the \"irresistible impulse\" test, a person is not guilty by reason of insanity if mental disease made him or her incapable of controlling his or her conduct at the time of the alleged criminal act. Although not all jurisdictions accept this definition of insanity, under the facts given, C is the only argument listed that would serve as an effective defense in any jurisdiction.\n\nThe M'Naghten rule provides that a person is not guilty by reason of insanity if, at the time of the allegedly criminal act, mental disease prevented him or her from knowing either the nature and quality of his or her act or that it was wrong. A defendant is said to know that his or her act is \"wrong,\" however, if he or she is aware that it is prohibited by law. Since the defendant knew that if he was caught, he would be imprisoned for murder, he had sufficient understanding that his act was wrong to make him sane under this rule. A is therefore incorrect. The concept of \"intent\" relates to the defendant's state of mind regarding the immediate consequences of his or her act, quite apart from the concept of \"motive,\" which refers to a defendant's purpose in bringing that consequence about. Since the defendant desired to kill the victim, he had the necessary intent to make him guilty of murder, in spite of his noble motive (i.e., to save the world). B is therefore incorrect. A person who, by reason of mental illness, is incapable of understanding the nature and quality of his or her act is insane under the M'Naghten rule. The phrase nature and quality of the act, however, refers to the physical character of the act and to its physical consequences. Since the defendant understood that he was pushing the victim down the stairs and that this could result in her death, he did understand the nature and quality of his act. D is therefore incorrect."
    },
    {
        id: 8,
        topic: "Inchoate Crimes / Attempt (Mens Rea)",
        fp: "One day, the owner of a department store asked an employee in the store's shoe department to temporarily replace a sporting goods salesman who did not show up for work. A teenager, who was 15 years of age, subsequently entered the sporting goods department and asked the employee to sell her ammunition for a pistol. The employee placed a box of ammunition on the counter and said, \"That'll be $9, please.\" Realizing that she did not have any money with her, the teenager left the store without the ammunition, saying that she would return for it later. A statute in the jurisdiction provides as follows: \"Any person who sells ammunition for a firearm to a person below the age of 16 years shall be guilty of a felony. The employer of any person who violates this section during the course of such employment shall be guilty of a misdemeanor punishable by a fine not to exceed $250. It shall not be a defense to a violation of this section that the defendant had no knowledge of the age of the person to whom the sale was made.\"\n\nThe teenager did not return to the store.",
        q: "If the employee is charged with attempting to violate the above statute, which of the following would be the employee's most effective argument in defense against that charge?",
        opts: [
            "The employee did not know of the statute or its provisions.",
            "The employee did not know that the teenager was below the age of 16 years.",
            "The owner should be prosecuted under the statute, since she was the employee's employer.",
            "The employee is customarily employed in the shoe department and should not be held to the same standard as a person in the business of selling firearms and ammunition."
        ],
        ans: 1,
        exp: "A person is guilty of a criminal attempt when, with the specific intent to bring about a criminally prohibited result, he or she comes substantially close to bringing about that result. Thus, while certain crimes may be committed without intending the prohibited consequences, criminal attempt always requires the specific intent to bring about the prohibited result. Although the employee could be convicted of violating the statute if he actually sold ammunition to the teenager, he could not be convicted of attempting to violate the statute unless he knew that the teenager was under the age of 16 and intended to sell her the ammunition.\n\nFor obvious practical reasons, there is usually an irrebuttable presumption that all persons know the law. Ignorance of the law, therefore, would not provide the employee with a defense. A is therefore incorrect. The fact that the owner is vicariously liable under the statute would not furnish the employee with a defense since the statute imposes liability on both employee and employer. C is incorrect for this reason, and because the statute imposes vicarious liability on the employer only if the employee actually makes a sale, which the employee did not do. D is incorrect because the statute does not make knowledge or experience an element of guilt."
    },
    {
        id: 9,
        topic: "Homicide / Murder (Mistake of Identity)",
        fp: "The defendant and his ex-girlfriend had hated each other for years. One day, the defendant waited outside his ex-girlfriend's office building with a loaded pistol, planning to kill his ex-girlfriend. When the defendant saw the victim leave the building, he believed the victim was his ex-girlfriend and shot at her, aiming to kill her. The victim was struck by the bullet and died of the bullet wound.",
        q: "If the defendant is charged with the victim's murder in a jurisdiction that applies the common law definition, the defendant should be found",
        opts: [
            "guilty, but only if the jurisdiction applies the doctrine of transferred intent.",
            "guilty, because the defendant intended to bring about the death of the person at whom he shot.",
            "not guilty.",
            "guilty, because the defendant created an unreasonable risk that a human being would die."
        ],
        ans: 1,
        exp: "At common law, murder is the unlawful killing of a human being with malice aforethought. One state of mind that constitutes malice aforethought is the intent to kill a human being. Since knowledge of the victim's identity is not an essential element of murder, the fact that the defendant was mistaken about the identity of the person at whom he was shooting does not prevent him from having the necessary state of mind (i.e., intent to kill). For this reason, the defendant may be convicted even without application of the doctrine of transferred intent.\n\nA is therefore incorrect. C is incorrect because the defendant unlawfully killed the victim with the intent to kill a human being and is therefore guilty of murder. Although a wanton disregard for human life may constitute malice aforethought, mere negligence does not. Since the creation of an unreasonable risk is merely negligent, this fact is not sufficient to justify a finding that the defendant had malice aforethought, which is necessary to a conviction for murder. D is therefore incorrect."
    },
    {
        id: 10,
        topic: "Defenses / Involuntary Intoxication",
        fp: "After the defendant entered a tavern and sat on a stool at the bar, a friend sitting beside him said, \"Did you ever have a Russian Bomber?\" The defendant ordered one, although he had never heard of a Russian Bomber. Although he realized that it had some alcohol in it, he was unaware that it was 90 percent alcohol. When the bartender placed the drink in front of the defendant, the defendant drank it quickly. A few moments later, the defendant fell off his bar stool because he was overcome by the alcohol in the Russian Bomber. He fell against an elderly man, knocking him against the wall and causing the elderly man to fracture several ribs.",
        q: "If the defendant is charged with committing a criminal battery against the elderly man, which of the following additional facts or inferences, if it was the only one true, would provide the defendant with his most effective argument in defense?",
        opts: [
            "The defendant did not intend to become intoxicated by drinking the Russian Bomber.",
            "The defendant did not know that drinking the Russian Bomber would cause him to fall off the bar stool.",
            "The defendant did not intend to make contact with the elderly man.",
            "The defendant had never before been overcome by the alcohol in one drink."
        ],
        ans: 3,
        exp: "Criminal battery consists of the intentional, reckless, or criminally negligent application of force to the body of another. Since it is thus a general intent crime, it may be committed without the intent to make contact with the victim. While voluntary intoxication is no defense to a general intent crime, involuntary intoxication ordinarily is. A person has become involuntarily intoxicated when his or her intoxication was the result of an unpredictable and grossly excessive reaction to an intoxicating substance. Thus, if the defendant had never before been overcome by the alcohol in one drink, it may be that his intoxication was involuntary and that it will provide him with a defense to the charge of criminal battery. It is not certain that this defense would be successful, since a court might find that although the response was unpredictable, it was not grossly excessive. The fact set forth in D, however, is the only one listed that might possibly provide the defendant with an effective defense.\n\nA person may become \"voluntarily\" intoxicated even without the intent to become drunk so long as he or she is aware that the substance that he or she is taking has an intoxicating potential. Since the defendant was aware that the Russian Bomber had some alcohol in it, his intoxication may be called voluntary even if he did not intend to become drunk. A is therefore incorrect. If the defendant's conduct in drinking the Russian Bomber was reckless or criminally negligent, he could have the necessary mens rea to be guilty of battery (i.e., general intent), even though he did not specifically know what risk he was creating (i.e., that he would fall off the bar stool). B is therefore incorrect. C is incorrect because battery is a general intent crime, and therefore it does not require the intent to make contact with another human being."
    },
    {
        id: 11,
        topic: "Defenses / Self-Defense & Defense of Property",
        fp: "The defendant was the owner of a tavern. On two occasions in the recent past, thieves entered the defendant's tavern after closing time and stole several thousand dollars worth of liquor. In an attempt to protect himself against further thefts, the defendant began sleeping in the tavern at night with a loaded pistol by his side. One night, while on his rounds, a police officer noticed that one of the defendant's windows was open and climbed through the window to investigate. Hearing the sound of someone moving about his tavern, the defendant stood up and cocked his pistol. When the officer heard the sound and saw the outline of a person standing by the bar with a pistol in his hand, the officer shouted, \"Drop that gun or I'll shoot!\" The defendant and the officer fired their pistols at each other. Each was struck by the other's bullet.",
        q: "If the defendant is charged with attempted murder because of his shooting of the officer, the court should find him",
        opts: [
            "not guilty, if the defendant reasonably believed that his life was in danger.",
            "guilty, because deadly force is not permitted in defense of property.",
            "guilty, because the intent to kill or inflict great bodily harm can be inferred from the defendant's conduct.",
            "guilty, because at the time of the shooting, the officer was a police officer acting within the scope of his official duties."
        ],
        ans: 0,
        exp: "A person is privileged by self-defense to use reasonable force to protect himself or herself against what reasonably appears to be an imminent threat of bodily harm. In this connection, reasonable force is the force that would appear necessary to the reasonable person. Even deadly force is reasonable if the person using it reasonably believes that he or she is being threatened with deadly force. Thus, if the defendant reasonably believed that his life was in danger, the force that he used in self-defense was probably reasonable, making the defendant not guilty of attempted murder.\n\nAlthough deadly force is not ordinarily considered reasonable in defense of mere property, B is incorrect because the defendant's shot was probably fired in response to a threat against his person and may have been justified by self-defense. Although the intent to kill or inflict serious injury can be inferred from the fact that the defendant fired at the officer, C is incorrect because, if reasonable, his conduct was privileged by self-defense. Since the defendant had no way of knowing that the person threatening him was a police officer, the officer's status as such can have no bearing on the reasonableness of the defendant's actions. D is therefore incorrect."
    },
    {
        id: 12,
        topic: "Homicide / Felony Murder (Accomplice Liability)",
        fp: "The defendant and a bank robber had been in the same cell together while serving time in prison. Soon after their release, the bank robber asked the defendant to join him in robbing a bank. The defendant refused, stating that he did not want to go back to prison. The bank robber then said that he would rob the bank himself if the defendant would provide him with a place to hide afterwards. The defendant agreed that the bank robber could hide in the defendant's apartment following the robbery in return for one-fourth of the proceeds of the robbery. The following day, the bank robber robbed the bank. While he was attempting to leave the bank, a security guard began shooting at him, and the bank robber fired back, killing a bystander. One week later, the bank robber was arrested at the defendant's apartment, where he had been hiding, and was charged with robbery and felony murder.\n\nThe defendant was subsequently charged with felony murder on the ground that he was an accomplice to the robbery committed by the bank robber that resulted in the death of a bystander.",
        q: "The court should find the defendant",
        opts: [
            "not guilty, because he was an accessory after the fact.",
            "not guilty, if he did not know that the bank robber was going to use deadly force to accomplish the robbery.",
            "guilty, only if it was foreseeable that someone would be shot during the course of the robbery.",
            "guilty, because an accomplice is responsible for all crimes committed in furtherance of the crime to which he or she is an accomplice."
        ],
        ans: 2,
        exp: "One who intentionally aids, abets, or facilitates the commission of a crime is criminally responsible for the crime as an accomplice. In addition, an accomplice is criminally responsible for all the foreseeable consequences of the crime that he or she facilitated. Since the use of the defendant's apartment to escape detection was part of the bank robber's plan in preparing for the robbery, the defendant's agreement to permit the bank robber to use it facilitated the robbery, making the defendant an accomplice to it. As such, the defendant may be guilty of felony murder in the death that resulted from the robbery, but only if it was foreseeable that such a death would occur.\n\nOne who becomes an accessory after a crime has been committed (i.e., accessory after the fact) by knowingly harboring the person who committed it is not criminally responsible for prior acts committed by the person harbored. A person who facilitates the commission of a crime by agreeing in advance that he or she will harbor the perpetrator after the crime is committed is guilty as an accomplice (i.e., accessory before the fact), however. As such, he or she is criminally responsible for all foreseeable consequences of the crime to which he or she was an accomplice. A is therefore incorrect. Since an accomplice is criminally responsible for those consequences that were foreseeable, the fact that the defendant did not actually know that the bank robber would use a gun does not protect him from liability if the bank robber's use of a gun was foreseeable. B is therefore incorrect. A conspirator is criminally responsible for all crimes committed by co-conspirators in furtherance of the subject of the conspiracy. D is incorrect, however, because an accessory is criminally responsible only for consequences that were foreseeable."
    },
    {
        id: 13,
        topic: "Inchoate Crimes / Attempt (Mistake of Fact)",
        fp: "A statute prohibited the sale of liquor between the hours of midnight and 8 A.M. When a customer came into the defendant's liquor store and asked to buy a bottle of liquor, the defendant looked at the clock and saw that it said five minutes past eleven, so he sold the liquor to the customer. The defendant believed that the clock was correct and did not realize that the previous day the state had changed from standard time to daylight saving time. In fact, the correct time was five minutes past midnight.",
        q: "If the defendant is charged with attempting to violate the statute, he should be found",
        opts: [
            "guilty, because he sold liquor between midnight and 8 A.M.",
            "guilty, if he should have known the actual time.",
            "not guilty, unless the statute did not require specific intent.",
            "not guilty, because he believed that the time was five minutes past eleven."
        ],
        ans: 3,
        exp: "A person is guilty of a criminal attempt when, with the specific intent to bring about a result that is criminally prohibited, he or she comes substantially close to accomplishing that result. Since the defendant believed that the time was five minutes past eleven, and since it would have been lawful to sell liquor at that time, he did not have the specific intent to bring about a result that was criminally prohibited. For this reason, he could not be guilty of attempting to violate the statute.\n\nA and B are therefore incorrect. Attempt always requires specific intent, even where the substantive crime does not. Thus, even if the statute did not require specific intent, the defendant could not be guilty of attempting to violate it without specifically intending to sell liquor after midnight. C is therefore incorrect."
    },
    {
        id: 14,
        topic: "Property Crimes / Larceny (Claim of Right)",
        fp: "The victim borrowed $50 and a watch worth an additional $50 from the defendant. Although the defendant repeatedly requested that the victim return the watch and the money, the victim refused to do so. The defendant and the victim belonged to the same exercise club. One day, while the victim was in the shower, the defendant opened the victim's locker and took $100 from the victim's wallet, returning the wallet to the locker. It was the defendant's intention to keep $50 of the money to pay himself back for the money he had loaned the victim and to keep the other $50 to pay himself for the watch that the victim had refused to return. A statute in the jurisdiction adopts the common law definition of larceny and provides that a larceny of $50 or less is a misdemeanor, while a larceny of more than $50 is a felony.",
        q: "The defendant is guilty of",
        opts: [
            "one misdemeanor only.",
            "two misdemeanors only.",
            "a felony.",
            "no crime."
        ],
        ans: 0,
        exp: "At common law, larceny is defined as a trespassory taking and carrying off of personal property known to be another's with the intent to permanently deprive the owner thereof. A person who is reclaiming his or her own property is not committing larceny since he or she is not carrying off the property of another. Thus, the defendant's taking of $50 to pay himself back for the money that the victim owed him was not a larceny. Except in the case of fungible goods, however, this rule does not protect a defendant who takes something that is not his or her own, even though it is equivalent in value to the property that he or she seeks to reclaim. Thus, the defendant's taking of $50 cash to pay himself for the watch that the victim refused to return is a larceny.\n\nSince the statute provides that a larceny of $50 or less is a misdemeanor, A is correct, and B, C, and D are incorrect."
    },
    {
        id: 15,
        topic: "Homicide / Voluntary Manslaughter",
        fp: "In which of the following cases is a charge of murder most likely to be reduced to a charge of voluntary manslaughter?",
        q: "In which of the following cases is a charge of murder most likely to be reduced to a charge of voluntary manslaughter?",
        opts: [
            "People in a neighboring apartment were having a noisy party. Intending to frighten them so that they would stop making so much noise, the defendant knocked on the door of the apartment where the party was being held and, when the door was opened, fired a pistol into the room. The defendant did not intend to strike anyone, but the bullet struck a person, killing her.",
            "After repairing the transmission of his automobile, the defendant drove the automobile on a street in a residential neighborhood at a speed of 110 miles per hour to test the transmission. The vehicle struck a child, killing him.",
            "After learning that the victim had raped the defendant's daughter, the defendant shot the victim with the intention of killing him. The victim died as a result of the bullet wound.",
            "After stealing a car, the defendant robbed a bank and was driving the stolen car away from the robbery in a reasonable manner when he collided with a pedestrian who was jaywalking. The pedestrian was killed by the impact."
        ],
        ans: 2,
        exp: "A defendant is guilty of voluntary manslaughter when, with the intent to kill or cause great bodily harm, the defendant causes the death of a human being under circumstances of extreme emotional distress or mistaken justification. Many cases have held that the emotional distress that results from learning that a close relative has been raped or otherwise injured is sufficiently extreme to justify the reduction of a charge of murder to a charge of voluntary manslaughter where the defendant kills the rapist. Although it is not certain that a court would reduce it, C is the only fact pattern listed in which the murder charge could possibly be reduced to voluntary manslaughter.\n\nSince the defendants in A, B, and D did not have the intent to kill or inflict great bodily harm, the defendants in these cases could not have committed voluntary manslaughter. A, B, and D are therefore incorrect."
    },
    {
        id: 16,
        topic: "Inchoate Crimes / Conspiracy & Attempt",
        fp: "Joe, the defendant, and Bob met while in prison and decided that when they were released, they would rob a bank together. Soon after their release, they planned the robbery, agreeing that the defendant would steal and drive the getaway car and that Joe and Bob would commit the actual robbery. The defendant stole a car for the robbery and brought it to Joe's house, but the day before the robbery was to be committed, the defendant was arrested for violating the conditions of his parole and was returned to prison. The following day, Joe and Bob went ahead with the plan, entering the bank and threatening to shoot the cashiers if they did not hand over all available cash. A teller pushed a button that alerted the police, and Joe and Bob were arrested before leaving the bank.",
        q: "Of which of the following crimes is the defendant guilty?",
        opts: [
            "Attempted robbery.",
            "Conspiracy to commit robbery.",
            "Attempted robbery and conspiracy to commit robbery.",
            "No crime."
        ],
        ans: 2,
        exp: "A criminal conspiracy is an agreement to commit a crime and is complete when the agreement is made. Since the defendant agreed to commit a robbery with Joe and Bob, he is guilty of conspiracy. A person is guilty of a criminal attempt when, with the specific intent to bring about a result that is criminally prohibited, he comes substantially close to bringing about that result. Since Joe and Bob intended to rob the bank and came substantially close to doing so, they are guilty of attempted robbery. Co-conspirators are vicariously liable for crimes committed in furtherance of the agreement. Since the attempted robbery was committed in furtherance of the agreement between Joe, the defendant, and Bob, the defendant is criminally liable for the attempt even though he did not physically participate in it."
    },
    {
        id: 17,
        topic: "Crimes against Person / Statutory Rape",
        fp: "The defendant met a girl in a bar where both were drinking. Because the defendant was too drunk to drive, the girl offered him a ride home. In the girl's car, the girl consented to intercourse. A statute provided that it was unlawful to engage in sexual intercourse with a female under the age of 18 years, and the girl was 17 years old.",
        q: "If the defendant believed that the girl was over the age of 18 years, is he guilty of statutory rape?",
        opts: [
            "No, because he believed the girl to be over the age of 18 years.",
            "No, if the reasonable person who was not intoxicated would have believed the girl to be over the age of 18 years.",
            "Yes, unless the girl assured him that she was over the age of 18 years.",
            "Yes, but only if the defendant realized that he was having intercourse."
        ],
        ans: 3,
        exp: "Some courts say that statutory rape is a strict liability crime, requiring no intent at all; other courts say that it is a general intent crime requiring only the intent to have sexual intercourse. Under either view, this means that a defendant who has sexual intercourse with a female who is too young to consent is guilty if he was aware that he was engaging in intercourse. This is so even though he did not know that she was underage, even though the reasonable person would not have known it, and even though she told him that she was over the age of consent.\n\nA, B, and C are therefore incorrect."
    },
    {
        id: 18,
        topic: "Inchoate Crimes / Conspiracy (Legal Impossibility)",
        fp: "One day, when Allen's parents were away, Allen, Beth, and Chris, who were students at the same high school, cut class to go to Allen's home and watch movies. Allen was 17 years of age; Beth and Chris were each 15. Allen and Beth knew that Chris was very shy. Since Beth had engaged in sexual relations with several other boys at the high school, she and Allen secretly agreed that Beth would try to seduce Chris. Beth had some marijuana in her purse, and she and Chris smoked some of it. When Chris was high, Beth undressed him and attempted to have sexual intercourse with him. Although at first Chris was unwilling to have intercourse while Allen was in the room, Beth gave him more marijuana to smoke until he became so intoxicated that he was willing to try. By then, however, his intoxication made him physically unable to perform. Instead, Beth had intercourse with Allen while Chris watched. Chris knew the ages of Allen and Beth. Chris knew that it was unlawful to have intercourse with a female under the age of 16. Allen believed that it was lawful to have intercourse with a female over the age of 14.\n\nA statute in the jurisdiction provides that \"A person is guilty of rape in the third degree when, being 17 years of age or more, he or she engages in sexual intercourse with a person under the age of 16 years.\"\n\nLaws in the state define a conspiracy as \"An agreement to commit a crime between two or more persons with the specific intent to commit a crime.\"",
        q: "If Allen is charged with conspiracy based on his agreement with Beth regarding the seduction of Chris, Allen's most effective argument in defense would be that",
        opts: [
            "the seduction of Chris would not have been possible without Beth's participation.",
            "Allen did not commit any overt act that was likely to accomplish the seduction of Chris.",
            "Beth was unsuccessful in having intercourse with Chris.",
            "intercourse between Beth and Chris would not have been a crime."
        ],
        ans: 3,
        exp: "Under the state's definition, conspiracy requires an agreement to commit a crime with the specific intent to commit a crime. If the act that Allen and Beth agreed to commit was not a crime, Allen lacked the specific intent required. Since neither the common law nor the statute given prohibit sexual intercourse between persons of Chris's and Beth's ages, intercourse between them would not have been a crime, and therefore the agreement between Allen and Beth was not a conspiracy.\n\nFor certain crimes, Wharton's Rule provides that there can be no conviction for conspiracy unless one of the parties to the agreement was not logically essential to the commission of the act that they agreed to commit. A is incorrect, however, because although Beth's participation was essential to the seduction of Chris, Allen's participation was not. In addition, Wharton's Rule does not apply to statutory rape. Conspiracy is a separate crime and is committed when the conspiratorial agreement is made. Some jurisdictions also require that there have been an overt act in furtherance of the conspiracy. B is incorrect, however, because such an act need only be committed by one of the co-conspirators, and Beth's acts would suffice. Since the crime is committed when the agreement is made, the fact that the act that the parties agreed to commit never actually took place is not a defense. C is thus incorrect."
    },
    {
        id: 19,
        topic: "Inchoate Crimes / Attempted Bribery",
        fp: "A store owner wanted to erect a new storage building so that he could expand his business of selling diet food and health supplies. He was afraid, however, that the building department would not issue him a permit to begin construction. A building department clerk said that she would make a false entry in the official records to indicate that a permit had already been issued if the store owner would pay her $500. The store owner agreed and said that he would bring the money the following day. The next day, however, when the store owner went to the clerk's office with $500, he was told that she had been fired.\n\nA statute in the jurisdiction provides that \"Any person who shall give or accept a fee not authorized by law as consideration for the act of any public employee is guilty of bribery, a felony. Any person who shall offer to commit a bribery is guilty of bribery in the second degree, a felony.\"",
        q: "If the defendant is prosecuted for attempted bribery in the second degree, the court should find him",
        opts: [
            "not guilty, because bribery in the second degree is an attempt crime, and there can be no liability for attempting to attempt.",
            "not guilty, because it was the clerk who made the initial offer.",
            "not guilty, because the defendant committed bribery in the second degree when he agreed to pay the clerk for altering the records, and the attempt merged with that crime.",
            "guilty, because attempting to commit bribery in the second degree is a lesser offense included in that crime."
        ],
        ans: 3,
        exp: "A lesser included offense is an offense the elements of which are completely included among the elements of a more serious crime. Attempting to commit a crime is always a lesser included offense since its elements are always included among the elements of the completed crime. One who commits a crime is guilty of all lesser included offenses. Since the defendant offered to commit bribery, he is guilty of bribery in the second degree, and since the attempt is included in the completed crime, he is guilty of attempting to commit bribery in the second degree.\n\nA person is guilty of attempting to commit a crime when, with the specific intent to commit that crime, he or she comes substantially close to committing it. A is incorrect because bribery in the second degree is not an \"attempt\" crime. It is statutorily defined as offering to commit bribery and is committed when the offer is made. B is incorrect because although the clerk first offered to accept the money, the defendant's subsequent agreement was also an offer to pay the money. In addition, the defendant's trip to the clerk's office the following day was for the purpose of offering to pay the money. C is based on a misinterpretation of the law. A lesser included crime is said to \"merge\" with the more serious one, but this means only that a defendant cannot be convicted of both. There is no reason why he or she cannot be convicted of the lesser one only."
    },
    {
        id: 20,
        topic: "Inchoate Crimes / Attempted Murder (Specific Intent)",
        fp: "Angry because her coworker had insulted her, the defendant decided to get revenge. Because she worked for an exterminator, the defendant had access to cans of a poison gas called Killdoze that was often used to kill termites and other insects. She did not want to kill the coworker, so she carefully read the user manual supplied by the manufacturer. The manual said that Killdoze was not fatal to human beings, but that exposure to it could cause serious ailments, including blindness and permanent respiratory irritation. When she was sure that no one would see her, the defendant brought a can of Killdoze to the parking lot and released the poison gas into the coworker's car. At lunchtime, the coworker and his friend sat together in the coworker's car. As a result of their exposure to the Killdoze in the car, the friend died and the coworker became so ill that he was hospitalized for over a month.",
        q: "If the defendant is charged with the attempted murder of the coworker, she should be found",
        opts: [
            "guilty, because the coworker suffered a serious illness as the result of a criminal act that she performed with intent to cause him great bodily harm.",
            "guilty, because her intent to cause great bodily harm resulted in the death of the friend.",
            "not guilty, because she did not intend to cause the death of any person.",
            "not guilty, because the crime of attempted murder merges with the crime of murder."
        ],
        ans: 2,
        exp: "A person is guilty of a criminal attempt when, with the specific intent to bring about a prohibited result, he or she comes substantially close to doing so. Thus, all attempts are \"specific intent\" crimes. This means that although murder does not require a specific intent to cause the death of a person, attempted murder does. Since the defendant did not intend to cause the death of a human being, she lacks the intent required to make her guilty of attempted murder.\n\nA is therefore incorrect. The death of the friend does not satisfy the specific intent requirement unless the defendant intended to bring it about. For this reason, B is also incorrect. Although the attempt to murder a person may merge with the actual murder of the person, D is incorrect because the coworker did not die and so could not have been murdered."
    },
    {
        id: 21,
        topic: "Homicide / First Degree Murder (Mens Rea)",
        fp: "The defendant was addicted to heroin and frequently committed acts of prostitution to obtain the money she needed to buy drugs. One night, she was out looking for customers for prostitution when she was approached by a man who asked what her price was. When she told him that she would have intercourse with him for $20, he said that he would get the money from a friend and see her later. When the defendant went home several hours later, the man was waiting inside her apartment. He said that he wanted to have sex with her, but when the defendant repeated her demand for $20, he said that he had no money. She told him to get out or she would call the police. The man took a knife from his pocket, saying that if she did not have intercourse with him, he would kill her. Silently, the defendant took off her clothes and had intercourse with him.\n\nImmediately afterwards, the man fell asleep. The defendant tied his hands and feet to the four corners of the bed and woke him. She said, \"Now you are going to be punished for what you have done. I should kill you, but I won't because I want to make sure that you suffer for the rest of your life.\" Using his own knife, she began to cut and jab him with it, planning to torture but not to kill him. She stabbed and blinded him in both eyes, then cut off his sex organs. She also severed the tip of his nose and made a series of cuts across his face and chest.\n\nThe man died as a result of the injuries inflicted by the defendant. She was charged with first degree murder in a jurisdiction that defines that crime as \"the unlawful killing of a human being committed intentionally, with deliberation and premeditation.\"",
        q: "The court should find the defendant",
        opts: [
            "not guilty, because the defendant did not intend to cause the man's death.",
            "not guilty, because the defendant was acting in self-defense.",
            "guilty, because the man's death resulted from the defendant's commission of a dangerous felony.",
            "guilty, because the man's death resulted from torture."
        ],
        ans: 0,
        exp: "Since the statute requires intent, and since the defendant did not intend the man's death, she is not guilty of first degree murder under the statute.\n\nB is incorrect because once the man was asleep (and certainly once he was tied to the bed), the defendant was no longer in danger and therefore not privileged to use force in self-defense. Although some first degree murder statutes include deaths resulting from the commission of dangerous felonies, this particular statute does not. C is therefore incorrect. Many first degree murder statutes include death resulting from torture, but this one does not. D is therefore incorrect."
    },
    {
        id: 22,
        topic: "Defenses / Self-Defense (Aggressor)",
        fp: "A thief deliberately bumped into the victim while trying to pick his pocket. The victim felt the thief's hand in his pocket and pushed him away. Then the victim pulled out a knife and lunged at the thief with it. The thief, who had studied martial arts, struck the victim in the throat with his clenched fist, killing him. The thief is charged with third degree murder under a statute that defines that crime as \"the killing of a human being committed with the intent to cause bodily harm.\"\n\nRead the summaries in the four cases (A-D) below.",
        q: "Which is most applicable as a precedent?",
        opts: [
            "The defendant was walking down the street when an intoxicated panhandler began to push and shove him. The defendant pointed a pistol at the panhandler with his finger on the trigger. When the panhandler pushed him again, the pistol went off, killing the panhandler. The defendant testified that he believed the pistol to be unloaded. Held: Not guilty of murder.",
            "When the defendant became rowdy in a bar, the bouncer asked him to leave. The defendant responded by punching the bouncer in the face. The bouncer grabbed the defendant's wrist, but the defendant picked up a wine bottle with his other hand and struck the bouncer over the head with it, killing him. Held: Guilty of voluntary manslaughter.",
            "As the defendant was leaving the high school where she worked, a student began chasing after her, waving a toy plastic baseball bat and threatening to hit her with it. She ran as fast as she could, but he ran after her. When she felt she could run no further, she took a pistol from her purse and shot him with it, injuring him. The defendant testified that she believed the baseball bat to be real. Held: Not guilty of battery.",
            "While he was walking her home, the defendant's date asked her to have sexual intercourse with him. Offended, the defendant slapped his face. When she raised her hand to slap him again, her date knocked her to the ground and began kicking her in the chest and head. As he continued kicking her, she struggled to her feet and struck him in the head with a rock, killing him with one blow. Held: Not guilty of voluntary manslaughter."
        ],
        ans: 3,
        exp: "Although the privilege of self-defense may justify the use of force against one who threatens the defendant with imminent bodily harm, it does not justify the use of force if the harm threatened was a reasonable response to the defendant's own unprivileged aggression. Since the thief first made unprivileged contact with the victim, the issue is whether the victim's response was excessive and, if so, whether the force used by the thief was a reasonable response to it. The same issues are resolved in B and D, but since the bouncer's response to the defendant's punch in B was obviously not excessive, D is a better choice.\n\nA and C are inapplicable since they do not involve force used by the victim in response to initial aggression by the defendant."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = examData;
}
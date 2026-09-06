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
        exp: "'Specific intent' crimes are those that require a state of mind amounting to a desire or knowledge by the defendant that his or her conduct will result in a consequence that is criminally proscribed. 'General intent' crimes are those for which conviction may be based on recklessness or criminal negligence. Voluntary intoxication may provide a defense to crimes requiring specific intent since it may prevent its formation. Awareness of the effect that alcohol is likely to have on the capacity to assess risks, however, prevents voluntary intoxication from serving as a defense to crimes involving general intent. Since rape may consist of recklessly having intercourse without the victim's consent, it is a general intent crime, and voluntary intoxication is not a defense to it.\n\nInvoluntary intoxication, on the other hand, may be a defense to crimes involving recklessness, as well as to specific intent crimes. The defendant's assertion in B might therefore provide her with an effective defense. Since attempted robbery requires the specific intent to commit a larceny by force or threat of force, the defendant's intoxication in C may have prevented her from having the intent required and may thus provide her with an effective defense. In D, the defendant's assertion is that he lacked the intent to deprive the rightful owner of possession of the automobile. Since this specific intent is an essential element of larceny, his intoxication may provide him with an effective defense."
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
        exp: "Receiving stolen property consists of the acquisition of stolen property with the knowledge that it has been stolen and with the intent to permanently deprive its owner of it. Acquisition occurs when the defendant takes possession of the property himself or herself, or when he or she directs that possession be delivered to another. Thus, although the defendant did not personally take possession of the car that the man stole, he received it when he directed that it be delivered to his brother.\n\nIn A, the car that the defendant received had already been recovered by the police and was therefore not stolen at the time of the sale. In C and D, there is no indication that the cars sold to the defendant ever had been stolen. A, C, and D are therefore incorrect."
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
        exp: "Murder requires malice. While there is no indication that the neighbor intended to kill the man, he did throw a big glass shard at him in anger. As such, the neighbor's actions could be construed as an attempt to kill or inflict serious bodily injury. Because of this, the neighbor could be convicted for murder.\n\nB and C are incorrect because voluntary manslaughter occurs when an intentional killing is done in the heat of passion or anger. Here, the killing occurred by accident and the neighbor was only annoyed. This would take the killing out of the definition of voluntary manslaughter. D is incorrect because the neighbor acted with malice by throwing a big shard of glass at the man. As such, murder is the appropriate charge."
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
        exp: "In the majority of states, if a defendant made an unreasonable mistake as to the need for force in self-defense, the defendant's crime can be reduced from murder to voluntary manslaughter even though such a claim does not completely excuse a defendant's actions. This is referred to as a claim of 'imperfect' self-defense. Here, the question states that the defendant honestly but unreasonably believed that he needed to use deadly force to protect himself from the victim's laser gun. Given the circumstances of the victim's job, the defendant's intoxication, and the particulars of the cellphone, such a belief could be honest yet unreasonable. Importantly, the question tells you to assume that the court believes the defendant's version of events, whether or not you believe the defendant's belief to be ridiculous.\n\nA is incorrect because self-defense requires a reasonable belief as to the need for force. Here, the question states that the defendant's belief was unreasonable. B is incorrect because the defendant's unreasonable belief will have an effect on his case. D is incorrect because depraved heart murder has to do with situations where a defendant acted with such great recklessness that he or she can be said to have extreme indifference to the value of human life. In these situations, the defendant is not necessarily intending to kill anyone, but is acting in such a way as to make someone's death likely."
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
        exp: "When the words deliberate and premeditated appear in a murder statute, deliberate means that the defendant was possessed of a cool mind capable of reflection, and premeditated means that the defendant actually did reflect on his or her act before committing it. Since the psychiatrist's testimony indicates that the defendant may have been incapable of cool reflection at the time of his act, it may be admitted for the purpose of showing that the killing was not deliberate and premeditated.\n\nA is incorrect because under the M'Naghten test, a defendant is insane only if mental disease made him or her incapable of knowing the nature and quality of his or her act, or that it was wrong. C is incorrect because the testimony may be admitted to establish lack of deliberation and premeditation, even though it does not establish that the defendant was insane. An intentional killing may be reduced from murder to voluntary manslaughter if the defendant was acting in the heat of passion caused by sufficient provocation. For this purpose, the provocation and defendant's response to it are usually judged by an objective standard. D is incorrect, however, because, as explained above, psychiatric evidence of the defendant's state of mind may be relevant to the elements of deliberation and premeditation."
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
        exp: "A conspiracy is an agreement to commit a crime. Conspirators are vicariously liable for crimes committed in furtherance of the conspiratorial goal by other members of the conspiracy. This is so even if those crimes were unforeseeable, not included in the original plan, or unnecessary to the success of the conspiracy, so long as they were committed in furtherance of the conspiratorial goal. Since the roommate transported the car across a state line for the purpose of aiding their escape, it was in furtherance of the conspiratorial goal. A, B, and C are therefore incorrect."
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
        exp: "The crime of receiving stolen property is committed when the defendant receives stolen property with the knowledge that it is stolen and with the intent to permanently deprive the owner of it. Since the car that the defendant purchased was in the lawful custody of the police, it could be argued that it was no longer stolen. Although it is not certain that this argument would succeed, it is the only one listed that could possibly be effective in the defendant's defense. B is therefore correct.\n\nSince the police are supposed to prevent crime rather than instigate it, many jurisdictions hold that a defendant who was induced by the police or an agent of the police to commit a crime that he or she was not otherwise disposed to commit is entrapped and has a valid affirmative defense to the crime charged. A is incorrect, however, because the defendant came looking for a stolen car and was therefore already disposed to commit the crime with which he was charged. Ordinarily, a defense may not be based on the assertion of another's rights. If the man's cooperation was coerced, the man's rights may have been violated. C is incorrect, however, because the defendant may not base his defense on the invasion of the man's rights. D is incorrect because no right of the defendant's was bargained away."
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
        exp: "Murder is the unjustified killing of a human being with malice aforethought. Malice aforethought means a wanton disregard for human life, or an intent to kill, inflict great bodily harm, commit a felony, or resist a lawful arrest. Since it is clear that the defendant did not intend to commit a felony, to resist a lawful arrest, or to strike anyone with the bullet, she can be found guilty of murder only if her conduct showed a wanton disregard for human life. Thus, if she is acquitted, it can only be because the court found that her conduct did not show a wanton disregard.\n\nA is incorrect because malice aforethought may exist without an intent to kill. Since any result may have many proximate causes, the fact that the ambulance driver's conduct was a proximate cause of the victim's death does not establish that the defendant's conduct was not also a proximate cause of that death. B is therefore incorrect. The privilege to abate a nuisance permits the use of reasonable force only. Although the conduct of the defendant's neighbors may have constituted a nuisance, it is obvious that the use of a deadly weapon was not a reasonable response to it. C is therefore incorrect."
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
        exp: "A person is privileged to use reasonable force to protect himself or herself from what he or she reasonably believes to be a threat of imminent bodily harm. Potentially lethal force is reasonable when used in response to what the defendant reasonably perceives to be a threat of potentially lethal force. Thus, if the defendant reasonably believed that the victim was reaching for a gun, her use of a gun in response may have been reasonable and therefore privileged. While it is not certain that a court would come to this conclusion, the argument in C is the only one listed that could possibly provide the defendant with an effective defense.\n\nA person is guilty of a criminal attempt when, with the intent to bring about a criminally prohibited result, he or she comes substantially close to achieving it. A is incorrect because the fact that a death did not actually occur will not prevent a conviction for attempting to cause one. If the defendant had the intent to kill the victim when she aimed her pistol at the victim's chest, she would be guilty of attempted murder if she came subsequently close to causing the victim's death. This might be so even if she did not strike the victim in the chest, or even if she did not strike the victim at all. For this reason, B is incorrect. D is incorrect because deadly force is force that is likely to result in death or great bodily harm. The use of a pistol thus constitutes deadly force even though the harm that it actually causes happens to be slight."
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
        exp: "Murder is the unjustified killing of a human being with malice aforethought. In addition to reckless disregard for human life, and the intent to kill, to cause great bodily harm, or to resist a lawful arrest, malice aforethought includes the intent to commit a dangerous felony. Since arson is a dangerous felony, D is correct.\n\nA is incorrect because malice aforethought may exist even though the defendants did not intend to kill. Some jurisdictions have held that the felony-murder rule cannot be applied unless the deaths were totally independent of the defendants' purpose in committing a felony. B is a misstatement of this rule and is therefore incorrect. C is incorrect because unreasonable conduct is not sufficient to constitute malice aforethought."
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
        exp: "Kidnapping consists of intentionally transporting and confining a person against that person's will by force or threat and without legal authority. The essential difference between kidnapping and criminal false imprisonment is the requirement of asportation: Unless the defendant has moved the victim to the place of confinement, there is no kidnapping. Since the defendant forced the hostage to accompany him to his car, where he confined her for a period of 15 minutes, he has kidnapped her. Because he did not move any of the other victims to the place of their confinement, he did not kidnap them.\n\nA, C, and D are therefore incorrect."
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
        exp: "A defendant is guilty of criminally receiving stolen property when he or she acquires stolen personal property with knowledge that it is stolen and with the intent to permanently deprive its owner. Since the car that the defendant purchased from the other officer had been requisitioned from the police department, it was not stolen property. Since the defendant never received stolen property, he cannot be guilty of this crime.\n\nB is incorrect because guilt does not require that the defendant pay for stolen property with his own money (or that he pay for it at all). Police officers are supposed to prevent crime, not to cause it. For this reason, many jurisdictions hold that a defendant who was entrapped (i.e., induced by a police officer to commit a crime that he or she was not otherwise inclined to commit), cannot be convicted of committing it. The officers did not entrap the defendant because the defendant indicated his inclination to purchase a stolen car before either officer suggested that he do so. C is therefore incorrect. A search or arrest warrant may not be issued without a showing of probable cause, but no such showing is required before beginning an investigation. For this reason, D is incorrect."
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
        exp: "Arson is the intentional or malicious burning of the dwelling of another. Since even the slightest charring of the walls or ceiling is regarded as a burning, there was a burning of the boyfriend's dwelling. Since malice includes recklessness, and since it was clearly reckless to set fire to a couch while it was inside the house, the necessary state of mind is present. The defendant is therefore guilty of arson.\n\nBurglary is the trespassory breaking and entering of the dwelling of another at night with the intent to commit a larceny or any felony therein. The defendant entered the boyfriend's dwelling at night. The unauthorized opening of a closed door can constitute a breaking, and any unauthorized entry is trespassory. Although the defendant did commit a felony inside (i.e., arson), she cannot be guilty of burglary unless she intended to do so when she entered. Since at the time the defendant entered the boyfriend's house, she meant only to retrieve her own property, she did not have the requisite intent to make her guilty of burglary. A and C are therefore incorrect. D is incorrect because the defendant is guilty of arson as explained above."
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
        exp: "Under the 'irresistible impulse' test, a person is not guilty by reason of insanity if mental disease made him or her incapable of controlling his or her conduct at the time of the alleged criminal act. Although not all jurisdictions accept this definition of insanity, under the facts given, C is the only argument listed that would serve as an effective defense in any jurisdiction.\n\nThe M'Naghten rule provides that a person is not guilty by reason of insanity if, at the time of the allegedly criminal act, mental disease prevented him or her from knowing either the nature and quality of his or her act or that it was wrong. A defendant is said to know that his or her act is 'wrong,' however, if he or she is aware that it is prohibited by law. Since the defendant knew that if he was caught, he would be imprisoned for murder, he had sufficient understanding that his act was wrong to make him sane under this rule. A is therefore incorrect. The concept of 'intent' relates to the defendant's state of mind regarding the immediate consequences of his or her act, quite apart from the concept of 'motive,' which refers to a defendant's purpose in bringing that consequence about. Since the defendant desired to kill the victim, he had the necessary intent to make him guilty of murder, in spite of his noble motive (i.e., to save the world). B is therefore incorrect. A person who, by reason of mental illness, is incapable of understanding the nature and quality of his or her act is insane under the M'Naghten rule discussed above. The phrase nature and quality of the act, however, refers to the physical character of the act and to its physical consequences. Since the defendant understood that he was pushing the victim down the stairs and that this could result in her death, he did understand the nature and quality of his act. D is therefore incorrect."
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
        exp: "A person is guilty of a criminal attempt when, with the specific intent to bring about a criminally prohibited result, he or she comes substantially close to bringing about that result. Thus, while certain crimes may be committed without intending the prohibited consequences, criminal attempt always requires the specific intent to bring about the prohibited result. Although the employee could be convicted of violating the statute if he actually sold ammunition to the teenager, he could not be convicted of attempting to violate the statute unless he knew that the teenager was under the age of 16 and intended to sell her the ammunition.\n\nFor obvious practical reasons, there is usually an irrebuttable presumption that all persons know the law. Ignorance of the law, therefore, would not provide the employee with a defense. A is therefore incorrect. The fact that the owner is vicariously liable under the statute would not furnish the employee with a defense since the statute imposes liability on both employee and employer. C is incorrect for this reason, and because the statute imposes vicarious liability on the employer only if the employee actually makes a sale, which the employee did not do. D is incorrect because the statute does not make knowledge or experience an element of guilt."
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
        exp: "Criminal battery consists of the intentional, reckless, or criminally negligent application of force to the body of another. Since it is thus a general intent crime, it may be committed without the intent to make contact with the victim. While voluntary intoxication is no defense to a general intent crime, involuntary intoxication ordinarily is. A person has become involuntarily intoxicated when his or her intoxication was the result of an unpredictable and grossly excessive reaction to an intoxicating substance. Thus, if the defendant had never before been overcome by the alcohol in one drink, it may be that his intoxication was involuntary and that it will provide him with a defense to the charge of criminal battery. It is not certain that this defense would be successful, since a court might find that although the response was unpredictable, it was not grossly excessive. The fact set forth in D, however, is the only one listed that might possibly provide the defendant with an effective defense.\n\nA person may become 'voluntarily' intoxicated even without the intent to become drunk so long as he or she is aware that the substance that he or she is taking has an intoxicating potential. Since the defendant was aware that the drink had some alcohol in it, his intoxication may be called voluntary even if he did not intend to become drunk. A is therefore incorrect. If the defendant's conduct in drinking the drink was reckless or criminally negligent, he could have the necessary mens rea to be guilty of battery (i.e., general intent), even though he did not specifically know what risk he was creating (i.e., that he would fall off the bar stool). B is therefore incorrect. C is incorrect because battery is a general intent crime, and therefore it does not require the intent to make contact with another human being."
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
        exp: "A person is privileged by self-defense to use reasonable force to protect himself or herself against what reasonably appears to be an imminent threat of bodily harm. In this connection, reasonable force is the force that would appear necessary to the reasonable person. Even deadly force is reasonable if the person using it reasonably believes that he or she is being threatened with deadly force. Thus, since the defendant reasonably believed that his life was in danger, the force that he used in self-defense was probably reasonable, making the defendant not guilty of attempted murder.\n\nAlthough deadly force is not ordinarily considered reasonable in defense of mere property, B is incorrect because the defendant's shot was probably fired in response to a threat against his person and may have been justified by self-defense. Although the intent to kill or inflict serious injury can be inferred from the fact that the defendant fired at the officer, C is incorrect because, if reasonable, his conduct was privileged by self-defense. Since the defendant had no way of knowing that the person threatening him was a police officer, the officer's status as such can have no bearing on the reasonableness of the defendant's actions. D is therefore incorrect."
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
        exp: "One who intentionally aids, abets, or facilitates the commission of a crime is criminally responsible for the crime as an accomplice. In addition, an accomplice is criminally responsible for all the foreseeable consequences of the crime that he or she facilitated. Since the use of the defendant's apartment to escape detection was part of the bank robber's plan in preparing for the robbery, the defendant's agreement to permit the bank robber to use it facilitated the robbery, making the defendant an accomplice to it. As such, the defendant may be guilty of felony murder in the death that resulted from the robbery, but only if it was foreseeable that such a death would occur.\n\nOne who becomes an accessory after a crime has been committed (i.e., accessory after the fact) by knowingly harboring the person who committed it is not criminally responsible for prior acts committed by the person harbored. A person who facilitates the commission of a crime by agreeing in advance that he or she will harbor the perpetrator after the crime is committed is guilty as an accomplice (i.e., accessory before the fact), however. As such, he or she is criminally responsible for all foreseeable consequences of the crime to which he or she was an accomplice. A is therefore incorrect. Since an accomplice is criminally responsible for those consequences that were foreseeable, the fact that the defendant did not actually know that the bank robber would use a gun does not protect him from liability if the bank robber's use of a gun was foreseeable. B is therefore incorrect. A conspirator is criminally responsible for all crimes committed by co-conspirators in furtherance of the subject of the conspiracy. D is incorrect, however, because an accessory is criminally responsible only for consequences that were foreseeable."
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
        exp: "A person is guilty of a criminal attempt when, with the specific intent to bring about a result that is criminally prohibited, he or she comes substantially close to accomplishing that result. Since the defendant believed that the time was five minutes past eleven, and since it would have been lawful to sell liquor at that time, he did not have the specific intent to bring about a result that was criminally prohibited. For this reason, he could not be guilty of attempting to violate the statute.\n\nA and B are therefore incorrect. Attempt always requires specific intent, even where the substantive crime does not. Thus, even if the statute did not require specific intent, the defendant could not be guilty of attempting to violate it without specifically intending to sell liquor after midnight. C is therefore incorrect."
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
        exp: "At common law, larceny is defined as a trespassory taking and carrying off of personal property known to be another's with the intent to permanently deprive the owner thereof. A person who is reclaiming his or her own property is not committing larceny since he or she is not carrying off the property of another. Thus, the defendant's taking of $50 to pay himself back for the money that the victim owed him was not a larceny. Except in the case of fungible goods, however, this rule does not protect a defendant who takes something that is not his or her own, even though it is equivalent in value to the property that he or she seeks to reclaim. Thus, the defendant's taking of $50 cash to pay himself for the watch that the victim refused to return is a larceny.\n\nSince the statute provides that a larceny of $50 or less is a misdemeanor, A is correct, and B, C, and D are incorrect."
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
        exp: "A person has to be the 'cause-in-fact' of a death in order to be convicted for it. The mistress is not a 'but-for' cause-in-fact of the wife's death since the wife would have died anyway from the poison. However, a person can meet the cause-in-fact requirement if he or she is a 'substantial factor' in causing the death. Here, the mistress's actions significantly sped up the death, so she was a substantial factor in causing the death. Consequently, she would fulfill the cause-in-fact requirement and could be found guilty of the murder. Therefore, C and D are incorrect. B is irrelevant because the fact that the mistress was in the house unlawfully does not change the analysis."
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
        exp: "A criminal conspiracy is an agreement to commit a crime and is complete when the agreement is made. Since the defendant agreed to commit a robbery with the two other men, he is guilty of conspiracy. A person is guilty of a criminal attempt when, with the specific intent to bring about a result that is criminally prohibited, he comes substantially close to bringing about that result. Since the two other men intended to rob the bank and came substantially close to doing so, they are guilty of attempted robbery. Co-conspirators are vicariously liable for crimes committed in furtherance of the agreement. Since the attempted robbery was committed in furtherance of the agreement between the defendant and the two other men, the defendant is criminally liable for the attempt even though he did not physically participate in it."
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
        exp: "Under the state's definition, conspiracy requires an agreement to commit a crime with the specific intent to commit a crime. If the act that the first boy and the girl agreed to commit was not a crime, the first boy lacked the specific intent required. Since neither the common law nor the statute prohibits sexual intercourse between persons of the second boy's and the girl's ages, intercourse between them would not have been a crime, and therefore the agreement between the first boy and the girl was not a conspiracy.\n\nFor certain crimes, Wharton's Rule provides that there can be no conviction for conspiracy unless one of the parties to the agreement was not logically essential to the commission of the act that they agreed to commit. A is incorrect, however, because although the girl's participation was essential to the seduction of the second boy, the first boy's participation was not. In addition, Wharton's Rule does not apply to statutory rape. Conspiracy is a separate crime and is committed when the conspiratorial agreement is made. Some jurisdictions also require that there have been an overt act in furtherance of the conspiracy. B is incorrect, however, because such an act need only be committed by one of the co-conspirators, and the girl's acts would suffice. Since the crime is committed when the agreement is made, the fact that the act that the parties agreed to commit never actually took place is not a defense. C is thus incorrect."
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
        exp: "A lesser included offense is an offense the elements of which are completely included among the elements of a more serious crime. Attempting to commit a crime is always a lesser included offense since its elements are always included among the elements of the completed crime. One who commits a crime is guilty of all lesser included offenses. Since the defendant offered to commit bribery, he is guilty of bribery in the second degree, and since the attempt is included in the completed crime, he is guilty of attempting to commit bribery in the second degree.\n\nA person is guilty of attempting to commit a crime when, with the specific intent to commit that crime, he or she comes substantially close to committing it. A is incorrect because bribery in the second degree is not an 'attempt' crime. It is statutorily defined as offering to commit bribery and is committed when the offer is made. B is incorrect because although the clerk first offered to accept the money, the defendant's subsequent agreement was also an offer to pay the money. In addition, the defendant's trip to the clerk's office the following day was for the purpose of offering to pay the money. C is based on a misinterpretation of the law. A lesser included crime is said to 'merge' with the more serious one, but this means only that a defendant cannot be convicted of both. There is no reason why he or she cannot be convicted of the lesser one only."
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
        exp: "A person is guilty of a criminal attempt when, with the specific intent to bring about a prohibited result, he or she comes substantially close to doing so. Thus, all attempts are 'specific intent' crimes. This means that although murder does not require a specific intent to cause the death of a person, attempted murder does. Since the defendant did not intend to cause the death of a human being, she lacks the intent required to make her guilty of attempted murder.\n\nA is therefore incorrect. The death of the friend does not satisfy the specific intent requirement unless the defendant intended to bring it about. For this reason, B is also incorrect. Although the attempt to murder a person may merge with the actual murder of the person, D is incorrect because the coworker did not die and so could not have been murdered."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = examData;
}
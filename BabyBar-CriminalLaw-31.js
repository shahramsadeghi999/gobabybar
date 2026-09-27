// BabyBar-CriminalLaw-31.js
const examData = [
    {
        id: 1,
        topic: "Criminal Law",
        fp: "The defendant had lost her job and needed to make some money quickly. While visiting a local tavern, she ran into an old friend. When the defendant told the friend about her financial problems, the friend pointed to an expensive-looking coat that was hanging on a coat rack and said, \"Why don't you steal that coat? It looks like you should be able to sell it for at least $100.\" Because the defendant said that she was afraid the owner of the coat would see her, the friend agreed to sing in a loud voice to create a diversion so that the defendant could steal the coat while everyone was watching the friend. As soon as the friend began to sing, the defendant took the coat from the coat rack and ran from the tavern. In fact, the coat actually belonged to the friend, who had been joking when he told the defendant to steal it.",
        q: "Of which of the following crimes may the defendant be properly convicted?",
        opts: [
            "Larceny only.",
            "Conspiracy only.",
            "Larceny and conspiracy.",
            "Neither larceny nor conspiracy."
        ],
        ans: 3,
        exp: "Larceny is defined as a trespassory taking and carrying off of personal property known to be another's with the intent to permanently deprive the owner thereof. A taking is trespassory if it violates the rights of the owner. Since the coat was the friend's and since the friend told the defendant to take it, the taking did not violate the friend's rights and was therefore not trespassory. A and C are therefore incorrect.\n\nA criminal conspiracy is committed when two or more persons with the specific intent to commit a crime agree to commit that crime. Since the friend knew that the coat was his, he did not have the specific intent to commit a crime when he agreed to help the defendant take it. B and C are therefore incorrect."
    },
    {
        id: 2,
        topic: "Criminal Law",
        fp: "The defendant knew that his neighbor, the victim, had a weak heart and that the victim had suffered several heart attacks in the past. Because he was angry at the victim, the defendant decided to try to frighten him into another heart attack. He watched the victim's house, and when he saw the victim leaving through the front door, he ran toward him shouting, \"Look out! Look out! The sky is falling!\" Although the defendant was not sure that this would kill the victim, he hoped it would. When the victim saw the defendant running toward him shouting, he became frightened, had a heart attack, and died on the spot.\n\nThe jurisdiction has statutes that define first degree murder as \"the deliberate and premeditated killing of a human being,\" and second degree murder as \"any unlawful killing of a human being with malice aforethought, except for a killing that constitutes first degree murder.\" In addition, its statutes adopt common law definitions of voluntary and involuntary manslaughter.",
        q: "Which of the following is the most serious crime of which the defendant can properly be convicted?",
        opts: [
            "First degree murder.",
            "Second degree murder.",
            "Voluntary manslaughter.",
            "Involuntary manslaughter."
        ],
        ans: 0,
        exp: "A killing is intentional if the defendant desired or knew to a substantial degree of certainty that it would result from his or her act. A killing is deliberate and premeditated if the defendant was capable of reflecting upon it with a cool mind and did in fact do so. Since the defendant hoped for (i.e., desired) the victim's death, the killing was intentional. Since he reflected on it in advance with a cool mind, it was deliberate and premeditated.\n\nSince first degree murder is the most serious crime listed, B, C, and D are incorrect. Voluntary manslaughter is an intentional killing resulting from extreme emotional disturbance or in the mistaken belief that it is justified. C is also incorrect because there is no indication that the defendant was emotionally disturbed or mistakenly believed that his act was justified. Involuntary manslaughter is an unintended killing that results from criminal negligence. D is incorrect because the defendant intended the death of the victim."
    },
    {
        id: 3,
        topic: "Criminal Law",
        fp: "The defendant was having dinner in a restaurant with his employer, the victim, when the victim left the table to go to the restroom. As the victim walked away, the defendant noticed that the victim's wristwatch had fallen off his wrist onto the table. Since it looked like a rather valuable watch, the defendant decided to steal it. Picking up the watch, he put it into his pocket. A few moments later, he began to feel guilty about stealing from his employer, so when the victim returned to the table, the defendant handed him the watch and said, \"Here, you dropped this, and I put it into my pocket for safekeeping.\"",
        q: "Which is the most serious crime of which the defendant can be properly convicted?",
        opts: [
            "Larceny.",
            "Attempted larceny.",
            "Embezzlement.",
            "No crime."
        ],
        ans: 0,
        exp: "Larceny is defined as a trespassory taking and carrying off of personal property known to be another's with the intent to permanently deprive the owner thereof. A trespassory taking is an acquisition of possession contrary to the rights of the owner and without the owner's consent. Since the defendant acquired possession without the victim's permission, he committed a trespassory taking. A carrying off occurs when the defendant moves the property, even slightly, with the intention of exercising dominion over it. Since the defendant moved the watch from the table to his pocket with the intention of keeping it, he carried it off. Since he knew that the watch belonged to the victim and intended to keep it for himself, he had knowledge that the property was another's and intended to deprive the owner of it. He therefore committed a larceny, making A correct.\n\nA person is guilty of a criminal attempt when, with the specific intent to bring about a criminally prohibited result, he or she comes substantially close to bringing it about. Although the defendant is probably guilty of attempted larceny, B is incorrect because larceny is a more serious crime. Embezzlement is defined as a criminal conversion of personal property by one in lawful custody of that property. Employees who steal property from their employers while in custody of it because of the employment relationship may be guilty of embezzlement. C is incorrect, however, because the defendant did not come into possession of the watch as a result of his employment relationship with the victim. D is incorrect because the defendant is guilty of larceny for the reasons stated above."
    },
    {
        id: 4,
        topic: "Criminal Law",
        fp: "One day, when Edward's parents were away, Edward, Fanny, and Gerald, who were students at the same high school, cut class to go to Edward's home and listen to music. Edward was 17 years of age; Fanny and Gerald were each 15. Edward and Fanny knew that Gerald was very shy. Since Fanny had engaged in sexual relations with several other boys at the high school, she and Edward secretly agreed that Fanny would try to seduce Gerald. Fanny had some marijuana in her purse, and she and Gerald smoked some of it. When Gerald was high, Fanny undressed him and attempted to have sexual intercourse with him. Although at first Gerald was unwilling to have intercourse while Edward was in the room, Fanny gave him more marijuana to smoke until he became so intoxicated that he was willing to try. By then, however, his intoxication made him physically unable to perform. Instead, Fanny had intercourse with Edward while Gerald watched. A statute in the jurisdiction provides that, \"A person is guilty of rape in the third degree when, being 17 years of age or more, he or she engages in sexual intercourse with a person under the age of 16 years.\"",
        q: "If Fanny is charged with attempting to commit rape in the third degree as a result of her attempt to have intercourse with Gerald, she should be found",
        opts: [
            "guilty, because she overcame his resistance by the use of an intoxicating substance and would have completed the act of intercourse but for Gerald's physical inability to perform.",
            "guilty, because Gerald was under the legal age of consent.",
            "not guilty, because Fanny was under the age of 17.",
            "not guilty, because Fanny was a female."
        ],
        ans: 2,
        exp: "At common law, rape can be committed by using intoxicants to overcome the victim's resistance. Under the given statute, however, third degree rape is committed only when a person over the age of 17 has sexual intercourse with a person under the age of 16. Since Fanny was only 15, she cannot be guilty of committing it.\n\nA and B are therefore incorrect. D is incorrect because the statute specifically provides that the crime can be committed by a female."
    },
    {
        id: 5,
        topic: "Criminal Law",
        fp: "The defendant called her attorney and asked whether it would be a crime to burn down her own home. The attorney said that arson was defined as the intentional burning of any dwelling and that arson was a serious crime. In fact, the defendant's attorney was incorrect: The applicable statute in the jurisdiction defines arson as \"the intentional burning of the dwelling of another.\" Believing what the attorney told her, however, the defendant burned down her own home for the purpose of collecting the proceeds of her fire insurance policy. A statute in the jurisdiction defined the crime of insurance fraud as \"the intentional destruction of any property for the purpose of obtaining insurance proceeds.\"",
        q: "If the defendant is charged with attempted arson, she should be found",
        opts: [
            "guilty, because a mistake of fact does not prevent a person from being guilty of a criminal attempt.",
            "guilty, because her mistake of law resulted from reasonable reliance on the advice of an attorney.",
            "not guilty, because the defendant did not intend to burn the dwelling of another.",
            "not guilty, because the defendant's attempt is subsumed in the substantive crime of insurance fraud."
        ],
        ans: 2,
        exp: "A person is guilty of a criminal attempt when, with the specific intent to bring about a result that is criminally prohibited, he or she comes substantially close to bringing about that result. Since under the applicable statute, burning down one's own house is not arson, the result that the defendant specifically intended to bring about was not criminally prohibited by the arson statute. For this reason, the defendant could not be guilty of attempted arson. C is therefore correct.\n\nEven though it was factually impossible for a defendant to commit a particular crime, he or she may be convicted of attempt if the crime would have been committed had the facts been as the defendant thought them to be. For example, if the defendant burned her own house believing it to be the dwelling of another, she could be convicted of attempted arson. Thus, A is an accurate statement of the law. A is incorrect, however, because the defendant did not make a mistake of fact (i.e., she knew that the dwelling was her own). Since guilt for attempt requires the specific intent to accomplish a purpose that is criminally prohibited, a person cannot be guilty if what he or she intended to accomplish was not criminally prohibited. This is true even if he or she believes that it is criminally prohibited, no matter how that mistaken belief was formed. B is therefore incorrect. D is incorrect for two reasons: First, while a defendant cannot be convicted of both a substantive crime and an attempt to commit that substantive crime, he or she can be convicted of the attempt instead of the substantive crime, and second, the defendant is charged with attempted arson, not attempted insurance fraud."
    },
    {
        id: 6,
        topic: "Criminal Law",
        fp: "The defendant was charged with the attempted murder of the victim.",
        q: "If only one of the following facts or inferences were true, which would be most likely to result in an acquittal?",
        opts: [
            "The victim was already dead when the defendant shot him, although the defendant believed him to be alive.",
            "The victim was alive when the defendant shot him, although the defendant believed that the victim was already dead.",
            "The defendant's gun was unloaded when he aimed it at the victim and pulled the trigger, although the defendant believed it to be loaded.",
            "Intending to poison the victim, the defendant put a harmless substance into the victim's drink, although the defendant believed that the substance was lethal."
        ],
        ans: 1,
        exp: "A person is guilty of a criminal intent when, with the specific intent to bring about a criminally prohibited result, he or she comes substantially close to achieving that result. Thus, all attempts are \"specific intent\" crimes. This means that, although murder may be committed without the intent to kill, attempted murder may not. If the defendant believed that the victim was already dead, he could not have intended to kill him and so could not be guilty of attempted murder.\n\nA defendant with the specific intent to commit a particular crime may be guilty of attempting it even though accomplishing the intended result was factually impossible. A is incorrect because the defendant's intent to kill the victim could make him guilty of attempted murder even though the fact that the victim was already dead made murder factually impossible. C is incorrect because the defendant's belief that the gun was loaded could establish that he had the specific intent to kill the victim, even though the fact that the gun was unloaded made it factually impossible for him to accomplish the result that he intended. D is incorrect because the defendant's belief that the substance was a poison could help establish that he had the specific intent to kill the victim, even though the fact that the substance was harmless made it impossible for him to accomplish the intended result."
    },
    {
        id: 7,
        topic: "Criminal Law",
        fp: "On the defendant's birthday, his friend gave him a new television as a gift. The following day, when the defendant opened the box and began using the television, he noticed that there was no warranty document with it. The defendant phoned his friend and asked the friend for the missing warranty document. The friend said, \"I can't give it to you because the television was stolen.\" The defendant kept the television and continued using it.",
        q: "The defendant was guilty of",
        opts: [
            "receiving stolen property only.",
            "larceny only.",
            "receiving stolen property and larceny.",
            "no crime."
        ],
        ans: 3,
        exp: "The crime of receiving stolen property consists of acquiring stolen property with the knowledge that it was stolen and the intent to permanently deprive the owner thereof. Since the defendant did not know that the television was stolen when he acquired possession of it, he cannot be guilty of receiving stolen property. A and C are therefore incorrect.\n\nThe crime of larceny consists of the trespassory taking and carrying off of personal property known to be another's with the intent to permanently deprive the owner thereof. Since the defendant did not know that the television was the property of another when he took it (i.e., received it from his friend), he cannot be guilty of larceny. B and C are therefore incorrect."
    },
    {
        id: 8,
        topic: "Criminal Law",
        fp: "In which of the following fact situations is the defendant most likely to be convicted of the crime charged? Assume that the jurisdiction applies the common law definition of all crimes.",
        q: "In which of the following fact situations is the defendant most likely to be convicted of the crime charged?",
        opts: [
            "The defendant offered an acquaintance $1,000 to burn down the defendant's factory, but the acquaintance refused. The defendant was charged with solicitation to commit arson.",
            "The defendant deliberately burned down his home and collected the proceeds of his fire insurance policy. The defendant was charged with larceny by trick.",
            "The defendant deliberately burned down the victim's store because he wanted to put the victim out of business. The defendant was charged with arson.",
            "The defendant attempted to burn down his neighbor's house because he disliked his neighbor. He poured gasoline on the door of the house and threw a match onto it. The flames had just charred the door when it started to rain and the fire went out. The defendant was charged with arson."
        ],
        ans: 3,
        exp: "At common law, arson is defined as the intentional or malicious burning of the dwelling of another. Any burning that chars some actual part of the structure is sufficient to result in a conviction. Since the door was charred, there was sufficient burning to establish the defendant's guilt.\n\nAlthough modern statutes prohibit the acts described in A, B, and C, the question specifies that the jurisdiction applies common law definitions of all crimes. Since common law arson involves a burning of the dwelling of another, and since the structure that the defendant attempted to burn was not a dwelling and was his own, A is incorrect. At common law, larceny by trick is committed when the defendant defrauds another into parting with temporary possession of personal property. Since the insurance company gave the defendant title to rather than temporary possession of the policy proceeds, B is incorrect. Since the building that the defendant burned in C was not a dwelling, C is incorrect."
    },
    {
        id: 9,
        topic: "Criminal Law",
        fp: "Tom, John, and Sam were teenage boys staying at a summer camp. One evening, Vanney, a camp counselor, ordered Tom and John to go to bed immediately after dinner. Outside the dining hall, Tom and John decided to get even with Vanney. Having seen Vanney take medicine for an asthma condition, they agreed to kill Vanney by finding his medicine and throwing it away. Tom and John did not know whether Vanney would die without the medicine, but they both hoped that he would.\n\nSam, who disliked Vanney, overheard the conversation between Tom and John and hoped that their plan would succeed. He decided to help them without saying anything about it. Going into Vanney's room, Sam searched through Vanney's possessions until he found the medicine. Then he put it on a night table so that Tom and John would be sure to find it.\n\nAs Tom and John were walking toward Vanney's room, John decided not to go through with the plan. Because he was afraid that Tom would make fun of him for chickening out, he said nothing to Tom about his change of mind. Instead, saying that he needed to use the bathroom, he ran away. Tom went into Vanney's room by himself, found the medicine where Sam had left it on the night table, and threw the medicine away. Later that night, Vanney had an asthma attack and died because he was unable to find his medicine.\n\nA statute in the jurisdiction provides that persons the age of Tom, John, and Sam are adults for purposes of criminal liability.",
        q: "If Sam is charged with conspiracy, a court will probably find him",
        opts: [
            "guilty, because he knowingly aided and abetted in the commission of a crime.",
            "guilty, because he committed an overt act in furtherance of an agreement to throw away Vanney's medicine.",
            "not guilty, because he did not agree to commit any crime.",
            "not guilty, because John effectively withdrew from any conspiracy that existed."
        ],
        ans: 2,
        exp: "A criminal conspiracy is an agreement to commit a crime, and it is complete when two or more persons make such an agreement. Although Sam privately decided to assist Tom and John in the commission of a crime, he did not agree with them that he would do so. He is therefore not guilty of conspiracy, and C is correct.\n\nOne who knowingly aids and abets in the commission of a crime is guilty of that crime as an accessory. For this reason, Sam might be guilty of murder. A is incorrect, however, because Sam is charged not with murder but with conspiracy. Some jurisdictions hold that to convict for conspiracy, it is necessary to prove an overt act in addition to an agreement to commit a crime. Even in these jurisdictions, however, Sam would not be guilty of conspiracy because he did not agree to commit a crime. B is therefore incorrect. Co-conspirators are guilty of the crime of conspiracy when their agreement is made and are not rendered innocent by the withdrawal of one or more of them from the conspiracy. D is incorrect for this reason, and because Sam was never part of the conspiracy in the first place."
    },
    {
        id: 10,
        topic: "Criminal Law",
        fp: "As part of her campaign for reelection, the President of the United States was driving through the main street of a city in a car with a bubble-shaped roof made of bulletproof glass. Intending to shoot the President, the defendant crouched on the roof of a building and aimed a high-powered rifle at the glass top of his car. He fired three times, striking the glass with each bullet. None of the bullets penetrated the glass, and because of the noise of the cheering crowd, the President was unaware that any shots had been fired. A police officer observed the defendant firing at the President, however, and placed him under arrest. The defendant was subsequently charged with violating a federal statute that makes it a crime to attempt to assassinate the President, and he was acquitted in a federal court.",
        q: "If the defendant is prosecuted in the state court and charged with criminal assault under state law, a court should find him",
        opts: [
            "not guilty, because he has already been acquitted in the federal court.",
            "not guilty, because the President was unaware that shots had been fired.",
            "guilty, because the defendant intended to hit the President with the bullets.",
            "guilty, because the defendant's conduct would cause the reasonable person to be placed in fear of his or her life."
        ],
        ans: 2,
        exp: "There are two different forms of criminal assault - conduct that intentionally induces fear, and attempted battery. Criminal battery is the intentional or reckless application of force to the body of another. A person is guilty of a criminal attempt when, with the specific intent to bring about a criminally prohibited result, he or she comes substantially close to achieving that result. Since the defendant shot at the President with the intention of hitting him, he attempted a battery. Since he did not succeed, his crime was assault.\n\nA is incorrect because the crime of which he was acquitted in the federal court was not the same crime with which he is charged in the state court. It is generally held that the constitutional protection against double jeopardy is not offended by separate prosecutions for violating the laws of two different sovereigns (i.e., federal and state governments) even though both arise from the same act. Assault based on intentionally inducing fear requires that the victim was aware of the defendant's conduct, and that as a result, the victim experienced reasonable apprehension of contact. B and D are incorrect, however, because assault based on attempted battery requires no such awareness or apprehension."
    },
    {
        id: 11,
        topic: "Criminal Law",
        fp: "A man had just been released from prison after serving a three-year term for aggravated assault. In need of money, he called his old friend, the defendant, and asked whether the defendant would be interested in joining him in the robbery of a pawnshop. The defendant agreed, but only after making the man promise that there would be no violence. Upon the defendant's insistence, they carried realistic-looking toy guns, and when they entered the pawnshop, they drew their toy guns and ordered the store owner to give them all the money in his cash register and all the gems in his safe. The store owner took a gun from the safe and shot the man, killing him. The store owner then aimed the pistol at the defendant, who fled from the store. By statute, the jurisdiction has adopted the felony-murder rule.",
        q: "If the defendant is charged with the murder of the man, the defendant's most effective argument in defense is that",
        opts: [
            "the man was not a victim of the felony that resulted in his death.",
            "the store owner was justified in shooting the man.",
            "the use of toy guns made it unforeseeable that the robbery would result in the death of any person.",
            "the defendant lacked malice aforethought."
        ],
        ans: 1,
        exp: "Many jurisdictions hold that the defendant will not be guilty of the murder of a co-felon under the felony-murder rule if the co-felon's death resulted from a justifiable attempt by the victim to prevent the crime. Although this is not the law in all jurisdictions, it is the only argument listed that would provide the defendant with any defense at all.\n\nA is incorrect because the felony-murder rule is applied to deaths that occur during the commission of a felony, even though the person killed is not the intended victim. C is incorrect because the normal reactions of victims, bystanders, and police make violence a foreseeable result of any robbery. D is incorrect because jurisdictions that apply the felony-murder rule regard the intent to commit a felony as a form of malice aforethought."
    },
    {
        id: 12,
        topic: "Criminal Law",
        fp: "Although the defendant had been licensed to drive for 15 years, he allowed his license to expire while he was temporarily out of the country. When he returned, he meant to get it renewed or reinstated but did not get around to doing so. Although a statute made it a misdemeanor to drive without a license, the defendant continued to drive. One day, he accidentally dropped his cigarette while driving his car. He felt around for it while he drove, until his fingers encountered its glowing tip. Taking his eyes off the road for a moment to pick up the still-burning cigarette, he failed to see the victim, who stepped out from between parked cars. The defendant struck the victim, who died instantly.",
        q: "If the defendant is charged with homicide as a result of the victim's death, which of the following would be the prosecutor's most effective argument?",
        opts: [
            "The victim's death resulted from the defendant's commission of a dangerous misdemeanor.",
            "The defendant's violation of the statute that required a driver's license made him guilty of culpable negligence per se, since the statute was designed to protect users of public roads against unqualified drivers.",
            "While mere negligence is insufficient to sustain a murder charge, it is sufficient to sustain a charge of involuntary manslaughter where it results in death.",
            "The defendant created a high and unreasonable risk of death or serious injury when he took his eyes off the road while driving."
        ],
        ans: 3,
        exp: "Involuntary manslaughter is an unintended killing that results from conduct that created a high and unreasonable risk of death or serious injury, or from the commission of a malum in se misdemeanor. If the defendant's conduct created such risk, he could thus be guilty of involuntary manslaughter. While it is not certain that a court would come to this conclusion, D is the only argument listed that could possibly support the prosecution.\n\nThe unlawful act doctrine (also called the misdemeanor-manslaughter rule) might make a death resulting from the commission of a misdemeanor involuntary manslaughter, but only if the misdemeanor involved is inherently dangerous or malum in se. Since driving without a license is neither, A is incorrect. B is incorrect because it is based on a perversion of a rule of tort law that provides that the violation of a statute that was designed to protect a class of persons to which the plaintiff belongs from the risk that resulted in harm may be described as negligence per se. There is no counterpart in the criminal law, however. C is not an accurate statement since mere negligence will not result in a criminal conviction."
    },
    {
        id: 13,
        topic: "Criminal Law",
        fp: "A lifeguard worked from 5 P.M. to 10 P.M. every night at a public swimming pool operated by the city. When she arrived at work Wednesday evening, she asked her supervisor whether she could leave early because she had a date. Since there were only a few people at the pool, the supervisor said that the lifeguard could leave at 8 P.M. At 8 P.M., the lifeguard told the supervisor she was going and left, although the pool had become quite crowded with adults and young children. At 9 P.M., a nine-year-old girl fell into the pool, striking her head against its edge. One of the adults swimming in the pool saw the girl fall and realized that the child would drown if someone did not rescue her. The adult had seen the lifeguard leave and knew that there was no lifeguard present, but she made no effort to rescue the girl, although the adult was a strong swimmer and could easily have done so with no risk to herself. The girl drowned.",
        q: "If the lifeguard is charged with criminal homicide in the death of the girl, which of the following would be her most effective argument in defense?",
        opts: [
            "She was not present at the time of the drowning.",
            "Her duty to assist people in the swimming pool terminated when the supervisor permitted her to leave at 8 P.M.",
            "The girl's death resulted from the adult's failure to render aid.",
            "She did not intend the girl's death."
        ],
        ans: 1,
        exp: "Ordinarily, an omission (i.e., failure to act) does not lead to criminal responsibility unless it violated a legal duty to act. The lifeguard's duty to aid people at the swimming pool existed only because she was employed as a lifeguard, and therefore it was in force only during her hours of employment. Since her supervisor allowed her to leave at 8 P.M., her hours of employment ended at that time. For this reason, she may successfully argue that she had no duty to rescue someone who came into peril after she left the pool.\n\nIf she did have a legal duty to render aid, her absence could be a violation of that duty. A is therefore incorrect. Since any death may have more than one cause, the fact that the adult's inaction was a cause of the girl's death does not establish that criminal conduct by the lifeguard was not also a cause. C is therefore incorrect. D is incorrect because, at common law and under statutes, there are many forms of criminal homicide that can be committed without the intent to cause the death of a person."
    },
    {
        id: 14,
        topic: "Criminal Law",
        fp: "The victim was addicted to heroin and frequently committed acts of prostitution to obtain the money she needed to buy drugs. One night, she was out looking for customers for prostitution when she was approached by the defendant, who asked what her price was. When she told him that she would have intercourse with him for $20, he said that he would get the money from a friend and see her later. When the victim went home several hours later, the defendant was waiting inside her apartment. He said that he wanted to have sex with her, but when the victim repeated her demand for $20, he said that he had no money. She told him to get out or she would call the police. The defendant took a knife from his pocket, saying that if she did not have intercourse with him, he would kill her. Silently, the victim took off her clothes and had intercourse with him. Afterwards, when the defendant fell asleep, the victim beat him with a lamp.",
        q: "If the defendant is charged with rape, the court should find him",
        opts: [
            "guilty, because he overcame the victim's refusal to have intercourse with him by threatening to kill her with his knife.",
            "not guilty, because the victim's demand for $20 made her resistance conditional and therefore less than total.",
            "not guilty, because the victim offered no resistance and the defendant did not use physical force.",
            "not guilty, because of the injuries inflicted by the victim."
        ],
        ans: 0,
        exp: "Under the common law, rape is committed when the defendant intentionally has sexual intercourse with a female, not his wife, without her consent. Although it is necessary that the victim be unwilling, it is not necessary for her to put up a fight if it would be futile for her to do so or if she reasonably believes that resisting will cause her to sustain serious injury. Since the victim's refusal was overcome by a threat that would have led a reasonable person in her place to fear for her life, the intercourse was without her consent.\n\nIf her resistance had been overcome by payment, the intercourse would not have been against her will. But the fact that she was willing to accept payment does not mean that she consented to intercourse with one who did not offer payment, or even with one who did. B is therefore incorrect. C is incorrect because the victim's resistance was overcome by the defendant's threat of physical force. Since the victim inflicted the injuries after the intercourse occurred, her conduct in inflicting them could not possibly relate to whether she consented to the intercourse. D is therefore incorrect."
    },
    {
        id: 15,
        topic: "Criminal Law",
        fp: "A woman was in her eighth month of pregnancy when her husband left her. Unwilling to face life as a single parent, she asked her doctor to perform an abortion. Her doctor refused, explaining that abortion so late in pregnancy could be dangerous. The woman's cousin, the defendant, had graduated from medical school and was waiting for news about whether she had passed the state medical board's licensing exam. The woman asked the defendant to abort the pregnancy, saying that she would kill herself if the defendant refused. Reluctantly, the defendant agreed to perform the abortion in the woman's kitchen. The defendant performed a surgical procedure that usually resulted in abortion, but because the pregnancy had advanced as far as it did, the baby was alive when separated from the woman's body. The defendant held the baby's head under water in an attempt to end his life, but after a short time, her conscience bothered her. She pulled the baby from the water and gave him mouth-to-mouth resuscitation, directing the woman to call an ambulance. When the ambulance arrived, the baby was breathing on his own. He was taken to a hospital where, because of brain damage, he remained in a coma until he died five years later.",
        q: "If the defendant is charged with murdering the baby, her most effective argument in defense would be that",
        opts: [
            "the woman had a constitutional right to an abortion.",
            "the defendant attempted to save the baby's life by giving him mouth-to-mouth resuscitation.",
            "the baby's death five years later after the defendant's act was not proximately caused by the defendant's act.",
            "the defendant lacked the necessary state of mind to be guilty of criminal homicide, because the surgical procedure that she performed usually resulted in abortion."
        ],
        ans: 2,
        exp: "Murder is the unjustified killing of a human being with malice aforethought. Since malice aforethought includes the intent to kill, and since the defendant held the baby's head under water in an attempt to end his life, the defendant had the necessary mental state and committed the necessary act to make her criminally responsible for murder. It is also necessary, however, for the prosecution to show that her act was a proximate cause of the baby's death. Since there is no clear indication that this is so, it is possible that the defendant may be acquitted of murder. In addition, many states have rules that fix a period of time (usually one to three years) following a defendant's act and provide that no death occurring after that time is proximately caused by the act. Although it is not certain that her argument will succeed, it is the only one listed that could possibly provide her with an effective defense.\n\nA is incorrect because no constitutional right to an abortion has been found to exist in the last three months of pregnancy, and because the baby was born alive. The defendant's attempt to save the baby's life after she tried to kill him is not sufficient to relieve her of criminal liability for his death if his death was proximately caused by her previous conduct. B is therefore incorrect. Even though the surgical procedure that the defendant performed did not usually result in the death of a human being, her attempt to kill the baby after he was born makes D incorrect."
    },
    {
        id: 16,
        topic: "Criminal Law",
        fp: "The defendant shot the victim to death. She was subsequently charged with voluntary manslaughter.",
        q: "Which of the following additional facts, if true, would lead to an acquittal on that charge?",
        opts: [
            "At the time of the shooting, the defendant believed that the victim was going to stab her, but the reasonable person in her place would not have held that belief.",
            "At the time of the shooting, the reasonable person in the defendant's place would have believed that the victim was going to stab the defendant, but the defendant did not hold that belief.",
            "At the time of the shooting, the defendant did not know whether the victim was going to stab her.",
            "At the time of the shooting, the defendant mistakenly, but reasonably, believed that the victim was going to stab her."
        ],
        ans: 3,
        exp: "One who intentionally kills another under the mistaken but reasonable belief that he or she was defending himself or herself against imminent bodily harm may be protected by the privilege of self-defense and therefore be found not guilty of any criminal homicide. If his or her belief was unreasonable, however, he or she is still guilty of voluntary manslaughter, although not of murder. A is incorrect, because if the reasonable person would not have had held the belief, the defendant is guilty of voluntary manslaughter. B is incorrect because if the defendant did not hold the belief, she is not only guilty of voluntary manslaughter but of murder as well."
    },
    {
        id: 17,
        topic: "Criminal Law",
        fp: "Donald and Denise were law students in the same Contracts class. Knowing that the professor kept his lecture notes in a cabinet in his office, they planned to break into the office for the purpose of copying his notes. Donald purchased a miniature camera for this purpose after discussing the purchase with Denise and collecting half the cost from her. When they saw the professor leave his office at lunchtime, they went there. Denise opened the locked door by slipping a strip of plastic under its latch. Once inside the office, Donald found the professor's notes and photographed them with the camera that he had purchased.",
        q: "Of which of the following crimes may Donald properly be convicted?",
        opts: [
            "Conspiracy to commit burglary.",
            "Conspiracy to commit larceny.",
            "Both conspiracy to commit burglary and conspiracy to commit larceny.",
            "Neither conspiracy to commit burglary nor conspiracy to commit larceny."
        ],
        ans: 3,
        exp: "Persons are guilty of conspiracy to commit a particular crime when they agree to commit it. At common law, burglary is defined as breaking and entering into the dwelling of another at night for the purpose of committing a larceny or any felony therein. Since the agreement was to break into an office rather than a dwelling, and to do so at lunchtime rather than nighttime, it was not a conspiracy to commit burglary. At common law, larceny is defined as intentionally taking and carrying off the personal property of another with the intent to permanently deprive the owner of it. Since the agreement was to copy but not carry off the professor's notes, it was not a conspiracy to commit larceny."
    },
    {
        id: 18,
        topic: "Criminal Law",
        fp: "The victim fell asleep on a train while traveling from one part of the state to another. The defendant, who had earlier seen the victim removing cash from a money belt that the victim wore under his shirt, slipped into the seat beside the victim. While the victim slept, the defendant used a knife to cut off the buttons of the victim's shirt and to cut the money belt from the victim. He then took it to another car of the train, where he removed several thousand dollars. The defendant was charged with robbery.\n\nRead the summaries of the decisions in the four cases (A-D) below.",
        q: "Then decide which is most applicable as a precedent to this case.",
        opts: [
            "The victim was walking on a crowded street with her purse hanging from a strap over her shoulder when the defendant yanked the purse with sufficient force to break the strap. The defendant then ran off with it into the crowd. The defendant's conviction for robbery was reversed.",
            "The defendant took a package of meat from a showcase in a supermarket and slipped it under his shirt. He left the store without paying for it. The store cashier ran after him into the parking lot and stepped in front of him, blocking his path. The defendant took a straight razor from his pocket and grabbed another customer. He held the razor to the customer's throat, telling the store cashier to get out of the way. The cashier stepped aside, and the defendant ran away, releasing the other customer. The defendant's conviction for robbery was affirmed.",
            "A schoolteacher took her sixth grade class to visit a display of medieval torture devices at the museum. She sat in a wooden torture chair and had herself shackled into it to demonstrate its operation to her students. The defendant, who worked at the museum, surreptitiously photographed her with an instant camera. He then went to the office of the teacher's husband and showed the husband the photograph of the teacher in the torture chair. The defendant said that his confederates would torture her unless he called them on the phone and told them that the husband had given him $500. The husband gave him the money. The defendant's conviction for robbery was reversed.",
            "When the victim purchased a ticket at the airport for his flight, he checked his baggage. Later, the defendant, wearing a mask and carrying a gun, entered the room where checked baggage was stored. While forcing the room attendant to lie face down on the floor, the defendant opened the victim's suitcase and removed several hundred dollars worth of negotiable securities. The defendant's conviction for robbery was affirmed."
        ],
        ans: 0,
        exp: "In order to be applicable as a precedent, a previously decided case must resolve an issue similar to the one that appears in the subject case. Here, the defendant was charged with robbery after accomplishing the theft of the victim's money belt by the use of physical force directed against the property itself. Robbery is a larceny committed by the use of force or the threat of force. Although the defendant clearly committed a larceny (i.e., the trespassory taking and carrying off of personal property known to be another's with the intent to permanently deprive), an issue arises as to whether force directed against the victim's property rather than his or her person satisfies the force requirement. Since the same issue arose in A, where the defendant used force to break the strap of the victim's handbag, A is most likely to be applicable as a precedent.\n\nIn B, although force was used to retain the property after a larceny had been committed, no force whatsoever was used in acquiring it. For this reason, the issue is not sufficiently similar to make the case applicable as a precedent to the facts in the question. In C, the defendant acquired the property of the victim by threatening the victim with force directed at another person. In D, the victim's property was acquired by using or threatening force against the person in custody of it. Since the facts in the question did not involve the use or threat of force against any person, C and D are not likely to be applicable."
    },
    {
        id: 19,
        topic: "Criminal Law",
        fp: "A hunter earned his living by catching poisonous reptiles for sale to zoos and private collectors. He had been commissioned to capture a rare, highly poisonous species known as the bowsnake. The hunter hired a professional chemist to develop and manufacture a drug that he could take before handling the bowsnake, and which would protect him against the reptile's poison in the event that he was bitten. Although the chemist knew that the bite of the bowsnake was usually fatal, and that there was no defense against its venom, she welcomed the opportunity to earn some easy money. She sold the hunter a bottle of tablets, telling him that they were based on her secret formula and that they would protect him against the bowsnake's venom. Actually, the tablets were made of nothing more than sugar, but the chemist thought that if the hunter believed strongly enough in their power, he would handle the snakes so confidently that he would not be bitten. The hunter caught a bowsnake and took one of the chemist's tablets before handling it, following the instructions that she had given him. While he was handling the bowsnake, it bit him. Because the tablets did not protect him against the venom, the hunter became ill as a result of the snakebite and almost died.",
        q: "If the chemist is prosecuted for her sale of the tablets to the hunter, she may properly be found guilty of",
        opts: [
            "attempted murder only.",
            "obtaining property by false pretenses only.",
            "attempted murder and obtaining property by false pretenses.",
            "neither attempted murder nor obtaining property by false pretenses."
        ],
        ans: 1,
        exp: "Obtaining property by false pretenses is committed when, with the intent to cause the victim to transfer title to personal property, the defendant makes a fraudulent misrepresentation that causes the victim to do so. Since the chemist told the hunter that the pills were made from a secret formula that would protect him against the venom when she knew that statement to be false, and since she did so for the purpose of obtaining money from him and succeeded in doing so, she is guilty of false pretenses.\n\nAttempted murder requires a specific intent to cause the death of a human being. Intent to cause death requires either the desire or substantial certainly that death will result. Since the chemist believed that the hunter would not be bitten if he took the sugar pills, she lacked the intent necessary to make her liable for attempted murder. A, C, and D are therefore incorrect."
    },
    {
        id: 20,
        topic: "Criminal Law",
        fp: "The defendant purchased an ounce of cocaine and divided it into 50 packets of about one-half gram each. She was selling them outside the local high school when a drug addict noticed her and saw the opportunity to get some free drugs. The drug addict stepped up beside her. With his hand in the pocket of his jacket, he thrust his finger forward inside the pocket and jabbed her in the ribs with it. Snarling, he said, \"I've got a gun. Give me the dope or I'll blow you away.\" The defendant reached into her purse, drew a small pistol that she kept there, and shot the drug addict, killing him.",
        q: "If the defendant is charged with the murder of the drug addict, she should be found",
        opts: [
            "guilty, because it was unreasonable for her to use deadly force to protect illegal contraband.",
            "guilty, if the drug addict was unarmed.",
            "guilty, because the defendant was committing a crime and therefore had no privilege of self-defense.",
            "not guilty, if it was reasonable for her to believe that her life was in danger."
        ],
        ans: 3,
        exp: "Self-defense is a privilege to use reasonable force to protect oneself against aggression. In determining whether force was reasonable, courts usually balance the danger likely to result from its use against the benefit of using it. If the benefit that would be apparent to the reasonable person in the defendant's situation outweighs the danger that would be apparent to the reasonable person in the defendant's situation, the force that the defendant used was reasonable. Since it is generally understood that the reasonable person would consider the benefit of saving his or her own life to be of greater weight than the danger of killing an assailant, it is usually held that lethal force (i.e., force likely to kill or do serious bodily harm) is reasonable if used by a person who reasonably believes that he or she is being attacked with lethal force. Thus, if it was reasonable for the defendant to believe that her life was in danger, it was probably reasonable for her to use lethal force to protect it.\n\nA is incorrect because the defendant was attempting to protect herself rather than the cocaine. Even if the drug addict was actually unarmed, the defendant's reasonable belief that he had a pistol might have privileged her use of lethal force in self-defense. B is, therefore, incorrect. A person who is committing a crime has no right to defend himself or herself against a lawful arrest. Since the drug addict was not attempting to arrest the defendant, however, the fact that she was committing a crime at the time of his attack is irrelevant. C is therefore incorrect."
    },
    {
        id: 21,
        topic: "Criminal Law",
        fp: "The defendant made his living by forging endorsements on welfare checks that he stole out of residential mailboxes. An undercover police officer suspected that the defendant was the forger he was after. Dressed in plain clothes, the officer surreptitiously followed the defendant in hopes of catching him in the act. The defendant noticed the officer following him and saw the gun that the officer wore in a shoulder holster. Believing that the officer was a thief who wanted to rob him, the defendant ducked into an alley. When the officer followed him into the alley, the defendant threw a steel garbage can at him, striking and killing him with it. The defendant is charged with murder.\n\nRead the summaries in the four cases (A-D) below.",
        q: "Which is most applicable as a precedent?",
        opts: [
            "The defendant was walking down the street when an intoxicated panhandler began to push and shove him. The defendant pointed a pistol at the panhandler with his finger on the trigger. When the panhandler pushed him again, the pistol went off, killing the panhandler. The defendant testified that he believed the pistol to be unloaded. Held: Not guilty of murder.",
            "When the defendant became rowdy in a bar, the bouncer asked him to leave. The defendant responded by punching the bouncer in the face. The bouncer grabbed the defendant's wrist, but the defendant picked up a wine bottle with his other hand and struck the bouncer over the head with it, killing him. Held: Guilty of voluntary manslaughter.",
            "As the defendant was leaving the high school where she worked, a student began chasing after her, waving a toy plastic baseball bat and threatening to hit her with it. She ran as fast as she could, but he ran after her. When she felt she could run no further, she took a pistol from her purse and shot him with it, injuring him. The defendant testified that she believed the baseball bat to be real. Held: Not guilty of battery.",
            "While he was walking her home, the defendant's date asked her to have sexual intercourse with him. Offended, the defendant slapped his face. When she raised her hand to slap him again, her date knocked her to the ground and began kicking her in the chest and head. As he continued kicking her, she struggled to her feet, and struck him in the head with a rock, killing him with one blow. Held: Not guilty of voluntary manslaughter."
        ],
        ans: 2,
        exp: "A person is justified by the privilege of self-defense to use such force as reasonably appears necessary to protect himself or herself from what he or she reasonably believes to be an imminent threat of bodily harm. Although there was no real threat of harm to the defendant, he believed there was and used force to prevent it. Since the defendant in C also used force in the mistaken belief that she was under attack, her case is probably applicable as a precedent.\n\nIn A, the mistake made by the defendant related to the degree of force he was using, not to the danger that he faced, so C is a better choice. B and D are not applicable because there, the issue was whether the violence against which the defendants sought to protect themselves was a reasonable response to their own unprivileged aggression."
    },
    {
        id: 22,
        topic: "Criminal Law",
        fp: "When he was 19 years old, the defendant pleaded guilty to petty larceny. Because of his age, he was not sentenced to prison, but he was required to report to a Youth Supervision Officer every month for one year. At the end of that period, he was discharged from supervision. At the time, his attorney advised him that he was pleading guilty to a \"Youthful Offense\" rather than to a crime, and that because he was assigned to a Youth Supervision Officer, he would have no criminal record as a result of the proceeding. The defendant believed this advice, but it was in fact false, in that the charge to which he pleaded guilty was a criminal one.\n\nTwenty years later, the defendant applied for employment with the state. In his application, he stated under oath that he had never been convicted of a crime.\n\nA state statute reads as follows:\n\"Perjury in the second degree consists of making any statement under oath with the knowledge that such statement is false. Perjury in the second degree is a felony punishable by a term not to exceed five years in the state prison.\"",
        q: "If the defendant is charged with perjury in the second degree, the court should find him",
        opts: [
            "not guilty, because he lacked the mental state required by the statute.",
            "not guilty, because reliance on the advice of counsel is a complete defense.",
            "not guilty, because a plea of guilty is not the same as a conviction.",
            "guilty."
        ],
        ans: 0,
        exp: "Since the statute requires knowledge that the statement is false, and since the defendant believed the statement to be true, he lacked the required mental state to be guilty of perjury.\n\nD is therefore incorrect. If, as the result of his attorney's advice, the defendant believed that he had not been convicted of a crime, he lacked the knowledge necessary to make him guilty under the statute. However, the defendant's reliance on the advice of counsel would not, in itself, have prevented him from being guilty unless he actually believed that advice, so B is incorrect. Since a guilty plea is equivalent to a conviction, C is incorrect."
    },
    {
        id: 23,
        topic: "Criminal Law",
        fp: "A statute provides that \"If the death of any person proximately results from the commission of or attempt to commit any misdemeanor or non-forcible felony, the person committing said misdemeanor or non-forcible felony shall be guilty of third degree manslaughter.\"\n\nBecause he had been convicted three times of driving while under the influence of alcohol, the defendant's driving license was revoked. One night, while driving home from a party, the defendant lost control of his automobile and collided head-on with a vehicle traveling in the other direction. Two occupants of the other car were killed. The defendant was charged with driving without a license, which was a misdemeanor, and with third degree manslaughter under the above statute.",
        q: "Should the court find the defendant guilty of third degree manslaughter?",
        opts: [
            "No, unless the deaths were proximately caused by his operation of a motor vehicle without a license.",
            "No, because driving without a license is not malum in se.",
            "Yes, because driving while intoxicated is a dangerous act.",
            "Yes, if, but only of, he knew or should have known that driving without a license could result in loss of life."
        ],
        ans: 0,
        exp: "Since the statute defines as third degree manslaughter any death that proximately results from the commission of a crime, the defendant cannot be found guilty under the statute unless the victim's death proximately resulted from his crime.\n\nAlthough the common law misdemeanor-manslaughter rule is applied only to deaths resulting from the commission of misdemeanors that are mala in se, the statute given makes no such requirement. B is therefore incorrect. C is incorrect for the same reason, and because there is no indication that the defendant was driving while intoxicated at the time the accident occurred. D is incorrect because neither the common law rule nor the statute requires that the risk be a foreseeable one."
    },
    {
        id: 24,
        topic: "Criminal Law",
        fp: "The defendant had suspected for some time that his wife was unfaithful to him. One night, when she came home later than usual, the defendant confronted her, demanding to know where she had been. Tearfully, the wife confessed that she had been out with a male friend and that she had sexual intercourse with him. The defendant flew into a rage, striking the wife repeatedly about the face and head with his clenched fist. The following day, the wife died as a result of the injuries that the defendant had inflicted. The defendant was subsequently charged with murder. At the defendant's trial, his attorney asserted that, under the circumstances, the defendant should not be convicted of any crime more serious than voluntary manslaughter.",
        q: "Which of the following would be the prosecuting attorney's most effective argument in response to that assertion?",
        opts: [
            "The defendant's conduct indicated an intent to kill the wife.",
            "The defendant's conduct indicated an intent to inflict great bodily harm on the wife.",
            "The defendant did not catch the wife in flagrante delicto.",
            "In the defendant's position, a person of ordinary temperament would not have become angry enough to lose normal self-control."
        ],
        ans: 3,
        exp: "Voluntary manslaughter is the killing of a human being with the intent to kill or inflict great bodily harm, under circumstances of extreme emotional distress (or mistaken justification). Frequently, the rage that accompanies a discovery of infidelity by a spouse has been held to be sufficient emotional distress to reduce an intentional homicide from murder to voluntary manslaughter. Most jurisdictions apply an objective standard, however, in judging a defendant's emotional distress. Thus, if a person of ordinary temperament would not have lost self-control, the defendant's emotional distress would not have been sufficient to result in a reduction of his crime from murder to manslaughter.\n\nA and B are incorrect because although a killing with the intent to kill or inflict great bodily harm may be murder, extreme emotional distress may reduce it to voluntary manslaughter even though the defendant intended to kill or inflict great bodily harm. Although anger that results from the defendant's catching his spouse in flagrante delicto (i.e., in the act) may justify reducing a murder charge to one of manslaughter, C is incorrect because there is no requirement that defendant's emotional distress result from this particular circumstance."
    },
    {
        id: 25,
        topic: "Criminal Law",
        fp: "When the owner of a hardware store went away on vacation, she left her assistant in charge of the store. One day, while the assistant was alone in the store, the defendant entered and pointed a realistic-looking toy pistol at the assistant, demanding all the money in the cash register. The assistant believed that the pistol in the defendant's hand was real and complied with the defendant's demand because he was afraid that if he did not, the defendant would shoot him.\n\nThe following day, the owner returned from her vacation. When the assistant told her about the holdup, the owner became so upset that she suffered a cerebral hemorrhage and died. The jurisdiction has a statute that provides that \"Any person who causes the death of another human being with the intent to cause such death or in the course of committing a dangerous felony shall be guilty of murder.\"",
        q: "If the defendant is charged with the murder of the owner, he should be found",
        opts: [
            "guilty, because robbery is a dangerous felony.",
            "guilty, because it was foreseeable that the robbery would result in the death of the owner.",
            "not guilty, because the owner's death did not occur while the defendant was committing a dangerous felony.",
            "not guilty, because the toy pistol that the defendant used could not foreseeably have inflicted an injury upon another person."
        ],
        ans: 2,
        exp: "All jurisdictions that recognize a felony-murder rule apply it only when the victim's death (or the injury that leads to it) occurs during the commission of a felony. Since the stroke that caused the owner's death did not occur until the day after the defendant robbed the store, it did not occur during the perpetration of a felony by the defendant, and the felony murder rule does not apply.\n\nA and B are therefore incorrect. D is incorrect because many cases have held that since the victim of a robbery is likely to respond with force, even a robbery with a toy gun is a dangerous felony."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = examData;
}
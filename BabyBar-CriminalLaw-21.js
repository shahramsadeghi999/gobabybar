const examData = [
    {
        id: 1,
        topic: "Crimes against Person / Rape & Intoxication",
        fp: "The defendant met the victim in a bar where both were drinking. Because the defendant was too drunk to drive, the victim offered him a ride home. In the victim's car, the defendant put his arms around the victim and attempted to kiss her. The victim told him that she wasn't interested and tried to push him away, but the defendant overpowered her and succeeded in having sexual intercourse with her. The victim was 17 years old.",
        q: "The defendant was charged with forcible rape under the common law. If only one of the following facts or interferences were true, which would be most likely to lead to the defendant's acquittal on that charge?",
        opts: [
            "The defendant was so drunk that he believed the victim was willing to have sexual intercourse with him.",
            "The defendant was so drunk that he did not realize that he was engaging in sexual intercourse.",
            "The victim was so drunk that she did not realize that the defendant was engaging in sexual intercourse with her.",
            "The victim was so drunk that immediately after intercourse began, she forgot who the defendant was and believed him to be her husband."
        ],
        ans: 1,
        exp: "Under the common law, rape is forced sexual intercourse with a female, who is not the spouse of the defendant, without her consent[cite: 32]. Rape is a 'general intent' crime, which means that a conviction may be had even though the defendant did not intend to engage in intercourse without the female's consent if he acted recklessly or was criminally negligent in determining whether or not she consented[cite: 32]. It is necessary, however, that the defendant intend to engage in intercourse. If the defendant did not intend to have intercourse, he cannot be convicted[cite: 32]."
    },
    {
        id: 2,
        topic: "Property Crimes / Larceny & Conspiracy",
        fp: "The defendant had lost her job and needed to make some money quickly. While visiting a local tavern, she ran into an old friend. When the defendant told the friend about her financial problems, the friend pointed to an expensive-looking coat that was hanging on a coat rack and said, 'Why don't you steal that coat? It looks like you should be able to sell it for at least $100.' Because the defendant said that she was afraid the owner of the coat would see her, the friend agreed to sing in a loud voice to create a diversion so that the defendant could steal the coat while everyone was watching the friend. As soon as the friend began to sing, the defendant took the coat from the coat rack and ran from the tavern. In fact, the coat actually belonged to the friend, who had been joking when he told the defendant to steal it.",
        q: "Of which of the following crimes may the defendant be properly convicted?",
        opts: [
            "Larceny only.",
            "Conspiracy only.",
            "Larceny and conspiracy.",
            "Neither larceny nor conspiracy."
        ],
        ans: 3,
        exp: "Larceny is defined as a trespassory taking and carrying off of personal property known to be another's with the intent to permanently deprive the owner thereof[cite: 32]. A taking is trespassory if it violates the rights of the owner. Since the coat was the friend's and since the friend told the defendant to take it, the taking did not violate the friend's rights and was therefore not trespassory[cite: 32]. A criminal conspiracy is committed when two or more persons with the specific intent to commit a crime agree to commit that crime[cite: 32]. Since the friend knew that the coat was his, he did not have the specific intent to commit a crime when he agreed to help the defendant take it[cite: 32]."
    },
    {
        id: 3,
        topic: "Homicide / First-Degree Murder",
        fp: "The defendant knew that his neighbor, the victim, had a weak heart and that the victim had suffered several heart attacks in the past. Because he was angry at the victim, the defendant decided to try to frighten him into another heart attack. He watched the victim's house, and when he saw the victim leaving through the front door, he ran toward him shouting, 'Look out! Look out! The sky is falling!' Although the defendant was not sure that this would kill the victim, he hoped it would. When the victim saw the defendant running toward him shouting, he became frightened, had a heart attack, and died on the spot. The jurisdiction has statutes that define first-degree murder as 'the deliberate and premeditated killing of a human being,' and second-degree murder as 'any unlawful killing of a human being with malice aforethought, except for a killing that constitutes first-degree murder.' In addition, its statutes adopt common law definitions of voluntary and involuntary manslaughter.",
        q: "Which of the following is the most serious crime of which the defendant can properly be convicted?",
        opts: [
            "First-degree murder.",
            "Second-degree murder.",
            "Voluntary manslaughter.",
            "Involuntary manslaughter."
        ],
        ans: 0,
        exp: "A killing is intentional if the defendant desired or knew to a substantial degree of certainty that it would result from his or her act[cite: 32]. A killing is deliberate and premeditated if the defendant was capable of reflecting upon it with a cool mind and did in fact do so[cite: 32]. Since the defendant hoped for (i.e., desired) the victim's death, the killing was intentional[cite: 32]. Since he reflected on it in advance with a cool mind, it was deliberate and premeditated[cite: 32]."
    },
    {
        id: 4,
        topic: "Property Crimes / Larceny",
        fp: "The defendant was having dinner in a restaurant with his employer, the victim, when the victim left the table to go to the restroom. As the victim walked away, the defendant noticed that the victim's wristwatch had fallen off his wrist onto the table. Since it looked like a rather valuable watch, the defendant decided to steal it. Picking up the watch, he put it into his pocket. A few moments later, he began to feel guilty about stealing from his employer, so when the victim returned to the table, the defendant handed him the watch and said, 'Here, you dropped this, and I put it into my pocket for safekeeping.'",
        q: "Which is the most serious crime of which the defendant can be properly convicted?",
        opts: [
            "Larceny.",
            "Attempted larceny.",
            "Embezzlement.",
            "No crime."
        ],
        ans: 0,
        exp: "Larceny is defined as a trespassory taking and carrying off of personal property known to be another's with the intent to permanently deprive the owner thereof[cite: 32]. A trespassory taking is an acquisition of possession contrary to the rights of the owner and without the owner's consent[cite: 32]. Since the defendant acquired possession without the victim's permission, he committed a trespassory taking[cite: 32]. Since he moved the watch from the table to his pocket with the intention of keeping it, he carried it off, thus committing a larceny[cite: 32]. Embezzlement requires the criminal conversion of personal property by one in lawful custody of that property[cite: 32]. The defendant did not come into possession of the watch as a result of his employment relationship, making embezzlement incorrect[cite: 32]."
    },
    {
        id: 5,
        topic: "Inchoate Crimes / Conspiracy & Wharton's Rule",
        fp: "A store owner wanted to erect a new storage building so that he could expand his business of selling animal food and veterinary supplies. He was afraid, however, that the building department would not issue him a permit to begin construction. A building department clerk said that she would make a false entry in the official records to indicate that a permit had already been issued if the store owner would pay her $500. The store owner agreed and said that he would bring the money the following day. The next day, however, when the store owner went to the clerk's office with $500, he was told that she had been fired. A statute in the jurisdiction provides that '[a]ny person who shall give or accept a fee not authorized by law as consideration for the act of any public employee is guilty of bribery, a felony. Any person who shall offer to commit a bribery is guilty of bribery in the second degree, a felony.' If the jurisdiction applies the common law definition of conspiracy, of which of the following crimes can the clerk properly be convicted?",
        q: "Of which of the following crimes can the clerk properly be convicted?",
        opts: [
            "Bribery in the second degree only.",
            "Conspiracy to commit bribery only.",
            "Bribery in the second degree or conspiracy to commit bribery, but not both.",
            "Bribery in the second degree and conspiracy to commit bribery."
        ],
        ans: 0,
        exp: "The clerk is obviously guilty of bribery in the second degree because she offered to alter the official records for $500[cite: 32]. She cannot be guilty of conspiracy, however, because of Wharton's Rule, which provides that there can be no conspiracy unless the agreement involves at least one person who is not essential to the commission of the crime to which the conspirators agreed[cite: 32]. Since the crime of bribery could not have been committed by either the clerk or the store owner acting alone, neither can be found guilty of conspiring with the other to commit it[cite: 32]."
    },
    {
        id: 6,
        topic: "Inchoate Crimes / Attempted Arson & Mistake of Law",
        fp: "The defendant called her attorney and asked whether it would be a crime to burn down her own home. The attorney said that arson was defined as the intentional burning of any dwelling and that arson was a serious crime. In fact, the defendant's attorney was incorrect: The applicable statute in the jurisdiction defines arson as 'the intentional burning of the dwelling of another.' Believing what the attorney told her, however, the defendant burned down her own home for the purpose of collecting the proceeds of her fire insurance policy.",
        q: "If the defendant is charged with attempted arson, should she be found guilty?",
        opts: [
            "Yes, because a mistake of fact does not prevent a person from being guilty of a criminal attempt.",
            "Yes, because her mistake of law resulted from reasonable reliance on the advice of an attorney.",
            "No, because the defendant did not intend to burn the dwelling of another.",
            "No, because the defendant's attempt is subsumed in the substantive crime of insurance fraud."
        ],
        ans: 2,
        exp: "A person is guilty of a criminal attempt when, with the specific intent to bring about a result that is criminally prohibited, he or she comes substantially close to bringing about that result[cite: 32]. Since under the applicable statute, burning down one's own house is not arson, the result that the defendant specifically intended to bring about was not criminally prohibited by the arson statute[cite: 32]. For this reason, the defendant could not be guilty of attempted arson[cite: 32]."
    },
    {
        id: 7,
        topic: "Homicide / Premeditation",
        fp: "Two families had been rivals going back generations. There had been so many murders, fights, robberies, and thefts between the families that the fight was famous and well-known in the community. One summer, a man from one family and a minor girl from the other family started secretly dating. The man got the minor girl pregnant. When the minor girl told the man about the pregnancy, he laughed and said it was all a trick to get back at her family. The minor girl was so devastated that she committed suicide. The minor girl's father was completely enraged and called the patriarch of the other family and told him that they had to meet to settle the fight once and for all. The father and the patriarch met at a bar the next day. As soon as the patriarch sat down, the father shot the patriarch in the head. The patriarch died immediately.",
        q: "Which is the most serious crime of which the father can be convicted?",
        opts: [
            "First-degree murder.",
            "Second-degree murder.",
            "Voluntary manslaughter.",
            "Involuntary manslaughter."
        ],
        ans: 0,
        exp: "First-degree murder is murder with malice aforethought-meaning it requires premeditation and deliberation[cite: 32]. Here, the father set up a meeting with the patriarch the next day and shot him in the head[cite: 32]. This shows clear premeditation and deliberation[cite: 32]. It is not voluntary manslaughter because, while there were generations of provocation, there was a significant cooling off period while the father made plans to meet the patriarch the next day[cite: 32]."
    },
    {
        id: 8,
        topic: "Inchoate Crimes / Attempted Murder",
        fp: "The defendant was charged with the attempted murder of the victim.",
        q: "If only one of the following facts or inferences were true, which would be most likely to result in an acquittal?",
        opts: [
            "The victim was already dead when the defendant shot him, although the defendant believed him to be alive.",
            "The victim was alive when the defendant shot him, although the defendant believed that the victim was already dead.",
            "The defendant's gun was unloaded when he aimed it at the victim and pulled the trigger, although the defendant believed it to be loaded.",
            "Intending to poison the victim, the defendant put a harmless substance into the victim's drink, although the defendant believed that the substance was lethal."
        ],
        ans: 1,
        exp: "A person is guilty of a criminal intent when, with the specific intent to bring about a criminally prohibited result, he or she comes substantially close to achieving that result[cite: 32]. Thus, all attempts are 'specific intent' crimes[cite: 32]. If the defendant believed that the victim was already dead, he could not have intended to kill him and so could not be guilty of attempted murder[cite: 32]. The other options represent factual impossibilities, which are not valid defenses to attempt if the defendant possessed the specific intent to kill[cite: 32]."
    },
    {
        id: 9,
        topic: "Property Crimes / Receiving Stolen Property",
        fp: "On the defendant's birthday, his friend gave him a new television as a gift. The following day, when the defendant opened the box and began using the television, he noticed that there was no warranty document with it. The defendant phoned his friend and asked the friend for the missing warranty document. The friend said, 'I can't give it to you because the television was stolen.' The defendant kept the television and continued using it.",
        q: "What crime is the defendant guilty of?",
        opts: [
            "Receiving stolen property only.",
            "Larceny only.",
            "Receiving stolen property and larceny.",
            "No crime."
        ],
        ans: 3,
        exp: "The crime of receiving stolen property consists of acquiring stolen property with the knowledge that it was stolen and the intent to permanently deprive the owner thereof[cite: 32]. Since the defendant did not know that the television was stolen when he acquired possession of it, he cannot be guilty of receiving stolen property[cite: 32]. The crime of larceny consists of the trespassory taking and carrying off of personal property known to be another's with the intent to permanently deprive the owner thereof[cite: 32]. Since the defendant did not know that the television was the property of another when he took it (i.e., received it from his friend), he cannot be guilty of larceny[cite: 32]."
    },
    {
        id: 10,
        topic: "Property Crimes / Arson (Common Law)",
        fp: "In which of the following fact situations is the defendant most likely to be convicted of the crime charged? Assume that the jurisdiction applies the common law definition of all crimes.",
        q: "Which of the following scenarios describes the greatest likelihood of conviction?",
        opts: [
            "The defendant offered an acquaintance $1,000 to burn down the defendant's factory, but the acquaintance refused. The defendant was charged with solicitation to commit arson.",
            "The defendant deliberately burned down his home and collected the proceeds of his fire insurance policy. The defendant was charged with larceny by trick.",
            "The defendant deliberately burned down the victim's store because he wanted to put the victim out of business. The defendant was charged with arson.",
            "The defendant attempted to burn down his neighbor's house because he disliked his neighbor. He poured gasoline on the door of the house and threw a match onto it. The flames had just charred the door when it started to rain and the fire went out. The defendant was charged with arson."
        ],
        ans: 3,
        exp: "At common law, arson is defined as the intentional or malicious burning of the dwelling of another[cite: 32]. Any burning that chars some actual part of the structure is sufficient to result in a conviction[cite: 32]. Since the door was charred, there was sufficient burning to establish the defendant's guilt[cite: 32]. Burning a factory or store is not common law arson because those structures are not dwellings[cite: 32]. Larceny by trick requires defrauding another into parting with temporary possession, whereas insurance proceeds involve parting with title[cite: 32]."
    },
    {
        id: 11,
        topic: "Inchoate Crimes / Conspiracy",
        fp: "A boy overheard two other boys talking about killing the victim by hiding his asthma medicine. The boy hoped that the other boys' plan would succeed. He decided to help them without saying anything about it. Going into the victim's room, the boy searched until he found the medicine. Then he put it on a night table so that the other boys would be sure to find it. One of the two boys decided not to go through with the plan and ran away. However, the other boy went to the room and threw away the medicine. The victim had an asthma attack and died. A statute in the jurisdiction provides that persons the boy's age are adults for purposes of criminal liability.",
        q: "If the boy is charged with conspiracy, will a court find him guilty?",
        opts: [
            "Yes, because he knowingly aided and abetted in the commission of a crime.",
            "Yes, because he committed an overt act in furtherance of an agreement to throw away the victim's medicine.",
            "No, because he did not agree to commit any crime.",
            "No, because one of the boys effectively withdrew from any conspiracy that existed."
        ],
        ans: 2,
        exp: "A criminal conspiracy is an agreement to commit a crime, and it is complete when two or more persons make such an agreement[cite: 32]. Although the boy privately decided to assist the other boys in the commission of a crime, he did not agree with them that he would do so[cite: 32]. He is therefore not guilty of conspiracy[cite: 32]."
    },
    {
        id: 12,
        topic: "Crimes Against Person / Assault",
        fp: "As part of her campaign for reelection, the President of the United States was driving through the main street of a city in a car with a bubble-shaped roof made of bulletproof glass. Intending to shoot the President, the defendant crouched on the roof of a building and aimed a high-powered rifle at the glass top of his car. He fired three times, striking the glass with each bullet. None of the bullets penetrated the glass, and because of the noise of the cheering crowd, the President was unaware that any shots had been fired. A police officer observed the defendant firing at the President, however, and placed him under arrest. The defendant was subsequently charged with violating a federal statute that makes it a crime to attempt to assassinate the President, and he was acquitted in a federal court.",
        q: "If the defendant is prosecuted in the state court and charged with criminal assault under state law, should the court find him guilty?",
        opts: [
            "No, because he has already been acquitted in the federal court.",
            "No, because the President was unaware that shots had been fired.",
            "Yes, because the defendant intended to hit the President with the bullets.",
            "Yes, because the defendant's conduct would cause the reasonable person to be placed in fear of his or her life."
        ],
        ans: 2,
        exp: "There are two different forms of criminal assault-conduct that intentionally induces fear, and attempted battery[cite: 32]. A person is guilty of a criminal attempt when, with the specific intent to bring about a criminally prohibited result, he or she comes substantially close to achieving that result[cite: 32]. Since the defendant shot at the President with the intention of hitting him, he attempted a battery[cite: 32]. Since he did not succeed, his crime was assault[cite: 32]. The victim does not need to be aware of an attempted battery for an assault to occur[cite: 32]."
    },
    {
        id: 13,
        topic: "Homicide / Felony Murder (Co-Felon Death)",
        fp: "A man had just been released from prison after serving a three-year term for aggravated assault. In need of money, he called his old friend, the defendant, and asked whether the defendant would be interested in joining him in the robbery of a pawnshop. The defendant agreed, but only after making the man promise that there would be no violence. Upon the defendant's insistence, they carried realistic-looking toy guns, and when they entered the pawnshop, they drew their toy guns and ordered the store owner to give them all the money in his cash register and all the gems in his safe. The store owner took a gun from the safe and shot the man, killing him. The store owner then aimed the pistol at the defendant, who fled from the store. By statute, the jurisdiction has adopted the felony-murder rule.",
        q: "If the defendant is charged with the murder of the man, what is the defendant's most effective argument in defense?",
        opts: [
            "The man was not a victim of the felony that resulted in his death.",
            "The store owner was justified in shooting the man.",
            "The use of toy guns made it unforeseeable that the robbery would result in the death of any person.",
            "The defendant lacked malice aforethought."
        ],
        ans: 1,
        exp: "Many jurisdictions hold that the defendant will not be guilty of the murder of a co-felon under the felony-murder rule if the co-felon's death resulted from a justifiable attempt by the victim to prevent the crime[cite: 32]. Although this is not the law in all jurisdictions, it is the only argument listed that would provide the defendant with any defense at all[cite: 32]."
    },
    {
        id: 14,
        topic: "Homicide / Involuntary Manslaughter",
        fp: "Although the defendant had been licensed to drive for 15 years, he allowed his license to expire while he was temporarily out of the country. When he returned, he meant to get it renewed or reinstated but did not get around to doing so. Although a statute made it a misdemeanor to drive without a license, the defendant continued to drive. One day, he accidentally dropped his cigarette while driving his car. He felt around for it while he drove, until his fingers encountered its glowing tip. Taking his eyes off the road for a moment to pick up the still-burning cigarette, he failed to see the victim, who stepped out from between parked cars. The defendant struck the victim, who died instantly.",
        q: "If the defendant is charged with homicide as a result of the victim's death, which of the following would be the prosecutor's most effective argument?",
        opts: [
            "The victim's death resulted from the defendant's commission of a dangerous misdemeanor.",
            "The defendant's violation of the statute that required a driver's license made him guilty of culpable negligence per se, since the statute was designed to protect users of public roads against unqualified drivers.",
            "While mere negligence is insufficient to sustain a murder charge, it is sufficient to sustain a charge of involuntary manslaughter where it results in death.",
            "The defendant created a high and unreasonable risk of death or serious injury when he took his eyes off the road while driving."
        ],
        ans: 3,
        exp: "Involuntary manslaughter is an unintended killing that results from conduct that created a high and unreasonable risk of death or serious injury or from the commission of a malum in se misdemeanor[cite: 32]. If the defendant's conduct created such risk, he could thus be guilty of involuntary manslaughter[cite: 32]. Driving without a license is neither inherently dangerous nor malum in se, rendering the misdemeanor-manslaughter rule inapplicable[cite: 32]."
    },
    {
        id: 15,
        topic: "Homicide / Omissions",
        fp: "A lifeguard worked from 5 P.M. to 10 P.M. every night at a public swimming pool operated by the city. When she arrived at work Wednesday evening, she asked her supervisor whether she could leave early because she had a date. Since there were only a few people at the pool, the supervisor said that the lifeguard could leave at 8 P.M. At 8 P.M., the lifeguard told the supervisor she was going and left, although the pool had become quite crowded with adults and young children. At 9 P.M., a nine-year-old girl fell into the pool, striking her head against its edge. One of the adults swimming in the pool saw the girl fall and realized that the child would drown if someone did not rescue her. The adult had seen the lifeguard leave and knew that there was no lifeguard present, but she made no effort to rescue the girl, although the adult was a strong swimmer and could easily have done so with no risk to herself. The girl drowned.",
        q: "If the lifeguard is charged with criminal homicide in the death of the girl, which of the following would be her most effective argument in defense?",
        opts: [
            "She was not present at the time of the drowning.",
            "Her duty to assist people in the swimming pool terminated when the supervisor permitted her to leave at 8 P.M.",
            "The girl's death resulted from the adult's failure to render aid.",
            "She did not intend the girl's death."
        ],
        ans: 1,
        exp: "Ordinarily, an omission (i.e., failure to act) does not lead to criminal responsibility unless it violated a legal duty to act[cite: 32]. The lifeguard's duty to aid people at the swimming pool existed only because she was employed as a lifeguard, and therefore it was in force only during her hours of employment[cite: 32]. Since her supervisor allowed her to leave at 8 P.M., her hours of employment ended at that time[cite: 32]."
    },
    {
        id: 16,
        topic: "Homicide / Proximate Causation",
        fp: "A woman was in her eighth month of pregnancy when her husband left her. Unwilling to face life as a single parent, she asked her doctor to perform an abortion. Her doctor refused, explaining that abortion so late in pregnancy could be dangerous. The woman's cousin, the defendant, had graduated from medical school and was waiting for news about whether she had passed the state medical board's licensing exam. The woman asked the defendant to abort the pregnancy, saying that she would kill herself if the defendant refused. Reluctantly, the defendant agreed to perform the abortion in the woman's kitchen. The defendant performed a surgical procedure that usually resulted in abortion, but because the pregnancy had advanced as far as it did, the baby was alive when separated from the woman's body. The defendant held the baby's head under water in an attempt to end his life, but after a short time, her conscience bothered her. She pulled the baby from the water and gave him mouth-to-mouth resuscitation, directing the woman to call an ambulance. When the ambulance arrived, the baby was breathing on his own. He was taken to a hospital where, because of brain damage, he remained in a coma until he died five years later.",
        q: "If the defendant is charged with murdering the baby, what is her most effective argument in defense?",
        opts: [
            "The woman had a constitutional right to an abortion.",
            "The defendant attempted to save the baby's life by giving him mouth-to-mouth resuscitation.",
            "The baby's death five years later after the defendant's act was not proximately caused by the defendant's act.",
            "The defendant lacked the necessary state of mind to be guilty of criminal homicide because the surgical procedure that she performed usually resulted in abortion."
        ],
        ans: 2,
        exp: "Murder is the unjustified killing of a human being with malice aforethought[cite: 32]. Since malice aforethought includes the intent to kill, and since the defendant held the baby's head under water in an attempt to end his life, the defendant had the necessary mental state[cite: 32]. However, many states have rules that fix a period of time (usually one to three years) following a defendant's act and provide that no death occurring after that time is proximately caused by the act[cite: 32]."
    },
    {
        id: 17,
        topic: "Inchoate Crimes / Conspiracy & Larceny vs Burglary",
        fp: "Two students were law students in the same Contracts class. Knowing that the professor kept his lecture notes in a cabinet in his office, they planned to break into the office for the purpose of copying his notes. The first student purchased a miniature camera for this purpose after discussing the purchase with the second student and collecting half the cost from her. When they saw the professor leave his office at lunchtime, they went there. The second student opened the locked door by slipping a strip of plastic under its latch. Once inside the office, the first student found the professor's notes and photographed them with the camera that he had purchased.",
        q: "Of which of the following crimes may the first student properly be convicted?",
        opts: [
            "Conspiracy to commit burglary.",
            "Conspiracy to commit larceny.",
            "Both conspiracy to commit burglary and conspiracy to commit larceny.",
            "Neither conspiracy to commit burglary nor conspiracy to commit larceny."
        ],
        ans: 3,
        exp: "At common law, burglary is defined as breaking and entering into the dwelling of another at night for the purpose of committing a larceny or any felony therein[cite: 32]. Since the agreement was to break into an office rather than a dwelling, and to do so at lunchtime rather than nighttime, it was not a conspiracy to commit burglary[cite: 32]. At common law, larceny is defined as intentionally taking and carrying off the personal property of another with the intent to permanently deprive the owner of it[cite: 32]. Since the agreement was to copy but not carry off the professor's notes, it was not a conspiracy to commit larceny[cite: 32]."
    },
    {
        id: 18,
        topic: "Homicide / Depraved Heart Murder",
        fp: "The defendant and his friend were trying to become stuntmen, so they filmed several stunt videos and posted them to the Internet. To continue to attract views, they made the stunt videos increasingly elaborate. In their latest video, the defendant's friend ran in front of a concrete wall while the defendant shot at him with a pistol. After the first take, the friend said, 'You need to shoot closer to me, so it looks a lot cooler.' In the second take, the defendant shot as close as he could to his friend. One of the bullets ricocheted off the wall and struck the friend in the head. He was killed instantly.",
        q: "What is the most serious crime the defendant can be charged with?",
        opts: [
            "Murder.",
            "Voluntary manslaughter.",
            "Involuntary manslaughter.",
            "No crime."
        ],
        ans: 0,
        exp: "Murder is the unlawful killing of another with malice aforethought[cite: 32]. Even if there is no intent to kill, malice aforethought can be implied when there is a reckless indifference to an unjustifiably high risk to human life (depraved heart murder)[cite: 32]. Because the defendant shot as close as he could to his friend as his friend ran in front of a concrete wall, a court would likely find he acted with reckless indifference to an unjustifiably high risk to human life[cite: 32]."
    },
    {
        id: 19,
        topic: "Property Crimes / False Pretenses vs. Attempted Murder",
        fp: "A hunter earned his living by catching poisonous reptiles for sale to zoos and private collectors. He had been commissioned to capture a rare, highly poisonous species of snake. The hunter hired a professional chemist to develop and manufacture a drug that he could take before handling this particular snake, and which would protect him against the reptile's poison in the event that he was bitten. Although the chemist knew that the bite of the snake was usually fatal, and that there was no defense against its venom, she welcomed the opportunity to earn some easy money. She sold the hunter a bottle of tablets, telling him that they were based on her secret formula and that they would protect him against the snake's venom. Actually, the tablets were made of nothing more than sugar, but the chemist thought that if the hunter believed strongly enough in their power, he would handle the snakes so confidently that he would not be bitten. The hunter caught a snake and took one of the chemist's tablets before handling it, following the instructions that she had given him. While he was handling the snake, it bit him. Because the tablets did not protect him against the venom, the hunter became ill as a result of the snakebite and almost died.",
        q: "If the chemist is prosecuted for her sale of the tablets to the hunter, what crime may she be guilty of?",
        opts: [
            "Attempted murder only.",
            "Obtaining property by false pretenses only.",
            "Attempted murder and obtaining property by false pretenses.",
            "Neither attempted murder nor obtaining property by false pretenses."
        ],
        ans: 1,
        exp: "Obtaining property by false pretenses is committed when, with the intent to cause the victim to transfer title to personal property, the defendant makes a fraudulent misrepresentation that causes the victim to do so[cite: 32]. Attempted murder requires a specific intent to cause the death of a human being[cite: 32]. Since the chemist believed that the hunter would not be bitten if he took the sugar pills, she lacked the intent necessary to make her liable for attempted murder[cite: 32]."
    },
    {
        id: 20,
        topic: "Parties to a Crime / Co-Conspirator Liability",
        fp: "The defendant and his brother ran a methamphetamine lab in their home. An undercover officer went to the home and tried to buy a large quantity of drugs. As the undercover officer was paying, his police radio went off. The defendant's brother yelled, 'Police!' and grabbed a nearby shotgun the brothers kept to defend their lab. He then shot the undercover officer in the leg. Other officers stormed the house and arrested both the defendant and his brother. Both of them were charged with conspiracy to sell methamphetamine and battery for the shooting of the officer.",
        q: "At trial, the defendant argued he was not guilty of battery because he was not the one who shot the officer. How should the court rule?",
        opts: [
            "Guilty, because the brother was defending the lab when he shot the officer.",
            "Guilty, because the defendant acted with reckless indifference in keeping the shotgun on the property to defend the lab.",
            "Not guilty, because the defendant did not shoot the undercover officer.",
            "Not guilty, because the sale of methamphetamine is not an inherently dangerous crime."
        ],
        ans: 0,
        exp: "Battery is an intentional harmful or offensive touching of another person[cite: 32]. A co-conspirator in a criminal operation is liable for any crimes committed by another co-conspirator if the crime was foreseeable and committed in furtherance of the conspiracy[cite: 32]. The shooting was foreseeable because the brothers kept the shotgun around to protect the lab, and it was committed in furtherance of the conspiracy because the brother was protecting the lab[cite: 32]."
    },
    {
        id: 21,
        topic: "Property Crimes / Larceny by Trick vs Embezzlement",
        fp: "After looking at a car that the seller had advertised for sale, the buyer agreed to purchase it for $3,000. The buyer gave the seller $100 cash, promising to bring the balance and to pick up the car the following day. In fact, the seller was a thief who had no intention of selling the car and had been collecting cash in down payments from buyers all over the state. As soon as the buyer left, the seller ran off with the $100. One week later, the seller was arrested and charged with embezzlement and larceny by trick.",
        q: "What can the seller properly be convicted of?",
        opts: [
            "Embezzlement only.",
            "Larceny by trick only.",
            "Embezzlement and larceny by trick.",
            "Neither embezzlement nor larceny by trick."
        ],
        ans: 3,
        exp: "Embezzlement is the conversion of personal property known to be another's with the intent to defraud, by a person in lawful possession of the property[cite: 32]. Since the seller's possession was the result of fraud and therefore not lawful, he is not guilty of embezzlement[cite: 32]. Larceny by trick is committed when the defendant fraudulently induces the victim to deliver possession of personal property to the defendant[cite: 32]. If the victim transfers title to the property involved, the crime of larceny by trick has not been committed; since the buyer's intention was to make the seller the owner of the money, he transferred title to the money, making it false pretenses rather than larceny by trick[cite: 32]."
    },
    {
        id: 22,
        topic: "Homicide / Voluntary Manslaughter (Provocation)",
        fp: "A wife was extremely hot-tempered and very possessive of her husband. She frequently flew into a hysterical rage if he even looked at another woman. One evening, the wife and the husband were in a bar when they began arguing. Wanting to hurt his wife, and knowing that it would infuriate her, the husband asked a waitress, who was sitting at the next table, to dance with him. The waitress accepted, but as she and the husband began to dance, the wife became enraged and ran at them, striking the husband over the head with a wine bottle. Later that night, the husband died of a head injury resulting from the blow. The wife was charged with murder, but her lawyer argued that the charge should be reduced to voluntary manslaughter because the wife was acting out of extreme passion when she struck the husband.",
        q: "Is the wife's lawyer correct?",
        opts: [
            "Yes, on the theory of deliberate provocation.",
            "Yes, because of the wife's extreme feelings of possessiveness regarding her husband.",
            "No, because the ordinary person in the wife's situation would not have become violently enraged by the husband's dancing with the waitress.",
            "No, on the theory of mistaken justification."
        ],
        ans: 2,
        exp: "Although killing with the intent, at least, to cause great bodily harm is ordinarily classified as murder, it may be reduced to voluntary manslaughter if the defendant was acting in the heat of passion[cite: 32]. This is only so, however, if the provocation that produced the passion would have done so in the person of ordinary temperament[cite: 32]. The objective standard makes the wife's emotional peculiarities irrelevant[cite: 32]."
    },
    {
        id: 23,
        topic: "Property Crimes / Burglary (Intent)",
        fp: "The company was a retailer of computer hardware and software. It frequently sold its products on credit, and credit customers were required to execute security agreements giving the company, in the event of default in payment, the right to repossess the goods sold without resort to judicial proceedings. The defendant was employed by the company as a collection agent. One night, the defendant went to a customer's home to demand that she either make her payments or return the computer hardware. The defendant tried the door, found it unlocked, and entered the apartment. He called the customer's name but found that nobody was home. He was about to leave when he saw the computer hardware that the customer had purchased from the company. He left a signed note that said, 'Because of non-payment, I have repossessed your computer.' He then took the equipment with him.",
        q: "If the defendant is charged with common law burglary, which of the following would be his most effective argument in defense?",
        opts: [
            "He did not use force to make an entry.",
            "He did not enter by 'breaking' since the door was not locked.",
            "When he opened the door and entered the apartment, he had no intention of committing a crime.",
            "He left a note explaining his actions."
        ],
        ans: 2,
        exp: "At common law, burglary is defined as breaking and entering into the dwelling of another at night with the intent to commit a larceny or felony therein[cite: 32]. If, at the time the defendant entered, he did not intend to commit an act that would amount to a crime, he cannot be guilty of burglary[cite: 32]. A 'breaking' occurs when the defendant creates the opening through which he or she enters, even though no force is used (such as opening an unlocked door)[cite: 32]."
    },
    {
        id: 24,
        topic: "General Principles / Actus Reus (Unconsciousness)",
        fp: "The defendant suffered a severe head injury in an accident that occurred three years ago. As a result, she experienced eight incidents of sudden unconsciousness, each lasting approximately two minutes. All the incidents occurred within a three-month period immediately following the accident, and all occurred while the defendant was at home. Last week, she was driving her automobile in a lawful manner when she suddenly lost consciousness as a result of the head injury. Her car swerved out of control onto the sidewalk, striking and permanently injuring a pedestrian. The defendant was charged with violating a state statute that defines the crime of 'reckless maiming' as 'causing permanent injury to another person by acting in knowing disregard of the plain and strong likelihood that death or serious personal injury will result.'",
        q: "Which of the following is the defendant's most effective argument in defense against the charge of reckless maiming?",
        opts: [
            "The defendant's head injury was not the result of any culpable conduct by the defendant.",
            "After losing consciousness while driving, the defendant was no longer capable of exercising control over the operation of her vehicle.",
            "The defendant reasonably believed that she would not have any further incidents of unconsciousness.",
            "The defendant did not know that her driving would lead to death or serious injury."
        ],
        ans: 2,
        exp: "Since all the incidents of unconsciousness occurred within three months after the accident and nearly three years ago, it was probably reasonable for the defendant to believe that they would not occur again[cite: 32]. If she entertained that belief, and if it was reasonable, she cannot be said to have knowingly disregarded the plain and strong likelihood of harm as required by the statute[cite: 32]."
    },
    {
        id: 25,
        topic: "Homicide / Voluntary Manslaughter (Cooling Off)",
        fp: "The defendant came home from work to find that his wife and two of his children had been slashed and cut and were lying dead in a pool of blood. His third child was also cut and bleeding severely. As the defendant approached, the child said, 'Our neighbor killed Mommy.' The defendant said, 'I'll kill that son of a bitch.' Then he loaded his shotgun and went next door to the neighbor's house. He knocked on the door, and the neighbor opened the door and said, 'I killed your family, what are you going to do about it?' The defendant shot and killed him. State statutes codify the common law definitions of voluntary and involuntary manslaughter, and define first-degree murder as 'the deliberate and premeditated killing of a human being,' and second-degree murder as 'the killing of a human being with malice aforethought.'",
        q: "If the defendant is charged with voluntary manslaughter, should the court find him guilty?",
        opts: [
            "Yes, because he intended the death of the neighbor because he believed that the neighbor had killed his wife and children.",
            "Yes, because the killing of the neighbor was deliberate and premeditated.",
            "No, because the killing of the neighbor was deliberate and premeditated.",
            "No, because the neighbor was the killer of the defendant's wife and children."
        ],
        ans: 0,
        exp: "Voluntary manslaughter is committed when the defendant, with the intent to cause death or great bodily harm, causes the death of a human being under circumstances such that the defendant is acting in the 'heat of passion.'[cite: 32] The belief that the neighbor brutally murdered his family probably is sufficient to furnish the heat of passion that reduces the crime from murder to manslaughter[cite: 32]."
    }
];
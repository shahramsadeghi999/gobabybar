const examData = [
    // FACT PATTERN 1 (Q1)
    {
        id: 1,
        topic: "General Principles / Mens Rea ('Knowingly')",
        fp: "Dart is charged with the statutory offense of 'knowingly violating a regulation of the State Alcoholic Beverage Control Board' and specifically that he knowingly violated regulation number 345-90 issued by the State Alcoholic Beverage Control Board. That regulation prohibits the sale of alcoholic beverages to any person under the age of 18 and also prohibits the sale of any alcoholic beverage to a person over the age of 17 and under the age of 22 without the presentation of such person's driver's license or other identification showing the age of the purchaser to be 18 or older.\n\nThe evidence showed that Dart was a bartender in a tavern and sold a bottle of beer to a person who was 17 years old and that Dart did not ask for or see the purchaser's driver's license or any other identification.",
        q: "Which of the following, if found by the jury, would be of the most help to Dart?",
        opts: [
            "The purchaser had a driver's license that falsely showed his age to be 21.",
            "Dart had never been told he was supposed to check identification of persons over 17 and under 22 before selling them alcohol.",
            "Dart did not know that the regulations classified beer as an alcoholic beverage.",
            "Dart mistakenly believed the purchaser to be 24 years old."
        ],
        ans: 3,
        exp: "Dart did not 'knowingly' violate a regulation if he did not think that the requirements of the regulation were required to be applied in the situation he encountered[cite: 34]. If Dart believed the purchaser was 24 years old, he would not think that either of the provisions of the regulation applied[cite: 34]. A defendant who is mistaken about the underlying facts the existence of which make the conduct illegal won't be said to have 'knowingly' violated the statute[cite: 34]."
    },
    // FACT PATTERN 2 (Q2)
    {
        id: 2,
        topic: "General Principles / Mens Rea ('Practically Certain')",
        fp: "A man decided to steal a car he saw parked on a hill. When he got in and started the engine, the car began rolling down the hill. The man quickly discovered that the car's brakes did not work. He crashed through the window of a store at the bottom of the hill.\n\nThe man was charged with larceny of the car and with the crime of knowingly damaging the store's property. At trial, the judge instructed the jury that if the jury found both that the man was guilty of larceny of the car and that the damage to the store was the result of that larceny, then it should also find him guilty of malicious damage of property.\n\nThe man was convicted on both counts. On appeal, he argued that the conviction for malicious damage of property should be reversed because the instruction was not a correct statement of the law.",
        q: "Should the man's conviction be affirmed?",
        opts: [
            "Yes, because his intent to steal the car provides the necessary mental element.",
            "Yes, because he was committing a felony.",
            "No, because the instruction wrongly described the necessary mental state.",
            "No, because it would violate double jeopardy to convict the man of two crimes for a single act."
        ],
        ans: 2,
        exp: "For the man to have knowingly damaged the property, the jury would have to have found that he either intended to damage the property, or knew that such damage was practically certain to result from his actions[cite: 34]. At the moment he stole the car by starting the engine, he did not know that damage to the store was 'practically certain' to occur, because he had not yet even discovered that the brakes didn't work[cite: 34]. The judge's instruction wrongly described the mental state by substituting the intent to commit larceny for the required knowledge of property damage[cite: 34]."
    },
    // FACT PATTERN 3 (Q3)
    {
        id: 3,
        topic: "General Principles / Mens Rea ('Recklessly')",
        fp: "A state statute provides: 'Aggravated robbery of the elderly consists of robbery committed against a victim who is 65 years of age or older.' Another state statute provides that when a criminal statute does not designate a necessary mental state, the mental state required is recklessness. A third state statute provides that a person acts recklessly if the person 'consciously disregards a substantial and unjustified risk that the material element exists or will result from the person's conduct.'\n\nThe evidence at a criminal trial showed that the defendant robbed a 66-year-old man outside a senior citizens' center. The defendant testified truthfully that the robbery had occurred on a dark night, that she had had no idea how old the victim was and had not cared how old the victim was, and that she had intended to rob whomever she encountered.",
        q: "Could the defendant properly be convicted of aggravated robbery of the elderly?",
        opts: [
            "No, because the only evidence on the issue showed that the defendant did not know, nor could she reasonably have known, the victim's age.",
            "No, because there was no evidence of a substantial risk that the victim was age 65 or older.",
            "Yes, because the evidence was clear that the victim was 66 years old, and the statute is designed to protect the elderly.",
            "Yes, because the jury could find that there was no justification for the defendant's conduct and that she was willing to take the risk that the victim was age 65 or older."
        ],
        ans: 3,
        exp: "A reasonable jury could find that robbing someone outside a senior citizens' center creates a 'substantial' risk that the victim is over 65, and that it was 'unjustified' for the defendant to run that risk given the lack of social utility in her behavior[cite: 34]. Furthermore, her testimony that she didn't care about the age and intended to rob whomever she encountered justifies the conclusion that she 'consciously disregarded' the risk that the victim was over 65[cite: 34]."
    },
    // FACT PATTERN 4 (Q4)
    {
        id: 4,
        topic: "General Principles / Strict Liability",
        fp: "A state statute provides: 'The sale of an alcoholic beverage to any person under the age of 21 is a misdemeanor.'\n\nA woman who was 20 years old, but who looked older and who had a very convincing fake driver's license indicating that she was 24, entered a convenience store, picked up a six-pack of beer, and placed the beer on the counter. The store clerk, after examining the driver's license, rang up the purchase.\n\nBoth the clerk and the store owner have been charged with violating the state statute.",
        q: "If the court finds both the clerk and the store owner guilty, what standard of liability must the court have interpreted the statute to impose?",
        opts: [
            "Strict liability only.",
            "Vicarious liability only.",
            "Both strict and vicarious liability.",
            "Either strict or vicarious liability."
        ],
        ans: 2,
        exp: "The court must have applied strict liability to convict the clerk (who did not act knowingly, and arguably not even negligently), and vicarious liability to convict the store owner for the sale by the clerk[cite: 34]. Strict liability offenses are defined so as to have no mental element at all, allowing conviction merely based on proof of the actus reus[cite: 34]."
    },
    // FACT PATTERN 5 (Q5)
    {
        id: 5,
        topic: "Defenses / Insanity",
        fp: "A woman charged with murder has entered a plea of not guilty by reason of insanity. At her trial, in which the questions of guilt and sanity are being tried together, the evidence shows that the woman stalked the victim for several hours before following him to an isolated hiking trail where she shot and killed him. Expert witnesses for the defense have testified that the woman knew that killing was illegal and wrong, but that she suffered from a serious mental illness that left her in the grip of a powerful and irresistible compulsion to kill the victim.",
        q: "If the jury believes the testimony of the defense experts, under what circumstances could the jury properly acquit the woman of murder?",
        opts: [
            "Only if the jurisdiction follows the M'Naghten test for insanity.",
            "Only if the jurisdiction follows the ALI Model Penal Code test for insanity.",
            "If the jurisdiction follows either the M'Naghten or the ALI Model Penal Code test for insanity.",
            "Even if the jurisdiction has abolished the insanity defense."
        ],
        ans: 1,
        exp: "The jury could find the woman to be legally insane under the ALI Model Penal Code test, because she could not conform her conduct to the requirements of the law (the 'irresistible impulse' test)[cite: 34]. She could not be found legally insane under the M'Naghten test because she knew the nature and quality of her act and knew the difference between right and wrong[cite: 34]."
    },
    // FACT PATTERN 6 (Q6)
    {
        id: 6,
        topic: "Defenses / Voluntary Intoxication",
        fp: "During an altercation between two men at a company picnic, the victim suffered a knife wound in his abdomen and the defendant was charged with assault and attempted murder. At his trial, the defendant seeks to offer evidence that he had been drinking at the picnic and was highly intoxicated at the time of the altercation.",
        q: "In a jurisdiction that follows the common-law rules concerning admissibility of evidence of intoxication, the evidence of the defendant's intoxication should be",
        opts: [
            "admitted without limitation.",
            "admitted subject to an instruction that it pertains only to the attempted murder charge.",
            "admitted subject to an instruction that it pertains only to the assault charge.",
            "excluded altogether."
        ],
        ans: 0,
        exp: "When the defendant is charged with a crime that requires purpose or intent, evidence of voluntary intoxication may be offered to establish that the intoxication may have prevented the defendant from formulating the requisite intent[cite: 34]. Assault requires an intent to cause bodily harm, and attempted murder requires an intent to kill; therefore, the evidence is relevant to both specific intent crimes and must be admitted unconditionally[cite: 34]."
    },
    // FACT PATTERN 7 (Q7)
    {
        id: 7,
        topic: "Defenses / Involuntary Intoxication",
        fp: "A defendant was charged with battery, defined as at common law. At trial, an expert witness testified for the defense that the defendant, an athlete, was under the influence of a performance-enhancing drug at the time he committed the battery and that he would not have done so had he not been so influenced. The defendant asked for an instruction to the effect that if the jury believed that he was influenced by the drug at the time of the crime and would not have committed it otherwise, it had to acquit him.",
        q: "Which of the following circumstances would most aid the defendant's argument in favor of such an instruction?",
        opts: [
            "Evidence that the defendant is addicted to this drug and has an overwhelming urge to consume it.",
            "Evidence that the defendant's coach, who gave him the drug, told him it was only an aspirin.",
            "Evidence that the victim of the assault taunted the defendant about his use of the drug immediately before the assault.",
            "Expert testimony that a reasonable person, on consuming this drug, may experience uncontrollable rages."
        ],
        ans: 1,
        exp: "Involuntary intoxication serves as a defense if it resulted from an innocent mistake by the defendant as to the character of the substance taken, as when another person tricked him into taking the drugs[cite: 34]. The defendant's honest belief that what he was taking was aspirin would support the conclusion that he did not knowingly take a substance that would intoxicate him[cite: 34]."
    },
    // FACT PATTERN 8 (Q8)
    {
        id: 8,
        topic: "Defenses / Duress vs Murder",
        fp: "Smith joined a neighborhood gang. At a gang meeting, as part of the initiation process, the leader ordered Smith to kill Hardy, a member of a rival gang. Smith refused, saying he no longer wanted to be part of the group. The leader, with the approval of the other members, told Smith that he had become too involved with the gang to quit and that they would kill him if he did not accomplish the murder of Hardy. The next day Smith shot Hardy to death while Hardy was sitting on his motorcycle outside a restaurant.\n\nSmith is charged with first-degree murder. First-degree murder is defined in the jurisdiction as the intentional premeditated killing of another. Second-degree murder is all other murder at common law.",
        q: "If Smith killed Hardy because of the threat to his own life, Smith should be found",
        opts: [
            "not guilty, because of the defense of duress.",
            "not guilty, because of the defense of necessity.",
            "guilty of first-degree murder.",
            "guilty of second-degree murder."
        ],
        ans: 2,
        exp: "Smith should be convicted of first-degree murder because he intentionally and with premeditation killed Hardy[cite: 34]. Duress is generally not allowed as a defense when the defendant is charged with the intentional killing of another[cite: 34]. Furthermore, Smith was not in imminent danger when he killed Hardy, which is required for duress[cite: 34]."
    },
    // FACT PATTERN 9 (Q9)
    {
        id: 9,
        topic: "Defenses / Self-Defense (Duty to Retreat)",
        fp: "Ralph and Sam were engaged in a heated discussion over the relative merits of their favorite professional football teams when Ralph said, 'You have to be one of the dumbest persons around.' Sam slapped Ralph. Ralph drew a knife and stabbed Sam in the stomach. Other persons then stepped in and stopped any further fighting. Despite the pleas of the other persons, Sam refused to go to a hospital or to seek medical treatment. About two hours later, he died as the result of a loss of blood. Ralph was charged with the murder of Sam. At trial, medical evidence established that if Sam had been taken to a hospital, he would have survived.\n\nAt the end of the case, Ralph moves for a judgment of acquittal or, in the alternative, for an instruction on the elements of voluntary manslaughter.",
        q: "The court should",
        opts: [
            "grant the motion for acquittal.",
            "deny the motion for acquittal, but instruct on manslaughter because there is evidence of adequate provocation.",
            "deny both motions, because Ralph failed to retreat.",
            "deny both motions, because malice may be proved by the intentional use of a deadly weapon on a vital part of the body."
        ],
        ans: 3,
        exp: "Sam's slap neither caused Ralph serious bodily harm nor gave Ralph reason to fear serious bodily harm, so Ralph was not privileged to respond with deadly force, negating self-defense (acquittal)[cite: 34]. Additionally, a mere slap is generally not considered sufficient provocation to reduce murder to voluntary manslaughter, so the instruction on manslaughter should be denied[cite: 34]. (Note: Multiple answers were accepted by examiners for this question, but D is logically soundest as it denies both motions correctly)."
    },
    // FACT PATTERN 10 (Q10)
    {
        id: 10,
        topic: "Defenses / Self-Defense (Mistake)",
        fp: "While walking home one evening, Harold, an off-duty police officer, was accosted by Jones, a stranger. Jones had been drinking and mistakenly thought Harold was a man who was having an affair with his wife. Intending to frighten Harold but not to harm him, Jones pulled out a knife, screamed obscenities, and told Harold he was going to kill him. Frightened and reasonably believing Jones was going to kill him and that using deadly force was his only salvation, Harold took out his service revolver and shot and killed Jones. Harold is charged with murder.",
        q: "Harold's claim of self-defense should be",
        opts: [
            "sustained, because Harold reasonably believed Jones was planning to kill him and that deadly force was required.",
            "sustained, because the killing was in hot blood upon sufficient provocation.",
            "denied, because Jones did not in fact intend to harm Harold and Harold was incorrect in believing that he did.",
            "denied, because Harold was not defending his home and had an obligation to retreat or to repel with less than deadly force."
        ],
        ans: 0,
        exp: "Harold's claim of self-defense is valid because he reasonably believed that his life was in danger and that the use of deadly force was required to save his own life[cite: 34]. The defendant must actually believe that he was in danger (subjective) and that belief must be reasonable (objective)[cite: 34]. The fact that Harold was mistaken regarding Jones's actual intent does not deprive him of the defense of self-defense[cite: 34]."
    },
    // FACT PATTERN 11 (Q11)
    {
        id: 11,
        topic: "Defenses / Mistake of Fact",
        fp: "In which of the following situations would the defendant's mistake most likely constitute a defense to the crime charged?",
        q: "In which of the following situations would the defendant's mistake most likely constitute a defense to the crime charged?",
        opts: [
            "A local ordinance forbids the sale of alcoholic beverages to persons under 18 years of age. Relying on false identification, the defendant sells champagne to a 16-year-old high school student. The defendant is charged with illegal sale of alcoholic beverages.",
            "Mistaking the defendant for a narcotics suspect, an undercover police officer attempts to arrest him. The defendant, unaware that the person who has grabbed him is an officer, hits him and knocks him unconscious. The defendant is charged with assault.",
            "The defendant, aged 23, has sexual intercourse with a 15-year-old prostitute who tells the defendant that she is 18. The defendant is charged with the felony of statutory rape under a statute that makes sexual relations with a child under 16 a felony.",
            "Relying on erroneous advice from his attorney that, if his wife has abandoned him for more than a year, he is free to marry. The defendant remarries and is subsequently charged with bigamy."
        ],
        ans: 1,
        exp: "The right to use self-defense is not lost where the defendant makes a reasonable mistake about the need for self-defense on the present occasion[cite: 34]. The fact that the defendant mistakenly (but reasonably) believes that the person who has grabbed him is an attacker rather than an officer does not cause him to lose the right to use a reasonable level of force to resist[cite: 34]. Options regarding statutory rape and selling alcohol to minors involve strict liability offenses where mistake is no defense[cite: 34]."
    },
    // FACT PATTERN 12 (Q12)
    {
        id: 12,
        topic: "Defenses / Entrapment",
        fp: "Kingsley was prosecuted for selling cocaine to an undercover police agent. At his trial, he testified that he only sold the drugs to the agent, whom Kingsley knew as 'Speedy,' because Speedy had told him that he (Speedy) would be killed by fellow gang members unless he supplied them with cocaine. The prosecution did not cross-examine Kingsley. As rebuttal evidence, however, the prosecutor introduced records, over Kingsley's objection, showing that Kingsley had two prior convictions for narcotics-related offenses. The court instructed the jury concerning the defense of entrapment and added, also over Kingsley's objection but in accord with state law, that it should acquit on the ground of entrapment only if it found that the defendant had established the elements of the defense by a preponderance of the evidence. Kingsley was convicted.",
        q: "On appeal, Kingsley's conviction should be",
        opts: [
            "reversed, because it was an error for the court to admit the evidence of his prior convictions as substantive evidence.",
            "reversed, because it was a violation of due process to impose on the defense a burden of persuasion concerning entrapment.",
            "reversed, for both of the above reasons.",
            "affirmed, because neither of the above reasons constitutes a ground for reversal."
        ],
        ans: 3,
        exp: "Where entrapment is at issue, the prosecution must prove that the defendant was disposed to commit the criminal act prior to first being approached by government agents, which may be done by showing the defendant's prior related crimes[cite: 34]. Furthermore, entrapment is an affirmative defense, and a defendant may constitutionally be required to bear the burden of persuasion by a preponderance of the evidence as to such a defense[cite: 34]."
    },
    // FACT PATTERN 13 (Q13)
    {
        id: 13,
        topic: "Inchoate Crimes / Attempt (Factual Impossibility)",
        fp: "A woman promised to pay $10,000 to a hit man if he would kill her neighbor in any manner that could not be traced to her. The hit man bought a gun and watched the neighbor's house for an opportunity to shoot him. One evening, unaware of the hit man's presence, the neighbor tripped as he was walking toward his house, falling and hitting his head against the front steps. Believing that the neighbor was unconscious, the hit man ran over to him and shot him twice in the chest.\n\nWhen the woman learned of the neighbor's death, she paid the hit man $10,000. A medical examiner determined that the neighbor was already dead when the hit man shot him.",
        q: "What is the most serious crime for which the woman properly could be convicted?",
        opts: [
            "Murder.",
            "Attempted murder.",
            "Conspiracy.",
            "Solicitation."
        ],
        ans: 1,
        exp: "The woman cannot be guilty of murder because the hit man did not in fact cause the neighbor's death (he was already dead)[cite: 34]. However, the factual impossibility defense is rejected by virtually every modern court; because the hit man had the specific intent to kill and took a substantial step, he is guilty of attempted murder[cite: 34]. Since the woman urged the hit man and had the intent to kill, she is guilty of attempted murder on an accomplice theory[cite: 34]."
    },
    // FACT PATTERN 14 (Q14)
    {
        id: 14,
        topic: "Inchoate Crimes / Attempted Robbery",
        fp: "Robert walked into a store that had a check-cashing service and tried to cash a $550 check which was payable to him. The attendant on duty refused to cash the check because Robert did not have two forms of identification, which the store's policies required. Robert, who had no money except for the check and who needed cash to pay for food and a place to sleep, became agitated. He put his hand into his pocket and growled, 'Give me the money or I'll start shooting.' The attendant, who knew Robert as a neighborhood character, did not believe that he was violent or had a gun. However, because the attendant felt sorry for Robert, he handed over the cash. Robert left the check on the counter and departed. The attendant picked up the check and found that Robert had failed to endorse it.",
        q: "If Robert is guilty of any crime, he is most likely guilty of",
        opts: [
            "robbery.",
            "attempted robbery.",
            "theft by false pretenses.",
            "larceny by trick."
        ],
        ans: 1,
        exp: "For a defendant to be convicted of attempting a particular substantive crime, he must have had the intent to do acts which, if they had been carried out, would have resulted in the commission of that crime[cite: 34]. Robert pretended to have a gun and threatened to shoot; the fact that his threat was not taken seriously by the attendant would not negate Robert's intent to cause the attendant to be afraid and hand over the money[cite: 34]. Thus, he is guilty of attempted robbery[cite: 34]."
    },
    // FACT PATTERN 15 (Q15)
    {
        id: 15,
        topic: "Inchoate Crimes / Legal Impossibility",
        fp: "Arnold decided to destroy an old warehouse that he owned because the taxes on the structure exceeded the income that he could receive from it. He crept into the building in the middle of the night with a can of gasoline and a fuse and set the fuse timer for 30 minutes. He then left the building. The fuse failed to ignite, and the building was not harmed.\n\nArson is defined in this jurisdiction as 'The intentional burning of any building or structure of another, without the consent of the owner.' Arnold believed, however, that burning one's own building was arson, having been so advised by his lawyer.",
        q: "Has Arnold committed attempted arson?",
        opts: [
            "Yes, because factual impossibility is no defense.",
            "Yes, because a mistake of law even on the advice of an attorney is no defense.",
            "No, because his mistake negated a necessary mental state.",
            "No, because even if his actions had every consequence he intended, they would not have constituted arson."
        ],
        ans: 3,
        exp: "Arnold is not guilty of attempted arson because, even if his actions had their desired result, a crime would not have been committed (legal impossibility)[cite: 34]. Although Arnold intended to burn the warehouse down, believing that doing so would be a crime, had everything gone as planned, he still wouldn't have committed arson because the statute specifies that an owner can't be guilty of burning his own building[cite: 34]."
    },
    // FACT PATTERN 16 (Q16)
    {
        id: 16,
        topic: "Parties to a Crime / Accessory After the Fact",
        fp: "Two women decided to rob a bank. They asked a friend to drive them to the bank without telling him that they intended to rob it. The friend waited in his car outside the bank while the women went in. Suddenly, the two women rushed from the bank holding bags of money as alarms sounded. The friend drove the women back to their apartment.",
        q: "What crime, if any, has the friend committed?",
        opts: [
            "Accessory after the fact to bank robbery.",
            "Accomplice to bank robbery.",
            "Conspiracy to commit bank robbery.",
            "No crime."
        ],
        ans: 0,
        exp: "Although the friend was not informed of the women's plan, he would reasonably have become aware of the robbery when they emerged running from the bank, bags in hand, with alarms sounding[cite: 34]. The friend's subsequent act-driving the women away from the bank to their apartment-would support a guilty verdict on the crime of accessory after the fact[cite: 34]."
    },
    // FACT PATTERN 17 (Q17)
    {
        id: 17,
        topic: "Inchoate Crimes / Conspiracy (Protected Class)",
        fp: "A young man, who was 18 years old, and his 14-year-old girlfriend, made plans to meet in the young man's apartment to have sexual intercourse, and they then carried out their plan. The girlfriend later told her mother about the incident. The young man was charged with statutory rape and conspiracy to commit statutory rape.\n\nIn the jurisdiction, the age of consent is 15, and the law of conspiracy is the same as at common law. The young man was convicted of both charges and given consecutive sentences. On appeal, he contends that his conspiracy conviction should be reversed.",
        q: "That conviction should be",
        opts: [
            "affirmed, because he agreed with his girlfriend to commit the crime.",
            "reversed, because the girlfriend could not be a conspirator to this crime.",
            "reversed, because the crime is one that can only be committed by agreement and thus Wharton's Rule bars conspiracy liability.",
            "reversed, because one cannot conspire with a person too young to consent."
        ],
        ans: 1,
        exp: "Members of a protected class cannot be members of a conspiracy to commit the crime that is designed to protect that class of people[cite: 34]. At common law, if only two people are involved, the person who is not in the protected class cannot be guilty of criminal conspiracy on the basis of an agreement with a member in the protected class, since there must be at least two members of the conspiracy[cite: 34]. Since the girl was part of the protected class, she could not be a conspirator, preventing the young man from being convicted of common-law conspiracy[cite: 34]."
    },
    // FACT PATTERN 18 (Q18)
    {
        id: 18,
        topic: "Inchoate Crimes / Conspiracy (Unilateral Approach)",
        fp: "A foreign diplomat discovered that a small person could enter a jewelry store by crawling through an air vent. The diplomat became friendly with a woman in a bar who he believed was small enough to crawl through the air vent. Without telling her that he was a diplomat, he explained how she could get into the jewelry store. She agreed to help him burglarize the store. Someone overheard their conversation and reported it to the police. Shortly thereafter, the police arrested the diplomat and the woman. Both were charged with conspiracy to commit burglary.\n\nBefore trial, the diplomat moved to dismiss the charge against him on the ground that he was entitled to diplomatic immunity. The court granted his motion. The woman then moved to dismiss the conspiracy charge against her.\n\nThe jurisdiction has adopted the Model Penal Code version of conspiracy.",
        q: "Should the woman's motion to dismiss the conspiracy charge against her be granted?",
        opts: [
            "No, because the diplomat's defense does not negate any element of the crime.",
            "No, because the woman was not aware of the diplomat's status.",
            "Yes, because a conspiracy requires two guilty participants.",
            "Yes, because but for the diplomat's conduct, no conspiracy would have occurred."
        ],
        ans: 0,
        exp: "Model Penal Code § 5.03(1) adopts a 'unilateral' interpretation of conspiracy[cite: 34]. Where the unilateral interpretation is applied, as long as one defendant meets all requirements for conspiracy (e.g., guilty mind plus agreement with another), that defendant may be convicted even though no other defendant could be convicted[cite: 34]. The diplomat's personal immunity defense does not negate any element of the woman's crime[cite: 34]."
    },
    // FACT PATTERN 19 (Q19)
    {
        id: 19,
        topic: "Inchoate Crimes / Conspiracy vs Completed Offense",
        fp: "Jackson and Brannick planned to break into a federal government office to steal food stamps. Jackson telephoned Crowley one night and asked whether Crowley wanted to buy some 'hot' food stamps. Crowley, who understood that 'hot' meant stolen, said, 'Sure, bring them right over.' Jackson and Brannick then successfully executed their scheme. That same night they delivered the food stamps to Crowley, who bought them for $500. Crowley did not ask when or by whom the stamps were stolen. All three were arrested. Jackson and Brannick entered guilty pleas in federal court to a charge of larceny in connection with the theft. Crowley was never charged with anything.",
        q: "If Jackson and Brannick are charged with conspiracy to steal the stamps in the state court, they should, on the evidence stated, be found",
        opts: [
            "not guilty, because the charge of conspiracy is a lesser included offense in the charge of larceny.",
            "not guilty, because to charge them with conspiracy after their conviction of larceny would constitute double jeopardy.",
            "not guilty, because the state prosecution is barred by the prosecution in federal court.",
            "guilty, because they planned and conspired to steal the stamps."
        ],
        ans: 3,
        exp: "Conspiracy is a distinct offense which is not merged into the crime which is the object of the conspiracy[cite: 34]. A conspiracy requires an agreement between at least two people, an intent to enter into such an agreement, and the intent to achieve the agreement's unlawful objective[cite: 34]. Jackson and Brannick planned and conspired to steal the stamps, making them guilty of conspiracy[cite: 34]."
    },
    // FACT PATTERN 20 (Q20)
    {
        id: 20,
        topic: "Parties to a Crime / Accomplice to Reckless Conduct",
        fp: "In a jurisdiction that has abolished the felony-murder rule, but otherwise follows the common law of murder, a woman and a man, both armed with automatic weapons, went into a bank to rob it. The man ordered all the persons in the bank to lie on the floor. When some were slow to obey, the woman, not intending to hit anyone, fired about 15 rounds into the air. One of these ricocheted off a stone column and struck and killed a customer in the bank.\n\nThe woman and the man were charged with murder of the customer.",
        q: "Which of the following is correct?",
        opts: [
            "The woman can be convicted of murder, because she did the act of killing, but the man cannot be convicted of either murder or manslaughter.",
            "Neither can be guilty of murder, but both can be convicted of manslaughter based upon an unintentional homicide.",
            "The woman can be convicted only of manslaughter, but the man cannot be convicted of murder or manslaughter.",
            "Both can be convicted of murder."
        ],
        ans: 3,
        exp: "Firing automatic weapons into the ceiling of a bank full of people demonstrates a 'reckless indifference to an unjustifiably high risk to human life,' which satisfies the mental state for common-law murder[cite: 34]. The man is guilty of murder as an accomplice because he intentionally assisted the woman in the recklessly-dangerous armed bank robbery, thereby sharing the requisite mental state[cite: 34]."
    },
    // FACT PATTERN 21 (Q21)
    {
        id: 21,
        topic: "Parties to a Crime / Innocent Agent",
        fp: "Grace, while baby-sitting one night, noticed that Sam, who lived next door, had left his house but that the door did not close completely behind him. Grace said to Roy, the 11-year-old boy she was baby-sitting with, 'Let's play a game. You go next door and see if you can find my portable television set, which I lent to Sam, and bring it over here.' Grace knew that Sam had a portable television set and Grace planned to keep the set for herself. Roy thought the set belonged to Grace, went next door, found the television set, and carried it out the front door. At that moment, Sam returned home and discovered Roy in his front yard with the television set. Roy explained the 'game' he and Grace were playing. Sam took back his television set and called the police.",
        q: "Grace is",
        opts: [
            "not guilty of larceny or attempted larceny, because Roy did not commit any crime.",
            "not guilty of larceny but guilty of attempted larceny, because she never acquired possession of the television set.",
            "guilty of larceny as an accessory to Roy.",
            "guilty of larceny by the use of an innocent agent."
        ],
        ans: 3,
        exp: "Anyone who intentionally acts through an innocent agent is classified as a principal[cite: 34]. Grace is guilty of larceny because she knowingly created a mistake of fact in the mind of Roy, and intentionally induced him to commit acts satisfying the elements of larceny[cite: 34]. Since Roy was an innocent agent who acted at the behest of Grace, Roy's acts will be ascribed to Grace as if she had done them herself[cite: 34]."
    },
    // FACT PATTERN 22 (Q22)
    {
        id: 22,
        topic: "Inchoate Crimes / Solicitation",
        fp: "State authorities received information that a man had been making threats against his ex-wife. To determine whether the man was serious, an undercover officer introduced himself to the man at a bar. The officer said that he had previously taken care of problems for angry spouses. After some discussion in which the man expressed his extreme anger at his ex-wife, the man offered the officer $5,000 to kill her. The officer agreed and made arrangements to meet the man at the bar the next day to collect the $5,000 payment. When the man showed up the next day at the bar, authorities immediately arrested him.\n\nThe jurisdiction defines attempt, solicitation, and misprision of a felony as at common law, and also punishes bilateral conspiracies. The crimes below are listed in descending order of seriousness.",
        q: "What is the most serious crime of which the man can properly be convicted?",
        opts: [
            "Attempted murder.",
            "Conspiracy to commit murder.",
            "Solicitation of murder.",
            "Misprision of a felony."
        ],
        ans: 2,
        exp: "The common-law crime of solicitation occurs when the defendant requests or encourages another to perform a criminal act, regardless of whether the other agrees[cite: 34]. Since the man attempted to induce the undercover officer to murder the man's ex-wife, he committed solicitation of murder[cite: 34]. He did not commit attempted murder because offering to pay did not achieve a dangerous proximity to success[cite: 34], and no bilateral conspiracy existed because the officer was feigning agreement[cite: 34]."
    },
    // FACT PATTERN 23 (Q23)
    {
        id: 23,
        topic: "Homicide / Consent (Mercy Killing)",
        fp: "Suffering from painful and terminal cancer, Willa persuaded Harold, her husband, to kill her to end her misery. As they reminisced about their life together and reaffirmed their love for each other, Harold tried to discourage Willa from giving up. Willa insisted, however, and finally Harold held a gun to her head and killed her.",
        q: "The most serious degree of criminal homicide of which Harold can be legally convicted is",
        opts: [
            "no degree of criminal homicide.",
            "involuntary manslaughter.",
            "voluntary manslaughter.",
            "murder."
        ],
        ans: 3,
        exp: "Intent-to-kill murder requires that the defendant have the desire to bring about the death of another[cite: 34]. Harold intended to kill Willa, held a gun to her head, and succeeded in killing her, making him guilty of murder[cite: 34]. There is no exception in the doctrine of common-law murder for 'mercy killings.'[cite: 34]"
    },
    // FACT PATTERN 24 (Q24)
    {
        id: 24,
        topic: "Homicide / Murder (Intent to do serious bodily harm)",
        fp: "At a party for coworkers at Defendant's home, Victim accused Defendant of making advances toward his wife. Victim and his wife left the party. The next day at work, Defendant saw Victim and struck him on the head with a soft-drink bottle. Victim fell into a coma and died two weeks after the incident.\n\nThis jurisdiction defines aggravated assault as an assault with any weapon or dangerous implement and punishes it as a felony. It defines murder as the unlawful killing of a person with malice aforethought or in the course of an independent felony.",
        q: "Defendant may be found guilty of murder",
        opts: [
            "only if the jury finds that Defendant intended to kill Victim.",
            "only if the jury finds that Defendant did not act in a rage provoked by Victim's accusations.",
            "if the jury finds that Defendant intended either to kill or to inflict serious bodily harm.",
            "if the jury finds that the killing occurred in the course of an aggravated assault."
        ],
        ans: 2,
        exp: "Murder is the unlawful killing of another person with malice aforethought[cite: 34]. 'Malice aforethought' encompasses several mental states, including the intent to kill and the intent to cause serious bodily harm[cite: 34]. Therefore, if the jury finds that Defendant intended either to kill Victim or to inflict serious bodily harm, then Defendant would have had the requisite mens rea to be found guilty of murder[cite: 34]."
    },
    // FACT PATTERN 25 (Q25)
    {
        id: 25,
        topic: "Homicide / Depraved Heart Murder",
        fp: "Phillips bought a new rifle and wanted to try it out by doing some target shooting. He went out into the country to an area where he had previously hunted. Much to his surprise, he noticed that the area beyond a clearing contained several newly constructed houses that had not been there before. Between the houses there was a small playground where several children were playing. Nevertheless, Phillips nailed a paper target to a tree and went to a point where the tree was between himself and the playground. He then fired several shots at the target. One of the shots missed the target and the tree and hit and killed one of the children in the playground.\n\nPhillips was convicted of murder. He appealed, contending that the evidence was not sufficient to support a conviction of murder.",
        q: "The appellate court should",
        opts: [
            "affirm the conviction, as the evidence is sufficient to support a conviction of murder.",
            "reverse the conviction and remand for a new trial, because the evidence is not sufficient for murder but will support a conviction of voluntary manslaughter.",
            "reverse the conviction and remand for a new trial, because the evidence is not sufficient for murder but will support a conviction of involuntary manslaughter.",
            "reverse the conviction and order the case dismissed, because the evidence is sufficient only for a finding of negligence and negligence alone cannot support a criminal conviction."
        ],
        ans: 0,
        exp: "A defendant is guilty of murder if he has acted with reckless indifference to the value of human life[cite: 34]. By putting the target in between himself and the playground (where several children were playing) and firing a rifle, Phillips demonstrated an extreme indifference to the value of human life (a 'depraved heart'), which is sufficient evidence to support a conviction of murder[cite: 34]."
    }
];

// Provide exports if needed for modularity
if (typeof module !== 'undefined' && module.exports) {
    module.exports = examData;
}
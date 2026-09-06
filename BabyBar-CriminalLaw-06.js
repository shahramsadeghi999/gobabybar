const examData = [
    // FACT PATTERN 1 (Questions 1-2)
    {
        id: 1,
        topic: "Property Crimes / Larceny & Continuing Trespass",
        fp: "Albert leaves a crowded cafe and accidentally takes Brenda's umbrella from the coat rack, genuinely believing it is his identical umbrella. Two hours later, Albert opens the umbrella, sees Brenda's name stitched inside, and realizes his mistake. However, it is raining heavily, so Albert decides to keep the umbrella permanently rather than return it.",
        q: "Is Albert guilty of common law larceny?",
        opts: [
            "No, because the umbrella was technically abandoned by the owner in a public venue, meaning no trespass against another's possession could occur.",
            "Yes, because under strict property doctrines, the taking of any chattel without express permission automatically constitutes a theft.",
            "Yes, because he ultimately decided to permanently keep the item belonging to Brenda, creating a constructive unprivileged taking.",
            "No, because the initial taking was not wrongful since he lacked the intent to steal at that time, and therefore the continuing trespass doctrine does not apply."
        ],
        ans: 3,
        exp: "Larceny requires a trespassory taking with the contemporaneous intent to permanently deprive. An honest mistake of fact negates the trespassory nature of the initial taking. Because the original taking was not wrongful, the 'continuing trespass' doctrine does not apply when Albert later forms the intent to keep it."
    },
    {
        id: 2,
        topic: "Defenses / Mistake of Fact",
        fp: "Albert leaves a crowded cafe and accidentally takes Brenda's umbrella from the coat rack, genuinely believing it is his identical umbrella. Two hours later, Albert opens the umbrella, sees Brenda's name stitched inside, and realizes his mistake. However, it is raining heavily, so Albert decides to keep the umbrella permanently rather than return it.",
        q: "If Albert is prosecuted for the initial taking of the umbrella at the cafe, what is the legal effect of his mistaken belief?",
        opts: [
            "It acts as a complete mitigation, reducing the charge from grand larceny to a lesser included misdemeanor offense.",
            "His honest mistake negates the specific intent required for larceny.",
            "His mistake must be objectively reasonable to serve as a defense, since property crimes involve strict commercial liabilities.",
            "It is entirely irrelevant, because ignorance of property ownership does not excuse the physical asportation of goods."
        ],
        ans: 1,
        exp: "Larceny is a specific intent crime. An honest mistake of fact, even if unreasonable, is a valid defense to a specific intent crime because it negates the required mental state (the intent to steal)."
    },
    // FACT PATTERN 2 (Questions 3-5)
    {
        id: 3,
        topic: "Property Crimes / Burglary (Common Law)",
        fp: "Desiring to steal valuable power tools, Carl goes to Dave's property at midnight. Carl breaks the padlock on Dave's detached storage shed, located 50 feet away from Dave's house, enters the shed, and steals a chainsaw. Later that night, Carl sets his own residential house on fire to collect a fraudulent insurance payout.",
        q: "Is Carl guilty of common law burglary regarding the storage shed?",
        opts: [
            "No, because a detached storage shed not used for sleeping is not considered a dwelling house.",
            "Yes, because the shed was located within the enclosed physical curtilage of Dave's residential property boundary.",
            "Yes, because he forcibly broke the exterior padlock during the nighttime hours with the intent to steal.",
            "No, because the value of the stolen chainsaw did not exceed the required felony threshold for a common law burglary prosecution."
        ],
        ans: 0,
        exp: "Common law burglary requires the breaking and entering of the DWELLING house of another in the nighttime. A detached shed that is not used regularly for sleeping or living purposes is not a dwelling house."
    },
    {
        id: 4,
        topic: "Property Crimes / Arson (Common Law)",
        fp: "Desiring to steal valuable power tools, Carl goes to Dave's property at midnight. Carl breaks the padlock on Dave's detached storage shed, located 50 feet away from Dave's house, enters the shed, and steals a chainsaw. Later that night, Carl sets his own residential house on fire to collect a fraudulent insurance payout.",
        q: "Is Carl guilty of common law arson for setting his own house on fire?",
        opts: [
            "Yes, because he intentionally engaged in the malicious burning of a residential structure.",
            "No, because he acted primarily with the intent to commit financial insurance fraud rather than subjective malice toward the property.",
            "No, because common law arson requires the burning of the dwelling of another.",
            "Yes, because his actions resulted in actual physical charring to the fundamental structural fibers of the house."
        ],
        ans: 2,
        exp: "At common law, arson is the malicious burning of the dwelling house OF ANOTHER. Because Carl burned his own house, he cannot be convicted of common law arson (though modern statutes often extend to one's own property for insurance fraud)."
    },
    {
        id: 5,
        topic: "Property Crimes / Larceny",
        fp: "Desiring to steal valuable power tools, Carl goes to Dave's property at midnight. Carl breaks the padlock on Dave's detached storage shed, located 50 feet away from Dave's house, enters the shed, and steals a chainsaw. Later that night, Carl sets his own residential house on fire to collect a fraudulent insurance payout.",
        q: "Regarding the taking of the chainsaw, what crime did Carl commit?",
        opts: [
            "Embezzlement, because he converted the tool after securing possession inside the shed.",
            "Robbery, because the breaking of the physical padlock constitutes constructive force against the property owner.",
            "False pretenses, because he fraudulently acquired temporary custody of the mechanical equipment.",
            "Larceny, because he committed a trespassory taking and carrying away of personal property with the intent to steal."
        ],
        ans: 3,
        exp: "Larceny is the trespassory taking and carrying away of the tangible personal property of another with the specific intent to permanently deprive. Carl taking the chainsaw from the shed satisfies all elements."
    },
    // FACT PATTERN 3 (Questions 6-8)
    {
        id: 6,
        topic: "Homicide / First-Degree Murder (Poison)",
        fp: "Emma decides to kill her wealthy uncle, Frank, to accelerate her inheritance. Over the course of a week, Emma secretly slips small doses of a lethal toxin into Frank's morning coffee. On the seventh day, Frank succumbs to the accumulated poison and dies.",
        q: "With what degree of homicide should Emma be charged?",
        opts: [
            "Voluntary manslaughter, because the drawn-out nature of the act demonstrates an absence of sudden explosive malice.",
            "Involuntary manslaughter, because each isolated dose of the toxin was insufficient to independently cause death.",
            "Second-degree murder, because using a subtle toxic substance reflects a depraved heart rather than direct intent.",
            "First-degree murder, because a killing perpetrated by means of poison is statutorily classified as premeditated."
        ],
        ans: 3,
        exp: "First-degree murder generally encompasses intentional killings committed with premeditation and deliberation. In nearly all jurisdictions, killings perpetrated by specific, inherently premeditated methods—such as lying in wait, torture, or the administration of poison—are automatically classified as first-degree murder."
    },
    {
        id: 7,
        topic: "Inchoate Crimes / Attempt & Factual Impossibility",
        fp: "Emma decides to kill her wealthy uncle, Frank, to accelerate her inheritance. Over the course of a week, Emma secretly slips small doses of a lethal toxin into Frank's morning coffee. On the seventh day, Frank succumbs to the accumulated poison and dies. \nSuppose instead that Frank had died of natural heart failure on the third day, before the poison reached a lethal level, but Emma continued pouring poison into his coffee on the fourth day, believing he was merely asleep.",
        q: "Is Emma guilty of attempted murder for administering the poison on the fourth day?",
        opts: [
            "Yes, because she performed a substantial step with the specific intent to kill, and factual impossibility is not a defense.",
            "No, because the victim was already deceased, rendering the completion of the target offense legally impossible.",
            "No, because pouring a substance into an unconsumed beverage does not satisfy the dangerous proximity test.",
            "Yes, but only under the strict common law doctrines governing the desecration of human remains."
        ],
        ans: 0,
        exp: "Attempt requires the specific intent to commit a crime and a substantial step toward its completion. Factual impossibility (the fact that the victim was already dead, unknown to the defendant) is never a defense to an attempt charge, provided the defendant's actions would constitute a crime if the facts were as she believed them to be."
    },
    {
        id: 8,
        topic: "Parties to a Crime / Accomplice Liability",
        fp: "Emma decides to kill her wealthy uncle, Frank, to accelerate her inheritance. Over the course of a week, Emma secretly slips small doses of a lethal toxin into Frank's morning coffee. On the seventh day, Frank succumbs to the accumulated poison and dies.\nSuppose Gina knew of Emma's plan and willingly provided Emma with the specific toxin, intending for Emma to succeed. Gina was out of the country when Frank died.",
        q: "What is Gina's liability for Frank's death?",
        opts: [
            "She is an accessory after the fact, because she was not physically present at the primary crime scene.",
            "She bears no criminal liability, because the actual administration of the poison was an independent intervening act.",
            "She is guilty of murder as an accomplice, because she aided the principal with the intent that the crime be committed.",
            "She is guilty of solicitation only, because providing physical materials supersedes accomplice doctrines."
        ],
        ans: 2,
        exp: "An accomplice is one who aids, abets, or encourages the principal in the commission of the crime, with the intent that the crime be committed. By knowingly providing the poison to facilitate the murder, Gina is fully liable for the resulting homicide as an accomplice."
    },
    // FACT PATTERN 4 (Questions 9-10)
    {
        id: 9,
        topic: "Defenses / Self-Defense & Duty to Retreat (Castle Doctrine)",
        fp: "Henry is peacefully watching television inside his own living room. Suddenly, Ivan, a known violent local criminal, kicks down the front door wielding a machete. Ivan lunges at Henry, screaming that he will kill him. Henry grabs a nearby shotgun and fatally shoots Ivan.",
        q: "In a jurisdiction that normally requires a victim to retreat before using deadly force, is Henry's use of lethal force justified?",
        opts: [
            "Yes, because the 'castle doctrine' exception eliminates the duty to retreat when a person is attacked inside their own home.",
            "No, because he failed to issue a verbal warning prior to discharging the weapon.",
            "No, because he was required by law to attempt to exit through a rear door or window before firing the weapon.",
            "Yes, because the use of a firearm is universally deemed proportionate to an unprovoked verbal threat."
        ],
        ans: 0,
        exp: "Even in minority jurisdictions that require a victim to retreat before using deadly force if safe to do so, the 'castle doctrine' provides an absolute exception: a person is never required to retreat when attacked inside their own home by an intruder."
    },
    {
        id: 10,
        topic: "Crimes against Person / Assault",
        fp: "Henry is peacefully watching television inside his own living room. Suddenly, Ivan, a known violent local criminal, kicks down the front door wielding a machete. Ivan lunges at Henry, screaming that he will kill him. Henry grabs a nearby shotgun and fatally shoots Ivan.",
        q: "Before being shot, what crime did Ivan commit against Henry by lunging with the machete?",
        opts: [
            "Battery, because crossing the physical threshold of the residence constitutes constructive harmful contact.",
            "Attempted voluntary manslaughter, because the break-in indicates a sudden heat of passion.",
            "Robbery, because the threat of lethal violence implies an underlying intent to seize the home's contents.",
            "Assault, because he intentionally created a reasonable apprehension of imminent bodily harm."
        ],
        ans: 3,
        exp: "Assault is defined as either an attempted battery or the intentional creation of a reasonable apprehension of imminent bodily harm. Lunging at someone with a machete while screaming a death threat clearly creates a reasonable apprehension of imminent lethal harm."
    },
    // FACT PATTERN 5 (Questions 11-13)
    {
        id: 11,
        topic: "Property Crimes / False Pretenses vs. Larceny by Trick",
        fp: "John walks into a high-end electronics store and selects a $3,000 laptop. At the register, John pays using a counterfeit cashier's check that he expertly forged. The store manager, believing the check is valid, completes the transaction, hands John the laptop, and signs over the receipt. John leaves with the laptop.",
        q: "Of what crime is John guilty?",
        opts: [
            "Larceny by trick, because the manager was deceived into handing over physical custody of the electronic device.",
            "Embezzlement, because John acquired lawful possession of the item before converting it.",
            "False pretenses, because he obtained title to the property through an intentional false representation.",
            "Robbery, because the use of a counterfeit instrument serves as a constructive application of economic force."
        ],
        ans: 2,
        exp: "If a victim intends to transfer TITLE (ownership) based on a misrepresentation, the crime is false pretenses. In a standard retail sale where the merchant accepts payment (even a fake check) and provides a receipt, the merchant intends to transfer full title. Thus, John committed false pretenses."
    },
    {
        id: 12,
        topic: "Property Crimes / Forgery",
        fp: "John walks into a high-end electronics store and selects a $3,000 laptop. At the register, John pays using a counterfeit cashier's check that he expertly forged. The store manager, believing the check is valid, completes the transaction, hands John the laptop, and signs over the receipt. John leaves with the laptop.",
        q: "Regarding the creation of the fake cashier's check itself, John is guilty of Forgery because:",
        opts: [
            "He used the check to permanently deprive a merchant of inventory.",
            "He made a false writing with apparent legal significance and the intent to defraud.",
            "He physically altered a genuine commercial bank instrument.",
            "He presented the document during the course of an interstate commercial transaction."
        ],
        ans: 1,
        exp: "Forgery is the making or altering of a false writing with apparent legal significance, done with the specific intent to defraud. Creating a fake cashier's check perfectly fits this definition."
    },
    {
        id: 13,
        topic: "Property Crimes / Embezzlement Distinctions",
        fp: "John walks into a high-end electronics store and selects a $3,000 laptop. At the register, John pays using a counterfeit cashier's check that he expertly forged. The store manager, believing the check is valid, completes the transaction, hands John the laptop, and signs over the receipt. John leaves with the laptop.",
        q: "Why is John NOT guilty of Embezzlement?",
        opts: [
            "Because he never possessed lawful, trusted possession of the laptop prior to his fraudulent conversion.",
            "Because the monetary value of the laptop exceeded the statutory threshold for white-collar crimes.",
            "Because the manager did not explicitly grant him permission to exit the retail premises.",
            "Because embezzlement only applies to corporate executives."
        ],
        ans: 0,
        exp: "Embezzlement requires that the defendant already have LAWFUL possession of the property (usually through a position of trust, like a bailee or employee) before fraudulently converting it. John was a mere customer who acquired the property through deceit; he never had prior lawful possession."
    },
    // FACT PATTERN 6 (Questions 14-16)
    {
        id: 14,
        topic: "Defenses / Mistake of Law",
        fp: "Karen is an artisan cheese maker. She sells unpasteurized raw milk at a local farmers' market. A state statute strictly prohibits the commercial sale of unpasteurized milk. Karen genuinely believed it was legal because her friend, a fellow farmer, confidently assured her the law had been repealed.",
        q: "Can Karen successfully assert a mistake of law defense?",
        opts: [
            "Yes, because her reliance on a fellow professional within her industry establishes reasonable commercial justification.",
            "Yes, because the state statute lacks an explicit mens rea requirement, rendering it a general intent offense subject to mitigation.",
            "No, because a mistaken belief that conduct is legal is generally not a defense unless she relied on an official government statement.",
            "No, because the sale of raw dairy products constitutes an inherently dangerous strict liability activity."
        ],
        ans: 2,
        exp: "Ignorance or mistake of the law is generally not a defense to criminal liability. An exception exists if the defendant relies on an official statement of the law from a high-level government official or court, but reliance on the advice of a private citizen (her friend) provides no defense."
    },
    {
        id: 15,
        topic: "General Principles / Strict Liability Offenses",
        fp: "Karen is an artisan cheese maker. She sells unpasteurized raw milk at a local farmers' market. A state statute strictly prohibits the commercial sale of unpasteurized milk. Karen genuinely believed it was legal because her friend, a fellow farmer, confidently assured her the law had been repealed.\nAssume the raw milk statute is interpreted by the courts as a public welfare strict liability offense.",
        q: "What must the prosecution prove regarding Karen's mental state to secure a conviction?",
        opts: [
            "That she acted with criminal negligence.",
            "That she possessed the specific intent to violate public health protocols.",
            "That she consciously disregarded a substantial risk.",
            "Nothing, because strict liability offenses do not require proof of mens rea regarding the prohibited act."
        ],
        ans: 3,
        exp: "Strict liability offenses (often public welfare offenses like selling adulterated food or alcohol to minors) require no proof of a culpable mental state (mens rea) regarding the prohibited act. The prosecution must only prove that she performed the voluntary actrus reus (selling the milk)."
    },
    {
        id: 16,
        topic: "Defenses / Entrapment Applicability",
        fp: "Karen is an artisan cheese maker. She sells unpasteurized raw milk at a local farmers' market. A state statute strictly prohibits the commercial sale of unpasteurized milk. Karen genuinely believed it was legal because her friend, a fellow farmer, confidently assured her the law had been repealed.\nSuppose an undercover health inspector approached Karen at the market and asked to buy the raw milk. Karen happily sold it to him.",
        q: "Can Karen claim entrapment?",
        opts: [
            "Yes, because the inspector initiated the specific financial transaction.",
            "No, because she was already predisposed to sell the milk, and the officer merely provided an opportunity.",
            "Yes, because undercover officers are prohibited from participating in public agricultural markets.",
            "No, because entrapment is completely unavailable as a defense for any strict liability health offense."
        ],
        ans: 1,
        exp: "Entrapment requires showing that the government induced the crime AND that the defendant was not otherwise predisposed to commit it. Because Karen was already selling the milk at her booth, she was clearly predisposed, meaning the inspector merely provided an opportunity."
    },
    // FACT PATTERN 7 (Questions 17-19)
    {
        id: 17,
        topic: "Inchoate Crimes / Conspiracy (Wharton's Rule)",
        fp: "Liam and Mike have a bitter rivalry. They mutually agree to meet at dawn in a secluded field to engage in an illegal pistol duel to the death. Dueling requires exactly two participants by definition. The police intercept their communications and arrest them before they arrive at the field.",
        q: "Are Liam and Mike guilty of conspiracy to engage in an illegal duel?",
        opts: [
            "Yes, because they formed a bilateral agreement with the specific intent to commit a lethal felony offense.",
            "No, because no physical overt act was completed at the actual secluded location.",
            "Yes, because the planning of a homicide overrides all common law inchoate merger doctrines.",
            "No, because Wharton's Rule states that an agreement between two people to commit a crime that logically requires two people cannot be prosecuted as a conspiracy."
        ],
        ans: 3,
        exp: "Wharton's Rule provides that if a crime by definition requires the participation of two people (such as dueling, bigamy, or adultery), there is no conspiracy to commit that crime if only the two necessary parties are involved in the agreement."
    },
    {
        id: 18,
        topic: "Homicide / Involuntary Manslaughter",
        fp: "Liam and Mike have a bitter rivalry. They mutually agree to meet at dawn in a secluded field to engage in an illegal pistol duel to the death. Dueling requires exactly two participants by definition. The police intercept their communications and arrest them before they arrive at the field.\nAssume instead they evade police, reach the field, and Liam shoots and kills Mike during the duel.",
        q: "If Liam argues he is only guilty of Involuntary Manslaughter, will his argument succeed?",
        opts: [
            "Yes, because mutual combat implies a reckless disregard for safety rather than direct malice.",
            "Yes, because Mike voluntarily consented to participate in the lethal encounter, negating all malice.",
            "No, because engaging in an illegal pistol duel demonstrates a specific intent to kill or depraved heart malice, elevating the charge to murder.",
            "No, because involuntary manslaughter strictly applies only to vehicular traffic fatalities."
        ],
        ans: 2,
        exp: "Involuntary manslaughter is a killing resulting from criminal negligence. Participating in a lethal pistol duel demonstrates either a specific intent to kill or, at a minimum, an extreme reckless indifference to human life (depraved heart), satisfying the malice requirement for murder."
    },
    {
        id: 19,
        topic: "Crimes Against Person / Kidnapping Distinctions",
        fp: "Liam and Mike have a bitter rivalry. They mutually agree to meet at dawn in a secluded field to engage in an illegal pistol duel to the death. Dueling requires exactly two participants by definition. The police intercept their communications and arrest them before they arrive at the field.\nSuppose that instead of a duel, Liam forces Mike at gunpoint to remain locked inside Mike's own bedroom for three days, refusing to let him leave.",
        q: "What crime did Liam commit by locking Mike in the bedroom?",
        opts: [
            "False imprisonment, because Liam unlawfully confined Mike to a bounded area against his will, but there was no asportation (movement).",
            "Kidnapping, because the extended duration of the confinement automatically satisfies the asportation requirement.",
            "Assault, because the prolonged presence of the firearm maintained a constant state of reasonable apprehension.",
            "Robbery, because depriving an individual of their freedom constitutes the taking of an intangible personal asset."
        ],
        ans: 0,
        exp: "False imprisonment is the unlawful confinement of a person without their valid consent. Kidnapping requires confinement PLUS asportation (movement of the victim). Because Liam merely locked Mike in a room and did not move him, the crime is false imprisonment, not kidnapping."
    },
    // FACT PATTERN 8 (Questions 20-22)
    {
        id: 20,
        topic: "Defenses / Duress Application to Property Crimes",
        fp: "Nina is walking home when she is confronted by Oscar, who points a loaded gun at her head. Oscar hands her a brick and demands, 'Smash the window of that electronics store and bring me a laptop, or I'll blow your brains out right now.' Terrified, Nina complies.",
        q: "Can Nina assert the defense of duress to the charges of burglary and larceny?",
        opts: [
            "No, because the defense of duress is strictly unavailable for any felony property offense under the common law.",
            "No, because she failed to attempt to negotiate with Oscar or seek an alternative escape route.",
            "Yes, but only if she subsequently returned the stolen laptop to the retail store.",
            "Yes, because she reasonably believed she faced an imminent threat of death or serious bodily harm if she did not commit the crimes."
        ],
        ans: 3,
        exp: "Duress is a valid defense if the defendant committed a crime because of a reasonable belief that a present, imminent threat of death or great bodily harm would be inflicted upon them if they did not comply. Duress is a defense to all crimes EXCEPT intentional homicide."
    },
    {
        id: 21,
        topic: "Defenses / Duress Limitation (Homicide)",
        fp: "Nina is walking home when she is confronted by Oscar, who points a loaded gun at her head. Oscar hands her a brick and demands, 'Smash the window of that electronics store and bring me a laptop, or I'll blow your brains out right now.' Terrified, Nina complies.\nAssume instead that Oscar demanded, 'Shoot that pedestrian over there, or I will kill you right now.' Nina shoots and kills the pedestrian.",
        q: "Is duress a valid defense to the murder charge?",
        opts: [
            "No, because duress is never a defense to an intentional criminal homicide.",
            "Yes, if the threat to her own life was immediate and lethal.",
            "Yes, provided she can prove she suffered from extreme psychological trauma.",
            "No, because she was holding the firearm, giving her a tactical advantage over the coercer."
        ],
        ans: 0,
        exp: "Under traditional common law, duress is never a defense to an intentional killing. The law dictates that a person may not take the life of an innocent third party to save their own."
    },
    {
        id: 22,
        topic: "Parties to a Crime / Accomplice Liability (Oscar)",
        fp: "Nina is walking home when she is confronted by Oscar, who points a loaded gun at her head. Oscar hands her a brick and demands, 'Smash the window of that electronics store and bring me a laptop, or I'll blow your brains out right now.' Terrified, Nina complies.",
        q: "What is Oscar's criminal liability for the burglary and theft committed by Nina?",
        opts: [
            "He is guilty only of solicitation, because he did not physically break the window himself.",
            "He is an accessory after the fact, since he received the stolen property.",
            "He is liable as a principal, because he intentionally caused the crimes to be committed by utilizing Nina as an innocent/coerced agent.",
            "He bears no liability for the property crimes, as his actions constituted an independent assault."
        ],
        ans: 2,
        exp: "When a person forces an innocent or coerced party (who has a valid duress defense) to commit a crime, the coercer is treated as the principal actor who committed the crime through an instrumentality."
    },
    // FACT PATTERN 9 (Questions 23-25)
    {
        id: 23,
        topic: "Defenses / Defense of Others",
        fp: "Paul is walking through a park when he sees a man in plain clothes, Quentin, forcefully wrestling a screaming woman, Rita, to the ground. Paul reasonably believes Quentin is attempting to assault Rita. Paul runs over and strikes Quentin with a heavy branch to stop the attack. It turns out Quentin is an undercover police officer lawfully arresting Rita, a fleeing felon.",
        q: "In a jurisdiction following the 'reasonable belief' rule, is Paul guilty of battery against Quentin?",
        opts: [
            "Yes, because intervening on behalf of a fleeing felon is a strict liability offense regardless of the intervenor's mental state.",
            "No, because Paul acted upon a reasonable, albeit mistaken, belief that his intervention was necessary to protect an innocent person from an unlawful attack.",
            "Yes, because the 'alter ego' rule dictates that an intervenor steps into the shoes of the person aided, and Rita had no right to resist a lawful arrest.",
            "No, because police officers assume the risk of physical altercations when operating without uniform."
        ],
        ans: 1,
        exp: "Under the modern 'reasonable belief' rule for defense of others, an intervenor is justified in using force to protect a third party if they reasonably believe the third party is facing an unlawful attack, even if that belief turns out to be mistaken. (Note: Under the older minority 'alter ego' rule, Paul would be guilty, but the prompt specifies the reasonable belief rule)."
    },
    {
        id: 24,
        topic: "Property Crimes / Receipt of Stolen Property",
        fp: "Paul is walking through a park when he sees a man in plain clothes, Quentin, forcefully wrestling a screaming woman, Rita, to the ground. Paul reasonably believes Quentin is attempting to assault Rita. Paul runs over and strikes Quentin with a heavy branch to stop the attack. It turns out Quentin is an undercover police officer lawfully arresting Rita, a fleeing felon.\nEarlier that day, Rita bought a high-end smartphone out of the trunk of a car in an alley for $20. She suspected it was stolen but didn't ask.",
        q: "Is Rita guilty of receiving stolen property?",
        opts: [
            "No, because the seller did not explicitly inform her that the device was acquired illegally.",
            "No, because the exchange of cash consideration finalized a valid transfer of commercial title.",
            "Yes, because purchasing electronics outside of a licensed retail store is a per se felony violation.",
            "Yes, because her suspicion and the highly suspicious circumstances (willful blindness) satisfy the knowledge requirement."
        ],
        ans: 3,
        exp: "Receiving stolen property requires receiving possession of stolen property, knowing it to be stolen, with the intent to permanently deprive the owner. Subjective knowledge can be inferred from the highly suspicious circumstances (e.g., $20 for a high-end phone in an alley) and the defendant's willful blindness."
    },
    {
        id: 25,
        topic: "Property Crimes / Robbery vs. Larceny (Presence)",
        fp: "Paul is walking through a park when he sees a man in plain clothes, Quentin, forcefully wrestling a screaming woman, Rita, to the ground. Paul reasonably believes Quentin is attempting to assault Rita. Paul runs over and strikes Quentin with a heavy branch to stop the attack. It turns out Quentin is an undercover police officer lawfully arresting Rita, a fleeing felon.\nAssume before the arrest, Rita had entered a victim's home, locked the victim in the upstairs bathroom, and then stole a television from the downstairs living room.",
        q: "Did Rita commit robbery of the television?",
        opts: [
            "Yes, because she used force/confinement to prevent resistance, and the living room is considered within the victim's 'presence'.",
            "No, because she did not extract the property directly from the physical grasp of the victim.",
            "No, because the taking of the television occurred after the initial assault had concluded.",
            "Yes, because televisions are classified as highly valuable chattels."
        ],
        ans: 0,
        exp: "Robbery requires a taking from the victim's 'person or presence.' Property located in another room of the victim's house is considered within the victim's 'presence' if the victim is prevented from retaining the property by the defendant's application of force or intimidation (e.g., locking them in the bathroom)."
    }
];
const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Homicide / Felony Murder & Eggshell Skull Rule",
        fp: "Alice decides to rob Bob, an elderly man with a known severe heart condition. She approaches him in an alley with a plastic, fake gun, points it at him, and yells, 'Give me your money!' Bob, terrified, suffers a massive heart attack and dies on the spot. Alice takes his wallet and flees.",
        q: "Is Alice guilty of felony murder?",
        opts: [
            "Yes, because robbery is an inherently dangerous felony, and the defendant is strictly liable for any death caused during its commission regardless of the victim's pre-existing frailty.",
            "No, because the underlying felony of robbery was never actually completed prior to the onset of the victim's fatal medical emergency.",
            "No, because the use of a plastic toy automatically downgrades the property crime to simple theft, removing it from the felony murder rule framework entirely.",
            "Yes, but only if the prosecution can prove that she possessed the specific malice aforethought required for an intentional homicide."
        ],
        ans: 0,
        exp: "Under the felony murder rule, a defendant is liable for any death caused during the commission of an inherently dangerous felony (like robbery). The 'eggshell skull' rule applies in criminal law: a defendant takes their victim as they find them. Alice is liable for the heart attack caused by the terror of the robbery."
    },
    {
        id: 2,
        topic: "Property Crimes / Armed Robbery Distinctions",
        fp: "Alice decides to rob Bob, an elderly man with a known severe heart condition. She approaches him in an alley with a plastic, fake gun, points it at him, and yells, 'Give me your money!' Bob, terrified, suffers a massive heart attack and dies on the spot. Alice takes his wallet and flees.",
        q: "Can Alice defend against the underlying robbery charge by arguing that her gun was a harmless plastic toy?",
        opts: [
            "Yes, because common law robbery strictly demands the utilization of an instrument objectively capable of inflicting immediate grievous bodily harm.",
            "No, because the utilization of a counterfeit or unloaded weapon still intentionally creates a reasonable apprehension of imminent physical harm in the mind of the victim, which fully satisfies the threat of force required for the underlying robbery offense.",
            "Yes, because her failure to present an actual threat demonstrates a lack of the requisite specific intent to permanently deprive.",
            "No, because any unprivileged taking of property from a deceased individual immediately constitutes robbery as a matter of law."
        ],
        ans: 1,
        exp: "Robbery requires taking property by force or the threat of immediate physical harm. Using a fake gun that appears real creates a reasonable apprehension of immediate harm in the victim, satisfying the threat of force element for robbery."
    },
    {
        id: 3,
        topic: "Crimes against Person / Assault",
        fp: "Alice decides to rob Bob, an elderly man with a known severe heart condition. She approaches him in an alley with a plastic, fake gun, points it at him, and yells, 'Give me your money!' Bob, terrified, suffers a massive heart attack and dies on the spot. Alice takes his wallet and flees.",
        q: "What crime against the person did Alice commit the moment she pointed the fake gun at Bob?",
        opts: [
            "Attempted battery, because she clearly intended to inflict immediate physical injury upon him.",
            "Extortion, because she demanded money under the implicit threat of future violence.",
            "Assault, because she intentionally caused the victim to experience a reasonable apprehension of an imminent battery.",
            "No crime, because a plastic toy cannot satisfy the actus reus for any violent common law offense."
        ],
        ans: 2,
        exp: "Assault is either an attempted battery or the intentional creation of a reasonable apprehension of imminent bodily harm. Pointing a fake gun (which the victim believes is real) intentionally creates a reasonable apprehension of imminent harm, satisfying the definition of assault."
    },
    // FACT PATTERN 2 (Q4-Q6)
    {
        id: 4,
        topic: "Property Crimes / Burglary & Voluntary Intoxication",
        fp: "Carl is at a party and voluntarily drinks a heavily spiked punch. He becomes extremely intoxicated. In a drunken stupor, he walks into his neighbor's house (mistakenly thinking it is his own home) and falls asleep on the couch. The neighbor wakes him up. Carl, startled and hallucinating that the neighbor is a burglar, punches the neighbor.",
        q: "Is Carl guilty of common law burglary?",
        opts: [
            "Yes, because he unlawfully breached the threshold of another person's dwelling during the nighttime hours.",
            "Yes, because his subsequent battery of the homeowner retroactively establishes his unlawful intent to commit a felony.",
            "No, because entering a neighbor's house by mistake is merely a civil trespass under all modern property codes.",
            "No, he lacked the specific intent required."
        ],
        ans: 3,
        exp: "Common law burglary requires the specific intent to commit a felony inside the dwelling at the time of entry. Because Carl thought he was entering his own home due to extreme intoxication (a mistake of fact that negates specific intent), he did not intend to commit a felony therein."
    },
    {
        id: 5,
        topic: "Defenses / Voluntary Intoxication vs. General Intent",
        fp: "Carl is at a party and voluntarily drinks a heavily spiked punch. He becomes extremely intoxicated. In a drunken stupor, he walks into his neighbor's house (mistakenly thinking it is his own home) and falls asleep on the couch. The neighbor wakes him up. Carl, startled and hallucinating that the neighbor is a burglar, punches the neighbor.",
        q: "Can Carl use his voluntary intoxication as a defense to the battery against the neighbor?",
        opts: [
            "No, because battery is a general intent crime, and the law presumes that the requisite reckless mental state is legally supplied by the defendant's initial reckless act of voluntarily consuming the intoxicating substance.",
            "Yes, because his profound hallucination negated the fundamental element of physical volition required for a criminal conviction.",
            "Yes, because he honestly and reasonably believed he was defending his own property from a dangerous intruder.",
            "No, because the castle doctrine prevents any intruder from ever claiming self-defense against a lawful homeowner."
        ],
        ans: 0,
        exp: "Battery is a general intent crime. Voluntary intoxication is never a defense to general intent crimes, as the act of voluntarily consuming the intoxicant is deemed sufficiently reckless to satisfy the mens rea for the offense."
    },
    {
        id: 6,
        topic: "Homicide / First-Degree Murder & Voluntary Intoxication",
        fp: "Carl is at a party and voluntarily drinks a heavily spiked punch. He becomes extremely intoxicated. In a drunken stupor, he walks into his neighbor's house (mistakenly thinking it is his own home) and falls asleep on the couch. The neighbor wakes him up. Carl, startled and hallucinating that the neighbor is a burglar, punches the neighbor.\n\nAssume instead that Carl pulled a knife and killed the neighbor. He is charged with first-degree premeditated murder.",
        q: "Can Carl's voluntary intoxication serve as a defense to first-degree premeditated murder?",
        opts: [
            "No, because the use of a deadly weapon during an unprovoked attack inherently implies express malice aforethought.",
            "No, because severe voluntary intoxication can prevent the formation of the specific intent to kill with premeditation and deliberation.",
            "Yes, because the legal doctrine of temporary insanity automatically applies to severe hallucinogenic episodes regardless of their origin.",
            "No, because homicide offenses are entirely immune from intoxication defenses under modern statutory reforms."
        ],
        ans: 1,
        exp: "First-degree murder (when based on premeditation and deliberation) is a specific intent crime. Severe voluntary intoxication can prevent a defendant from forming the specific intent to premeditate and deliberate, thereby reducing the charge from first-degree to second-degree murder."
    },
    // FACT PATTERN 3 (Q7-Q9)
    {
        id: 7,
        topic: "Inchoate Crimes / Attempted Embezzlement",
        fp: "Diane plans to embezzle funds from her employer by hacking the accounting software. She writes a malicious script and uploads it to the company server. Right before pressing 'Execute,' she feels a sudden pang of guilt, deletes the script entirely, and reports her own security breach to the IT department. No money is stolen.",
        q: "Under traditional common law, is Diane guilty of attempted embezzlement?",
        opts: [
            "No, because she never acquired actual physical custody of the corporate funds, which is a strict prerequisite for any property offense.",
            "No, because her prompt and complete remediation of the cyber threat effectively neutralized her prior preliminary actions.",
            "Yes, because traditional common law strictly holds that once a defendant completes a substantial step toward a crime, a subsequent voluntary abandonment is never a valid affirmative defense.",
            "Yes, because uploading a computer script constitutes an inherently dangerous strict liability cybercrime under federal regulations."
        ],
        ans: 2,
        exp: "Under traditional common law, the crime of attempt is complete once the defendant possesses specific intent and commits a sufficient overt act (substantial step or dangerous proximity). Once the attempt is complete (uploading the script to the server), a subsequent change of heart and abandonment is NOT a defense at common law."
    },
    {
        id: 8,
        topic: "Inchoate Crimes / Defense of Abandonment (MPC)",
        fp: "Diane plans to embezzle funds from her employer by hacking the accounting software. She writes a malicious script and uploads it to the company server. Right before pressing 'Execute,' she feels a sudden pang of guilt, deletes the script entirely, and reports her own security breach to the IT department. No money is stolen.",
        q: "Under the Model Penal Code (MPC), can Diane successfully claim the defense of abandonment?",
        opts: [
            "No, because cybercrimes are specifically exempted from the MPC abandonment provisions due to their instantaneous nature.",
            "Yes, because she confessed to a person of authority.",
            "No, because she had already caused permanent damage to the server architecture.",
            "Yes, if her renunciation was completely voluntary and she successfully prevented the crime."
        ],
        ans: 3,
        exp: "Unlike the common law, the Model Penal Code recognizes the affirmative defense of voluntary abandonment (or renunciation) for inchoate crimes. To succeed, the defendant must completely and voluntarily renounce their criminal purpose and successfully prevent the commission of the target offense, which Diane did."
    },
    {
        id: 9,
        topic: "Property Crimes / Embezzlement (Completed Offense)",
        fp: "Diane plans to embezzle funds from her employer by hacking the accounting software. She writes a malicious script and uploads it to the company server. Right before pressing 'Execute,' she feels a sudden pang of guilt, deletes the script entirely, and reports her own security breach to the IT department. No money is stolen.",
        q: "Is Diane guilty of the completed substantive crime of embezzlement?",
        opts: [
            "No, because she never successfully executed the program to actually convert the company's funds to her own use.",
            "Yes, because her specialized position of trust granted her constructive ownership of the digital assets the moment she initiated the script.",
            "No, because the funds were insured by a third-party commercial banking institution.",
            "Yes, because the intent to defraud an employer automatically consummates the offense regardless of the ultimate financial outcome."
        ],
        ans: 0,
        exp: "Embezzlement requires the actual fraudulent CONVERSION of the property of another. Because Diane deleted the script before executing the transfer, she never actually converted any funds, meaning the completed crime of embezzlement did not occur."
    },
    // FACT PATTERN 4 (Q10-Q11)
    {
        id: 10,
        topic: "Parties to a Crime / Accomplice Liability (Ordinary Business Sale)",
        fp: "Edgar works at a hardware store. His friend Fiona tells him she needs a crowbar to break into her ex-boyfriend's house to destroy his TV. Edgar, wanting to boost his sales commission, sells her the crowbar at full retail price. Fiona uses it to commit the burglary.",
        q: "Is Edgar an accomplice to the burglary?",
        opts: [
            "Yes, because he provided an essential physical instrument with actual knowledge of her impending criminal endeavor.",
            "No, because a merchant selling ordinary goods at standard market prices does not typically share the specific criminal intent required to facilitate the buyer's target offense.",
            "Yes, because his desire to earn a personal sales commission establishes a direct financial stake in the successful completion of the burglary.",
            "No, because hardware stores are legally protected by absolute commercial immunity doctrines."
        ],
        ans: 1,
        exp: "Accomplice liability requires that the defendant aid the principal with the specific intent that the crime be committed. A merchant who sells ordinary goods (like a crowbar) at standard prices generally only intends to make a sale, not to facilitate the crime, even if they have knowledge of the buyer's criminal intent."
    },
    {
        id: 11,
        topic: "Parties to a Crime / Accomplice Liability (Premium Price/Stake in Venture)",
        fp: "Edgar works at a hardware store. His friend Fiona tells him she needs a crowbar to break into her ex-boyfriend's house to destroy his TV. Edgar, wanting to boost his sales commission, sells her the crowbar at full retail price. Fiona uses it to commit the burglary.\n\nAssume instead that Edgar, knowing Fiona's illegal plan, charges her triple the normal price for the crowbar as a 'hush fee.'",
        q: "Does charging a premium price alter Edgar's liability?",
        opts: [
            "No, because adjusting retail prices is a protected right under free-market commercial regulations.",
            "No, because he still did not physically accompany her to the site of the residential break-in.",
            "Yes, because inflating the price demonstrates a specific intent to profit directly from and facilitate the illicit enterprise.",
            "Yes, but it only renders him liable for the separate white-collar crime of criminal price gouging."
        ],
        ans: 2,
        exp: "If a provider of goods or services charges a 'premium' because of the illegal nature of the buyer's intended use, courts hold that the provider has established a stake in the venture. This satisfies the specific intent requirement to facilitate the crime, making the seller an accomplice."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Property Crimes / Larceny (Trespassory Taking from Custody)",
        fp: "George visits a jewelry store. He asks to examine a $10,000 Rolex watch, honestly intending to inspect it for purchase. The clerk hands it to him. While holding the watch, George suddenly decides to steal it and sprints out the front door.",
        q: "What crime is George guilty of?",
        opts: [
            "False pretenses.",
            "Embezzlement.",
            "Robbery.",
            "Larceny."
        ],
        ans: 3,
        exp: "When an owner hands property to a customer for temporary inspection within their presence, the customer acquires only 'custody,' while the owner retains constructive 'possession.' George's act of running away with the watch is a trespassory taking from the owner's possession, constituting larceny."
    },
    {
        id: 13,
        topic: "Property Crimes / Larceny by Trick Distinction",
        fp: "George visits a jewelry store. He asks to examine a $10,000 Rolex watch, honestly intending to inspect it for purchase. The clerk hands it to him. While holding the watch, George suddenly decides to steal it and sprints out the front door.",
        q: "Why is George NOT guilty of larceny by trick?",
        opts: [
            "Because his fraudulent intent was formed after receiving the property, not before.",
            "Because the total monetary value of the luxury timepiece exceeded the statutory limitations for trickery offenses.",
            "Because he successfully bypassed the electronic security sensors at the exit.",
            "Because the clerk voluntarily relinquished full legal title to the merchandise."
        ],
        ans: 0,
        exp: "Larceny by trick requires that the defendant use fraud or deceit to obtain custody of the property, with the INTENT to steal it existing AT THE TIME of the transfer. Because George honestly intended to inspect the watch initially, he did not use fraud to obtain it. He formed the intent to steal later."
    },
    {
        id: 14,
        topic: "Property Crimes / Embezzlement (Bailee)",
        fp: "George visits a jewelry store. He asks to examine a $10,000 Rolex watch, honestly intending to inspect it for purchase. The clerk hands it to him. While holding the watch, George suddenly decides to steal it and sprints out the front door.\n\nAssume instead the clerk allowed George to take the watch home for a 7-day trial period. On day 2, George sells the watch to a pawn shop.",
        q: "What crime did George commit in this alternate scenario?",
        opts: [
            "Larceny by trick, because selling the watch constitutes a fundamental breach of the implied warranty of merchantability.",
            "Embezzlement, because the extended trial period granted him lawful possession of the timepiece prior to his fraudulent conversion of the asset.",
            "False pretenses, because the initial agreement inherently transferred absolute legal title to the consumer.",
            "Robbery, because depriving a commercial retail store of high-value inventory is equivalent to constructive physical force."
        ],
        ans: 1,
        exp: "Allowing a customer to take an item home for an extended trial period creates a bailment, granting the customer LAWFUL POSSESSION of the item (not just custody). When a bailee subsequently converts the property (selling it), the crime is embezzlement."
    },
    // FACT PATTERN 6 (Q15-Q16)
    {
        id: 15,
        topic: "Homicide / Duty to Act (Special Relationship)",
        fp: "Helen is walking her 5-year-old child near a deep lake. The child slips and falls in. Helen is a certified lifeguard and could easily save the child with no risk to herself. However, she decides to watch the child drown because she doesn't want to ruin her expensive designer dress.",
        q: "Is Helen guilty of criminal homicide?",
        opts: [
            "No, because the common law never imposes an affirmative duty to rescue any individual in distress.",
            "Yes, because any adult standing near a body of water is strictly obligated by statute to intervene.",
            "Yes, because a parent has a special legal duty of care to protect their minor child, making the intentional failure to act a criminal omission.",
            "No, because the child's accidental slip constitutes an independent superseding cause."
        ],
        ans: 2,
        exp: "While there is generally no duty to rescue, a legal duty to act arises when there is a special relationship, such as parent and child. A parent's failure to protect their child from harm, when physically capable of doing so, satisfies the actus reus (by omission) for criminal homicide."
    },
    {
        id: 16,
        topic: "Homicide / Depraved Heart Murder",
        fp: "Helen is walking her 5-year-old child near a deep lake. The child slips and falls in. Helen is a certified lifeguard and could easily save the child with no risk to herself. However, she decides to watch the child drown because she doesn't want to ruin her expensive designer dress.",
        q: "Assuming Helen did not specifically desire her child's death, what degree of homicide is she most likely guilty of?",
        opts: [
            "Involuntary manslaughter, because failing to act is merely ordinary negligence.",
            "Voluntary manslaughter, because the sudden emergency provoked a state of panic.",
            "First-degree murder, because a parent's inaction automatically establishes premeditation.",
            "Depraved heart murder, due to her extreme and reckless indifference to the value of human life."
        ],
        ans: 3,
        exp: "Even without the specific intent to kill, Helen's decision to let her child drown simply to protect an expensive dress demonstrates a reckless indifference to an unjustifiably high risk to human life. This extreme recklessness establishes the 'depraved heart' malice required for second-degree murder."
    },
    // FACT PATTERN 7 (Q17-Q18)
    {
        id: 17,
        topic: "Defenses / Defense of Property (Spring Guns)",
        fp: "Ian installs a spring-gun trap inside his unoccupied, remote vacation cabin to deter burglars. The trap is rigged to shoot anyone who opens the front door. Jack, a lost hiker seeking shelter from a severe storm, opens the door and is immediately shot in the leg by the trap.",
        q: "Is Ian criminally liable for the battery against Jack?",
        opts: [
            "Yes, because a property owner may never utilize deadly mechanical traps to defend an unoccupied structure against intruders.",
            "No, because the hiker unlawfully breached the physical threshold of a locked residential dwelling.",
            "Yes, but only because Jack was asserting a valid defense of private necessity.",
            "No, because the use of automated security devices is fully protected under modern iterations of the castle doctrine."
        ],
        ans: 0,
        exp: "A property owner may never use deadly force (or deadly mechanical devices like spring guns) solely to protect unoccupied property. Deadly force is only justified to protect human life. Because the cabin was unoccupied, the use of a spring gun was unlawful, making Ian liable for the resulting battery."
    },
    {
        id: 18,
        topic: "Defenses / Defense of Habitation Limitations",
        fp: "Ian installs a spring-gun trap inside his unoccupied, remote vacation cabin to deter burglars. The trap is rigged to shoot anyone who opens the front door. Jack, a lost hiker seeking shelter from a severe storm, opens the door and is immediately shot in the leg by the trap.",
        q: "Could Ian defend himself by arguing that, had he been physically present in the cabin, he would have been justified in shooting Jack?",
        opts: [
            "Yes, because property owners maintain constructive physical presence at all times.",
            "No, because deadly force is only justified against intruders who pose an imminent threat of death or serious bodily harm to occupants.",
            "Yes, because any uninvited entry automatically justifies the deployment of lethal defensive countermeasures.",
            "No, because firearms are strictly prohibited inside recreational vacation structures."
        ],
        ans: 1,
        exp: "Even if Ian had been present, the use of deadly force inside a dwelling is only justified if the homeowner reasonably believes the intruder intends to commit a violent felony or cause great bodily harm to the occupants. Jack was a lost hiker seeking shelter from a storm, posing no such threat."
    },
    // FACT PATTERN 8 (Q19-Q21)
    {
        id: 19,
        topic: "Property Crimes / Extortion",
        fp: "Karen learns that her neighbor, Larry, is an undocumented immigrant. Karen approaches Larry and says, 'Give me your car keys right now, or I'm calling immigration to have you deported today.' Terrified, Larry hands her the keys.",
        q: "What crime did Karen commit?",
        opts: [
            "Robbery.",
            "Larceny by trick.",
            "Extortion.",
            "Embezzlement."
        ],
        ans: 2,
        exp: "Extortion (blackmail) is obtaining property from another by means of threats of future harm, including threats to expose a secret, initiate legal/administrative action, or report someone to the authorities. Karen's threat to call immigration satisfies these elements."
    },
    {
        id: 20,
        topic: "Property Crimes / Robbery Distinctions",
        fp: "Karen learns that her neighbor, Larry, is an undocumented immigrant. Karen approaches Larry and says, 'Give me your car keys right now, or I'm calling immigration to have you deported today.' Terrified, Larry hands her the keys.",
        q: "Why is Karen NOT guilty of common law robbery?",
        opts: [
            "Because motor vehicles are exclusively regulated by the Department of Motor Vehicles.",
            "Because Larry voluntarily relinquished physical custody without a struggle.",
            "Because extortion completely supersedes and absorbs all overlapping property offenses.",
            "Because the threat involved legal or administrative action rather than the immediate application of physical violence against the victim's person."
        ],
        ans: 3,
        exp: "Robbery requires a taking accomplished by force or the threat of IMMEDIATE physical harm to the victim. A threat to call immigration authorities, while highly coercive, is a threat of future administrative/legal action, not immediate physical violence."
    },
    {
        id: 21,
        topic: "Property Crimes / Robbery Modification",
        fp: "Karen learns that her neighbor, Larry, is an undocumented immigrant. Karen approaches Larry and says, 'Give me your car keys right now, or I'm calling immigration to have you deported today.' Terrified, Larry hands her the keys.\n\nIf Karen had instead said, 'Give me the keys or I will stab you in the neck,' what crime would she have committed?",
        opts: [
            "Robbery, due to the threat of immediate physical harm.",
            "Extortion, because she provided a conditional ultimatum.",
            "Simple assault, because she did not actually produce a knife.",
            "Larceny, because the taking was trespassory."
        ],
        ans: 0,
        exp: "Threatening to stab someone in the neck is a threat of immediate physical harm. Taking property from a victim's presence using the threat of immediate physical harm constitutes robbery."
    },
    // FACT PATTERN 9 (Q22-Q23)
    {
        id: 22,
        topic: "Inchoate Crimes / Conspiracy & Wharton's Rule",
        fp: "Mark and Nancy agree to commit bigamy. Mark is already married, and Nancy knows this. They go through a wedding ceremony.",
        q: "Are Mark and Nancy guilty of conspiracy to commit bigamy?",
        opts: [
            "Yes, because they formed a specific intent to violate state marriage statutes.",
            "No, because Wharton's Rule prohibits a conspiracy charge when the target offense logically requires the participation of two people and only those two people are involved.",
            "Yes, because their actions were completed in a public forum.",
            "No, because bigamy is a strict liability offense."
        ],
        ans: 1,
        exp: "Wharton's Rule states that an agreement between two people to commit a crime that logically requires exactly two people (like bigamy, adultery, or dueling) cannot be prosecuted as a conspiracy. Because bigamy requires two participants, Mark and Nancy cannot be charged with conspiracy."
    },
    {
        id: 23,
        topic: "Inchoate Crimes / Wharton's Rule Third-Party Exception",
        fp: "Mark and Nancy agree to commit bigamy. Mark is already married, and Nancy knows this. They go through a wedding ceremony.\n\nSuppose Mark's actual wife, Olivia, helped them plan the fake wedding and paid for the ceremony to facilitate the crime.",
        q: "Under this modified scenario, are they guilty of conspiracy?",
        opts: [
            "No, because spouses are legally incapable of conspiring against one another.",
            "No, because the underlying offense remains bigamy.",
            "Yes, because the involvement of a non-essential third party establishes independent fraud.",
            "Yes, under the third-party exception."
        ],
        ans: 3,
        exp: "An exception to Wharton's Rule applies when the number of conspirators exceeds the number logically necessary to commit the target offense. Because bigamy requires two people, the active participation of a third person (Olivia) means all three can be charged with conspiracy."
    },
    // FACT PATTERN 10 (Q24-Q25)
    {
        id: 24,
        topic: "Homicide / Transferred Intent",
        fp: "Paul hires a professional hitman, Quinn, to kill his rival, Ray. Quinn spots Ray on the street and fires a sniper rifle at him. Quinn misses Ray entirely, but the bullet accidentally strikes and kills an innocent bystander, Sam.",
        q: "Is Quinn guilty of the murder of Sam?",
        opts: [
            "No, because he lacked the specific intent to target or injure the innocent bystander.",
            "No, because the unforeseen presence of the bystander operates as a superseding event.",
            "Yes, because discharging a firearm in a public municipality is a statutory strict liability offense.",
            "Yes, because under the doctrine of transferred intent, the specific intent to kill the targeted victim legally transfers to the unintended victim who is actually killed."
        ],
        ans: 3,
        exp: "Under the doctrine of transferred intent, if a defendant intends to kill one person but accidentally kills another, the intent to kill transfers to the actual victim, making the defendant fully liable for the intentional murder of the bystander."
    },
    {
        id: 25,
        topic: "Parties to a Crime / Accomplice Liability & Transferred Intent",
        fp: "Paul hires a professional hitman, Quinn, to kill his rival, Ray. Quinn spots Ray on the street and fires a sniper rifle at him. Quinn misses Ray entirely, but the bullet accidentally strikes and kills an innocent bystander, Sam.",
        q: "Is Paul guilty of the murder of Sam?",
        opts: [
            "No, because he was not physically present at the scene of the shooting.",
            "No, because his solicitation was strictly limited to the assassination of Ray.",
            "Yes, because hiring a hitman is an inherently dangerous felony that triggers the felony murder rule.",
            "Yes, because the transferred intent doctrine applies equally to the principal and the accomplice for the highly foreseeable consequences of the targeted assassination."
        ],
        ans: 3,
        exp: "Paul is an accomplice (and co-conspirator) to the murder of Ray. Accomplices are liable for the crimes of the principal. Since Quinn's intent to kill Ray transferred to Sam, Paul's accomplice liability transfers as well, making Paul guilty of Sam's murder."
    }
];
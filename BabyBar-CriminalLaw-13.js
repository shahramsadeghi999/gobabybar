const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Homicide / Proximate Causation (Superseding Cause)",
        fp: "Arthur sets his own commercial warehouse on fire at night to commit insurance fraud. He knows the building is empty. Firefighter Brenda responds to the alarm. While Brenda is examining the perimeter outside, a freak, unprecedented localized earthquake occurs. The earthquake causes the warehouse roof to collapse outward, crushing and killing Brenda.",
        q: "Is Arthur guilty of felony murder for Brenda's death?",
        opts: [
            "Yes, because the felony murder rule strictly applies whenever a death occurs during the perpetration of an inherently dangerous felony regardless of proximate causation.",
            "No, because setting fire to one's own property precludes the attachment of criminal homicide liability under common law.",
            "No, because the freak earthquake is a superseding cause.",
            "Yes, because the danger of the fire forced Brenda to be present at the location."
        ],
        ans: 2,
        exp: "To establish felony murder, the underlying felony must be the proximate cause of the death[cite: 24]. An unforeseeable, extraordinary act of nature (an unprecedented freak earthquake) that occurs independently of the defendant's actions acts as a superseding cause, breaking the chain of proximate causation[cite: 24]."
    },
    {
        id: 2,
        topic: "Property Crimes / Arson (Common Law)",
        fp: "Arthur sets his own commercial warehouse on fire at night to commit insurance fraud. He knows the building is empty. Firefighter Brenda responds to the alarm. While Brenda is examining the perimeter outside, a freak, unprecedented localized earthquake occurs. The earthquake causes the warehouse roof to collapse outward, crushing and killing Brenda.",
        q: "Regarding the burning of the building, is Arthur guilty of common law arson?",
        opts: [
            "No, because common law arson strictly requires the malicious burning of the dwelling house of another person, and this was an unoccupied commercial warehouse owned by the defendant himself.",
            "Yes, because the fire significantly charred the internal structure.",
            "Yes, because the intent to commit fraud substitutes for malice.",
            "No, because the building was completely destroyed by the earthquake."
        ],
        ans: 0,
        exp: "At strict common law, arson is defined as the malicious burning of the dwelling house of another[cite: 24]. Burning one's own property, or burning a commercial structure (warehouse), does not satisfy the elements of common law arson, though modern statutes criminalize such acts[cite: 24]."
    },
    {
        id: 3,
        topic: "Inchoate Crimes / Attempted False Pretenses",
        fp: "Arthur sets his own commercial warehouse on fire at night to commit insurance fraud. He knows the building is empty. Firefighter Brenda responds to the alarm. While Brenda is examining the perimeter outside, a freak, unprecedented localized earthquake occurs. The earthquake causes the warehouse roof to collapse outward, crushing and killing Brenda.\n\nAssume the fire was entirely extinguished by the earthquake rubble before Arthur could contact his insurance company.",
        q: "Is Arthur guilty of attempted false pretenses regarding the insurance payout?",
        opts: [
            "Yes, the fire was intentionally lit.",
            "No, because he had not yet filed the fraudulent insurance claim.",
            "Yes, because arson is a strict liability offense under modern statutes that automatically incorporates financial fraud elements.",
            "No, because the fire was extinguished."
        ],
        ans: 1,
        exp: "Attempt requires a substantial step (or dangerous proximity) toward the completion of the target crime[cite: 24]. Setting the fire is mere preparation for the crime of false pretenses against the insurance company[cite: 24]. Until Arthur actually files the fraudulent claim or contacts the insurer, he has not committed a substantial step toward obtaining their money[cite: 24]."
    },
    // FACT PATTERN 2 (Q4-Q6)
    {
        id: 4,
        topic: "Inchoate Crimes / Conspiracy & Withdrawal",
        fp: "Clara and Dan plan a bank robbery. Clara buys the guns. The day before the robbery, Clara tells Dan, 'I am out, I want nothing to do with this.' She then throws her gun in the river. Dan ignores her and robs the bank alone the next day.",
        q: "Is Clara guilty of conspiracy to commit robbery?",
        opts: [
            "No, because she communicated her withdrawal to her co-conspirator.",
            "No, because she destroyed the weapon prior to the robbery.",
            "Yes, but her sentence must be mitigated because she voluntarily abandoned the criminal enterprise and successfully prevented her own direct participation in the physical actus reus.",
            "Yes, the crime was already complete."
        ],
        ans: 3,
        exp: "Conspiracy is complete the moment the agreement is made and an overt act is performed (Clara buying the guns)[cite: 24]. Once completed, a defendant cannot withdraw from the conspiracy itself, though an effective withdrawal will shield them from liability for SUBSEQUENT substantive crimes[cite: 24]."
    },
    {
        id: 5,
        topic: "Parties to a Crime / Accomplice Withdrawal",
        fp: "Clara and Dan plan a bank robbery. Clara buys the guns. The day before the robbery, Clara tells Dan, 'I am out, I want nothing to do with this.' She then throws her gun in the river. Dan ignores her and robs the bank alone the next day.",
        q: "Is Clara liable as an accomplice for Dan's completed robbery?",
        opts: [
            "Yes, she bought the guns.",
            "No, she wasn't present at the scene.",
            "No, because she communicated her withdrawal to the principal and neutralized her assistance by destroying the weapon before the crime became unstoppable.",
            "Yes, because accomplices are strictly liable for the actions of the principal."
        ],
        ans: 2,
        exp: "To successfully withdraw as an accomplice, a person must repudiate their prior aid, communicate the withdrawal to the principal, and neutralize any material assistance they provided before the chain of events becomes unstoppable[cite: 24]. Clara communicating her withdrawal and destroying the gun she bought successfully neutralized her aid[cite: 24]."
    },
    {
        id: 6,
        topic: "Homicide / Provocative Act Doctrine",
        fp: "Clara and Dan plan a bank robbery. Clara buys the guns. The day before the robbery, Clara tells Dan, 'I am out, I want nothing to do with this.' She then throws her gun in the river. Dan ignores her and robs the bank alone the next day.\n\nDuring the robbery, Dan grabs a bank customer to use as a human shield. Police fire at Dan, but the bullet strikes and kills the customer.",
        q: "Is Dan guilty of murder for the customer's death?",
        opts: [
            "Yes, under the provocative act doctrine.",
            "No, because the police officer fired the fatal shot.",
            "No, because taking a hostage is an independent intervening event that severs the chain of proximate causation under the strict redline rule applicable to co-felon liability.",
            "Yes, because all felonies are strictly liable."
        ],
        ans: 0,
        exp: "Even in an agency-theory jurisdiction where a felon is not typically liable for deaths caused by third parties, the 'provocative act' doctrine holds that if a felon acts with extreme recklessness (like using a human shield) and provokes a lethal response, they are liable for the resulting murder based on their own implied malice[cite: 24]."
    },
    // FACT PATTERN 3 (Q7-Q9)
    {
        id: 7,
        topic: "Property Crimes / Larceny by Trick vs. False Pretenses",
        fp: "Edgar goes to a jeweler. He asks to take a $50,000 necklace to a third-party appraiser for one hour, leaving a fake ID and a counterfeit $50,000 cashier's check as 'collateral'. The jeweler accepts the check as a temporary deposit, explicitly retaining legal title until Edgar returns to finalize the purchase. Edgar absconds with the necklace.",
        q: "What property crime did Edgar commit regarding the necklace?",
        opts: [
            "False pretenses, because he used a fraudulent document to intentionally deceive the merchant into handing over the valuable asset.",
            "Larceny by trick.",
            "Embezzlement, because he was a bailee.",
            "Robbery, due to the counterfeit check."
        ],
        ans: 1,
        exp: "Larceny by trick occurs when a defendant uses fraud to obtain mere CUSTODY of property with the intent to steal[cite: 24]. False pretenses requires obtaining TITLE[cite: 24]. Because the jeweler explicitly retained title and only transferred the necklace for a one-hour appraisal, Edgar only obtained custody through his deceit[cite: 24]."
    },
    {
        id: 8,
        topic: "Property Crimes / Forgery vs. Uttering",
        fp: "Edgar goes to a jeweler. He asks to take a $50,000 necklace to a third-party appraiser for one hour, leaving a fake ID and a counterfeit $50,000 cashier's check as 'collateral'. The jeweler accepts the check as a temporary deposit, explicitly retaining legal title until Edgar returns to finalize the purchase. Edgar absconds with the necklace.\n\nAssume Edgar did not create or sign the fake check; he simply bought it online from a counterfeiter and handed it to the jeweler.",
        q: "Is Edgar guilty of common law forgery?",
        opts: [
            "Yes, because he passed a fake check.",
            "No, because the check was never cashed.",
            "Yes, because intent to defraud is sufficient.",
            "No, because common law forgery strictly requires the actual making or altering of the false document, whereas merely passing a forged document is the separate crime of uttering."
        ],
        ans: 3,
        exp: "At common law, forgery is the MAKING or ALTERING of a false writing with intent to defraud[cite: 24]. Passing or offering a forged document that someone else created is a distinct crime known as 'uttering a forged instrument.'[cite: 24] Because Edgar merely bought and passed the check without altering it, he is not guilty of forgery[cite: 24]."
    },
    {
        id: 9,
        topic: "Property Crimes / False Pretenses Distinctions",
        fp: "Edgar goes to a jeweler. He asks to take a $50,000 necklace to a third-party appraiser for one hour, leaving a fake ID and a counterfeit $50,000 cashier's check as 'collateral'. The jeweler accepts the check as a temporary deposit, explicitly retaining legal title until Edgar returns to finalize the purchase. Edgar absconds with the necklace.",
        q: "Why is Edgar NOT guilty of false pretenses?",
        opts: [
            "Because the value was under the threshold.",
            "Because the merchant was fully insured against retail fraud.",
            "Because the jeweler only transferred temporary custody.",
            "Because he didn't make a statement."
        ],
        ans: 2,
        exp: "False pretenses strictly requires that the victim intend to transfer legal TITLE (ownership) to the defendant based on the false representation[cite: 24]. Because the jeweler only transferred temporary physical custody for an appraisal and expressly retained title, the crime cannot be false pretenses[cite: 24]."
    },
    // FACT PATTERN 4 (Q10-Q12)
    {
        id: 10,
        topic: "Defenses / Mistake of Law",
        fp: "Fiona, a sovereign citizen, honestly and unreasonably believes federal tax laws are invalid. To avoid taxes, she smuggles gold across the border. Federal statutes prohibit smuggling without declaring assets.",
        q: "Is her belief regarding the validity of tax laws a valid defense to smuggling?",
        opts: [
            "No, ignorance of the law is no defense.",
            "Yes, because it negates specific intent.",
            "Yes, if the mistake was objectively reasonable under the circumstances of her particular sovereign citizen community standards.",
            "No, because gold is a highly regulated asset."
        ],
        ans: 0,
        exp: "A mistake of law (believing a criminal statute is invalid or doesn't apply) is generally never a defense to criminal liability, regardless of how honest the belief is[cite: 24]. Her subjective legal theories do not excuse the violation of the smuggling statute[cite: 24]."
    },
    {
        id: 11,
        topic: "Defenses / Involuntary Intoxication (Specific Intent)",
        fp: "Fiona, a sovereign citizen, honestly and unreasonably believes federal tax laws are invalid. To avoid taxes, she smuggles gold across the border. Federal statutes prohibit smuggling without declaring assets.\n\nWhile smuggling the gold, Fiona takes a heavy dose of lawfully prescribed painkillers, which unexpectedly causes severe, unprecedented delusions. While delusional, she believes approaching customs agents are literal 18th-century pirates and shoots at them.",
        q: "Can Fiona assert involuntary intoxication as a defense to the attempted murder of the agents?",
        opts: [
            "No, because she voluntarily swallowed the prescribed medication.",
            "Yes, but only to mitigate the charge to manslaughter.",
            "No, because shooting at federal officers is a strict liability offense.",
            "Yes, because the unforeseeable severe reaction to a prescribed medication functions identically to temporary legal insanity, excusing her conduct."
        ],
        ans: 3,
        exp: "Taking prescribed medication and suffering a highly unforeseeable, extreme adverse reaction constitutes INVOLUNTARY intoxication[cite: 24]. Involuntary intoxication operates identically to the insanity defense, excusing criminal liability if the intoxication prevented the defendant from understanding the nature of her act or knowing it was wrong[cite: 24]."
    },
    {
        id: 12,
        topic: "General Principles / Strict Liability Jurisdictional Elements (Feola Rule)",
        fp: "Fiona, a sovereign citizen, honestly and unreasonably believes federal tax laws are invalid. To avoid taxes, she smuggles gold across the border. Federal statutes prohibit smuggling without declaring assets.\n\nWhile smuggling the gold, Fiona takes a heavy dose of lawfully prescribed painkillers, which unexpectedly causes severe, unprecedented delusions. While delusional, she believes approaching customs agents are literal 18th-century pirates and shoots at them.",
        q: "Assuming Fiona was NOT intoxicated and merely shot at people she thought were regular thieves stealing her gold, does her lack of knowledge that they were federal agents prevent a conviction for the federal crime of assaulting a federal officer?",
        opts: [
            "Yes, because specific intent requires knowledge of the victim's identity.",
            "No, the victim's status is merely a jurisdictional element.",
            "Yes, under the doctrine of factual impossibility.",
            "No, she is strictly liable."
        ],
        ans: 1,
        exp: "Under the Feola rule (United States v. Feola), a statute criminalizing the assault of a federal officer does not require the defendant to know the victim is a federal officer[cite: 24]. The victim's status is a strictly jurisdictional element designed to provide federal courts with authority over the crime[cite: 24]."
    },
    // FACT PATTERN 5 (Q13-Q14)
    {
        id: 13,
        topic: "Homicide / Proximate Causation (Superseding Cause)",
        fp: "George intentionally poisons Harry's drink, causing Harry to fall into a deep coma. Harry is placed on life support at the local hospital. 366 days later, the hospital is struck by a freak meteor, causing a massive fire that burns Harry to death in his hospital bed.",
        q: "Is George the proximate cause of Harry's death?",
        opts: [
            "No, the meteor was a superseding cause.",
            "Yes, because Harry was only in the hospital due to the poison.",
            "No, because medical life support machines break the chain of causation.",
            "Yes, because criminal defendants are strictly liable for all events that occur to their incapacitated victims while residing in a medical care facility."
        ],
        ans: 0,
        exp: "Proximate cause is severed by an unforeseeable, independent intervening event (a superseding cause)[cite: 24]. A freak meteor strike destroying the hospital is an extraordinary act of nature completely independent of the poisoning, thereby breaking the chain of legal causation[cite: 24]."
    },
    {
        id: 14,
        topic: "Homicide / Year and a Day Rule",
        fp: "George intentionally poisons Harry's drink, causing Harry to fall into a deep coma. Harry is placed on life support at the local hospital. 366 days later, the hospital is struck by a freak meteor, causing a massive fire that burns Harry to death in his hospital bed.",
        q: "Under traditional common law, if the meteor strike never happened and Harry died from the poison itself exactly 366 days after consuming it, could George be convicted of homicide?",
        opts: [
            "Yes, because poison demonstrates express malice.",
            "No, because the poison didn't kill him instantly.",
            "No, because the traditional year-and-a-day rule conclusively bars any criminal homicide conviction if the victim survives for more than one year and one day after the fatal injury was inflicted.",
            "Yes, because he took a substantial step."
        ],
        ans: 2,
        exp: "The traditional common law 'year and a day' rule acts as an absolute bar to a homicide prosecution if the victim does not die within one year and one day of the defendant inflicting the fatal injury[cite: 24]. (George could only be charged with attempted murder)[cite: 24]."
    },
    // FACT PATTERN 6 (Q15-Q17)
    {
        id: 15,
        topic: "Crimes against Person / Kidnapping vs. Extortion",
        fp: "Ian threatens to post compromising photos of Jane on the internet unless she gets into his car. Fearing reputational ruin, she complies. Ian drives her 100 miles into the desert. He then stops the car and says, 'Give me your purse right now or I will break your arm.' She hands it over.",
        q: "Under strict common law rules, does Ian's initial threat to expose the photos satisfy the force requirement for kidnapping?",
        opts: [
            "Yes, because emotional coercion is functionally equivalent to physical restraint.",
            "No, kidnapping requires physical force or the threat of physical force.",
            "Yes, because the distance traveled was substantial.",
            "No, she consented."
        ],
        ans: 1,
        exp: "At strict common law, the unlawful confinement required for kidnapping must be accomplished by physical force or the threat of physical force[cite: 24]. Fraud or extortionate threats of future reputational harm do not satisfy the force requirement for common law kidnapping, rendering the entry legally 'voluntary' (though modern statutes often modify this)[cite: 24]."
    },
    {
        id: 16,
        topic: "Property Crimes / Robbery",
        fp: "Ian threatens to post compromising photos of Jane on the internet unless she gets into his car. Fearing reputational ruin, she complies. Ian drives her 100 miles into the desert. He then stops the car and says, 'Give me your purse right now or I will break your arm.' She hands it over.",
        q: "What crime did Ian commit regarding the purse?",
        opts: [
            "Larceny by trick, because he deceived her into entering the vehicle prior to the theft.",
            "Extortion, because the original threat involved reputational harm.",
            "False pretenses, because she surrendered title.",
            "Robbery, due to the immediate physical threat."
        ],
        ans: 3,
        exp: "Robbery requires taking property from the person or presence of another by force or the threat of immediate physical harm[cite: 24]. Threatening to break Jane's arm 'right now' establishes the immediate threat of physical harm required for robbery[cite: 24]."
    },
    {
        id: 17,
        topic: "Property Crimes / Extortion",
        fp: "Ian threatens to post compromising photos of Jane on the internet unless she gets into his car. Fearing reputational ruin, she complies. Ian drives her 100 miles into the desert. He then stops the car and says, 'Give me your purse right now or I will break your arm.' She hands it over.",
        q: "What crime did Ian commit with his initial threat regarding the photos?",
        opts: [
            "Extortion, because he obtained compliance and control over her through the malicious threat of future reputational damage and exposure of a secret.",
            "Robbery, because he stole her freedom.",
            "Assault, because he frightened her.",
            "False imprisonment, because the car doors were locked."
        ],
        ans: 0,
        exp: "Extortion (blackmail) involves obtaining property or compelling action from another by means of threats of future harm, including exposing a secret or causing reputational ruin[cite: 24]. Ian's threat to post the photos to force her compliance falls squarely under extortion[cite: 24]."
    },
    // FACT PATTERN 7 (Q18-Q20)
    {
        id: 18,
        topic: "Inchoate Crimes / Conspiracy (Wharton's Rule Exception)",
        fp: "Kyle (an undercover agent), Liam, and Mike agree to arrange an illegal pistol duel. Dueling logically requires exactly two participants. Liam and Mike will duel each other. Kyle provides the guns and secures the location. The police arrest Liam and Mike before the duel happens.",
        q: "Does Wharton's Rule bar a conspiracy charge for Liam and Mike?",
        opts: [
            "Yes, because dueling requires exactly two people.",
            "No, because dueling is an inherently dangerous felony.",
            "Yes, because the inclusion of an undercover federal agent legally nullifies the entire inchoate agreement under all common law frameworks.",
            "No, because a third party (Kyle) participated in the agreement."
        ],
        ans: 3,
        exp: "Wharton's Rule prohibits a conspiracy charge for a crime that logically requires exactly two people (like dueling) if only those two people agree to commit it[cite: 24]. However, the 'third-party exception' applies when more people participate in the agreement than are necessary to commit the crime[cite: 24]. Because Kyle participated, Wharton's Rule does not bar the charge[cite: 24]."
    },
    {
        id: 19,
        topic: "Inchoate Crimes / Legal Impossibility",
        fp: "Kyle (an undercover agent), Liam, and Mike agree to arrange an illegal pistol duel. Dueling logically requires exactly two participants. Liam and Mike will duel each other. Kyle provides the guns and secures the location. The police arrest Liam and Mike before the duel happens.\n\nAssume that, completely unknown to all parties, the state legislature secretly legalized dueling the day before the agreement was made.",
        q: "What is their liability for attempted dueling?",
        opts: [
            "Guilty, because factual impossibility is no defense.",
            "Not guilty, due to pure legal impossibility.",
            "Guilty, because they possessed the specific intent to break the law.",
            "Not guilty, because the undercover agent failed to inform them of the recent statutory legislative changes prior to the execution of the overt act."
        ],
        ans: 1,
        exp: "True legal impossibility is an absolute defense to an attempt or conspiracy charge[cite: 24]. It occurs when a defendant intends to do something they believe is illegal, but the act is actually perfectly lawful[cite: 24]. If dueling is legal, intending to duel cannot be a crime, regardless of their guilty minds[cite: 24]."
    },
    {
        id: 20,
        topic: "Defenses / Entrapment",
        fp: "Kyle (an undercover agent), Liam, and Mike agree to arrange an illegal pistol duel. Dueling logically requires exactly two participants. Liam and Mike will duel each other. Kyle provides the guns and secures the location. The police arrest Liam and Mike before the duel happens.\n\nAssume Kyle had to beg Liam and Mike for weeks to duel because they were peaceful men who had never committed a violent crime.",
        q: "If the men are charged, what is their best defense?",
        opts: [
            "Mistake of law, because they relied on Kyle.",
            "Duress, because Kyle pressured them.",
            "Entrapment, because the government induced the crime and the defendants were entirely lacking in any prior predisposition to commit the offense.",
            "Necessity, because they had to duel to satisfy Kyle."
        ],
        ans: 2,
        exp: "Entrapment applies when the government originates the criminal design and induces an individual to commit a crime they were not otherwise predisposed to commit[cite: 24]. Begging peaceful men for weeks to commit a violent crime clearly satisfies the elements of government inducement overcoming a lack of predisposition[cite: 24]."
    },
    // FACT PATTERN 8 (Q21-Q22)
    {
        id: 21,
        topic: "Defenses / Self-Defense (Escalation by Victim)",
        fp: "Nancy and Oscar are arguing. Nancy slaps Oscar in the face. Enraged, Oscar pulls out a loaded shotgun and aims it at Nancy. Nancy is trapped in a corner and cannot retreat. She pulls a legally concealed pistol and shoots Oscar, killing him.",
        q: "Can Nancy successfully claim self-defense against the homicide charge?",
        opts: [
            "Yes, because Oscar escalated a non-deadly conflict into a deadly one.",
            "No, an initial aggressor never regains the right of self-defense.",
            "No, because she was required to attempt a physical disarm before utilizing her own concealed firearm against the victim.",
            "Yes, she is a woman."
        ],
        ans: 0,
        exp: "While an initial aggressor (Nancy, who slapped Oscar) generally loses the right to self-defense, that right is restored if the victim suddenly escalates a non-deadly altercation into a deadly one, and the initial aggressor has no safe means of escape[cite: 24]. Oscar pulling a shotgun was a deadly escalation[cite: 24]."
    },
    {
        id: 22,
        topic: "Homicide / Imperfect Self-Defense",
        fp: "Nancy and Oscar are arguing. Nancy slaps Oscar in the face. Enraged, Oscar pulls out a loaded shotgun and aims it at Nancy. Nancy is trapped in a corner and cannot retreat. She pulls a legally concealed pistol and shoots Oscar, killing him.\n\nAssume instead that Oscar pulled out a brightly colored, transparent plastic water gun. Nancy, panicking, unreasonably believed it was a real shotgun and shot him.",
        q: "If Nancy shoots Oscar based on this unreasonable belief, what is the most appropriate charge?",
        opts: [
            "First-degree murder, because her belief was objectively unreasonable.",
            "Involuntary manslaughter, due to gross negligence.",
            "Second-degree murder, because utilizing a firearm against a plastic toy demonstrates a depraved and malignant heart under the circumstances.",
            "Voluntary manslaughter."
        ],
        ans: 3,
        exp: "If a defendant honestly but unreasonably believes that deadly force is necessary to repel an imminent deadly threat, the doctrine of imperfect self-defense applies[cite: 24]. This unreasonable belief negates malice aforethought, mitigating the homicide from murder to voluntary manslaughter[cite: 24]."
    },
    // FACT PATTERN 9 (Q23-Q25)
    {
        id: 23,
        topic: "Property Crimes / Larceny of Lost Property",
        fp: "Patty is a truck driver hauling a sealed cargo container of televisions. She stops at a diner. She finds a wallet on the floor with a driver's license clearly identifying the owner. She decides to keep it and pockets it. Later, she opens the sealed cargo container on her truck, takes one TV, and reseals the door.",
        q: "Is Patty guilty of larceny regarding the wallet?",
        opts: [
            "No, because lost property is considered legally abandoned.",
            "Yes, because she found lost property with clues to the owner's identity and formed the immediate intent to permanently deprive the owner.",
            "Yes, because she took it from the diner's possession.",
            "No, she lacked intent."
        ],
        ans: 1,
        exp: "A finder of lost property commits larceny if they take possession of the property intending to permanently keep it, AND at the time of the finding, there are reasonable clues (like an ID) to identify the true owner[cite: 24]. Patty satisfied both conditions[cite: 24]."
    },
    {
        id: 24,
        topic: "Property Crimes / Larceny by Bailee (Breaking Bulk)",
        fp: "Patty is a truck driver hauling a sealed cargo container of televisions. She stops at a diner. She finds a wallet on the floor with a driver's license clearly identifying the owner. She decides to keep it and pockets it. Later, she opens the sealed cargo container on her truck, takes one TV, and reseals the door.",
        q: "What crime did Patty commit by taking the TV from the cargo container?",
        opts: [
            "Embezzlement, because she had lawful possession.",
            "False pretenses, because she signed a shipping manifest.",
            "Larceny, because breaking bulk terminated her lawful possession.",
            "Robbery, because she breached the physical seal of the container using destructive constructive force against the commercial cargo."
        ],
        ans: 2,
        exp: "While a commercial carrier (bailee) has lawful possession of the cargo as a whole, the common law 'breaking bulk' doctrine dictates that if the bailee breaks open a sealed container to remove individual contents, their lawful possession ends[cite: 24]. The taking of the contents becomes a trespassory taking, constituting larceny[cite: 24]."
    },
    {
        id: 25,
        topic: "Property Crimes / Embezzlement (Bailee)",
        fp: "Patty is a truck driver hauling a sealed cargo container of televisions. She stops at a diner. She finds a wallet on the floor with a driver's license clearly identifying the owner. She decides to keep it and pockets it. Later, she opens the sealed cargo container on her truck, takes one TV, and reseals the door.\n\nAssume instead that Patty simply drove the entire truck to a pawn shop and sold it without ever opening the sealed container.",
        q: "What crime would Patty have committed in this alternate scenario?",
        opts: [
            "Larceny by trick, because she deceived her employer.",
            "False pretenses, because she sold the entire vehicle.",
            "Common law burglary, because she breached the cabin of the truck with the specific malicious intent to commit a permanent theft.",
            "Embezzlement."
        ],
        ans: 3,
        exp: "If a bailee fraudulently converts the entire bailed property (the entire truck and its unbreached container) without 'breaking bulk', they are converting property over which they already have lawful possession[cite: 24]. This constitutes embezzlement, not larceny[cite: 24]."
    }
];
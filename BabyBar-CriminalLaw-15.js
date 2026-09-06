const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Homicide / Felony Murder (Inherently Dangerous Test in the Abstract)",
        fp: "Dan, a college dropout, poses as a licensed surgeon. He convinces a patient to undergo a complex appendectomy in his basement. Practicing medicine without a license is a statutory felony in the jurisdiction. During the procedure, the patient dies from massive blood loss. Dan is charged with felony murder. The jurisdiction uses the 'abstract' approach to determine if a felony is inherently dangerous.",
        q: "Is Dan guilty of felony murder?",
        opts: [
            "No, because the felony must be inherently dangerous in the abstract to trigger the rule.",
            "Yes, because performing surgery without medical training poses a highly foreseeable and imminent risk of death to the specific victim.",
            "Yes, because practicing medicine without a valid state license completely strips the defendant of all traditional common law homicide defenses.",
            "No, because the victim voluntarily consented to the procedure, which acts as an absolute legal bar to any subsequent felony murder prosecution."
        ],
        ans: 0,
        exp: "Under the 'abstract' approach to felony murder, the court looks only at the elements of the statute, not the defendant's specific conduct, to determine if it is inherently dangerous. Practicing medicine without a license can be done safely (e.g., prescribing aspirin without a license) and is thus NOT inherently dangerous in the abstract, precluding a felony murder charge."
    },
    {
        id: 2,
        topic: "Homicide / Depraved Heart Murder",
        fp: "Dan, a college dropout, poses as a licensed surgeon. He convinces a patient to undergo a complex appendectomy in his basement. Practicing medicine without a license is a statutory felony in the jurisdiction. During the procedure, the patient dies from massive blood loss. Dan is charged with felony murder. The jurisdiction uses the 'abstract' approach to determine if a felony is inherently dangerous.",
        q: "If Dan cannot be charged with felony murder, what is the most appropriate alternative homicide charge?",
        opts: [
            "Involuntary manslaughter, because his failure to acquire a state license merely constitutes ordinary civil negligence rather than criminal culpability.",
            "Depraved heart murder, because performing complex unlicensed surgery demonstrates an extreme, reckless indifference to the value of human life.",
            "First-degree murder, because the use of a surgical scalpel automatically establishes express premeditated malice aforethought.",
            "Voluntary manslaughter, because the intense pressure of performing a medical procedure provoked a state of severe emotional disturbance."
        ],
        ans: 1,
        exp: "Even if felony murder does not apply, a defendant who acts with a 'depraved heart'—an extreme, conscious disregard for an unjustifiably high risk to human life—can be convicted of second-degree murder. Performing an appendectomy in a basement with no medical training clearly demonstrates such extreme recklessness."
    },
    {
        id: 3,
        topic: "Defenses / Consent",
        fp: "Dan, a college dropout, poses as a licensed surgeon. He convinces a patient to undergo a complex appendectomy in his basement. Practicing medicine without a license is a statutory felony in the jurisdiction. During the procedure, the patient dies from massive blood loss. Dan is charged with felony murder. The jurisdiction uses the 'abstract' approach to determine if a felony is inherently dangerous.",
        q: "Can Dan assert the defense of consent against the homicide charge, arguing the patient willingly assumed the risk of the basement surgery?",
        opts: [
            "Yes, because adults possess an absolute constitutional right to select their own medical providers.",
            "No, because the patient was fundamentally deceived regarding Dan's professional qualifications, rendering the consent factually invalid.",
            "Consent is not a valid defense to a criminal homicide charge.",
            "Yes, but only if the patient signed a formal, notarized liability waiver before the procedure commenced."
        ],
        ans: 2,
        exp: "In criminal law, a victim's consent is generally NEVER a defense to murder or severe bodily injury. The state has an independent interest in preserving human life that cannot be waived by the victim."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Defenses / Mistake of Law (Reliance on Official Interpretation)",
        fp: "Dan owns a chemical manufacturing plant. He asks the State Attorney General if a new method of disposing of chemical waste is lawful. The Attorney General issues a formal, written official opinion declaring the method entirely lawful under the state's environmental code. Relying on this, Dan disposes of the waste. Two months later, the State Supreme Court strikes down the Attorney General's interpretation, declaring the method a strict liability criminal offense.",
        q: "Can Dan successfully assert a mistake of law defense to the criminal charges?",
        opts: [
            "No, because ignorance or mistake of the law is never a defense under any circumstances.",
            "No, because strict liability environmental offenses explicitly prohibit all equitable or reliance-based affirmative defenses.",
            "Yes, because the ex post facto clause prevents the retroactive application of judicial decisions.",
            "Yes, because reasonable reliance on an official interpretation by a public officer charged with enforcement is a recognized exception to the mistake of law doctrine."
        ],
        ans: 3,
        exp: "While mistake of law is generally no defense, a widely recognized exception applies if the defendant reasonably relies on an official statement of the law contained in a statute, judicial decision, or an official interpretation by a public officer/agency legally charged with interpreting or enforcing the law (such as the Attorney General)."
    },
    {
        id: 5,
        topic: "Defenses / Mistake of Law (Reliance on Private Counsel)",
        fp: "Dan owns a chemical manufacturing plant. He asks the State Attorney General if a new method of disposing of chemical waste is lawful. The Attorney General issues a formal, written official opinion declaring the method entirely lawful under the state's environmental code. Relying on this, Dan disposes of the waste. Two months later, the State Supreme Court strikes down the Attorney General's interpretation, declaring the method a strict liability criminal offense.\n\nAssume instead that Dan never contacted the Attorney General. Instead, he relied exclusively on a detailed memorandum written by his highly expensive, private corporate attorney, who wrongly assured him the disposal was legal.",
        q: "Would Dan's reliance on his private attorney constitute a valid mistake of law defense?",
        opts: [
            "No, because relying on private counsel does not excuse a statutory violation.",
            "Yes, because the advice was rendered by a licensed legal professional.",
            "No, because corporate attorneys inherently lack the necessary objectivity.",
            "Yes, provided the legal memorandum was objectively reasonable based on the available jurisprudence at the time."
        ],
        ans: 0,
        exp: "Reliance on the advice of private counsel, no matter how eminent or expensive the attorney is, does NOT constitute a valid exception to the general rule that ignorance of the law is no defense."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Property Crimes / Forgery (Fictitious Person)",
        fp: "Erin creates a highly realistic, entirely fake real estate deed for a vacant plot of land she does not own. She signs the deed using the name 'John Doe,' a completely fictitious person she invented. She then presents the deed to Fred and sells him the 'land' for $50,000 cash.",
        q: "Is Erin guilty of common law forgery for creating the deed?",
        opts: [
            "No, because 'John Doe' is a fictitious entity rather than an actual living person whose identity was stolen.",
            "Yes, she made a false writing with apparent legal significance.",
            "No, because the transfer of real estate strictly requires formal notarization before forgery liability attaches.",
            "Yes, but only because the total monetary value of the fraudulent transaction exceeded grand theft thresholds."
        ],
        ans: 1,
        exp: "Forgery is the making or altering of a false writing with apparent legal significance, done with the specific intent to defraud. Signing the name of a fictitious or non-existent person to a legal document with the intent to defraud still constitutes forgery."
    },
    {
        id: 7,
        topic: "Property Crimes / False Pretenses",
        fp: "Erin creates a highly realistic, entirely fake real estate deed for a vacant plot of land she does not own. She signs the deed using the name 'John Doe,' a completely fictitious person she invented. She then presents the deed to Fred and sells him the 'land' for $50,000 cash.",
        q: "Regarding the $50,000 cash, what property crime did Erin commit?",
        opts: [
            "Larceny by trick, because she utilized deceptive documents to obtain temporary custody of the funds.",
            "Embezzlement, because she exercised unlawful dominion over commercial assets entrusted to her care.",
            "False pretenses, because she intentionally obtained legal title to the money through deceit.",
            "Robbery, because the exchange of forged real estate documents constitutes constructive force against the buyer."
        ],
        ans: 2,
        exp: "False pretenses requires that the victim intend to transfer legal TITLE (ownership) to the defendant based on an intentional false representation of a past or existing fact. Because Fred intended to purchase the land and transfer full ownership of the $50,000 to Erin, her crime is false pretenses."
    },
    {
        id: 8,
        topic: "Property Crimes / False Pretenses vs. Larceny by Trick",
        fp: "Erin creates a highly realistic, entirely fake real estate deed for a vacant plot of land she does not own. She signs the deed using the name 'John Doe,' a completely fictitious person she invented. She then presents the deed to Fred and sells him the 'land' for $50,000 cash.",
        q: "Why is Erin NOT guilty of Larceny by Trick regarding the $50,000?",
        opts: [
            "Because real estate transactions are exempt from personal property statutes.",
            "Because she did not make a false representation of an existing fact.",
            "Because the victim did not offer any physical resistance during the exchange.",
            "Because Fred intended to transfer full ownership of the currency to Erin, rather than merely relinquishing temporary physical custody of the funds."
        ],
        ans: 3,
        exp: "The core distinction between larceny by trick and false pretenses depends on what the victim intends to pass to the defendant. If the victim intends to pass mere custody (e.g., handing over a watch to be inspected), it is larceny by trick. If the victim intends to pass full ownership/title (e.g., handing over cash to finalize a purchase), it is false pretenses."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Parties to a Crime / Accomplice Liability (Mens Rea)",
        fp: "Greg wants to burn down his competitor's store. He asks his friend Hal to buy him a can of gasoline. Hal agrees, but Hal secretly hates Greg and wants him to fail. Hal buys the can, but secretly fills it with 90% water and 10% gasoline, hoping the fire won't start. Hal hands the can to Greg. Greg pours the mixture on the store and strikes a match, but the mixture fails to ignite.",
        q: "Is Hal guilty as an accomplice to Greg's attempted arson?",
        opts: [
            "No, because he lacked the specific intent that the crime actually be successfully completed when he provided the materials.",
            "Yes, because he intentionally provided physical materials that were subsequently utilized in a criminal endeavor.",
            "No, because the liquid mixture was factually incapable of igniting the commercial structure.",
            "Yes, because under the natural and probable consequences doctrine, any assistance inherently triggers absolute vicarious liability."
        ],
        ans: 0,
        exp: "Accomplice liability requires dual intent: the intent to assist the primary party, AND the specific intent that the substantive crime be successfully committed. Because Hal secretly wanted the arson to fail and purposely sabotaged the gasoline, he lacked the requisite mens rea to be an accomplice."
    },
    {
        id: 10,
        topic: "Inchoate Crimes / Attempt & Factual Impossibility",
        fp: "Greg wants to burn down his competitor's store. He asks his friend Hal to buy him a can of gasoline. Hal agrees, but Hal secretly hates Greg and wants him to fail. Hal buys the can, but secretly fills it with 90% water and 10% gasoline, hoping the fire won't start. Hal hands the can to Greg. Greg pours the mixture on the store and strikes a match, but the mixture fails to ignite.",
        q: "Is Greg guilty of attempted arson?",
        opts: [
            "No, because the mixture he poured was fundamentally incapable of causing structural damage.",
            "Yes, because factual impossibility is not a defense to criminal attempt.",
            "No, because the act of striking a single match does not satisfy the dangerous proximity standard.",
            "Yes, but his liability is mitigated because he was actively sabotaged by a third party."
        ],
        ans: 1,
        exp: "Attempt requires specific intent to commit the crime and a substantial step toward its commission. Factual impossibility (the fact that the 'gasoline' was actually mostly water, preventing the fire) is NEVER a defense to attempt. Greg's conduct is judged based on the circumstances as he believed them to be."
    },
    {
        id: 11,
        topic: "Inchoate Crimes / Conspiracy (Feigned Intent)",
        fp: "Greg wants to burn down his competitor's store. He asks his friend Hal to buy him a can of gasoline. Hal agrees, but Hal secretly hates Greg and wants him to fail. Hal buys the can, but secretly fills it with 90% water and 10% gasoline, hoping the fire won't start. Hal hands the can to Greg. Greg pours the mixture on the store and strikes a match, but the mixture fails to ignite.",
        q: "Are Greg and Hal guilty of common law conspiracy?",
        opts: [
            "Yes, because they formed a verbal agreement.",
            "Yes, because Hal completed the overt act of purchasing the container.",
            "No, because there was no genuine bilateral agreement.",
            "No, because the structure did not suffer actual physical charring."
        ],
        ans: 2,
        exp: "Under traditional common law, conspiracy requires a 'bilateral' agreement—a true meeting of the minds where at least two parties genuinely intend to commit the target crime. Because Hal was feigning his agreement and secretly wanted the crime to fail, there was no true bilateral agreement."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Homicide / Proximate Causation (Superseding Intentional Act)",
        fp: "Ian shoots Jack in the chest, intending to kill him. Jack survives the initial shooting but is hospitalized in intense, agonizing pain. A nurse, seeing Jack suffer, intentionally injects Jack with a massive, lethal overdose of morphine specifically to end his life. Jack dies instantly from the overdose.",
        q: "Is Ian the proximate cause of Jack's death?",
        opts: [
            "Yes, because Jack would not have been in the hospital bed but for Ian's initial malicious assault.",
            "Yes, because medical interventions are universally classified as foreseeable dependent intervening causes under modern tort and criminal frameworks.",
            "No, because the victim's underlying injuries were not immediately fatal.",
            "No, because the nurse's intentional homicidal act is a superseding intervening cause."
        ],
        ans: 3,
        exp: "While ordinary medical negligence is a foreseeable dependent cause that does not break the chain of legal causation, a third party's independent, INTENTIONAL, and malicious act (a nurse committing active euthanasia/murder) is highly unforeseeable. This acts as a superseding intervening cause, severing Ian's liability for the completed homicide."
    },
    {
        id: 13,
        topic: "Inchoate Crimes / Attempted Murder (Causation Broken)",
        fp: "Ian shoots Jack in the chest, intending to kill him. Jack survives the initial shooting but is hospitalized in intense, agonizing pain. A nurse, seeing Jack suffer, intentionally injects Jack with a massive, lethal overdose of morphine specifically to end his life. Jack dies instantly from the overdose.",
        q: "If the nurse's act is deemed a superseding cause, what is Ian's highest potential criminal liability?",
        opts: [
            "Voluntary manslaughter, because the victim ultimately perished.",
            "Aggravated battery, because the chain of causation for any homicide offense was completely severed by the intervening third party.",
            "Attempted murder, because his specific intent to kill coupled with a substantial step survives the disruption of proximate causation.",
            "No crime, because the superseding act provides absolute transactional immunity to the original aggressor."
        ],
        ans: 2,
        exp: "If a superseding cause breaks the chain of proximate causation for the completed homicide, the original attacker cannot be convicted of murder. However, because Ian shot Jack with the specific intent to kill him, he remains fully liable for attempted murder, as the elements of attempt were complete the moment he pulled the trigger."
    },
    {
        id: 14,
        topic: "Homicide / First-Degree Murder (Mercy Killing)",
        fp: "Ian shoots Jack in the chest, intending to kill him. Jack survives the initial shooting but is hospitalized in intense, agonizing pain. A nurse, seeing Jack suffer, intentionally injects Jack with a massive, lethal overdose of morphine specifically to end his life. Jack dies instantly from the overdose.",
        q: "What is the nurse's liability regarding Jack's death?",
        opts: [
            "First-degree murder, because she acted with premeditation.",
            "Voluntary manslaughter, because witnessing the patient's agony constitutes adequate legal provocation under the circumstances.",
            "Involuntary manslaughter, because her actions were motivated by medical compassion rather than subjective malice aforethought.",
            "No crime, because she legally accelerated an inevitable demise."
        ],
        ans: 0,
        exp: "A 'mercy killing' or active euthanasia remains murder. Because the nurse intentionally administered a lethal overdose with premeditation and deliberation, she is fully liable for first-degree murder. Compassion does not negate malice aforethought or premeditation in criminal law."
    },
    // FACT PATTERN 6 (Q15-Q17)
    {
        id: 15,
        topic: "Crimes against Person / Kidnapping (Asportation Increasing Risk)",
        fp: "Kelly points a gun at a bank manager inside the bank. Instead of demanding money there, she forces him into his own car and orders him to drive 50 miles to his private residence to open a secret safe she knows is hidden there.",
        q: "Is Kelly guilty of kidnapping?",
        opts: [
            "No, because moving a victim to their own familiar residential environment logically decreases the overall objective risk of harm.",
            "Yes, because moving a victim 50 miles from a commercial bank to a private residence constitutes substantial independent asportation that increases the risk of harm.",
            "No, because the movement was entirely incidental to the underlying target offense of property theft.",
            "Yes, because any movement of a hostage automatically triggers federal kidnapping statutes."
        ],
        ans: 1,
        exp: "Kidnapping requires unlawful confinement and asportation (movement) that is substantial or increases the risk of harm independent of the underlying crime. Moving a victim 50 miles from a highly visible public bank to an isolated private residence drastically increases the risk of harm, easily satisfying the asportation requirement."
    },
    {
        id: 16,
        topic: "Property Crimes / Robbery (Imminence)",
        fp: "Kelly points a gun at a bank manager inside the bank. Instead of demanding money there, she forces him into his own car and orders him to drive 50 miles to his private residence to open a secret safe she knows is hidden there.\n\nOnce inside the house, Kelly points the gun at the manager's head and says, 'Open the safe right now or I'll shoot.' He opens the safe, and she takes the cash.",
        q: "Is the taking of the cash classified as robbery?",
        opts: [
            "No, because the money belonged to the bank, not the manager personally.",
            "No, because it was taken from a residential safe rather than the victim's immediate physical person.",
            "Yes, because the prolonged travel time from the bank established premeditated intent to permanently deprive.",
            "Yes, she used the threat of immediate physical harm to take property from his presence."
        ],
        ans: 3,
        exp: "Robbery requires a taking of personal property from the person or PRESENCE of another by force or the threat of immediate physical harm. Forcing the victim at gunpoint to open a safe in the same room satisfies all elements of robbery."
    },
    {
        id: 17,
        topic: "Property Crimes / Extortion vs. Robbery",
        fp: "Kelly points a gun at a bank manager inside the bank. Instead of demanding money there, she forces him into his own car and orders him to drive 50 miles to his private residence to open a secret safe she knows is hidden there.\n\nAssume instead that at the house, Kelly put the gun away, sat down, and said, 'Open the safe or I will release your embezzling secrets to the media tomorrow.' He opens it.",
        q: "What crime did Kelly commit in this alternate scenario?",
        opts: [
            "Extortion, because the threat involved future harm.",
            "Robbery, because the victim was already confined.",
            "Larceny by trick, because she deceived him regarding the media release.",
            "Embezzlement, because the manager voluntarily opened the vault."
        ],
        ans: 0,
        exp: "Extortion (blackmail) involves obtaining property from another by means of threats of future harm (including exposing a secret). Because the threat was to release secrets 'tomorrow,' rather than immediate physical harm, the crime is extortion, not robbery."
    },
    // FACT PATTERN 7 (Q18-Q20)
    {
        id: 18,
        topic: "Property Crimes / Burglary & Voluntary Intoxication",
        fp: "Leo voluntarily smokes a large amount of PCP. The drug causes severe, intense hallucinations. Believing his neighbor is a literal demon from hell attempting to curse his family, Leo kicks down the neighbor's door at 3:00 AM with a baseball bat to kill the demon. Once inside, he violently attacks the neighbor.",
        q: "Is Leo guilty of common law burglary?",
        opts: [
            "Yes, because he unlawfully breached the threshold of a dwelling house during the nighttime hours.",
            "No, because his severe intoxication prevented him from forming the specific intent to commit a felony.",
            "Yes, because voluntary intoxication is never a defense to violent criminal acts.",
            "No, because the neighbor survived the physical assault."
        ],
        ans: 1,
        exp: "Common law burglary requires the specific intent to commit a felony inside the dwelling at the exact time of entry. Severe intoxication (even voluntary) that prevents the defendant from forming this specific intent is a valid defense. Because Leo believed he was killing a demon (not committing a felony), he lacked the specific intent required for burglary."
    },
    {
        id: 19,
        topic: "Homicide / Imperfect Self-Defense & Intoxication",
        fp: "Leo voluntarily smokes a large amount of PCP. The drug causes severe, intense hallucinations. Believing his neighbor is a literal demon from hell attempting to curse his family, Leo kicks down the neighbor's door at 3:00 AM with a baseball bat to kill the demon. Once inside, he violently attacks the neighbor.\n\nAssume the neighbor dies from the attack. Leo is charged with murder.",
        q: "Can Leo assert the doctrine of imperfect self-defense to mitigate the murder charge?",
        opts: [
            "No, because the castle doctrine prevents any intruder from asserting defensive privileges against a lawful homeowner.",
            "Yes, because voluntary intoxication automatically negates all forms of malice aforethought under modern penal codes.",
            "Yes, if his intoxication caused an honest but unreasonable belief in the need for deadly force, negating malice.",
            "No, because the victim was unarmed at the time of the fatal physical altercation."
        ],
        ans: 2,
        exp: "Under the doctrine of imperfect self-defense, if a defendant holds an honest but objectively unreasonable belief that deadly force is necessary to prevent imminent death or great bodily harm, this belief negates malice aforethought. In many jurisdictions, this applies even if the unreasonable belief was induced by voluntary intoxication, mitigating murder to voluntary manslaughter."
    },
    {
        id: 20,
        topic: "Defenses / Voluntary Intoxication Limitation (General Intent)",
        fp: "Leo voluntarily smokes a large amount of PCP. The drug causes severe, intense hallucinations. Believing his neighbor is a literal demon from hell attempting to curse his family, Leo kicks down the neighbor's door at 3:00 AM with a baseball bat to kill the demon. Once inside, he violently attacks the neighbor.\n\nAssume the neighbor survives the attack. Leo is charged with battery.",
        q: "Can Leo use his PCP intoxication as a defense to the battery charge?",
        opts: [
            "Yes, because he honestly believed he was striking a non-human entity.",
            "Yes, because his severe hallucinations rendered him temporarily legally insane.",
            "No, because the use of a deadly weapon establishes strict liability.",
            "No, because battery is a general intent crime."
        ],
        ans: 3,
        exp: "Battery is a general intent crime. Voluntary intoxication is NEVER a defense to general intent crimes, because the act of voluntarily consuming the intoxicating substance legally substitutes for the reckless mental state required for the offense."
    },
    // FACT PATTERN 8 (Q21-Q23)
    {
        id: 21,
        topic: "Inchoate Crimes / Conspiracy (Wharton's Rule Third-Party Exception)",
        fp: "Mark and Nancy agree to duel to the death with pistols in a local park. Dueling is a statutory offense that logically requires exactly two participants. Knowing they need an impartial judge to ensure fairness, they recruit Oscar to act as the official referee for the duel. Oscar agrees and drives them to the park. Police arrest all three before the duel begins.",
        q: "Are they guilty of conspiracy to engage in an illegal duel?",
        opts: [
            "Yes, because the participation of the referee invokes the third-party exception to Wharton's rule, allowing the conspiracy charge to proceed.",
            "No, because Wharton's Rule strictly prohibits a conspiracy charge for any crime that requires mutual cooperation between two willing participants.",
            "Yes, because dueling is a violent capital offense that automatically supersedes all traditional common law inchoate merger doctrines.",
            "No, because the police intervention prevented the completion of a requisite physical overt act."
        ],
        ans: 0,
        exp: "Wharton's Rule prohibits a conspiracy charge for a crime that logically requires exactly two people if only those two people agree to commit it. However, the 'third-party exception' applies when more people participate in the agreement than are necessary to commit the crime. Because Oscar participated, the rule does not bar the charge."
    },
    {
        id: 22,
        topic: "Inchoate Crimes / Conspiracy & Withdrawal",
        fp: "Mark and Nancy agree to duel to the death with pistols in a local park. Dueling is a statutory offense that logically requires exactly two participants. Knowing they need an impartial judge to ensure fairness, they recruit Oscar to act as the official referee for the duel. Oscar agrees and drives them to the park. Police arrest all three before the duel begins.\n\nAssume Mark got terrified halfway to the park, demanded Oscar stop the car, and walked home, clearly communicating he was backing out.",
        q: "What is Mark's liability regarding the conspiracy?",
        opts: [
            "He is entirely absolved of all criminal liability because he successfully prevented his own participation prior to the commission of the target offense.",
            "He is still guilty of conspiracy but not the substantive crime.",
            "He is guilty of attempted dueling, but the conspiracy charge is dismissed.",
            "He is strictly liable for any future substantive offenses committed by his former partners."
        ],
        ans: 1,
        exp: "Conspiracy is complete the moment the agreement is made and an overt act is performed (Oscar driving them). Once completed, a defendant cannot withdraw from the conspiracy itself. However, an effective withdrawal (communicating it clearly before the crime occurs) will shield him from liability for the subsequent substantive crimes of his co-conspirators."
    },
    {
        id: 23,
        topic: "Parties to a Crime / Accomplice Liability (Referee)",
        fp: "Mark and Nancy agree to duel to the death with pistols in a local park. Dueling is a statutory offense that logically requires exactly two participants. Knowing they need an impartial judge to ensure fairness, they recruit Oscar to act as the official referee for the duel. Oscar agrees and drives them to the park. Police arrest all three before the duel begins.\n\nAssume the police did not arrive, the duel took place, and Mark killed Nancy.",
        q: "Could Oscar be charged as an accomplice to the homicide?",
        opts: [
            "No, because a neutral referee does not share the specific combative animus required for accessorial liability.",
            "No, because Mark and Nancy voluntarily consented to the inherently dangerous activity.",
            "Yes, because he intentionally aided the commission of the crime.",
            "Yes, but only under the strict liability parameters of the felony murder rule."
        ],
        ans: 2,
        exp: "An accomplice is one who aids, abets, or encourages the principal in the commission of the crime, with the intent that the crime be committed. By acting as a referee and driving them to the location, Oscar intentionally facilitated the lethal duel, making him an accomplice to the resulting homicide."
    },
    // FACT PATTERN 9 (Q24-Q25)
    {
        id: 24,
        topic: "Property Crimes / Larceny by Bailee (Breaking Bulk)",
        fp: "Pam is an independent courier hired by a jewelry store to transport a locked, sealed box of expensive necklaces to a wealthy client. En route, Pam stops her van, pries open the sealed box, removes one diamond necklace, and reseals the box. She delivers the box to the client. Pam later sells the necklace.",
        q: "What property crime did Pam commit when she took the necklace?",
        opts: [
            "False pretenses, because she intentionally utilized deceptive commercial practices to defraud the client.",
            "Embezzlement, because she was a fully authorized bailee possessing continuous legal custody of the cargo throughout the transit period.",
            "Robbery, because prying open the sealed commercial container constitutes the constructive application of physical violence.",
            "Larceny, because breaking the seal of a bailed container terminates lawful possession, making the subsequent removal a trespassory taking."
        ],
        ans: 3,
        exp: "A commercial carrier (bailee) has lawful possession of a sealed container as a whole. Under the common law 'breaking bulk' doctrine, if the bailee breaks open the sealed container to remove individual contents, their lawful possession ends immediately. The taking of the contents becomes a trespassory taking, constituting larceny rather than embezzlement."
    },
    {
        id: 25,
        topic: "Property Crimes / Embezzlement (Bailee Exception)",
        fp: "Pam is an independent courier hired by a jewelry store to transport a locked, sealed box of expensive necklaces to a wealthy client. En route, Pam stops her van, pries open the sealed box, removes one diamond necklace, and reseals the box. She delivers the box to the client. Pam later sells the necklace.\n\nAssume instead that Pam never opened the sealed box. She simply drove the entire van to a pawn shop and sold the fully sealed, unbroken box of jewelry.",
        q: "What crime did Pam commit in this alternate scenario?",
        opts: [
            "Larceny by trick, because she deceived her employer regarding her intended destination.",
            "Common law burglary, because she breached the physical cabin of the van with felonious intent.",
            "Embezzlement, because she converted property while retaining lawful possession of the whole unit.",
            "False pretenses, because the pawn shop acquired legal title to the merchandise."
        ],
        ans: 2,
        exp: "If a bailee fraudulently converts the entire bailed property (the unbroken, sealed box) without 'breaking bulk', they are converting property over which they already have valid lawful possession. This constitutes embezzlement, not larceny."
    }
];
const examData = [
    {
        id: 1,
        topic: "Mixed",
        fp: "A retailer sent a purchase order to a computer manufacturer requesting the shipment of a specified quantity of laptops. The purchase order stated: 'In the event of a breach, the retailer may pursue all remedies available to it under the UCC.' The manufacturer received the purchase order and promptly shipped the laptops to the retailer. The manufacturer sent an acknowledgment form to the retailer four days later.\n\nTwo days after accepting delivery of the laptops, the retailer received the manufacturer's acknowledgment form, which excluded consequential damages. The same day, the retailer discovered that the laptops were defective.",
        q: "If the retailer sues the manufacturer for breach of contract, will the retailer be entitled to pursue a claim for consequential damages?",
        opts: [
            "No, because the retailer and the manufacturer did not enter into a contract.",
            "No, because a contract was created that included the manufacturer's term excluding consequential damages.",
            "Yes, because the manufacturer's shipment of the laptops constituted an acceptance of the retailer's offer.",
            "Yes, because terms supplied by the UCC will govern the contract formed by the conduct of the parties."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-206(1)(b), an offer to buy goods for prompt or current shipment invites acceptance either by a prompt promise to ship or by the prompt shipment of conforming or non-conforming goods. A binding contract was formed at the moment the manufacturer promptly shipped the laptops, adopting the terms of the retailer's purchase order (which reserved all UCC remedies)[cite: 4]. The acknowledgment form sent days after shipment was a proposal for modification under UCC § 2-209, which requires assent[cite: 4]. Because the retailer never assented to the limitation, consequential damages remain available (Option C)[cite: 4]. Option A is incorrect because shipment formed a contract[cite: 4]. Option B is incorrect because unilateral post-formation forms cannot insert disclaimers without assent[cite: 4]. Option D is incorrect because formation occurred by offer and acceptance, not by section 2-207(3) conduct[cite: 4]."
    },
    {
        id: 2,
        topic: "Mixed",
        fp: "A cigarette maker created and published a magazine advertisement that featured a model dressed as a race-car driver standing in front of a distinctive race car. In fact, the car looked almost exactly like the very unusually marked one driven by a famous and popular driver. The driver in the ad was not identified, and his face was not shown in the advertisement. The cigarette maker published the advertisement without obtaining the famous driver's permission. The race-car driver sued the cigarette maker for economic loss only, based on common-law misappropriation of the right of publicity. The cigarette maker moved to dismiss the complaint.",
        q: "Will the cigarette maker's motion to dismiss the complaint be granted?",
        opts: [
            "No, because there are sufficient indicia of the driver's identity to support a verdict of liability.",
            "Yes, because the driver is a public figure.",
            "Yes, because there was no mention of the driver's name in the ad.",
            "Yes, because the driver did not claim any emotional or dignitary loss."
        ],
        ans: 0,
        exp: "Rule: The tort of commercial appropriation / infringement of the right of publicity protects an individual from the unauthorized commercial exploitation of their name, likeness, or identity[cite: 4]. Direct naming or showing the face is not required if the defendant uses distinctive indicia or attributes (such as an iconic, uniquely marked vehicle associated with the persona) that clearly evoke the plaintiff's identity for commercial benefit (Motschenbacher v. R.J. Reynolds)[cite: 4]. Because the distinctive car reasonably identified the celebrity driver, the complaint states a viable claim (Option A)[cite: 4]. Option B is incorrect because public figure status increases, rather than eliminates, the commercial value protected by publicity rights[cite: 4]. Option C is incorrect because evocative contextual attributes suffice without express naming[cite: 4]. Option D is incorrect because the right of publicity protects pecuniary/commercial value, not merely dignitary loss[cite: 4]."
    },
    {
        id: 3,
        topic: "Mixed",
        fp: "A drug-dealing operation consisted of three men: a supplier, a dealer, and a lookout. The supplier became convinced that the lookout was a police informant. He persuaded the dealer that they should kill the lookout to avoid problems. They purchased a gun and ammunition to commit the murder and planned to dispose of the lookout's body by pushing it off a cliff.\n\nThe supplier arranged a meeting in a remote area of a state park. After the three men arrived, the supplier fired two shots at the lookout, who fell to the ground. Both the supplier and the dealer believed that the lookout was dead. The dealer subsequently pushed the lookout's body off a nearby cliff. Unbeknownst to the supplier and the dealer, the lookout had been wounded by the bullets but was not dead; he died as a result of the fall from the cliff.",
        q: "Can the supplier be convicted of murder?",
        opts: [
            "No, because the shooting and the disposal of the body were separate events that cannot be viewed as a single scheme or plan.",
            "No, because the supplier did not intend that the fall from the cliff would kill the lookout.",
            "Yes, because both the shooting and the disposal of the body were part of the original plan to kill the lookout.",
            "Yes, because the supplier believed that his shots had killed the lookout."
        ],
        ans: 2,
        exp: "Rule: Under the doctrine of concurrent schemes / single continuous transaction, when actors intend to commit murder and execute a planned sequence of acts (shooting followed by disposal of the body), liability attaches even if the precise mechanism of death occurs during the disposal rather than the initial assault (Jackson v. Commonwealth)[cite: 4]. Both the shooting and discarding off the cliff were part of a single preconceived plan to cause the victim's death, establishing proximate causation and concurrence of mens rea and actus reus (Option C)[cite: 4]. Option A is incorrect because the shooting and disposal formed one continuous homicide transaction[cite: 4]. Option B is incorrect because the exact biological mechanism of death need not unfold precisely as anticipated when the lethal plan was intentionally executed[cite: 4]. Option D is incorrect because belief alone does not establish legal causation without connecting the acts to the lethal scheme[cite: 4]."
    },
    {
        id: 4,
        topic: "Mixed",
        fp: "While attending an amusement park's fireworks display, a spectator was struck and injured by a rocket set off as part of the display. The rocket unexpectedly failed to shoot upward but instead followed a trajectory parallel to the ground and struck the spectator. The spectator has sued the amusement park for damages.",
        q: "On which of the following theories is the spectator most likely to be able to obtain a summary judgment as to liability?",
        opts: [
            "Abnormally dangerous activity.",
            "Battery.",
            "Nuisance.",
            "Strict products liability."
        ],
        ans: 0,
        exp: "Rule: Strict liability is imposed on an actor who conducts an abnormally dangerous activity (Restatement (Second) of Torts §§ 519–520)[cite: 4]. Conducting public fireworks displays is classified in many jurisdictions as an abnormally dangerous activity because it poses a significant risk of severe harm that cannot be entirely eliminated even with reasonable care, and is not a matter of common everyday usage[cite: 4]. Summary judgment on liability is most achievable under strict liability because the plaintiff need not prove negligence (Option A)[cite: 4]. Option B is incorrect because battery requires an intentional harmful contact, absent here[cite: 4]. Option C is incorrect because private nuisance requires an unreasonable interference with the use and enjoyment of real property, not personal injury at a public venue[cite: 4]. Option D is incorrect because the amusement park was an operator/service provider rather than a commercial seller of defective goods[cite: 4]."
    },
    {
        id: 5,
        topic: "Mixed",
        fp: "A car owner washed her car while it was parked on a public street, in violation of a statute that prohibits the washing of vehicles on public streets during rush hours. The statute was enacted only to expedite the flow of automobile traffic. Due to a sudden and unexpected cold snap, the car owner's waste water formed a puddle that froze. A pedestrian slipped on the frozen puddle and broke her leg. The pedestrian sued the car owner to recover for her injury. At trial, the only evidence the pedestrian offered as to negligence was the car owner's admission that she had violated the statute. At the conclusion of the proofs, both parties moved for a directed verdict.",
        q: "How should the trial judge proceed?",
        opts: [
            "Deny both motions and submit the case to the jury, because, on the facts, the jury may infer that the car owner was negligent.",
            "Deny both motions and submit the case to the jury, because the jury may consider the statutory violation as evidence that the car owner was negligent.",
            "Grant the car owner's motion, because the pedestrian has failed to offer adequate evidence that the car owner was negligent.",
            "Grant the pedestrian's motion, because of the car owner's admitted statutory violation."
        ],
        ans: 2,
        exp: "Rule: The doctrine of negligence per se applies only if (1) the statute was designed to protect against the type of accident that occurred, and (2) the victim is within the class of persons the statute was designed to protect[cite: 4]. The statute was enacted solely to expedite automobile traffic flow, not to protect pedestrians from slipping on icy puddles[cite: 4]. Because negligence per se is inapplicable and the pedestrian presented no other evidence of unreasonable conduct (especially given the sudden, unexpected freeze), the plaintiff failed to establish a prima facie case of negligence, requiring a directed verdict for the car owner (Option C)[cite: 4]. Options A and B are incorrect because a traffic flow statute cannot be considered evidence of pedestrian safety standards[cite: 4]. Option D is incorrect because statutory violation outside its protected risk does not establish negligence[cite: 4]."
    },
    {
        id: 6,
        topic: "Mixed",
        fp: "A buyer entered into a written contract to purchase from a seller 1,000 sets of specially manufactured ball bearings of a non-standard dimension for a price of $10 per set. The seller correctly calculated that it would cost $8 to manufacture each set. Delivery was scheduled for 60 days later. Fifty-five days later, after the seller had completed production of the 1,000 sets, the buyer abandoned the project requiring use of the specially manufactured ball bearings and repudiated the contract with the seller. After notifying the buyer of his intention to resell, the seller sold the 1,000 sets of ball bearings to a salvage company for $2 per set. The seller sued the buyer for damages.",
        q: "What damages should the court award to the seller?",
        opts: [
            "$2 per set, representing the difference between the cost of production and the price the buyer agreed to pay.",
            "$6 per set, representing the difference between the cost of manufacture and the salvage price.",
            "$8 per set, representing the lost profits plus the unrecovered cost of production.",
            "Nominal damages, as the seller failed to resell the goods by public auction."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-706 and § 2-708(2), the measure of damages for a buyer's repudiation is designed to put the seller in as good a position as performance would have done (lost profit plus costs reasonably incurred minus resale proceeds)[cite: 4]. Under UCC § 2-706, resale damages equal contract price ($10) minus resale price ($2) = $8 per set[cite: 4]. Under UCC § 2-708(2), damages equal lost profit ($2) plus unrecovered manufacturing costs ($8 cost minus $2 salvage = $6), which also equals $8 per set (Option C)[cite: 4]. Option A is incorrect because it awards only lost profit while ignoring unrecovered manufacturing costs[cite: 4]. Option B is incorrect because it awards out-of-pocket costs while ignoring the lost expectation profit[cite: 4]. Option D is incorrect because private commercial resale is explicitly authorized by UCC § 2-706[cite: 4]."
    },
    {
        id: 7,
        topic: "Mixed",
        fp: "A man decided to kill his neighbor, with whom he had been feuding for years. The man took a handgun and followed his neighbor to the county fairgrounds. When he had a clear shot, he aimed the gun and fired, but at the last second the neighbor moved. The shot missed the neighbor but struck and killed a police officer at the fairgrounds.\n\nThe jurisdiction defines murder as at common law but creates three degrees of murder:\n(a) Capital murder, punishable by death, is the intentional murder of a police officer.\n(b) First-degree murder, punishable by life in prison, is premeditated and deliberate murder.\n(c) Second-degree murder, punishable by up to 40 years in prison, is all other murders.",
        q: "What is the most serious crime of which the man can properly be convicted?",
        opts: [
            "Capital murder of the police officer.",
            "First-degree murder of the police officer.",
            "Second-degree murder of the police officer.",
            "Attempted murder of the neighbor."
        ],
        ans: 1,
        exp: "Rule: Under the doctrine of transferred intent, when an actor intends to kill one victim with premeditation and deliberation and the lethal shot misses and kills an unintended bystander, the premeditated intent to kill transfers to the actual victim, elevating the completed homicide to first-degree murder (Option B)[cite: 4]. Option A is incorrect because capital murder requires the specific intent to kill a known police officer; transferred general intent cannot supply the specific statutory status requirement[cite: 4]. Option C is incorrect because transferred premeditation satisfies first-degree murder[cite: 4]. Option D is incorrect because the completed first-degree murder of the bystander is more serious than an inchoate attempt[cite: 4]."
    },
    {
        id: 8,
        topic: "Mixed",
        fp: "A used car auto dealer had an adult daughter who needed a car in her employment but had only $3,000 with which to buy one. The dealer wrote to her, 'Give me your $3,000 and I'll give you the car on our lot that we have been using as a demonstrator.' The daughter thanked her father and paid him the $3,000. As both the dealer and the daughter knew, the demonstrator was reasonably worth $10,000. After the daughter had paid the $3,000, but before the car had been delivered to her, one of the dealer's sales staff sold and delivered the same car to a customer for $10,000. Neither the salesperson nor the customer was aware of the transaction between the dealer and the daughter.",
        q: "Does the daughter, after rejecting a tendered return of the $3,000 by the dealer, have an action against him for breach of contract?",
        opts: [
            "Yes, because the dealer's promise was supported by bargained-for consideration.",
            "Yes, because the daughter's promise was supported by the moral obligation a father owes his child as to the necessities of modern life.",
            "No, because the payment of $3,000 was inadequate consideration to support the daughter's promise.",
            "No, because the salesperson's delivery of the car to the customer made it impossible for the dealer to perform."
        ],
        ans: 0,
        exp: "Rule: Consideration requires a bargained-for exchange. Where a transaction involves a mix of bargain and gift (a family discount), the consideration requirement is satisfied so long as the requested payment was bargained for as an inducement for the promise[cite: 4]. Courts do not inquire into the adequacy of consideration[cite: 4]. The daughter's payment of $3,000 constituted valid bargained-for consideration, making the contract binding (Option A)[cite: 4]. Option B is incorrect because moral obligations do not constitute valid legal consideration[cite: 4]. Option C is incorrect because adequacy of consideration is not reviewed by courts[cite: 4]. Option D is incorrect because a seller's internal operational mistake or voluntary sale to another does not establish objective impossibility[cite: 4]."
    },
    {
        id: 9,
        topic: "Mixed",
        fp: "A woman offered to pay her friend one-third of the stolen proceeds if the friend would drive the getaway car to be used in a bank robbery. The friend agreed but made the woman promise not to hurt anyone during the robbery.\n\nThe woman then drove to a sporting goods store, where she explained to the store owner that she needed a small firearm for use in a bank robbery. The store owner responded that he would charge extra because the woman was so unwise as to confide her unlawful plans for using the weapon, and he sold her a handgun at four times the regular price.\n\nDuring the robbery, the woman used the gun to threaten a bank teller into handing over the money. The gun discharged by accident and killed a bank customer.",
        q: "At common law, who in addition to the woman could properly be convicted of murder in the death of the customer?",
        opts: [
            "Both the friend and the store owner.",
            "Neither the friend nor the store owner.",
            "Only the friend.",
            "Only the store owner."
        ],
        ans: 0,
        exp: "Rule: Under the felony-murder doctrine and Pinkerton conspiratorial liability, all co-conspirators and accomplices to an inherently dangerous felony (robbery) are guilty of murder for any lethal shooting occurring during the felony[cite: 4]. The friend agreed to drive the getaway vehicle for a share of proceeds, making him an accomplice and co-conspirator; an internal promise not to hurt anyone is legally ineffective to avoid felony murder[cite: 4]. The store owner sold a firearm at an inflated price (four times regular price) knowing it would be used in a bank robbery, thereby acquiring a stake in the venture that makes him an accomplice and co-conspirator[cite: 4]. Both are guilty of murder (Option A)[cite: 4]. Options B, C, and D are incorrect because both individuals satisfy accomplice and conspiratorial liability thresholds[cite: 4]."
    },
    {
        id: 10,
        topic: "Mixed",
        fp: "Unaware that a lawyer was in the county courthouse library late on a Friday afternoon, when it was unusual for anyone to be using the library, a clerk locked the library door and left. The lawyer found herself locked in when she tried to leave the library at 7 p.m. It was midnight before the lawyer's family could find out where she was and get her out. The lawyer was very annoyed by her detention but was not otherwise harmed by it.",
        q: "Does the lawyer have a viable claim for false imprisonment against the clerk?",
        opts: [
            "No, because it was unusual for anyone to be using the library late on a Friday afternoon.",
            "No, because the clerk did not intend to confine the lawyer.",
            "Yes, because the clerk should have checked to make sure no one was in the library before the clerk locked the door.",
            "Yes, because the lawyer was aware of being confined."
        ],
        ans: 1,
        exp: "Rule: False imprisonment is an intentional tort requiring an act by the defendant with the specific intent to confine or restrain the plaintiff within a bounded area[cite: 4]. Confinement resulting from inadvertence, negligence, or mistake, without knowledge or intent to confine, does not sustain an intentional false imprisonment claim[cite: 4]. Because the clerk was unaware of the lawyer's presence and lacked intent to confine her, the claim fails (Option B)[cite: 4]. Option A is incorrect because the absence of intent is dispositive, not customary library hours[cite: 4]. Option C is incorrect because negligence does not satisfy the intent element of false imprisonment[cite: 4]. Option D is incorrect because awareness of confinement satisfies only the perception element, not the defendant's required intent[cite: 4]."
    },
    {
        id: 11,
        topic: "Mixed",
        fp: "An engineer entered into a written contract with an owner to serve in the essential position of on-site supervisor for construction of an office building. The day after signing the contract, the engineer was injured while bicycling and was rendered physically incapable of performing as the on-site supervisor. The engineer offered to serve as an off-site consultant for the same pay as originally agreed to by the parties.",
        q: "Is the owner likely to prevail in an action against the engineer for damages resulting from his failure to perform under the contract?",
        opts: [
            "No, because the engineer offered a reasonable substitute by offering to serve as an off-site consultant.",
            "No, because the engineer's physical ability to perform as on-site supervisor was a basic assumption of the contract.",
            "Yes, because the engineer breached the contract by disappointing the owner's expectations.",
            "Yes, because the engineer's duty to perform was personal and absolute."
        ],
        ans: 1,
        exp: "Rule: Under the doctrine of objective impracticability / impossibility (Restatement (Second) of Contracts § 261), when an individual contracts to render personal services requiring specific physical capability, the continued health and physical capacity of that person is a basic assumption on which the contract was made[cite: 4]. Serious physical incapacity arising without fault excuses the obligor from contractual performance and discharges the duty without damage liability (Option B)[cite: 4]. Option A is incorrect because an offer of substitute performance does not bind an obligee[cite: 4]. Option C is incorrect because impracticability provides a complete defense to breach[cite: 4]. Option D is incorrect because personal service duties are conditional on physical capacity, not absolute[cite: 4]."
    },
    {
        id: 12,
        topic: "Mixed",
        fp: "A law student rented a furnished apartment. His landlord began to solicit his advice about her legal affairs, but he refused to provide it. The landlord then demanded that he vacate the apartment immediately. The landlord also engaged in a pattern of harassment, calling the student at home every evening and entering his apartment without his consent during times when he was at school. During these unauthorized visits she removed the handles from the bathroom and kitchen sinks, but did not touch anything belonging to the student. The lease has a year to run, and the student is still living in the apartment. The student has sued the landlord for trespass to land.",
        q: "Is he likely to prevail?",
        opts: [
            "No, because he has no standing to sue for trespass.",
            "No, because the landlord caused no damage to his property.",
            "Yes, for compensatory damages only.",
            "Yes, for injunctive relief, compensatory damages, and punitive damages."
        ],
        ans: 3,
        exp: "Rule: Trespass to land is an intentional, physical invasion of real property in the lawful, exclusive possession of another[cite: 4]. A tenant in possession under an unexpired lease has exclusive possessory rights that are enforceable even against the landlord[cite: 4]. Unauthorized entries and disabling fixtures (removing sink handles) constitute intentional trespass, entitling the tenant to compensatory damages (loss of use), injunctive relief against ongoing intrusions, and punitive damages for malicious, repeated harassment (Option D)[cite: 4]. Option A is incorrect because lawful possessory interest confers full standing[cite: 4]. Option B is incorrect because nominal damages exist for trespass without physical injury, and property was damaged[cite: 4]. Option C is incorrect because repeated, willful intrusions warrant equitable and punitive remedies[cite: 4]."
    },
    {
        id: 13,
        topic: "Mixed",
        fp: "A seller and a buyer have dealt with each other in hundreds of separate grain contracts over the last five years. In performing each contract, the seller delivered the grain to the buyer and, upon delivery, the buyer signed an invoice that showed an agreed-upon price for that delivery. Each invoice was silent in regard to any discount from the price in exchange for prompt payment. The custom of the grain trade is to allow a 2 percent discount from the invoice price for payment within ten days of delivery. In all of their prior transactions and without objection from the seller, the buyer took 15 days to pay and deducted 5 percent from the invoice price. The same delivery procedure and invoice were used in the present contract as had been used previously. The present contract called for a single delivery of wheat at a price of $300,000. The seller delivered the wheat and the buyer then signed the invoice. On the third day after delivery, the buyer received the following note from the seller: 'Payment in full in accordance with signed invoice is due immediately. No discounts permitted.' s/ Seller.",
        q: "Which of the following statements concerning these facts is most accurate?",
        opts: [
            "The custom of the trade controls, and the buyer is entitled to take a 2 percent discount if he pays within ten days.",
            "The parties' course of dealing controls, and the buyer is entitled to take a 5 percent discount if he pays within 15 days.",
            "The seller's retraction of his prior waiver controls, and the buyer is entitled to no discount.",
            "The written contract controls, and the buyer is entitled to no discount because of the parol evidence rule."
        ],
        ans: 1,
        exp: "Rule: Under UCC § 1-303 and § 2-202, course of dealing, usage of trade, and course of performance are admissible to explain or supplement contract terms[cite: 4]. Where extrinsic interpretations conflict, the hierarchy of construction ranks course of dealing above general usage of trade because it reflects the specific mutual understanding established across extensive prior transactions between the immediate parties[cite: 4]. The established five-year course of dealing permitting a 5 percent discount within 15 days controls over general trade customs and silent invoices (Option B)[cite: 4]. Option A is incorrect because course of dealing takes precedence over usage of trade[cite: 4]. Option C is incorrect because an established course of dealing becomes an implied contractual term, not a mere executory waiver revocable mid-performance[cite: 4]. Option D is incorrect because the UCC parol evidence rule explicitly allows course of dealing[cite: 4]."
    },
    {
        id: 14,
        topic: "Mixed",
        fp: "A statute in the jurisdiction defines murder in the first degree as knowingly killing another person after deliberation. Deliberation is defined as 'cool reflection for any length of time no matter how brief.' Murder in the second degree is defined as 'all other murder at common law except felony-murder.' Felony-murder is murder in the third degree. Manslaughter is defined by the common law.\n\nAt 2 a.m., the defendant held up an all-night liquor store using an assault rifle. During the holdup, two police cars with flashing lights drove up in front of the store. In order to create a situation where the police would hesitate to come into the store (and thus give the defendant a chance to escape out the back) the defendant fired several rounds through the front window of the store. The defendant then ran out the back but upon discovering another police car there, surrendered quietly. One of the shots he fired while in the store struck and killed a burglar who was stealing items from a closed store across the street.",
        q: "The most serious degree of criminal homicide the defendant is guilty of is",
        opts: [
            "murder in the first degree.",
            "murder in the second degree.",
            "murder in the third degree.",
            "manslaughter."
        ],
        ans: 1,
        exp: "Rule: Firing high-powered rifle rounds through a glass window into a public street where people are present demonstrates a depraved heart (reckless indifference to an unjustifiably high risk to human life), establishing common law murder malice[cite: 4]. Under the statutory definitions given, 'all other murder at common law except felony-murder' constitutes murder in the second degree[cite: 4]. Because depraved-heart murder is a common law murder category ranking above third-degree felony-murder, the defendant is guilty of second-degree murder (Option B)[cite: 4]. Option A is incorrect because the defendant did not act with the premeditated, 'knowing' intent to kill required for first-degree murder under the statute[cite: 4]. Option C is incorrect because depraved-heart murder is second-degree murder, which is more serious than third-degree felony-murder[cite: 4]. Option D is incorrect because depraved-heart malice elevates the homicide above manslaughter[cite: 4]."
    },
    {
        id: 15,
        topic: "Mixed",
        fp: "A debtor owed a lender $1,500. The statute of limitations barred recovery on the claim. The debtor wrote to the lender, stating, 'I promise to pay you $500 if you will extinguish the debt.' The lender agreed.",
        q: "Is the debtor's promise to pay the lender $500 enforceable?",
        opts: [
            "No, because the debtor made no promise not to plead the statute of limitations as a defense.",
            "No, because there was no consideration for the debtor's promise.",
            "Yes, because the debtor's promise provided a benefit to the lender.",
            "Yes, because the debtor's promise to pay part of the barred antecedent debt is enforceable."
        ],
        ans: 3,
        exp: "Rule: Under the Restatement (Second) of Contracts § 82, a promise to pay all or part of an antecedent contractual or debt obligation that has become barred by the statute of limitations is binding without new consideration, provided it is in writing and signed by the debtor[cite: 4]. The promise is enforceable according to its new terms (up to $500) (Option D)[cite: 4]. Option A is incorrect because promising to pay revives the debt without an express waiver phrase[cite: 4]. Option B is incorrect because revived debts fall within a recognized exception to the consideration requirement[cite: 4]. Option C is incorrect because benefit alone without consideration doctrine does not explain enforceability[cite: 4]."
    },
    {
        id: 16,
        topic: "Mixed",
        fp: "In a civil action, the plaintiff sued a decedent's estate to recover damages for the injuries she suffered in a collision between her car and one driven by the decedent. At trial, the plaintiff introduced undisputed evidence that the decedent's car swerved across the median of the highway, where it collided with an oncoming car driven by the plaintiff. The decedent's estate introduced undisputed evidence that, prior to the car's crossing the median, the decedent suffered a fatal heart attack, which she had no reason to foresee, and that, prior to the heart attack, the decedent had been driving at a reasonable speed and in a reasonable manner. A statute makes it a traffic offense to cross the median of a highway.",
        q: "In this case, for whom should the court render judgment?",
        opts: [
            "The decedent's estate, because its evidence is undisputed.",
            "The decedent's estate, because the plaintiff has not established a prima facie case of liability.",
            "The plaintiff, because the accident was of a type that does not ordinarily happen in the absence of negligence on the actor's part.",
            "The plaintiff, because the decedent crossed the median in violation of the statute."
        ],
        ans: 0,
        exp: "Rule: An actor who experiences a sudden, unforeseeable physical incapacity or loss of consciousness (such as an unanticipated heart attack or seizure) is not negligent as a matter of law, because the subsequent movements are involuntary and occur without breach of duty[cite: 4]. Furthermore, statutory violation (negligence per se) is excused by sudden physical incapacity that the actor could not prevent[cite: 4]. Because the estate's evidence of a sudden, unforeseeable fatal heart attack is undisputed, judgment must be entered for the estate (Option A)[cite: 4]. Option B is incorrect because crossing the median initially established a prima facie inference, which was rebutted by undisputed evidence of incapacity[cite: 4]. Options C and D are incorrect because res ipsa loquitur and negligence per se are overcome by proof of sudden, unforeseeable physical incapacity[cite: 4]."
    },
    {
        id: 17,
        topic: "Mixed",
        fp: "A woman told a man to go into her friend's unlocked barn and retrieve an expensive black saddle that she said she had loaned to the friend. The man went to the friend's barn, opened the door, found a black saddle, and took it back to the woman's house. The friend had in fact not borrowed a saddle from the woman, and when the friend discovered her black saddle missing, she suspected that the woman was the thief. The friend used a screwdriver to break into the woman's house to find the saddle. Upon discovering the saddle on the woman's table, the friend took it back and called the police.\n\nThe jurisdiction follows the common law, except that burglary covers structures in addition to dwellings and the nighttime element has been eliminated.",
        q: "Which, if any, of these individuals is guilty of burglary?",
        opts: [
            "All of them.",
            "Only the friend.",
            "Only the man.",
            "Only the woman."
        ],
        ans: 3,
        exp: "Rule: Burglary requires breaking and entering a structure with the specific intent to commit a felony (larceny) therein[cite: 4]. The man had an honest, good-faith belief that he was retrieving borrowed property, negating felonious intent[cite: 4]. The friend entered under a bona fide claim of right to recover her own stolen property, which negates the intent to steal required for larceny and burglary[cite: 4]. The woman used the man as an innocent agent to commit a breaking and entry of the barn with the specific intent to steal the friend's saddle; an instigator who uses an innocent human agent to execute a crime is guilty as a principal (Option D)[cite: 4]. Options A, B, and C are incorrect because the man and friend lacked felonious intent[cite: 4]."
    },
    {
        id: 18,
        topic: "Mixed",
        fp: "An insurance company issued an insurance policy to a homeowner. The policy failed to contain certain coverage terms required by a state insurance statute. When the homeowner suffered a loss due to a theft that was within the policy's terms, the insurance company refused to pay, claiming that the contract was unenforceable because it violated the statute.",
        q: "Will the homeowner succeed in an action against the insurance company to recover for the loss?",
        opts: [
            "No, because the insurance policy is not a divisible contract.",
            "No, because the insurance policy violated the statute.",
            "Yes, because the homeowner belongs to the class of persons intended to be protected by the statute.",
            "Yes, because the insurance policy would be strictly construed against the insurance company as the drafter."
        ],
        ans: 2,
        exp: "Rule: When a contract violates a statutory regulatory scheme, the agreement is not void per se if the statute was enacted for the protection of a particular class of individuals (such as insurance policyholders or consumers)[cite: 4]. The protected party is not in pari delicto and may enforce the contract against the regulated commercial entity that committed the statutory infraction (Option C)[cite: 4]. Option A is incorrect because divisibility is irrelevant to consumer statutory enforcement[cite: 4]. Option B is incorrect because regulatory statutes protecting policyholders do not permit insurance companies to exploit their own violations to avoid coverage[cite: 4]. Option D is incorrect because contra proferentem resolves ambiguities, whereas statutory policyholder protection governs illegality defenses[cite: 4]."
    },
    {
        id: 19,
        topic: "Mixed",
        fp: "On a parcel of land immediately adjacent to a woman's 50-acre farm, a public school district built a large consolidated high school that included a 5,000-seat lighted athletic stadium. The woman had objected to the district's plans for the stadium and was particularly upset about nighttime athletic events that attracted large crowds and that, at times, resulted in significant noise and light intensity levels. On nights of athletic events, the woman and her family members wore earplugs and could not sleep or enjoy a quiet evening until after 10 p.m. In addition, light from the stadium on those nights was bright enough to allow reading a newspaper in the woman's yard.",
        q: "Which of the following doctrines would best support the woman's claim for damages?",
        opts: [
            "Constructive eviction",
            "Private nuisance",
            "Public nuisance",
            "Waste"
        ],
        ans: 1,
        exp: "Rule: A private nuisance is a non-trespassory, substantial, and unreasonable interference with the private use and enjoyment of real property[cite: 4]. Excessive stadium lighting illuminating a private yard and intense noise preventing sleep constitute an actionable private nuisance (Option B)[cite: 4]. Option A is incorrect because constructive eviction applies between landlords and tenants, not neighboring fee owners[cite: 4]. Option C is incorrect because private damages for unique residential enjoyment are redressed through private nuisance[cite: 4]. Option D is incorrect because waste is an action by a future interest holder against a present estate possessor[cite: 4]."
    },
    {
        id: 20,
        topic: "Mixed",
        fp: "On March 1, an excavator entered into a contract with a contractor to perform excavation work on a large project. The contract expressly required that the excavator begin work on June 1 to enable other subcontractors to install utilities. On May 15, the excavator requested a 30-day delay in the start date for the excavation work because he was seriously behind schedule on another project. When the contractor refused to grant the delay, the excavator stated that he would try to begin the work for the contractor on June 1.",
        q: "Does the contractor have valid legal grounds to cancel the contract with the excavator and hire a replacement?",
        opts: [
            "Yes, because the excavator committed an anticipatory repudiation of the contract by causing the contractor to feel insecure about the performance.",
            "Yes, because the excavator breached the implied covenant of good faith and fair dealing.",
            "No, because the excavator would be entitled to specific performance of the contract if he could begin by June 1.",
            "No, because the excavator did not state unequivocally that he would delay the beginning of his work."
        ],
        ans: 3,
        exp: "Rule: Anticipatory repudiation requires a clear, positive, and unequivocal statement or manifestation that the promisor will not or cannot perform contractual duties when due[cite: 4]. Expressions of doubt, requests for an extension, or stating that one will 'try' to begin on time do not constitute an anticipatory repudiation[cite: 4]. The contractor could demand adequate assurances, but lacked grounds to cancel immediately (Option D)[cite: 4]. Option A is incorrect because insecurity warrants demanding assurances, not immediate cancellation[cite: 4]. Option B is incorrect because requesting a schedule modification does not breach good faith[cite: 4]. Option C is incorrect because service contracts are not subject to specific performance[cite: 4]."
    },
    {
        id: 21,
        topic: "Mixed",
        fp: "A car dealer owed a bank $10,000, due on June 1. The car dealer subsequently sold an automobile to a buyer at a price of $10,000, payable at $1,000 per month beginning on June 1. The car dealer then asked the bank whether the bank would accept payments of $1,000 per month for ten months beginning June 1, without interest, in payment of the debt. The bank agreed to that arrangement and the car dealer then directed the buyer to make the payments to the bank. When the buyer tendered the first payment to the bank, the bank refused the payment, asserting that it would accept payment only from the car dealer. On June 2, the bank demanded that the car dealer pay the debt in full immediately. The car dealer refused to pay and the bank sued the car dealer to recover the $10,000.",
        q: "In this suit, which of the following arguments best supports the bank's claim for immediate payment?",
        opts: [
            "The agreement to extend the time for payment was not in writing.",
            "The car dealer could not delegate its duty to pay to the buyer.",
            "The car dealer gave no consideration for the agreement to extend the time of payment.",
            "The car dealer's conduct was an attempted novation that the bank could reject."
        ],
        ans: 2,
        exp: "Rule: Under the pre-existing duty rule, a debtor's promise to pay an already liquidated and matured debt over time without interest or additional consideration does not support an enforceable modification by the creditor[cite: 4]. Because the dealer gave no new consideration in exchange for the bank's agreement to accept installment payments, the bank's promise to extend time was gratuitous and unenforceable, entitling the bank to demand immediate payment (Option C)[cite: 4]. Option A is incorrect because an agreement performable within ten months does not violate the one-year Statute of Frauds[cite: 4]. Option B is incorrect because routine debt payment duties may be performed through third parties[cite: 4]. Option D is incorrect because the dealer remained liable on the debt; no novation was proposed[cite: 4]."
    },
    {
        id: 22,
        topic: "Mixed",
        fp: "A buyer agreed in writing to purchase a car from a seller for $15,000, with the price to be paid on a specified date at the seller's showroom. The contract provided, and both parties intended, that time was of the essence. Before the specified date, however, the seller sold the car to a third party for $20,000. On the specified date, the buyer arrived at the showroom but brought only $10,000. When the seller did not appear at the showroom, the buyer called the seller and asked whether the seller would accept $10,000 for the car immediately and the remaining $5,000 in six weeks. The seller told the buyer that he had sold the car to the third party.",
        q: "If the buyer sues the seller for breach of contract, will the buyer be likely to prevail?",
        opts: [
            "No, because the contractual obligations were discharged on the ground of impossibility.",
            "No, because the buyer was not prepared to tender her performance on the specified date.",
            "Yes, because the buyer's breach was not material.",
            "Yes, because the seller anticipatorily repudiated the contract when he sold the car to the third party."
        ],
        ans: 1,
        exp: "Rule: In an action for damages based on anticipatory repudiation, the non-repudiating party must demonstrate that, had the repudiation not occurred, they were ready, willing, and able to perform their contractual obligations[cite: 4]. Because the buyer brought only $10,000 on a time-of-the-essence contract requiring $15,000, the buyer was not ready, willing, and able to perform, barring recovery of damages (Option B)[cite: 4]. Option A is incorrect because selling to a third party is voluntary, not objective impossibility[cite: 4]. Option C is incorrect because bringing two-thirds of the price on a time-is-of-the-essence contract is a material shortfall[cite: 4]. Option D is incorrect because establishing anticipatory repudiation still requires proof that the plaintiff was able to tender performance[cite: 4]."
    },
    {
        id: 23,
        topic: "Mixed",
        fp: "An asbestos insulation installer, who worked from 1955 to 1965, contracted asbestosis, a serious lung disorder, as a result of inhaling airborne asbestos particles on the job. The asbestos was manufactured and sold to the installer's employer by an asbestos company. Because neither the asbestos company nor anyone else discovered the risk to asbestos installers until 1966, the asbestos company did not provide any warnings of the risks to installers until after that date. The insulation installer brought an action against the asbestos company based on strict liability in tort for failure to warn. The case is to be tried before a jury. The jurisdiction has not adopted a comparative fault rule in strict liability cases.",
        q: "In this action, an issue that is relevant to the case and is a question for the court to decide as a matter of law, rather than for the jury to decide as a question of fact, is whether",
        opts: [
            "a satisfactory, safer, alternative insulation material exists under today's technology.",
            "the defendant should be held to the standard of a prudent manufacturer who knew of the risks, regardless of whether the risks were reasonably discoverable before 1966.",
            "the defendant should reasonably have known of the risks of asbestos insulation materials before 1966, even though no one else had discovered the risks.",
            "the asbestos insulation materials to which the plaintiff was exposed were inherently dangerous."
        ],
        ans: 1,
        exp: "Rule: The legal standard governing product design and failure to warn—specifically whether the jurisdiction adheres to a 'state-of-the-art' standard (holding a manufacturer to risks discoverable at the time) or applies strict liability imputing knowledge of all risks regardless of foreseeability—is a pure question of law for the judge to determine (Option B)[cite: 4]. Options A, C, and D are incorrect because factual foreseeability, existence of feasible alternatives, and dangerousness in fact are questions of fact for the jury[cite: 4]."
    },
    {
        id: 24,
        topic: "Mixed",
        fp: "A mother, whose adult son was a law school graduate, contracted with a tutor to give the son a bar exam preparation course. 'If my son passes the bar exam,' the mother explained to the tutor, 'he has been promised a job with a law firm that will pay $55,000 a year.' The tutor agreed to do the work for $5,000, although the going rate is $6,000. Before the instruction was to begin, the tutor repudiated the contract. Although the mother or the son reasonably could have employed, for $6,000, an equally qualified instructor to replace the tutor, neither did so. The son failed the bar exam and the law firm refused to employ him. It can be shown that had the son received the instruction, he would have passed the bar exam.",
        q: "If the mother and the son join as parties plaintiff and sue the tutor for breach of contract, how much, if anything, are they entitled to recover?",
        opts: [
            "$1,000, because all other damages could have been avoided by employing another equally qualified instructor.",
            "$55,000, because damages of that amount were within the contemplation of the parties at the time they contracted.",
            "Nominal damages only, because the mother was not injured by the breach and the tutor made no promise to the son.",
            "Nothing, because neither the mother nor the son took steps to avoid the consequences of the tutor's breach."
        ],
        ans: 0,
        exp: "Rule: Under the doctrine of avoidable consequences (duty to mitigate), an injured party cannot recover consequential damages that could have been avoided with reasonable effort and without undue risk[cite: 4]. The direct expectation damages equal the cover cost ($6,000) minus the contract price ($5,000), which is $1,000[cite: 4]. Because hiring an equally qualified tutor for $6,000 would have completely avoided the lost salary, failure to mitigate bars the $55,000 claim, limiting recovery to $1,000 (Option A)[cite: 4]. Option B is incorrect because avoidable damages are non-recoverable[cite: 4]. Option C is incorrect because third-party beneficiaries and promisees can recover actual cover differentials[cite: 4]. Option D is incorrect because failure to mitigate limits, but does not extinguish, direct damages[cite: 4]."
    },
    {
        id: 25,
        topic: "Mixed",
        fp: "During an altercation between two men at a company picnic, the victim suffered a knife wound in his abdomen and the defendant was charged with assault and attempted murder. At his trial, the defendant seeks to offer evidence that he had been drinking at the picnic and was highly intoxicated at the time of the altercation.",
        q: "In a jurisdiction that follows the common-law rules concerning admissibility of evidence of intoxication, the evidence of the defendant's intoxication should be",
        opts: [
            "admitted without limitation.",
            "admitted subject to an instruction that it pertains only to the attempted murder charge.",
            "admitted subject to an instruction that it pertains only to the assault charge.",
            "excluded altogether."
        ],
        ans: 0,
        exp: "Rule: At common law, voluntary intoxication is admissible to negate the specific intent required for specific intent crimes[cite: 4]. Attempted murder is a specific intent crime requiring specific intent to kill[cite: 4]. Furthermore, common law assault encompasses two forms: attempted battery (a specific intent crime) and intentional creation of reasonable apprehension of immediate bodily harm (traditionally requiring specific intent to cause apprehension)[cite: 4]. Because both charged offenses require specific intent, intoxication evidence is admissible as to both crimes without limitation (Option A)[cite: 4]. Options B and C are incorrect because limiting the instruction to only one charge misapplies specific intent principles[cite: 4]. Option D is incorrect because voluntary intoxication is admissible to negate specific intent[cite: 4]."
    }
];
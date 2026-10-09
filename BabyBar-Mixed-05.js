const examData = [
    {
        id: 1,
        topic: "Mixed",
        fp: "A corporate subsidiary of a conglomerate contracted in writing with the plaintiff, an individual who owned an auto dealership, to buy the dealership at a specified price. At the time this contract was executed, the subsidiary's contracting officer said to the plaintiff, 'Of course, our commitment to buy is conditioned on our obtaining approval of the contract from the conglomerate of which we are a subsidiary.' The plaintiff replied, 'Fine. No problem.'\n\nLater, the plaintiff was willing and ready to consummate the sale to the subsidiary, but the latter refused to perform on the ground (which was true) that the conglomerate had firmly refused to approve the contract. If the plaintiff sues the subsidiary for breach of contract and seeks to exclude any evidence of the oral condition requiring the conglomerate's approval,",
        q: "The court will probably",
        opts: [
            "admit the evidence as proof of a collateral agreement.",
            "admit the evidence as proof of a condition to the existence of an enforceable obligation, and therefore not within the scope of the parol evidence rule.",
            "exclude the evidence on the basis of a finding that the parties' written agreement was a complete integration of their contract.",
            "exclude the evidence as contradicting the terms of the parties' written agreement, whether or not the writing was a complete integration of the contract."
        ],
        ans: 1,
        exp: "Rule: Under the parol evidence rule (Restatement (Second) of Contracts § 217), extrinsic oral evidence is admissible to show that the effectiveness of the entire written agreement was subject to an oral condition precedent (a condition to the legal effectiveness of the contract itself), provided the oral condition does not directly contradict an express term of the writing. Because corporate parent approval was an agreed oral condition precedent to the existence of an enforceable obligation, the evidence is admissible outside the bar of the parol evidence rule (Option B). Option A is incorrect because a condition to contract effectiveness is not a separate, collateral contract. Options C and D are incorrect because integration does not bar evidence showing an oral condition precedent to the contract's very existence."
    },
    {
        id: 2,
        topic: "Mixed",
        fp: "An accountant and a bookkeeper, as part of a contract dissolving their accounting business, agreed that each would contribute $100,000 to fund an annuity for a clerk who was a longtime employee of the business. The clerk's position would be terminated due to the dissolution, and he did not have a retirement plan. The accountant and the bookkeeper informed the clerk of their plan to fund an annuity for him. The clerk, confident about his financial future because of the promised annuity, purchased a retirement home. The accountant later contributed his $100,000 to fund the annuity, but the bookkeeper stated that he could afford to contribute only $50,000. The accountant agreed that the bookkeeper should contribute only $50,000.",
        q: "Does the clerk have a valid basis for an action against the bookkeeper for the unpaid $50,000?",
        opts: [
            "No, because the clerk was bound by the modification of the agreement made by the accountant and the bookkeeper.",
            "No, because the clerk was only a donee beneficiary of the agreement between the accountant and the bookkeeper, and had no vested rights.",
            "Yes, because the clerk's reliance on the promised retirement fund prevented the parties from changing the terms.",
            "Yes, because the promises to establish the fund were made binding by consideration from the clerk's many years of employment."
        ],
        ans: 2,
        exp: "Rule: Under the Restatement (Second) of Contracts § 311, the rights of an intended third-party beneficiary vest when the beneficiary (1) manifests assent to the promise at the request of the parties, (2) brings suit to enforce the promise, or (3) materially changes position in justifiable reliance on the promise. Once the third-party beneficiary's rights vest, the original contracting parties lose the power to discharge or modify the promise without the beneficiary's consent. Because the clerk purchased a retirement home in material reliance on the promised annuity before any modification occurred, his rights had vested, rendering the subsequent reduction unenforceable against him (Option C). Option A is incorrect because vesting terminates the promisor and promisee's power to modify. Option B is incorrect because donee beneficiaries obtain fully vested, unalterable rights upon material detrimental reliance. Option D is incorrect because past employment services do not constitute consideration."
    },
    {
        id: 3,
        topic: "Mixed",
        fp: "Under the Federal Tort Claims Act, with certain exceptions not relevant here, the federal government is liable only for negligence. A federally owned and operated nuclear reactor emitted substantial quantities of radioactive matter that settled on a nearby dairy farm, killing the dairy herd and contaminating the soil. At the trial of an action brought against the federal government by the farm's owner, the trier of fact found that the nuclear plant had a sound design, but that a valve made by the Acme Engineering Company had malfunctioned and allowed the radioactive matter to escape, that Acme Engineering Company is universally regarded as a quality manufacturer of components for nuclear plants, and that there was no way the federal government could have anticipated or prevented the emission of the radioactive matter.\n\nIf there is no other applicable statute, for whom should the trial judge enter judgment?",
        q: "For whom should the trial judge enter judgment?",
        opts: [
            "The plaintiff, on the ground that the doctrine of res ipsa loquitur applies.",
            "The plaintiff, on the ground that one who allows dangerous material to escape to the property of another is liable for the damage done.",
            "The defendant, on the ground that a case under the Federal Tort Claims Act has not been proved.",
            "The defendant, on the ground that the Acme Engineering Company is the proximate cause of the owner's damage."
        ],
        ans: 2,
        exp: "Rule: Under the Federal Tort Claims Act (FTCA), the United States has waived sovereign immunity exclusively for injuries caused by the 'negligent or wrongful act or omission' of federal employees (28 U.S.C. § 1346(b)). The Supreme Court has held that the FTCA does not authorize recovery based on strict or absolute liability for ultra-hazardous/abnormally dangerous activities (Laird v. Nelms). Because the express findings established that the government acted with reasonable care and could not have anticipated or prevented the valve malfunction, the plaintiff failed to establish actionable negligence under the FTCA (Option C). Option A is incorrect because res ipsa loquitur is rebutted where undisputed findings show the government exercised full due care and used quality parts. Option B is incorrect because strict liability under Rylands v. Fletcher cannot be maintained against the federal government under the FTCA. Option D is incorrect because the threshold bar is the absence of proven negligence under the FTCA."
    },
    {
        id: 4,
        topic: "Mixed",
        fp: "A man who had become very drunk left a bar and started to walk home. Another patron of the bar, who had observed the man's condition, followed him. The patron saw the man stumble and fall to the ground near an alley. The patron then began to pull out a gun but saw that the man had passed out asleep in the gutter. The patron reached into the man's pocket, grabbed his wallet, and started to walk away. When the patron heard police officers approaching, he dropped the wallet and ran off.\n\nThe crimes below are listed in descending order of seriousness.",
        q: "What is the most serious crime for which the patron properly could be convicted?",
        opts: [
            "Robbery.",
            "Larceny.",
            "Attempted robbery.",
            "Attempted larceny."
        ],
        ans: 1,
        exp: "Rule: Robbery is larceny committed by taking property from the person or presence of another by means of force or fear (intimidation). Taking property from an unconscious, sleeping, or intoxicated person without violence or threat is not robbery because force was not used to overcome resistance, and an unconscious victim cannot experience apprehension or fear. However, taking the wallet from the victim's pocket and starting to walk away constituted a completed trespassory taking and asportation (carrying away) with the intent to permanently deprive, establishing completed larceny; abandoning the wallet upon police arrival does not erase a completed larceny (Option B). Option A is incorrect because the theft lacked force or fear. Option C is incorrect because drawing a gun unobserved by an already unconscious person does not constitute attempted robbery where the patron abandoned any coercive intent. Option D is incorrect because the larceny was fully completed, not merely attempted."
    },
    {
        id: 5,
        topic: "Mixed",
        fp: "A landowner entered into a single contract with a builder to have three different structures built on separate pieces of property owned by the landowner. Each structure was distinct from the other two and the parties agreed on a specific price for each. After completing the first structure in accordance with the terms of the contract, the builder demanded payment of the specified price for that structure. At the same time, the builder told the landowner that the builder was 'tired of the construction business' and would not even begin the other two structures. The landowner refused to pay anything to the builder.",
        q: "Is the builder likely to prevail in a suit for the agreed price of the first structure?",
        opts: [
            "No, because substantial performance is a constructive condition to the landowner's duty to pay at the contract rate.",
            "No, because the builder's cessation of performance without legal excuse is a willful breach of the contract.",
            "Yes, because the contract is divisible, and the landowner will be required to bring a separate claim for the builder's failure to complete the other two structures.",
            "Yes, because the contract is divisible, but the landowner will be able to deduct any recoverable damages caused by the builder's failure to complete the contract."
        ],
        ans: 3,
        exp: "Rule: A contract is divisible if (1) the performance of each party is divided into two or more parts, (2) the number of parts due from each party is the same, and (3) the performance of each part by one party is the agreed exchange for a corresponding part by the other party (Restatement (Second) of Contracts § 240). Here, three distinct structures were apportioned to three specific, separate prices. In a divisible contract, a party who fully performs one divisible segment is entitled to recover the agreed contract price for that segment, subject to an offset/deduction for any damages caused by their breach of the remaining unperformed portions (Option D). Option A is incorrect because divisibility allows recovery at the contract rate for fully completed independent units. Option B is incorrect because willful breach of remaining portions does not forfeit the contract right to compensation for fully executed divisible units. Option C is incorrect because the non-breaching party can assert damages as an immediate offset/counterclaim in the same action."
    },
    {
        id: 6,
        topic: "Mixed",
        fp: "An engineering firm submitted a bid to a municipality for the construction of a new wastewater treatment plant. The firm's bid included a subcontractor's bid to complete the electrical work on the plant for $100,000.\n\nThe municipality awarded the construction contract to the firm. Later that day, before the firm told the subcontractor of the award, the subcontractor told the firm that it was withdrawing its bid because it had recently undertaken a new project that would absorb all its capacity for the next 18 months. The firm nevertheless accepted the subcontractor's bid and demanded that it perform the electrical work on the plant, but the subcontractor refused. The firm had to hire another subcontractor to perform the electrical work, at a cost of $115,000. The firm completed the construction of the plant at a profit.",
        q: "Which of the following statements correctly describes the firm's legal rights, if any, against the first subcontractor?",
        opts: [
            "The firm is entitled to recover nominal damages only, because it completed the construction at a profit.",
            "The firm is entitled to recover reliance damages, because it detrimentally relied on the first subcontractor's bid when it submitted its own bid to the municipality.",
            "The firm is entitled to recover expectation damages, because the first subcontractor's bid was irrevocable for a reasonable time and the firm timely accepted it.",
            "The firm has no rights against the first subcontractor, because the first subcontractor was free to revoke its bid at any time before the firm accepted that bid."
        ],
        ans: 2,
        exp: "Rule: Under the doctrine of promissory estoppel in construction bidding (Drennan v. Star Paving Co.; Restatement (Second) of Contracts § 87(2)), a subcontractor's bid constitutes an irrevocable offer for a reasonable time because the general contractor foreseeably and reasonably relies on the bid in submitting its prime bid to the awarding authority. Once the general contractor is awarded the contract, it may accept the subcontractor's offer, creating an enforceable contract entitled to expectation damages—measured here by the cost of cover minus the contract price ($115,000 - $100,000 = $15,000) (Option C). Option A is incorrect because overall prime project profit does not deprive the general contractor of expectation damages for excess cover costs on the subcontract. Option B is incorrect because promissory estoppel makes the bid irrevocable, and upon timely acceptance, the general contractor recovers standard contract expectation damages. Option D is incorrect because promissory estoppel limits the subcontractor's power to revoke prior to award."
    },
    {
        id: 7,
        topic: "Mixed",
        fp: "The vintner of a large vineyard offers balloon rides to visitors who wish to tour the grounds from the air. During one of the rides, the vintner was forced to make a crash landing on his own property. Without the vintner's knowledge or consent, a trespasser had entered the vineyard to camp for a couple of days. The trespasser was injured when he was hit by the basket of the descending balloon.",
        q: "If the trespasser sues the vintner to recover damages for his injuries, will the trespasser prevail?",
        opts: [
            "No, unless the crash landing was made necessary by negligence on the vintner's part.",
            "No, unless the vintner could have prevented the injury to the trespasser after becoming aware of the trespasser's presence.",
            "Yes, because even a trespasser may recover for injuries caused by an abnormally dangerous activity.",
            "Yes, if the accident occurred at a place which the vintner knew was frequented by intruders."
        ],
        ans: 1,
        exp: "Rule: Under premises liability and general tort law, a landowner owes no duty of care to an undiscovered trespasser regarding active operations or conditions of the land, except to refrain from willful or wanton conduct. Once a landowner actually discovers a trespasser (or if the trespasser is an anticipated/known trespasser in a limited, known area), the landowner owes a duty of ordinary, reasonable care under the circumstances to avoid injuring the trespasser through active operations. Because the camper was an unknown, undiscovered trespasser on private property, the vintner owed no operational duty of care unless the vintner discovered the trespasser's presence in time to avert the collision (last clear chance/discovered trespasser doctrine) (Option B). Option A is incorrect because ordinary antecedent negligence during the balloon flight does not establish a breach of duty owed to an undiscovered trespasser. Option C is incorrect because operating a hot air balloon is not an abnormally dangerous activity imposing strict liability. Option D is incorrect because generalized intrusion does not convert an undiscovered camper into a known trespasser at that specific touchdown site."
    },
    {
        id: 8,
        topic: "Mixed",
        fp: "Nine gang members were indicted for the murder of a tenth gang member who had become an informant. The gang leader pleaded guilty. At the trial of the other eight, the state's evidence showed the following: The gang leader announced a party to celebrate the recent release of a gang member from jail. But the party was not what it seemed. The gang leader had learned that the released gang member had earned his freedom by informing the authorities about the gang's criminal activities. The gang leader decided to use the party to let the other gang members see what happened to a snitch. He told no one about his plan. At the party, after all present had consumed large amounts of liquor, the gang leader announced that the released gang member was an informant and stabbed him with a knife in front of the others. The eight other gang members watched and did nothing while the informant slowly bled to death. The jury found the eight gang members guilty of murder and they appealed.",
        q: "Should the appellate court uphold the convictions?",
        opts: [
            "No, because mere presence at the scene of a crime is insufficient to make one an accomplice.",
            "No, because murder is a specific intent crime, and there is insufficient evidence to show that they intended to kill.",
            "Yes, because the gang members made no effort to save the informant after he had been stabbed.",
            "Yes, because voluntary intoxication does not negate criminal responsibility."
        ],
        ans: 0,
        exp: "Rule: To be convicted as an accomplice, a defendant must have the specific intent to promote or facilitate the commission of the crime, and must intentionally aid, abet, encourage, or counsel the principal in the planning or execution of the offense. Mere presence at the scene of a crime, even with knowledge that a crime is occurring or coupled with silent approval, is legally insufficient to establish accomplice liability. Because the leader planned the attack entirely on his own and the eight members merely watched without active encouragement or assistance, they are not accomplices to murder (Option A). Option B is incorrect because common law murder is a malice crime, not a specific intent crime. Option C is incorrect because bystanders (including gang acquaintances) owe no legal duty to rescue or render aid to a crime victim absent a recognized special legal relationship. Option D is incorrect because absence of an actus reus (no aiding or abetting) controls over voluntary intoxication."
    },
    {
        id: 9,
        topic: "Mixed",
        fp: "A recently established law school constructed its building in a quiet residential neighborhood. The law school had obtained all of the necessary municipal permits for the construction of the building, which included a large clock tower whose clock chimed every hour. The chimes disturbed only one homeowner in the neighborhood, who had purchased her house prior to the construction of the building. The homeowner was abnormally sensitive to ringing sounds, such as bells and sirens, and found the chimes to be extremely annoying.",
        q: "In a nuisance action by the homeowner against the law school, will the homeowner prevail?",
        opts: [
            "Yes, because the chimes interfere with the homeowner's use and enjoyment of her property.",
            "Yes, because the homeowner purchased her house prior to the construction of the building.",
            "No, because the chimes do not disturb the other residents of the neighborhood.",
            "No, because the law school had the requisite municipal permits to erect the clock tower."
        ],
        ans: 2,
        exp: "Rule: Private nuisance requires a substantial and unreasonable interference with the use and enjoyment of land. 'Substantial' interference is evaluated under an objective standard: the condition must be offensive, annoying, or intolerable to an ordinary, reasonable person in the community of normal sensitivities. If an interference causes discomfort solely because of the plaintiff's unique, idiosyncratic, or abnormal sensitivity (and would not disturb an ordinary person in the neighborhood), it does not constitute an actionable nuisance (Option C). Option A is incorrect because subjective interference alone without objective unreasonableness to an ordinary person fails to establish nuisance. Option B is incorrect because 'coming to the nuisance' or prior occupancy does not permit an abnormally sensitive plaintiff to prevail where no objective nuisance exists. Option D is incorrect because municipal building permits do not immunize an entity from private nuisance liability."
    },
    {
        id: 10,
        topic: "Mixed",
        fp: "On March 1, a mechanic contracted to repair a textile manufacturer's knitting machine and to complete the job by March 6. On March 2, the manufacturer contracted to produce and deliver on March 15 specified cloth to a clothing designer. The manufacturer knew that it would have to use the machine then under repair to perform this contract. Because the designer's order was for a rush job, the designer and the manufacturer included in their contract a liquidated damages clause, providing that the manufacturer would pay $5,000 for each day's delay in delivery after March 15.\n\nThe mechanic was inexcusably five days late in repairing the machine, and, as a result, the manufacturer was five days late in delivering the cloth to the designer. The manufacturer paid $25,000 to the designer as liquidated damages and now sues the mechanic for $25,000. Both the mechanic and the manufacturer knew when making their contract on March 1 that under ordinary circumstances the manufacturer would sustain little or no damages of any kind as a result of a five-day delay in the machine repair.",
        q: "Assuming that the $5,000 liquidated damages clause in the designer-manufacturer contract is valid, which of the following arguments will serve as the mechanic's best defense to the manufacturer's action?",
        opts: [
            "Time was not of the essence in the mechanic-manufacturer contract.",
            "The mechanic had no reason to foresee on March 1 that the designer would suffer consequential damages in the amount of $25,000.",
            "By entering into the contract with the designer while knowing that its knitting machine was being repaired, the manufacturer assumed the risk of any delay loss to the designer.",
            "In all probability, the liquidated damages paid by the manufacturer to the designer are not the same amount as the actual damages sustained by the designer in consequence of the manufacturer's late delivery of the cloth."
        ],
        ans: 1,
        exp: "Rule: Under the rule of Hadley v. Baxendale and Restatement (Second) of Contracts § 351, consequential damages are recoverable only if they were reasonably foreseeable to the breaching party at the time the contract was made. If special circumstances cause unusual losses (such as extraordinary third-party liquidated damages penalties), the defendant is not liable for those losses unless notified of the special circumstances at contract formation. Because the mechanic had no reason to foresee on March 1 that a five-day delay would trigger a $25,000 third-party liability (which was executed a day later), the consequential damages were unforeseeable (Option B). Option A is incorrect because a delay can breach even if time is not strictly of the essence. Option C is incorrect because entering into commercial business while awaiting repairs is standard practice and not legal assumption of risk. Option D is incorrect because the designer's liquidated damages clause was expressly stipulated to be valid."
    },
    {
        id: 11,
        topic: "Mixed",
        fp: "The defendant decided to kill his boss, the CEO of the company, after she told the defendant that he would be fired if his work did not improve. The defendant knew the CEO was scheduled to go on a business trip on Monday morning. On Sunday morning, the defendant went to the company parking garage and put a bomb in the company car that the CEO usually drove. The bomb was wired to go off when the car engine started. The defendant then left town. At 5 a.m. Monday, the defendant, after driving all night, was overcome with remorse and had a change of heart. He called the security officer on duty at the company and told him about the bomb. The security officer said he would take care of the matter. An hour later, the officer put a note on the CEO's desk telling her of the message. He then went to the garage, looked at the car but could not see any signs of a bomb. He printed a sign saying 'DO NOT USE THIS CAR,' put it on the windshield, and went to call the police. Before the police arrived, a vice president of the same company got into the car and started the engine. The bomb went off, killing her.\n\nThe jurisdiction defines murder in the first degree as any homicide committed with premeditation and deliberation or any murder in the commission of a common-law felony. Second-degree murder is defined as all other murder at common law. Manslaughter is defined by the common law.",
        q: "The defendant is guilty of",
        opts: [
            "murder in the first degree, because, with premeditation and deliberation, he killed whoever would start the car.",
            "murder in the second degree, because he had no intention of killing the vice president.",
            "manslaughter, because at the time of the explosion, he had no intent to kill, and the death of the vice president was in part the fault of the security officer.",
            "only attempted murder of the CEO, because the death of the vice president was the result of the security officer's negligence."
        ],
        ans: 0,
        exp: "Rule: When an actor deliberately plants a bomb in a vehicle with premeditation and deliberation intending to kill the expected driver, and an unexpected victim starts the engine and is killed, the actor is guilty of first-degree murder under transferred intent or universal malice/premeditation (Option A). The doctrine of transferred intent applies the premeditated intent to kill to the actual deceased victim. Furthermore, voluntary abandonment is not a defense to homicide once the lethal instrumentality has been set in motion and causes death; ineffective attempts to defuse or warn do not sever the direct proximate causal chain. Option B is incorrect because transferred intent elevates the homicide to first-degree murder. Option C is incorrect because a planted lethal bomb demonstrates express premeditated malice rather than manslaughter. Option D is incorrect because the security guard's ordinary negligent failure to neutralize the bomb is a foreseeable intervening force that does not supersede the bomber's proximate causation."
    },
    {
        id: 12,
        topic: "Mixed",
        fp: "A manufacturing plant located near a busy highway uses and stores highly volatile explosives. The owner of the plant has imposed strict safety measures to prevent an explosion at the plant. During an unusually heavy windstorm, a large tile was blown off the roof of the plant and crashed into the windshield of a passing car, damaging it. The driver of the car brought a strict liability action against the owner of the plant to recover for the damage to the car's windshield.",
        q: "Is the driver likely to prevail?",
        opts: [
            "No, because the damage to the windshield did not result from the abnormally dangerous aspect of the plant's activity.",
            "No, because the severity of the windstorm was unusual.",
            "Yes, because the plant's activity was abnormally dangerous.",
            "Yes, because the plant's location near a busy highway was abnormally dangerous."
        ],
        ans: 0,
        exp: "Rule: Strict liability for an abnormally dangerous activity extends only to the types of risks and harms that made the activity abnormally dangerous in the first place (Foster v. Preston Mill Co.; Restatement (Second) of Torts § 519(2)). Storing volatile explosives imposes strict liability for blast, concussion, or fire damages resulting from an explosion, but does not impose strict liability for ordinary premises hazards such as a dislodged roof tile blown by wind, which sounds purely in negligence (Option A). Option B is incorrect because the threshold defect is the lack of connection to the explosive hazard, not act of God defenses. Options C and D are incorrect because strict liability is limited to harms arising from the specific ultra-hazardous risk (explosion)."
    },
    {
        id: 13,
        topic: "Mixed",
        fp: "On January 5, a creditor lent $1,000 to a debtor under a contract calling for the debtor to repay the loan at the rate of $100 per month payable on the first day of each month. On February 1, at the debtor's request, the creditor agreed to permit payment on February 5. On March 1, the debtor requested a similar time extension and the creditor replied, 'Don't bother me each month. Just change the date of payment to the fifth of the month. But you must now make the payments by cashier's check.' The debtor said, 'Okay,' and made payments on March 5 and April 5. On April 6, the creditor sold the loan contract to a bank, but did not tell the bank about the agreement permitting payments on the fifth of the month. On April 6, the bank wrote to the debtor: 'Your debt to [the creditor] has been assigned to us. We hereby inform you that all payments must be made on the first day of the month.'",
        q: "Can the debtor justifiably insist that the payment date for the rest of the installments is the fifth of each month?",
        opts: [
            "No, because a contract modification is not binding on an assignee who had no knowledge of the modification.",
            "No, because although the creditor waived the condition of payment on the first of the month, the bank reinstated it.",
            "Yes, because although the creditor waived the condition of payment on the first of the month, the creditor could not assign to the bank his right to reinstate that condition.",
            "Yes, because the creditor could assign to the bank only those rights the creditor had in the contract at the time of the assignment."
        ],
        ans: 3,
        exp: "Rule: An assignee of contract rights stands in the shoes of the assignor and takes the contract subject to all terms, modifications, and defenses that accrued prior to notice of the assignment. When the debtor and creditor agreed to move the payment date to the fifth in exchange for paying by cashier's check (a legal detriment supplying valid consideration), they executed a binding contract modification, not a mere revocable waiver. The creditor could assign only the contract as modified; thus, the assignee bank is bound by the fifth-of-the-month payment date (Option D). Option A is incorrect because an assignee takes subject to existing modifications regardless of lack of knowledge. Option B is incorrect because a permanent modification supported by consideration cannot be unilaterally revoked or 'reinstated'. Option C is incorrect because the agreement was a binding modification, not a bare waiver."
    },
    {
        id: 14,
        topic: "Mixed",
        fp: "A rancher and his neighbor were involved in a boundary dispute. In order to resolve their differences, each drove his truck to an open pasture area on his land where the two properties were separated by a fence. The rancher was accompanied by four friends, and the neighbor was alone.\n\nThe neighbor got out of his truck and walked toward the fence. The rancher got out but simply stood by his truck. When the neighbor came over the fence, the rancher shot him, inflicting serious injury.\n\nIn a battery action brought by the neighbor against the rancher, the rancher testified that he actually thought his neighbor was armed, although he could point to nothing that would have reasonably justified this belief.",
        q: "Is the neighbor likely to prevail?",
        opts: [
            "No, because the rancher was standing on his own property and had no obligation to retreat.",
            "No, because the rancher suspected that the neighbor was armed.",
            "Yes, because deadly force is never appropriate in a property dispute.",
            "Yes, because it was unreasonable for the rancher to consider the use of a gun necessary for self-defense."
        ],
        ans: 3,
        exp: "Rule: Self-defense privileges the use of deadly force only if the defendant reasonably believes that they are in imminent danger of death or serious bodily harm. A purely subjective, unreasonable belief does not justify the use of deadly force. Because the rancher had no objective, reasonable basis to believe the unarmed neighbor was armed or posed a lethal threat, the shooting was unreasonable as a matter of law, rendering the rancher liable for battery (Option D). Option A is incorrect because lack of a duty to retreat does not justify using unreasonable deadly force against a non-deadly intruder. Option B is incorrect because an unreasonable subjective suspicion is legally insufficient. Option C is incorrect because deadly force can be used if an intruder reasonably threatens imminent death, though here the belief was factually unreasonable."
    },
    {
        id: 15,
        topic: "Mixed",
        fp: "A four-year-old child sustained serious injuries when a playmate pushed him from between two parked cars into the street, where he was struck by a car. The child, by his representative, sued the driver of the car, the playmate's parents, and his own parents. At trial, the child's total injuries were determined to be $100,000. The playmate's parents were determined to be 20 percent at fault because they had failed to adequately supervise her. The driver was found to be 50 percent at fault. The child's own parents were determined to be 30 percent at fault for failure to adequately supervise him. The court has adopted the pure comparative negligence doctrine, with joint and several liability, in place of the common-law rules relating to plaintiff's fault. In addition, the common-law doctrines relating to intra-family liability have been abrogated.",
        q: "How much, if anything, is the child's representative entitled to recover from the driver?",
        opts: [
            "$30,000",
            "$50,000",
            "$100,000",
            "$0"
        ],
        ans: 2,
        exp: "Rule: Under pure comparative negligence, a plaintiff's recovery is reduced only by the plaintiff's own percentage of fault. A four-year-old child is legally incapable of contributory negligence; furthermore, parental negligence is not imputed to a minor child to reduce the child's recovery against third-party tortfeasors. Because the child had 0% fault, the child is entitled to 100% of the damages ($100,000). Under joint and several liability, the plaintiff can recover the full $100,000 judgment from any single liable defendant (here, the driver), leaving that defendant to seek contribution from the other at-fault tortfeasors based on proportionate fault (Option C). Option A is incorrect because it reflects the parents' percentage rather than the child's recovery. Option B is incorrect because joint and several liability permits collecting the full judgment from a concurrent tortfeasor, not merely their apportioned share. Option D is incorrect because the child is not barred from recovery."
    },
    {
        id: 16,
        topic: "Mixed",
        fp: "A husband and wife took their 12-year-old son to a political rally to hear a controversial U.S. senator speak. The speaker was late, and the wife stepped outside to smoke a cigarette. While there, she saw a man placing what she believed to be a bomb against a wall at the back of the building. She went back inside and told her husband what she had seen. Without alerting anyone, they took their son and left. Some 20 minutes later, the bomb exploded, killing 8 persons and injuring 50. In the jurisdiction, murder in the first degree is defined as an intentional homicide committed with premeditation and deliberation; murder in the second degree is defined as all other murder at common law; and manslaughter is defined as either a homicide in the heat of passion arising from adequate provocation or a homicide caused by gross negligence or reckless indifference to consequence.",
        q: "As to the deaths of the eight persons, what crime, if any, did the wife commit?",
        opts: [
            "Manslaughter",
            "Murder in the first degree",
            "Murder in the second degree",
            "No crime"
        ],
        ans: 3,
        exp: "Rule: Under criminal law, an omission or failure to act cannot form the actus reus of a criminal offense unless the defendant owes a recognized legal duty to act (e.g., created by statute, contract, special relationship, voluntary assumption of care, or creating the peril). An ordinary bystander owes no legal duty to warn the public or notify authorities of an impending crime or danger created by a third party. Because the wife did not create the peril, share a relationship with the victims, or possess a statutory duty to act, her failure to warn or notify police was not a criminal omission; she committed no crime (Option D). Options A, B, and C are incorrect because criminal homicide requires either an affirmative act or the breach of a recognized legal duty to act."
    },
    {
        id: 17,
        topic: "Mixed",
        fp: "A pedestrian was crossing a street at a crosswalk. A jogger who was on the sidewalk nearby saw a speeding automobile heading in the pedestrian's direction. The jogger ran into the street and pushed the pedestrian out of the path of the car. The pedestrian fell to the ground and broke her leg.",
        q: "In an action for battery brought by the pedestrian against the jogger, will the pedestrian prevail?",
        opts: [
            "Yes, because the jogger could have shouted a warning instead of pushing the pedestrian out of the way.",
            "Yes, if the pedestrian was not actually in danger and the jogger should have realized it.",
            "No, because the driver of the car was responsible for the pedestrian's injury.",
            "No, if the jogger's intent was to save the pedestrian, not to harm her."
        ],
        ans: 1,
        exp: "Rule: Under defense of others, an actor is privileged to use reasonable force to defend a third person if the actor reasonably believes the third person is in imminent peril. However, if the third person was not actually in danger and the defendant should have realized it (i.e., the belief was unreasonable or negligent under the circumstances), the privilege of defense of others fails. Battery requires an intentional harmful or offensive contact; pushing someone to the ground constitutes battery if not protected by a valid defensive privilege (Option B). Option A is incorrect because an actor is not required to use the least intrusive alternative if a physical push was reasonably perceived as necessary. Option C is incorrect because concurrent third-party causation does not immunize an unprivileged physical battery. Option D is incorrect because intending the physical contact suffices for battery; benevolent motive does not negate battery intent."
    },
    {
        id: 18,
        topic: "Mixed",
        fp: "The plaintiff sustained personal injuries in a three-vehicle collision caused by the concurrent negligence of the three drivers, who consisted of the plaintiff (who drove a van), a trucker, and a motorcyclist. In the plaintiff's action for damages against the trucker and the motorcyclist, the jury apportioned the negligence 30 percent to the plaintiff, 30 percent to the trucker, and 40 percent to the motorcyclist. The plaintiff's total damages were $100,000. Assume that a state statute provides for a system of pure comparative negligence, joint-and-several liability of concurrent tortfeasors, and contribution based upon proportionate fault.",
        q: "If the plaintiff chooses to execute against the trucker alone, she will be entitled to collect at most",
        opts: [
            "$70,000 from the trucker, and then the trucker will be entitled to collect $40,000 from the motorcyclist.",
            "$30,000 from the trucker, and then the trucker will be entitled to collect $10,000 from the motorcyclist.",
            "$30,000 from the trucker, and then the trucker will be entitled to collect nothing from the motorcyclist.",
            "nothing from the trucker, because the trucker's percentage of fault is not greater than that of the plaintiff."
        ],
        ans: 0,
        exp: "Rule: Under pure comparative negligence, the plaintiff's total recovery is reduced by the plaintiff's own percentage of fault ($100,000 minus 30% = $70,000). Under joint and several liability, concurrent tortfeasors are each liable to the plaintiff for the entire recoverable amount ($70,000). Under comparative contribution, a tortfeasor who pays more than their proportionate share of fault (trucker's 30% share is $30,000; paying $70,000 is a $40,000 overpayment) is entitled to recover contribution from the other tortfeasor for their proportionate fault ($40,000 from the motorcyclist) (Option A). Options B and C are incorrect because they apply several (apportioned) liability rather than joint and several liability. Option D is incorrect because pure comparative negligence permits recovery even when plaintiff fault matches or exceeds an individual defendant's fault."
    },
    {
        id: 19,
        topic: "Mixed",
        fp: "A debtor's liquidated and undisputed $1,000 debt to a creditor was due on March 1. On March 15, the creditor told the debtor that if the debtor promised to pay the $1,000 on or before December 1, then the creditor wouldn't sue to collect the debt. The debtor orally agreed. On April 1, the creditor sued the debtor to collect the debt that had become due on March 1. The debtor moved to dismiss the creditor's complaint.",
        q: "Should the court grant the debtor's motion?",
        opts: [
            "No, because there was no consideration to support the creditor's promise not to sue.",
            "No, because there was no consideration to support the debtor's promise to pay $1,000 on December 1.",
            "Yes, because a promise to allow a debtor to delay payment on a past debt is enforceable without consideration.",
            "Yes, because the debtor was bargaining for the creditor's forbearance."
        ],
        ans: 0,
        exp: "Rule: Under the pre-existing legal duty rule, a promise to pay an already liquidated, undisputed, and overdue debt is not consideration for a creditor's promise to extend the time for payment or forbear from suing. Because the debtor was already legally obligated to pay the $1,000, the debtor suffered no legal detriment in exchange for the creditor's promise to wait until December 1. Therefore, the creditor's promise to forbear lacked consideration and was unenforceable, permitting the creditor to sue immediately (Option A). Option B is incorrect because the issue is whether the creditor's promise to forbear is supported by consideration from the debtor. Option C is incorrect because promises to extend debt maturities require consideration or statutory exceptions. Option D is incorrect because bargaining for forbearance is ineffective without reciprocal legal detriment."
    },
    {
        id: 20,
        topic: "Mixed",
        fp: "During a comprehensive evaluation of an adult patient's psychiatric condition, the psychiatrist failed to diagnose the patient's suicidal state. One day after the misdiagnosis, the patient committed suicide. The patient's father, immediately after having been told of his son's suicide, suffered severe emotional distress, which resulted in a stroke. The patient's father was not present at his son's appointment with the psychiatrist and did not witness the suicide. The father brought an action against the psychiatrist to recover for his severe emotional distress and the resulting stroke.",
        q: "Will the father prevail?",
        opts: [
            "No, because the father did not sustain a physical impact.",
            "No, because the psychiatrist's professional duty did not extend to the harms suffered by the patient's father.",
            "Yes, because the father was a member of the patient's immediate family.",
            "Yes, because the psychiatrist reasonably could have foreseen that a misdiagnosis would result in the patient's suicide and the resulting emotional distress of the patient's father."
        ],
        ans: 1,
        exp: "Rule: A psychiatrist's professional duty of care in diagnosis and treatment runs to the patient, not to non-patient family members, absent an express undertaking or a specific identified threat of physical violence to a third party (Tarasoff). Furthermore, under bystander Negligent Infliction of Emotional Distress (NIED) rules (Dillon v. Legg), a plaintiff cannot recover unless they were present at the scene and contemporaneously perceived the injury-producing event. Because the father was not present and the physician owed no direct diagnostic duty to the father, the claim fails (Option B). Option A is incorrect because modern NIED permits bystander recovery without direct physical impact if sensory presence criteria are satisfied. Option C is incorrect because close familial relationship is an essential element, but insufficient without presence and an underlying duty. Option D is incorrect because general foreseeability does not expand professional medical malpractice duties to non-patient relatives."
    },
    {
        id: 21,
        topic: "Mixed",
        fp: "A man and his friend decided to commit a robbery. They agreed that the friend would hide in the bushes along a dark street and jump in front of the intended victim, and the man would block the victim from behind. Unbeknownst to the man, his friend had a gun.\n\nA short time later, a woman walked down the street and the friend jumped in front of her. Before the man could approach the woman, the friend lifted his shirt and showed a gun in his waistband. The woman ran away.",
        q: "What conspiracy offense, if any, can the man properly be convicted of having committed?",
        opts: [
            "Conspiracy to commit armed robbery.",
            "Conspiracy to commit robbery.",
            "Either conspiracy offense.",
            "Neither conspiracy offense."
        ],
        ans: 1,
        exp: "Rule: Conspiracy is a specific intent crime requiring (1) an agreement between two or more persons, and (2) the specific intent that the target unlawful objective be accomplished. The scope of a conspiracy is defined strictly by the agreement entered into by the conspirators. Because the man and his friend agreed only to commit a robbery, and the man had no knowledge of or agreement to use a firearm, there was no mutual agreement or specific intent to commit armed robbery. The man can be convicted only of conspiracy to commit robbery (Option B). Options A and C are incorrect because the man never entered into an agreement to commit an armed robbery. Option D is incorrect because the mutual agreement to commit robbery plus the overt act completed the conspiracy to commit robbery."
    },
    {
        id: 22,
        topic: "Mixed",
        fp: "A bottling company sent a purchase order to a wholesaler that stated, 'Ship 100,000 empty plastic bottles at the posted price.' Two days after receipt of this purchase order, the wholesaler shipped the bottles and the bottling company accepted delivery of them. A week after the bottles were delivered, the bottling company received the wholesaler's acknowledgment form, which included a provision disclaiming consequential damages. After using the bottles for two months, the bottling company discovered a defect in the bottles that caused its product to leak from them. The bottling company recalled 10,000 of the bottles containing its product, incurring lost profits of $40,000.",
        q: "Assuming all appropriate defenses are seasonably raised, will the bottling company succeed in recovering $40,000 in consequential damages from the wholesaler?",
        opts: [
            "No, because buyers are generally not entitled to recover consequential damages.",
            "No, because the bottling company's acceptance of the goods also constituted an acceptance of the terms included in the wholesaler's acknowledgement.",
            "Yes, because the disclaimer of consequential damages is unconscionable.",
            "Yes, because the wholesaler's acknowledgment did not alter the terms of an existing contract between the parties."
        ],
        ans: 3,
        exp: "Rule: Under UCC § 2-206(1)(b), a contract is formed at the moment the seller accepts an offer by promptly shipping the goods. Once a contract has been formed by shipment, terms contained in an acknowledgment form sent after delivery constitute a proposed modification under UCC § 2-209. A unilateral post-formation disclaimer sent after delivery does not become part of the contract without the buyer's affirmative assent. Because the contract was formed by shipment and the buyer never assented to disclaim consequential damages, the acknowledgment did not alter the contract, allowing consequential damages under UCC § 2-715 (Option D). Option A is incorrect because buyers are entitled to consequential damages under UCC § 2-715. Option B is incorrect because accepting goods under a previously formed contract does not adopt post-delivery confirmation terms. Option C is incorrect because commercial disclaimers of economic loss are not per se unconscionable; the term failed due to lack of agreement."
    },
    {
        id: 23,
        topic: "Mixed",
        fp: "A motorist's car sustained moderate damage in a collision with a car driven by a courier driving a van. The accident was caused solely by the courier's negligence. The motorist's car was still drivable after the accident. Examining the car the next morning, the motorist could see that a rear fender had to be replaced. He also noticed that gasoline had dripped onto the garage floor. The collision had caused a small leak in the gasoline tank.\n\nThe motorist then took the car to a mechanic, who owned and operated a body shop; the mechanic agreed to repair the damage. During their discussion the motorist neglected to mention the gasoline leakage. Thereafter, while the mechanic was loosening some of the damaged material with a hammer, he caused a spark, igniting vapor and gasoline that had leaked from the fuel tank. The mechanic was severely burned.\n\nThe mechanic has brought an action to recover damages against the motorist and the courier. The jurisdiction has adopted a pure comparative negligence rule in place of the traditional common-law rule of contributory negligence.",
        q: "In this action, will the mechanic obtain a judgment against the courier?",
        opts: [
            "No, unless there is evidence that the courier was aware of the gasoline leak.",
            "No, if the mechanic would not have been harmed had the motorist warned him about the gasoline leak.",
            "Yes, unless the mechanic was negligent in not discovering the gasoline leak himself.",
            "Yes, if the mechanic's injury was a proximate consequence of the courier's negligent driving."
        ],
        ans: 3,
        exp: "Rule: A negligent tortfeasor is liable for all injuries proximately caused by their negligence. A negligent driver who damages a vehicle and ruptures its fuel tank is a proximate cause of fire injuries sustained during foreseeable repair operations, provided the chain of causation is not broken by an extraordinary, unforeseeable superseding cause. If the mechanic's burn injury was a proximate consequence of the collision, the courier is liable (Option D). Option A is incorrect because proximate cause requires objective foreseeability of the risk, not actual subjective awareness of the leak. Option B is incorrect because the motorist's failure to warn is at most a concurrent contributing cause, not an automatic superseding cause. Option C is incorrect because under pure comparative negligence, plaintiff negligence reduces damages rather than barring recovery."
    },
    {
        id: 24,
        topic: "Mixed",
        fp: "An associate professor in the pediatrics department of a local medical school was denied tenure. He asked a national education lobbying organization to represent him in his efforts to have the tenure decision reversed. In response to a letter from the organization on the professor's behalf, the dean of the medical school wrote to the organization explaining truthfully that the professor had been denied tenure because of reports that he had abused two of his former patients. Several months later, after a thorough investigation, the allegations were proven false and the professor was granted tenure. He had remained working at the medical school at full pay during the tenure decision review process and thus suffered no pecuniary harm.",
        q: "In a suit for libel by the professor against the dean of the medical school, will the professor prevail?",
        opts: [
            "No, because the professor invited the libel.",
            "No, because the professor suffered no pecuniary loss.",
            "Yes, because the dean had a duty to investigate the rumor before repeating it.",
            "Yes, because the dean's defamatory statement was in the form of a writing."
        ],
        ans: 0,
        exp: "Rule: Consent is an absolute defense to defamation. Under the doctrine of invited defamation, when a plaintiff authorizes or requests an agent, union, or representative organization to investigate or inquire into the reasons for an adverse employment decision, the plaintiff consents to the employer communicating the reasons for the decision to the inquiring representative. The dean replied directly to the lobbying organization authorized by the professor, making the communication privileged by consent (Option A). Option B is incorrect because libel (written defamation) traditionally presumes general damages without proof of special pecuniary harm. Option C is incorrect because qualified privilege or consent protects the employer's response to authorized representative inquiries. Option D is incorrect because written form (libel) does not override the absolute defense of consent."
    },
    {
        id: 25,
        topic: "Mixed",
        fp: "A bakery offered a chef a permanent full-time job as a pastry chef at a salary of $2,000 per month. The chef agreed to take the position and to begin work in two weeks. In her employment application, the chef had indicated that she was seeking a permanent job. One week after the chef was hired by the bakery, a hotel offered the chef a position as a restaurant manager at a salary of $2,500 a month. The chef accepted and promptly notified the bakery that she would not report for work at the bakery.",
        q: "Is the bakery likely to prevail in a lawsuit against the chef for breach of contract?",
        opts: [
            "No, because a contract for permanent employment would be interpreted to mean the chef could leave at any time.",
            "No, because the position the chef took with the hotel was not substantially comparable to the one she had agreed to take with the bakery.",
            "Yes, because the chef's acceptance of a permanent position meant that she agreed to leave the bakery only after a reasonable time.",
            "Yes, because the chef's failure to give the bakery a chance to match the salary offered by the hotel breached the implied right of first refusal."
        ],
        ans: 0,
        exp: "Rule: Under the employment-at-will doctrine, contracts for 'permanent' employment or employment of unspecified duration are construed as contracts at-will, terminable at any time by either party with or without cause. Because the agreement specified no fixed duration (stating only 'permanent full-time' at a monthly rate), the employment relationship was at-will, meaning the chef was legally privileged to leave at any time without committing a breach of contract (Option A). Option B is incorrect because comparability of subsequent work pertains to mitigation of damages, not breach. Option C is incorrect because 'permanent employment' does not imply a mandatory minimum commitment under the at-will rule. Option D is incorrect because there is no implied right of first refusal in at-will employment contracts."
    },
    {
        id: 26,
        topic: "Mixed",
        fp: "A home improvement store telegraphed an appliances manufacturer on June 1, 'At what price will you sell 100 of your QT-Model garbage-disposal units for delivery around June 10?' Thereafter, the following communications were exchanged:\n1. Telegram from the manufacturer received by the store on June 2: 'You're in luck. We have only 100 QT's, all on clearance at 50 percent off usual wholesale of $120 per unit, for delivery at our shipping platform on June 12.'\n2. Letter from the store received in U.S. mail by the manufacturer on June 5: 'I accept. Would prefer to pay in full 30 days after invoice.'\n3. Telegram from the manufacturer received by the store on June 6: 'You must pick up at our platform and pay C.O.D.'\n4. Letter from the store received in U.S. mail by the manufacturer on June 9: 'I don't deal with people who can't accommodate our simple requests.'\n5. Telegram from the store received by the manufacturer on June 10, after the manufacturer had sold and delivered all 100 of the QT's to another buyer earlier that day: 'Okay. I'm over a barrel and will pick up the goods on your terms June 12.'\n\nThe store now sues the manufacturer for breach of contract.",
        q: "Which of the following arguments will best serve the manufacturer's defense?",
        opts: [
            "The manufacturer's telegram received on June 2 was merely a price quotation, not an offer.",
            "The store's letter received on June 5 was not an acceptance because it varied the terms of the manufacturer's initial telegram.",
            "The store's use of the mails in response to the manufacturer's initial telegram was an ineffective method of acceptance.",
            "The store's letter received on June 9 was an unequivocal refusal to perform that excused the manufacturer even if the parties had previously formed a contract."
        ],
        ans: 3,
        exp: "Rule: Under UCC § 2-610, an anticipatory repudiation occurs when a party clearly and unequivocally indicates that they will not perform their contractual obligations. Even assuming a contract was formed by the June 5 letter ('I accept' with a mere non-conditional payment request under UCC § 2-207), the store's June 9 letter ('I don't deal with people who can't accommodate our simple requests') constituted an unequivocal repudiation of the contract. The repudiation excused the manufacturer from performance and entitled it to treat the contract as broken and sell the clearance units to another buyer (Option D). Option A is incorrect because the June 2 telegram was an immediate clearance offer specifying exact price, quantity, and delivery terms. Option B is incorrect because under UCC § 2-207(1), expressing a preference for credit terms without conditioning acceptance does not prevent valid acceptance. Option C is incorrect because UCC § 2-206 permits acceptance by any reasonable medium."
    },
    {
        id: 27,
        topic: "Mixed",
        fp: "A homeowner hired a building contractor to rebuild her front porch. The contractor told her that he planned to first rip out the old floorboards and pile them in the front yard. Because she thought that would look unsightly, the homeowner insisted that the contractor loosen each board individually and leave them all in place until he was ready to start replacing them with new boards.\n\nThe contractor loosened the boards and left them in place while he went out for lunch. While the contractor was away, a friend of the homeowner's stepped onto the porch to return a borrowed rake. As the friend crossed the porch, the loosened boards shifted and the friend fell, breaking her leg.",
        q: "If the friend sues to recover for her injury, who is likely to be found liable to her?",
        opts: [
            "Both the contractor and the homeowner, because neither posted a warning that the porch boards had been loosened.",
            "Neither the homeowner nor the contractor, because the friend was a licensee.",
            "The contractor only, because he was an independent contractor and he loosened the boards in a dangerously deceptive fashion without posting a warning.",
            "The homeowner only, because she insisted on having the old boards removed in a dangerously deceptive fashion and posted no warning."
        ],
        ans: 0,
        exp: "Rule: A possessor of land owes licensees a duty to warn of or make safe known dangerous artificial conditions that the licensee is unlikely to discover through reasonable care. Leaving loosened, unattached floorboards in place on an entryway creates a deceptive, concealed trap that shifts underfoot. The homeowner is liable because she affirmatively directed the contractor to leave the boards in that dangerous condition and failed to warn her social guest. Concurrently, an independent contractor owes a general duty of reasonable care to foreseeable entrants on the work site, and creating an active concealed hazard without barricading or posting a warning constitutes active operational negligence. Both are liable (Option A). Option B is incorrect because possessors must warn licensees of hidden dangerous traps. Options C and D are incorrect because an employer's detailed control over an unsafe method does not eliminate the contractor's independent duty to warn of physical hazards he created."
    },
    {
        id: 28,
        topic: "Mixed",
        fp: "In exchange for a valid and sufficient consideration, a man orally promised his neighbor, who had no car and wanted a minivan, 'to pay to anyone from whom you buy a minivan within the next six months the full purchase-price thereof.' Two months later, the neighbor bought a used minivan on credit from a dealership for $8,000. At the time, the dealership was unaware of the man's earlier promise to the neighbor, but learned of it shortly after the sale.",
        q: "Can the dealership enforce the man's promise to the neighbor?",
        opts: [
            "Yes, under the doctrine of promissory estoppel.",
            "Yes, because the dealership is an intended beneficiary of the man-neighbor contract.",
            "No, because the man's promise to the neighbor is unenforceable under the suretyship clause of the Statute of Frauds.",
            "No, because the dealership was neither identified when the man's promise was made nor aware of it when the minivan sale was made."
        ],
        ans: 1,
        exp: "Rule: Under the Restatement (Second) of Contracts § 302, a third party is an intended beneficiary if recognition of a right to performance in the beneficiary is appropriate to effectuate the intention of the parties and the performance satisfies an obligation of the promisee or confers a gift/benefit. An intended third-party beneficiary need not be identified or in existence at the time the contract is executed, so long as the beneficiary is identifiable at the time performance is due. The man promised to pay 'anyone from whom you buy a minivan,' making the dealership an intended creditor/third-party beneficiary once the purchase occurred (Option B). Option A is incorrect because the dealership did not sell the vehicle in reliance on the man's promise (it was unaware at the time of sale). Option C is incorrect because the suretyship provision applies only to collateral promises made directly to a creditor to answer for another's debt; a direct primary promise made to the debtor to pay a future obligation falls outside the Statute of Frauds. Option D is incorrect because intended beneficiaries do not need to be identified at formation."
    },
    {
        id: 29,
        topic: "Mixed",
        fp: "One evening, a woman was driving above the speed limit on a country road. As she rounded a sharp curve, she lost control of the car and crossed over to the shoulder on the other side of the road. Her car hit a truck that was parked on the shoulder with its hood up while its driver waited for a tow truck. The force of the collision threw the driver out of the truck and down an embankment. The driver died from his injuries.\n\nDriving above the speed limit and causing an accident can be charged as reckless driving, a misdemeanor in the jurisdiction.",
        q: "What is the most serious homicide offense, if any, of which the woman can properly be convicted?",
        opts: [
            "Murder, based on malice aforethought.",
            "Voluntary manslaughter, based on reckless operation of a vehicle.",
            "Involuntary manslaughter, based on the misdemeanor of reckless driving.",
            "No homicide offense."
        ],
        ans: 2,
        exp: "Rule: Involuntary manslaughter at common law consists of an unintentional killing caused by criminal negligence (gross deviation from reasonable care) or committed during the commission of an unlawful misdemeanor (misdemeanor-manslaughter rule). Driving at an excessive speed around a sharp curve resulting in a fatal collision constitutes criminal negligence, and the statutory misdemeanor of reckless driving directly proximately caused the victim's death, establishing involuntary manslaughter (Option C). Option A is incorrect because speeding around a rural curve does not exhibit depraved-heart malice (wanton indifference to human life equivalent to murder). Option B is incorrect because voluntary manslaughter requires adequate provocation / heat of passion or imperfect self-defense. Option D is incorrect because the vehicular death was caused by criminal negligence and an unlawful misdemeanor."
    },
    {
        id: 30,
        topic: "Mixed",
        fp: "The owner of a home in a rural area had for many years enjoyed unspoiled views of the surrounding countryside from her back deck. Several months ago, a neighboring farmer placed unsightly items, including an old, rusted tractor and some machine parts, entirely on his own property, but in a location visible from the homeowner's deck.\n\nThe homeowner asked the farmer to move the items to a different area of the farm, out of the homeowner's line of sight. The farmer acknowledged that it was not common for farmers in the area to keep old equipment on their land in locations visible to neighbors, but nonetheless refused to move the items. Concerned that the farmer's placement of the items might adversely affect the resale value of the property, the homeowner paid for an appraisal of her own property. The appraisal determined that the market value of the property had not been diminished by the farmer's actions.",
        q: "If the homeowner were to sue the farmer for private nuisance, which of the following would be the farmer's best argument against liability?",
        opts: [
            "The unsightly items have not caused a decrease in the market value of the homeowner's property.",
            "The unsightly items do not physically encroach on the homeowner's property.",
            "It is not common for farmers in the area to keep old equipment on their land in places that are visible to neighbors.",
            "Unsightly conditions ordinarily do not of themselves amount to an unreasonable interference with the use and enjoyment of a neighboring property."
        ],
        ans: 3,
        exp: "Rule: A private nuisance requires a substantial and unreasonable interference with the use and enjoyment of land. Under traditional and prevailing common law principles, mere aesthetic unpleasantness or unsightly conditions (such as rusted machinery or visual clutter on adjacent land) do not, by themselves, constitute an actionable private nuisance absent physical emissions (smoke, odor, noise, vibrations) or a spite fence (Option D). Option A is incorrect because property depreciation is a measure of damages, not the substantive test for liability. Option B is incorrect because nuisance redresses non-encroaching, intangible invasions. Option C is incorrect because departure from local custom tends to support, rather than defend against, an unreasonable interference claim."
    },
    {
        id: 31,
        topic: "Mixed",
        fp: "A buyer sent a seller an offer to buy 50 tons of cotton of a specified quality. The offer contained no terms except those specifying the amount and quality of the cotton. The seller then sent an acknowledgment by fax. The acknowledgment repeated the terms of the buyer's offer and stated that shipment would occur within five days. Among 12 printed terms on the acknowledgment was a statement that any dispute about the cotton's quality would be submitted to arbitration. Neither the buyer nor the seller said anything further about arbitration. The seller shipped the cotton, and it was accepted by the buyer. A dispute arose between the buyer and the seller as to the quality of the cotton, and the seller asserted that the dispute had to be submitted to arbitration. The buyer instead sued the seller in court.",
        q: "In that suit, which of the following arguments best supports the seller's position that the buyer must submit the dispute to arbitration?",
        opts: [
            "Arbitration is a more efficient method of resolving disputes than resolving them in court.",
            "The provision for arbitration did not contradict any term in the buyer's offer.",
            "The provision for arbitration did not materially alter the parties' contract.",
            "The seller's acknowledgment containing a provision for arbitration constituted a counteroffer that was accepted by the buyer when it accepted delivery of the cotton."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-207(2), between merchants, additional terms contained in an acceptance automatically become part of the contract UNLESS: (a) the offer expressly limits acceptance to the terms of the offer, (b) they materially alter the contract, or (c) objection is given within a reasonable time. While arbitration clauses are frequently held to be material alterations in many jurisdictions, arguing that the arbitration clause did not materially alter the agreement (e.g., that arbitration is customary in the textile/cotton trade without unreasonable surprise) is the seller's only viable legal argument to incorporate the clause into the contract (Option C). Option A is incorrect because procedural efficiency does not govern contract incorporation under § 2-207. Option B is incorrect because additional non-contradictory terms drop out if they are material alterations. Option D is incorrect because UCC § 2-207 abolished the common law counteroffer/last-shot rule for non-conditional acknowledgments."
    },
    {
        id: 32,
        topic: "Mixed",
        fp: "In the application for a life insurance policy, a woman answered in the negative the question, 'Have you ever had any heart disease?' Both the application and the insurance policy that was issued provided: 'Applicant warrants the truthfulness of the statements made in the application and they are made conditions to the contract of insurance.' Unknown to the woman, she had had a heart disease at a very early age.",
        q: "If the question is raised in an action against the insurance company, how is the court likely to construe the clause dealing with the truthfulness of statements in the application?",
        opts: [
            "The clause is a condition, and because the condition was not met, the company will not be liable.",
            "The clause is a condition, but it will be interpreted to mean, 'truthfulness to the best of my knowledge.'",
            "The clause is not a condition, and therefore the company may be liable even though the woman's statement was not true.",
            "The clause is not a condition but is a promise, and therefore the company will have a cause of action against the woman's estate for any losses it suffered because of her misstatement."
        ],
        ans: 1,
        exp: "Rule: Under general contract interpretation and insurance law, courts strictly construe forfeiture provisions and warranties against the insurer (contra proferentem) to avoid harsh forfeitures. Statements regarding medical history and past diseases are construed as representations of honest belief rather than strict warranties; thus, a clause requiring truthful statements is interpreted to require 'truthfulness to the best of the applicant's knowledge and belief'. Because the woman had no subjective knowledge of the childhood illness, she did not breach the condition (Option B). Option A is incorrect because courts refuse to enforce literal strict warranty forfeitures for unknowable medical facts. Options C and D are incorrect because the clause is phrased as an express condition, but its substantive scope is modified by the knowledge-and-belief standard."
    },
    {
        id: 33,
        topic: "Mixed",
        fp: "A factory requires the use of very high voltage electricity. A scientist owns property adjacent to the factory, where the scientist has attempted to carry on a research activity that requires the use of sensitive electronic equipment. The effectiveness of the scientist's electronic equipment is impaired by electrical interference arising from the high voltage currents used in the factory. The scientist has complained to the factory several times, with no result. There is no way that the factory, by taking reasonable precautions, can avoid the interference with the scientist's operation that arises from the high voltage currents necessary to the factory's operation.",
        q: "In the scientist's action against the factory to recover damages for the economic loss caused to him by the electrical interference, will the scientist prevail?",
        opts: [
            "Yes, because the factory's activity is abnormally dangerous.",
            "Yes, for loss suffered by the scientist after the factory was made aware of the harm its activity was causing to Paul.",
            "No, unless the factory caused a substantial and unreasonable interference with the scientist's research.",
            "No, because the scientist's harm was purely economic and did not arise from physical harm to his person or property."
        ],
        ans: 2,
        exp: "Rule: In an action for private nuisance, the plaintiff must prove that the defendant caused a substantial and unreasonable interference with the use and enjoyment of real property. When an interference affects an unusually sensitive or delicate commercial or scientific activity (hypersensitive use), the interference is not an actionable nuisance unless it would substantially interfere with an ordinary, standard use of land in the locality (Amphitheaters, Inc. v. Portland Meadows). The scientist can prevail only if the interference is found to be substantial and unreasonable under standard nuisance balancing (Option C). Option A is incorrect because industrial electricity transmission is a common utility activity, not an abnormally dangerous activity imposing strict liability. Option B is incorrect because notice does not make a non-nuisance into a nuisance if the use is abnormally sensitive. Option D is incorrect because nuisance protects against non-physical interference with use and enjoyment without requiring structural damage."
    },
    {
        id: 34,
        topic: "Mixed",
        fp: "A drug dealer agreed with another individual to purchase heroin from the individual in order to sell it on a city street corner. Unknown to the drug dealer, the other individual was an undercover police officer whose only purpose was to arrest distributors of drugs. The drug dealer made a down payment for the heroin and agreed to pay the remainder after he sold it on the street. As soon as the undercover officer handed over the heroin, other officers moved in and arrested the dealer.\n\nThe jurisdiction follows the common-law approach to conspiracy.",
        q: "Could the dealer properly be convicted of conspiring to distribute drugs?",
        opts: [
            "No, because there was no overt act.",
            "No, because there was no plurality of agreement.",
            "Yes, because neither an overt act nor plurality of agreement is required under common law.",
            "Yes, because the dealer believed all the elements of conspiracy were present and cannot take advantage of a mistake of fact or law."
        ],
        ans: 1,
        exp: "Rule: Under the traditional common law bilateral approach to conspiracy, the crime requires a genuine mutual agreement between two or more persons (plurality of agreement) with the specific intent to achieve an unlawful objective. A feigned agreement with an undercover government agent who does not intend to commit the crime does not satisfy the common law bilateral requirement; there is no conspiracy because there is only one genuine guilty mind. (Note: Under the Model Penal Code unilateral approach, an individual can be guilty of conspiracy for agreeing with an undercover officer, but this jurisdiction explicitly adheres to the common law rule) (Option B). Option A is incorrect because paying for and taking delivery is an overt act. Option C is incorrect because plurality of agreement is fundamental to common law conspiracy. Option D is incorrect because subjective belief cannot satisfy the bilateral requirement at common law."
    },
    {
        id: 35,
        topic: "Mixed",
        fp: "A photographer lent 200 of his photographic prints to a museum to be featured in an upcoming exhibit. The museum agreed to return all prints in the same condition as it received them. Due to staff error, the museum instead sent the prints to a recycling bin, where they were compressed beyond recognition. The photographer sued the museum in federal court for breach of contract, alleging diversity jurisdiction, and sought to recover the market value of the 200 prints. The evidence presented to the jury showed that none of the photographer's photo prints throughout his career had ever sold for more than $500 a print. No motions were made by either side before the case went to the jury. The jury returned a verdict of $1 million. The judge mentally agreed with the jury that the museum ought to be held liable but believed that the jury's award reflected an arithmetic error and that the jurors had intended to issue a verdict of $100,000 in damages rather than $1 million.\n\nAfter judgment was entered on the jury's verdict for the photographer, the museum made a motion for judgment as a matter of law, by which it asked the judge to set the judgment at $100,000 rather than $1 million.",
        q: "What action can the judge take, if any, that is procedurally proper, is not wasteful of judicial resources, and will correct the judgment to or near the $100,000 that the judge believes the jury intended?",
        opts: [
            "The judge should grant the museum's motion and enter judgment for $100,000.",
            "The judge on her own initiative should conditionally order a new trial unless the photographer agrees to a reduction of the damages to $100,000, an amount set by the court.",
            "The judge on her own initiative should order a new jury trial solely on the issue of damages.",
            "The judge must deny the museum's motion because the Seventh Amendment requires that the judge accept the jury's damage award without adjustment."
        ],
        ans: 1,
        exp: "Rule: When a jury returns an excessive damage verdict unsupported by the evidence, the trial judge in federal court may not unilaterally reduce the award without violating the Seventh Amendment right to a jury trial; however, the judge may order a remittitur. Under remittitur, the judge conditionally grants a new trial on damages unless the plaintiff accepts a reduced damage amount determined by the court (Option B). Option A is incorrect because a renewed judgment as a matter of law under Rule 50(b) cannot be granted if no Rule 50(a) motion was made before submission, and a judge cannot unilaterally rewrite a jury verdict. Option C is incorrect because ordering an unconditional new trial wastes judicial resources when remittitur provides a viable remedy. Option D is incorrect because remittitur is fully constitutional under the Seventh Amendment."
    },
    {
        id: 36,
        topic: "Mixed",
        fp: "By the terms of a written contract signed by both parties on January 15, a computer retailer agreed to sell a specific ICB personal computer to a buyer for $3,000, and the buyer agreed to pick up and pay for the computer at the retailer's store on February 1. The buyer unjustifiably repudiated on February 1. Without notifying the buyer, the retailer subsequently sold at private sale the same specific computer to another buyer, who paid the same price ($3,000) in cash. The ICB is a popular product; the retailer can buy from the manufacturer more units than it can sell at retail.",
        q: "If the retailer sues the buyer for breach of contract, the retailer will probably recover",
        opts: [
            "nothing, because it received a price on resale equal to the contract price that the buyer had agreed to pay.",
            "nothing, because the retailer failed to give the buyer proper notice of the retailer's intention to resell.",
            "the retailer's anticipated profit on the sale to the buyer plus incidental damages, if any, because the retailer lost that sale.",
            "$3,000 (the contract price), because the buyer intentionally breached the contract by repudiation."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-708(2), if the standard resale measure of damages (contract price minus resale price) is inadequate to put the seller in as good a position as performance would have done, the seller is a 'lost volume seller' and is entitled to recover the profit (including reasonable overhead) that the seller would have made from full performance by the buyer. A retailer who can obtain more units from the manufacturer than it can sell would have made two sales instead of one but for the buyer's breach; therefore, reselling at the same price does not mitigate the lost sale (Option C). Option A is incorrect because the lost volume seller doctrine overrides standard resale offsets. Option B is incorrect because lack of resale notice under § 2-706 bars resale damages, but does not bar lost profit recovery under § 2-708(2). Option D is incorrect because an action for the price under § 2-709 is unavailable where goods were resold."
    },
    {
        id: 37,
        topic: "Mixed",
        fp: "A lumber supplier agreed to sell and a furniture manufacturer agreed to buy all of the lumber that the manufacturer required over a two-year period. The sales contract provided that payment was due 60 days after delivery, but that a 3 percent discount would be allowed if the manufacturer paid within ten days of delivery. During the first year of the contract, the manufacturer regularly paid within the ten-day period and received the 3 percent discount. Fifteen days after the supplier made its most recent lumber delivery to the manufacturer, the supplier had received no payment from the manufacturer. At this time, the supplier became aware of rumors from a credible source that the manufacturer's financial condition was precarious. The supplier wrote the manufacturer, demanding assurances regarding the manufacturer's financial status. The manufacturer immediately mailed its latest audited financial statements to the supplier, as well as a satisfactory credit report prepared by the manufacturer's banker. The rumors proved to be false. Nevertheless, the supplier refused to resume deliveries. The manufacturer sued the lumber supplier for breach of contract.",
        q: "Will the manufacturer prevail?",
        opts: [
            "No, because the contract was unenforceable, since the manufacturer had not committed to purchase a definite quantity of lumber.",
            "No, because the supplier had reasonable grounds for insecurity and was therefore entitled to cancel the contract and refuse to make any future deliveries.",
            "Yes, because the credit report and audited financial statements provided adequate assurance of due performance under the contract.",
            "Yes, because the supplier was not entitled to condition resumption of deliveries on the receipt of financial status information."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-609, when reasonable grounds for insecurity arise, a party may demand adequate assurance of due performance and suspend performance until received. However, once the other party provides adequate assurance of performance according to commercial standards (promptly sending audited financial statements and a bank credit report), the demanding party must resume performance. Continued refusal to deliver after receiving adequate assurance constitutes a total breach of contract by the supplier (Option C). Option A is incorrect because requirements contracts are valid under UCC § 2-306. Option B is incorrect because grounds for insecurity entitle a party to demand assurances, not cancel unilaterally after adequate assurances are provided. Option D is incorrect because insecurity permitted demanding assurances, but the breach occurred by refusing delivery after satisfaction."
    },
    {
        id: 38,
        topic: "Mixed",
        fp: "A landowner who owned a large tract of land in the mountains sought to protect a herd of wild deer that frequented the area. Although the landowner had posted signs that said, 'No Hunting - No Trespassing,' hunters frequently intruded to kill the deer. Recently, the landowner built an eight-foot chain-link fence, topped by three strands of barbed wire, across a gully on her land that provided the only access to the area frequented by the deer.\n\nA wildlife photographer asked the landowner for permission to enter the property to photograph the deer. Because the landowner feared that any publicity would encourage further intrusions, she denied the photographer's request. Frustrated, the photographer attempted to climb the fence. He became entangled in the barbed wire and suffered extensive lacerations. The wounds became infected and ultimately caused his death. The photographer's personal representative brought an action against the landowner.",
        q: "Will the plaintiff prevail?",
        opts: [
            "Yes, because the landowner may not use deadly force to protect her land from intrusion.",
            "Yes, because the landowner had no property interest in the deer that entitled her to use force to protect them.",
            "No, because the photographer entered the landowner's land after the landowner had refused him permission to do so.",
            "No, because the potential for harm created by the presence of the barbed wire was apparent."
        ],
        ans: 3,
        exp: "Rule: A landowner is privileged to use reasonable, non-deadly force to defend land against trespassers, which includes erecting visible fences and standard barbed-wire barriers. While landowners may not use hidden mechanical devices designed to inflict deadly force (spring guns as in Katko v. Briney), an ordinary barbed-wire fence is a standard boundary barrier where the danger is open, apparent, and easily observed by any adult climbing it. Because the hazard was open and apparent and standard boundary fencing does not constitute excessive or deadly force, the landowner is not liable (Option D). Option A is incorrect because installing standard barbed wire on top of a boundary fence is not categorized as using deadly mechanical force. Option B is incorrect because landowners may fence their boundaries regardless of wild game presence. Option C is incorrect because trespasser status alone does not resolve the issue if a spring gun or trap were used."
    },
    {
        id: 39,
        topic: "Mixed",
        fp: "A driver, returning from a long shift at a factory, fell asleep at the wheel and lost control of his car. As a result, his car collided with a police car driven by an officer who was returning to the station after having responded to an emergency. The police officer was injured in the accident. The police officer sued the driver in negligence for her injuries. The driver moved for summary judgment, arguing that the common-law firefighters' rule barred the suit.",
        q: "Should the court grant the motion?",
        opts: [
            "No, because the firefighters' rule does not apply to police officers.",
            "No, because the police officer's injuries were not related to any special dangers of her job.",
            "Yes, because the accident would not have occurred but for the emergency.",
            "Yes, because the police officer was injured on the job."
        ],
        ans: 1,
        exp: "Rule: The common-law firefighters' rule (professional rescuers doctrine) bars firefighters and police officers from recovering against a tortfeasor whose negligence created the emergency that required the officer's presence at the scene. The rule applies strictly to risks inherent in responding to the specific crisis; it does NOT bar recovery for independent acts of negligence committed by third parties that injure an officer while engaged in normal travel or unrelated duties. Because the fatigued factory worker's collision was an independent traffic accident unrelated to the emergency the officer had handled, the firefighters' rule does not bar the suit (Option B). Option A is incorrect because the firefighters' rule applies to police officers. Option C is incorrect because 'but-for' timing does not connect the factory worker's negligence to the emergency scene. Option D is incorrect because on-the-job injuries are not barred unless arising from the specific hazard being confronted."
    },
    {
        id: 40,
        topic: "Mixed",
        fp: "In financial straits and needing $4,000 immediately, a nephew orally asked his uncle for a $4,000 loan. The uncle replied that he would lend the money to the nephew only if the nephew's mother 'guaranteed' the loan. At the nephew's suggestion, the uncle then telephoned the nephew's mother, told her about the loan, and asked if she would 'guarantee' it. She replied, 'Surely. Lend my son the $4,000 and I'll repay it if he doesn't.' The uncle then lent $4,000 to the nephew, an amount the nephew orally agreed to repay in six weeks. The next day, the nephew's mother wrote to him and concluded her letter with the words, 'Son, I was happy to do you a favor by promising your uncle I would repay your six-week $4,000 loan if you don't. /s/ Mother.' Neither the nephew nor his mother repaid the loan when it came due and the uncle sued the mother for breach of contract. In that action, the mother raised the Statute of Frauds as her only defense.",
        q: "Will the mother's Statute Frauds defense be successful?",
        opts: [
            "No, because the amount of the loan was less than $5,000.",
            "No, because the mother's letter satisfies the Statute-of-Frauds requirement.",
            "Yes, because the mother's promise to the uncle was oral.",
            "Yes, because the nephew's promise to the uncle was oral."
        ],
        ans: 1,
        exp: "Rule: Under the suretyship provision of the Statute of Frauds, a collateral promise to answer for the debt of another must be evidenced by a writing signed by the party to be charged. The writing does not need to be delivered to the creditor or executed at the time of agreement; an informal written letter or memorandum addressed to a third party (such as the son) satisfies the Statute of Frauds if it describes the essential terms and is signed by the promisor. Because the mother wrote and signed a letter identifying the loan, debt amount, maturity, and guaranty promise, the Statute of Frauds is satisfied (Option B). Option A is incorrect because the suretyship provision applies to any dollar amount, unlike UCC § 2-201. Option C is incorrect because a subsequent signed memorandum satisfies the writing requirement for prior oral promises. Option D is incorrect because the primary loan performable within six weeks is not barred by the one-year Statute of Frauds."
    },
    {
        id: 41,
        topic: "Mixed",
        fp: "A golfer was annoyed that his caddie was joking about the golfer's bad last shot. The golfer swung his newly-purchased golf club in the direction of the caddie's head, intending to frighten the caddie but not to hit him. The caddie started to duck to avoid the blow. The golfer stopped his swing so that the club would not have hit the caddie, except that due to the club manufacturer's negligence the club head flew off and hit the caddie in the top of the head, seriously injuring him.",
        q: "The caddie will be able to recover for:",
        opts: [
            "assault but not battery.",
            "battery but not assault.",
            "assault and battery.",
            "neither battery nor assault."
        ],
        ans: 2,
        exp: "Rule: Assault requires an intentional act causing reasonable apprehension of immediate harmful or offensive bodily contact. The golfer swung at the caddie's head intending to frighten him, causing the caddie to duck in reasonable apprehension, establishing completed assault. Battery requires an intentional harmful or offensive bodily contact. Under the doctrine of transferred intent (which applies between intentional torts), the intent to commit an assault transfers to satisfy the intent requirement for battery when the physical contact actually ensues, even if the golfer did not intend the contact or the club head broke. The caddie recovers for both assault and battery (Option C). Options A, B, and D are incorrect because the elements and transferred intent satisfy both torts."
    },
    {
        id: 42,
        topic: "Mixed",
        fp: "A plaintiff is being treated by a physician for asbestosis, an abnormal chest condition that was caused by his on-the-job handling of materials containing asbestos. His physician has told him that the asbestosis is not presently cancerous, but that it considerably increases the risk that he will ultimately develop lung cancer.\n\nThe plaintiff has brought an action for damages, based on strict product liability, against the supplier of the materials that contained asbestos. The court in this jurisdiction has ruled against recovery of damages for negligently inflicted emotional distress in the absence of physical harm.",
        q: "If the supplier is subject to liability to the plaintiff for damages, should the award include damage for emotional distress he has suffered arising from his knowledge of the increased risk that he will develop lung cancer?",
        opts: [
            "No, because the plaintiff's emotional distress did not cause his physical condition.",
            "No, unless the court in this jurisdiction recognizes a cause of action for an increased risk of cancer.",
            "Yes, because the supplier of a dangerous product is strictly liable for the harm it causes.",
            "Yes, because the plaintiff's emotional distress arises from bodily harm caused by his exposure to asbestos."
        ],
        ans: 3,
        exp: "Rule: In tort actions involving physical injury or bodily harm, a plaintiff is entitled to recover 'parasitic' damages for emotional distress (pain and suffering, fear of future disease) that naturally flows from or is accompanied by the actual physical harm caused by the tortious product. The rule barring stand-alone emotional distress without physical impact does not apply because the plaintiff has already suffered demonstrable physical bodily injury (asbestosis) caused by asbestos exposure (Option D). Option A is incorrect because emotional distress need not cause physical injury when it results from an existing physical injury. Option B is incorrect because parasitic fear-of-cancer damages are recoverable in connection with an existing disease without pleading an independent cause of action for increased risk. Option C is incorrect because strict liability still requires parasitic connection to physical bodily harm."
    },
    {
        id: 43,
        topic: "Mixed",
        fp: "A man owned and occupied Blackacre, which was a tract of land improved with a one-family house. The owner's friend orally offered the owner $200,000 for Blackacre, the fair market value, and the owner accepted. Because they were friends, the two saw no need for attorneys or written contracts and shook hands on the deal. The friend paid the owner $10,000 down in cash and agreed to pay the balance of $190,000 at an agreed closing time and place.\n\nBefore the closing, the friend inherited another home and asked the owner to return his $10,000. The owner refused, and, at the time set for the closing, tendered a good deed to the friend and declared his intention to vacate Blackacre the next day. The owner demanded that the friend complete the purchase. The friend refused. The fair market value of Blackacre has remained $200,000.",
        q: "In an appropriate action brought by the owner against the friend for specific performance, if the owner loses, the most likely reason will be that",
        opts: [
            "the agreement was oral.",
            "keeping the $10,000 is the owner's exclusive remedy.",
            "the friend had a valid reason for not closing.",
            "The owner remained in possession on the day set for the closing."
        ],
        ans: 0,
        exp: "Rule: Under the Statute of Frauds, a contract for the sale of an interest in real property is unenforceable unless evidenced by a signed writing. Under the part performance doctrine, an oral land contract is enforced in equity only if the buyer does at least two of the following: takes physical possession, pays all or part of the purchase price, and makes valuable improvements. Here, the buyer merely paid a $10,000 down payment; paying money alone without taking possession or making improvements does not take an oral land contract out of the Statute of Frauds (Option A). Option B is incorrect because retention of earnest money is not an exclusive remedy absent an express liquidated damages agreement. Option C is incorrect because inheriting a home does not excuse a contractual duty. Option D is incorrect because a seller occupies until closing."
    },
    {
        id: 44,
        topic: "Mixed",
        fp: "A seller and a buyer entered into a written agreement providing that the seller was to deliver 1,000 cases of candy bars to the buyer during the months of May and June. Under the agreement, the buyer was obligated to make a selection by March 1 of the quantities of the various candy bars to be delivered under the contract. The buyer did not make the selection by March 1, and on March 2 the seller notified the buyer that because of the buyer's failure to select, the seller would not deliver the candy bars. The seller had all of the necessary candy bars on hand on March 1 and made no additional sales or purchases on March 1 or March 2. On March 2, after receiving the seller's notice that it would not perform, the buyer notified the seller of its selection and insisted that the seller perform. The seller refused.",
        q: "If the buyer sues the seller for breach of contract, is the buyer likely to prevail?",
        opts: [
            "No, because a contract did not exist until selection of the specific candy bars, and the seller withdrew its offer before selection.",
            "No, because selection of the candy bars by March 1 was an express condition to the seller's duty to perform.",
            "Yes, because a delay of one day in making the selection did not have a material effect on the seller.",
            "Yes, because upon the buyer's failure to make a selection by March 1, the seller had a duty to make a reasonable selection."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-311(1) and general contract rules, an agreement for sale that leaves particulars of performance (such as assortment) to be specified by one of the parties is valid and binding. Under UCC § 2-311(3), where a specification would materially affect the other party's performance but is not seasonably made, the other party is excused for any resulting delay and may proceed to perform or treat the failure as a breach. However, a non-material delay of a single day (March 2 instead of March 1) where delivery was not due until May/June and the seller suffered zero prejudice or material change of position does not justify cancellation under the doctrine of substantial performance / non-material delay (Option C). Option A is incorrect because a binding contract was formed upon agreement. Option B is incorrect because timing of assortment specification in installment delivery contracts is construed as a promise/covenant rather than a strict express condition of forfeiture. Option D is incorrect because UCC § 2-311(3)(b) permits, but does not impose an affirmative duty on, the seller to make the selection."
    },
    {
        id: 45,
        topic: "Mixed",
        fp: "A consumer became physically ill after drinking part of a bottle of soda that contained a large decomposed snail. The consumer sued the store from which she bought the soda to recover damages for her injuries. The parties agreed that the snail was put into the bottle during the bottling process, over which the store had no control. The parties also agreed that the snail would have been visible in the bottle before the consumer opened it.",
        q: "Will the consumer prevail in her action against the store?",
        opts: [
            "No, because the consumer could have seen the snail in the bottle.",
            "No, because the store was not responsible for the bottling process.",
            "Yes, because the consumer was injured by a defective product sold to her by the store.",
            "Yes, because the store had exclusive control over the bottle before selling it to the consumer."
        ],
        ans: 2,
        exp: "Rule: Under strict products liability (Restatement (Second) of Torts § 402A), a commercial retailer in the distribution chain is strictly liable for selling a defective, unreasonably dangerous product that causes physical injury, regardless of whether the retailer was at fault or could have discovered the defect. A beverage containing a decomposed snail is defective and unreasonably dangerous. Furthermore, a consumer's failure to discover a defect (failing to inspect the bottle) is ordinary contributory negligence, which is not a defense to strict products liability (Option C). Option A is incorrect because failure to inspect does not bar strict products liability. Option B is incorrect because retailers are strictly liable even if the defect was caused entirely by the upstream bottler. Option D is incorrect because exclusive control pertains to res ipsa loquitur in negligence, not strict products liability."
    },
    {
        id: 46,
        topic: "Mixed",
        fp: "A manufacturer of large computers contracted in writing with a bank to sell and deliver to the bank a mainframe computer using a new type of magnetic memory, then under development but not perfected by the manufacturer, at a price substantially lower than that of a similar computer using current technology. The contract's delivery term was 'F.O.B. [the bank], on or before July 31.' The manufacturer tendered the computer to the bank on August 15, and the bank rejected it because of the delay.",
        q: "If the manufacturer sues the bank for breach of contract, which of the following facts, if proved, will best support a recovery by the manufacturer?",
        opts: [
            "The delay did not materially harm the bank.",
            "The manufacturer believed, on the assumption that the bank was getting a 'super deal' for its money, that the bank would not reject because of the late tender of delivery.",
            "The manufacturer's delay in tender was caused by a truckers' strike.",
            "A usage in the relevant trade allows computer sellers a 30-day leeway in a specified time of delivery, unless the usage is expressly negated by the contract."
        ],
        ans: 3,
        exp: "Rule: Under the UCC § 2-601 perfect tender rule, a buyer may reject goods if the tender fails in any respect to conform to the contract, including timeliness of delivery. However, under UCC § 1-303 and § 2-202, trade usage supplements and explains agreement terms. If an established trade usage permits computer manufacturers a 30-day delivery leeway unless expressly negated, the August 15 delivery was conforming under the contract as interpreted through trade usage, meaning the bank wrongfully rejected the tender (Option D). Option A is incorrect because the perfect tender rule applies regardless of whether the breach was material. Option B is incorrect because subjective belief regarding a good bargain does not modify delivery terms. Option C is incorrect because a transportation strike does not excuse delay under an F.O.B. destination term unless an explicit force majeure clause applies."
    },
    {
        id: 47,
        topic: "Mixed",
        fp: "A mother purchased over-the-counter pain medication for her daughter, who suffered from headaches. The packaging indicated that the pills were 'coated' but did not list the ingredients in the coating. A few days after she bought the medication, because the daughter was in extreme pain, the mother gave the daughter three times the recommended dose of the medication. Thirty minutes later, because the daughter had a very rare allergy to an ingredient in the coating, she had a severe allergic reaction, for which she was hospitalized. The mother was aware of the daughter's allergy, but she did not know that the medication contained the ingredient to which the daughter was allergic.",
        q: "In a failure-to-warn action brought against the manufacturer of the medication, which of the arguments below would be the LEAST promising as a defense?",
        opts: [
            "The daughter's allergy to the ingredient in the coating was very rare.",
            "The manufacturer's duty was to warn learned intermediaries, not consumers of the medication.",
            "The mother should not have given her daughter a triple dose of the medication.",
            "The mother, knowing of her daughter's very rare allergy, should not have purchased the medication without knowing what ingredients were in the coating."
        ],
        ans: 1,
        exp: "Rule: Under the learned intermediary doctrine, a pharmaceutical manufacturer satisfies its duty to warn by warning the prescribing physician rather than the patient. However, the learned intermediary doctrine applies strictly to prescription medications; it does NOT apply to over-the-counter (OTC) drugs sold directly to consumers without a physician's prescription. Because this was an over-the-counter drug, the manufacturer owed a direct duty to warn the purchasing public on the package label, making the learned intermediary argument completely unviable and the LEAST promising defense (Option B). Options A, C, and D are standard, viable defenses addressing idiosyncratic allergic reactions, unforeseeable product misuse (triple dosing), and comparative fault."
    },
    {
        id: 48,
        topic: "Mixed",
        fp: "On March 1, a homeowner contacted a builder about constructing an addition to the homeowner's house. The builder orally offered to perform the work for $200,000 if his pending bid on another project was rejected. The homeowner accepted the builder's terms and the builder then prepared a written contract that both parties signed. The contract did not refer to the builder's pending bid. One week later, upon learning that his pending bid on the other project had been accepted, the builder refused to perform any work for the homeowner.",
        q: "Can the homeowner recover for the builder's non-performance?",
        opts: [
            "No, because efficiency principles justify the builder's services being directed to a higher-valued use.",
            "No, because the builder's duty to perform was subject to a condition.",
            "Yes, because the builder's attempt to condition his duty to perform rendered the contract illusory.",
            "Yes, because the parol evidence rule would bar the builder from presenting evidence of oral understandings not included in the final writing."
        ],
        ans: 1,
        exp: "Rule: Under the parol evidence rule (Restatement (Second) of Contracts § 217), extrinsic oral evidence is admissible to establish that the written agreement was subject to an oral condition precedent to legal effectiveness (a condition that must occur before contractual obligations become binding). Because the parties mutually understood that the contract was conditional on the rejection of the other bid, and that condition precedent failed to occur (the other bid was accepted), the contract never became effective, discharging the builder from any duty to perform (Option B). Option A is incorrect because economic efficiency theories do not excuse contract breach. Option C is incorrect because conditioning a commitment on an external event outside the party's sole control is not illusory. Option D is incorrect because oral conditions precedent to contract effectiveness are not barred by the parol evidence rule."
    },
    {
        id: 49,
        topic: "Mixed",
        fp: "Defendant suffered from severe chronic insomnia. After trying various non-prescription remedies without success, Defendant obtained a prescription sleeping medication from a doctor. The doctor warned Defendant that the medication would induce severe drowsiness and impaired reflexes within 20 minutes, and instructed Defendant to take it only when ready to sleep in bed. Defendant took a double dose of the medication at a friend's house across town, intending to drive home before the pills took effect. Five minutes into the drive, Defendant fell asleep at the wheel. The car swerved onto a sidewalk and struck and killed a pedestrian. The jurisdiction defines involuntary manslaughter at common law.",
        q: "Is Defendant guilty of involuntary manslaughter?",
        opts: [
            "No, because Defendant was unconscious at the time of the fatal collision.",
            "No, because Defendant was acting pursuant to a valid prescription from a licensed physician.",
            "Yes, because taking a double dose of a potent sedative and driving across town constitutes criminal negligence that proximately caused the victim's death.",
            "Yes, because driving under the influence of any sedative is a strict liability felony."
        ],
        ans: 2,
        exp: "Rule: Involuntary manslaughter requires an unintentional killing resulting from criminal negligence (gross negligence involving a substantial and unjustifiable risk of death or serious bodily injury, representing a gross deviation from the standard of care). While unconscious conduct is normally involuntary, an actor who knowingly creates the risk by voluntarily taking a double dose of an intoxicating sedative immediately before driving an automobile is criminally negligent, establishing proximate cause and mens rea at the time the dangerous conduct was initiated. Defendant is guilty of involuntary manslaughter (Option C). Option A is incorrect because antecedent criminal negligence in driving while ingesting sedatives supplies the required culpability. Option B is incorrect because abusing a prescription in violation of physician warnings is not shielded by medical authorization. Option D is incorrect because vehicular manslaughter is not a strict liability offense; criminal negligence must be established."
    },
    {
        id: 50,
        topic: "Mixed",
        fp: "Defendant broke into a residential home at night intending to steal jewelry. Once inside, Defendant discovered that the home was completely empty and undergoing total interior renovation, with all furnishings and valuables removed. Frustrated, Defendant grabbed a crowbar left by the construction crew and smashed two newly installed bathroom sinks before leaving through a back window. Defendant was arrested nearby.",
        q: "What is the most serious crime of which Defendant can be convicted?",
        opts: [
            "Common law burglary.",
            "Attempted burglary only.",
            "Larceny.",
            "Trespass to land."
        ],
        ans: 0,
        exp: "Rule: Common law burglary requires: (1) breaking, (2) entering, (3) the dwelling house of another, (4) in the nighttime, (5) with the intent to commit a felony therein. The crime of burglary is fully complete at the moment of entry with the requisite felonious intent; whether the intended felony (larceny) is actually completed or proves factually impossible because there are no valuables inside is completely irrelevant. Because Defendant broke and entered an occupied dwelling structure at night with the contemporaneous intent to steal jewelry, burglary was fully completed upon entry (Option A). Option B is incorrect because the burglary was completed, not merely attempted. Option C is incorrect because Defendant did not commit a completed asportation/theft of property. Option D is incorrect because burglary is a felony ranking above civil or criminal trespass."
    }
];
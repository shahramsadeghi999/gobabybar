// BabyBar-Contracts-50.js
// Total Questions: 25
// Subject: Contracts (Common Law & UCC Article 2) ONLY
// Standard: Master Tier 5 / First-Year Law Students' Examination (Baby Bar) Benchmark
const examData = [
    {
        id: 1,
        topic: "Defenses / Infancy & Ratification",
        fp: "A 17-year-old high school student signed a written contract to purchase a motorized scooter from a dealership for $1,000, payable in $100 monthly installments. The age of majority in the state is 18. The student used the scooter to commute to work and made monthly payments until two months after her 18th birthday. At that time, she received a car as a gift. She immediately called the dealership, offered to return the scooter, and refused to make further payments, asserting that she signed the contract when she was a minor. The dealership sued for the remaining payments.",
        q: "Is the dealership entitled to the remaining payments owed on the contract?",
        opts: [
            "Yes, because the student used the scooter to commute to work, making it a legal necessary.",
            "No, because the student offered to return the scooter immediately upon receiving alternative transportation.",
            "Yes, because the student made payments after reaching the age of majority, thereby affirming the contract.",
            "No, because the student was under the age of majority when she originally signed the agreement."
        ],
        ans: 2,
        exp: "(C) is the correct response. While minors generally lack the capacity to enter a binding contract, a contract will be enforced if the minor affirms (ratifies) the contract after reaching the age of majority[cite: 5]. A minor can affirm a contract either expressly or by conduct, such as continuing to honor the contract or making payments after reaching majority[cite: 5]. Because the state age of majority was 18 and the student continued to make payments after her 18th birthday, she affirmed the contract, making it fully enforceable[cite: 5]. (A) is incorrect because an item used merely for commuting is generally not classified as a necessary of life, and regardless, ratification makes the entire contract enforceable[cite: 5]. (B) is incorrect because her offer to return the scooter came after she had already ratified the contract[cite: 5]. (D) is incorrect because the initial incapacity was cured by her subsequent post-majority ratification[cite: 5]."
    },
    {
        id: 2,
        topic: "Remedies / Lost Profits & Lost Volume Seller",
        fp: "A liquidator had 200 obsolete computer monitors for sale. The monitors had a fair market value of $200 each. The manufacturer had discontinued them, and they were the very last ones the liquidator had in stock. To clear space, the liquidator advertised them at $150 each, which would yield a profit of $25 per monitor. A corporate buyer contracted to buy all 200 monitors for $150 each. The next day, the buyer canceled the order. The liquidator immediately sold all 200 monitors to a local school district for $150 each. The liquidator sued the corporate buyer for breach of contract, seeking $5,000 in lost profits.",
        q: "How much money should the court award the liquidator?",
        opts: [
            "Nothing, because the liquidator resold the goods at the contract price and sustained no actual damage.",
            "$30,000, representing the full contract price of the 200 monitors.",
            "$10,000, representing the difference between the fair market value and the contract price.",
            "$5,000, because the liquidator lost the profit it would have made on the sale to the corporate buyer."
        ],
        ans: 0,
        exp: "(A) is the correct response. Ordinarily, a lost volume seller who resells goods at the same price can recover lost profits because they would have made two sales instead of one[cite: 5]. However, where there is a strict limit to the availability of the items sold (e.g., they are discontinued and the seller possesses only a finite, exact number), the seller is not a lost volume seller because they could not have made a second sale regardless of the breach[cite: 5]. Since there were no more monitors to sell, the liquidator lost nothing when it resold the exact same monitors to the school district at the identical price[cite: 5]. (B) is incorrect because an action for the price is unavailable when goods are successfully resold[cite: 5]. (C) is incorrect because that formula represents the buyer's remedy for breach, not the seller's[cite: 5]. (D) is incorrect because the liquidator lacked the inventory to make both sales, defeating the lost volume seller doctrine[cite: 5]."
    },
    {
        id: 3,
        topic: "Excuse / Impossibility vs Destruction of Subject Matter",
        fp: "On May 1, a landowner hired a contractor to construct a freestanding two-car garage on the landowner's property for $15,000, payable upon completion on July 1. On June 10, when the garage was 50% complete, a severe thunderstorm caused a nearby tree to fall, completely destroying the partially built structure. The damage was not the fault of either party. The contractor notified the landowner that he would not rebuild the garage because he was scheduled to start a commercial project on July 2. The landowner hired a replacement contractor to build the garage for $18,000. The landowner sued the original contractor for breach.",
        q: "Can the contractor successfully defend based on impossibility of performance?",
        opts: [
            "Yes, because the contractor had not yet received any progress payments from the landowner.",
            "No, because the contractor's obligation was to construct and deliver a completed garage by July 1, which the storm did not make objectively impossible.",
            "Yes, because the destruction of the structure was caused by an unforeseeable Act of God without fault of either party.",
            "No, because the structure was only 50% complete when it was destroyed, leaving the contractor with adequate time to rebuild."
        ],
        ans: 1,
        exp: "(B) is the correct response. When a contractor agrees to construct a *new* building, the destruction of the partially completed structure by fire or storm does not discharge the contractor's duty under the doctrine of impossibility[cite: 5]. It remains objectively possible for the contractor to rebuild the structure from scratch and fulfill the contract, even though it will be substantially more expensive and time-consuming[cite: 5]. Therefore, the contractor's refusal to rebuild constituted an actionable breach[cite: 5]. (A) is incorrect because the timing of progress payments does not excuse a failure to perform[cite: 5]. (C) is incorrect because destruction of a building under construction (unlike a repair contract on an existing building) is not deemed destruction of the subject matter that excuses performance[cite: 5]. (D) is incorrect because the percentage of completion is irrelevant to the doctrine of impossibility in new construction contracts[cite: 5]."
    },
    {
        id: 4,
        topic: "Performance / Payment Prior to Inspection (UCC 2-512)",
        fp: "A manufacturer agreed to purchase 500 specialized titanium bolts from a supplier under a written contract providing that the manufacturer must make payment immediately upon delivery, prior to inspection. The bolts arrived by commercial freight. The manufacturer demanded to open the crates and inspect the bolts before handing over the payment check. The freight driver refused to allow inspection prior to payment and returned the bolts to the supplier. The supplier sued the manufacturer for breach of contract.",
        q: "Did the manufacturer breach the contract?",
        opts: [
            "No, because the supplier failed to tender the bolts in a manner permitting reasonable inspection.",
            "Yes, because the manufacturer's refusal to pay prior to inspection constituted an anticipatory repudiation.",
            "Yes, because the contract expressly required payment prior to inspection, making the manufacturer's refusal a breach.",
            "No, because contract clauses requiring payment prior to inspection are unconscionable and void under the UCC."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under the UCC, while a buyer generally has the right to inspect goods before payment, the parties may explicitly agree that payment is required prior to inspection[cite: 5]. If the contract contains such a clause, the buyer's failure to make payment upon delivery of the goods constitutes a breach of contract[cite: 5]. The manufacturer's refusal to pay without inspecting directly violated the express terms of the agreement[cite: 5]. (A) is incorrect because the express contract term superseded the default statutory right of pre-payment inspection[cite: 5]. (B) is incorrect because the refusal to pay occurred at the exact time payment was required, constituting an actual present breach rather than an anticipatory repudiation[cite: 5]. (D) is incorrect because UCC § 2-512 explicitly permits agreements requiring payment prior to inspection; such clauses are not unconscionable[cite: 5]."
    },
    {
        id: 5,
        topic: "Formation / Unilateral Contract vs Bilateral",
        fp: "A technology firm posted a notice on its internal employee portal: 'The firm will pay a $5,000 bonus to any employee who successfully develops a predictive AI sorting algorithm by December 1. The bonus will be awarded to the employee whose code is deemed most efficient by the IT Director.' An engineer read the notice and immediately sent an email to the IT Director stating: 'I accept the firm's offer for the $5,000 bonus. I am working on the code and will submit it next week.' The email was intercepted by a spam filter and never reached the Director. The firm withdrew the offer the next day.",
        q: "What is the best characterization of the firm's posted notice?",
        opts: [
            "A preliminary invitation to deal, analogous to a general newspaper advertisement.",
            "An offer for a bilateral contract that was accepted when the engineer dispatched the email.",
            "An offer for a unilateral contract that requested acceptance by performance rather than a return promise.",
            "An option contract that became irrevocable the moment the engineer read the notice."
        ],
        ans: 2,
        exp: "(C) is the correct response. A unilateral contract is an offer that requests acceptance by full performance of a specified act rather than by a return promise[cite: 5]. The firm's notice promised to pay a bonus only to an employee who actually developed and submitted the winning algorithm[cite: 5]. Because the firm requested performance (submitting the code) rather than a promise to perform, it was an offer for a unilateral contract[cite: 5]. (A) is incorrect because the notice was a definitive promise to pay a specific reward for a specific act, making it a binding offer rather than a mere invitation to negotiate[cite: 5]. (B) is incorrect because the offer could not be accepted by a return promise; the engineer's email was therefore legally ineffective to form a contract[cite: 5]. (D) is incorrect because an offer for a unilateral contract becomes irrevocable only when the offeree commences the requested performance, not merely by reading the notice[cite: 5]."
    },
    {
        id: 6,
        topic: "Assignment & Delegation / Anti-Assignment Clause",
        fp: "A homeowner entered into a written contract with an independent pool cleaning service to clean her pool weekly for one year for $100 per month. The contract contained a clause: 'Homeowner agrees not to assign this contract without the written permission of the Pool Service.' Four months later, the homeowner sold her house to a buyer and asked the pool service to consent to assigning the cleaning contract to the new buyer. The pool service, facing rising chemical costs, refused to consent. The homeowner assigned the contract to the buyer anyway. The pool service refused to clean the pool for the buyer. The buyer hired a replacement service for $150 per month and sued the original pool service.",
        q: "Can the buyer enforce the contract against the original pool service?",
        opts: [
            "No, because the contract was for personal services, which are strictly non-assignable.",
            "Yes, because the assignment was valid and enforceable despite the pool service's refusal to consent.",
            "No, because the contract expressly prohibited assignment without the pool service's written consent.",
            "Yes, because the pool service had no legal right to unreasonably withhold consent to the assignment."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under general contract law, a promise not to assign a contract operates as a covenant rather than a condition[cite: 5]. An assignment made in violation of a general anti-assignment clause is usually regarded as valid and effective to transfer the rights to the assignee, although the assignor may be liable for damages for breaching the covenant not to assign[cite: 5]. Because the assignment was effective, the buyer (assignee) can enforce the contract against the pool service[cite: 5]. (A) is incorrect because standard pool cleaning is a routine commercial service, not a unique 'personal service' that prevents assignment[cite: 5]. (C) is incorrect because a general prohibition against assignment does not render the assignment void, it merely creates a breach of covenant[cite: 5]. (D) is incorrect because a party is not required to act reasonably in withholding consent unless the contract explicitly requires it[cite: 5]."
    },
    {
        id: 7,
        topic: "Consideration / Pre-Existing Duty Rule (Rewards)",
        fp: "A city posted a $10,000 public reward for information leading to the arrest and conviction of a notorious bank robber. A municipal police detective, who was officially assigned to the robbery task force, utilized police databases and criminal informants to locate the robber. The detective's investigation successfully led to the robber's arrest and subsequent conviction. The detective demanded the $10,000 reward, but the city refused to pay. The detective sued the city.",
        q: "Which of the following is the city's most effective argument in defense?",
        opts: [
            "The reward offer was a mere gratuitous promise unsupported by a bilateral exchange.",
            "The detective gave no consideration for the reward because he was already under a preexisting duty to apprehend the robber.",
            "The detective did not personally arrest the robber, but merely provided the information.",
            "Public policy prohibits municipal employees from accepting performance bonuses."
        ],
        ans: 1,
        exp: "(B) is the correct response. Consideration requires a bargained-for exchange involving a legal detriment. Under the preexisting duty rule, performing an act that one is already legally or officially obligated to do cannot serve as consideration for a new promise[cite: 5]. A police officer's official duties include investigating crimes and apprehending criminals[cite: 5]. Because the detective was already obligated by his employment to catch the robber, his performance provided no new consideration to support the city's promise to pay the reward[cite: 5]. (A) is incorrect because a reward poster is an offer for a unilateral contract, not a gratuitous promise[cite: 5]. (C) is incorrect because the reward specifically offered payment for 'information leading to' the arrest, which the detective provided[cite: 5]. (D) is incorrect because the preexisting duty rule is the direct, established contract law defense to this specific claim[cite: 5]."
    },
    {
        id: 8,
        topic: "Parol Evidence / Contradicting a Written Integration",
        fp: "A classic car enthusiast visited a dealership and negotiated to buy a vintage vehicle. The enthusiast and the dealer signed a fully integrated written contract for a specific 1965 convertible priced at $40,000. The next day, the dealer delivered the 1965 convertible. The enthusiast claimed that the dealer had orally agreed, just prior to signing the contract, to substitute a 1967 hardtop model instead of the convertible for the same price. The dealer denied making such an oral agreement and refused to exchange the cars. In the ensuing lawsuit, the enthusiast sought to testify about the prior oral agreement.",
        q: "Should the court admit the enthusiast's testimony regarding the oral agreement?",
        opts: [
            "No, because the enthusiast's testimony directly contradicts the unambiguous terms of the written contract.",
            "No, because there were no independent witnesses to verify the alleged oral agreement.",
            "Yes, because prior oral agreements are admissible to establish fraud in the inducement.",
            "Yes, because ambiguities in a contract are strictly construed against the drafting merchant."
        ],
        ans: 0,
        exp: "(A) is the correct response. The Parol Evidence Rule prohibits the introduction of extrinsic evidence of prior or contemporaneous agreements offered to contradict, vary, or modify an unambiguous writing that the parties intended to be a full and final expression of their agreement (a complete integration)[cite: 5]. The written contract explicitly identified the 1965 convertible[cite: 5]. The enthusiast's assertion that the agreement was actually for a 1967 hardtop directly contradicts the express terms of the integrated written contract[cite: 5]. Therefore, the testimony is strictly inadmissible[cite: 5]. (B) is incorrect because admissibility under the Parol Evidence Rule turns on the integration of the writing and contradiction, not the presence of corroborating witnesses[cite: 5]. (C) is incorrect because the enthusiast is alleging a contradictory term regarding the subject matter, not fraud in the inducement (e.g., a lie about the car's condition)[cite: 5]. (D) is incorrect because there is no ambiguity in the contract to resolve[cite: 5]."
    },
    {
        id: 9,
        topic: "Consideration / Material Benefit Rule (Moral Obligation)",
        fp: "A jogger was running along a pier when he saw a woman drowning in the choppy water. The jogger dove in, losing his $500 prescription sunglasses in the process. He pulled the unconscious woman to the dock and performed CPR until she revived. Upon recovering, the woman told the jogger: 'I can never repay you, but I promise to pay you $1,000 next week as a token of my gratitude.' A few days later, the woman died of an unrelated aneurysm. The jogger submitted a claim to her estate for $1,000 based on her promise, and an alternative claim for $500 in quantum meruit for his lost sunglasses. The executor rejected both.",
        q: "Is the jogger entitled to recover the $500 for his lost sunglasses in quantum meruit?",
        opts: [
            "Yes, because the doctrine of 'danger invites rescue' imposes a quasi-contractual duty on the rescued party.",
            "Yes, because the jogger conferred a material benefit on the woman that unjustly enriched her.",
            "No, because the woman made no express or implied promise to reimburse the jogger for the specific loss of his sunglasses.",
            "No, because emergency rescues are presumed to be gratuitous acts of benevolence."
        ],
        ans: 2,
        exp: "(C) is the correct response. Quantum meruit (implied-in-law contract) is available to prevent unjust enrichment only where services are rendered under circumstances indicating that the party from whom payment is sought was aware of the other party's expectation of payment[cite: 5]. Because the woman was unconscious during the rescue and the jogger dove in without any prior negotiation, there was no mutual expectation of compensation[cite: 5]. Furthermore, her subsequent promise was for $1,000 as a token of gratitude, not an express promise to reimburse the $500 sunglasses[cite: 5]. The executor is not bound to pay for the lost gear[cite: 5]. (A) is incorrect because 'danger invites rescue' is a tort doctrine used to establish duty and proximate cause, not a basis for contract recovery[cite: 5]. (B) and (D) are incorrect because absent an express promise to pay for the property loss or an initial expectation of compensation, quasi-contract does not force an accident victim to replace a rescuer's lost property[cite: 5]."
    },
    {
        id: 10,
        topic: "Performance / Order of Conditions",
        fp: "A homeowner engaged a contractor to build a detached patio cover. The contractor drafted a written contract that stated: 'Patio cover construction: $4,000. Payable $1,000 in advance, and $3,000 upon completion.' Both parties signed the agreement. The homeowner refused to pay the initial $1,000, arguing that the contractor had to begin work first. The contractor refused to start work until the $1,000 was paid.",
        q: "Which of the following correctly describes the order of obligations in the contract?",
        opts: [
            "Payment of the initial $1,000 is a condition precedent to the contractor's obligation to build, and completion of the building is a condition precedent to the homeowner's obligation to pay the remaining $3,000.",
            "The contractor's obligation to build the patio cover and the homeowner's obligation to pay the initial $1,000 are concurrent conditions.",
            "Neither party's obligation to perform is conditioned upon the performance of the other party.",
            "Completion of the patio cover is a condition subsequent to the homeowner's obligation to pay the initial $1,000."
        ],
        ans: 0,
        exp: "(A) is the correct response. Performance of one of a series of mutual promises is a condition precedent to others if the circumstances indicate it should obviously precede the others[cite: 5]. Because the writing explicitly called for payment of $1,000 'in advance,' it is obvious the parties intended that payment to precede the commencement of work. Thus, the $1,000 payment was a condition precedent to the contractor's duty to build[cite: 5]. Similarly, because the contract called for the remaining $3,000 'upon completion,' the contractor's finishing the patio cover was a condition precedent to the homeowner's duty to pay the balance[cite: 5]. (B) is incorrect because concurrent conditions require simultaneous performance, which contradicts 'in advance'[cite: 5]. (C) is incorrect because the obligations are clearly conditioned sequentially[cite: 5]. (D) is incorrect because a condition subsequent discharges an existing duty; completion here triggers the final payment duty rather than discharging the initial one[cite: 5]."
    },
    {
        id: 11,
        topic: "Remedies / Mitigation in Employment Contracts",
        fp: "An engineering firm hired a regional director under a written five-year employment contract at a salary of $10,000 per month. Two years later, the firm reorganized and unilaterally eliminated the director's position, terminating his employment without cause. The director searched for work and, after four months, secured a similar regional director position at a competing firm for the exact same salary of $10,000 per month. The director sued the original engineering firm for breach of the employment contract.",
        q: "What damages is the director entitled to recover?",
        opts: [
            "The full salary for the remaining three years of the contract term.",
            "A sum equivalent to the four months of lost salary between his discharge and his new employment, plus reasonable job search expenses.",
            "Severance pay equivalent to two months' salary, as standard equitable relief.",
            "Nothing, because he successfully mitigated his damages by finding equivalent employment."
        ],
        ans: 1,
        exp: "(B) is the correct response. In an action for breach of an employment contract, a wrongfully discharged employee is entitled to receive the full contract price for the balance of the term plus consequential damages, LESS the income earned (or damages avoided) by mitigating through substitute employment[cite: 5]. Because the director mitigated his damages by taking a comparable job at the exact same salary, his ongoing future damages were reduced to zero from that point forward[cite: 5]. However, he is still entitled to the four months of lost wages he suffered before the new job began, plus any incidental expenses incurred in finding the new job[cite: 5]. (A) is incorrect because it fails to deduct the wages earned from the substitute employment[cite: 5]. (C) is incorrect because severance pay is a contractual term, not a default legal remedy[cite: 5]. (D) is incorrect because mitigation stops the accrual of future damages, but does not erase the actual damages already suffered during the four months of unemployment[cite: 5]."
    },
    {
        id: 12,
        topic: "Formation / UCC 2-206 Accommodation Shipments",
        fp: "A construction company placed an emergency order with a supplier for 5,000 Grade-5 titanium bolts for immediate delivery. The supplier immediately shipped 2,500 Grade-5 bolts along with a written notice stating: 'We do not have 5,000 bolts in stock. We are shipping 2,500 bolts as an accommodation to assist with your emergency.' The construction company received the shipment and the notice.",
        q: "Have the parties formed an enforceable contract for the 5,000 bolts?",
        opts: [
            "Yes, because the supplier accepted the offer by shipping the goods.",
            "No, because the supplier did not ship the full 5,000 bolts requested.",
            "Yes, because the construction company placed an emergency order requiring immediate action.",
            "No, because the supplier's shipment of nonconforming quantity with an accommodation notice constituted a counteroffer."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under UCC § 2-206(1)(b), an order for prompt shipment invites acceptance by either a promise to ship or the actual shipment of conforming or nonconforming goods[cite: 5]. However, the statute contains a specific exception: 'such a shipment of non-conforming goods does not constitute an acceptance if the seller seasonably notifies the buyer that the shipment is offered only as an accommodation to the buyer'[cite: 5]. Because the supplier shipped a nonconforming quantity (2,500 instead of 5,000) and explicitly included a notice of accommodation, the shipment acted as a counteroffer, not an acceptance[cite: 5]. Therefore, no contract for the 5,000 bolts was formed[cite: 5]. (A) is incorrect because the accommodation notice prevents the shipment from operating as an acceptance[cite: 5]. (B) is incorrect because shipping a lesser quantity ordinarily *would* be an acceptance and a breach, were it not for the explicit accommodation notice[cite: 5]. (C) is incorrect because the emergency nature of the order does not override the statutory accommodation rule[cite: 5]."
    },
    {
        id: 13,
        topic: "Consideration / Forbearance to Sue",
        fp: "A delivery driver rear-ended a luxury sedan. The driver of the sedan approached the delivery driver and threatened to sue him for negligence. The delivery driver's employer arrived at the scene and told the sedan driver: 'If you promise not to sue my driver, I will personally pay for all the damages to your car.' The sedan driver agreed. A month later, the sedan driver presented a repair bill for $4,000. The employer refused to pay, pointing out that traffic camera footage proved the sedan driver had illegally reversed into the delivery truck, meaning the sedan driver's negligence claim was actually invalid. The sedan driver sued the employer for the $4,000.",
        q: "Is the employer bound by his promise to pay for the damages?",
        opts: [
            "No, because the employer's only connection to the accident was vicarious liability.",
            "Yes, because the agreement was a bargained-for exchange supported by consideration.",
            "No, because the sedan driver was actually at fault, making his underlying negligence claim legally invalid.",
            "Yes, under the doctrine of promissory estoppel."
        ],
        ans: 1,
        exp: "(B) is the correct response. Consideration requires a bargained-for exchange where one party incurs a legal detriment. Forbearance from asserting a legal claim constitutes valid consideration, even if the claim is ultimately proven to be invalid, provided that the party asserting the claim possessed a good faith, reasonable belief in its validity at the time of the agreement (Restatement § 74)[cite: 5]. The sedan driver believed he had a valid negligence claim and gave up his legal right to sue in exchange for the employer's promise to pay[cite: 5]. This exchange of promises created a binding contract[cite: 5]. (A) is incorrect because an employer can validly contract to settle claims against an employee[cite: 5]. (C) is incorrect because the subsequent discovery of camera footage invalidating the claim does not destroy the consideration that existed when the good-faith settlement was reached[cite: 5]. (D) is incorrect because there is actual consideration (a bilateral contract), making promissory estoppel unnecessary[cite: 5]."
    },
    {
        id: 14,
        topic: "Formation / Firm Offer Expiration (UCC 2-205)",
        fp: "A manufacturer of specialized percussion instruments mailed a signed letter to a retail music store: 'I offer to sell you 50 brass cymbals at $100 each. This offer is good for 30 days from today's date.' The retail store received the letter but did not respond. Two weeks later, the manufacturer received a more lucrative offer from a marching band supplier. The manufacturer immediately telephoned the retail store and explicitly revoked the offer. The store sued the manufacturer, arguing the offer was irrevocable for 30 days.",
        q: "Did the manufacturer effectively revoke its offer?",
        opts: [
            "No, because the store had 30 days to accept the offer from the date of the letter.",
            "No, because the manufacturer did not communicate its revocation in a signed writing.",
            "Yes, because there was no consideration to support keeping the offer open.",
            "Yes, because the store had not communicated any acceptance to the manufacturer."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under UCC § 2-205, a merchant's offer to buy or sell goods in a signed writing that by its terms gives assurance that it will be held open is irrevocable for the time stated (up to three months), even without consideration[cite: 5]. The manufacturer is a merchant, the offer was in a signed writing, and it explicitly assured the offer would be kept open for 30 days[cite: 5]. Consequently, it was a valid firm offer, and the manufacturer possessed no legal power to revoke it prior to the expiration of the 30-day period[cite: 5]. The telephoned revocation was void[cite: 5]. (B) is incorrect because an ordinary offer can be revoked orally; the invalidity here stems from the firm offer rule, not the medium of revocation[cite: 5]. (C) is incorrect because UCC § 2-205 explicitly makes qualifying firm offers irrevocable without consideration[cite: 5]. (D) is incorrect because the offeree is not required to communicate acceptance to lock in a firm offer; the signed writing itself creates the irrevocability[cite: 5]."
    },
    {
        id: 15,
        topic: "Excuse / Accord and Satisfaction with Disputed Debt",
        fp: "A graphic designer billed a corporate client $5,000 for a marketing campaign. The client contacted the designer and stated that the work did not meet the agreed specifications and refused to pay the full amount. To resolve the issue, the client promised to pay $3,500, which the designer agreed to accept as payment in full. The client later refused to pay the $3,500. The designer sued the client for $3,500 based on the client's promise.",
        q: "Which of the following facts, if true, would best ensure a judgment for the designer?",
        opts: [
            "The client honestly believed the work was defective, but the designer secretly knew the work was flawless.",
            "The designer honestly believed the $5,000 debt was valid, but the client did not honestly believe the work was defective.",
            "The designer honestly believed the $5,000 debt was valid, and the client honestly believed the work was defective.",
            "The designer had already filed a lawsuit against the client for the $5,000."
        ],
        ans: 2,
        exp: "(C) is the correct response. An agreement to accept a lesser sum in satisfaction of a debt (an accord) must be supported by consideration. Under the pre-existing duty rule, if a debt is liquidated and undisputed, promising to pay a lesser amount provides no consideration[cite: 5]. However, if the debt is subject to a good-faith dispute, the compromise of that claim furnishes valid consideration[cite: 5]. For the compromise to be binding, the parties must possess an honest, good-faith belief in their respective positions[cite: 5]. If the client honestly believed the work was defective and the designer honestly believed the full debt was owed, their mutual compromise creates a binding accord[cite: 5]. (A) and (B) are incorrect because if a party asserts a defense or claim in bad faith (knowing it is invalid), their surrender of that bad-faith position does not constitute valid consideration[cite: 5]. (D) is incorrect because the mere filing of a lawsuit does not cure a lack of good faith in the underlying dispute[cite: 5]."
    },
    {
        id: 16,
        topic: "Parol Evidence / Condition Precedent to Formation",
        fp: "A wealthy patron contracted in writing to pay a famous sculptor $50,000 to carve a marble statue. The written contract contained all material terms. Before signing the contract, the patron and the sculptor orally agreed that the contract would be completely void and of no effect if the patron could not secure a display permit from the city by March 1. The patron failed to secure the permit and canceled the project. The sculptor sued for breach. At trial, the patron attempted to introduce evidence of the oral agreement regarding the permit. The sculptor objected under the Parol Evidence Rule.",
        q: "Is the evidence of the oral agreement admissible?",
        opts: [
            "Yes, because the oral agreement establishes a condition precedent to the formation of the contract.",
            "Yes, because oral modifications of service contracts are always admissible.",
            "No, because the written contract was completely integrated and the oral promise contradicts it.",
            "No, because the agreement regarding the permit is subject to the Statute of Frauds."
        ],
        ans: 0,
        exp: "(A) is the correct response. Although the Parol Evidence Rule generally prevents the introduction of extrinsic evidence of prior agreements to modify a written integration, it does not bar evidence offered to prove that the written agreement never came into legal existence[cite: 5]. An oral agreement that a written contract will not become binding unless a specific condition occurs (a condition precedent to effectiveness) is universally admissible[cite: 5]. The patron's evidence shows the contract was conditioned on obtaining a permit, so it is admissible to prove no contract was formed[cite: 5]. (B) is incorrect because the oral agreement was made *prior* to signing, so it is not a subsequent modification[cite: 5]. (C) is incorrect because the condition precedent exception bypasses the Parol Evidence Rule entirely[cite: 5]. (D) is incorrect because an agreement about a permit condition does not fall within the Statute of Frauds[cite: 5]."
    },
    {
        id: 17,
        topic: "Statute of Frauds / Exceptions and Applicability",
        fp: "In four separate transactions, a defendant raised the Statute of Frauds as an affirmative defense against a plaintiff's breach of contract claim.",
        q: "In which of the following scenarios is the oral agreement LEAST likely to be enforced over the defendant's Statute of Frauds objection?",
        opts: [
            "The defendant's court pleadings admitted making the oral agreement to buy a painting for $900, but raised the Statute of Frauds as a defense.",
            "The defendant, a merchant, received a signed written confirmation from the plaintiff for 100 lawnmowers at $1,200 total, and threw it in the trash without responding.",
            "The defendant orally agreed to purchase custom-carved mahogany doors with his family crest for $600. The plaintiff completed the carving before the defendant canceled.",
            "The defendant orally agreed to purchase porcelain figurines, delivered one per week for 15 weeks at $100 per figurine. The defendant canceled before the first delivery."
        ],
        ans: 3,
        exp: "(D) is the correct response. The oral agreement for 15 figurines at $100 each totals $1,500, placing it squarely within the UCC Statute of Frauds (goods over $500)[cite: 5]. Because no goods were delivered or paid for, no writing exists, it is not a custom good, and no merchant's confirmatory memo was sent, this oral agreement is completely unenforceable[cite: 5]. (A) is incorrect because under UCC § 2-201(3)(b), admitting the contract in court pleadings removes the Statute of Frauds bar[cite: 5]. (B) is incorrect because under UCC § 2-201(2), a merchant who fails to object to a confirmatory memo within 10 days loses the Statute of Frauds defense[cite: 5]. (C) is incorrect because specially manufactured goods (custom family crest) on which substantial work has begun are exempt from the Statute of Frauds under UCC § 2-201(3)(a)[cite: 5]."
    },
    {
        id: 18,
        topic: "Defenses / Infancy Power of Disaffirmance (Restitution Offset)",
        fp: "A 16-year-old purchased a used car from a dealership for $2,000 cash. The reasonable rental value of the car was $200 per month. After driving the car for two months, the teenager negligently crashed it into a pole, causing $800 in damage to the vehicle. The teenager returned the damaged car to the dealership, announced he was disaffirming the contract based on his minority, and demanded his $2,000 back. The dealership refused.",
        q: "Under the modern minority rule applied in some jurisdictions (and tested when specified), what amount should the court award the teenager?",
        opts: [
            "$2,000 (the full purchase price, under the traditional rule).",
            "$1,600 (the purchase price less the reasonable rental value of the car).",
            "$1,200 (the purchase price less the damage sustained in the crash).",
            "Nothing, because a minor cannot disaffirm a contract after destroying the property."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under the traditional common law rule, a minor who disaffirms is entitled to a full refund without deduction for depreciation or damage[cite: 5]. However, the modern minority rule (often tested as a specific variant, such as in Finz Q18) holds that if a minor disaffirms a contract and seeks restitution, the minor's recovery is offset by the reasonable value of the benefit the minor received (use and depreciation)[cite: 5]. Measuring the benefit by the reasonable rental value is a common judicial approach under this modern view. Because the rental value was $200/month for two months ($400), the $2,000 refund is offset by $400, leaving $1,600[cite: 5]. (A) states the traditional majority rule, but the specific question tests the offset for benefit received[cite: 5]. (C) is incorrect because the offset is based on the value of the use/benefit (rental value), not the tortious damage to the vehicle[cite: 5]. (D) is incorrect because minors generally retain the power to disaffirm even if the property is damaged[cite: 5]."
    },
    {
        id: 19,
        topic: "Formation / Revocation of Unilateral Offer",
        fp: "A man lost his expensive watch during a marathon. He posted a notice on social media offering a $500 reward to anyone who found it. A woman who saw the post rented a metal detector for $50 and spent three hours walking the marathon route. She found the watch. Meanwhile, the man found a replacement watch online and posted a new message: 'Reward withdrawn.' The woman did not see the withdrawal. She drove to the man's house and tendered the watch. The man kept the watch but refused to pay the reward.",
        q: "Is the woman entitled to the reward money?",
        opts: [
            "No, because the man revoked the reward before she tendered the watch.",
            "Yes, because the woman did not see the revocation.",
            "Yes, because the woman commenced performance by renting the detector and searching, making the offer irrevocable.",
            "No, because the woman failed to provide advance notice of her acceptance."
        ],
        ans: 2,
        exp: "(C) is the correct response. An offer of a reward is an offer for a unilateral contract, accepted only by full performance (finding and returning the watch)[cite: 5]. Under Restatement (Second) of Contracts § 45, once an offeree begins the requested performance (here, renting equipment and actively searching), the offeror's power to revoke is suspended, creating an option contract that gives the offeree a reasonable time to complete performance[cite: 5]. Because the woman had begun performance, the man's revocation was legally ineffective[cite: 5]. Upon completing performance by finding the watch, she was entitled to the reward[cite: 5]. (A) is incorrect because the offer became irrevocable once performance began[cite: 5]. (B) is incorrect because the irrelevance of her seeing the revocation stems from the irrevocability of the offer, not notice rules[cite: 5]. (D) is incorrect because unilateral contracts do not require advance notice of acceptance[cite: 5]."
    },
    {
        id: 20,
        topic: "Terms / Open Price Term (UCC 2-305)",
        fp: "A restaurant owner and a local farm entered into a signed written contract for the sale of 500 pounds of organic tomatoes to be delivered on August 1. The contract specified the quantity and delivery date, but the parties inadvertently left the price column completely blank. On August 1, the farm refused to deliver the tomatoes, arguing that the contract was void because it lacked an essential term.",
        q: "In an action for breach of contract, what is the effect of the parties' failure to include a price?",
        opts: [
            "The court will disregard the writing because it fails to contain all essential terms of the agreement.",
            "The court will conclude that the contract calls for the payment of a reasonable price at the time of delivery.",
            "The court will refuse to enforce the contract under the Statute of Frauds.",
            "The court will allow the seller to dictate the price upon delivery."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under UCC § 2-305(1), the parties can conclude a contract for the sale of goods even though the price is not settled[cite: 5]. In such cases, the price is a 'reasonable price at the time for delivery' if the price is left to be agreed by the parties and they fail to agree, or if nothing is said as to price[cite: 5]. Because this is a contract for the sale of goods (tomatoes), the UCC applies, and the omission of the price term does not destroy the contract's validity[cite: 5]. (A) is incorrect because the UCC expressly rejects the common law rule that required all essential terms to be stated in the writing[cite: 5]. (C) is incorrect because under UCC § 2-201, a writing satisfies the Statute of Frauds even if it omits a price term, so long as it contains a quantity term and is signed[cite: 5]. (D) is incorrect because the statute supplies a 'reasonable market price,' not unilateral dictation by the seller[cite: 5]."
    },
    {
        id: 21,
        topic: "Parol Evidence / Complete Integration",
        fp: "A homeowner and a painter signed a written contract stating the painter would paint the house for $3,000, completion by June 12. The contract contained a clause stating: 'This document is the full and final expression of the agreement between the parties.' During subsequent litigation, the homeowner sought to introduce evidence of various oral agreements made during negotiations. ",
        q: "Which of the following oral agreements is LEAST likely to be admitted into evidence over the painter's objection?",
        opts: [
            "An oral agreement that the contract would have no legal effect if the homeowner sold the house prior to June 2.",
            "An oral agreement that 'completion' meant passing a specific municipal inspection.",
            "An oral agreement made simultaneously with the signing that the painter would use a specific brand of premium paint.",
            "An oral agreement made one week after the contract was signed extending the deadline to June 20."
        ],
        ans: 2,
        exp: "(C) is the correct response. The Parol Evidence Rule bars extrinsic evidence of prior or contemporaneous oral agreements offered to contradict or supplement a completely integrated written contract[cite: 5]. An explicit merger clause establishes complete integration. Therefore, a simultaneous oral agreement adding a new duty (using a specific brand of paint) supplements the integrated writing and is strictly barred[cite: 5]. (A) is incorrect because an oral condition precedent to the legal effectiveness of the entire agreement is a recognized exception to the Parol Evidence Rule and is admissible[cite: 5]. (B) is incorrect because extrinsic evidence is admissible to explain ambiguous terms ('completion')[cite: 5]. (D) is incorrect because the Parol Evidence Rule applies only to prior or contemporaneous agreements, not to subsequent modifications made after the contract was signed[cite: 5]."
    },
    {
        id: 22,
        topic: "Assignment & Delegation / FOB Shipment & Risk of Loss",
        fp: "A supplier contracted to sell 100 air conditioners to a university for $250 each. The contract specified: 'F.O.B. Seller's factory.' The contract also prohibited assignment without mutual consent. On June 1, the supplier loaded the units onto an independent trucking company's truck and notified the university. Later that day, the supplier assigned its right to receive the $25,000 payment to a creditor. On June 2, the truck crashed, destroying the shipment. The university refused to pay the creditor.",
        q: "In an action by the creditor against the university for the $25,000, what is the university's legal position?",
        opts: [
            "The university is liable because the risk of loss passed to it when the units were loaded onto the truck.",
            "The university is not liable because the destruction of the goods made performance impossible.",
            "The university is not liable because the assignment of the payment right violated the anti-assignment clause.",
            "The university is liable because the trucking company's negligence is imputed to the buyer."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under UCC § 2-319 and § 2-509, a contract designated 'F.O.B. Seller's factory' is a shipment contract[cite: 5]. In a shipment contract, the risk of loss passes to the buyer when the seller delivers the conforming goods to the carrier[cite: 5]. Because the supplier loaded the goods on the truck and notified the buyer on June 1, the risk of loss passed to the university[cite: 5]. Therefore, the university bears the financial loss for the June 2 crash and must pay the contract price[cite: 5]. Furthermore, under UCC Article 9, a seller who has fully performed may assign the right to payment despite a contractual prohibition[cite: 5]. The creditor can thus collect the $25,000[cite: 5]. (B) is incorrect because impossibility does not excuse a buyer who already bears the risk of loss[cite: 5]. (C) is incorrect because anti-assignment clauses cannot prohibit the assignment of a fully earned account receivable under the UCC[cite: 5]. (D) is incorrect because liability is based on the contractual risk of loss passing upon delivery to the carrier, not vicarious tort liability[cite: 5]."
    },
    {
        id: 23,
        topic: "Formation / UCC 2-209 Modification & Statute of Frauds",
        fp: "An art gallery mailed a catalog to a dealer offering 30 specific paintings at $2,000 each. The dealer replied in writing: 'I accept your offer to sell Painting #30 for $2,000.' The next day, the gallery owner called the dealer and said: 'Painting #30 is getting a lot of attention; I won't sell it for less than $3,000.' The dealer orally agreed to pay $3,000. When the dealer arrived to pick up the painting, she tendered $2,000 and refused to pay $3,000. The gallery owner refused to hand over the painting and sued for breach.",
        q: "Should the court rule in the gallery owner's favor?",
        opts: [
            "No, because her promise to pay $3,000 for the painting was not in writing.",
            "Yes, because she relied on the dealer's promise to pay $3,000.",
            "No, because the oral modification was completely unsupported by fresh consideration.",
            "Yes, because under UCC § 2-209, modifications between merchants are binding without consideration."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under UCC § 2-209(1), an agreement modifying a contract for the sale of goods needs no consideration to be binding[cite: 5]. However, under UCC § 2-209(3), the requirements of the Statute of Frauds must be satisfied if the contract as modified is within its provisions[cite: 5]. The modified contract was for the sale of a painting for $3,000, bringing it squarely within the UCC Statute of Frauds (goods over $500)[cite: 5]. Because the dealer's agreement to the $3,000 price was entirely oral and no exception (like receipt of goods or payment) applied, the modification was unenforceable against the dealer[cite: 5]. The gallery owner cannot enforce the $3,000 price[cite: 5]. (B) is incorrect because there is no indication the gallery materially changed its position in detrimental reliance on the oral modification before the dealer retracted it[cite: 5]. (C) is incorrect because the UCC abolished the pre-existing duty rule for sales of goods; lack of consideration does not invalidate the modification[cite: 5]. (D) is incorrect because it ignores the Statute of Frauds requirement imposed by § 2-209(3)[cite: 5]."
    },
    {
        id: 24,
        topic: "Formation / Requirements Contracts (UCC 2-306)",
        fp: "A restaurant entered into a written agreement with a brewery. The agreement stated that the restaurant would buy all of its beer from the brewery for one year. The restaurant signed the agreement. The brewery never signed it, but immediately increased its beer production to meet the restaurant's needs. A month later, the restaurant bought 20 kegs of beer from a new local brewpub. The brewery sued to enforce the agreement. The restaurant argued the contract was invalid because the writing contained no specific quantity term.",
        q: "Should the court rule in the brewery's favor?",
        opts: [
            "No, because the written agreement contained no quantity term, failing the Statute of Frauds.",
            "No, because the brewery never signed the agreement, violating mutuality of obligation.",
            "Yes, because the agreement was a valid requirements contract.",
            "Yes, because the brewery acted in reliance on the restaurant's promise by increasing production."
        ],
        ans: 2,
        exp: "(C) is the correct response. A valid requirements contract is created when a buyer agrees to fulfill all of its requirements from a specific seller[cite: 5]. Under UCC § 2-306, a term which measures quantity by the output of the seller or the requirements of the buyer means such actual output or requirements as may occur in good faith[cite: 5]. A specific numeric quantity term is not required for a requirements contract to be valid and enforceable, nor does its absence violate the Statute of Frauds, because the 'all requirements' language provides a sufficient standard to determine the quantity[cite: 5]. (A) is incorrect because the 'all requirements' language satisfies the quantity requirement[cite: 5]. (B) is incorrect because the restaurant (the party to be charged) signed the agreement, and the brewery accepted by beginning performance[cite: 5]. (D) is incorrect because there was an actual valid contract, making the equitable doctrine of promissory estoppel unnecessary[cite: 5]."
    },
    {
        id: 25,
        topic: "Terms / Battle of the Forms with Non-Merchants (UCC 2-207)",
        fp: "An importer mailed a catalog of ceramic pots to a coffee shop owner. The catalog stated: '10 percent discount on COD orders only.' The shop owner, who bought on an open-account credit basis, typed across an order form: 'Send 50 pots immediately at 10 percent discount. Payment within 10 days of receipt.' The importer shipped the 50 pots. The shop owner accepted them. The importer then billed the shop owner for the full price, pointing out the catalog terms. The shop owner paid the discounted price.",
        q: "If the importer sues for the balance, should the court find in the importer's favor?",
        opts: [
            "Yes, because the shop owner's order was on the importer's pre-printed order form.",
            "Yes, because the shop owner was aware that the discount applied only to COD shipments.",
            "No, because the shop owner had been doing business with the importer on an open account basis.",
            "No, because the importer accepted the shop owner's offer to purchase at a 10 percent discount."
        ],
        ans: 3,
        exp: "(D) is the correct response. A contract is formed upon acceptance of an offer. The shop owner's typed order form contained explicit, specific terms (50 pots, 10% discount, Net 10 days) and constituted a definite offer[cite: 5]. Under UCC § 2-206(1)(b), an order to purchase goods for prompt shipment invites acceptance by either a prompt promise to ship or prompt shipment of the goods[cite: 5]. When the importer shipped the pots without stating it was a mere accommodation, the shipment constituted an acceptance of the shop owner's exact offer[cite: 5]. The terms of that offer (10% discount) governed the contract[cite: 5]. (A) is incorrect because typing specific terms across a form overrides contradictory pre-printed text[cite: 5]. (B) is incorrect because the shop owner made a counteroffer for different terms, which the importer accepted by shipping[cite: 5]. (C) is incorrect because past open-account dealing does not dictate the terms of a new, explicit offer[cite: 5]."
    }
];
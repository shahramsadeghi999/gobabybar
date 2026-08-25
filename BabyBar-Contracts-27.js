const examData = [
    {
        id: 1,
        topic: "Defenses / Infancy Affirmation",
        fp: "A 17-year-old boy signed a contract to buy a moped from a moped dealer for $500 down and $50 per month for 36 months. The boy used the moped to get to school. The boy made monthly payments until his 19th birthday when the boy's uncle gave him an old car to drive because 'it was way too cold to be riding a moped to school.' The boy then called the dealer and said that he would return the moped and stop making payments. When the dealer protested, the boy correctly pointed out that the age of majority in the state was 18. The dealer sued the boy for the remaining payments owed on the contract.",
        q: "Is the dealer entitled to the remaining payments owed on the contract?",
        opts: [
            "No, because the boy was under the age of majority when he signed the contract.",
            "No, because the boy offered to return the moped.",
            "Yes, because the boy used the moped to get to school.",
            "Yes, because the boy made payments until his 19th birthday."
        ],
        ans: 3,
        exp: "While minors generally lack the capacity to enter a binding contract (making it voidable at their option), a contract will be enforced if the minor affirms the contract after reaching the age of majority[cite: 32]. A minor can affirm a contract either expressly or by conduct, such as continuing to honor the contract or making payments after reaching the age of majority[cite: 32]. Here, since the state age of majority was 18 and the boy continued to voluntarily make payments until his 19th birthday, the boy affirmed the contract by conduct, rendering it fully enforceable[cite: 32]."
    },
    {
        id: 2,
        topic: "Remedies / Expectation Damages (Mitigation)",
        fp: "A furniture dealer had 500 chairs for sale. The chairs had a fair market value of $100 each. The manufacturer had discontinued production of the chairs, however, and they were the last ones the dealer had. For that reason, the dealer advertised them at $75 each, even though at that price, her profit would be only $10 per chair. An interior decorator had contracted with the dealer to provide furniture for a new hotel. On May 4, after seeing the chairs advertised, the decorator wired the dealer, 'Please ship me 500 chairs as advertised at $75 per chair COD.' On May 5, immediately upon receipt of the telegram, the dealer wired the decorator, 'Accept your offer. Will ship 500 chairs tomorrow.' The decorator telephoned the dealer immediately upon receipt of the dealer's telegram on May 6, saying that, after discussing the chairs with his client, he had decided to cancel the order. On May 7, the dealer sold all the chairs to another buyer at $75 each.",
        q: "If the dealer sued the decorator for breach of contract, how much money, if any, should the court award the dealer?",
        opts: [
            "$5,000 (500 chairs at $10 profit per chair).",
            "$37,500 (500 chairs at $75 per chair).",
            "$12,500 (fair market value of $100 minus contract price of $75 times 500 chairs).",
            "Nothing, since the dealer sustained no damage."
        ],
        ans: 3,
        exp: "Expectation damages are designed to put the non-breaching party in the position they would have occupied had the contract been performed[cite: 32]. Because the dealer successfully mitigated the breach by immediately selling the exact same chairs to another buyer for the exact same contract price ($75), the dealer sustained no actual financial damage[cite: 32]. Furthermore, because these were discontinued, finite items (the 'last ones the dealer had'), the dealer does not qualify as a 'lost volume seller' who could claim the lost profit of a second sale[cite: 32]. Thus, the dealer lost nothing[cite: 32]."
    },
    {
        id: 3,
        topic: "Excuses / Impossibility",
        fp: "On March 12, the plaintiff hired the defendant to construct a three-car garage on the plaintiff's realty. After negotiation, they entered into a valid written contract that fixed the price at $8,000. According to the terms of the contract, the plaintiff was to pay $4,000 when the work was half completed, on or before April 25, and to pay the balance upon completion. All work was to be completed by June 1. On April 10, when the work was one-quarter complete, the partial structure was totally destroyed in a fire that started without fault by either party. The damage done by the fire made it impossible to complete construction on time. Because he was committed to begin construction on a hotel on June 1, the defendant notified the plaintiff on April 12 that he would perform no further work for the plaintiff. The plaintiff subsequently hired another contractor to build the garage at a price of $9,000. The plaintiff instituted an action against the defendant for damages resulting from breach of contract, and the defendant asserted a defense based on impossibility of performance.",
        q: "Should the court find in favor of the defendant?",
        opts: [
            "Yes, because the fire was not his fault.",
            "Yes, because he has not yet received any compensation from the plaintiff.",
            "No, because the work was only one-quarter complete when fire destroyed the structure.",
            "No, because the defendant's obligation was to work for the plaintiff until June 1."
        ],
        ans: 0,
        exp: "If an unforeseeable event makes performance of a specific contractual obligation objectively impossible, performance is excused[cite: 32]. While the destruction of a building under construction generally does not excuse a builder from ultimately finishing the structure, the specific issue here is that the fire made it 'impossible to complete construction on time'[cite: 32]. Because the defendant's contractual obligation was bound to the strict June 1 deadline, and the fire rendered meeting that precise timeline objectively impossible, the defendant's failure to perform by the deadline is excused[cite: 32]."
    },
    {
        id: 4,
        topic: "Performance / Right to Inspect (UCC)",
        fp: "The buyer agreed to purchase 250 2\"x4\" construction-grade wooden studs from the seller by a written contract that provided that the buyer would make payment prior to inspection. The studs were delivered to the buyer by truck and were covered with a canvas tarpaulin when they arrived at the buyer's work site. The driver demanded payment before he would unload or uncover the studs. The buyer refused to pay for the studs before inspecting them, and the driver returned them to the seller.",
        q: "If the seller asserts a claim for breach of contract against the buyer, should the court rule in favor of the seller?",
        opts: [
            "Yes, because the buyer's refusal to pay prior to inspection was a breach.",
            "Yes, because the buyer's refusal to pay prior to inspection was an anticipatory repudiation.",
            "No, because the contract provision calling for payment prior to inspection was unconscionable.",
            "No, because the seller failed to deliver the studs."
        ],
        ans: 0,
        exp: "Under the UCC, a buyer is generally entitled to inspect goods prior to making payment or accepting them[cite: 32]. However, the UCC explicitly allows the parties to agree that payment is required before inspection[cite: 32]. Such clauses are legally valid and not unconscionable[cite: 32]. Because the written contract contained this explicit provision, the buyer's refusal to make payment upon delivery constituted an immediate breach of the agreement[cite: 32]."
    },
    {
        id: 5,
        topic: "Formation / Unilateral Contract",
        fp: "A manufacturer of computer hardware and software was seeking a way to speed up the operation of its Basic Computer Program. On March 1, it posted the following notice in the employees' lounge: 'The stockholders of this company are offering a cash prize of $200 to any employee who develops a modification of the Basic Computer Program that will double its operating speed. Design modification entries should be submitted to the head of the Basic Program Department prior to June 1. In the event that modifications are submitted by more than one employee, the prize will go to the employee who submits the design which, in the opinion of the Basic Program Department, can be used most economically.' An engineer employed by the company read the notice on March 5, and immediately began working on program modifications in his spare time. On March 8, he wrote and signed a memo that said, 'I accept the stockholders' offer of a $200 prize for redesigning the Basic Computer Program. I am hard at work on the project and expect to submit my modification design within a week or two.' The engineer sent the note to the head of the Basic Program Department by the interoffice correspondence system, but it was somehow diverted and was never received by the department head.",
        q: "What is the best characterization of the notice that was posted on March 1?",
        opts: [
            "An offer for a unilateral contract.",
            "An offer for a bilateral contract.",
            "An offer for a unilateral contract that ripened into a bilateral contract when the engineer wrote the memo on March 8 and deposited it in the interoffice correspondence system.",
            "A preliminary invitation to deal, analogous to a newspaper advertisement for the sale of goods."
        ],
        ans: 0,
        exp: "A unilateral contract is an offer that seeks performance in return, rather than a promise to perform[cite: 32]. Here, the company promised to pay the $200 prize only if an employee actually successfully designed and submitted the winning modification[cite: 32]. It did not seek or require a return promise to attempt the work[cite: 32]. Therefore, the notice was a classic offer for a unilateral contract, which can only be accepted by complete performance[cite: 32]."
    },
    {
        id: 6,
        topic: "Third Parties / Assignment (Anti-Assignment Clause)",
        fp: "When he moved into a new condo, the owner entered into a written contract with a gardener. Pursuant to its terms, the gardener was to perform certain specified gardening services in the yard of the condo each week for a period of one year, for which the owner was to pay the sum of $50 per month. The contract contained a clause that stated, 'The condo owner hereby agrees not to assign this contract without the written permission of the gardener.' Three months after entering into the agreement, the owner informed the gardener that he was selling the condominium to the plaintiff, and asked the gardener to consent to the owner's assignment of the contract to the plaintiff. Because the costs of landscaping materials had increased dramatically in the last three months, the gardener was glad for an opportunity to be relieved of his obligations under the contract and refused to consent to the assignment. The owner assigned the contract to the plaintiff anyway, but the gardener refused to perform any further work on the yard. After formally demanding performance from the gardener, the plaintiff hired another gardener to do the same work for $75 per month, which was the best price the plaintiff could negotiate.",
        q: "In an action by the plaintiff against the gardener for breach of contract, should the court find in favor of the plaintiff?",
        opts: [
            "Yes, because the gardener had no right to unreasonably withhold consent to the assignment.",
            "Yes, because the assignment was valid in spite of the gardener's refusal to consent.",
            "No, because the contract prohibited assignment by the owner without the gardener's consent.",
            "No, because the contract was for personal services."
        ],
        ans: 1,
        exp: "Under modern contract law, a general contractual clause stating that a party 'agrees not to assign' the contract is interpreted merely as a covenant not to assign, rather than a condition that automatically voids any attempted assignment[cite: 32]. While assigning the contract without permission is a technical breach for which the assignor could be sued for resulting damages, the assignment itself remains valid and enforceable[cite: 32]. Furthermore, because the duties involve routine yard maintenance at a specific location, the assignment does not materially increase the gardener's burden or constitute a non-delegable unique personal service[cite: 32]. Thus, the assignee (plaintiff) may enforce the contract[cite: 32]."
    },
    {
        id: 7,
        topic: "Consideration / Pre-existing Duty Rule",
        fp: "On June 1, after arson fires had damaged several city buildings, the city council voted to offer a reward to aid in apprehension of the arsonists. On June 2, by order of the city council, signs were posted in various locations throughout the city. The posters identified the buildings that had been burned and stated: '$1,000 REWARD is hereby offered by the city to any person furnishing information leading to the conviction of persons responsible for setting fire to said buildings.' A police officer employed by the city saw the posters on June 5 and resolved to make a special effort to catch the arsonists. Although he was not officially assigned to the case, he notified his fellow police officers and his usual underworld informants that he was especially interested in the case. As a result, another police officer and an underworld informant passed information to the police officer that they thought might relate to the arson crimes. The tip the first police officer received from the other officer proved to be of no assistance, but the tip he received from the informant led him to conduct a further investigation. His efforts eventually resulted in the arrest of two men who pleaded guilty to setting fires in public buildings. The first police officer demanded that the city council pay him $1,000, but the council refused.",
        q: "If the police officer institutes a lawsuit against the city for the $1,000 reward offered in the signs posted on June 2, which of the following would be the city's most effective argument in defense?",
        opts: [
            "The reward should go to the informant, since it was his information that eventually led to the arrest of the arsonists.",
            "The reward was not accepted, since the arsonists were not convicted but pleaded guilty.",
            "The police officer gave no consideration for the city's promise to pay a reward, since he was already obligated to attempt the apprehension of the arsonists.",
            "There was no enforceable promise by the city, since the offer was for a gratuitous cash award."
        ],
        ans: 2,
        exp: "Consideration requires a bargained-for exchange in which the promisee suffers a legal detriment[cite: 32]. Under the pre-existing duty rule, a promise to do something that a party is already legally obligated to do does not constitute valid consideration[cite: 32]. Because a sworn police officer already has a pre-existing legal duty to investigate crimes and apprehend suspects, his efforts to catch the arsonists provided no new legal detriment to support the city's promise of a reward[cite: 32]."
    },
    {
        id: 8,
        topic: "Terms / Parol Evidence Rule (Direct Contradiction)",
        fp: "An art collector visited a gallery and told the owner that she wanted to buy a statue by a particular artist. The owner showed the collector several different statues. Eventually, the collector and the owner signed a contract for a horse statue valued at $10,000. The next day, the owner had the horse statue shipped to the collector's home. The day after that, the collector returned to the gallery and told the owner that he had sent her the wrong statue. Specifically, the collector told the owner that she believed that she had bought a centaur statue for $10,000. The owner refused to change the statues, and the collector sued. In her claim, the collector argued that prior to signing the contract, the owner had agreed to sell her the centaur statue for $10,000. The owner denied that he agreed to sell the collector the centaur statue. Because there were no other witnesses, the collector asked the court to allow her to testify about the oral agreement. The owner objected.",
        q: "Should the court sustain the objection?",
        opts: [
            "No, because any ambiguity would be construed against the seller.",
            "No, because there were no other witnesses to the alleged oral agreement.",
            "Yes, because the alleged conversation took place prior to the execution of the contract.",
            "Yes, because the collector's testimony contradicts the written contract."
        ],
        ans: 3,
        exp: "The Parol Evidence Rule prohibits the introduction of extrinsic evidence of prior or contemporaneous oral agreements if that evidence directly contradicts the unambiguous terms of an integrated written contract[cite: 32]. Because the written contract explicitly specified a 'horse statue,' the collector's testimony attempting to prove a prior oral agreement for a 'centaur statue' directly contradicts the written document and must be excluded[cite: 32]."
    },
    {
        id: 9,
        topic: "Consideration / Past Consideration",
        fp: "The plaintiff was fishing on her boat when she heard a call for help. Looking around, she saw a man drowning and flailing his arms over his head. The plaintiff jumped into the water and swam toward the man, dropping her fishing gear into the lake and losing it in her effort to aid the man. She grabbed the man by the hair and swam to the shore, dragging him out of the water. The man was unconscious, but she gave him mouth-to-mouth resuscitation until he regained consciousness. When the man opened his eyes, he said, 'I know I can never repay you for saving my life, but I promise to pay you $100 the first of next month as a token of my gratitude.' A few days later, the man died from causes not related to the incident. The following month, the plaintiff made demand upon the man's executor for the $100 that the man promised her and for an additional $100, which was the value of the fishing gear that she lost in her attempt to rescue the man. The executor rejected both demands.",
        q: "If the plaintiff institutes an action for the value of her fishing gear against the executor of the man's estate, should the court rule in her favor?",
        opts: [
            "Yes, on a theory of quantum meruit.",
            "Yes, because danger invites rescue.",
            "No, because a reasonable person in the man's position would not have offered to pay for the loss of the fishing gear.",
            "No, because the man made no express promise to pay for the fishing gear."
        ],
        ans: 3,
        exp: "To recover for the lost fishing gear in a contract action, there must be an enforceable promise[cite: 32]. The man never expressly promised to pay for the lost gear; his promise was solely to pay $100 as a token of gratitude for saving his life (which itself is likely unenforceable as past consideration)[cite: 32]. Because the plaintiff acted in an emergency without commercial expectation of payment at the time (barring a quantum meruit claim), and the man made no express promise to reimburse the specific property loss, the executor is not liable[cite: 32]."
    },
    {
        id: 10,
        topic: "Performance / Condition Precedent",
        fp: "A woman's hobby was restoring and collecting antique automobiles. After acquiring an antique automobile, she contacted a body shop about having the car repainted. The body shop said that it would paint the car for $700 and would sell the woman a new bumper for an additional $150. Using an order blank from a pad that he purchased at a stationery store, the body shop's owner wrote out all the terms of the agreement. On a printed line marked 'PAYMENT,' he wrote, 'Paint job-$700, payable $300 in advance and $400 on completion. Bumper-$150 payable on delivery.' Both the body shop's owner and the woman signed at the bottom of the form.",
        q: "Which of the following statements most correctly describes the obligations set forth in the writing signed by the woman and the body shop owner?",
        opts: [
            "Payment by the woman of the initial $300 is a condition precedent to the body shop's obligation to paint the car, and the body shop's painting of the car is a condition precedent to the woman's obligation to pay the additional $400.",
            "Payment by the woman of the initial $300 is a condition precedent in form and substance to the body shop's obligation to paint the car, and the body shop's painting of the car is a condition precedent in form, but subsequent in substance to the woman's obligation to pay the additional $400.",
            "Payment by the woman and painting of the car by the body shop are concurrent conditions.",
            "Neither party's obligation to perform is conditioned upon performance by the other party."
        ],
        ans: 0,
        exp: "A condition precedent is an event that must occur before performance under a contract is due[cite: 32]. Because the contract expressly required $300 'in advance,' the buyer's payment of that sum is a condition precedent that must be fulfilled before the shop is obligated to begin painting[cite: 32]. Conversely, because the remaining $400 was explicitly due 'on completion,' the shop's completed paint job serves as a condition precedent to the buyer's obligation to make the final payment[cite: 32]."
    },
    {
        id: 11,
        topic: "Remedies / Mitigation of Damages",
        fp: "The plaintiff was employed by the defendant as department manager pursuant to a written contract. The contract was for a five-year term and fixed the plaintiff's compensation at $2,000 per month. The plaintiff's work was satisfactory, but two years after entering into the contract with him, the defendant reorganized the company. As a result of the reorganization, the plaintiff's department was eliminated, and the defendant terminated the plaintiff's employment. The plaintiff advertised in the 'jobs wanted' section of the newspaper, but he did not find a job until six months after his discharge, when he went to work for another company doing the same general sort of work that he had been doing for the defendant and earning the same salary.",
        q: "If the plaintiff was successful in a suit against the defendant for breach of the employment contract, what damages would he be entitled to?",
        opts: [
            "Severance pay in a sum equivalent to one month's salary.",
            "Severance pay in a sum equivalent to two months' salary.",
            "A sum equivalent to the salary that the plaintiff lost between the time of his discharge and the time he began working for the new company, plus the cost of advertising in the 'jobs wanted' section of the newspaper.",
            "A sum equivalent to the salary that the plaintiff would have received during the balance of the contract term."
        ],
        ans: 2,
        exp: "In an action for breach of an employment contract, the non-breaching employee is entitled to expectation damages designed to put them in the position they would have occupied had the contract been fulfilled[cite: 32]. However, the employee has a duty to mitigate damages[cite: 32]. Because the plaintiff successfully mitigated by securing a comparable job at an identical salary six months later, his recovery is limited to the six months of lost wages plus reasonable incidental expenses incurred in finding the new employment (the advertising costs)[cite: 32]."
    },
    {
        id: 12,
        topic: "Acceptance / Accommodation Shipment",
        fp: "A factory placed an emergency order for 2,000 metal screws from a manufacturer for immediate delivery. The manufacturer shipped 1,000 screws and a notice stating that the manufacturer did not have 2,000 screws and was shipping 1,000 screws as an accommodation in consideration of the factory's emergency.",
        q: "Have the parties formed an enforceable contract?",
        opts: [
            "Yes, because the manufacturer mailed the screws to the factory.",
            "Yes, because the factory placed an emergency order.",
            "No, because the manufacturer's notice and shipment was a counteroffer.",
            "No, because the manufacturer did not ship 2,000 metal screws."
        ],
        ans: 2,
        exp: "Under UCC § 2-206, an order for prompt shipment invites acceptance by either a prompt promise to ship or prompt shipment of conforming or non-conforming goods[cite: 32]. However, if the seller ships non-conforming goods and seasonably notifies the buyer that the shipment is offered only as an accommodation, the shipment does not constitute an acceptance and breach[cite: 32]. Instead, it serves as a counteroffer that the buyer may choose to accept or reject[cite: 32]. No contract is formed unless the factory accepts the accommodation shipment[cite: 32]."
    },
    {
        id: 13,
        topic: "Consideration / Forbearance to Sue",
        fp: "A young woman got into a car accident with a delivery driver. The woman's father told the driver that if he refrained from suing the woman, the woman's father would pay all of the driver's damages. The driver agreed, even though he believed that he had a very strong case against the young woman for negligence. Three months later, the driver gave the woman's father a bill for his damages. The woman's father refused to pay, correctly noting that a security camera at the scene showed the driver was primarily at fault for the accident. In response, the driver sued the woman's father for the cost of his damages from the accident.",
        q: "Does the woman's father owe the driver for the cost of his damages?",
        opts: [
            "No, because the driver was primarily at fault for the accident.",
            "No, because the woman's father's only connection to the accident was a familial one.",
            "Yes, because it was a bargained-for exchange.",
            "Yes, under the doctrine of promissory estoppel."
        ],
        ans: 2,
        exp: "A promise to surrender a legal claim is sufficient consideration to support a return promise if the claim is valid, or even if the claim is invalid, so long as the person surrendering the claim possessed an honest, good-faith belief in its validity[cite: 32]. The driver surrendered his right to sue the daughter in exchange for the father's promise to pay[cite: 32]. Because the driver honestly believed he had a strong case, this bargained-for forbearance constituted valid consideration, making the father's promise fully enforceable[cite: 32]."
    },
    {
        id: 14,
        topic: "Formation / UCC Firm Offer",
        fp: "A cowbell manufacturer sent a letter to a retail music store. The letter stated, 'I will sell you 50 cowbells at $5 per cowbell. This offer is good for 30 days from today's date.' The manufacturer signed and dated the letter. The retail store got the letter but didn't respond because it wasn't sure if cowbells would be a big seller that holiday season. Two weeks later, the cowbell manufacturer got a letter from a university marching band supplier saying that it would buy as many cowbells as the manufacturer could make at $7 per cowbell. The manufacturer accepted the supplier's offer and called the retail store to tell it that it revoked its offer to sell the store cowbells. Based on the manufacturer's earlier offer, the store had planned to make a big push to sell cowbells, although it hadn't informed the manufacturer by the time the manufacturer called to revoke. The store sued, arguing that the manufacturer could not revoke its offer.",
        q: "Did the manufacturer effectively revoke its offer?",
        opts: [
            "Yes, because the store had not communicated any acceptance to the manufacturer.",
            "Yes, because there was no consideration to support keeping the offer open.",
            "No, because the store had 30 days to accept the offer from the date of the letter.",
            "No, because the manufacturer did not communicate its revocation in writing."
        ],
        ans: 2,
        exp: "Under UCC § 2-205, a merchant's written and signed offer to buy or sell goods that assures the offeree it will be held open qualifies as an irrevocable 'firm offer,' even without independent consideration[cite: 32]. Because the cowbell manufacturer is a merchant, and the offer was in writing, signed, and explicitly guaranteed a 30-day window, it was a binding firm offer[cite: 32]. Therefore, the manufacturer lacked the legal power to revoke it prior to the expiration of the 30-day period[cite: 32]."
    },
    {
        id: 15,
        topic: "Consideration / Settlement of Disputed Claim",
        fp: "After the plaintiff said that the defendant owed him $3,000, the defendant promised to pay $2,000, which the plaintiff agreed to accept as payment in full. Subsequently, the defendant refused to make payment, and the plaintiff asserted a claim for $2,000 based on the defendant's promise.",
        q: "If it was the only one true at the time of the defendant's promise, which of the following additional facts or inferences would be most likely to result in a judgment for the plaintiff?",
        opts: [
            "The defendant honestly believed that he owed the plaintiff $3,000, but the plaintiff did not believe that the defendant owed him the money.",
            "The plaintiff honestly believed that the defendant owed him $3,000, but the defendant did not believe that he owed the plaintiff the money.",
            "The plaintiff was threatening to institute a lawsuit against the defendant for $3,000 plus costs and interest.",
            "The plaintiff had already commenced a lawsuit against the defendant for $3,000 plus costs and interest."
        ],
        ans: 1,
        exp: "A promise to accept a lesser sum in settlement of an existing debt requires new consideration to be enforceable[cite: 32]. If a claim is invalid or undisputed, accepting a lesser sum lacks consideration under the pre-existing duty rule[cite: 32]. However, if the party asserting the claim honestly believes it is valid, the forbearance from pursuing the full claim constitutes valid consideration for the promise to pay the lesser amount[cite: 32]. Therefore, if the plaintiff honestly believed the $3,000 debt was valid, the settlement is supported by consideration[cite: 32]."
    },
    {
        id: 16,
        topic: "Terms / Parol Evidence Rule Exception (Condition Precedent)",
        fp: "A building contractor's daughter was about to celebrate her 21st birthday, and the contractor wanted to give her a gift that would express his sentiments for her. He was a wealthy and successful contractor, but he had begun his career as an assistant bricklayer. Instead of purchasing something for his daughter, he decided to give her a gift with the labor of his hands. The contractor entered into a written contract with the defendant. According to its terms, the contractor agreed to build a brick fireplace for the defendant, performing all the labor himself. In return, the defendant agreed to pay the sum of $1,000 to the contractor's daughter on her birthday, February 12, upon completion of the work by the contractor to the defendant's satisfaction. The daughter did not learn of the transaction until February 12. Before signing the written contract, the defendant and the contractor agreed orally that the defendant would make a reasonable effort to obtain a loan to pay for the work, but that if the defendant was unsuccessful in doing so by January 1, the agreement between them would be of no effect. The defendant made efforts to obtain the loan but could not do so. On January 1, the defendant informed the contractor that because he was unable to obtain the loan, he was calling off the deal.",
        q: "In an action for breach of contract brought against the defendant by the proper party, will the defendant be successful in asserting as a defense his inability to obtain a loan?",
        opts: [
            "Yes, because obtaining a loan was a condition precedent to the existence of an enforceable contract.",
            "Yes, because a modification of a construction contract may be by oral agreement.",
            "No, because the defendant is estopped from denying the validity of the written agreement.",
            "No, because the agreement concerning the loan is an oral agreement that was made prior to the writing and it contradicts the terms of the writing."
        ],
        ans: 0,
        exp: "Although the Parol Evidence Rule generally prevents extrinsic evidence from modifying or contradicting the terms of a written agreement, there is a recognized exception for showing that the contract was subject to an oral condition precedent to its formation or effectiveness[cite: 32]. Because the parties orally agreed that the contract would have no effect unless the loan was obtained, this condition precedent to the contract's existence is admissible and provides a valid defense[cite: 32]."
    },
    {
        id: 17,
        topic: "Defenses / Statute of Frauds",
        fp: "Assume that the defendant in each of the following fact patterns objects to enforcement of the agreement on the ground that it violates the Statute of Frauds.",
        q: "In which of the following fact patterns is the agreement between the plaintiff and the defendant LEAST likely to be enforced over the defendant's objection?",
        opts: [
            "The defendant orally agreed to purchase a series of porcelain figurines from the plaintiff to be delivered one per week for 15 weeks at a price of $100 per figurine. Prior to the first delivery, the defendant advised the plaintiff that he was no longer interested in receiving the figurines.",
            "The defendant orally agreed to purchase a hand-carved entry door for the defendant's home with the defendant's coat of arms on it for a price of $600. After the plaintiff completed the rough carving of the defendant's coat of arms, the defendant changed her mind and notified the plaintiff that she would not accept delivery of the door.",
            "The defendant's pleadings admitted making an oral agreement to purchase a painting from the plaintiff for $900 but asserted as an affirmative defense that the agreement was unenforceable under the Statute of Frauds.",
            "The defendant orally agreed to a price of $1,200 for the purchase of 100 lawn-trimmers manufactured by the plaintiff for resale in the defendant's store. The plaintiff then sent the defendant a memorandum signed by the plaintiff and outlining the terms of their agreement. The defendant did not sign the memorandum or respond to it in any way."
        ],
        ans: 0,
        exp: "The Statute of Frauds requires a contract for the sale of goods over $500 to be in writing[cite: 32]. In the first option, the total price is $1,500 (15 weeks x $100), and there is no writing or recognized exception present, making it completely unenforceable[cite: 32]. The second option falls under the specially manufactured goods exception[cite: 32]. The third option falls under the judicial admission exception[cite: 32]. The fourth option falls under the merchant's confirmatory memo exception[cite: 32]. Thus, the oral contract in the first option is the least likely to be enforced."
    },
    {
        id: 18,
        topic: "Defenses / Infancy & Restitution",
        fp: "The plaintiff, a minor, purchased a used car from the defendant for $1,200. The reasonable rental value of the car was $150 per month. After she had owned the car for two months, the steering failed while she was driving it, causing it to collide with a tree. Although the plaintiff was unhurt, the car sustained $400 worth of damage. The plaintiff returned the damaged car to the defendant and demanded her money back, but the defendant refused to refund her money. The plaintiff sued the defendant.",
        q: "How much should the court award the plaintiff?",
        opts: [
            "$1,200 (the full purchase price of the car).",
            "$900 (the purchase price of the car less its reasonable rental value).",
            "$800 (the purchase price of the car less the damage that it sustained).",
            "Nothing."
        ],
        ans: 1,
        exp: "A minor may disaffirm a contract on the ground of incapacity[cite: 32]. However, if the disaffirming minor seeks restitution as the plaintiff, modern courts typically offset the minor's recovery by the reasonable value of the benefit the minor actually received (such as depreciation or fair rental value) prior to disaffirmance[cite: 32]. Here, the minor received two months of use at a fair rental value of $150/month ($300 total)[cite: 32]. The purchase price ($1,200) minus the benefit received ($300) equals a recovery of $900[cite: 32]."
    },
    {
        id: 19,
        topic: "Formation / Revocation of Unilateral Offer",
        fp: "A man lost his wedding ring while riding in a cross-state bike race. The man sent out a text to all of his bicycling contacts, offering a cash reward to anyone who found the ring. The man encouraged his contacts to post the reward on social media. A woman who did not know the man saw the text on a social media page. She rented a metal detector and walked the entire 100-mile bike race route. Towards the end of her searching, she found the man's ring. The woman called her friend, who called the man and said someone had found his ring. The man immediately sent out another text to all of his contacts and posted on social media that he had withdrawn the reward. The woman didn't see the man's revocation of the reward and went to the man's house to give him the ring and claim her money. The man took the ring but refused to pay the woman any reward. The woman sued, arguing that she was entitled to the reward money.",
        q: "Is the woman entitled to the reward money?",
        opts: [
            "Yes, because the woman didn't see the reward revocation.",
            "Yes, because the woman rented a metal detector and searched for the ring.",
            "No, because the man revoked the reward before the woman came to his house to accept it.",
            "No, because the woman did not tell the man that she had gone in search of the ring."
        ],
        ans: 1,
        exp: "The reward offered by the man was an offer for a unilateral contract, seeking performance rather than a return promise[cite: 32]. A unilateral offer becomes irrevocable once the offeree actually begins the requested performance[cite: 32]. Because the woman rented a metal detector and actively searched the 100-mile route, she had substantially begun performance, making the offer temporarily irrevocable as to her[cite: 32]. Therefore, the man's subsequent attempt to revoke the reward was legally ineffective[cite: 32]."
    },
    {
        id: 20,
        topic: "Terms / UCC Gap Fillers & Parol Evidence",
        fp: "The seller and the buyer entered into a written contract for the sale of 200 electric power drills. Although they orally agreed on a price, they inadvertently failed to include it among the terms of the written agreement.",
        q: "In an action for breach of the contract, what is the effect of the parties' failure to include a price?",
        opts: [
            "The court will admit oral testimony to establish the price that the parties intended.",
            "The court will refuse to enforce the contract if it is one that the Statute of Frauds required to be in writing.",
            "The court will conclude that the contract calls for the payment of a reasonable price.",
            "The court will disregard the writing since it fails to contain all the essential terms of the agreement."
        ],
        ans: 0,
        exp: "The UCC permits a contract to be formed even if terms are left open, utilizing gap fillers where necessary (such as setting a reasonable price if no price is agreed upon)[cite: 32]. However, where the parties did actually agree on a price but inadvertently omitted it from the writing due to a mutual mistake (a scrivener's error), the court can reform the contract to reflect the parties' true intentions[cite: 32]. Thus, the court will admit oral testimony (parol evidence) to establish the agreed-upon price[cite: 32]."
    },
    {
        id: 21,
        topic: "Terms / Parol Evidence Rule (Merger Clauses)",
        fp: "On May 15, after negotiation, a painter and a homeowner entered into a written agreement for the painting of the homeowner's home. The writing stated that the price was to be $300 plus the cost of materials, that the work was to begin on June 2 and be completed by June 12, that stucco portions of the house were to be painted yellow and wood trim was to be painted brown, and that the written memorandum was a full and final expression of the agreement between the painter and the homeowner. During litigation between the painter and the homeowner to enforce the contract, the homeowner offered to testify to the following additional facts.",
        q: "Which is the LEAST likely to be admitted into evidence over timely objection by the painter?",
        opts: [
            "Prior to signing the memorandum, the painter and the homeowner orally agreed that the contract would have no legal effect if the homeowner sold his house prior to June 2.",
            "Prior to signing the memorandum, the painter and the homeowner orally agreed that the homeowner would use no paint without first submitting it for the homeowner's approval.",
            "While signing the memorandum, the painter and the homeowner orally agreed that any promises made by either of them during negotiations were to be enforceable, even if they were omitted from the memorandum.",
            "While signing the memorandum, the painter and the homeowner orally agreed that the painter would spend no more than $10 per gallon for paint."
        ],
        ans: 2,
        exp: "The parol evidence rule prohibits the introduction of extrinsic evidence of prior or contemporaneous agreements to contradict or modify a completely integrated written contract[cite: 32]. Because the contract explicitly stated it was a 'full and final expression,' it contains a merger clause establishing complete integration[cite: 32]. The third option directly contradicts the merger clause itself by attempting to establish that prior unwritten promises remain enforceable despite the integration, which is fundamentally barred by the parol evidence rule[cite: 32]."
    },
    {
        id: 22,
        topic: "Third Parties / Assignment (Anti-Assignment Clause)",
        fp: "On May 20, on a form provided by an air-conditioning company, the defendant agreed to purchase from the company 100 described air-conditioning units at a price of $250 each, FOB the company's factory. The contract contained a clause that prohibited either party from assigning its rights or obligations under the contract without the consent of the other party. On June 1, the company's employees loaded the units on a truck owned and operated by an independent trucking company. When the loading was complete, the air-conditioning company phoned the defendant that the shipment was on its way. Later that day, the company executed a document that contained the following language: 'In consideration of $20,000 to me in hand paid by the plaintiff this date, I hereby assign to the plaintiff all rights under my contract with the defendant dated May 20.' On June 2, while en route to the defendant's warehouse, the truck containing the air-conditioning units overturned, and the entire shipment was destroyed. The defendant did not consent to the company's assignment of rights to the plaintiff.",
        q: "In an action by the plaintiff against the defendant, how much may the plaintiff recover?",
        opts: [
            "The contract price of $25,000 (100 air-conditioning units at $250 each).",
            "The difference between the contract price and the market value of the air-conditioning units.",
            "Nothing, since recovery from the defendant would unjustly enrich the plaintiff.",
            "Nothing, since the contract between the defendant and the plaintiff prohibited assignment."
        ],
        ans: 0,
        exp: "The contract was 'FOB the company's factory' (a shipment contract), meaning the risk of loss passed to the buyer when the goods were delivered to the carrier[cite: 32]. Thus, the buyer owed the contract price when the goods were subsequently destroyed[cite: 32]. Regarding the assignment, a general no-assignment clause only destroys the 'right' to assign, not the 'power,' and transferring the right to receive payment is widely protected and generally cannot be prohibited[cite: 32]. Therefore, the assignment was valid, and the plaintiff assignee can collect the full $25,000 contract price from the buyer[cite: 32]."
    },
    {
        id: 23,
        topic: "Formation / Statute of Frauds Modification",
        fp: "A world-renowned artist's will left a collection of 30 of his paintings to his niece, an art dealer. The paintings inherited by the niece were untitled, but they were identified by the numbers 1 through 30. The niece had a catalog printed containing photographs and descriptions of each painting in the collection. On August 1, she sent a copy of the catalog to another art dealer, with the following cover letter: 'I know how much you like my uncle's work, so I'm giving you an opportunity to buy some of these paintings before I offer them to any other dealers. The price is $2,000 per painting, no matter how many you buy. Telegraph your order within two weeks, or I'll put them on the market.' On August 2, the art dealer sent the niece a telegram that said, 'I accept your offer to sell painting Number 30 for $2,000. I will come to your gallery in two days to pick up the painting and will pay cash at that time.' On August 3, after receiving the telegram, the niece telephoned the dealer and said that because of favorable publicity that the collection had received, she would not sell painting Number 30 for less than $3,000. The dealer agreed on the telephone to pay $3,000 for painting Number 30. Between August 1 and August 3 the fair market value of the painting increased by $1,000. On August 4, the dealer sent and the niece received a telegram that said, 'I accept your offer to sell your uncle's paintings 1 through 29 for $2,000 each. I will pick up the paintings tomorrow and will pay for them at that time.' On August 5, the dealer presented herself at the niece's gallery and tendered payment of $2,000 each for all 30 paintings. However, the niece refused to sell her any of the paintings except Number 30, for which the niece insisted the agreed price was $3,000. The dealer left without buying it, saying that the niece would be hearing from her lawyer.",
        q: "The niece asserted a claim against the dealer for breach of a contract to purchase painting Number 30 for $3,000. Should the court rule in the niece's favor?",
        opts: [
            "No, because her promise to pay $3,000 for the painting was not in writing.",
            "No, because the increase in the fair market value of painting Number 30 was not anticipated by the parties.",
            "Yes, because she relied on the dealer's promise to pay $3,000 for painting Number 30.",
            "Yes, because she had not received payment from the dealer prior to their conversation on August 3."
        ],
        ans: 0,
        exp: "The initial telegram acceptance for $2,000 formed a valid contract within the Statute of Frauds[cite: 32]. Under the UCC, an agreement modifying a contract must satisfy the Statute of Frauds if the contract as modified falls within its provisions[cite: 32]. Because the modified price was $3,000 (well over the $500 threshold), the modification was required to be in writing[cite: 32]. Since the dealer's agreement to pay the higher price was strictly oral, the modification was unenforceable, leaving the original $2,000 contract intact and defeating the niece's claim for $3,000[cite: 32]."
    },
    {
        id: 24,
        topic: "Formation / Requirements Contract",
        fp: "A restaurant entered into an agreement with a brewery where the restaurant agreed to buy all of its beer from the brewery for one year. The restaurant sent a signed copy of the agreement to the brewery, but the brewery never signed it or returned a copy to the restaurant. However, the brewery did increase its beer production to meet the restaurant's needs. A month later, a new popular brewpub opened nearby. The restaurant bought 20 kegs of beer from the brewpub. The brewery called the restaurant and demanded that the restaurant conform to the terms of its agreement with the brewery. The restaurant correctly noted that the signed copy of the agreement contained no specifics as to the quantity of beer it had to buy from the brewery. The brewery sued to enforce the agreement.",
        q: "Should the court rule in the brewery's favor?",
        opts: [
            "Yes, because the brewery acted in reliance on the restaurant's promise.",
            "Yes, because the agreement was a valid requirements contract.",
            "No, because the brewery never signed the agreement.",
            "No, because the signed agreement contained no quantity term."
        ],
        ans: 1,
        exp: "A valid requirements contract is created when a buyer agrees to purchase all of its requirements for a particular good from a single seller[cite: 32]. Under the UCC, such contracts are enforceable even without a specific numerical quantity term, as the UCC imposes an obligation of good faith in determining the actual quantities required[cite: 32]. The restaurant's written, signed offer to buy all of its beer from the brewery formed a valid, enforceable requirements contract[cite: 32]."
    },
    {
        id: 25,
        topic: "Terms / UCC Modification & SOF",
        fp: "On August 1, a wholesaler of office supplies contracted by telephone to sell 50 cases of typewriter ribbons to a business equipment retailer at a total price of $450. On August 15, the wholesaler telephoned the retailer and told him that because of a shortage of materials, the price that the wholesaler had to pay for typewriter ribbons had increased drastically. The wholesaler said that if he delivered the ribbons at the price of $450, he would lose a great deal of money. He asked the retailer to consent to a higher price, suggesting that the retailer pass the increase along to his customers. After further discussion, the retailer and the wholesaler agreed to change the price of the order from $450 to $650. On August 18, the retailer succeeded in purchasing 50 cases of typewriter ribbons from another supplier for $500. On September 1, the wholesaler delivered 50 cases of typewriter ribbons to the retailer, together with a bill for $650. The retailer rejected the delivery.",
        q: "In an action by the wholesaler against the retailer for breach of contract, which of the following would be the retailer's most effective argument in defense?",
        opts: [
            "The wholesaler's demand for more money was unconscionable, since typewriter ribbons were available at a lower price.",
            "The August 15 agreement increasing the price was not in writing.",
            "The retailer's promise to pay $650 was unsupported by consideration.",
            "An increase in the wholesaler's cost resulting from a shortage of materials was foreseeable on August 1."
        ],
        ans: 1,
        exp: "Under the UCC, a contract modification needs no consideration to be binding, provided it is made in good faith[cite: 32]. However, if the contract as modified falls within the provisions of the Statute of Frauds (sale of goods for $500 or more), the modification must be in writing[cite: 32]. Because the oral modification increased the price from $450 to $650, it crossed the Statute of Frauds threshold, rendering the unwritten modification unenforceable[cite: 32]."
    }
];
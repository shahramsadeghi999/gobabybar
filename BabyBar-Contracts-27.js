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
        exp: "While minors generally lack the capacity to enter a contract, a contract will be enforced if the minor affirms the contract after reaching majority. A minor can affirm a contract either expressly or by conduct such as continuing to honor the contract after reaching the age of majority. Here, since the state age of majority was 18 and the boy continued to make payments until his 19th birthday, the boy affirmed the contract and the contract can be enforced.\n\nA is incorrect because the boy affirmed the contract. B is incorrect because the boy's offer to return the moped would not change the analysis. C is incorrect because the fact that the boy used the moped to get to school would not make the underlying contract enforceable."
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
        exp: "Since the dealer sold the chairs to another buyer at the same price that the decorator had contracted to pay, the dealer sustained no damage. Where there is no limit to the availability of the items sold, some cases allow a seller to recover lost profits when a buyer cancels, reasoning that even though the seller resold at the same price, he or she would have made two sales instead of one if the buyer had not breached. Since there were no more chairs to sell, however, the dealer lost nothing.\n\nA is therefore incorrect. An action for the price might be available where traditional calculation of damages would be inadequate, but B is incorrect because the dealer has suffered no damages. C correctly states the remedy that would have been available to the decorator in the event of a breach by the dealer. Because the fair market value exceeds the contract price, however, the formula expressed in C bears no relationship to damages suffered by the dealer as a result of the decorator's breach. C is therefore incorrect."
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
        exp: "If an event that was not foreseeable to the parties at the time a contract was formed makes performance of the contract impossible, such performance is excused. In the absence of facts that specifically suggest the contrary, destruction of the subject matter of a contract is usually held to have been unforeseeable by the parties at the time of contracting.\n\nAt the time the fire occurred, the plaintiff was not in breach because he was not required to make payment until the garage was half complete, and the defendant was not in breach because he was not required to be half finished until April 25. B and C are therefore incorrect. It is usually held that impossibility excuses performance only to the extent that performance has been made impossible. D is incorrect, however, because the contract was not for labor until June 1, but rather for construction of the garage by June 1, and the fire has made completion by that date impossible."
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
        exp: "The UCC provides that where there is no agreement to the contrary, a buyer is entitled to inspect goods prior to making payment or accepting them. It provides further, however, that the parties may agree that payment is required before inspection. If so, failure to make payment upon delivery of the goods is a breach.\n\nAnticipatory repudiation occurs when, prior to the time when performance is required, a party indicates by word or deed that he or she will not perform. B is incorrect because the buyer's refusal to pay occurred at the time payment was required, and therefore constituted a breach. The UCC provides that even if payment is made prior to inspection, no acceptance occurs until after the buyer has had a reasonable opportunity to inspect. In view of this provision, a promise to pay prior to inspection is not unconscionable, and C is incorrect. Since the seller tendered delivery in accordance with the terms of the contract, D is incorrect."
    },
    {
        id: 5,
        topic: "Formation / Unilateral Contract",
        fp: "A manufacturer of computer hardware and software was seeking a way to speed up the operation of its Basic Computer Program. On March 1, it posted the following notice in the employees' lounge:\n\nThe stockholders of this company are offering a cash prize of $200 to any employee who develops a modification of the Basic Computer Program that will double its operating speed. Design modification entries should be submitted to the head of the Basic Program Department prior to June 1. In the event that modifications are submitted by more than one employee, the prize will go to the employee who submits the design which, in the opinion of the Basic Program Department, can be used most economically.\n\nAn engineer employed by the company read the notice on March 5, and immediately began working on program modifications in his spare time. On March 8, he wrote and signed a memo that said, 'I accept the stockholders' offer of a $200 prize for redesigning the Basic Computer Program. I am hard at work on the project and expect to submit my modification design within a week or two.' The engineer sent the note to the head of the Basic Program Department by the interoffice correspondence system, but it was somehow diverted and was never received by the department head.",
        q: "What is the best characterization of the notice that was posted on March 1?",
        opts: [
            "An offer for a unilateral contract.",
            "An offer for a bilateral contract.",
            "An offer for a unilateral contract that ripened into a bilateral contract when the engineer wrote the memo on March 8 and deposited it in the interoffice correspondence system.",
            "A preliminary invitation to deal, analogous to a newspaper advertisement for the sale of goods."
        ],
        ans: 0,
        exp: "A unilateral contract is a promise to perform in exchange for a specified act by the promisee. Since the company promised to make payment to the employee who submitted the winning design, its offer was for a unilateral contract.\n\nA bilateral contract is an exchange of promises, each given in return for the other. Since the company promised to pay only if the modification design was actually submitted, and asked for no promise in return for its promise to pay, B is incorrect. The company's notice made clear its intention to pay only one prize and its obligation to pay only upon receipt of a design that complied with its requirements. Its promise, therefore, could not have been given in exchange for the promise contained in the engineer's March 8 memo, even if that memo had been received. C is therefore incorrect. The key difference between an offer and an invitation to negotiate is that an offer creates an immediate power of acceptance in the offeree. Since any employee could have accepted the company's offer of a reward by successfully designing and submitting the required program modification, D is incorrect."
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
        exp: "If a promise not to assign a contract is enforceable, it is like any other promise, in that damages may be available as a remedy for its breach. An assignment made in violation of such a promise is usually regarded as valid, however. This means that even though the gardener may be entitled to recover from the owner for damages resulting from the owner's assignment to the plaintiff, the plaintiff may enforce the contract against the gardener.\n\nC is therefore incorrect. A is incorrect because a promise not to assign without a party's consent does not require that party to act reasonably in deciding whether or not to consent. It is generally understood that a contract involving personal services is not assignable because an assignment of such a contract may increase the obligor's burden. Since the contract between the owner and the gardener specified the tasks that the gardener was to perform, and since a change in obligee (i.e., in the ownership of the condominium) would not alter those tasks, assignment to the plaintiff did not increase the gardener's burden. For this reason, the contract should not be regarded as one calling for personal services, and D is incorrect."
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
        exp: "Consideration is a benefit to the promisor or a detriment to the promisee that was bargained for and given in return for the promisor's promise. For this reason, if the police officer did something that he was already obligated to do, his act could not be consideration for the city's promise to pay since no new benefit was given to the city and no detriment was sustained by the police officer in return for that promise. A police officer's obligation to his employer includes the duty to attempt to apprehend criminals, so the police officer's performance was of a preexisting duty.\n\nA is incorrect because establishing that the informant is entitled to the reward does not necessarily establish that the police officer (or anybody else) is not entitled to it as well. B is incorrect because a guilty plea is a conviction. Since the city's promise was to pay in return for information leading to a conviction, it was an offer to pay for something of value, not an offer for a gratuitous cash award. D is therefore incorrect."
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
        exp: "The parol evidence rule prohibits the introduction of extrinsic evidence of prior or contemporaneous agreements offered to contradict, vary, or modify an unambiguous writing that the parties intended to be a full and final expression of their agreement (i.e., a 'complete integration'). Here, the collector's assertion that the agreement was for the centaur statue and not the horse statue clearly contradicts the agreement.\n\nA is incorrect because the collector's testimony directly contradicts the written contract. B is incorrect because the fact that there were no other witnesses would not change the analysis. C is incorrect because parol evidence could be used to clarify an ambiguous contract if it doesn't contradict the contract."
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
        exp: "The man made no express promise to pay for the fishing gear. There was no implied promise because there is no fact indicating that the plaintiff acted with the expectation of compensation or reimbursement for her losses. The executor is therefore not bound to pay for her loss.\n\nQuantum meruit is available to prevent unjust enrichment only where services were rendered under circumstances such that the party from whom payment is sought was aware of the other party's expectation of payment. A is therefore incorrect. The phrase 'danger invites rescue' has been used in tort cases to explain why one who creates a peril owes a duty of care to a person attempting to rescue another from it. B is incorrect, however, because the principle has no application in contract problems. Since there is no indication that the man promised to pay for the fishing gear, the fact that someone else in his position would have is irrelevant, making C incorrect."
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
        exp: "Performance of one of a series of mutual promises is a condition precedent to others in the series if the circumstances indicate that it should obviously precede the others. Since the writing called for payment of $300 in advance, it is obvious that the parties intended that it should be paid before the work commenced. The woman's payment of $300 was thus a condition precedent to the body shop's obligation to paint. Since the contract called for the payment of an additional $400 after completion, it is obvious that the parties intended that the paint job should be finished before payment of the additional money was required. Completion of the paint job is thus a condition precedent to the woman's obligation to pay the additional $400.\n\nA condition subsequent is an event the occurrence or non-occurrence of which operates to discharge a duty that had already become absolute. Since the body shop was obligated to paint before receiving the additional $400, and since it could not undo the paint job once it was completed, the woman's payment of the additional $400 cannot be called a condition subsequent to the body shop's obligation to paint the car. B is therefore incorrect. Concurrent conditions require the parties to exchange performance simultaneously. C is incorrect because the language of the contract makes it obvious that the parties intended a consecutive order of performance (i.e., the woman pays $300, the body shop completes paint job, the woman pays $400). Since the agreement required partial payment in advance and completion of the job before the balance was due, D is incorrect."
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
        exp: "In an action for breach of an employment contract, a non-breaching employee is entitled to receive the full contract price for the balance of the term plus consequential damages, less damages avoided by mitigation. Since the plaintiff mitigated damages by taking a job with another company at the same salary, he is entitled to what he lost between the discharge and the beginning of his new job. His advertising expenses are collectible as consequential damages.\n\nAn employment contract may require payment of severance pay in the event of termination, but absent such agreement, there is no such legal requirement. A and B are therefore incorrect. D is incorrect because the plaintiff's work for the new company at the same salary mitigated his damages."
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
        exp: "Under the UCC, if a seller ships a shipment of nonconforming goods along with a notice that the shipment is offered as an accommodation, the shipment is a counteroffer that the buyer can choose to accept or reject. Here, the manufacturer shipped a shipment of nonconforming goods (1,000 screws instead of 2,000) and a notice that the shipment was intended as an accommodation. Consequently, the shipment and notice acts as a counteroffer and no contract has been formed.\n\nA and B are incorrect because a nonconforming shipment with a notice of accommodation acts as a counteroffer. D is incorrect because the manufacturer sent 1,000 screws and a notice of accommodation. Because of this, C is a more accurate and complete answer."
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
        exp: "There is a bargained-for exchange to support a contract when one party makes a promise or undertakes a performance in exchange for the other party's promise or performance. Here, the woman's father promised to give the driver money in exchange for the driver's promise not to sue.\n\nA is incorrect because even if the driver does not have a great claim, he still gave up his right to sue in exchange for the woman's father's promise to pay his damages. B is incorrect because the woman's father made a promise in exchange for the driver's promise. D is incorrect because there is an enforceable agreement between the woman's father and the driver."
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
        exp: "Under UCC § 2-205, a merchant's promise to hold an offer open is an irrevocable firm offer if the offer is in writing, signed by the merchant, and expressly states that it will be held open. A firm offer can be irrevocable for up to 90 days. Here, the cowbell manufacturer was a merchant, the offer was signed and in writing, and the merchant stated that it would hold the offer open for 30 days. Consequently, the manufacturer's offer met all the requirements of a firm offer and the manufacturer could not revoke that offer for the promised 30 days.\n\nA is incorrect because the store did not need to communicate any acceptance to the manufacturer for 30 days by the terms of the manufacturer's firm offer. B is incorrect because a merchant's firm offer does not need consideration to be irrevocable. D is incorrect because the firm offer gave the store 30 days to accept."
    },
    {
        id: 15,
        topic: "Consideration / Settlement of Disputed Claim",
        fp: "After the plaintiff said that the defendant owed him $3,000, the defendant promised to pay $2,000, which the plaintiff agreed to accept as payment in full. Subsequently, the defendant refused to make payment, and the plaintiff asserted a claim for $2,000 based on the defendant's promise. If it was the only one true at the time of the defendant's promise, which of the following additional facts or inferences would be most likely to result in a judgment for the plaintiff?",
        q: "If it was the only one true at the time of the defendant's promise, which of the following additional facts or inferences would be most likely to result in a judgment for the plaintiff?",
        opts: [
            "The defendant honestly believed that he owed the plaintiff $3,000, but the plaintiff did not believe that the defendant owed him the money.",
            "The plaintiff honestly believed that the defendant owed him $3,000, but the defendant did not believe that he owed the plaintiff the money.",
            "The plaintiff was threatening to institute a lawsuit against the defendant for $3,000 plus costs and interest.",
            "The plaintiff had already commenced a lawsuit against the defendant for $3,000 plus costs and interest."
        ],
        ans: 1,
        exp: "Usually, a promise is unenforceable unless it is supported by consideration. Consideration is a bargained-for exchange of value given for a promise and may consist of benefit to the promisor or detriment to the promisee. If an alleged debt is invalid, a person who promises to pay a sum in settlement of it receives no benefit in return for his or her promise. Similarly, if a person who receives such a promise does not honestly believe that the debt is valid, he or she suffers no detriment by agreeing to accept less in settlement. For this reason, a promise to pay a sum of money to settle a claim for debt is supported by consideration if the debt is valid or the person asserting the claim believes that it is. Thus, if the plaintiff honestly believed that the defendant owed him $3,000, his agreement to accept $2,000 was consideration for the defendant's promise, making the promise enforceable.\n\nOn the other hand, if the plaintiff did not believe that the defendant owed him the money, the plaintiff suffered no detriment and the defendant received no benefit in return for the defendant's promise. Since the promise would, thus, be unsupported by consideration, it would be unenforceable. A is therefore incorrect. C and D are incorrect because unless the debt actually existed or the plaintiff believed that it did, his agreement to accept $2,000 would not be consideration for the defendant's promise to pay it."
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
        exp: "Although the parol evidence rule prevents the introduction of extrinsic evidence for the purpose of modifying the terms of certain written memorandums, it does not prevent the admission of such testimony for the purpose of establishing that no contract was ever formed. Since the oral agreement made before execution of the writing establishes a condition precedent to the formation of a contract, it is admissible.\n\nAn agreement to modify a contract is one that is made after formation of the contract. B is incorrect because the oral agreement regarding the loan was made before execution of the written contract. Since the defendant has not asserted that the written agreement is valid, there is no reason why he should be estopped from denying that it is. C is therefore incorrect. D is incorrect because the oral agreement relates to the formation of the contract and does not modify or contradict its terms."
    },
    {
        id: 17,
        topic: "Defenses / Statute of Frauds",
        fp: "Assume that the defendant in each of the following fact patterns objects to enforcement of the agreement on the ground that it violates the Statute of Frauds. In which of the following fact patterns is the agreement between the plaintiff and the defendant LEAST likely to be enforced over the defendant's objection?",
        q: "In which of the following fact patterns is the agreement between the plaintiff and the defendant LEAST likely to be enforced over the defendant's objection?",
        opts: [
            "The defendant orally agreed to purchase a series of porcelain figurines from the plaintiff to be delivered one per week for 15 weeks at a price of $100 per figurine. Prior to the first delivery, the defendant advised the plaintiff that he was no longer interested in receiving the figurines.",
            "The defendant orally agreed to purchase a hand-carved entry door for the defendant's home with the defendant's coat of arms on it for a price of $600. After the plaintiff completed the rough carving of the defendant's coat of arms, the defendant changed her mind and notified the plaintiff that she would not accept delivery of the door.",
            "The defendant's pleadings admitted making an oral agreement to purchase a painting from the plaintiff for $900 but asserted as an affirmative defense that the agreement was unenforceable under the Statute of Frauds.",
            "The defendant orally agreed to a price of $1,200 for the purchase of 100 lawn-trimmers manufactured by the plaintiff for resale in the defendant's store. The plaintiff then sent the defendant a memorandum signed by the plaintiff and outlining the terms of their agreement. The defendant did not sign the memorandum or respond to it in any way."
        ],
        ans: 0,
        exp: "The Statute of Frauds requires a contract for the sale of goods with a price of $500 or more to be in writing. It might be argued that the agreement in A was divisible really 15 separate agreements, each for a single $100 purchase-and therefore not within the Statute of Frauds. (Note: Since the agreement was for the purchase of a 'series' of figurines, it was probably not a divisible contract, but A is the only one of the four fact patterns presented in which the Statute of Frauds might prevent enforcement.)\n\nUCC § 2-201 specifically excludes from application of the statute a contract for the sale of specifically manufactured goods if the seller has made a substantial beginning in their manufacture. The Statute of Frauds would be inapplicable in B since the plaintiff had already completed the rough carving when the defendant attempted to cancel the contract. Since UCC § 2-201 specifies that the Statute of Frauds is satisfied by an admission in the pleadings of the existence of a contract, the statute would not prevent enforcement in C. UCC § 2-201 provides that between merchants, a written memorandum of a contract that is sufficient to bind the sender binds the receiver also if he or she fails to object to it within 10 days. Since both parties in D are merchants, the writing prepared by the plaintiff and not responded to by the defendant satisfies the statute."
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
        exp: "A minor may disaffirm a contract on the ground of incapacity. If, however, the disaffirming minor is the plaintiff in an action for restitution, his or her recovery will be offset by the reasonable value of the benefit that he or she had received. Measuring the benefit in terms of reasonable rental value is a common judicial approach.\n\nA is therefore incorrect. C is incorrect because the damage that the car sustained is not related to the benefit that the plaintiff received. D is incorrect because it fails to recognize the minor's right to disaffirm the contract."
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
        exp: "By making the reward offer, the man offered to create a unilateral contract. Once an offeree begins to perform a unilateral contract, the offer cannot be revoked. Here, the woman rented a metal detector and searched the 100-mile route for the ring. Consequently, she had begun performance, and the offer of the reward could not be revoked.\n\nA is incorrect because the woman had already begun performance. At that point, the unilateral offer could not be revoked as it was irrelevant whether she saw the revocation or not. C is incorrect because the woman accepted the unilateral contract by beginning performance. D is incorrect because the woman did not need to tell the man that she had accepted the offer."
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
        exp: "A court may reform a contract to reflect the intentions of the parties if, as a result of inadvertence, the writing does not actually reflect the intentions. In determining the intentions of the parties, the court may admit whatever evidence is relevant and material.\n\nB is incorrect because UCC § 2-201 declares that a writing may satisfy the Statute of Frauds even though one or more terms (except the quantity term) are omitted. The Universal Commercial Code (UCC) provides that parties may conclude a contract for sale even though the price is not settled, and that if they do, the price is to be the reasonable price at the time of delivery. C is incorrect, however, because the seller and the buyer did agree on a price. D is incorrect because parol evidence may be admitted for the purpose of determining what the parties intended the price to be."
    },
    {
        id: 21,
        topic: "Terms / Parol Evidence Rule (Merger Clauses)",
        fp: "On May 15, after negotiation, a painter and a homeowner entered into a written agreement for the painting of the homeowner's home. The writing stated that the price was to be $300 plus the cost of materials, that the work was to begin on June 2 and be completed by June 12, that stucco portions of the house were to be painted yellow and wood trim was to be painted brown, and that the written memorandum was a full and final expression of the agreement between the painter and the homeowner. During litigation between the painter and the homeowner to enforce the contract, the homeowner offered to testify to the following additional facts. Which is the LEAST likely to be admitted into evidence over timely objection by the painter?",
        q: "Which is the LEAST likely to be admitted into evidence over timely objection by the painter?",
        opts: [
            "Prior to signing the memorandum, the painter and the homeowner orally agreed that the contract would have no legal effect if the homeowner sold his house prior to June 2.",
            "Prior to signing the memorandum, the painter and the homeowner orally agreed that the homeowner would use no paint without first submitting it for the homeowner's approval.",
            "While signing the memorandum, the painter and the homeowner orally agreed that any promises made by either of them during negotiations were to be enforceable, even if they were omitted from the memorandum.",
            "While signing the memorandum, the painter and the homeowner orally agreed that the painter would spend no more than $10 per gallon for paint."
        ],
        ans: 2,
        exp: "The parol evidence rule prohibits the introduction of extrinsic evidence of prior or contemporaneous agreements to contradict, vary, or modify an unambiguous writing that the parties intended to be a full and final expression of their agreement. It is generally understood that in the absence of fraud or mistake, a clause in a written contract that states that the writing is intended to be a complete integration of the agreement between the parties establishes that it is a complete integration. If so, the agreement in C would be barred by the parol evidence rule since it was a contemporaneous agreement that contradicts a term of the writing.\n\nThe purpose of the parol evidence rule is to discourage litigation by encouraging parties to put their entire agreement in writing. Since this purpose would not be served by prohibiting parol evidence regarding the question of whether or not the obligations created by the writing ever came into being, parol evidence pertaining to a written contract's becoming effective is admissible. A is therefore incorrect. Since the writing requires the homeowner to pay for the paint, the agreements in B and D do not modify any obligation created by the writing and so would probably be admitted. B and D are therefore incorrect."
    },
    {
        id: 22,
        topic: "Third Parties / Assignment (Anti-Assignment Clause)",
        fp: "On May 20, on a form provided by an air-conditioning company, the defendant agreed to purchase from the company 100 described air-conditioning units at a price of $250 each, FOB the company's factory. The contract contained a clause that prohibited either party from assigning its rights or obligations under the contract without the consent of the other party. On June 1, the company's employees loaded the units on a truck owned and operated by an independent trucking company. When the loading was complete, the air-conditioning company phoned the defendant that the shipment was on its way. Later that day, the company executed a document that contained the following language: 'In consideration of $20,000 to me in hand paid by the plaintiff this date, I hereby assign to the plaintiff all rights under my contract with the defendant dated May 20.' On June 2, while en route to the defendant's warehouse, the truck containing the air-conditioning units overturned, and the entire shipment was destroyed.\n\nThe defendant did not consent to the company's assignment of rights to the plaintiff. In an action by the plaintiff against the defendant, how much may the plaintiff recover?",
        q: "In an action by the plaintiff against the defendant, how much may the plaintiff recover?",
        opts: [
            "The contract price of $25,000 (100 air-conditioning units at $250 each).",
            "The difference between the contract price and the market value of the air-conditioning units.",
            "Nothing, since recovery from the defendant would unjustly enrich the plaintiff.",
            "Nothing, since the contract between the defendant and the plaintiff prohibited assignment."
        ],
        ans: 0,
        exp: "An agreement for the sale of goods FOB a particular place requires the seller to load the goods on board a carrier at that place. Once the seller has done so, the buyer's obligation to pay the seller for the goods becomes complete. Under UCC § 2-210, a seller who has completely performed may assign its rights even if terms of the contract prohibit assignment. Since the seller's rights have been assigned to the plaintiff, the plaintiff now is entitled to collect the price from the defendant.\n\nB correctly states the remedy usually available to the buyer in the event of the seller's failure to deliver, but it is incorrect as a statement of the seller's remedy. Payment by the defendant might enrich the plaintiff, but since the plaintiff has given value for the assignment of the air-conditioning company's rights, the enrichment would not be unjust. C is therefore incorrect. So long as assignment does not impose an additional burden on the obligor, an assignment of contract rights is enforceable in spite of a clause prohibiting it. D is therefore incorrect."
    },
    {
        id: 23,
        topic: "Formation / Statute of Frauds Modification",
        fp: "A world-renowned artist's will left a collection of 30 of his paintings to his niece, an art dealer. The paintings inherited by the niece were untitled, but they were identified by the numbers 1 through 30. The niece had a catalog printed containing photographs and descriptions of each painting in the collection. On August 1, she sent a copy of the catalog to another art dealer, with the following cover letter:\n\nI know how much you like my uncle's work, so I'm giving you an opportunity to buy some of these paintings before I offer them to any other dealers. The price is $2,000 per painting, no matter how many you buy. Telegraph your order within two weeks, or I'll put them on the market.\n(signed)\n\nOn August 2, the art dealer sent the niece a telegram that said, 'I accept your offer to sell painting Number 30 for $2,000. I will come to your gallery in two days to pick up the painting and will pay cash at that time.'\n\nOn August 3, after receiving the telegram, the niece telephoned the dealer and said that because of favorable publicity that the collection had received, she would not sell painting Number 30 for less than $3,000. The dealer agreed on the telephone to pay $3,000 for painting Number 30. Between August 1 and August 3 the fair market value of the painting increased by $1,000.\n\nOn August 4, the dealer sent and the niece received a telegram that said, 'I accept your offer to sell your uncle's paintings 1 through 29 for $2,000 each. I will pick up the paintings tomorrow and will pay for them at that time.'\n\nOn August 5, the dealer presented herself at the niece's gallery and tendered payment of $2,000 each for all 30 paintings. However, the niece refused to sell her any of the paintings except Number 30, for which the niece insisted the agreed price was $3,000. The dealer left without buying it, saying that the niece would be hearing from her lawyer.",
        q: "The niece asserted a claim against the dealer for breach of a contract to purchase painting Number 30 for $3,000. Should the court rule in the niece's favor?",
        opts: [
            "No, because her promise to pay $3,000 for the painting was not in writing.",
            "No, because the increase in the fair market value of painting Number 30 was not anticipated by the parties.",
            "Yes, because she relied on the dealer's promise to pay $3,000 for painting Number 30.",
            "Yes, because she had not received payment from the dealer prior to their conversation on August 3."
        ],
        ans: 0,
        exp: "A contract is formed upon acceptance of an offer. An offer is a manifestation of present intent to be bound to specific terms. Since the niece's letter of August 1 clearly expressed her willingness to sell each of the paintings to the dealer for $2,000, it was an offer. An acceptance occurs when the offeree communicates to the offeror that he or she agrees to the terms of the offer. Since the dealer's telegram clearly expressed her willingness to pay $2,000 for painting Number 30, it was an acceptance. A contract for the sale of painting Number 30 at a price of $2,000 was thus formed. For this reason, the niece's action for breach of a contract to purchase the painting for $3,000 must fail unless there has been an enforceable modification of the original contract. Under UCC § 2-209(3), a modification of a contract must be in writing if the contract as modified is within the provisions of the Statute of Frauds. Since, as modified, the oral contract between the niece and the dealer calls for the sale of goods with a price in excess of $500, it violates the Statute of Frauds and will not be enforced over the dealer's objection. A is therefore correct.\n\nB is incorrect because the increase in fair market value would not change the analysis. A promise that is not supported by consideration or one that violates the Statute of Frauds may be enforceable if the promisee justifiably relies on it to his or her detriment. C is incorrect, however, because reliance alone is insufficient to have this effect and because there is no indication that the niece changed her position (i.e., relied). Since the niece's offer of August 1 called for acceptance by telegraphed order, the dealer's telegram on August 2 was an acceptance even though payment had not been made. D is therefore incorrect."
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
        exp: "A valid requirements contract is created when a seller agrees to fulfill all of the buyer's requirements. Under the UCC, such contracts are enforceable. Here, because the restaurant agreed to buy all of the beer it required from the brewery, the agreement was a valid requirements contract.\n\nA is incorrect because there was a valid requirements contract between the parties. Because there was such a contract, issues of reliance are irrelevant. C is incorrect because this requirements contract does not fall under any of the categories that implicate the Statute of Frauds. D is incorrect because a valid requirements contract does not require a quantity term to be enforceable. Under the UCC, it is implied that both the seller and buyer will act in good faith in determining necessary quantities."
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
        exp: "The UCC treats a modification of a contract as a new contract. For this reason, if the contract as modified falls within the provisions of the Statute of Frauds, the modification must be in writing. UCC § 2-209(3). Since the modification resulted in an agreement to sell goods with a price of $500 or more, the Statute of Frauds requires a written memorandum. The absence of a writing makes the contract unenforceable over the objection of the retailer.\n\nA contract is unconscionable if one party is so deprived of free choice that he or she is forced to make a one-sided bargain that favors the other party. Since the free enterprise system sometimes results in different prices being set by different suppliers of the same commodity, the mere fact that the merchandise was available at a lower price than that requested by the wholesaler is not sufficient to make the agreement to pay the wholesaler's price unconscionable. A is therefore incorrect. C is incorrect because, under UCC § 2-209(1), an agreement to modify a contract may be enforceable even if it is unsupported by consideration. D would be relevant if the wholesaler attempted to excuse his own non-performance by asserting impossibility or frustration of purpose. Since the retailer agreed to the modification, however, the wholesaler's reason for requesting it is irrelevant to its enforceability."
    }
];
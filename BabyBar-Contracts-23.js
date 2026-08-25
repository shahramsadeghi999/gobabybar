const examData = [
    {
        id: 1,
        topic: "Applicable Law / Mixed Transactions",
        fp: "Client purchases a custom home theater system from AV Solutions for $20,000. The contract also stipulates that AV Solutions will install the system in Client's home, with the installation service valued at $2,000. AV Solutions delivers the equipment but fails to perform the installation properly, prompting Client to sue for breach of contract.",
        q: "Which body of law governs this dispute?",
        opts: [
            "The common law, because the breach occurred during the performance of a service.",
            "The Uniform Commercial Code (UCC) Article 2, because the cost of the goods heavily predominates over the cost of the services.",
            "The common law, because mixed transactions default to common law unless both parties are merchants.",
            "Both the UCC and common law concurrently, with the UCC applying to the equipment and common law to the installation."
        ],
        ans: 1,
        exp: "If a contract contains both goods and services, the court determines the governing law using the mixed transactions factor test, primarily asking whether the goods or services predominate the contract. Because the $20,000 cost of the home theater equipment significantly outweighs the $2,000 installation service, the UCC governs the entire contract."
    },
    {
        id: 2,
        topic: "Formation / Advertisements",
        fp: "A local restaurant places an advertisement in the Sunday newspaper stating: 'Grand Opening Special! The first person to show up at our door on Monday morning wearing a full chicken suit will receive free wings for a year.' On Monday morning, Bob is the first person to arrive, fully dressed in a chicken suit. The manager laughs and refuses to honor the promotion, claiming it was just an advertising gimmick.",
        q: "Did the advertisement constitute a valid offer?",
        opts: [
            "No, because advertisements are generally considered mere invitations to make an offer.",
            "Yes, because the advertisement contained sufficient certainty regarding the terms and could be accepted without additional negotiation.",
            "No, because the offer lacked a definite quantity term for the 'free wings.'",
            "Yes, because Bob detrimentally relied on the ad by purchasing a chicken suit."
        ],
        ans: 1,
        exp: "Generally, advertisements are not offers but rather invitations to deal. However, an exception exists for ads that contain all the terms or sufficient certainty regarding the terms and may be accepted without any additional negotiation or communication. The ad specified exactly who could accept (the first person) and how to accept (wearing a chicken suit), creating a valid offer."
    },
    {
        id: 3,
        topic: "Termination / UCC Firm Offer",
        fp: "A tire wholesaler, who is a merchant, hands a mechanic a signed business card on September 1. On the back of the card, the wholesaler writes: 'I offer to sell you 500 premium tires for $50 each. This offer will be held open until November 1.' On October 15, the wholesaler calls the mechanic and attempts to revoke the offer.",
        q: "Was the wholesaler's revocation effective?",
        opts: [
            "Yes, because the mechanic provided no consideration to keep the offer open.",
            "No, because under the UCC firm offer rule, a written and signed offer by a merchant assuring it will be held open is irrevocable for up to 90 days without consideration.",
            "Yes, because firm offers are only valid for a maximum of 30 days under the UCC.",
            "No, because an oral revocation is insufficient to terminate a written offer."
        ],
        ans: 1,
        exp: "Under the UCC, an offer may not be revoked if there is an existing firm offer. A firm offer is created when a merchant offers to buy or sell goods in a signed writing that gives assurance it will be held open. Such an offer is irrevocable without consideration for the stated time, not to exceed 90 days. Since November 1 is within the 90-day limit from September 1, the revocation on October 15 is ineffective."
    },
    {
        id: 4,
        topic: "Termination / Detrimental Reliance",
        fp: "General Contractor (GC) is assembling a bid for a major hospital renovation. Electrician submits a bid to GC to perform all wiring for $40,000. GC relies on Electrician's figure and incorporates it into his total bid for the hospital project. GC wins the hospital contract. The next morning, Electrician calls GC and says, 'I revoke my bid; I miscalculated my material costs.'",
        q: "Can Electrician successfully revoke the offer?",
        opts: [
            "Yes, because a unilateral mistake of computation allows an offeror to rescind an unaccepted bid.",
            "No, because the offer became irrevocable for a reasonable period of time due to the general contractor's reasonable detrimental reliance on the bid.",
            "Yes, because the general contractor had not yet formally communicated his acceptance to the electrician.",
            "No, because subcontractor bids are considered firm offers under the UCC."
        ],
        ans: 1,
        exp: "An offer may become irrevocable under the doctrine of detrimental reliance if the offeree relied on the offeror's promise to their detriment, the reliance was reasonable, and the offeror knew or should have known the offeree would rely. A subcontractor submitting a bid to a general contractor knows the GC will rely on it, making the offer irrevocable for a reasonable time once the GC incorporates it into a winning bid."
    },
    {
        id: 5,
        topic: "Acceptance / Mirror Image Rule",
        fp: "Artist emails Patron, offering to paint a custom portrait of Patron's family for $1,000. Patron replies, 'I accept your offer for $1,000, but you must use oil paints instead of acrylic.' Artist reads the email but never responds, and does not paint the portrait.",
        q: "Did Patron's email form a valid contract?",
        opts: [
            "No, because under the common law, acceptance must mirror the exact terms of the offer, and any additional or different terms create a counteroffer.",
            "Yes, because the specification of paint type is a minor, immaterial alteration that does not defeat acceptance.",
            "No, because the Statute of Frauds requires custom service contracts to be signed by both parties.",
            "Yes, under the UCC battle of the forms, the acceptance is valid and the paint type is considered a proposal for addition."
        ],
        ans: 0,
        exp: "Because painting a portrait is a service, the common law governs. Under the common law, a valid acceptance requires the terms of the acceptance to mirror the terms of the offer; any additional or different terms create a counteroffer and operate as a rejection. Patron's demand for oil paints did not mirror the offer, creating a counteroffer, not a contract."
    },
    {
        id: 6,
        topic: "Acceptance / UCC Battle of the Forms (Conditional)",
        fp: "Cafe sends a purchase order to Supplier requesting 1,000 custom coffee mugs for $2,000. Supplier sends back an acknowledgment form that states: 'Acceptance of your order is expressly conditional on your agreement to a mandatory Texas forum selection clause.' Cafe receives the form but does not respond. Supplier never ships the mugs.",
        q: "Is there a valid contract between Cafe and Supplier?",
        opts: [
            "Yes, because between merchants, additional terms become part of the contract unless objected to.",
            "No, because Supplier's response contained new terms, rendering it a counteroffer under the mirror image rule.",
            "No, because an expression of acceptance made expressly conditional on assent to additional terms operates as a counteroffer, not an acceptance.",
            "Yes, because the acknowledgment form demonstrated a clear intent to be bound to the essential terms of price and quantity."
        ],
        ans: 2,
        exp: "Under UCC 2-207(3), an acceptance is made expressly conditional if the offeree clearly expresses they do not want to go through with the agreement unless the additional terms are part of the agreement. Such a conditional acceptance is treated as a counteroffer (rejecting the old offer and creating a new one). Because Cafe did not accept the counteroffer, no contract was formed."
    },
    {
        id: 7,
        topic: "Acceptance / Mailbox Rule Exception",
        fp: "On Monday, Buyer receives a written offer from Seller to sell a boat. On Tuesday, Buyer decides she does not want the boat and places a rejection letter in the mail. On Wednesday, Buyer changes her mind and mails an acceptance letter. On Thursday, Seller receives the acceptance letter. On Friday, Seller receives the rejection letter.",
        q: "Which communication governs the outcome of the transaction?",
        opts: [
            "The rejection, because it was dispatched first, instantly terminating the power of acceptance.",
            "The acceptance, because an acceptance is generally effective upon dispatch under the standard mailbox rule.",
            "The acceptance, because when a rejection is sent first followed by an acceptance, the first to be received by the offeror wins.",
            "The rejection, because a deposited acceptance is void if it contradicts a previously dispatched rejection."
        ],
        ans: 2,
        exp: "Per the mailbox rule, acceptance is generally effective once dispatched. However, if a rejection is sent first and then the acceptance, the mailbox rule is negated, and the first communication to be received by the offeror wins. Because the acceptance was received on Thursday (before the rejection on Friday), a contract is formed."
    },
    {
        id: 8,
        topic: "Consideration / Past Consideration",
        fp: "Pedestrian sees a toddler dangling from a second-story balcony. Pedestrian rushes over and safely catches the child as he falls. The grateful parents run out, thank Pedestrian profusely, and promise to pay him $5,000 the following week as a reward for his heroism. The parents later refuse to pay.",
        q: "Is the parents' promise supported by valid consideration?",
        opts: [
            "Yes, because saving a human life provides a substantial legal benefit to the promisors.",
            "No, because a promise given for a benefit already received (past consideration) is not valid consideration.",
            "Yes, under the doctrine of moral obligation, which serves as a substitute for consideration in emergency rescues.",
            "No, because the parents did not memorialize the promise in a signed writing."
        ],
        ans: 1,
        exp: "Consideration requires a bargained-for exchange in which both parties receive a benefit or incur a legal detriment. A promise given for a benefit already received is not valid consideration (past consideration). Because the child was saved before the promise was made, the promise to pay $5,000 is unenforceable."
    },
    {
        id: 9,
        topic: "Consideration / Pre-existing Duty",
        fp: "Plumber contracts with Homeowner to fix a leaking pipe for $500. Halfway through the job, Plumber realizes the repair is taking much longer than he anticipated due to his own slow pace, though there are no unforeseen structural difficulties. Plumber tells Homeowner, 'I need $200 more or I'm leaving right now.' Homeowner, desperate to have water restored, orally agrees. Plumber finishes, but Homeowner refuses to pay the extra $200.",
        q: "Can Plumber enforce the modification for the additional $200?",
        opts: [
            "Yes, because under the common law, a modification is valid without new consideration if it is fair and equitable.",
            "No, because under the pre-existing duty rule, a promise given in exchange for a duty already owed is not valid consideration.",
            "Yes, because the homeowner's oral agreement constituted a waiver of the original contract price.",
            "No, because modifications to service contracts must satisfy the Statute of Frauds."
        ],
        ans: 1,
        exp: "Under the common law, a modification acts as a new contract and is only valid if there is additional/new consideration for both parties. A promise given in exchange for a duty already owed (the pre-existing duty rule) is not valid consideration. Plumber already owed the duty to fix the pipe for $500, so the promise to pay an extra $200 lacks consideration and is unenforceable."
    },
    {
        id: 10,
        topic: "Defenses / Statute of Frauds (Suretyship)",
        fp: "Brother wants to purchase a high-end lawnmower on credit from Hardware Store. Sister calls the manager of the store and orally states, 'If my brother doesn't make his monthly payments for the lawnmower, I promise I will pay the debt for him.' Brother defaults on the payments, and Hardware Store sues Sister.",
        q: "Is Sister's oral promise enforceable?",
        opts: [
            "Yes, because her promise induced the store to extend credit to her brother.",
            "No, because contracts where one promises to pay the debt of another (suretyship) fall within the Statute of Frauds and must be in writing.",
            "Yes, because suretyship promises made by immediate family members are exempt from the Statute of Frauds.",
            "No, because she did not receive any direct consideration from the hardware store."
        ],
        ans: 1,
        exp: "A contract where one promises to pay the debt of another (suretyship) falls within the Statute of Frauds and must be in writing signed by the party to be charged to be enforceable. Because Sister's promise to cover Brother's debt was oral, it is barred by the Statute of Frauds."
    },
    {
        id: 11,
        topic: "Defenses / Statute of Frauds (Specially Manufactured Goods)",
        fp: "Wealthy Client calls Sculptor and orally orders a custom, 10-foot bronze statue of himself to be placed in his garden, agreeing to pay $5,000. Sculptor purchases the bronze and completes half of the statue. Client then calls back and cancels the order, arguing that the contract is unenforceable because it is a sale of goods over $500 and is not in writing.",
        q: "Will Client's Statute of Frauds defense succeed?",
        opts: [
            "Yes, because the Uniform Commercial Code strictly requires a writing for all goods priced at $500 or more.",
            "No, because contracts for goods specially manufactured for the buyer and not suitable for sale to others are an exception to the Statute of Frauds.",
            "Yes, because the sculptor had not yet completed the statue at the time of cancellation.",
            "No, because bronze is considered a raw material that falls outside the definition of 'goods' under the UCC."
        ],
        ans: 1,
        exp: "While contracts for the sale of goods of $500 or more generally fall within the Statute of Frauds, an exception exists for goods specially manufactured for the buyer and not suitable for sale to others. A custom 10-foot statue of the client cannot be readily sold to others, making the oral contract enforceable."
    },
    {
        id: 12,
        topic: "Defenses / Mutual Mistake",
        fp: "Musician visits a garage sale and sees an old violin. The seller, who knows nothing about instruments, agrees to sell it to Musician for $100. Both parties genuinely believe it is a generic, mass-produced student model. A month later, an appraiser informs Musician that the violin is actually a rare Stradivarius worth $1,000,000. The seller learns of this and sues to rescind the contract based on mistake.",
        q: "Will the seller succeed in rescinding the contract?",
        opts: [
            "No, because the seller assumed the risk of selling items at a garage sale without having them professionally appraised.",
            "Yes, because a mistake made by both parties concerning a basic assumption that has a material effect on the agreement defeats enforcement.",
            "No, because the mistake was a unilateral error regarding value rather than the physical identity of the object.",
            "Yes, because any contract featuring a price disparity of such magnitude is unconscionable as a matter of law."
        ],
        ans: 1,
        exp: "A mistake made by both parties will defeat enforcement if the mistake concerns a basic assumption on which the contract was made, has a material effect on the agreement, and the party seeking relief did not absorb the risk. Both mistakenly believing the violin was a generic student model (a basic assumption regarding the item's fundamental identity, not merely value) allows rescission."
    },
    {
        id: 13,
        topic: "Defenses / Incapacity (Minors)",
        fp: "15-year-old Teen buys a high-end stereo system from Electronics Shop for $1,000 cash. Teen takes it home, accidentally drops it down a flight of stairs, and completely shatters it into pieces. Teen gathers the broken pieces, returns to the shop, and demands a full $1,000 refund, seeking to disaffirm the contract.",
        q: "Is Teen legally entitled to disaffirm the contract and receive a refund?",
        opts: [
            "Yes, because a party may defeat enforcement if they were a minor at the time the contract was made, even if the goods are returned damaged.",
            "No, because the intentional or negligent destruction of the goods waives a minor's right to disaffirm.",
            "Yes, but the store may deduct the fair market value of the damage from the $1,000 refund.",
            "No, because stereo systems are universally classified as 'necessaries' for modern teenagers."
        ],
        ans: 0,
        exp: "Contract enforcement may be defeated if a party lacked capacity (e.g., one party is a minor) at the time the contract was made. A minor can disaffirm a contract and is generally entitled to a full refund upon returning whatever remains of the goods, even if they are damaged or completely destroyed."
    },
    {
        id: 14,
        topic: "Terms / Parol Evidence Rule (Complete Integration)",
        fp: "Buyer and Seller execute a lengthy, detailed, and formally drafted written contract for the sale of Seller's yacht. The contract includes a conspicuous merger clause stating: 'This document represents the entire and total understanding of the parties.' Buyer later attempts to introduce evidence that during negotiations, Seller orally promised to include six premium life jackets with the boat. The contract does not mention life jackets.",
        q: "Is the evidence of the oral promise admissible?",
        opts: [
            "Yes, because the life jackets are a supplemental term that does not directly contradict the written agreement.",
            "No, because the presence of a merger clause makes the writing completely integrated, barring both contradicting and supplemental parol evidence.",
            "Yes, because oral promises made prior to signing are always admissible to prove the true consideration paid.",
            "No, because the Uniform Commercial Code prohibits all oral evidence in transactions involving vessels."
        ],
        ans: 1,
        exp: "The Parol Evidence Rule bars prior or contemporaneous statements to vary, modify, or contradict an integrated writing. A completely integrated writing (evidenced here by the detailed document and merger clause) bars both contradicting AND supplemental terms. Thus, the oral promise regarding life jackets is inadmissible."
    },
    {
        id: 15,
        topic: "Terms / Risk of Loss (FOB Destination)",
        fp: "Manufacturer in Chicago agrees to sell industrial equipment to Retailer in Los Angeles. The contract explicitly states the delivery terms as 'FOB Retailer's Warehouse, Los Angeles.' Manufacturer properly gives the equipment to a train carrier in Chicago. While traversing through Colorado, the train derails and the equipment is destroyed.",
        q: "Which party bears the risk of loss?",
        opts: [
            "Retailer, because the risk of loss passed when Manufacturer gave the goods to the common carrier in Chicago.",
            "Retailer, because buyers always assume the risk of loss once goods cross state lines.",
            "Manufacturer, because this is a destination contract, and the risk of loss does not pass until the goods are delivered to the stated location.",
            "Manufacturer, because the common carrier was acting as the manufacturer's agent under common law."
        ],
        ans: 2,
        exp: "A destination contract is one where the goods are to be sent by carrier to a specified destination; FOB (free on board) contracts are treated like destination contracts. In a destination contract, the risk of loss passes from the seller to the buyer once the goods are delivered to the stated location. Because they were destroyed in transit to LA, Manufacturer bears the risk."
    },
    {
        id: 16,
        topic: "Terms / Implied Warranty of Fitness for Particular Purpose",
        fp: "Climber goes to a hardware store and tells the manager, 'I am scaling a cliff tomorrow and I need a rope that can safely hold 500 pounds.' The manager confidently hands Climber a standard cotton clothesline, saying, 'This is what you need.' Climber buys it and uses it. The rope snaps under a 200-pound load, causing Climber to fall and suffer injuries.",
        q: "Which warranty did the hardware store most clearly breach?",
        opts: [
            "The express warranty of merchantability.",
            "The implied warranty of merchantability.",
            "The implied warranty of fitness for a particular purpose.",
            "No warranty, because the climber assumed the risk by using a clothesline for mountaineering."
        ],
        ans: 2,
        exp: "The implied warranty of fitness for a particular purpose is created when: (1) the seller has reason to know of the particular purpose the buyer is purchasing the goods for, (2) the seller knows the buyer is relying on their skill and judgment, and (3) the buyer in fact relies. It is breached if the goods are not fit for that particular purpose. The manager providing a clothesline for climbing breached this warranty."
    },
    {
        id: 17,
        topic: "Terms / UCC Modification (Good Faith)",
        fp: "Dealership contracts to sell a specific used car to Buyer for $15,000, with delivery next week. Over the weekend, the market value of used cars drops dramatically. Buyer calls Dealership and says, 'I can't pay $15,000 anymore given the market crash; I'll only pay $14,000.' Dealership agrees to the lower price to save the sale. Dealership later sues for the original $15,000 price, arguing the modification lacked consideration.",
        q: "Is the modification to $14,000 enforceable?",
        opts: [
            "No, because under the common law, modifications require additional consideration for both parties.",
            "No, because market fluctuations are not considered unforeseen circumstances justifying modification.",
            "Yes, because under the UCC, a modification is valid as long as it is made in good faith, and no new consideration is required.",
            "Yes, because the preexisting duty rule only applies to service contracts, not the sale of goods."
        ],
        ans: 2,
        exp: "Because a car is a good, the UCC governs. Under the UCC, a modification is valid as long as the modification was made in good faith; it does not require additional consideration. A market crash prompting a renegotiated price agreed to by both parties is a good faith modification."
    },
    {
        id: 18,
        topic: "Performance / UCC Installment Contracts",
        fp: "Coffee Shop contracts with Roaster for the delivery of 100 bags of coffee beans on the first of every month for 12 months (an installment contract). For the month 3 delivery, Roaster delivers 99 bags of coffee beans instead of 100. Coffee Shop attempts to reject the installment and cancel the entire contract based on the perfect tender rule.",
        q: "Can Coffee Shop legally reject the month 3 installment?",
        opts: [
            "Yes, because the perfect tender rule requires exact compliance for every delivery of goods.",
            "No, because in an installment contract, a buyer cannot reject a non-conforming installment unless the breach substantially impairs the value of that installment and cannot be cured.",
            "Yes, because missing items in a delivery automatically trigger anticipatory repudiation of the remainder of the contract.",
            "No, because the UCC requires buyers to accept all installments and seek remedies solely through proportional price deductions."
        ],
        ans: 1,
        exp: "Under the UCC, the perfect tender rule allows rejection for non-conforming goods. However, a limitation on rejection exists for installment contracts: the buyer cannot reject a non-conforming installment unless the seller's breach was a substantial impairment and cannot be cured. Missing 1 bag out of 100 likely does not substantially impair the installment."
    },
    {
        id: 19,
        topic: "Performance / Material Breach",
        fp: "Homeowner hires Builder to construct a detached garage specifically designed to house Homeowner's oversized commercial truck. The contract specifies the garage must have a 10-foot ceiling. Builder completes the garage, but mistakenly builds it with an 8-foot ceiling, making it physically impossible for the truck to fit inside.",
        q: "Has Builder committed a material breach?",
        opts: [
            "No, because the garage is structurally sound and provides substantial utility to the homeowner.",
            "Yes, because the builder failed to substantially perform, as the primary purpose of housing the truck was defeated.",
            "No, because the common law perfect tender rule only applies to the sale of goods.",
            "Yes, but only if the contract contained a 'time is of the essence' clause."
        ],
        ans: 1,
        exp: "Under the common law, a breach is material if a party has failed to substantially perform. Because the garage cannot be used for its intended and contracted purpose (housing the oversized truck), Builder failed to substantially perform, committing a material breach."
    },
    {
        id: 20,
        topic: "Excuses / Anticipatory Repudiation",
        fp: "Supplier contracts to deliver 50 tons of brick to Mason on May 1. On April 15, Supplier sends Mason an email stating: 'Due to equipment failure at my quarry, I will absolutely not be able to deliver the bricks on May 1 as promised.' Mason reads the email and immediately files a lawsuit on April 16 for breach of contract.",
        q: "Is Mason's immediate lawsuit legally permissible?",
        opts: [
            "No, because Mason must wait until the May 1 performance date to see if Supplier cures the defect.",
            "Yes, because Supplier's unambiguous statement of non-performance before the due date constitutes an anticipatory repudiation, allowing Mason to sue immediately.",
            "No, because Mason failed to request written assurances under the UCC before filing suit.",
            "Yes, because equipment failures are strictly prohibited as excuses under the doctrine of commercial impracticability."
        ],
        ans: 1,
        exp: "A party commits anticipatory repudiation if they make an unambiguous statement that they will no longer perform before performance is due, and neither party has completed performance. If a party commits anticipatory repudiation, the non-repudiating party may sue immediately."
    },
    {
        id: 21,
        topic: "Excuses / Waiver of Express Condition",
        fp: "Buyer agrees to purchase Seller's house, with the contract expressly stating that Buyer's duty to close is 'conditioned upon the house passing a professional termite inspection.' The house fails the inspection. Desperate for housing, Buyer calls Seller and says, 'I know it failed the inspection, but I am waiving that condition and I want to buy the house anyway.' Seller then refuses to sell, claiming the contract is voided by the failed condition.",
        q: "Can Buyer enforce the contract?",
        opts: [
            "No, because the failure of an express condition precedent automatically terminates the entire contract.",
            "Yes, because a condition may be eliminated by waiver by the party protected by the condition.",
            "No, because real estate conditions can only be waived through a formal, notarized written modification.",
            "Yes, because the doctrine of prevention/hindrance automatically strikes the termite clause from the agreement."
        ],
        ans: 1,
        exp: "If a condition is created and not satisfied, the protected party's performance is not due unless the condition was eliminated. A condition may be eliminated by waiver; it may be waived expressly by the party protected by the condition (Buyer). By expressly waiving the inspection, Buyer eliminated the condition and can enforce the contract."
    },
    {
        id: 22,
        topic: "Excuses / Accord and Satisfaction",
        fp: "Artist paints a mural for Client for an agreed price of $2,000. Client is genuinely dissatisfied with the shading and disputes the amount owed in good faith, claiming the work is only worth $1,200. Client sends Artist a check for $1,200 with the words 'Payment in Full for Mural' written conspicuously on the memo line. Artist cashes the check but sues Client for the remaining $800.",
        q: "Will Artist succeed in recovering the $800?",
        opts: [
            "Yes, because the preexisting duty rule requires Client to pay the full $2,000 contract price.",
            "No, because the cashing of a conspicuous 'payment in full' check in the context of a good-faith dispute constitutes a valid accord and satisfaction.",
            "Yes, because partial payment of an undisputed debt does not constitute valid consideration for an accord.",
            "No, because the subjective dissatisfaction of a client automatically reduces the contract price by operation of law."
        ],
        ans: 1,
        exp: "An accord is an agreement to accept a different performance instead of the existing performance. While simply paying less money is not new consideration, accepting less money in light of a good faith dispute satisfies consideration for an accord. Cashing the check satisfies the new agreement, discharging the original obligation."
    },
    {
        id: 23,
        topic: "Third Party / Intended Donee Beneficiary",
        fp: "Daughter pays Landscaper $500 to landscape her elderly Mother's yard as a Mother's Day gift. The contract explicitly names Mother as the recipient of the landscaping services. Landscaper takes the money but never shows up to do the work.",
        q: "Can Mother sue Landscaper for breach of contract?",
        opts: [
            "No, because Mother is merely an incidental beneficiary to the contract.",
            "Yes, because Mother is an intended donee beneficiary, giving her the right to sue the promisor who failed to perform.",
            "No, because Mother did not provide any consideration directly to Landscaper.",
            "Yes, because Mother is an intended creditor beneficiary."
        ],
        ans: 1,
        exp: "A third party beneficiary may sue if they are an intended beneficiary. A donee beneficiary is one who receives the benefit from the promisor as a gift from the promisee. The intended third party beneficiary may sue the promisor if the promisor fails to perform. Mother, an intended donee beneficiary, can therefore sue Landscaper."
    },
    {
        id: 24,
        topic: "Third Party / Revocability of Gratuitous Assignment",
        fp: "Employee is owed $1,000 by his Employer. For his brother's birthday, Employee writes a letter to Employer stating, 'I assign my right to my $1,000 paycheck to my Brother as a gift.' The next day, Employee gets into a fight with his brother and immediately notifies Employer that he is revoking the assignment. Brother sues Employer for the $1,000.",
        q: "Was Employee's revocation of the assignment valid?",
        opts: [
            "No, because all written assignments are irrevocable once dispatched.",
            "Yes, because the assignment was gratuitous (not for value) and there was no detrimental reliance by the brother.",
            "No, because the brother is an intended creditor beneficiary.",
            "Yes, because assignments of future wages violate public policy."
        ],
        ans: 1,
        exp: "An assignment is gratuitous if it is not for value (i.e., not given in exchange for consideration or to satisfy a pre-existing debt). Gratuitous assignments are generally revocable, unless there has been detrimental reliance or the obligor has already performed. Because it was a gift and Brother had not relied, Employee validly revoked it."
    },
    {
        id: 25,
        topic: "Third Party / Delegation of Duty",
        fp: "A highly acclaimed, world-famous pastry chef signs a contract to personally bake a multi-tier wedding cake for a wealthy couple for $15,000. Double-booked, the famous chef delegates the baking of the cake to a competent, but completely unknown, line cook at a local diner. The couple refuses to accept the cake or pay the $15,000.",
        q: "Was this a valid delegation of the contractual duty?",
        opts: [
            "Yes, because duties may be freely delegated as long as the delegate completes the physical performance.",
            "No, because a delegation is not allowed when the duty involves personal judgment, special skill, or special trust in the delegator.",
            "Yes, because the line cook was competent and thus did not materially change the couple's expectancy.",
            "No, because the delegation was not accompanied by a formal novation signed by all three parties."
        ],
        ans: 1,
        exp: "Delegations are allowed as long as the delegation does not materially change the obligee's expectancy. However, delegation is NOT allowed when the duty delegated involves personal judgment, skill, or special trust in the delegator (like a custom painting by a famous artist or a specialized chef). Contracting with a world-famous chef is based on special skill and personal judgment, making delegation to a line cook invalid."
    }
];
const examData = [
    // FACT PATTERN 1 (Q1-Q2)
    {
        id: 1,
        topic: "Formation / Rolling Contracts (Shrinkwrap)",
        fp: "Consumer purchases specialized modeling software online, clicking 'Buy Now' after seeing the price. The website contains no terms of service. When the physical software box arrives, it contains a printed pamphlet stating: 'By installing this software, you agree to resolve all disputes via binding arbitration in Delaware. If you do not agree, return the software within 30 days for a full refund.' Consumer installs the software, uses it for six months, and then attempts to sue the company in local state court over a defect.",
        q: "Is the arbitration clause enforceable against Consumer?",
        opts: [
            "No, because the contract was fully formed at the exact moment the consumer clicked the purchase button, rendering any subsequent documentation an invalid modification.",
            "No, because mandatory arbitration clauses placed within consumer packaging inherently violate the doctrine of substantive unconscionability.",
            "Yes, but only if the software company can prove the consumer explicitly signed a supplemental digital acknowledgment prior to installation.",
            "Yes, under the prevailing modern 'rolling contract' approach, a buyer accepts the enclosed terms if they retain and use the product beyond the specified return period without objection."
        ],
        ans: 3,
        exp: "Under the modern approach (ProCD v. Zeidenberg), 'shrinkwrap' terms enclosed with a product become part of the contract if the buyer is given notice of the terms, is provided a reasonable opportunity to reject them by returning the goods, and instead chooses to retain and use the goods. The contract formation 'rolls' forward and is completed upon failure to return."
    },
    {
        id: 2,
        topic: "Terms / Disclaiming Express Warranties",
        fp: "Consumer purchases specialized modeling software online, clicking 'Buy Now' after seeing the price. The website contains no terms of service. When the physical software box arrives, it contains a printed pamphlet stating: 'By installing this software, you agree to resolve all disputes via binding arbitration in Delaware. If you do not agree, return the software within 30 days for a full refund.' Consumer installs the software, uses it for six months, and then attempts to sue the company in local state court over a defect.\n\nAssume the outside of the software box prominently stated in bold letters: 'Guaranteed to run on all Mac Operating Systems!' The shrinkwrap pamphlet inside stated: 'Seller entirely disclaims any and all express warranties made regarding this product's compatibility.' The software does not run on Mac.",
        q: "Which warranty term legally controls the dispute?",
        opts: [
            "The express warranty controls because when a written disclaimer is fundamentally inconsistent with an explicit express warranty, the disclaimer is rendered legally inoperative.",
            "The disclaimer controls, because the buyer's act of installation constituted a superseding acceptance of all interior pamphlet conditions.",
            "Neither controls, because contradictory terms invoke the knockout rule, deferring exclusively to common law gap-fillers.",
            "The disclaimer controls, provided it was printed in a conspicuous font."
        ],
        ans: 0,
        exp: "Under UCC § 2-316(1), words or conduct creating an express warranty and words or conduct tending to negate or limit a warranty shall be construed wherever reasonable as consistent with each other. However, if such a construction is unreasonable, the disclaimer of an express warranty is inoperative. You generally cannot explicitly promise something on the box and then disclaim that exact promise in the fine print."
    },
    // FACT PATTERN 2 (Q3-Q5)
    {
        id: 3,
        topic: "Formation / Promissory Estoppel & Bid Chopping",
        fp: "General Contractor (GC) is preparing a bid to build a new municipal library. Subcontractor (Sub) submits a bid to do the plumbing for $100,000. GC relies on Sub's bid and uses it to win the master contract. The day after winning, GC calls Sub and says, 'I won the bid, but I found another plumber willing to do it for $90,000. Will you lower your price to $85,000?' Sub refuses and revokes his original $100,000 bid. GC sues Sub to enforce the original $100,000 bid.",
        q: "Can GC successfully enforce Sub's original bid?",
        opts: [
            "Yes, because the subcontractor's bid became strictly irrevocable the moment the general contractor utilized it to secure the municipal award.",
            "No, because the subcontractor retained the absolute common law right of revocation until a formal written acceptance was executed.",
            "No, because by attempting to renegotiate a lower price (bid chopping), the general contractor effectively rejected the original offer and forfeited the equitable protection of promissory estoppel.",
            "Yes, but the general contractor's recovery is strictly limited to reliance damages rather than the full expectation interest."
        ],
        ans: 2,
        exp: "Under the Drennan rule, a subcontractor's bid is typically irrevocable if the GC foreseeably relies on it. However, this equitable protection is lost if the GC engages in 'bid shopping' or 'bid chopping' (trying to force the sub to lower their price or shopping the sub's bid around after winning). By demanding $85,000, GC rejected the offer, allowing Sub to validly revoke."
    },
    {
        id: 4,
        topic: "Formation / Promissory Estoppel (Obvious Mistake)",
        fp: "General Contractor (GC) is preparing a bid to build a new municipal library. Subcontractor (Sub) submits a bid to do the plumbing. Sub intends to bid $100,000, but due to a massive clerical error, Sub's written bid states the price is $10,000. The next lowest plumbing bid GC receives is $105,000. GC immediately uses Sub's $10,000 bid, wins the contract, and accepts Sub's bid. Sub realizes the error and revokes.",
        q: "Can GC enforce the $10,000 bid against Sub under the doctrine of promissory estoppel?",
        opts: [
            "Yes, because unilateral mistakes never provide a valid defense when a commercial counterparty has materially relied on the provided figure.",
            "No, because the massive disparity between Sub's bid and the other bids means GC knew or should have known it was a mistake, rendering GC's reliance unreasonable and unjustifiable.",
            "Yes, because subcontractors bear the strict assumption of risk for all internal mathematical miscalculations.",
            "No, because promissory estoppel is exclusively reserved for gratuitous familial promises rather than aggressive commercial bidding disputes."
        ],
        ans: 1,
        exp: "Promissory estoppel requires *justifiable* and *reasonable* reliance. If a bid is so low that the offeree (GC) knows or has reason to know that a mistake has been made (an 'obvious' or 'palpable' mistake), the GC cannot reasonably rely on it. The GC cannot snap up an offer that is clearly a clerical error."
    },
    {
        id: 5,
        topic: "Formation / Battle of Forms vs Mirror Image (Services)",
        fp: "General Contractor (GC) is preparing a bid to build a new municipal library. Subcontractor (Sub) submits a bid to do the plumbing for $100,000. GC relies on Sub's bid and uses it to win the master contract. GC then sends Sub a formal acceptance letter that states: 'I accept your $100,000 bid. You must utilize my specific proprietary scheduling software to log your hours.' Sub refuses to use the software and revokes the bid.",
        q: "Assuming promissory estoppel is not at issue, did GC's acceptance letter form a valid contract?",
        opts: [
            "No, because this is a service contract governed by the common law mirror image rule, and adding a new condition operates as a rejection and counteroffer.",
            "Yes, because under the UCC, the additional term automatically enters the agreement unless the subcontractor objects within a reasonable timeframe.",
            "Yes, because the software requirement constitutes a legally de minimis alteration to commercial performance.",
            "No, because the acceptance lacked independent, notarized consideration."
        ],
        ans: 0,
        exp: "A plumbing contract is a service contract governed by the common law. Under the common law 'mirror image rule,' an acceptance must exactly match the terms of the offer. Adding a new condition (using specific scheduling software) acts as a rejection and a new counteroffer, destroying the original offer."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Third Parties / Assignment (Void vs Prohibited)",
        fp: "Painter contracts to paint Owner's house for $5,000. The contract contains a clause stating: 'Any assignment of this contract or the rights hereunder is absolutely VOID.' Painter paints the house. Before Owner pays, Painter assigns the right to receive the $5,000 to Local Bank in exchange for a loan. Local Bank demands payment from Owner. Owner refuses.",
        q: "Is the assignment to Local Bank legally effective?",
        opts: [
            "Yes, because the right to receive commercial monetary compensation is universally immune from all contractual limitations.",
            "Yes, because an anti-assignment clause only destroys the right to assign, not the underlying power to assign.",
            "No, because explicit language declaring an assignment 'void' successfully destroys the power to assign, rendering the attempted transfer completely ineffective.",
            "No, because a bank lacks the specialized artistic skill required to assume the painting duties."
        ],
        ans: 2,
        exp: "A standard anti-assignment clause ('assignments are prohibited') merely destroys the right to assign, meaning the assignment is still effective but the assignor breaches the contract. However, if the clause explicitly states that assignments are 'VOID,' it destroys the POWER to assign. Any attempted assignment is legally ineffective, and the assignee (Bank) gets nothing."
    },
    {
        id: 7,
        topic: "Third Parties / Delegation of Requirements Contract",
        fp: "Ice Cream Shop has a requirements contract to buy 'all the milk we require for our shop' from Dairy Farm for one year. Halfway through the year, Ice Cream Shop sells its entire business to a massive national grocery chain, MegaMart. Ice Cream Shop delegates its duties and assigns its rights under the milk contract to MegaMart. Dairy Farm refuses to supply MegaMart.",
        q: "Is the delegation and assignment valid?",
        opts: [
            "Yes, because requirements contracts are freely delegable under the UCC.",
            "No, because assigning a requirements contract to a party with vastly different requirements materially alters the duty and burden of the obligor.",
            "Yes, provided MegaMart agrees to pay for the milk in advance.",
            "No, because all food supply agreements are considered highly specialized personal service contracts."
        ],
        ans: 1,
        exp: "Under UCC § 2-210, an assignment of rights or delegation of duties is invalid if it would materially change the duty of the other party, increase the burden/risk imposed on them, or impair their chance of obtaining return performance. Assigning a requirements contract from a small shop to a massive chain drastically alters the Dairy Farm's burden, invalidating the transfer."
    },
    {
        id: 8,
        topic: "Third Parties / Novation Elements",
        fp: "Painter contracts to paint Owner's house for $5,000. Painter gets busy and delegates the duty to paint to his friend, Dave. Painter calls Owner and asks, 'Is it okay if Dave paints the house instead of me?' Owner says, 'Sure, that's fine.' Dave paints the house but does a terrible job, spilling paint everywhere.",
        q: "Can Owner sue the original Painter for breach of contract?",
        opts: [
            "No, because the owner's verbal consent effectively transferred all liability to the delegate.",
            "No, because the original painter lost direct privity of contract.",
            "Yes, but only if the owner can prove the original painter acted with malicious intent when selecting the substitute.",
            "Yes, because mere consent to a delegation does not constitute a valid novation; the original obligor remains secondarily liable unless all parties expressly agree to a complete release."
        ],
        ans: 3,
        exp: "A valid delegation of duties does NOT relieve the original obligor (Painter) of liability, even if the obligee (Owner) consents to the delegation. The obligor remains liable as a surety if the delegate fails to perform properly. To completely escape liability, there must be a 'novation'—a clear agreement among all three parties explicitly releasing the original obligor from all future liability."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Terms / Express Terms vs. Trade Usage",
        fp: "Lumberjack and Mill sign a written contract for '1,000 logs of Premium Pine.' The contract explicitly defines Premium Pine as 'logs measuring exactly 12 feet in length.' Lumberjack delivers logs measuring 11.5 feet. When Mill rejects them, Lumberjack proves that in the local timber industry, 'Premium Pine' universally includes any log between 11 and 13 feet (trade usage).",
        q: "Which standard governs the required length of the logs?",
        opts: [
            "The explicit 12-foot requirement controls, because express terms always prevail over inconsistent trade usage.",
            "The 11-to-13-foot trade usage controls, because industry custom supersedes rigid boilerplate language.",
            "The UCC gap-filler of commercial reasonableness controls.",
            "The contract is rendered void for vagueness."
        ],
        ans: 0,
        exp: "Under UCC § 1-303 and § 1-303(e) [formerly 1-205], while trade usage, course of dealing, and course of performance can explain or supplement a contract, if they cannot be reasonably construed as consistent with the express terms of the agreement, the EXPRESS TERMS control."
    },
    {
        id: 10,
        topic: "Terms / Course of Performance vs Course of Dealing",
        fp: "Lumberjack and Mill sign a written contract for '1,000 logs of Premium Pine.' The contract explicitly defines Premium Pine as 'logs measuring exactly 12 feet in length.' Lumberjack delivers logs measuring 11.5 feet. When Mill rejects them, Lumberjack proves that in the local timber industry, 'Premium Pine' universally includes any log between 11 and 13 feet (trade usage).\n\nAssume instead the contract called for 12 monthly shipments of 'Premium Pine logs.' The contract contained no definition of length. In months 1, 2, and 3, Lumberjack delivered 11.5-foot logs. Mill accepted and paid for them without objection. In month 4, Mill suddenly rejected 11.5-foot logs.",
        q: "What legal concept prevents Mill from rejecting the month 4 logs?",
        opts: [
            "Course of dealing.",
            "Course of performance, because accepting repeated tenders under this specific contract without objection establishes the meaning of the ambiguous term.",
            "The perfect tender rule.",
            "Promissory estoppel."
        ],
        ans: 1,
        exp: "Course of performance refers to the parties' conduct under the CURRENT contract that involves repeated occasions for performance. Because Mill accepted the 11.5-foot logs without objection in the first three installments of this exact contract, that course of performance establishes that 11.5-foot logs satisfy the term 'Premium Pine' for this agreement."
    },
    {
        id: 11,
        topic: "Terms / Parol Evidence Rule (Collateral Agreements)",
        fp: "Lumberjack and Mill sign a completely integrated written contract for the delivery of 1,000 pine logs for $10,000. During negotiations, Mill orally offered to buy Lumberjack's used chainsaw for $500. Lumberjack orally agreed. The written log contract says nothing about a chainsaw.",
        q: "If Lumberjack refuses to sell the chainsaw, can Mill introduce evidence of the oral agreement?",
        opts: [
            "No, because the integration clause creates an irrebuttable presumption encompassing all property discussed during negotiations.",
            "No, because the sale of commercial equipment strictly requires a separate notarized document.",
            "Yes, because the sale of the chainsaw constitutes an entirely distinct, naturally separate collateral agreement supported by its own independent consideration.",
            "Yes, because the Parol Evidence Rule never applies to transactions between specialized merchants."
        ],
        ans: 2,
        exp: "The Parol Evidence Rule does NOT bar evidence of a 'collateral agreement'—a completely distinct, separate contract that might naturally be made separately from the main agreement and is supported by separate consideration. Buying a used chainsaw is a separate collateral transaction from the main $10k log delivery contract."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Performance / Excuse of Condition (Impossibility)",
        fp: "Owner hires Builder to construct a custom mansion. The contract states: 'Final payment of $200,000 is expressly conditioned upon Builder securing a certificate of approval from Architect Smith.' Builder finishes the mansion perfectly. However, Architect Smith unexpectedly dies in a car crash before he can inspect the building.",
        q: "Must Owner make the final payment to Builder?",
        opts: [
            "No, because an express condition requires strict, absolute compliance regardless of intervening circumstances.",
            "No, because Builder assumed the strict risk of the architect's mortality.",
            "Yes, but only after substituting an architect appointed by a municipal judge.",
            "Yes, because the death of the specific person required to satisfy the condition renders it objectively impossible, legally excusing the condition and triggering the duty to pay."
        ],
        ans: 3,
        exp: "An express condition can be excused by objective impossibility. When a specific third party is required to provide a certificate, and that person dies or becomes permanently incapacitated, the condition is excused (provided the builder's work was actually satisfactory/complete), and the owner must pay to avoid a grossly disproportionate forfeiture."
    },
    {
        id: 13,
        topic: "Performance / Waiver of Condition & Retraction",
        fp: "Owner hires Builder to construct a custom mansion. The contract states: 'Final payment of $200,000 is expressly conditioned upon Builder securing a certificate of approval from Architect Smith.' Builder finishes the mansion perfectly. However, Architect Smith unexpectedly dies in a car crash before he can inspect the building.\n\nAssume Architect Smith is alive. Before Builder finishes the house, Owner says, 'Don't worry about getting Smith's certificate, I'll pay you anyway.' A month later, before Builder finishes, Owner changes his mind and says, 'I revoke my waiver; you must get Smith's certificate.' Builder had not yet changed his behavior based on the waiver.",
        q: "Is Owner's retraction of the waiver legally effective?",
        opts: [
            "Yes, a party may retract a waiver of an executory condition at any time before the time for occurrence has passed, provided the other party has not materially changed position in detrimental reliance.",
            "No, because waivers of express conditions are permanent and irrevocable once communicated to a commercial counterparty.",
            "Yes, because construction contracts exclusively require written waivers.",
            "No, because the builder inherently relies on all verbal statements issued by the primary financier."
        ],
        ans: 0,
        exp: "A party who waives a condition that is not yet due to occur can retract that waiver and reinstate the condition, AS LONG AS they provide reasonable notice AND the other party has not yet materially changed their position in detrimental reliance on the waiver. Since Builder hadn't changed behavior, Owner can successfully retract."
    },
    {
        id: 14,
        topic: "Performance / Prevention Doctrine",
        fp: "Owner hires Builder to construct a custom mansion. The contract states: 'Final payment of $200,000 is expressly conditioned upon Builder securing a certificate of approval from Architect Smith.' Builder finishes the mansion perfectly. However, Architect Smith unexpectedly dies in a car crash before he can inspect the building.\n\nAssume Architect Smith is alive. Builder finishes the house. Owner, wanting to avoid paying, secretly pays Architect Smith $10,000 to maliciously refuse to issue the certificate. Smith refuses to issue it.",
        q: "What is the legal effect of Owner's actions?",
        opts: [
            "The contract is mutually rescinded due to illegality.",
            "The condition is legally excused under the prevention doctrine, because a party cannot rely on the failure of a condition that they themselves wrongfully hindered in bad faith.",
            "The builder must sue the architect for tortious interference before pursuing the owner.",
            "The owner is shielded from liability because express conditions demand literal satisfaction."
        ],
        ans: 1,
        exp: "Under the prevention doctrine, if a party whose duty is subject to a condition wrongfully (in bad faith) prevents or hinders the occurrence of that condition (like bribing the architect to withhold the certificate), the condition is legally excused. The Owner must pay."
    },
    // FACT PATTERN 6 (Q15-Q17)
    {
        id: 15,
        topic: "Remedies / Lost Volume Seller (Higher Resale Price)",
        fp: "High-volume retail Boat Dealer sells standard, mass-produced speedboats. Buyer signs a contract to purchase a speedboat for $50,000. Buyer breaches and refuses to pay. Boat Dealer immediately resells the exact same boat to another customer for $52,000. Boat Dealer has a massive warehouse with an unlimited supply of these exact speedboats.",
        q: "Is Boat Dealer entitled to recover damages from Buyer despite reselling the boat for a higher price?",
        opts: [
            "No, because the dealer successfully mitigated the damages and actually generated a superior profit, zeroing out all expectation interests.",
            "No, because the UCC strictly prohibits double recovery in consumer transactions.",
            "Yes, as a 'lost volume seller,' the dealer is entitled to the lost profit from the breached sale because they would have made two separate sales and two profits if the buyer hadn't breached.",
            "Yes, but the recovery is strictly limited to the two-thousand-dollar differential."
        ],
        ans: 2,
        exp: "Under UCC § 2-708(2), a 'lost volume seller' (one with unlimited supply) can recover their lost profit from a breaching buyer, regardless of whether they resell the exact same item to someone else. The logic is that had the buyer not breached, the dealer would have sold TWO boats. The fact that the second buyer paid more does not erase the lost profit from the first, breached sale."
    },
    {
        id: 16,
        topic: "Remedies / Consequential Damages (Hadley v. Baxendale)",
        fp: "Miller runs a flour mill. A critical gear breaks, halting all production. Miller hires Carrier to transport the gear to an engineer. Miller tells Carrier: 'This is just a spare part, take your time.' Carrier negligently delays delivery by 10 days. The mill is shut down the whole time, losing $100,000 in profits.",
        q: "Can Miller recover the $100,000 in lost profits from Carrier?",
        opts: [
            "Yes, because the carrier's direct negligence was the 'but-for' cause of the financial injury.",
            "Yes, because lost profits are the standard measure of direct expectation damages in commercial transport agreements.",
            "No, because the amount is too speculative to calculate with reasonable certainty.",
            "No, because the consequential damages were not foreseeable to the carrier at the time of contracting, as Miller explicitly lied about the urgency of the shipment."
        ],
        ans: 3,
        exp: "Under Hadley v. Baxendale, consequential damages (like lost profits) are only recoverable if they were reasonably foreseeable to the breaching party at the time the contract was made. Because Miller explicitly told Carrier it was just a 'spare part,' the massive lost profits from a total shutdown were not foreseeable."
    },
    {
        id: 17,
        topic: "Remedies / Liquidated Damages (Reasonable at Formation, Zero Actual)",
        fp: "City hires Builder to construct a bridge. The contract contains a liquidated damages clause: 'Builder pays $1,000 per day for any delay.' At the time of contracting, this was a highly reasonable estimate of the traffic disruption costs. Builder is 10 days late. However, due to an unrelated pandemic, the city was completely locked down during those 10 days, meaning traffic was zero, and the City suffered absolutely $0 in actual damages.",
        q: "Under the modern view and the UCC approach to liquidated damages, is the clause enforceable?",
        opts: [
            "No, because the enforcement of a penalty clause when zero actual damages occurred violates fundamental commercial public policy.",
            "Yes, because a liquidated damages clause is enforceable if it was a reasonable forecast of harm viewed as of the time the contract was originally formed, regardless of the ultimate actual damages.",
            "No, because government entities are required to prove actual out-of-pocket losses.",
            "Yes, but the amount is reduced to a nominal statutory minimum."
        ],
        ans: 1,
        exp: "Under the modern Restatement and UCC § 2-718(1), a liquidated damages clause is enforceable if the amount is reasonable in light of EITHER the anticipated harm (at the time of contracting) OR the actual harm caused by the breach. Because $1,000/day was highly reasonable at the time of formation, the clause is valid even if actual damages ended up being zero."
    },
    // FACT PATTERN 7 (Q18-Q20)
    {
        id: 18,
        topic: "Performance / Anticipatory Repudiation vs Insolvency",
        fp: "Seller agrees to deliver 1,000 laptops to Buyer on credit, payment due 30 days after delivery. A week before delivery, Seller reads a verified financial report showing Buyer is technically insolvent. Buyer has not missed any payments yet and has not communicated any refusal to perform.",
        q: "Does Buyer's insolvency constitute an automatic anticipatory repudiation?",
        opts: [
            "No, mere insolvency does not constitute a repudiation, though it provides reasonable grounds for the seller to demand adequate assurances.",
            "Yes, because an inability to pay debts as they come due legally terminates all outstanding executory commercial agreements.",
            "Yes, because bankruptcy triggers automatic federal cancellation protocols.",
            "No, because the seller must wait until the 30-day payment window expires."
        ],
        ans: 0,
        exp: "Mere insolvency does NOT constitute an anticipatory repudiation. A repudiation requires a clear and unequivocal statement or act indicating a refusal/inability to perform. However, learning of a buyer's insolvency absolutely provides the seller with 'reasonable grounds for insecurity,' allowing them to demand adequate assurances (e.g., cash payment) under UCC § 2-609."
    },
    {
        id: 19,
        topic: "Performance / Stoppage in Transit (UCC 2-705)",
        fp: "Seller agrees to deliver 1,000 laptops to Buyer on credit, payment due 30 days after delivery. A week before delivery, Seller reads a verified financial report showing Buyer is technically insolvent. Buyer has not missed any payments yet and has not communicated any refusal to perform.\n\nAssume Seller had already shipped the laptops via train. While the laptops are still in transit, Seller discovers Buyer's insolvency.",
        q: "What right does Seller have under the UCC regarding the shipped goods?",
        opts: [
            "The seller must allow delivery but can sue immediately for full expectation damages.",
            "The seller has absolutely no rights once the goods are entrusted to an independent commercial carrier.",
            "The seller may stop delivery of the goods in transit and refuse delivery except for cash payment.",
            "The seller may intercept the train, provided they secure a writ of replevin."
        ],
        ans: 2,
        exp: "Under UCC § 2-705, if a seller discovers that a buyer is insolvent while the goods are still in transit, the seller may stop the delivery of the goods by the carrier. Under UCC § 2-702, the seller can then refuse delivery except for cash payment."
    },
    {
        id: 20,
        topic: "Remedies / Buyer's Right of Replevin (UCC 2-502)",
        fp: "Seller agrees to deliver 1,000 laptops to Buyer on credit, payment due 30 days after delivery. A week before delivery, Seller reads a verified financial report showing Buyer is technically insolvent. Buyer has not missed any payments yet and has not communicated any refusal to perform.\n\nAssume instead that BUYER pre-paid $10,000 for a specific, identified custom laptop. Five days after Buyer made the payment, SELLER becomes completely insolvent and files for bankruptcy. The custom laptop is sitting finished in Seller's shop.",
        q: "What remedy does Buyer have to obtain the physical laptop?",
        opts: [
            "Buyer is strictly relegated to general unsecured creditor status in federal bankruptcy court.",
            "Buyer may seek punitive damages for fraudulent inducement.",
            "Buyer may invoke the doctrine of promissory estoppel to seize corporate assets.",
            "Buyer has a right of replevin to recover the identified goods because the seller became insolvent within 10 days after receipt of the first installment on their price."
        ],
        ans: 3,
        exp: "Under UCC § 2-502, a buyer who has paid part or all of the price of goods in which they have a special property interest (identified goods) may recover them from the seller if the seller becomes insolvent within 10 days after receipt of the first installment on their price."
    },
    // FACT PATTERN 8 (Q21-Q23)
    {
        id: 21,
        topic: "Performance / Impracticability (Generic Goods)",
        fp: "Textile Co. agrees to sell 10,000 yards of generic white cotton fabric to Manufacturer. Textile Co. plans to produce the fabric at its main factory in Georgia. A massive earthquake completely destroys the Georgia factory. Generic white cotton fabric is widely available from other suppliers, though at a slightly higher price.",
        q: "Is Textile Co.'s duty to perform discharged by impossibility/impracticability?",
        opts: [
            "No, because the contract was for generic goods not specifically identified to a single source, meaning the seller is expected to cover by purchasing substitute goods on the open market.",
            "Yes, because the destruction of the seller's primary production facility inherently constitutes a catastrophic force majeure event.",
            "Yes, because forcing a commercial entity to purchase from competitors is unconscionable.",
            "No, because the earthquake did not damage the buyer's physical premises."
        ],
        ans: 0,
        exp: "If a contract does NOT specify a particular source for generic goods, the destruction of the seller's intended source does not excuse performance. The seller is expected to cover by purchasing the generic goods on the open market. Because the fabric is widely available, performance is not objectively impossible."
    },
    {
        id: 22,
        topic: "Performance / Impracticability (Severe Cost Increase/Embargo)",
        fp: "Textile Co. agrees to sell 10,000 yards of generic white cotton fabric to Manufacturer. Textile Co. plans to produce the fabric at its main factory in Georgia. A massive earthquake completely destroys the Georgia factory. Generic white cotton fabric is widely available from other suppliers, though at a slightly higher price.\n\nAssume instead the contract was for rare 'Rhodian Silk,' sourced exclusively from a foreign nation. Suddenly, the U.S. government passes a strict legal embargo making it a felony to import goods from that nation. Obtaining the silk legally is now impossible, though it can be smuggled for 20x the price.",
        q: "Is Textile Co. excused from performance?",
        opts: [
            "No, because the goods can still technically be obtained through illicit black-market channels.",
            "Yes, because supervening governmental regulations that render performance illegal fundamentally discharge the duty under the doctrine of impracticability.",
            "No, because international embargoes are considered foreseeable geopolitical risks in modern global commerce.",
            "Yes, but only if the seller explicitly negotiates a formal termination fee."
        ],
        ans: 1,
        exp: "Performance is excused under the doctrine of impracticability/impossibility if a supervening governmental regulation or law makes performance illegal. A party is never legally required to commit a felony (smuggling) to fulfill a commercial contract."
    },
    {
        id: 23,
        topic: "Performance / Temporary Impracticability",
        fp: "Textile Co. agrees to sell 10,000 yards of generic white cotton fabric to Manufacturer. Textile Co. plans to produce the fabric at its main factory in Georgia. A massive earthquake completely destroys the Georgia factory. Generic white cotton fabric is widely available from other suppliers, though at a slightly higher price.\n\nAssume the contract was for building a house. An unexpected national labor strike halts all construction across the country for two months. After two months, the strike ends. Building the house will cost exactly the same amount, just two months later.",
        q: "What is the legal effect of the two-month strike on the builder's duty?",
        opts: [
            "It totally discharges the contract, allowing both parties to walk away without liability.",
            "It acts as a breach of contract by the builder, entitling the owner to expectation damages.",
            "It temporarily suspends the duty to perform, but does not discharge the contract since the delay does not make performance materially more burdensome.",
            "It forces the contract into mandatory municipal arbitration."
        ],
        ans: 2,
        exp: "Temporary impracticability (like a temporary strike or weather event) suspends the duty to perform while the impracticability exists. It does NOT completely discharge the contract unless the delay makes the ultimate performance materially more burdensome or completely defeats the purpose of the contract."
    },
    // FACT PATTERN 9 (Q24-Q25)
    {
        id: 24,
        topic: "Consideration / UCC Modifications (Good Faith)",
        fp: "Merchant X agrees to sell 100 industrial printers to Merchant Y for $500 each. Before delivery, severe, unexpected inflation hits the technology sector. X calls Y and honestly explains he will lose money unless Y agrees to increase the price to $550. Y wants the printers and agrees in a signed writing. X delivers the printers. Y pays $500 each and refuses to pay the extra $50.",
        q: "Is the modification enforceable?",
        opts: [
            "No, because the preexisting duty rule strictly invalidates any commercial modification lacking fresh financial consideration.",
            "Yes, because inflation constitutes an absolute act of God.",
            "No, because the price increase violated federal price-gouging mandates.",
            "Yes, because under the UCC, a contract for the sale of goods may be modified without consideration if the modification is made in good faith."
        ],
        ans: 3,
        exp: "Unlike the common law preexisting duty rule, UCC § 2-209 allows contracts for the sale of goods to be modified WITHOUT consideration, provided the modification is sought in good faith. A severe market shift prompting an honest request for a price increase is a classic example of a good faith modification."
    },
    {
        id: 25,
        topic: "Discharge / Accord and Satisfaction (UCC 3-311)",
        fp: "Merchant X agrees to sell 100 industrial printers to Merchant Y for $500 each. Before delivery, severe, unexpected inflation hits the technology sector. X calls Y and honestly explains he will lose money unless Y agrees to increase the price to $550. Y wants the printers and agrees in a signed writing. X delivers the printers. Y pays $500 each and refuses to pay the extra $50.\n\nAssume a genuine dispute arises over whether the modification was made under duress. Y sends X a check for $525 per printer. The check is conspicuously marked 'Payment in full for all printer obligations.' X cashes the check but sues for the remaining $25 per printer.",
        q: "Can X recover the remaining balance?",
        opts: [
            "Yes, because a liquidated debt cannot be discharged by partial payment.",
            "No, because cashing a conspicuously marked 'payment in full' check on a genuinely disputed debt constitutes a binding accord and satisfaction, discharging the entire obligation.",
            "Yes, because physical negotiation of a check does not waive statutory UCC remedies.",
            "No, because the original $500 price creates an absolute commercial ceiling."
        ],
        ans: 1,
        exp: "Under UCC § 3-311, if a claim is subject to a good faith dispute, a debtor can offer a lesser amount as full settlement. If the debtor tenders a check conspicuously marked 'payment in full' and the creditor cashes it, an accord and satisfaction is achieved, completely discharging the debt."
    }
];
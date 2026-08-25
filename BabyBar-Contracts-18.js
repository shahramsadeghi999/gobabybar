const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Formation / UCC 2-207 (Conduct & Knockout)",
        fp: "Merchant X emails a purchase order to Merchant Y for 1,000 custom gears at $50 each. The purchase order contains a prominent clause: 'Objection is hereby made to any terms different from or in addition to those herein.' Y responds with an acknowledgment form stating: 'Acceptance is expressly made conditional on X's agreement to limit our liability for consequential damages.' X does not reply. Y ships the gears. X accepts and uses them. The gears fail, causing a factory shutdown.",
        q: "Is the limitation of liability clause part of the final contract governing this dispute?",
        opts: [
            "The limitation clause drops out because the writings failed to form a contract, and under UCC § 2-207(3), a contract formed by conduct knocks out conflicting terms.",
            "The limitation clause controls because X's physical acceptance of the goods constitutes an absolute ratification of all counteroffer terms under the mirror image rule.",
            "The contract is entirely void due to a fundamental failure of mutual assent regarding core risk allocation provisions.",
            "Yes, because shipping the goods served as the final determinative legal action in the commercial sequence."
        ],
        ans: 0,
        exp: "Under UCC § 2-207(1), making an acceptance 'expressly conditional' on new terms transforms the response into a counteroffer. Because X never expressly assented to Y's terms, no contract was formed by the writings. However, under § 2-207(3), a contract was formed by their CONDUCT (shipping and using the goods). The resulting contract consists of terms on which the writings agree, plus UCC gap-fillers. The limitation of liability clause drops out entirely."
    },
    {
        id: 2,
        topic: "Formation / UCC 2-207 (Advance Objection to Additional Terms)",
        fp: "Merchant X emails a purchase order to Merchant Y for 1,000 custom gears at $50 each. The purchase order contains a prominent clause: 'Objection is hereby made to any terms different from or in addition to those herein.' Y responds with an acknowledgment form stating: 'Acceptance is expressly made conditional on X's agreement to limit our liability for consequential damages.' X does not reply. Y ships the gears. X accepts and uses them.\n\nAssume instead that Y did NOT use the 'expressly conditional' language. Y's acknowledgment simply contained a standard acceptance clause but quietly added the limitation of liability clause on the reverse side. X received it, didn't reply, and accepted the goods.",
        q: "Does the limitation of liability clause enter the contract under this modified scenario?",
        opts: [
            "Yes, because failure to object within ten days conclusively binds the recipient merchant to all proposed additional terms.",
            "No, because X's original offer expressly objected in advance to any additional or different terms, preventing them from entering the agreement.",
            "Yes, because limitations of liability are considered standard trade usage in the heavy machinery industry.",
            "No, because the terms were printed on the reverse side of the document."
        ],
        ans: 1,
        exp: "Under UCC § 2-207(2), between merchants, additional terms automatically become part of the contract UNLESS: (a) the offer expressly limits acceptance to its terms, (b) they materially alter it, or (c) notification of objection is given. Because X's original offer expressly gave advance notification of objection to any additional terms, Y's new term cannot enter the contract, even if it wasn't a material alteration."
    },
    {
        id: 3,
        topic: "Formation / Statute of Frauds (Material Alteration in Confirming Memo)",
        fp: "Merchant X emails a purchase order to Merchant Y for 1,000 custom gears at $50 each. The purchase order contains a prominent clause: 'Objection is hereby made to any terms different from or in addition to those herein.' Y responds with an acknowledgment form stating: 'Acceptance is expressly made conditional on X's agreement to limit our liability for consequential damages.' X does not reply. Y ships the gears. X accepts and uses them.\n\nAssume the original agreement was oral. Y later sent a signed confirmatory memo that accurately stated the price and quantity, but also added the limitation of liability clause. X received it and didn't object. A dispute over damages arises.",
        q: "What is the legal effect of the limitation of liability clause included in the confirmatory memo?",
        opts: [
            "It becomes a binding part of the agreement because X failed to provide a written objection within the statutory 10-day window.",
            "It establishes an implied novation.",
            "It does not become part of the contract because limiting consequential damages is a material alteration, requiring express assent even between merchants.",
            "It renders the entire oral contract completely unenforceable under the strict application of the Statute of Frauds."
        ],
        ans: 2,
        exp: "Under UCC § 2-207, a written confirmation of an oral agreement operates as an acceptance even if it contains additional terms. Between merchants, these additional terms enter the contract UNLESS they materially alter it. A clause significantly limiting liability for consequential damages is almost universally considered a 'material alteration' and thus drops out unless X explicitly agrees to it."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Defenses / Statute of Frauds (One-Year Provision)",
        fp: "Tech Startup orally offers to employ Engineer for exactly 3 years at a massive salary. Engineer excitedly quits his lucrative job in New York, sells his house at a loss, and moves to California in reliance on the promise. Startup fires him on his very first day of work without any cause.",
        q: "Does the Statute of Frauds bar the enforcement of this oral employment contract?",
        opts: [
            "No, because employment contracts are generally considered at-will under state law.",
            "Yes, because any employment agreement involving executive compensation must be formally notarized.",
            "No, because the engineer actually commenced physical performance by arriving for his first day of work.",
            "Yes, because a contract for exactly three years of employment cannot possibly be fully performed within one year from the date of formation."
        ],
        ans: 3,
        exp: "The Statute of Frauds requires a signed writing for contracts that cannot possibly be fully performed within one year from the date of formation. A contract for a specific term of three years cannot be completed in one year, so it falls squarely within the Statute of Frauds and is unenforceable if oral."
    },
    {
        id: 5,
        topic: "Defenses / Promissory Estoppel Exception to SOF",
        fp: "Tech Startup orally offers to employ Engineer for exactly 3 years at a massive salary. Engineer excitedly quits his lucrative job in New York, sells his house at a loss, and moves to California in reliance on the promise. Startup fires him on his very first day of work without any cause.",
        q: "Despite the Statute of Frauds, can Engineer enforce the promise against Tech Startup?",
        opts: [
            "Yes, under the doctrine of promissory estoppel, because the reliance was entirely foreseeable and extreme injustice can only be avoided by enforcement.",
            "No, because sophisticated professionals bear the absolute commercial risk of undocumented relocation.",
            "Yes, but the remedy is strictly limited to an injunction restoring his original New York employment.",
            "No, because promissory estoppel explicitly excludes all multi-year corporate agreements."
        ],
        ans: 0,
        exp: "When an oral contract is barred by the Statute of Frauds, a plaintiff may still seek enforcement (or at least reliance damages) under the doctrine of promissory estoppel. If the promisor reasonably expected the promise to induce action, and the promisee detrimentally relied on it (quitting a job, selling a house, and moving across the country), courts may enforce the promise to avoid gross injustice."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Third Parties / UCC Article 9 Anti-Assignment Rules",
        fp: "Painter owes Supplier $5,000. Painter contracts to paint Owner's house for $5,000. The contract explicitly states: 'All assignments of rights under this contract are completely VOID.' Painter successfully paints the house. He then immediately assigns the right to receive the $5,000 payment to Supplier to settle his previous debt. Owner refuses to pay Supplier, citing the 'void' clause.",
        q: "Is the assignment to Supplier legally valid despite the contract language?",
        opts: [
            "No, because explicitly declaring an assignment 'void' successfully destroys the underlying power of assignment under all circumstances.",
            "Yes, because under UCC Article 9, anti-assignment clauses restricting the assignment of accounts (the right to receive payment) are completely ineffective, even if they utilize the word 'VOID'.",
            "No, because the underlying service was intensely personal in nature.",
            "Yes, but only if the supplier agrees to entirely indemnify the owner against secondary litigation."
        ],
        ans: 1,
        exp: "This is a super-advanced UCC Article 9 exception. While at common law the word 'VOID' destroys the power to assign, UCC § 9-406(d) governs the assignment of 'accounts' (the right to payment for services rendered). Under Article 9, ANY contract term that prohibits, restricts, or requires consent for the assignment of an account is completely ineffective. The right to get paid is always freely assignable."
    },
    {
        id: 7,
        topic: "Third Parties / Promisor Defenses Against Assignee",
        fp: "Painter owes Supplier $5,000. Painter contracts to paint Owner's house for $5,000. The contract explicitly states: 'All assignments of rights under this contract are completely VOID.' Painter successfully paints the house. He then immediately assigns the right to receive the $5,000 payment to Supplier to settle his previous debt. Owner refuses to pay Supplier, citing the 'void' clause.\n\nAssume the assignment is entirely valid. However, Owner discovers that Painter used terrible, defective paint that peeled off the house the next day. Owner refuses to pay Supplier. Supplier sues Owner.",
        q: "Can Owner successfully assert the defective paint defense against Supplier?",
        opts: [
            "No, because financial assignees are holder-in-due-course actors immune from upstream service disputes.",
            "No, because the physical painting work was technically completed prior to the assignment.",
            "Yes, because the assignee stands precisely in the shoes of the assignor, meaning the obligor may assert any valid material breach defense against the assignee.",
            "Yes, but only if the supplier had actual, prior knowledge of the defective materials."
        ],
        ans: 2,
        exp: "An assignee (Supplier) stands in the shoes of the assignor (Painter). The obligor (Owner) can raise any defense against the assignee that it could have raised against the assignor, provided the defense arises from the contract itself. Because Painter materially breached by using defective paint, Owner's duty to pay is excused, even against the Supplier."
    },
    {
        id: 8,
        topic: "Third Parties / Delegation of Services",
        fp: "Painter owes Supplier $5,000. Painter contracts to paint Owner's house for $5,000. The contract explicitly states: 'All assignments of rights under this contract are completely VOID.' Painter successfully paints the house. He then immediately assigns the right to receive the $5,000 payment to Supplier to settle his previous debt. Owner refuses to pay Supplier, citing the 'void' clause.\n\nAssume instead that Painter got busy and delegated the physical duty of painting the house to his skilled apprentice. The contract was completely silent on delegation. Owner vehemently objects, claiming that painting his house is a non-delegable personal service.",
        q: "Is the delegation of the painting duty legally valid?",
        opts: [
            "No, because all service contracts inherently require the explicit consent of the property owner for any third-party substitution.",
            "Yes, because the original painter remains secondarily liable under a formal novation.",
            "No, because painting a specific residential structure involves distinct personal artistic judgment.",
            "Yes, because standard exterior house painting is considered a routine mechanical duty that does not require highly specialized personal skill or unique trust, making it freely delegable."
        ],
        ans: 3,
        exp: "Duties are generally freely delegable without the obligee's consent unless the contract expressly prohibits it or the duties involve highly specialized personal skill, artistic judgment, or unique trust (e.g., painting a custom portrait). Standard exterior house painting is considered a routine, mechanical duty that can be freely delegated."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Terms / Parol Evidence Rule (Complete Integration)",
        fp: "Buyer and Seller sign a completely integrated written contract for the sale of a used commercial boat for $50,000. The contract contains a prominent clause: 'Sold AS-IS. This document contains the entire agreement.' Prior to signing, Seller orally promised to repair a massive crack in the rudder before delivery. Seller delivers the boat with the cracked rudder.",
        q: "Can Buyer introduce evidence of the oral promise to fix the rudder?",
        opts: [
            "No, because the Parol Evidence Rule explicitly bars prior oral agreements that contradict a completely integrated written contract, such as an 'as-is' provision.",
            "Yes, because the repair of a vessel constitutes an independent collateral maritime contract.",
            "No, unless the repair cost exceeds the specific five-hundred-dollar threshold.",
            "Yes, because partially integrated contracts can be freely supplemented by any prior oral agreements."
        ],
        ans: 0,
        exp: "The Parol Evidence Rule prohibits the introduction of prior or contemporaneous oral agreements that contradict or supplement the terms of a 'completely integrated' written contract. The oral promise to repair the rudder directly contradicts the written 'as-is' term and is therefore barred."
    },
    {
        id: 10,
        topic: "Terms / Parol Evidence Rule (Condition Precedent to Formation)",
        fp: "Buyer and Seller sign a completely integrated written contract for the sale of a used commercial boat for $50,000. The contract contains a prominent clause: 'Sold AS-IS. This document contains the entire agreement.' Prior to signing, Seller orally promised to repair a massive crack in the rudder before delivery. Seller delivers the boat with the cracked rudder.\n\nAssume instead that just prior to signing the document, Buyer stated, 'I will only sign this if my marine surveyor approves the hull tomorrow.' Seller orally agreed. The surveyor inspected it the next day and rejected the hull. Seller sues Buyer for breach.",
        q: "Can Buyer introduce evidence of the oral condition regarding the surveyor's approval?",
        opts: [
            "No, because the merger clause strictly seals the final written document from external modifications.",
            "Yes, because parol evidence is universally admissible to demonstrate an oral condition precedent to the legal formation and existence of the entire contract.",
            "No, because the surveyor was not an authorized signatory.",
            "Yes, but only if the buyer sues in equity for unjust enrichment."
        ],
        ans: 1,
        exp: "A widely recognized exception to the Parol Evidence Rule allows a party to introduce extrinsic evidence demonstrating that the written agreement was subject to an oral condition precedent to its FORMATION. If the contract was never meant to take effect until the condition (surveyor approval) was met, the evidence is admissible to show no binding contract ever existed."
    },
    {
        id: 11,
        topic: "Terms / Parol Evidence Rule (Partial Integration)",
        fp: "Buyer and Seller sign a completely integrated written contract for the sale of a used commercial boat for $50,000. The contract contains a prominent clause: 'Sold AS-IS. This document contains the entire agreement.' Prior to signing, Seller orally promised to repair a massive crack in the rudder before delivery. Seller delivers the boat with the cracked rudder.\n\nAssume the contract did NOT have a merger clause and the court deemed it only 'partially integrated.' Buyer still wants to introduce evidence of the oral promise to fix the rudder to overcome the written 'Sold AS-IS' clause.",
        q: "Is the oral promise admissible under a partially integrated contract?",
        opts: [
            "Yes, because a partially integrated contract fundamentally lacks commercial binding authority.",
            "Yes, because partially integrated contracts can be freely supplemented by any and all prior oral agreements.",
            "No, because even a partially integrated contract cannot be contradicted by prior oral agreements, and an oral promise to repair directly contradicts the written 'as-is' term.",
            "No, because the statute of frauds mandates maritime repairs be formalized in a notarized writing."
        ],
        ans: 2,
        exp: "If a contract is only 'partially integrated' (intended as a final expression of the terms it contains, but not a complete expression of all terms), the Parol Evidence Rule allows the introduction of consistent additional terms to supplement the writing. HOWEVER, even a partially integrated contract cannot be CONTRADICTED by prior oral agreements. The oral promise to repair contradicts the 'as-is' term."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Performance / Retraction of Waiver",
        fp: "Owner hires Builder to build a shed. The contract clearly states: 'Payment is expressly conditioned on Builder utilizing solid oak lumber.' Builder begins framing with solid pine. Owner visits the site, sees the pine, and says, 'Pine is fine, I will pay you anyway.' A week later, Owner changes his mind and says, 'I retract my waiver; you must use oak.' Builder had already installed all the pine.",
        q: "Is Owner's retraction of the waiver legally effective?",
        opts: [
            "Yes, because waivers of express conditions must be formally notarized to achieve permanence.",
            "Yes, a party may retract a waiver of an executory condition at any time before the time for occurrence has passed without limitation.",
            "No, because verbal statements automatically supersede written boilerplate language.",
            "No, because the builder materially changed his position in detrimental reliance on the waiver prior to the retraction."
        ],
        ans: 3,
        exp: "A party who waives a condition can retract that waiver and reinstate the condition, AS LONG AS they provide reasonable notice AND the other party has not yet materially changed their position in detrimental reliance. Because Builder already installed the pine relying on the waiver, the Owner's power to retract is extinguished."
    },
    {
        id: 13,
        topic: "Performance / Prevention Doctrine",
        fp: "Owner hires Builder to build a shed. The contract clearly states: 'Payment is expressly conditioned on Builder utilizing solid oak lumber.' Builder begins framing with solid pine. Owner visits the site, sees the pine, and says, 'Pine is fine, I will pay you anyway.' A week later, Owner changes his mind and says, 'I retract my waiver; you must use oak.' Builder had already installed all the pine.\n\nAssume instead Owner never waived the condition. Builder tried to buy oak, but Owner secretly paid the only local lumberyard to refuse to sell oak to Builder. Builder used pine instead.",
        q: "Must Owner pay for the shed?",
        opts: [
            "Yes, the condition is excused under the prevention doctrine because the owner wrongfully hindered the occurrence of the condition in bad faith.",
            "No, because express conditions require strict compliance regardless of external sabotage.",
            "Yes, but only under the doctrine of substantial performance.",
            "No, because the builder failed to secure an alternate supply chain."
        ],
        ans: 0,
        exp: "Under the prevention doctrine, if a party whose duty is subject to a condition wrongfully (in bad faith) prevents or hinders the occurrence of that condition (like paying the lumberyard to block the sale of oak), the condition is legally excused. The Owner must pay."
    },
    {
        id: 14,
        topic: "Performance / Failure of Express Condition",
        fp: "Owner hires Builder to build a shed. The contract clearly states: 'Payment is expressly conditioned on Builder utilizing solid oak lumber.' Builder begins framing with solid pine. Owner visits the site, sees the pine, and says, 'Pine is fine, I will pay you anyway.' A week later, Owner changes his mind and says, 'I retract my waiver; you must use oak.' Builder had already installed all the pine.\n\nAssume Builder used pine entirely innocently, thinking it was oak. Owner refused to pay anything. The pine shed is structurally perfect and identical in value.",
        q: "Is Builder legally entitled to receive the contract payment?",
        opts: [
            "Yes, because the materials were identical in quality, resulting in zero diminution in value.",
            "Because it is an express condition, strict literal compliance is required; failure to use oak technically legally excuses the owner's duty to pay, though equitable forfeiture avoidance may apply.",
            "Yes, under the doctrine of substantial performance.",
            "No, because the perfect tender rule explicitly applies to all residential construction agreements."
        ],
        ans: 1,
        exp: "Unlike constructive conditions (which are satisfied by substantial performance), express conditions (using magic words like 'expressly conditioned on') require strict, literal compliance. Innocent failure to strictly comply technically excuses the other party's performance, though modern courts will sometimes excuse an express condition to prevent a grossly disproportionate forfeiture."
    },
    // FACT PATTERN 6 (Q15-Q17)
    {
        id: 15,
        topic: "Performance / Risk of Loss (Non-Merchant Tender)",
        fp: "Non-merchant Seller agrees to sell his lawnmower to Buyer for $400. Buyer is supposed to pick it up on Saturday. Seller puts the mower in his driveway on Saturday morning and texts Buyer: 'The mower is ready for pickup.' An hour later, a freak meteor completely destroys the mower. Buyer refuses to pay the $400.",
        q: "Who bears the risk of loss for the destroyed mower?",
        opts: [
            "The seller, because the risk of loss never passes until the buyer actually takes physical possession of the goods.",
            "The risk is split evenly because the destruction resulted from an unforeseeable act of God.",
            "The buyer, because for a non-merchant seller, the risk of loss passes to the buyer strictly upon the tender of delivery, which occurred when the seller made the goods available and provided notice.",
            "The seller, because he failed to physically load the item into the buyer's transport vehicle."
        ],
        ans: 2,
        exp: "Under UCC § 2-509(3), if the seller is a MERCHANT, the risk of loss passes to the buyer only on the buyer's actual receipt of the goods. But if the seller is NOT a merchant (like Neighbor), the risk passes to the buyer upon TENDER of delivery. Putting it in the driveway and texting 'it's ready' constitutes tender, so the Buyer bears the risk and must pay."
    },
    {
        id: 16,
        topic: "Performance / Risk of Loss (Merchant Receipt)",
        fp: "Non-merchant Seller agrees to sell his lawnmower to Buyer for $400. Buyer is supposed to pick it up on Saturday. Seller puts the mower in his driveway on Saturday morning and texts Buyer: 'The mower is ready for pickup.' An hour later, a freak meteor completely destroys the mower. Buyer refuses to pay the $400.\n\nAssume Seller was a retail Hardware Store. The store called Buyer to say the mower was ready for pickup. Before Buyer arrives, a meteor hits the store.",
        q: "Who bears the risk of loss in this scenario?",
        opts: [
            "The buyer, because the store successfully completed the tender of delivery by notifying the customer.",
            "The buyer, because driving to the location establishes constructive possession.",
            "The seller, but only if they failed to maintain adequate commercial property insurance.",
            "The merchant seller, because the risk of loss does not pass to the buyer until the buyer takes actual physical receipt of the goods."
        ],
        ans: 3,
        exp: "Under UCC § 2-509(3), if the seller IS a merchant (like the Hardware Store), the risk of loss passes to the buyer ONLY on the buyer's actual physical receipt of the goods. Tender is not enough. Because the Buyer had not yet received the mower, the merchant Seller bears the risk."
    },
    {
        id: 17,
        topic: "Performance / Risk of Loss (Breach Effect UCC 2-510)",
        fp: "Non-merchant Seller agrees to sell his lawnmower to Buyer for $400. Buyer is supposed to pick it up on Saturday. Seller puts the mower in his driveway on Saturday morning and texts Buyer: 'The mower is ready for pickup.' An hour later, a freak meteor completely destroys the mower. Buyer refuses to pay the $400.\n\nAssume the Hardware Store shipped a defective mower via common carrier to Buyer under a contract stating 'FOB Buyer's Home.' The truck was destroyed in transit by a meteor.",
        q: "Who bears the risk of loss for the destroyed mower?",
        opts: [
            "The seller, because shipping non-conforming goods gives a right of rejection, preventing the risk from passing.",
            "The buyer, because the risk of loss legally transferred the exact moment the goods were entrusted to the independent carrier.",
            "The shipping carrier, due to strict absolute liability for transit failures.",
            "The risk is split evenly under the doctrine of comparative commercial fault."
        ],
        ans: 0,
        exp: "Normally, in an FOB Destination contract, risk passes when the goods are tendered at the destination. HOWEVER, under UCC § 2-510, if a tender of goods so fails to conform to the contract as to give a right of rejection (shipping a defective mower), the risk of loss remains on the SELLER until cure or acceptance. Thus, Seller bears the risk."
    },
    // FACT PATTERN 7 (Q18-Q19)
    {
        id: 18,
        topic: "Terms / Disclaiming Implied Warranties",
        fp: "Consumer buys a heavy-duty drill from a Tool Store. The physical box features a highly conspicuous, bold disclaimer that states: 'SOLD AS IS.' Consumer uses the drill for standard household tasks. The drill motor unexpectedly explodes during normal use, severely injuring Consumer.",
        q: "Does the disclaimer legally exclude the implied warranty of merchantability?",
        opts: [
            "No, because the disclaimer failed to explicitly mention the exact word 'merchantability'.",
            "Yes, because under the UCC, conspicuous 'as is' language effectively excludes all implied warranties, including merchantability.",
            "No, because the sticker was attached to the product packaging rather than embedded in a separate written contract.",
            "Yes, but only if the buyer explicitly initialed the sticker prior to leaving the premises."
        ],
        ans: 1,
        exp: "Under UCC § 2-316(3)(a), unless the circumstances indicate otherwise, ALL implied warranties (both merchantability and fitness for a particular purpose) are completely excluded by expressions like 'as is', 'with all faults', or other language which in common understanding calls the buyer's attention to the exclusion of warranties, provided it is conspicuous."
    },
    {
        id: 19,
        topic: "Terms / Warranty Disclaimer vs Remedy Limitation",
        fp: "Consumer buys a heavy-duty drill from a Tool Store. The physical box features a highly conspicuous, bold disclaimer that states: 'SOLD AS IS.' Consumer uses the drill for standard household tasks. The drill motor unexpectedly explodes during normal use, severely injuring Consumer.",
        q: "Can Consumer successfully recover expectation damages for breach of the implied warranty of merchantability despite the disclaimer?",
        opts: [
            "Yes, because the seller is strictly liable for all manufacturing defects regardless of contractual language.",
            "Yes, because the exclusion of personal injury damages for consumer goods is prima facie unconscionable under UCC § 2-719.",
            "No, because a conspicuous 'as-is' clause legally disclaims all implied warranties entirely under UCC § 2-316, meaning no warranty was ever breached, rendering the unconscionability rules regarding remedy limitations completely inapplicable.",
            "No, because the buyer assumed the strict tort risk by operating the heavy machinery."
        ],
        ans: 2,
        exp: "This is an extremely advanced distinction. UCC § 2-719(3) makes LIMITING consequential damages for personal injury prima facie unconscionable. However, UCC § 2-316 allows a seller to DISCLAIM the warranty entirely (using 'as is'). If the warranty is effectively disclaimed, there is no breach of warranty at all. Since there is no breach, § 2-719 (which deals with limiting remedies *for a breach*) doesn't even come into play. (Note: The consumer would likely sue in tort for strict products liability instead, but they lose the contract warranty claim)."
    },
    // FACT PATTERN 8 (Q20-Q22)
    {
        id: 20,
        topic: "Remedies / Lost Volume Seller",
        fp: "Volume Boat Dealer sells standard, mass-produced boats. Buyer signs a contract to purchase a specific boat model for $50,000. Buyer breaches and refuses to pay. Dealer immediately resells that exact physical boat to another customer for $50,000. Dealer's wholesale cost to acquire the boat is $40,000. Dealer has an unlimited supply of these boats.",
        q: "What amount is Boat Dealer legally entitled to recover from the breaching Buyer?",
        opts: [
            "Zero damages, because the successful mitigation effectively neutralized the commercial detriment.",
            "Only incidental storage fees.",
            "The full $50,000 contract price.",
            "$10,000 in expected lost profit under the lost volume seller doctrine."
        ],
        ans: 3,
        exp: "Under UCC § 2-708(2), if the standard measure of damages (contract minus resale) is inadequate to put the seller in as good a position as performance would have done, a 'lost volume seller' (one with unlimited supply) can recover their lost profit. Had Buyer not breached, Dealer would have sold TWO boats and made TWO $10,000 profits, not one. Dealer recovers the $10k lost profit."
    },
    {
        id: 21,
        topic: "Remedies / Liquidated Damages (Penalty)",
        fp: "Volume Boat Dealer sells standard, mass-produced boats. Buyer signs a contract to purchase a specific boat model for $50,000. Buyer breaches and refuses to pay. Dealer immediately resells that exact physical boat to another customer for $50,000. Dealer's wholesale cost to acquire the boat is $40,000. Dealer has an unlimited supply of these boats.\n\nAssume the original contract contained a clause stating: 'In the event of breach, Buyer completely forfeits the entire $50,000 purchase price as liquidated damages.' Buyer breached after paying a $5,000 deposit. Dealer suffered exactly $1,000 in actual damages.",
        q: "Is the $50,000 forfeiture clause enforceable?",
        opts: [
            "The clause is an unenforceable penalty because it is grossly disproportionate to any reasonable forecast of actual harm.",
            "Yes, because sophisticated parties freely agreed to the terms.",
            "Yes, because vehicle depreciation is notoriously difficult to accurately appraise.",
            "No, because it was not explicitly approved by a judicial officer prior to the breach."
        ],
        ans: 0,
        exp: "Liquidated damages clauses are only enforceable if actual damages were difficult to estimate at formation AND the specified amount is a reasonable forecast of compensatory damages. A $50,000 penalty on a $50,000 contract is grossly disproportionate to any actual harm, making it an unenforceable penalty clause designed merely to punish."
    },
    {
        id: 22,
        topic: "Remedies / Restitution of Deposit",
        fp: "Volume Boat Dealer sells standard, mass-produced boats. Buyer signs a contract to purchase a specific boat model for $50,000. Buyer breaches and refuses to pay. Dealer immediately resells that exact physical boat to another customer for $50,000. Dealer's wholesale cost to acquire the boat is $40,000. Dealer has an unlimited supply of these boats.\n\nSince the $50,000 penalty clause is void, what happens to Buyer's $5,000 deposit, given Dealer suffered exactly $1,000 in actual damages?",
        opts: [
            "The dealer retains the entire deposit because breaching parties forfeit all rights to restitution.",
            "Buyer receives restitution of the deposit minus the seller's $1,000 actual damages, allowing Buyer to recover exactly $4,000.",
            "The buyer receives exactly $5,000 back because the contract is wholly voided by the breach.",
            "The dealer retains the deposit as a non-refundable punitive reserve."
        ],
        ans: 1,
        exp: "Even if a party willfully breaches a contract, modern courts (and the UCC) allow the breaching party to recover restitution for the benefit they conferred on the non-breaching party (the deposit), MINUS the actual damages caused by the breach. Thus, Customer recovers $4,000 to prevent Dealership's unjust enrichment."
    },
    // FACT PATTERN 9 (Q23-Q25)
    {
        id: 23,
        topic: "Consideration / UCC Modification (Good Faith)",
        fp: "Supplier agrees to sell 100 tons of specialized steel to Builder for $1,000 per ton. A severe, unprecedented global tariff suddenly makes the steel cost Supplier $3,000 per ton to produce. Supplier calls Builder and honestly says he will go bankrupt unless Builder agrees to pay $1,500 per ton. Builder desperately needs the steel and agrees in writing.",
        q: "Is the price modification enforceable?",
        opts: [
            "No, because the preexisting duty rule strictly invalidates modifications lacking fresh financial consideration.",
            "No, because the original price established a commercial ceiling.",
            "Yes, because under the Uniform Commercial Code, an agreement modifying a contract for the sale of goods needs no consideration to be binding, provided it is sought in good faith.",
            "Yes, but only under the doctrine of strict quasi-contractual restitution."
        ],
        ans: 2,
        exp: "Unlike the common law preexisting duty rule, UCC § 2-209(1) allows contracts for the sale of goods to be modified WITHOUT consideration, provided the modification is made in good faith. A severe, unprecedented market shock prompting an honest request to avoid bankruptcy is a classic example of a good faith modification."
    },
    {
        id: 24,
        topic: "Performance / Impracticability (Identified Source Destroyed)",
        fp: "Supplier agrees to sell 100 tons of specialized steel to Builder for $1,000 per ton. A severe, unprecedented global tariff suddenly makes the steel cost Supplier $3,000 per ton to produce. Supplier calls Builder and honestly says he will go bankrupt unless Builder agrees to pay $1,500 per ton. Builder desperately needs the steel and agrees in writing.\n\nAssume instead Builder refused the modification. Supplier then refused to deliver, citing commercial impracticability due to the 300% price spike. Also assume Supplier was contracted to sell 100 tons of rare 'Appalachian Oak' specifically harvested from a designated forest, but the entire forest burned down.",
        q: "Is Supplier's duty to deliver the Appalachian Oak discharged?",
        opts: [
            "No, because the supplier could theoretically purchase substitute oak on the open market.",
            "No, because the destruction did not affect the buyer's physical premises.",
            "Yes, because agricultural contracts enforce absolute strict liability.",
            "Yes, because the destruction of the specifically identified source of the goods renders performance objectively impossible, legally discharging the duty."
        ],
        ans: 3,
        exp: "If a contract requires goods to be sourced from a specifically identified source (e.g., 'a designated Appalachian forest'), and that source fails or is destroyed through no fault of the seller prior to delivery, performance is excused under the doctrine of objective impossibility/impracticability. The seller is not required to buy substitute goods."
    },
    {
        id: 25,
        topic: "Performance / Impracticability (Generic Goods)",
        fp: "Supplier agrees to sell 100 tons of specialized steel to Builder for $1,000 per ton. A severe, unprecedented global tariff suddenly makes the steel cost Supplier $3,000 per ton to produce. Supplier calls Builder and honestly says he will go bankrupt unless Builder agrees to pay $1,500 per ton. Builder desperately needs the steel and agrees in writing.\n\nAssume the contract was for 100 tons of generic oak (not identified to a specific forest). Supplier intended to use the Appalachian forest, which burned down. Generic oak is available elsewhere.",
        q: "Is Supplier's duty discharged under this generic goods scenario?",
        opts: [
            "No, because the contract was for generic goods not specifically identified to a single source, meaning the seller is expected to cover by purchasing substitute goods on the open market.",
            "Yes, because the destruction of the seller's primary production facility inherently constitutes a catastrophic force majeure event.",
            "Yes, because forcing a commercial entity to purchase from competitors is unconscionable.",
            "No, because the earthquake did not damage the buyer's physical premises."
        ],
        ans: 0,
        exp: "If a contract does NOT specify a particular source for generic goods, the destruction of the seller's intended source does not excuse performance. The seller is expected to cover by purchasing the generic goods on the open market. Because the oak is widely available, performance is not objectively impossible."
    }
];
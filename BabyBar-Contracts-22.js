const examData = [
    {
        id: 1,
        topic: "Formation / Unilateral vs Bilateral Offers",
        fp: "A dog owner posts flyers around the neighborhood stating, 'Reward of $1,000 to anyone who finds and returns my lost dog.' A local teenager sees the flyer, spends three days tirelessly searching the neighborhood, but ultimately fails to find the dog. The teenager demands compensation for the time spent searching.",
        q: "Is a contract formed obligating the dog owner to pay the teenager?",
        opts: [
            "No, because a unilateral contract is only accepted by complete performance by an offeree who knows of the offer.",
            "Yes, because the teenager detrimentally relied on the advertisement by spending three days searching.",
            "No, because reward posters are considered mere invitations to negotiate and cannot form a valid offer.",
            "Yes, because the teenager accepted the offer by initiating performance, which created a binding bilateral contract."
        ],
        ans: 0,
        exp: "A unilateral contract offer occurs when an offeror clearly indicates that completion of performance is the only manner of acceptance, or makes an offer to the public such as a reward or contest[cite: 3]. A unilateral contract is only accepted by complete performance by an offeree who knows of the offer[cite: 3]. Searching without finding the dog does not constitute complete performance, so no contract was formed[cite: 2, 3]."
    },
    {
        id: 2,
        topic: "Termination / Irrevocable Offers (Detrimental Reliance)",
        fp: "General Contractor (GC) is preparing a bid for a massive university construction project. Subcontractor submits a bid to GC, offering to do all electrical work for $15,000, provided GC accepts within a reasonable time after winning the university bid. GC uses Subcontractor's $15,000 figure to calculate and submit a total bid of $100,000. Two days later, GC wins the university bid. The next day, Subcontractor realizes he made a clerical error and the work will cost $25,000. Subcontractor calls GC to revoke the offer, but GC insists on accepting the $15,000 bid.",
        q: "Is Subcontractor obligated to do the work for $15,000?",
        opts: [
            "No, because the clerical error prevents mutual assent through the doctrine of mutual mistake.",
            "No, because an offer can be revoked at any time prior to express acceptance.",
            "Yes, because the offer became irrevocable for a reasonable period of time due to the general contractor's reasonable detrimental reliance on the bid.",
            "Yes, because the initial bid constituted a UCC firm offer which cannot be revoked by a merchant."
        ],
        ans: 2,
        exp: "An offer may become irrevocable under the doctrine of detrimental reliance if the offeree relied on the offeror's promise to their detriment, the reliance was reasonable, and the offeror knew or should have known the offeree would rely[cite: 3]. Using a subcontractor's bid to submit a general bid makes the sub's offer irrevocable for a reasonable time[cite: 2, 3]."
    },
    {
        id: 3,
        topic: "Acceptance / Silence as Acceptance",
        fp: "For the past two years, Wholesale Bakery has delivered 50 loaves of bread every Monday to Local Diner. Local Diner has consistently accepted the deliveries and mailed a check at the end of each month without ever explicitly placing a new order. On the first Monday of a new month, Wholesale Bakery drops off 50 loaves. Local Diner ignores the delivery, lets the bread spoil, and refuses to pay, arguing they never explicitly requested or accepted the bread.",
        q: "Did Local Diner's silence constitute acceptance of the delivery?",
        opts: [
            "No, because an offeree can never be forced to speak or have their silence serve as an acceptance under any circumstances.",
            "Yes, because the parties had prior dealings that would make it commercially reasonable for the offeror to consider the silence as acceptance.",
            "No, because the Uniform Commercial Code requires all ongoing supply contracts to be affirmed in writing monthly.",
            "Yes, because bread is a perishable good that automatically triggers implied acceptance upon physical delivery."
        ],
        ans: 1,
        exp: "Generally, an offeree cannot have their silence serve as an acceptance[cite: 3]. However, an exception exists if the parties had prior dealings or trade practices that would make it commercially reasonable for the offeror to consider the silence as acceptance[cite: 3]. The two-year history of accepting and paying for silent deliveries satisfies this exception[cite: 2, 3]."
    },
    {
        id: 4,
        topic: "Consideration / Promissory Estoppel",
        fp: "Uncle promises to give his nephew $10,000 for his upcoming birthday. Uncle warns his nephew not to waste the money. Nephew immediately signs a binding contract to purchase a $100,000 boat, intending to use the promised $10,000 as the down payment. Uncle learns of this purchase and revokes his promise to give the $10,000. Nephew sues Uncle for the money.",
        q: "Is Nephew entitled to the $10,000?",
        opts: [
            "Yes, because the promise to give a gift is supported by sufficient consideration since the nephew promised to spend it wisely.",
            "No, because the nephew's reliance on the promise to buy a $100,000 boat was not reasonable reliance that the uncle should have expected.",
            "Yes, under the doctrine of promissory estoppel, because the nephew reasonably relied on the promise by entering a binding contract.",
            "No, because a promise to give a gift is completely unenforceable since the gift-giver receives no legal benefit in return."
        ],
        ans: 1,
        exp: "A promise to give a gift is generally unenforceable due to lack of consideration[cite: 3]. Promissory estoppel can serve as a substitute if the promisee relied to their detriment, the reliance was reasonable, and the promisor knew or should have known they would rely[cite: 3]. However, buying a $100,000 boat based on a $10,000 birthday gift (after being warned not to waste it) is unreasonable reliance, so promissory estoppel will fail[cite: 2, 3]."
    },
    {
        id: 5,
        topic: "Defenses / Statute of Frauds (Year)",
        fp: "Developer orally agrees to hire Contractor to build a massive stadium complex that includes three arenas, a shopping mall, and a parking structure. The parties acknowledge that, realistically, it will take at least three years to complete the construction. Developer later breaches the oral agreement, and Contractor sues.",
        q: "Does this contract fall within the Statute of Frauds?",
        opts: [
            "Yes, because the parties realistically acknowledged the construction would take three years to complete.",
            "No, because contracts that involve the construction of new commercial buildings are expressly exempted from the Statute of Frauds.",
            "No, because under the rule assuming unlimited resources, the contract could theoretically be fully performed within one year.",
            "Yes, because any contract involving improvements to land automatically falls within the Statute of Frauds."
        ],
        ans: 2,
        exp: "Contracts that must take longer than a year to complete fall within the Statute of Frauds[cite: 3]. However, the rule assumes unlimited resources are available for performance[cite: 3]. With unlimited resources, one could theoretically build a massive stadium complex within a year. Therefore, it does not fall within the SOF[cite: 2, 3]."
    },
    {
        id: 6,
        topic: "Defenses / Statute of Frauds (Goods Specially Manufactured)",
        fp: "Law School orders 1,000 custom water bottles engraved with the school's unique crest from Manufacturer for $10,000. The agreement is made entirely over the phone. After Manufacturer creates 500 of the custom bottles, Law School calls to cancel the order, asserting the contract is unenforceable because it is not in writing.",
        q: "Is the contract enforceable against Law School?",
        opts: [
            "Yes, because contracts for goods specially manufactured for the buyer and not suitable for sale to others are an exception to the Statute of Frauds.",
            "Yes, because the Uniform Commercial Code does not require a writing for contracts between commercial institutions and merchants.",
            "No, because any contract for the sale of goods of $500 or more must be in writing to be enforceable.",
            "No, because the manufacturer had not yet fully completed the manufacturing of all 1,000 custom bottles."
        ],
        ans: 0,
        exp: "Contracts for the sale of goods of $500 or more generally fall within the Statute of Frauds and require a writing[cite: 3]. However, an exception exists for goods specially manufactured for the buyer and not suitable for sale to others, making the oral contract enforceable[cite: 2, 3]."
    },
    {
        id: 7,
        topic: "Defenses / Unilateral Mistake",
        fp: "General Contractor seeks bids for a massive campus renovation. Electrician submits a bid to do all the electrical work for $100. General Contractor, knowing from years of experience that electric work for this type of project normally costs around $10,000, immediately accepts the $100 bid. The next day, Electrician realizes he mistakenly bid for a single classroom rather than the whole campus, and tries to void the contract.",
        q: "Can Electrician defeat the formation of the contract?",
        opts: [
            "Yes, because the general contractor knew or should have known of the mistake, the mistake had a material effect, and the electrician did not absorb the risk.",
            "No, because unilateral mistake is never a valid defense to contract formation in commercial construction bidding.",
            "Yes, because electrical work for a campus constitutes an inherently ambiguous term under the Parol Evidence Rule.",
            "No, because the general contractor detrimentally relied on the bid by formally accepting it."
        ],
        ans: 0,
        exp: "A unilateral mistake will defeat enforcement if: (1) the non-mistaken party knew or should have known of the mistake, (2) the mistake has a material effect, and (3) the mistaken party did not absorb the risk[cite: 3]. Because General Contractor knew $100 was shockingly low for campus-wide work, Electrician can use unilateral mistake to defeat enforcement[cite: 2, 3]."
    },
    {
        id: 8,
        topic: "Defenses / Fraud (Non-Disclosure)",
        fp: "Homeowner is selling his house. He knows there is massive water damage and a severe hole in the roof. To hide this, he paints over the water stains and covers the hole right before putting the house on the market. Buyer tours the home. Homeowner makes no statements whatsoever regarding the roof or water damage. Buyer purchases the home, then discovers the damage and sues.",
        q: "Can Buyer assert the defense of misrepresentation to defeat the contract?",
        opts: [
            "No, because the homeowner did not make any affirmative verbal or written statements regarding the condition of the roof.",
            "No, because real estate purchases are governed by the strict doctrine of caveat emptor.",
            "Yes, because active concealment and non-disclosure of a material fact violating good faith amounts to a misrepresentation.",
            "Yes, but only if the buyer explicitly asked the homeowner about the roof during the personal tour."
        ],
        ans: 2,
        exp: "Non-disclosure amounts to a misrepresentation when a party fails to disclose a material fact that is a basic assumption of the contract, and the non-disclosure occurs in a way that violates good faith[cite: 3]. Actively painting over water damage to conceal it is a bad faith non-disclosure, allowing the buyer to assert misrepresentation[cite: 2, 3]."
    },
    {
        id: 9,
        topic: "Terms / Parol Evidence Rule (Partially Integrated)",
        fp: "Seller and Buyer sign a written agreement for the sale of 100 laptops. The document outlines the price, quantity, and delivery date, but it lacks a merger clause and is only two paragraphs long. Buyer later tries to introduce evidence of a pre-contract oral agreement that Seller would also include 100 free laptop carrying cases. Seller objects, citing the Parol Evidence Rule.",
        q: "Should the court admit the evidence of the oral agreement for the carrying cases?",
        opts: [
            "No, because the Parol Evidence Rule absolutely bars any prior oral agreements from being introduced into a written contract.",
            "Yes, because the writing is only partially integrated and the oral agreement provides a supplemental term that does not contradict the writing.",
            "No, because adding an additional item to a sale constitutes a contradicting term under the Uniform Commercial Code.",
            "Yes, because the lack of a merger clause establishes that the contract is completely void of integration."
        ],
        ans: 1,
        exp: "If a writing is partially integrated (not intended to represent the entire and total understanding), parol evidence may be used to supplement the writing with consistent additional terms, but not to contradict it[cite: 3]. Because the short document lacked a merger clause, it is likely partially integrated, and the free cases are a supplemental term, so the evidence is allowed[cite: 2, 3]."
    },
    {
        id: 10,
        topic: "Terms / Risk of Loss (Non-Merchant)",
        fp: "Lawyer, who is not a merchant, agrees to sell his old laptop to Student for $500. Student pays Lawyer via a mobile app. Lawyer tells Student, 'I left the laptop on my front porch, come pick it up.' Before Student arrives, a thief steals the laptop from the porch. Student demands a refund.",
        q: "Who absorbs the risk of loss in this transaction?",
        opts: [
            "Lawyer, because the risk of loss does not pass until the buyer takes actual physical possession of the goods.",
            "Student, because the risk of loss passed the moment the electronic payment was successfully processed.",
            "Lawyer, because placing electronics outdoors inherently violates the implied warranty of merchantability.",
            "Student, because in a non-common carrier case where the seller is not a merchant, risk of loss passes once the seller tenders the goods (makes them available)."
        ],
        ans: 3,
        exp: "In non-common carrier cases where the seller is NOT a merchant, the risk of loss passes from the seller to the buyer once the seller tenders the goods (makes them available)[cite: 3]. Because Lawyer made the laptop available on the porch, the risk of loss had already passed to Student when it was stolen[cite: 2, 3]."
    },
    {
        id: 11,
        topic: "Terms / Implied Warranty of Merchantability",
        fp: "Consumer buys a brand-new blender from Appliance Mart, a merchant that specializes in kitchen appliances. The first time Consumer uses the blender to make a standard fruit smoothie, the motor catches fire and shoots sparks, destroying the blender. The contract contained no express warranties.",
        q: "Did Appliance Mart breach a warranty?",
        opts: [
            "Yes, the implied warranty of fitness for a particular purpose, because the consumer relied on the store's expertise.",
            "No, because the consumer failed to negotiate an express warranty at the time of purchase.",
            "Yes, the implied warranty of merchantability, because the blender was not fit for its ordinary purpose.",
            "No, because the manufacturer of the blender is solely liable for internal electrical defects, not the retail seller."
        ],
        ans: 2,
        exp: "The implied warranty of merchantability is implied in all contracts for the sale of goods sold by a merchant[cite: 3]. It guarantees that goods are fit for their ordinary purpose[cite: 3]. A blender that catches fire while making a standard smoothie is not fit for its ordinary purpose, breaching the warranty[cite: 3]."
    },
    {
        id: 12,
        topic: "Terms / Disclaiming Express Warranties",
        fp: "Customer buys a used car from a dealership. The written contract features a bold, red stamp on the front page stating: 'DEALERSHIP EXPRESSLY GUARANTEES THIS ENGINE WILL BE DEFECT-FREE FOR 1 YEAR.' However, on the back page, a pre-printed clause states: 'All vehicles are sold AS IS and all express and implied warranties are hereby disclaimed.' The engine fails after two months.",
        q: "Is the dealership liable for the engine failure?",
        opts: [
            "No, because an 'AS IS' clause successfully disclaims all warranties, both express and implied.",
            "No, because the pre-printed boilerplate language supersedes any stamped additions on the front page.",
            "Yes, because while implied warranties can be disclaimed by an 'AS IS' clause, written express warranties cannot be disclaimed.",
            "Yes, but only if the customer can prove the dealership acted with fraudulent intent during the sale."
        ],
        ans: 2,
        exp: "A seller may make a general disclaimer (like an 'As is' clause) to disclaim implied warranties[cite: 3]. However, while oral express warranties can be disclaimed in writing, written express warranties cannot be disclaimed[cite: 3]. The written guarantee of a defect-free engine remains enforceable despite the 'AS IS' clause[cite: 3]."
    },
    {
        id: 13,
        topic: "Performance / Perfect Tender",
        fp: "Grocery Store orders 500 green apples from Orchard for $500. Orchard ships 495 green apples and 5 red apples. Grocery Store notices the nonconformity upon delivery.",
        q: "Under the UCC, what are Grocery Store's options?",
        opts: [
            "Grocery Store must accept the shipment but may deduct the proportional value of the 5 red apples from the payment.",
            "Grocery Store may only reject the 5 red apples and must pay for the 495 green apples.",
            "Grocery Store may reject the entire shipment, accept the entire shipment, or accept any commercial units and reject the rest.",
            "Grocery Store must give Orchard exactly thirty days to cure the defect before rejecting the shipment."
        ],
        ans: 2,
        exp: "In contracts for the sale of goods, the UCC perfect tender rule applies. If the seller fails to perfectly tender, the buyer has the right to reject the goods. The buyer can: 1) retain all the goods and sue for damages, 2) reject all the goods and sue, or 3) reject a commercial unit, keep the rest, and sue[cite: 3]."
    },
    {
        id: 14,
        topic: "Performance / Right to Cure",
        fp: "Retailer orders 300 red water bottles from Manufacturer, to be delivered on December 31. Manufacturer accidentally ships 299 red bottles and 1 black bottle on November 30. Retailer rejects the order. On December 15, Manufacturer ships 300 perfect red water bottles to Retailer. Retailer rejects the second shipment, claiming the contract was already breached.",
        q: "Was Retailer legally permitted to reject the second shipment on December 15?",
        opts: [
            "Yes, because the first non-conforming shipment constituted an absolute, incurable material breach of the contract.",
            "Yes, because the buyer's rejection of the first shipment immediately terminates the contract.",
            "No, because the seller is entitled to cure a defective delivery if the time stated for delivery has yet to expire and reasonable notice is given.",
            "No, because the perfect tender rule only applies to common law service contracts, not the sale of goods."
        ],
        ans: 2,
        exp: "A buyer cannot reject if the seller is entitled to the right to cure the perfect tender issue[cite: 3]. The seller has the opportunity to cure when the time stated for delivery (Dec 31) has yet to expire[cite: 3]. Because Manufacturer cured the defect by sending conforming goods on Dec 15 (before the deadline), Retailer cannot reject the second shipment[cite: 2, 3]."
    },
    {
        id: 15,
        topic: "Performance / Breach (Common Law)",
        fp: "Owner hires Builder to construct a custom patio for $10,000. Builder completes the patio, but uses a slightly different shade of brown brick for the border than specified in the contract. The patio is structurally sound and fully functional, but Owner refuses to pay the $10,000, claiming breach of contract.",
        q: "Is Builder entitled to payment?",
        opts: [
            "No, because the perfect tender rule requires exact compliance with all contractual terms in construction contracts.",
            "Yes, because Builder substantially performed, committing only a minor breach, meaning Owner must pay but can sue for damages representing the difference in value.",
            "No, because using the wrong brick constitutes an automatic material breach discharging the owner's duty to pay.",
            "Yes, but Builder must tear up the patio and rebuild it perfectly before any payment is due."
        ],
        ans: 1,
        exp: "Under the common law, a breach is minor if there was substantial but not complete performance[cite: 3]. If the defendant commits a minor breach, the plaintiff must still perform (pay) but is entitled to sue for damages[cite: 3]."
    },
    {
        id: 16,
        topic: "Excuses / Anticipatory Repudiation",
        fp: "Promoter hires Singer to perform at a concert on July 1. On June 15, Singer calls Promoter and unequivocally states: 'I am canceling my tour and will not perform on July 1.' Promoter hangs up the phone.",
        q: "What are Promoter's legal rights at this point?",
        opts: [
            "Promoter must wait until July 1 to see if Singer shows up before filing a lawsuit.",
            "Promoter may treat the contract as repudiated and sue immediately, suspend performance, treat it as rescinded, or urge Singer to perform.",
            "Promoter must send a written demand for adequate assurances and wait 30 days before taking legal action.",
            "Promoter has no legal rights because the statement was made orally rather than in writing."
        ],
        ans: 1,
        exp: "A party commits anticipatory repudiation if they make an unambiguous statement that they will no longer perform before performance is due[cite: 3]. The non-repudiating party may sue immediately, suspend and wait, treat it as rescission, or urge performance[cite: 3]."
    },
    {
        id: 17,
        topic: "Excuses / Frustration of Purpose",
        fp: "Fan rents a specific high-rise apartment room for one day for $1,000 for the sole purpose of watching the annual Thanksgiving Day Parade, which passes directly under the window. The landlord knows this is the sole purpose of the rental. The night before, the city unexpectedly cancels the parade due to a terrorist threat. Fan refuses to pay the $1,000.",
        q: "Will Fan's performance be excused?",
        opts: [
            "Yes, under the doctrine of impossibility, because it is literally impossible to occupy the apartment.",
            "Yes, under the doctrine of frustration of purpose, because the unforeseen cancellation completely frustrated the mutually known purpose of the contract.",
            "No, because the apartment is still physically available for the fan to occupy for the day.",
            "No, because terrorist threats are considered foreseeable risks in urban environments."
        ],
        ans: 1,
        exp: "Frustration of purpose excuses performance when an unforeseen circumstance completely frustrates the party's purpose for entering the agreement, both parties knew of this purpose at the time of making the contract, and the party didn't absorb the risk[cite: 3]. Because the parade cancellation destroyed the sole known purpose of the rental, Fan is excused[cite: 3]."
    },
    {
        id: 18,
        topic: "Excuses / Accord and Satisfaction",
        fp: "Buyer buys a car from Dealer for $10,000. Buyer discovers the air conditioning doesn't work and complains in good faith that the car is defective. Buyer sends Dealer a check for $8,000 conspicuously marked 'Payment in Full for the car.' Dealer deposits the check but then sues Buyer for the remaining $2,000.",
        q: "Will Dealer prevail in recovering the $2,000?",
        opts: [
            "Yes, because the pre-existing duty rule mandates payment of the original $10,000 contract price.",
            "Yes, because the UCC strictly prohibits accord and satisfaction through marked checks.",
            "No, because accepting a lesser amount in light of a good-faith dispute satisfies the consideration requirement for a valid accord and satisfaction.",
            "No, because any payment of money over $500 automatically extinguishes all underlying debts."
        ],
        ans: 2,
        exp: "An accord is an agreement to accept a different performance instead of the existing performance[cite: 3]. Simply paying less money is not new consideration, but accepting less money in light of a good faith dispute satisfies consideration[cite: 3]. By depositing the marked check, the new agreement (accord) was satisfied, discharging the original $10,000 obligation[cite: 2, 3]."
    },
    {
        id: 19,
        topic: "Remedies / Expectation Damages",
        fp: "Homeowner contracts with Roofer to repair a roof for $5,000. Roofer breaches and never starts the job. Homeowner hires a replacement roofer who charges $7,000 for the exact same work.",
        q: "What amount of expectation damages is Homeowner entitled to recover from Roofer?",
        opts: [
            "$5,000.",
            "$2,000.",
            "$7,000.",
            "$0, because Homeowner successfully mitigated the damages."
        ],
        ans: 1,
        exp: "Expectation damages place the injured party in the financial position they would have occupied had the contract been fully performed[cite: 3]. Homeowner expected a roof for $5,000 but had to pay $7,000. The difference of $2,000 puts Homeowner in the expected position[cite: 3]."
    },
    {
        id: 20,
        topic: "Third Party / Vesting of Rights",
        fp: "Mom contracts with Tutor to provide bar prep sessions for her daughter, Daughter. The next day, Daughter overhears the arrangement and excitedly emails a competitor prep company, paying a non-refundable $500 cancellation fee to drop their program in reliance on Mom's contract. Two days later, Mom and Tutor mutually agree to cancel their contract.",
        q: "Can Daughter sue Tutor to enforce the contract?",
        opts: [
            "No, because intended beneficiaries have no legal standing to enforce contracts.",
            "No, because the daughter did not explicitly notify the tutor of her reliance.",
            "Yes, because Daughter is an intended beneficiary and her rights vested when she materially changed her position in justifiable reliance on the benefit.",
            "Yes, because all family-related contracts are completely irrevocable upon creation."
        ],
        ans: 2,
        exp: "A third party beneficiary may prevent the removal or modification of a benefit if they were an intended beneficiary and their rights have vested[cite: 3]. Rights vest if the third party materially changes their position in justifiable reliance on the receipt of the benefit (canceling the other course for a $500 fee)[cite: 2, 3]."
    },
    {
        id: 21,
        topic: "Third Party / Delegation",
        fp: "Client hires Famous Portrait Artist to paint a custom portrait of Client's family for $10,000. Famous Portrait Artist decides to go on vacation and delegates the painting duty to his apprentice, a relatively unknown art student. Client refuses to accept the apprentice's work.",
        q: "Was this a valid delegation of duties?",
        opts: [
            "Yes, because delegations are freely permitted unless explicitly barred by the contract text.",
            "Yes, because the apprentice was acting under the legal supervision of the famous artist.",
            "No, because duties cannot be delegated if they involve personal judgment, special skill, or special trust in the delegator.",
            "No, because delegations inherently violate the Statute of Frauds without written consent from the obligee."
        ],
        ans: 2,
        exp: "Delegations are generally allowed as long as they do not materially change the obligee's expectancy[cite: 3]. However, delegation is NOT allowed when the duty delegated involves personal judgment, skill, or special trust in the delegator (like a custom painting by a famous artist)[cite: 2, 3]."
    },
    {
        id: 22,
        topic: "Third Party / Assignment",
        fp: "Uncle owes Mechanic $500 for car repairs. Uncle signs a written contract stating, 'I assign my right to receive $500 from my tenant's rent to Mechanic.' Uncle later calls the tenant and says, 'Do not pay Mechanic, pay me instead.'",
        q: "Is Uncle's assignment to Mechanic revocable?",
        opts: [
            "Yes, because assignments are inherently revocable at the whim of the assignor.",
            "Yes, because the assignment lacked independent consideration.",
            "No, because an assignment given to satisfy a pre-existing debt is an assignment for value, which cannot be revoked.",
            "No, because the tenant is an intended donee beneficiary."
        ],
        ans: 2,
        exp: "An assignment is 'for value' if it was given in exchange for consideration OR given to satisfy a pre-existing debt[cite: 3]. If an assignment is for value, it cannot be revoked[cite: 3]. Because Uncle assigned the rent to satisfy his debt to Mechanic, it is irrevocable[cite: 2, 3]."
    },
    {
        id: 23,
        topic: "Defenses / Incapacity",
        fp: "Patron gets extremely intoxicated at a bar to the point of slurring his words and staggering. An art dealer at the bar notices Patron's severe intoxication and convinces him to sign a contract to buy a $50,000 sculpture. The next morning, Patron sobers up and attempts to void the contract.",
        q: "Can Patron successfully defeat enforcement of the contract?",
        opts: [
            "No, because voluntary intoxication is never a defense to contract formation.",
            "Yes, because a party lacks capacity if they are intoxicated, and the dealer had reason to know of the severe intoxication.",
            "No, because the contract was memorialized in a signed writing, satisfying the Statute of Frauds.",
            "Yes, but only if the patron seeks equitable reformation rather than rescission."
        ],
        ans: 1,
        exp: "Contract enforcement may be defeated if a party lacked capacity at the time the contract was made, which includes severe intoxication if the other party knew or had reason to know of the impairment[cite: 3]."
    },
    {
        id: 24,
        topic: "Terms / Modification",
        fp: "Bakery contracts to buy 100 bags of flour from Mill for $20 each. Due to an unexpected global wheat shortage, Mill's costs skyrocket. Mill calls Bakery and says, 'I need to raise the price to $25 a bag just to break even.' Bakery agrees. Later, Bakery refuses to pay the extra $5 per bag.",
        q: "Is the modification enforceable?",
        opts: [
            "Yes, because under the UCC, modifications are valid without new consideration as long as they are made in good faith.",
            "No, because under the common law pre-existing duty rule, modifications require new consideration.",
            "No, because modifications over $500 must be sealed by a notary public.",
            "Yes, because the bakery waived its right to enforce the original contract price by accepting delivery."
        ],
        ans: 0,
        exp: "Because flour is a good, the UCC governs[cite: 3]. Under the UCC, a modification is valid and requires no additional consideration as long as it is made in good faith[cite: 2, 3]. A severe wheat shortage increasing costs is a good faith reason for modification[cite: 2, 3]."
    },
    {
        id: 25,
        topic: "Defenses / Ambiguous Terms",
        fp: "Restaurant and Supplier sign a contract for the delivery of '1,000 pounds of chicken.' Supplier intends to deliver older stewing chickens, while Restaurant expects young frying chickens (broilers). During negotiations, Supplier learned that Restaurant exclusively serves fried chicken and genuinely expects young broilers, but Supplier stayed silent and delivered the older stewing chickens anyway.",
        q: "Whose meaning of the term 'chicken' will prevail?",
        opts: [
            "The contract is completely void due to mutual mistake, and neither party's meaning prevails.",
            "Supplier's meaning prevails, because in commercial contracts, the seller inherently dictates the classification of inventory.",
            "Restaurant's meaning prevails, because if one party knows of the ambiguity and the other's intended meaning, the innocent party's meaning prevails.",
            "Neither party's meaning prevails, because parol evidence can never be used to define unambiguous dictionary terms like 'chicken'."
        ],
        ans: 2,
        exp: "If an agreement contains an ambiguous term and just one party is aware of the ambiguity, the meaning attached by the innocent party will prevail if the other party knew or had reason to know of the innocent party's meaning[cite: 3]. Because Supplier knew Restaurant expected broilers, Restaurant's meaning prevails[cite: 3]."
    }
];
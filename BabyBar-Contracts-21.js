const examData = [
    {
        id: 1,
        topic: "Applicable Law / Mixed Transactions",
        fp: "Studio signs a contract with TechCorp to purchase $50,000 worth of specialized sound mixing computers. The contract also includes a provision that TechCorp will provide 5 hours of installation services, valued at $1,000. TechCorp delivers the computers but does not install them. Studio sues.",
        q: "Which body of law governs this contract?",
        opts: [
            "The common law, because the installation of electronics is a specialized service.",
            "The Uniform Commercial Code (UCC) Article 2, because the goods predominate the contract.",
            "Both the UCC and the common law, with the UCC governing the computers and the common law governing the installation.",
            "The common law, because mixed transactions default to common law unless the parties are merchants."
        ],
        ans: 1,
        exp: "If a contract contains both goods and services, the court determines the governing law using the mixed transactions factor test, asking whether goods or services predominate[cite: 3]. Here, the $50,000 cost of the computers heavily predominates over the $1,000 installation service, so the UCC governs the entire contract[cite: 3]."
    },
    {
        id: 2,
        topic: "Formation / Advertisements",
        fp: "A local electronics store places a television commercial stating: 'We are overstocked! The first three customers who walk into our store on Saturday morning will get a brand new 65-inch television for just $10!' Bob camps out overnight, is the first customer through the doors on Saturday, and hands the manager a $10 bill. The manager refuses to sell the TV, claiming the ad was just an invitation to negotiate.",
        q: "Did the store's advertisement constitute a valid offer?",
        opts: [
            "No, because advertisements are universally considered mere invitations to make an offer.",
            "Yes, because Bob's act of camping out constituted detrimental reliance.",
            "No, because the advertisement was not in writing and signed by a merchant.",
            "Yes, because the ad contained sufficient certainty regarding the terms and could be accepted without additional negotiation."
        ],
        ans: 3,
        exp: "Generally, advertisements are not offers but rather invitations to deal[cite: 3]. However, an exception exists for ads that contain all the terms or sufficient certainty and may be accepted without additional negotiation or communication[cite: 3]. Because the ad specified the exact item, price, and the precise method of acceptance ('first three customers'), it was a valid offer[cite: 2, 3]."
    },
    {
        id: 3,
        topic: "Termination / Irrevocable Offers (Death)",
        fp: "On May 1, Homeowner emails a written offer to sell his riding lawnmower to Neighbor for $2,000, stating the offer will remain open for 14 days. Neighbor replies, 'Thank you for the offer,' and hands Homeowner $50 to keep the offer open. On May 5, Homeowner unexpectedly dies. On May 10, Neighbor emails Homeowner's estate, accepting the offer.",
        q: "Is Homeowner's estate obligated to sell the lawnmower?",
        opts: [
            "No, because the death of an offeror automatically terminates an offer by operation of law.",
            "No, because personal property contracts do not survive the death of the promisor.",
            "Yes, because the offer was supported by independent consideration, creating an option contract that survives death.",
            "Yes, because the Uniform Commercial Code firm offer rule makes written offers irrevocable upon death."
        ],
        ans: 2,
        exp: "Generally, an offer is terminated by operation of law if the offeror dies before the offeree accepts[cite: 3]. However, an offer may not be revoked, and survives death, if there is a valid option contract created by a promise to hold the offer open and additional consideration[cite: 2, 3]. Because Neighbor paid $50 to hold it open, an option contract was formed, binding the estate[cite: 2, 3]."
    },
    {
        id: 4,
        topic: "Termination / UCC Firm Offer",
        fp: "Wholesaler, a merchant of office supplies, signs a written letter offering to sell 500 desk chairs to Retailer for $50 each. The letter explicitly guarantees that the offer will be held open for six months. Four months later, Wholesaler revokes the offer. The next day, Retailer attempts to accept.",
        q: "Was Wholesaler's revocation valid?",
        opts: [
            "Yes, because a firm offer under the UCC cannot remain irrevocable for more than 90 days.",
            "No, because the written guarantee explicitly stated the offer would remain open for six months.",
            "Yes, because Retailer did not provide independent consideration to hold the offer open.",
            "No, because the offer was made by a merchant regarding the sale of goods."
        ],
        ans: 0,
        exp: "Under the UCC, a firm offer by a merchant in a signed writing providing assurance it will be held open is irrevocable[cite: 3]. However, under no circumstances shall the firm offer ever be valid for more than 90 days[cite: 3]. After 90 days, the offer does not disappear, but it becomes freely revocable[cite: 3]. Therefore, Wholesaler's revocation at four months was valid[cite: 3]."
    },
    {
        id: 5,
        topic: "Acceptance / Mirror Image Rule",
        fp: "Landscaper offers to trim Homeowner's trees for $400. Homeowner replies, 'I accept your offer, but I require you to use organic fertilizer.' Landscaper never replies and does not trim the trees.",
        q: "Did Homeowner's reply form a valid contract?",
        opts: [
            "Yes, because the additional term was a mere request that does not invalidate the acceptance.",
            "No, because under the common law, acceptance must mirror the exact terms of the offer, making the reply a counteroffer.",
            "Yes, under the UCC battle of the forms, the contract is formed and the organic fertilizer is treated as a proposal for addition.",
            "No, because landscaping contracts must satisfy the Statute of Frauds."
        ],
        ans: 1,
        exp: "Because this is a contract for services, the common law governs[cite: 3]. Under the common law, a valid acceptance requires the terms of the acceptance to mirror the terms of the offer; any additional or different terms create a counteroffer and operate as a rejection[cite: 2, 3]."
    },
    {
        id: 6,
        topic: "Acceptance / UCC 2-207",
        fp: "Factory, a merchant, sends a purchase order to Supplier, a merchant, for 10,000 bolts at $1 each. Supplier sends back an acknowledgment form accepting the order, but adds a clause stating: 'Any disputes arising from this contract shall be subject to mandatory binding arbitration.' The acknowledgment does not state that acceptance is conditional on Factory agreeing to the new term. Factory receives the goods and uses them.",
        q: "Is the arbitration clause included in the contract?",
        opts: [
            "No, because the inclusion of an arbitration clause materially alters the parties' obligations.",
            "Yes, because both parties are merchants and the clause was not expressly rejected.",
            "No, because under the mirror image rule, the acknowledgment was a counteroffer.",
            "Yes, because the acceptance was expressly conditional on the new terms."
        ],
        ans: 0,
        exp: "Under UCC 2-207(2) for a non-conditional acceptance between merchants, additional terms are added to the contract unless they materially alter the obligations, the offer limits acceptance to its terms, or the offeror rejects them[cite: 3]. An arbitration clause is a classic example of a term that materially alters the contract (surprise/hardship), so it is knocked out and not included[cite: 3]."
    },
    {
        id: 7,
        topic: "Acceptance / Mailbox Rule",
        fp: "On Monday, Seller mails an offer to sell his boat to Buyer. On Tuesday, Buyer decides she doesn't want the boat and mails a rejection letter. On Wednesday, Buyer changes her mind and mails an acceptance letter. On Thursday, Seller receives the acceptance letter. On Friday, Seller receives the rejection letter.",
        q: "Is a contract formed between Seller and Buyer?",
        opts: [
            "No, because the rejection letter was dispatched first, terminating the offer upon mailing.",
            "Yes, because the acceptance was dispatched before the rejection was received.",
            "No, because the seller's power of acceptance is destroyed the moment the rejection leaves the buyer's possession.",
            "Yes, because when a rejection is sent first followed by an acceptance, the first to be received by the offeror wins."
        ],
        ans: 3,
        exp: "If a rejection is sent first and then an acceptance, the standard mailbox rule does not apply; instead, the first communication to be received by the offeror wins[cite: 3]. Because the acceptance was received on Thursday before the rejection was received on Friday, a valid contract was formed[cite: 3]."
    },
    {
        id: 8,
        topic: "Consideration / Pre-Existing Duty",
        fp: "Contractor agrees to build an outdoor patio for Homeowner for $5,000, to be completed by Saturday. On Friday, Contractor realizes he will not finish on time and tells Homeowner he needs an extra $1,000 to hire a helper to finish by Saturday. Homeowner reluctantly agrees. Contractor finishes on Saturday, but Homeowner only pays $5,000.",
        q: "Is Contractor entitled to the additional $1,000?",
        opts: [
            "Yes, because Homeowner orally accepted the modification and Contractor detrimentally relied on it.",
            "Yes, because the hiring of a helper constitutes a severe, unforeseen circumstance.",
            "No, because under the pre-existing duty rule, a promise given in exchange for a duty already owed is not valid consideration.",
            "No, because the modification violates the UCC requirement that changes be made in good faith."
        ],
        ans: 2,
        exp: "Under the common law, a modification acts as a new contract and is only valid if there is new consideration for both parties[cite: 3]. A promise given in exchange for a duty already owed (finishing the patio by Saturday) is not valid consideration[cite: 3]. Because Contractor already owed the duty, the modification to pay $1,000 more is unenforceable[cite: 2, 3]."
    },
    {
        id: 9,
        topic: "Defenses / Statute of Frauds (Suretyship)",
        fp: "Son wants to buy a motorcycle from Dealership but has bad credit. Dad calls Dealership and orally promises: 'If my son fails to make his monthly payments, I will personally cover the debt.' Son defaults, and Dealership sues Dad for the payments.",
        q: "Is Dad's oral promise enforceable?",
        opts: [
            "Yes, because Dad's promise induced Dealership to extend credit to Son.",
            "No, because contracts where one promises to pay the debt of another fall within the Statute of Frauds and must be in writing.",
            "Yes, because family members are exempt from the suretyship provisions of the Statute of Frauds.",
            "No, because Dad did not receive any direct consideration from Dealership."
        ],
        ans: 1,
        exp: "Contracts where one promises to pay the debt of another (suretyship) fall within the Statute of Frauds and require a sufficient writing signed by the party to be charged[cite: 3]. Because Dad orally promised Dealership to pay the debt if his son failed to pay, the contract is within the SOF and is unenforceable without a writing[cite: 2, 3]."
    },
    {
        id: 10,
        topic: "Defenses / Statute of Frauds (Part Performance)",
        fp: "Alice orally agrees to sell her farm to Bob for $500,000. Bob immediately takes possession of the farm, begins remodeling the farmhouse, and pays Alice a $100,000 down payment. Alice then changes her mind and tries to evict Bob, arguing the oral land sale violates the Statute of Frauds.",
        q: "Will Bob be able to enforce the oral contract?",
        opts: [
            "Yes, because Bob took possession, made a payment, and made improvements, satisfying the part-performance exception to the Statute of Frauds.",
            "No, because land sale contracts are strictly barred by the Statute of Frauds without exception.",
            "Yes, because oral land sale contracts are permitted if the purchase price exceeds $100,000.",
            "No, because Bob must pay the entire purchase price to remove the contract from the Statute of Frauds."
        ],
        ans: 0,
        exp: "Contracts for the sale of land fall within the Statute of Frauds[cite: 3]. However, the part-performance exception allows enforcement if two of the following three are present: (1) Buyer takes possession, (2) Buyer makes payment to the seller, or (3) Buyer makes improvements on the land[cite: 3]. Bob did all three, so the oral contract is enforceable[cite: 2, 3]."
    },
    {
        id: 11,
        topic: "Defenses / Mutual Mistake",
        fp: "Buyer purchases a supposedly sterile cow from Seller for $500. Both parties genuinely believe the cow is barren. A few months later, it is discovered the cow is pregnant, making it worth $10,000. Seller sues to rescind the contract, claiming mistake.",
        q: "Can Seller successfully defeat enforcement of the contract?",
        opts: [
            "No, because the seller assumed the risk of the cow's fertility by failing to conduct a genetic test.",
            "No, because animal sales are governed by the rule of caveat emptor.",
            "Yes, because the mistake was unilateral on the part of the seller and materially altered the value.",
            "Yes, because both parties were mistaken about a basic assumption that materially affected the agreement, and Seller did not assume the risk."
        ],
        ans: 3,
        exp: "A mistake made by both parties will defeat enforcement if the mistake concerns a basic assumption on which the contract was made, has a material effect on the agreement, and the adversely affected party did not absorb the risk[cite: 3]. Both mistakenly believing the cow was barren satisfies mutual mistake, allowing rescission[cite: 2, 3]."
    },
    {
        id: 12,
        topic: "Terms / Risk of Loss",
        fp: "Buyer purchases a used lawnmower from Neighbor, who is not a merchant. Buyer pays via Venmo and Neighbor says, 'The mower is sitting on my driveway, come pick it up whenever you want.' Before Buyer arrives, a thief steals the mower. Buyer demands his money back.",
        q: "Who absorbs the risk of loss?",
        opts: [
            "Buyer, because in a non-common carrier case where the seller is not a merchant, risk of loss passes once the seller tenders the goods.",
            "Neighbor, because the seller retains the risk of loss until the buyer takes physical possession of the goods.",
            "Neighbor, because title to the goods had not yet officially transferred through a bill of sale.",
            "Buyer, because paying via an electronic application automatically transfers both title and risk of loss simultaneously."
        ],
        ans: 0,
        exp: "In non-common carrier cases, if the seller is not a merchant, risk of loss passes to the buyer once the seller tenders the goods, which means making the goods available[cite: 3]. Because Neighbor made the mower available on the driveway, the risk passed to Buyer[cite: 2, 3]."
    },
    {
        id: 13,
        topic: "Terms / Risk of Loss (FOB)",
        fp: "Computers Inc. in California orders 100 monitors from Supplier in New York. The contract states 'FOB California.' Supplier hands the monitors to a freight train carrier. The train crashes in Arizona, destroying all the monitors.",
        q: "Who absorbs the risk of loss?",
        opts: [
            "Computers Inc., because in a shipment contract, risk of loss passes to the buyer once the goods are given to the common carrier.",
            "Supplier, because FOB contracts are treated as destination contracts, and the risk of loss does not pass until the goods are delivered to the stated location.",
            "Both parties equally, because the goods were destroyed through an unforeseeable act of God.",
            "Computers Inc., because the buyer always assumes the risk of loss in interstate commercial transactions."
        ],
        ans: 1,
        exp: "FOB (free on board) contracts are treated as destination contracts[cite: 3]. In a destination contract, the risk of loss passes from the seller to the buyer once the goods are delivered to the stated location[cite: 3]. Because the contract was 'FOB California', Supplier bore the risk until they reached California[cite: 2, 3]."
    },
    {
        id: 14,
        topic: "Terms / Warranties",
        fp: "Homeowner goes to a local hardware store and tells the clerk, 'I need a heavy-duty sealant to waterproof my underground basement.' The clerk hands Homeowner a bucket of standard indoor wall paint. Homeowner applies it, and the basement immediately floods, causing $10,000 in damage. The paint bucket clearly stated 'For Indoor Dry Walls Only'.",
        q: "Which warranty did the hardware store breach?",
        opts: [
            "The express warranty of merchantability.",
            "The implied warranty of merchantability, because the paint was not fit for its ordinary purpose.",
            "The implied warranty of fitness for a particular purpose, because the clerk knew of Homeowner's specific need and Homeowner relied on the clerk's judgment.",
            "No warranty, because the homeowner was contributorily negligent by failing to read the bucket's label."
        ],
        ans: 2,
        exp: "The implied warranty of fitness for a particular purpose is created when the seller has reason to know of the particular purpose the buyer is purchasing the goods for, the seller knows the buyer is relying on their skill, and the buyer in fact relies[cite: 3]. The clerk breached this warranty by providing unfit indoor paint for basement waterproofing[cite: 3]."
    },
    {
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
    }
];
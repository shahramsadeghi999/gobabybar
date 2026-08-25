const examData = [
    {
        id: 1,
        topic: "Formation / Implied in Fact Contract",
        fp: "Driver leaves his malfunctioning car at Mechanic's shop with a note: 'My car keeps smoking from the engine, can you take a look for me. Sorry I had to leave the car like this, had to catch a flight.' Mechanic inspects the engine, replaces a broken radiator hose to fix the issue, and sends Driver a bill for $300. Driver refuses to pay, arguing they never discussed price or formally agreed to a repair contract.",
        q: "Is Driver legally obligated to pay Mechanic the $300?",
        opts: [
            "No, because the driver merely requested an inspection rather than an affirmative repair.",
            "No, because a contract for services over $100 requires a signed writing to be enforceable.",
            "Yes, under the doctrine of an implied-in-fact contract, because the driver's conduct indicated an understanding that compensation would be paid for the mechanic's services.",
            "Yes, but only under the Uniform Commercial Code's gap-filler provisions for missing price terms."
        ],
        ans: 2,
        exp: "An implied-in-fact contract is a type of enforceable contract based on an implied promise instead of an express promise. An implied promise may be inferred from the parties' conduct. This is commonly seen when one renders services to another under circumstances where it may be fair to presume that the parties understood that compensation would be paid."
    },
    {
        id: 2,
        topic: "Termination / Operation of Law (Subject Matter Destruction)",
        fp: "Seller emails Buyer an offer to sell his rare antique piano for $15,000, stating the offer will remain open for one week. Two days later, a fire accidentally destroys Seller's home, and the antique piano burns to ashes. Unaware of the fire, Buyer emails Seller the next day to accept the offer.",
        q: "Is there an enforceable contract between Seller and Buyer?",
        opts: [
            "Yes, because the acceptance was dispatched within the one-week deadline specified in the offer.",
            "No, because an offer is automatically terminated by operation of law if the subject matter is destroyed before acceptance.",
            "Yes, but the buyer is only entitled to collect insurance proceeds from the seller under the doctrine of equitable conversion.",
            "No, because the seller failed to formally communicate a revocation of the offer to the buyer."
        ],
        ans: 1,
        exp: "An offer may be terminated by operation of law if the subject matter is destroyed. Because the piano was destroyed in the fire before Buyer accepted the offer, the offer was terminated by operation of law, and no contract was formed."
    },
    {
        id: 3,
        topic: "Acceptance / UCC 2-207 (Different Terms - Knockout Rule)",
        fp: "Merchant A sends an order form to Merchant B to purchase 1,000 yards of fabric. Merchant A's form explicitly states, 'This agreement shall be governed by the laws of New York.' Merchant B sends back an acknowledgment form that perfectly accepts the quantity and price but states, 'This agreement shall be governed by the laws of California.' Merchant B ships the fabric, and Merchant A accepts it.",
        q: "What is the governing law of the contract?",
        opts: [
            "New York law, because Merchant A was the master of the offer.",
            "California law, because Merchant B's term was the last shot fired before performance.",
            "Neither, because the conflicting terms are both knocked out, and the court will apply UCC gap-fillers to determine jurisdiction.",
            "No contract was formed because the differing jurisdictional terms constitute a material breach of the mirror image rule."
        ],
        ans: 2,
        exp: "Under UCC 2-207(2), if a term in the acceptance is a different term (meaning it conflicts with an original term), then the two terms that conflict are both knocked out (knockout rule). The contract will consist of the agreed-upon terms plus UCC gap fillers. Thus, both the NY and CA provisions are knocked out."
    },
    {
        id: 4,
        topic: "Consideration / Illusory Promise",
        fp: "Uncle says to his Niece, 'I promise to consider buying your old car for $5,000 next week, but I reserve the absolute right to change my mind and cancel this deal at any time before Friday.' Niece eagerly agrees. On Thursday, Uncle decides not to buy the car. Niece sues for breach of contract.",
        q: "Is Uncle's promise enforceable?",
        opts: [
            "Yes, because the niece detrimentally relied on the uncle's promise by reserving the car for him.",
            "No, because an offer that gives the offeror an absolute right to cancel the contract before performance is an illusory promise lacking consideration.",
            "Yes, because the promise was exchanged between close family members, establishing implied moral consideration.",
            "No, because the Statute of Frauds strictly applies to the sale of vehicles over five hundred dollars."
        ],
        ans: 1,
        exp: "For a contract to be formed, there must be consideration. An illusory promise is a promise that has the illusion of consideration, but in fact, is not supported by consideration. An offer that gives the offeror an absolute right to cancel the contract before performance is illusory, meaning no valid consideration exists."
    },
    {
        id: 5,
        topic: "Consideration / Forbearance to Sue",
        fp: "Driver A accidentally rear-ends Driver B. Both step out of their cars. Driver A says, 'I'll pay you $1,000 right now if you promise not to sue me.' Driver B honestly believes he has a valid negligence claim and accepts the offer, promising not to sue. Driver A later discovers he actually wasn't at fault due to a hidden mechanical failure in his own car, and refuses to pay.",
        q: "Is Driver B entitled to the $1,000?",
        opts: [
            "No, because the underlying negligence claim was ultimately invalid, rendering the consideration void.",
            "No, because a promise not to sue violates public policy by restricting access to the courts.",
            "Yes, because a promise to surrender a legal claim is sufficient consideration as long as the person surrendering the claim has a good-faith belief in its validity.",
            "Yes, because Driver A's offer constituted an irrevocable firm offer under the Uniform Commercial Code."
        ],
        ans: 2,
        exp: "A promise to surrender a legal claim is sufficient consideration to support a return promise even if the claim turns out to be invalid, so long as the person surrendering the claim has a good-faith belief in its validity. Because Driver B honestly believed his claim was valid, giving it up is valid consideration."
    },
    {
        id: 6,
        topic: "Defenses / Statute of Frauds (Executors)",
        fp: "Executor is managing his deceased father's estate. The estate owes a landscaper $2,000 for work done before the father died. Because the estate's funds are tied up in probate, Executor calls the landscaper and orally promises, 'Don't worry, I will personally pay the $2,000 debt out of my own pocket next week.' The landscaper agrees to wait. Executor later refuses to pay.",
        q: "Is Executor legally bound by his oral promise?",
        opts: [
            "Yes, because the landscaper detrimentally relied on the promise by delaying legal collection actions.",
            "No, because contracts for an executor or administrator to pay estate debts from their own funds fall within the Statute of Frauds and require a writing.",
            "Yes, because the executor assumed a primary benefit from the landscaping services.",
            "No, because past consideration (services rendered to the deceased) cannot support a new promise by a third party."
        ],
        ans: 1,
        exp: "A contract is within the Statute of Frauds if it falls within one of the MYLEGS categories. Contracts for an executor or administrator to pay estate debts from their own funds fall within the Statute of Frauds (the 'E' in MYLEGS). Because the promise was oral, it is unenforceable without a writing."
    },
    {
        id: 7,
        topic: "Defenses / Unconscionability",
        fp: "Consumer, who does not speak English well and is facing imminent eviction, signs a complex 50-page loan agreement with a predatory lender. Buried on page 45 is a clause stating that the interest rate will jump to 400% if Consumer is ever one day late on a payment. Consumer is late, and the lender demands the exorbitant interest. Consumer argues the contract is unenforceable.",
        q: "Which defense provides Consumer's best argument to defeat enforcement of the interest rate?",
        opts: [
            "Mutual Mistake.",
            "Unconscionability, because the terms were overwhelmingly unfavorable to one side and executed under desperate circumstances with significant bargaining disparity.",
            "Statute of Frauds.",
            "Impossibility of performance."
        ],
        ans: 1,
        exp: "A party may attempt to defeat enforcement if the contract contains terms that are so unfavorable to one side that it would be unconscionable to enforce the agreement. Unconscionability looks for facts of one party taking advantage of another party's desperate circumstances or one party having significant bargaining power (e.g., hidden exorbitant terms)."
    },
    {
        id: 8,
        topic: "Terms / Modification (Common Law No-Oral-Modification Clause)",
        fp: "Homeowner and Builder sign a written contract to remodel a bathroom for $10,000. The contract explicitly includes a clause stating: 'Any and all modifications to this contract must be in writing.' During construction, Homeowner asks Builder to add a skylight for an extra $2,000. They orally agree to the modification. Builder installs the skylight, but Homeowner refuses to pay the extra $2,000, citing the written clause.",
        q: "Is the oral modification to add the skylight valid?",
        opts: [
            "No, because the express 'no-oral-modification' clause strictly bars any verbal changes to the agreement.",
            "No, because the addition of a skylight constitutes a material alteration invoking the Statute of Frauds.",
            "Yes, because under the common law, provisions in a contract that require future modifications to be in writing are invalid and not given any effect.",
            "Yes, because the builder's installation of the skylight satisfies the merchants' confirmatory exception."
        ],
        ans: 2,
        exp: "Because remodeling is a service, the common law governs. Under the common law, provisions in a contract that require future modifications to be in writing are invalid and not given any effect. Because the oral modification was supported by new consideration (skylight for $2,000), it is a valid modification despite the 'no-oral-modification' clause."
    },
    {
        id: 9,
        topic: "Terms / Modification (UCC No-Oral-Modification Clause)",
        fp: "Retailer and Manufacturer sign a written contract for the purchase of 1,000 Bengal cat statues for $1,000. The contract explicitly includes a clause stating: 'All future modifications of this contract must be in writing.' A week later, Manufacturer calls Retailer and asks to increase the price to $1,800 due to increased production costs. Retailer orally agrees over the phone, but no writing is signed. Manufacturer ships the statues, but Retailer only pays $1,000.",
        q: "Is Manufacturer entitled to the additional $800?",
        opts: [
            "Yes, because the oral modification was made in good faith in response to increased production costs.",
            "Yes, because under the Uniform Commercial Code, provisions requiring modifications to be in writing are generally ignored.",
            "No, because under the Uniform Commercial Code, provisions in a contract that require future modifications to be in writing are valid and effective.",
            "No, because the modification was not supported by new, independent consideration."
        ],
        ans: 2,
        exp: "Because statues are goods, the UCC governs. Under the UCC, provisions in a contract that require future modifications to be in writing are valid and effective. Because the parties only orally agreed to the price increase, the oral modification is invalid due to the no-oral-modification clause, and Manufacturer is not entitled to the $800."
    },
    {
        id: 10,
        topic: "Terms / Parol Evidence Rule (Interpretation / Trade Usage)",
        fp: "A commercial baker and a supplier sign a completely integrated written contract for the monthly delivery of 'one baker's dozen of premium vanilla extracts.' When the supplier delivers 12 bottles, the baker sues for breach, arguing that in the commercial baking industry, a 'baker's dozen' universally means 13. The supplier argues the Parol Evidence Rule bars the baker from introducing evidence to change the number 12 to 13.",
        q: "Can the baker introduce evidence of trade usage?",
        opts: [
            "No, because trade usage evidence is strictly barred by a completely integrated written contract.",
            "Yes, because courts will allow parol evidence for interpretation of terms if the language is reasonably susceptible to more than one meaning, including evidence of trade usage (industry norms).",
            "No, because the definition of a dozen is mathematically absolute and cannot be modified by regional customs.",
            "Yes, but only if the baker can prove the supplier acted with fraudulent intent during the formation of the contract."
        ],
        ans: 1,
        exp: "The Parol Evidence Rule exception for 'Interpretation' allows parol evidence if the language in the original written contract is reasonably susceptible to more than one meaning. Common types of evidence allowed to interpret an ambiguous term include trade usage (industry norms). Therefore, the baker can introduce evidence that 'baker's dozen' means 13 in the industry."
    },
    {
        id: 11,
        topic: "Performance / Revocation of Acceptance (Latent Defect)",
        fp: "Buyer purchases a brand new tractor from Dealership. Buyer inspects it, signs the paperwork, and accepts the tractor. Two weeks later, while mowing his field for the first time, a latent, invisible crack in the engine block (which could not have been discovered during a reasonable initial inspection) causes the engine to completely seize, substantially impairing the tractor's value. Buyer immediately calls Dealership to revoke his acceptance.",
        q: "Is Buyer legally permitted to revoke his prior acceptance of the goods?",
        opts: [
            "No, because acceptance of goods is absolutely final and irreversible under the Uniform Commercial Code.",
            "Yes, because a buyer may revoke acceptance if the non-conformity substantially impairs the value of the goods and the buyer revokes within a reasonable amount of time after discovery.",
            "No, because the buyer failed to properly inspect the internal engine block prior to tendering payment.",
            "Yes, but the buyer's sole remedy is to recover the cost of repair, rather than returning the tractor for a full refund."
        ],
        ans: 1,
        exp: "A buyer cannot normally reject goods if he has already accepted them. However, the buyer may still reject if he validly revokes his acceptance. A buyer may revoke after accepting if the non-conformity substantially impairs the value of the goods and the buyer revokes within a reasonable time after discovery of the non-conformity (especially for latent defects)."
    },
    {
        id: 12,
        topic: "Performance / Minor Breach (Late Performance under Common Law)",
        fp: "Contractor agrees to build an outdoor bar in Homeowner's backyard for $2,000. The contract stipulates that construction will start and finish during the upcoming weekend. Contractor completes the bar, but finishes on Monday afternoon instead of Sunday evening. The contract does not contain a 'time is of the essence' clause. Homeowner refuses to pay, claiming the late finish constitutes a total breach.",
        q: "Is Homeowner excused from paying Contractor?",
        opts: [
            "Yes, because any delay in a construction contract constitutes a material breach.",
            "No, because late performance, assuming it was reasonable and not too late, amounts to a minor breach unless the contract had a 'time is of the essence' clause.",
            "Yes, because the perfect tender rule applies strictly to all dates specified in written contracts.",
            "No, because the homeowner failed to provide a written demand for adequate assurances on Sunday."
        ],
        ans: 1,
        exp: "Late performance, assuming it was reasonable and not too late, amounts to a minor breach. Late performance is only a material breach if the contract had a 'time is of the essence' clause. Because the breach was minor, the homeowner is not excused from paying (though they may sue for any minor damages caused by the delay)."
    },
    {
        id: 13,
        topic: "Excuses / Impracticability (Extreme Cost)",
        fp: "Shipping Company contracts to transport Buyer's goods from London to India via the Suez Canal for $50,000. Before the shipment begins, a massive, unforeseeable geopolitical conflict completely closes the Suez Canal. Shipping Company can still deliver the goods by sailing around the entire continent of Africa, but this alternative route will cost Shipping Company $500,000 in fuel and labor. Shipping Company refuses to sail, and Buyer sues.",
        q: "Can Shipping Company be excused from performance?",
        opts: [
            "Yes, under the doctrine of impracticability, because the unforeseen closure caused performance to become extremely and unreasonably difficult due to a severe and extreme increase in cost.",
            "No, because performance is not literally impossible, as the alternative route around Africa is physically navigable.",
            "Yes, under the doctrine of frustration of purpose, because the buyer's reason for purchasing the goods was defeated.",
            "No, because shipping companies inherently absorb all risks associated with global maritime transportation routes."
        ],
        ans: 0,
        exp: "Impracticability excuses performance when an unforeseen circumstance causes performance to become extremely and unreasonably difficult, and the party didn't absorb the risk. While often triggered by increased costs, the increased cost must be severe and extreme for courts to award impracticability (e.g., a 10x cost increase due to canal closure)."
    },
    {
        id: 14,
        topic: "Excuses / Novation vs Delegation",
        fp: "Company hires TechGuru to upgrade its cybersecurity infrastructure. A week later, TechGuru asks if his colleague, Junior Coder, can take over the contract instead. Company, TechGuru, and Junior Coder all sit down together and sign a new agreement formally releasing TechGuru from all liability and officially substituting Junior Coder into the contract. Junior Coder subsequently fails to perform the upgrades. Company sues TechGuru.",
        q: "Is TechGuru liable for Junior Coder's failure to perform?",
        opts: [
            "Yes, because a delegator remains vicariously liable for the nonperformance of a delegate.",
            "Yes, because cybersecurity involves special skill and trust, making it a non-delegable duty.",
            "No, because the parties executed a valid novation, which released the original party from liability.",
            "No, because the Uniform Commercial Code strictly prevents companies from suing original contractors after thirty days."
        ],
        ans: 2,
        exp: "A party may be excused from performance if properly substituted by another party through novation. Novation is proper when the original parties and the substitute all agree that the substitute will step in place of one of the original parties and release them from liability. Because all three agreed and released TechGuru, this was a novation (not a mere delegation), and TechGuru is not liable."
    },
    {
        id: 15,
        topic: "Remedies / Restitution for Breaching Party",
        fp: "Homeowner hires Builder to build a garage for $20,000. Builder completes 75% of the garage, conferring a $15,000 benefit on Homeowner's property. Builder then unjustifiably abandons the project. Homeowner cancels the contract. Builder sues Homeowner, demanding to be paid for the work already completed.",
        q: "Is Builder entitled to any compensation?",
        opts: [
            "No, because a breaching party who abandons a contract forfeits all rights to compensation under the clean hands doctrine.",
            "Yes, the breaching party may recover in restitution for the reasonable value of the benefit conferred, minus any damages the breach caused the homeowner.",
            "No, because expectation damages strictly prohibit recovery by the party who committed the material breach.",
            "Yes, the builder is entitled to the full $20,000 contract price under the doctrine of substantial performance."
        ],
        ans: 1,
        exp: "Under the remedy of restitution, even a breaching party who has partially performed can recover for the benefit conferred upon the non-breaching party to prevent unjust enrichment, minus any damages caused by their breach. Thus, Builder can recover the value of the work done in restitution."
    },
    {
        id: 16,
        topic: "Third Party / Creditor vs Donee Beneficiary (Suing Promisee)",
        fp: "Owner owes Landscaper $1,000 for past services. Owner subsequently sells his tractor to Neighbor for $1,000. As part of the sale, Owner explicitly directs Neighbor: 'Pay the $1,000 directly to Landscaper to settle my debt with him.' Neighbor takes the tractor but fails to pay Landscaper. Landscaper sues Owner.",
        q: "Can Landscaper successfully sue Owner for the money?",
        opts: [
            "No, because the landscaper is a third-party beneficiary who can only sue the promisor (Neighbor).",
            "Yes, because the landscaper is a creditor beneficiary, and a creditor beneficiary retains the right to sue the promisee on the original debt.",
            "No, because the delegation of payment obligations inherently extinguishes the original contractual debt.",
            "Yes, because donee beneficiaries possess an absolute right to sue promisees for detrimental reliance."
        ],
        ans: 1,
        exp: "A third party beneficiary may sue the promisor if the promisor fails to perform. However, when determining if they can sue the promisee (Owner), the rule distinguishes between creditor and donee beneficiaries. A creditor 3rd party beneficiary (one who receives the benefit to satisfy an existing debt) MAY sue the promisee on the underlying debt. Thus, Landscaper can sue Owner."
    },
    {
        id: 17,
        topic: "Third Party / Assignment (Prohibition vs Invalidation)",
        fp: "Tenant signs a commercial lease with Landlord. The lease contains a clause stating: 'Tenant's rights under this lease are not assignable.' Tenant nonetheless assigns the remainder of his lease to BusinessCorp. BusinessCorp had no notice of the anti-assignment clause. BusinessCorp attempts to move in, but Landlord refuses to recognize the assignment, claiming it is void.",
        q: "Is the assignment to BusinessCorp enforceable?",
        opts: [
            "No, because the express anti-assignment clause renders any attempted transfer strictly void ab initio.",
            "No, because commercial leases involving real property cannot be assigned without written permission from the owner.",
            "Yes, because the clause was merely a prohibition (not an invalidation), meaning the assignee can still enforce the assignment, though the landlord may sue the tenant for damages.",
            "Yes, because all anti-assignment clauses are unconscionable and broadly unenforceable under modern public policy."
        ],
        ans: 2,
        exp: "A clause is considered a prohibition if it simply says assignments are not allowed (e.g., 'Rights are not assignable'). If the clause is a prohibition, the obligor can sue the assignor for damages, but the assignee may still enforce the assignment (unless they had notice of the clause). Invalidation clauses (stating assignments are 'void') actually prevent enforcement. Since this was a mere prohibition, BusinessCorp can enforce it."
    },
    {
        id: 18,
        topic: "Third Party / Successive Assignments",
        fp: "Uncle owes Niece $500. On Monday, Niece writes a letter to her friend Alex, stating, 'I assign my right to collect Uncle's $500 to you as a birthday gift.' On Wednesday, having forgotten about the first letter, Niece writes a letter to her friend Betty, stating, 'I assign my right to collect Uncle's $500 to you as a graduation gift.' Both assignments are gratuitous.",
        q: "Between Alex and Betty, who holds the legal right to collect the $500 from Uncle?",
        opts: [
            "Alex, because the first in time automatically prevails in all successive assignments of rights.",
            "Betty, because if successive assignments are revocable (gratuitous), the last assignee assigned receives the benefit.",
            "Neither, because a double assignment of a single right extinguishes the obligation of the obligor.",
            "Both, requiring the uncle to pay $250 to Alex and $250 to Betty under equitable apportionment."
        ],
        ans: 1,
        exp: "These rules govern situations where an assignor wrongfully assigns one benefit/right to multiple people. If the assignments are revocable (gratuitous assignments), then the last assignee assigned gets the benefit/right. Because both were gifts, they were gratuitous and revocable, meaning the subsequent assignment to Betty revoked the first one to Alex."
    },
    {
        id: 19,
        topic: "Defenses / Equitable Estoppel",
        fp: "Employer orally promises to hire Employee for a specialized role for a term of three years. Employee points out that a three-year contract should be in writing. Employer assures her, 'I will draw up the papers next week, I promise; just go ahead and quit your current job and move across the country now.' Employee quits, moves, and reports for work, but Employer refuses to hire her, asserting the Statute of Frauds.",
        q: "Can Employee defeat Employer's Statute of Frauds defense?",
        opts: [
            "Yes, under the doctrine of equitable estoppel, because it would be inequitable to allow Employer to use the Statute of Frauds to defeat a claim after in bad faith promising to put it in writing.",
            "No, because the Statute of Frauds is an absolute bar to oral employment contracts exceeding one year.",
            "Yes, because the employee's physical relocation fully satisfies the part-performance exception to the Statute of Frauds.",
            "No, because the employer's promise lacked formal, independent consideration."
        ],
        ans: 0,
        exp: "A contract does not need to be in writing to be enforceable if equitable estoppel is present. Equitable estoppel is met when it would be inequitable to allow the statute of frauds to defeat a claim with merit, typically focusing on fairness and bad faith facts (like falsely promising to put a contract in writing to induce action)."
    },
    {
        id: 20,
        topic: "Terms / Parol Evidence Rule (Collateral Agreement Exception)",
        fp: "Homeowner and Contractor sign a completely integrated written contract for the construction of a new driveway. During negotiations, Contractor also orally promised to sell Homeowner his old riding lawnmower for $300. The written driveway contract contains no mention of the lawnmower. Contractor refuses to sell the mower, and Homeowner sues.",
        q: "Does the Parol Evidence Rule bar Homeowner from introducing evidence of the oral agreement regarding the lawnmower?",
        opts: [
            "Yes, because a completely integrated writing bars any and all prior oral agreements between the exact same parties.",
            "No, because the lawnmower agreement triggers the 'collateral agreement' exception, as it is distinct enough from the primary subject matter that it could be a separate contract.",
            "Yes, because the sale of the lawnmower constitutes a contradicting term to the commercial driveway construction.",
            "No, because the sale of a lawnmower under five hundred dollars is explicitly governed by common law rules of evidence."
        ],
        ans: 1,
        exp: "The Parol Evidence Rule has an exception for 'Collateral Agreements'. A collateral agreement refers to an agreement on a particular term that is distinct enough from the primary subject matter of the contract, that it could have been the basis for a separate contract. A lawnmower sale is completely distinct from building a driveway, so the oral evidence is admissible."
    },
    {
        id: 21,
        topic: "Performance / Installment Contracts (Substantial Impairment)",
        fp: "Factory contracts to deliver 1,000 specialized widgets to Buyer on the 1st of every month for 12 months (an installment contract). During the 4th month, Factory delivers 990 widgets instead of 1,000. Buyer can still comfortably meet its own manufacturing needs with 990 widgets. Factory promises to deliver the missing 10 widgets the next day. Buyer rejects the entire 4th installment.",
        q: "Was Buyer legally entitled to reject the 4th installment?",
        opts: [
            "Yes, because the perfect tender rule applies strictly to all deliveries of goods, regardless of whether they are installment contracts.",
            "Yes, because the failure to deliver the exact quantity constitutes an anticipatory repudiation of the remainder of the contract.",
            "No, because in an installment contract, a buyer cannot reject a non-conforming installment unless the breach substantially impairs the value of the installment and cannot be cured.",
            "No, because missing items in a delivery automatically extend the seller's cure period by thirty days."
        ],
        ans: 2,
        exp: "The buyer cannot reject if the non-conforming goods received are part of an installment contract. This limitation on rejection does not apply (meaning the buyer CAN reject) ONLY if: 1) The seller's breach was a substantial impairment AND 2) Seller cannot cure the issue. Because 990 out of 1000 is not a substantial impairment and can be cured, Buyer cannot reject it."
    },
    {
        id: 22,
        topic: "Excuses / Demand for Assurances",
        fp: "Buyer contracts to buy 5,000 computer chips from Seller for delivery in August. In June, Buyer reads a credible industry report that Seller's primary manufacturing plant has shut down. Buyer sends Seller a formal written demand for assurances that Seller will be able to fulfill the August delivery. Seller ignores the letter and fails to respond for 45 days.",
        q: "What is the legal effect of Seller's failure to respond?",
        opts: [
            "Buyer must still wait until the August delivery date to see if the chips arrive before taking legal action.",
            "Buyer may treat the failure to respond as an anticipatory repudiation and sue immediately.",
            "Seller is automatically granted a 60-day grace period to cure the defect under the Uniform Commercial Code.",
            "Buyer is entitled to seize the seller's remaining inventory under the doctrine of commercial impracticability."
        ],
        ans: 1,
        exp: "Under the UCC, upon receiving a request for assurances, the other party must respond within a reasonable period of time (typically not to exceed 30 days) with assurances. If a party fails to respond to a request for assurances, the requesting party may treat this failure as an anticipatory repudiation. Therefore, Buyer can treat it as a repudiation and sue."
    },
    {
        id: 23,
        topic: "Remedies / Specific Performance",
        fp: "Buyer and Seller execute a valid written contract for the sale of Seller's beachfront property for $2,000,000. One week before closing, Seller decides he loves the view too much, refuses to sell the house, and offers to refund Buyer's deposit plus $10,000 in expectation damages. Buyer refuses the money and sues to force Seller to hand over the deed.",
        q: "Is Buyer entitled to specific performance?",
        opts: [
            "No, because monetary expectation damages are completely adequate to make the buyer whole.",
            "No, because specific performance is prohibited in all contracts involving residential real estate.",
            "Yes, because all real estate and land are legally considered unique, making monetary damages inadequate.",
            "Yes, but only if the buyer can prove the seller acted with malicious intent in breaching the contract."
        ],
        ans: 2,
        exp: "Remedies include expectation damages, reliance damages, restitution, and specific performance for unique goods or real estate. Because real property (land) is inherently considered unique under the law, monetary damages are inadequate, and a court will routinely grant specific performance to force the sale of the land."
    },
    {
        id: 24,
        topic: "Third Party / Assignor Warranties",
        fp: "Contractor finishes a job and is owed $5,000 by Client. Contractor assigns this right to collect $5,000 to Investor in exchange for $4,500 in cash today. When Investor attempts to collect the $5,000 from Client, Client proves that he already paid the $5,000 directly to Contractor a week prior to the assignment. Investor sues Contractor.",
        q: "Can Investor successfully recover from Contractor?",
        opts: [
            "Yes, because an assignor who assigns a right for value warrants that the right exists and is not subject to undisclosed defenses.",
            "No, because the assignee assumes all risks of non-collection in a commercial assignment factoring transaction.",
            "Yes, because assignments of debt inherently violate public policy against champerty.",
            "No, because the obligor (Client) is the only party liable to the assignee under the assignment of benefits doctrine."
        ],
        ans: 0,
        exp: "If it is an assignment for value (which it was, given for $4,500 cash), the assignee can sue the assignor for certain warranties, including: 1) Assignor has not made a prior assignment of the same right, and 2) The right does exist and is not subject to any undisclosed defenses. Because Contractor had already collected the debt, the right no longer existed, breaching the warranty."
    },
    {
        id: 25,
        topic: "Formation / Unilateral Acceptance by Performance",
        fp: "Carnival owner posts a large sign at a game booth stating: 'If you can throw a baseball and hit the three milk jugs off the table, I will pay you $100.' Bob reads the sign, pays the $5 entry fee, picks up the baseball, throws it, and perfectly knocks all three milk jugs off the table. The carnival owner refuses to pay, claiming Bob never formally accepted the offer before throwing the ball.",
        q: "Has Bob accepted the offer and formed a contract?",
        opts: [
            "No, because Bob failed to provide verbal notice of his intent to accept before initiating performance.",
            "Yes, because a unilateral contract is accepted by complete performance by an offeree who knows of the offer.",
            "No, because carnival games are legally classified as gambling and are void against public policy.",
            "Yes, because Bob detrimentally relied on the sign by paying the $5 entry fee."
        ],
        ans: 1,
        exp: "A unilateral contract offer occurs where the offeror indicates that completion of performance is the only manner of acceptance, or makes a contest offer to the public. A unilateral contract is only accepted by complete performance by an offeree who knows of the offer. By reading the sign and completely performing the requested act, Bob validly accepted the offer."
    }
];
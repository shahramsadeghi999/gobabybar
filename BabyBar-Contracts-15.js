const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Formation / UCC 2-207 (Confirming Memo & Material Alteration)",
        fp: "Merchant A calls Merchant B and orally agrees to purchase $10,000 worth of computer parts. Immediately after hanging up, Merchant A sends a signed, written confirmatory memo reflecting the price and quantity. The memo also includes a new, un-discussed clause: 'All disputes must be submitted to binding arbitration.' Merchant B receives the memo, reads it, and does not object. A week later, B ships the parts.",
        q: "Under UCC § 2-207, does the arbitration clause become part of the contract?",
        opts: [
            "No, because between merchants, an arbitration clause is universally deemed a material alteration that fails to automatically enter the agreement without explicit assent.",
            "Yes, because shipping the parts constitutes acceptance under the mirror image rule.",
            "Yes, because B failed to object within the ten-day statutory window.",
            "No, because the original agreement was oral, rendering all subsequent written documentation legally void."
        ],
        ans: 0,
        exp: "Under UCC § 2-207, a written confirmation sent within a reasonable time operates as an acceptance even if it states additional terms. Between merchants, these additional terms become part of the contract UNLESS they materially alter it. Courts almost universally hold that an arbitration clause is a 'material alteration,' meaning it does NOT enter the contract without explicit mutual assent."
    },
    {
        id: 2,
        topic: "Defenses / Statute of Frauds (Merchant Confirmatory Memo)",
        fp: "Merchant A calls Merchant B and orally agrees to purchase $10,000 worth of computer parts. Immediately after hanging up, Merchant A sends a signed, written confirmatory memo reflecting the price and quantity. The memo also includes a new, un-discussed clause: 'All disputes must be submitted to binding arbitration.' Merchant B receives the memo, reads it, and does not object. A week later, B ships the parts.\n\nAssume instead that B never shipped the parts. When A sues B for breach of the $10,000 oral contract, B raises the Statute of Frauds as an absolute defense.",
        q: "Will B's Statute of Frauds defense succeed?",
        opts: [
            "Yes, because the contract price exceeds five hundred dollars.",
            "No, because the merchant's confirmatory memo rule satisfies the statute against a recipient who has reason to know its contents and fails to object in writing within 10 days.",
            "Yes, because the memo contained a material alteration, thereby voiding the confirmation.",
            "No, because oral agreements between highly sophisticated commercial merchants bypass traditional evidentiary writing requirements."
        ],
        ans: 1,
        exp: "Under UCC § 2-201(2) (the merchant's confirmatory memo rule), if both parties are merchants, a written confirmation sent by one party that binds the sender will also bind the recipient IF the recipient has reason to know its contents and does not object in writing within 10 days. Because B ignored the memo for a week (and didn't object within 10 days), the SOF defense is defeated."
    },
    {
        id: 3,
        topic: "Formation / UCC 2-209 (No Oral Modification Clauses)",
        fp: "Merchant A calls Merchant B and orally agrees to purchase $10,000 worth of computer parts. Immediately after hanging up, Merchant A sends a signed, written confirmatory memo reflecting the price and quantity. The memo also includes a new, un-discussed clause: 'All disputes must be submitted to binding arbitration.' Merchant B receives the memo, reads it, and does not object. A week later, B ships the parts.\n\nAssume a valid written contract exists containing a conspicuous clause: 'This agreement may not be modified or rescinded except by a signed writing.' Later, A and B orally agree to reduce the price to $9,000. B ships the parts, A pays $9,000, but B sues for the remaining $1,000.",
        q: "Is the oral modification legally enforceable to defeat B's lawsuit?",
        opts: [
            "Yes, because the preexisting duty rule is abolished under the UCC for all merchants.",
            "No, because under the common law, 'no oral modification' clauses are strictly enforced.",
            "No, the oral modification is technically barred by the 'no oral modification' clause under the UCC, but it can operate as an equitable waiver if A materially changed position in justifiable reliance.",
            "Yes, because oral modifications automatically supersede written boilerplate language."
        ],
        ans: 2,
        exp: "This is a super-advanced nuance of UCC § 2-209. Under the UCC, 'No Oral Modification' (NOM) clauses ARE generally enforceable (unlike at common law). Therefore, the oral price reduction is technically barred. HOWEVER, under § 2-209(4), an attempt at modification that fails the NOM clause can still operate as a 'waiver' if the other party detrimentally relied on it. The correct answer reflects this technical bar combined with the waiver exception."
    },
    // FACT PATTERN 2 (Q4-Q6)
    {
        id: 4,
        topic: "Third Parties / Delegation of Requirements Contract",
        fp: "Ice Cream Shop has a valid requirements contract to buy 'all the milk we require for our artisanal shop' from Dairy Farm for one year at a set price. Halfway through the year, Ice Cream Shop is bought out by MegaMart, a massive national grocery chain. Ice Cream Shop delegates its duties and assigns its rights under the milk contract to MegaMart. Dairy Farm immediately refuses to supply MegaMart.",
        q: "Is the delegation and assignment valid?",
        opts: [
            "Yes, because the assignment of rights to physical goods is universally protected.",
            "Yes, provided MegaMart pays the dairy farm in full advance installments.",
            "No, because food supply contracts demand formal notarized novations.",
            "No, because assigning a requirements contract to an entity with drastically different requirements materially alters the duty and burden of the obligor, rendering the transfer invalid."
        ],
        ans: 3,
        exp: "Under UCC § 2-210, an assignment of rights or delegation of duties is invalid if it would materially change the duty of the other party, increase the burden/risk imposed on them, or impair their chance of obtaining return performance. Assigning a requirements contract from a small shop to a massive chain drastically alters the Dairy Farm's burden, invalidating the transfer."
    },
    {
        id: 5,
        topic: "Third Parties / Delegation of Unique Personal Services",
        fp: "Ice Cream Shop has a valid requirements contract to buy 'all the milk we require for our artisanal shop' from Dairy Farm for one year at a set price. Halfway through the year, Ice Cream Shop is bought out by MegaMart, a massive national grocery chain. Ice Cream Shop delegates its duties and assigns its rights under the milk contract to MegaMart. Dairy Farm immediately refuses to supply MegaMart.\n\nAssume instead the contract was for the Ice Cream Shop owner, a world-renowned artisanal flavor master, to personally blend unique ice cream flavors for Dairy Farm's annual festival. The owner attempts to delegate the blending to MegaMart's automated flavor machines.",
        q: "Is the delegation of the flavor blending valid?",
        opts: [
            "Invalid, because the contract involves highly specialized personal skill and artistic judgment, making the duty strictly non-delegable without explicit consent.",
            "Valid, because commercial delegations entirely relieve the original obligor of liability.",
            "Invalid, because corporate entities possess sovereign immunity.",
            "Valid, because the automated machines are objectively more efficient."
        ],
        ans: 0,
        exp: "Duties are generally delegable without the obligee's consent unless the duties involve highly specialized personal skill, artistic judgment, or unique trust/reputation (like a world-renowned flavor master). In such cases, the obligee has a substantial interest in having the specific person perform, rendering the duty non-delegable."
    },
    {
        id: 6,
        topic: "Third Parties / Novation vs. Delegation",
        fp: "Ice Cream Shop has a valid requirements contract to buy 'all the milk we require for our artisanal shop' from Dairy Farm for one year at a set price. Halfway through the year, Ice Cream Shop is bought out by MegaMart, a massive national grocery chain. Ice Cream Shop delegates its duties and assigns its rights under the milk contract to MegaMart. Dairy Farm immediately refuses to supply MegaMart.\n\nAssume the assignment to MegaMart was perfectly valid. Ice Cream Shop calls Dairy Farm and says, 'We sold the business to MegaMart. Just bill them from now on.' Dairy Farm says, 'Sure, sounds good.' MegaMart subsequently fails to pay the milk bills.",
        q: "Is the original Ice Cream Shop still liable to Dairy Farm?",
        opts: [
            "No, because the dairy farm's verbal consent effectively transferred all liability.",
            "Yes, because a valid delegation does not relieve the delegating party of liability unless all parties expressly agree to a formal novation explicitly releasing the original obligor.",
            "No, because the original shop lost direct privity of contract.",
            "Yes, but only under the doctrine of strict vicarious liability."
        ],
        ans: 1,
        exp: "A valid delegation of duties does NOT relieve the original obligor (Ice Cream Shop) of liability, even if the obligee (Dairy Farm) merely consents to it. The obligor remains secondarily liable as a surety if the delegate fails to perform properly. To completely escape liability, there must be a 'novation'—a clear, explicit agreement among all three parties intentionally releasing the original obligor from all future liability."
    },
    // FACT PATTERN 3 (Q7-Q9)
    {
        id: 7,
        topic: "Terms / Parol Evidence (Condition Precedent to Formation)",
        fp: "Buyer and Seller execute a fully integrated written contract for the purchase of a used commercial delivery truck. During the signing, Buyer orally stated, 'I am signing this, but we agree this contract is entirely void unless my bank approves the commercial loan tomorrow.' The written contract explicitly states 'Payment due upon delivery.' The bank denied the loan.",
        q: "Can Buyer introduce the oral statement to avoid the contract?",
        opts: [
            "No, because the Parol Evidence Rule bars prior oral agreements that contradict a completely integrated written contract.",
            "No, because the integration clause creates an irrebuttable presumption of honest dealing.",
            "Yes, because parol evidence is universally admissible to demonstrate a condition precedent to the legal formation and existence of the entire agreement.",
            "Yes, but the remedy is strictly limited to nominal restitution."
        ],
        ans: 2,
        exp: "A widely recognized exception to the Parol Evidence Rule allows a party to introduce extrinsic evidence demonstrating that the written agreement was subject to an oral condition precedent to its FORMATION. If the contract was never meant to take effect until the condition (loan approval) was met, the evidence is admissible to show no binding contract ever existed."
    },
    {
        id: 8,
        topic: "Terms / Parol Evidence (Subsequent Modifications)",
        fp: "Buyer and Seller execute a fully integrated written contract for the purchase of a used commercial delivery truck. During the signing, Buyer orally stated, 'I am signing this, but we agree this contract is entirely void unless my bank approves the commercial loan tomorrow.' The written contract explicitly states 'Payment due upon delivery.' The bank denied the loan.\n\nAssume instead the contract was fully formed. A week later, Seller called Buyer and orally agreed to throw in a set of new snow tires for free. Seller later delivers the truck without the tires.",
        q: "Does the Parol Evidence Rule bar evidence of the oral promise regarding the tires?",
        opts: [
            "Yes, because the original contract was fully integrated.",
            "Yes, because the integration clause seals the document.",
            "No, but the modification is inherently void for lack of notarization.",
            "No, because the Parol Evidence Rule only applies to prior or contemporaneous agreements, and does not apply to subsequent oral modifications made after the contract was signed."
        ],
        ans: 3,
        exp: "The Parol Evidence Rule only governs communications and agreements made PRIOR TO or CONTEMPORANEOUS WITH the execution of the written contract. It has absolutely no application to subsequent agreements or modifications made after the contract was signed (though the Statute of Frauds might still apply to the modification)."
    },
    {
        id: 9,
        topic: "Terms / Parol Evidence (Collateral Agreements)",
        fp: "Buyer and Seller execute a fully integrated written contract for the purchase of a used commercial delivery truck. During the signing, Buyer orally stated, 'I am signing this, but we agree this contract is entirely void unless my bank approves the commercial loan tomorrow.' The written contract explicitly states 'Payment due upon delivery.' The bank denied the loan.\n\nAssume instead that contemporaneous with signing the truck contract, Seller orally promised to leave a $500 aluminum ladder in the bed of the truck for free. The fully integrated written contract mentions the truck, the price, the delivery, but is completely silent on the ladder.",
        q: "Is evidence of the oral promise regarding the ladder admissible?",
        opts: [
            "No, because the Parol Evidence Rule prohibits introducing prior or contemporaneous oral agreements that supplement or add to a completely integrated written contract.",
            "Yes, because the ladder constitutes a completely distinct, collateral agreement.",
            "No, because commercial accessories are automatically excluded.",
            "Yes, because the oral promise clarifies a patent ambiguity in the written document."
        ],
        ans: 0,
        exp: "The Parol Evidence Rule prohibits the introduction of prior or contemporaneous oral agreements that contradict OR SUPPLEMENT the terms of a 'completely integrated' written contract. A promise to throw in a ladder for free supplements the integrated writing. It does not qualify as a collateral agreement because there is no separate consideration given for the ladder."
    },
    // FACT PATTERN 4 (Q10-Q12)
    {
        id: 10,
        topic: "Performance / Anticipatory Repudiation by Conduct",
        fp: "Collector contracts to buy a specific, one-of-a-kind antique vase from Gallery for $50,000, with delivery set for June 1. On May 15, Collector visits the Gallery and is shocked to see the Gallery owner sell and physically hand that exact antique vase to a completely different customer.",
        q: "Does the Gallery's action on May 15 constitute an anticipatory repudiation?",
        opts: [
            "No, because the seller did not explicitly declare an intention to breach in a formal written communication.",
            "Yes, because voluntarily committing an affirmative act that renders actual performance objectively impossible operates as an immediate anticipatory repudiation by conduct.",
            "No, because the June 1 delivery deadline had not yet elapsed.",
            "Yes, but only if the secondary buyer was a recognized merchant."
        ],
        ans: 1,
        exp: "Anticipatory repudiation can occur by words OR by conduct. If a promisor voluntarily commits an affirmative act that makes it actually or apparently impossible for them to perform their contractual duties (such as selling unique, specific goods to a third party), it operates as an immediate anticipatory repudiation by conduct."
    },
    {
        id: 11,
        topic: "Performance / Demand for Assurances (Reasonable Grounds)",
        fp: "Collector contracts to buy a specific, one-of-a-kind antique vase from Gallery for $50,000, with delivery set for June 1. On May 15, Collector visits the Gallery and is shocked to see the Gallery owner sell and physically hand that exact antique vase to a completely different customer.\n\nAssume instead the vase is still there. But Collector reads a newspaper article stating the Gallery is facing extreme financial difficulties and might declare bankruptcy. Collector emails a demand for adequate assurances. The Gallery ignores it.",
        q: "Was Collector legally justified in demanding assurances?",
        opts: [
            "No, because rumors or newspaper articles can never serve as the basis for suspending a commercial contract.",
            "No, because the collector must wait until the June 1 deadline to establish an actual breach.",
            "Yes, because under both common law and the UCC, credible reports of impending bankruptcy provide reasonable grounds for commercial insecurity, validating the demand.",
            "Yes, but the demand must be filed with the municipal court clerk."
        ],
        ans: 2,
        exp: "Under both the Restatement and UCC § 2-609, if a party has 'reasonable grounds for insecurity' regarding the other party's performance (such as reading credible reports of severe financial distress or bankruptcy), they may demand adequate assurances of performance in writing. Failure to provide them within a reasonable time acts as a repudiation."
    },
    {
        id: 12,
        topic: "Performance / Retraction of Anticipatory Repudiation",
        fp: "Collector contracts to buy a specific, one-of-a-kind antique vase from Gallery for $50,000, with delivery set for June 1. On May 15, Collector visits the Gallery and is shocked to see the Gallery owner sell and physically hand that exact antique vase to a completely different customer.\n\nAssume instead that on May 1, the Gallery clearly and unequivocally repudiated the contract via email. On May 10, Collector filed a formal lawsuit for total breach of contract. On May 12, the Gallery emailed a retraction of the repudiation.",
        q: "Is the Gallery's May 12 retraction legally effective?",
        opts: [
            "Yes, because the retraction occurred prior to the designated June 1 deadline.",
            "Yes, because the collector had not yet materially changed his position by securing a substitute vase.",
            "No, because written communications cannot override oral declarations.",
            "No, because filing a lawsuit constitutes an objective manifestation of treating the repudiation as final, immediately terminating the repudiating party's power to retract."
        ],
        ans: 3,
        exp: "A party can retract an anticipatory repudiation before their performance is due, UNLESS the aggrieved party has canceled the contract, materially changed their position, OR indicated they consider the repudiation final. Filing a lawsuit is the ultimate indication of treating the repudiation as final, permanently cutting off the right to retract."
    },
    // FACT PATTERN 5 (Q13-Q15)
    {
        id: 13,
        topic: "Defenses / Mutual Mistake (Value vs Existence)",
        fp: "Seller conducts a yard sale and sells an old, locked wooden desk to Buyer for $20. Both parties assume it is just an empty, cheap desk. When Buyer forces the drawer open at home, he discovers a hidden compartment containing $10,000 in rare gold coins. Seller sues to rescind the contract based on mutual mistake.",
        q: "Will Seller succeed in voiding the sale?",
        opts: [
            "No, because the parties contracted with conscious ignorance regarding the internal contents of the locked desk, meaning the seller legally assumed the strict risk of the mistake.",
            "Yes, because the massive monetary disparity renders the transaction inherently unconscionable.",
            "No, because unilateral mistakes never provide grounds for rescission under modern common law.",
            "Yes, because there was a mutual mistake regarding a basic assumption that materially affected the agreed exchange."
        ],
        ans: 0,
        exp: "A mutual mistake can void a contract unless the adversely affected party 'bore the risk' of the mistake. A party bears the risk if they enter the contract with 'conscious ignorance'—knowing they have limited knowledge about the facts (what might be inside a locked, unexamined desk) but treating that limited knowledge as sufficient. The Seller took a blind gamble by selling a locked desk without checking it, so he bore the risk."
    },
    {
        id: 14,
        topic: "Performance / Frustration of Purpose",
        fp: "Seller conducts a yard sale and sells an old, locked wooden desk to Buyer for $20. Both parties assume it is just an empty, cheap desk. When Buyer forces the drawer open at home, he discovers a hidden compartment containing $10,000 in rare gold coins. Seller sues to rescind the contract based on mutual mistake.\n\nAssume instead that Buyer rented a downtown balcony from Seller for $500 specifically to watch the King's Coronation Parade. An hour before the parade, the King falls ill, and the parade is completely canceled. The balcony is structurally perfect.",
        q: "Is Buyer legally excused from paying the rental fee?",
        opts: [
            "Yes, under the doctrine of objective impossibility.",
            "Yes, because the supervening cancellation fundamentally destroyed the mutually understood core purpose of the contract, triggering the doctrine of frustration of purpose.",
            "No, because the physical venue remained fully accessible and structurally intact.",
            "No, because outdoor events inherently carry an absolute assumption of weather-related risks."
        ],
        ans: 1,
        exp: "This is the classic Krell v. Henry (coronation cases) scenario. Frustration of purpose excuses performance when a supervening, unforeseeable event fundamentally destroys the mutually understood, core purpose of the contract, even if performance is still technically possible. The balcony is accessible, but renting it is entirely pointless without the parade."
    },
    {
        id: 15,
        topic: "Performance / Impracticability (Illegality / Embargo)",
        fp: "Seller conducts a yard sale and sells an old, locked wooden desk to Buyer for $20. Both parties assume it is just an empty, cheap desk. When Buyer forces the drawer open at home, he discovers a hidden compartment containing $10,000 in rare gold coins. Seller sues to rescind the contract based on mutual mistake.\n\nAssume Buyer contracted to purchase highly specialized titanium from Seller, sourced from a specific foreign nation. The US government suddenly imposes a strict legal embargo, making importing the titanium a felony. It can be smuggled in, but at 50 times the original cost.",
        q: "Is Seller's duty to deliver the titanium excused?",
        opts: [
            "No, because international embargoes are considered foreseeable geopolitical risks in modern global commerce.",
            "No, because the goods can still technically be obtained through illicit black-market channels.",
            "Yes, because a supervening governmental regulation that renders performance illegal fundamentally discharges the duty under the doctrine of impracticability.",
            "Yes, but only if the seller explicitly negotiates a formal termination fee."
        ],
        ans: 2,
        exp: "Performance is excused under the doctrine of impracticability/impossibility if a supervening governmental regulation or law makes performance illegal. A party is never legally required to commit a crime (smuggling) or face extreme, astronomical costs to fulfill a commercial contract."
    },
    // FACT PATTERN 6 (Q16-Q18)
    {
        id: 16,
        topic: "Third Parties / Vesting by Detrimental Reliance",
        fp: "Uncle promises to pay his Niece's $10,000 debt to Creditor. Uncle and Niece sign a contract confirming this. Creditor is not informed by Uncle or Niece. However, Creditor's friend tells him about the deal. Based purely on this hearsay, Creditor buys a new $10,000 boat on credit, assuming Uncle's payment will clear the old debt. Uncle and Niece then cancel the contract.",
        q: "Had Creditor's rights legally vested prior to the cancellation?",
        opts: [
            "Yes, because a creditor beneficiary possesses absolute enforcement rights instantly upon contract formation.",
            "No, because the original contracting parties retain the absolute, unqualified right to modify or cancel the agreement at any time.",
            "No, because third-party beneficiaries inherently lack legal standing in civil courts.",
            "Yes, because the beneficiary materially and detrimentally relied on the promise by purchasing the boat, regardless of whether the original parties officially notified him."
        ],
        ans: 3,
        exp: "The original contracting parties can modify or cancel a contract without the third-party beneficiary's consent UNTIL the beneficiary's rights have 'vested.' Rights vest when the beneficiary learns of the contract and (1) assents to it, (2) brings suit upon it, or (3) materially relies on it. Because Creditor learned of it and materially relied on it (buying the boat), his rights vested, blocking the cancellation."
    },
    {
        id: 17,
        topic: "Third Parties / Promisor Asserting Promisee's Defenses",
        fp: "Uncle promises to pay his Niece's $10,000 debt to Creditor. Uncle and Niece sign a contract confirming this. Creditor is not informed by Uncle or Niece. However, Creditor's friend tells him about the deal. Based purely on this hearsay, Creditor buys a new $10,000 boat on credit, assuming Uncle's payment will clear the old debt. Uncle and Niece then cancel the contract.\n\nAssume Creditor's rights fully vested. However, Uncle discovers that Niece completely lied to him; she actually owed the Creditor nothing, and gave Uncle a fake promissory note. Creditor sues Uncle.",
        q: "Can Uncle successfully defend against Creditor's lawsuit?",
        opts: [
            "Yes, because the promisor may assert any valid contract defense against the beneficiary that he could have asserted against the promisee, such as the niece's absolute lack of consideration and fraud.",
            "No, because the third-party beneficiary is an innocent actor immune from upstream financial disputes.",
            "Yes, because familial contracts are exempt from commercial enforcement.",
            "No, because the debt transfer is entirely severable from the underlying consideration failure."
        ],
        ans: 0,
        exp: "In a third-party beneficiary contract, the promisor (Uncle) can raise any defense against the beneficiary (Creditor) that the promisor would have had against the promisee (Niece). Because Niece committed fraud and provided no consideration, Uncle's duty to perform is legally excused, even against the vested Creditor."
    },
    {
        id: 18,
        topic: "Third Parties / Creditor Beneficiary Suing Promisee",
        fp: "Uncle promises to pay his Niece's $10,000 debt to Creditor. Uncle and Niece sign a contract confirming this. Creditor is not informed by Uncle or Niece. However, Creditor's friend tells him about the deal. Based purely on this hearsay, Creditor buys a new $10,000 boat on credit, assuming Uncle's payment will clear the old debt. Uncle and Niece then cancel the contract.\n\nAssume Uncle validly escapes liability due to a technicality in the contract. Niece's original $10,000 debt to Creditor was totally legitimate. Creditor sues Niece.",
        q: "Can Creditor successfully sue Niece for the $10,000?",
        opts: [
            "No, because the new contract legally constitutes a complete novation that automatically releases the niece.",
            "Yes, because a creditor beneficiary always retains the absolute right to sue the original promisee on the underlying, pre-existing debt.",
            "Yes, but only for nominal damages.",
            "No, because the niece fully performed her duties by securing the uncle's signature."
        ],
        ans: 1,
        exp: "A creditor beneficiary can sue BOTH the promisor (Uncle) on the third-party beneficiary contract AND the promisee (Niece) on the underlying original debt. The new contract does not discharge the original debt unless there is a formal novation (an agreement by all parties to substitute Uncle for Niece), which did not occur here."
    },
    // FACT PATTERN 7 (Q19-Q21)
    {
        id: 19,
        topic: "Remedies / Lost Volume Seller (UCC 2-708(2))",
        fp: "Volume Dealer sells hundreds of standard, mass-produced refrigerators. Customer signs a contract to buy one for $2,000. Customer breaches. Dealer resells the exact same refrigerator to someone else for $1,900. Dealer spent $50 on storage fees waiting for the resale.",
        q: "Under the UCC, what is the most likely measure of Dealer's damages?",
        opts: [
            "Only $100, representing the direct mathematical difference between the contract price and the eventual resale value.",
            "Zero damages, because the successful mitigation effectively neutralized the commercial detriment.",
            "The seller is entitled to the lost profit from the breached sale, plus the $50 incidental storage fees, under the lost volume seller doctrine.",
            "The full $2,000 contract price."
        ],
        ans: 2,
        exp: "Under UCC § 2-708(2), if the standard measure of damages (contract minus resale) is inadequate to put the seller in as good a position as performance would have done, a 'lost volume seller' (one with unlimited supply) can recover their lost profit. They also recover incidental damages (commercially reasonable expenses incurred due to the breach, like the $50 storage fee)."
    },
    {
        id: 20,
        topic: "Remedies / Consequential Damages (Tacit Notice)",
        fp: "Volume Dealer sells hundreds of standard, mass-produced refrigerators. Customer signs a contract to buy one for $2,000. Customer breaches. Dealer resells the exact same refrigerator to someone else for $1,900. Dealer spent $50 on storage fees waiting for the resale.\n\nAssume instead that a Baker ordered a custom oven from a Manufacturer. During negotiations, Baker casually mentioned, 'I hope this arrives on time; my current oven is breaking down and I might have to close the shop if it fails.' Manufacturer negligently delayed delivery. The old oven broke, shutting down the bakery and causing $50,000 in lost profits.",
        q: "Can Baker recover the $50,000 in lost profits?",
        opts: [
            "No, because the amount is too speculative to calculate with reasonable certainty.",
            "Bakery recovers the full amount because direct negligence inherently satisfies the 'but-for' causation standard.",
            "No, because consequential damages must be explicitly formally enumerated in the final written integration.",
            "Yes, because the consequential damages were reasonably foreseeable to the breaching party at the time of contract formation due to the buyer's explicit warning."
        ],
        ans: 3,
        exp: "Under Hadley v. Baxendale, consequential damages (like lost profits) are recoverable if they were reasonably foreseeable to the breaching party at the time the contract was made. Because Baker explicitly warned the Manufacturer about the failing oven and the risk of a shutdown, the Manufacturer had actual notice of the special circumstances, making the lost profits foreseeable and recoverable."
    },
    {
        id: 21,
        topic: "Remedies / Liquidated Damages (Reasonableness at Formation)",
        fp: "Volume Dealer sells hundreds of standard, mass-produced refrigerators. Customer signs a contract to buy one for $2,000. Customer breaches. Dealer resells the exact same refrigerator to someone else for $1,900. Dealer spent $50 on storage fees waiting for the resale.\n\nAssume the City hired a Builder to construct a bridge. The contract contained a liquidated damages clause: 'Builder pays $1,000 per day for any delay.' At the time of contracting, this was a highly reasonable estimate. Builder is 10 days late. However, due to an unrelated pandemic, the city was locked down, meaning traffic was zero, and the City suffered absolutely $0 in actual damages.",
        q: "Under the modern Restatement approach, is the liquidated damages clause enforceable?",
        opts: [
            "Yes, because a liquidated damages clause is generally enforceable if it was a reasonable forecast of harm viewed as of the time the contract was originally formed, regardless of the ultimate actual damages.",
            "No, because the enforcement of a penalty clause when zero actual damages occurred violates fundamental commercial public policy.",
            "No, because government entities are required to prove actual out-of-pocket losses.",
            "Yes, but the amount is reduced to a nominal statutory minimum."
        ],
        ans: 0,
        exp: "Under the modern Restatement and UCC § 2-718(1), a liquidated damages clause is enforceable if the amount is reasonable in light of EITHER the anticipated harm (at the time of contracting) OR the actual harm caused by the breach. Because $1,000/day was highly reasonable at the time of formation, the clause is valid even if actual damages surprisingly ended up being zero."
    },
    // FACT PATTERN 8 (Q22-Q23)
    {
        id: 22,
        topic: "Terms / Implied Warranty of Fitness vs Merchantability",
        fp: "Buyer goes to an outdoor recreation store and says to the clerk: 'I am climbing Mount Everest next week. I need a sleeping bag that will keep me alive at minus 40 degrees.' The clerk nods and hands him a 'Standard Camper' sleeping bag. The bag is perfectly constructed for normal weekend camping, but Buyer suffers severe frostbite on Everest.",
        q: "Which warranty did the store primarily breach?",
        opts: [
            "The implied warranty of merchantability.",
            "The implied warranty of fitness for a particular purpose, because the seller knew of the specific extreme purpose and the buyer relied on the seller's expertise.",
            "The express warranty of absolute perfection.",
            "The warranty of title and against infringement."
        ],
        ans: 1,
        exp: "The sleeping bag is merchantable (fit for its ORDINARY purpose of weekend camping). However, under UCC § 2-315, the implied warranty of fitness for a particular purpose is breached because the seller had reason to know of the buyer's PARTICULAR purpose (Mount Everest) and that the buyer was relying on the seller's skill to select a suitable bag."
    },
    {
        id: 23,
        topic: "Performance / Right to Cure After Expiration (UCC 2-508)",
        fp: "Buyer goes to an outdoor recreation store and says to the clerk: 'I am climbing Mount Everest next week. I need a sleeping bag that will keep me alive at minus 40 degrees.' The clerk nods and hands him a 'Standard Camper' sleeping bag. The bag is perfectly constructed for normal weekend camping, but Buyer suffers severe frostbite on Everest.\n\nAssume instead Buyer ordered 50 standard sleeping bags for delivery by October 1. Seller shipped 50 premium sleeping bags (a better model) on October 1, thinking Buyer would be thrilled. Buyer angrily rejected them. Seller instantly called and said, 'I will overnight the standard bags to you by October 3.'",
        q: "Does Seller have a right to cure the defective delivery after the deadline?",
        opts: [
            "No, because the right to cure strictly expires concurrently with the contractual performance deadline.",
            "Yes, but only if the retailer formally consents in a notarized writing.",
            "Yes, because the seller had reasonable grounds to believe the non-conforming, superior tender would be acceptable, granting them a further reasonable time to substitute a conforming tender.",
            "No, because course of dealing cannot override explicit specifications."
        ],
        ans: 2,
        exp: "Under UCC § 2-508(2), if the time for performance HAS expired, a seller generally cannot cure. However, a major exception exists: if the seller had reasonable grounds to believe the non-conforming tender would be acceptable (such as sending a newer/better model for the same price), the seller is granted a 'further reasonable time' to substitute a conforming tender."
    },
    // FACT PATTERN 9 (Q24-Q25)
    {
        id: 24,
        topic: "Consideration / Preexisting Duty to Third Party",
        fp: "Musician contracts to play at Promoter's festival for $5,000. Musician later refuses to play unless he gets $7,000. The festival's primary sponsor, BeverageCo, hears about this. Desperate for the festival to succeed, BeverageCo orally promises to pay Musician the extra $2,000 if Musician performs. Musician performs, but BeverageCo refuses to pay.",
        q: "Is BeverageCo's promise supported by valid consideration?",
        opts: [
            "No, because the musician was already legally bound to complete the exact same task under his primary contract with the promoter.",
            "No, because the beverage company did not receive a direct, tangible financial benefit from the completion of the musical performance.",
            "Yes, but only under the equitable doctrine of promissory estoppel.",
            "Yes, because a promise made to a third party to perform a preexisting contractual duty owed to another person generally constitutes valid and sufficient consideration."
        ],
        ans: 3,
        exp: "A major exception to the preexisting duty rule occurs when the preexisting duty is owed to a different person. Promising a THIRD PARTY (BeverageCo) to perform a duty already owed to a second party (Promoter) constitutes valid consideration to support the third party's new promise to pay."
    },
    {
        id: 25,
        topic: "Formation / Promissory Estoppel (Charitable Subscriptions)",
        fp: "Musician contracts to play at Promoter's festival for $5,000. Musician later refuses to play unless he gets $7,000. The festival's primary sponsor, BeverageCo, hears about this. Desperate for the festival to succeed, BeverageCo orally promises to pay Musician the extra $2,000 if Musician performs. Musician performs, but BeverageCo refuses to pay.\n\nAssume instead that a wealthy Alumnus promised to donate $1,000,000 to his University's general endowment fund. The University did absolutely nothing in reliance on this promise. Alumnus later revoked the pledge.",
        q: "Is the Alumnus's pledge legally enforceable?",
        opts: [
            "No, because the university failed to establish detrimental reliance.",
            "No, because gratuitous promises inherently lack mutuality of obligation.",
            "Yes, because under the Restatement, charitable subscriptions are often binding without definitive proof that the promise induced explicit action or forbearance.",
            "Yes, because universities are immune from the statute of frauds."
        ],
        ans: 2,
        exp: "Under Restatement (Second) of Contracts § 90(2), a charitable subscription or a marriage settlement is binding under promissory estoppel without proof that the promise induced action or forbearance. Courts often enforce charitable pledges purely on public policy grounds, dispensing with the strict requirement of detrimental reliance."
    }
];
const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Performance / Output Contracts (UCC 2-306 Limits)",
        fp: "Buyer enters into a valid output contract to purchase 'all the grade-A microchips Seller produces.' Historically, Seller produces 5,000 microchips per year. During year two, Seller invents a revolutionary, fully automated manufacturing process, abruptly increasing output to 50,000 microchips. Seller tenders all 50,000 to Buyer. Buyer refuses to accept anything over 6,000 units.",
        q: "Is Buyer legally required to accept and pay for the entire 50,000-unit tender?",
        opts: [
            "Yes, because output contracts explicitly transfer absolute volumetric risk to the purchasing party without limitation.",
            "No, because the implementation of unprecedented manufacturing technology operates as an automatic novation of the commercial agreement.",
            "No, because under UCC § 2-306, an output contract requires good faith, meaning no quantity unreasonably disproportionate to any stated estimate or normal prior output may be tendered or demanded.",
            "Yes, but the buyer is entitled to a judicially determined bulk commercial discount."
        ],
        ans: 2,
        exp: "Under UCC § 2-306, output and requirements contracts are subject to a standard of good faith. Furthermore, no quantity 'unreasonably disproportionate' to any stated estimate or to normal/comparable prior output may be tendered or demanded. A sudden 1,000% increase (from 5k to 50k) is unreasonably disproportionate, excusing Buyer from taking the excess."
    },
    {
        id: 2,
        topic: "Performance / Impracticability vs Absolute Guarantee",
        fp: "Buyer enters into a valid output contract to purchase 'all the grade-A microchips Seller produces.' Historically, Seller produces 5,000 microchips per year. During year two, Seller invents a revolutionary, fully automated manufacturing process, abruptly increasing output to 50,000 microchips. Seller tenders all 50,000 to Buyer. Buyer refuses to accept anything over 6,000 units.\n\nAssume instead the contract was for exactly 5,000 microchips. The contract contained a massive, bold clause: 'Seller assumes absolute risk of all production failures, including catastrophic Acts of God.' A freak meteor destroys the factory. Seller claims impracticability.",
        q: "Is Seller's duty to deliver the microchips excused by the meteor strike?",
        opts: [
            "No, because the defense of commercial impracticability completely fails if the contract explicitly and unambiguously allocated the absolute risk of the exact occurring event to the breaching party.",
            "Yes, because the total destruction of the primary manufacturing facility inherently triggers legal impossibility regardless of boilerplate clauses.",
            "No, because the seller failed to aggressively mitigate the meteorological hazard.",
            "Yes, but only if the seller immediately refunds all previously collected monetary deposits."
        ],
        ans: 0,
        exp: "The doctrine of commercial impracticability/impossibility excuses performance only if the non-occurrence of the event was a basic assumption of the contract AND the party seeking excuse did not assume the risk. If a contract explicitly states that a party assumes the 'absolute risk' of 'Acts of God,' the defense fails because the risk was expressly allocated to them."
    },
    {
        id: 3,
        topic: "Formation / UCC 2-207 (Material Alteration in Confirming Memo)",
        fp: "Buyer enters into a valid output contract to purchase 'all the grade-A microchips Seller produces.' Historically, Seller produces 5,000 microchips per year. During year two, Seller invents a revolutionary, fully automated manufacturing process, abruptly increasing output to 50,000 microchips. Seller tenders all 50,000 to Buyer. Buyer refuses to accept anything over 6,000 units.\n\nAssume the original agreement for 5,000 chips was entirely oral. Immediately after the phone call, Seller sent a signed confirmation memo stating the quantity and price, but additionally included a new clause: 'All disputes must be submitted to binding arbitration in London.' Buyer read it and ignored it.",
        q: "Does the arbitration clause become part of the binding agreement?",
        opts: [
            "It becomes a binding part of the agreement because Buyer failed to provide a written objection within the statutory 10-day window.",
            "It does not become part of the contract because limiting dispute resolution to an arbitration forum is universally recognized as a material alteration, requiring express mutual assent even between highly sophisticated merchants.",
            "It establishes an implied novation.",
            "It renders the entire oral contract completely unenforceable under the strict application of the Statute of Frauds."
        ],
        ans: 1,
        exp: "Under UCC § 2-207, a written confirmation sent within a reasonable time operates as an acceptance even if it states additional terms. Between merchants, these additional terms become part of the contract UNLESS they materially alter it. Courts almost universally hold that an arbitration clause is a 'material alteration,' meaning it drops out unless explicitly agreed to."
    },
    // FACT PATTERN 2 (Q4-Q6)
    {
        id: 4,
        topic: "Third Parties / Delegation of Requirements Contract",
        fp: "Local Bakery has a valid requirements contract to buy 'all the granulated sugar we require for our shop' from Regional Farm for one year at a set, highly favorable price. Halfway through the year, Local Bakery is bought out by MegaCorp, a massive national conglomerate. Local Bakery completely delegates its duties and assigns its rights under the sugar contract to MegaCorp. Regional Farm refuses to supply MegaMart.",
        q: "Is the delegation and assignment to MegaCorp legally valid?",
        opts: [
            "Yes, because the assignment of rights to physical agricultural goods is universally protected.",
            "Yes, provided MegaCorp pays the regional farm in full advance installments.",
            "No, because all food supply agreements are considered highly specialized personal service contracts.",
            "No, because assigning a requirements contract to an entity with drastically larger requirements materially alters the duty and burden of the obligor, rendering the transfer legally invalid."
        ],
        ans: 3,
        exp: "Under UCC § 2-210, an assignment of rights or delegation of duties is invalid if it would materially change the duty of the other party, increase the burden/risk imposed on them, or impair their chance of obtaining return performance. Assigning a requirements contract from a tiny local shop to a massive conglomerate drastically alters the Farm's production burden, invalidating the transfer."
    },
    {
        id: 5,
        topic: "Third Parties / UCC Article 9 Anti-Assignment Rules",
        fp: "Local Bakery has a valid requirements contract to buy 'all the granulated sugar we require for our shop' from Regional Farm for one year at a set, highly favorable price. Halfway through the year, Local Bakery is bought out by MegaCorp, a massive national conglomerate. Local Bakery completely delegates its duties and assigns its rights under the sugar contract to MegaCorp. Regional Farm refuses to supply MegaMart.\n\nAssume instead the contract was for a fixed 1,000 pounds of sugar. Farm delivers the sugar to Bakery. Farm then assigns the right to receive the $1,000 payment to Local Bank. The original contract explicitly stated: 'All assignments of rights under this contract are completely VOID.'",
        q: "Is the assignment of the payment to the Bank valid despite the 'void' contract language?",
        opts: [
            "Yes, because under UCC Article 9, anti-assignment clauses restricting the assignment of accounts (the right to receive payment) are completely ineffective, even if they explicitly utilize the word 'VOID'.",
            "No, because explicitly declaring an assignment 'void' successfully destroys the underlying power of assignment under all circumstances.",
            "No, because the underlying agricultural service was intensely personal in nature.",
            "Yes, but only if the bank agrees to entirely indemnify the bakery against secondary litigation."
        ],
        ans: 0,
        exp: "This is a super-advanced UCC Article 9 exception. While at common law the word 'VOID' destroys the power to assign, UCC § 9-406(d) governs the assignment of 'accounts' (the right to payment for services rendered or goods sold). Under Article 9, ANY contract term that prohibits, restricts, or requires consent for the assignment of an account is completely ineffective. The right to get paid is always freely assignable."
    },
    {
        id: 6,
        topic: "Third Parties / Vesting of Beneficiary Rights (By Filing Suit)",
        fp: "Local Bakery has a valid requirements contract to buy 'all the granulated sugar we require for our shop' from Regional Farm for one year at a set, highly favorable price. Halfway through the year, Local Bakery is bought out by MegaCorp, a massive national conglomerate. Local Bakery completely delegates its duties and assigns its rights under the sugar contract to MegaCorp. Regional Farm refuses to supply MegaMart.\n\nAssume MegaCorp validly assumed Bakery's debts. MegaCorp explicitly promised Bakery it would pay Bakery's past-due $5,000 debt to Creditor. Creditor heard about this and immediately filed a formal lawsuit against MegaCorp for the money. The next day, MegaCorp and Bakery mutually agreed to cancel the debt-payment arrangement.",
        q: "Was the cancellation legally effective against Creditor?",
        opts: [
            "Yes, because the original contracting parties retain the absolute, unqualified right to modify or cancel the agreement until physical funds are transferred.",
            "No, because the physical transfer of the corporate property irrevocably vested the financial rights.",
            "No, because the third-party beneficiary's rights legally vested the exact moment the beneficiary brought a lawsuit to enforce the promise.",
            "Yes, but only if the cancellation was formally approved by a judicial officer."
        ],
        ans: 2,
        exp: "The original contracting parties can modify or cancel a contract without the third-party beneficiary's consent UNTIL the beneficiary's rights have 'vested.' Rights vest when the beneficiary learns of the contract and (1) materially relies on it, (2) assents to it at the request of the parties, or (3) brings suit to enforce it. Because Creditor filed suit, the rights vested, blocking the subsequent cancellation."
    },
    // FACT PATTERN 3 (Q7-Q9)
    {
        id: 7,
        topic: "Terms / Parol Evidence (Condition Precedent to Formation)",
        fp: "Developer and Builder execute a fully integrated written contract for the purchase of a vacant lot. During the signing, Developer orally stated, 'I am signing this, but we agree this contract is entirely void and ineffective unless the City explicitly approves my commercial zoning application tomorrow.' The written contract explicitly states 'Payment due immediately upon delivery of deed.' The City denied the zoning application.",
        q: "Can Developer introduce the oral statement to avoid the contract?",
        opts: [
            "No, because the Parol Evidence Rule strictly bars prior oral agreements that contradict a completely integrated written contract.",
            "No, because the integration clause creates an irrebuttable presumption of honest dealing.",
            "Yes, but the remedy is strictly limited to nominal restitution.",
            "Yes, because parol evidence is universally admissible to demonstrate an oral condition precedent to the legal formation and existence of the entire contractual agreement."
        ],
        ans: 3,
        exp: "A widely recognized exception to the Parol Evidence Rule allows a party to introduce extrinsic evidence demonstrating that the written agreement was subject to an oral condition precedent to its FORMATION. If the contract was never meant to take effect until the condition (zoning approval) was met, the evidence is admissible to show no binding contract ever existed."
    },
    {
        id: 8,
        topic: "Terms / Parol Evidence Rule (Direct Contradiction)",
        fp: "Developer and Builder execute a fully integrated written contract for the purchase of a vacant lot. During the signing, Developer orally stated, 'I am signing this, but we agree this contract is entirely void and ineffective unless the City explicitly approves my commercial zoning application tomorrow.' The written contract explicitly states 'Payment due immediately upon delivery of deed.' The City denied the zoning application.\n\nAssume instead the contract was for an existing house, sold 'AS IS' with a massive integration clause. During negotiations, Builder orally promised to fix a severe leak in the roof for free. Builder never fixed it.",
        q: "Is evidence of Builder's oral promise to fix the roof admissible?",
        opts: [
            "Yes, because the repair of a structural defect constitutes an independent collateral agreement.",
            "No, because the Parol Evidence Rule explicitly prohibits introducing prior oral agreements that directly contradict the terms of a completely integrated written contract, such as an 'as-is' provision.",
            "No, unless the repair cost exceeds the specific five-hundred-dollar threshold.",
            "Yes, because partially integrated contracts can be freely supplemented by any prior oral agreements."
        ],
        ans: 1,
        exp: "The Parol Evidence Rule prohibits the introduction of prior or contemporaneous oral agreements that contradict or supplement the terms of a 'completely integrated' written contract. The oral promise to repair the roof directly contradicts the written 'as-is' term and is therefore strictly barred. (It is not a collateral agreement because there is no separate consideration)."
    },
    {
        id: 9,
        topic: "Terms / Parol Evidence (Fraud Exception)",
        fp: "Developer and Builder execute a fully integrated written contract for the purchase of a vacant lot. During the signing, Developer orally stated, 'I am signing this, but we agree this contract is entirely void and ineffective unless the City explicitly approves my commercial zoning application tomorrow.' The written contract explicitly states 'Payment due immediately upon delivery of deed.' The City denied the zoning application.\n\nAssume the house was sold 'AS IS.' However, Developer claims Builder intentionally lied and orally promised the house had no termite damage, fully knowing the foundation was destroyed, merely to induce Developer to sign the contract.",
        q: "Is evidence of Builder's deliberate lie admissible in court?",
        opts: [
            "Admissible because evidence of fraud in the inducement universally bypasses the Parol Evidence Rule, allowing the aggrieved party to invalidate the agreement regardless of integration clauses.",
            "No, because the prominent 'as-is' clause legally shifts all commercial risk directly to the purchasing party.",
            "Yes, but the remedy is strictly limited to an injunction rather than compensatory damages.",
            "No, because sophisticated real estate developers are required to independently verify the internal condition of properties prior to execution."
        ],
        ans: 0,
        exp: "While the Parol Evidence Rule bars prior agreements that contradict the writing, evidence of fraud, misrepresentation, or duress in the inducement is ALWAYS admissible to show that the contract itself is invalid or was induced by deceit. An 'as-is' or merger clause does not shield a party from intentional fraud."
    },
    // FACT PATTERN 4 (Q10-Q12)
    {
        id: 10,
        topic: "Performance / Risk of Loss (FOB Shipping Point + Breach Effect)",
        fp: "Manufacturer agrees to sell 100 specialized medical lasers to Clinic. The contract states the shipping terms as 'FOB Manufacturer's Plant.' Manufacturer packages 100 extremely defective lasers that fail basic safety checks and hands them over to an independent commercial freight carrier. During transit, the carrier's truck is destroyed in a massive, unavoidable accident.",
        q: "Who bears the risk of loss for the destroyed lasers?",
        opts: [
            "The buyer, because the risk of loss legally transferred the exact moment the goods were entrusted to the independent carrier.",
            "The shipping carrier, due to strict absolute liability for all transit failures.",
            "The seller bears the risk of loss, because shipping severely non-conforming goods gives the buyer a right of rejection, preventing the risk from passing even in a shipment contract.",
            "The risk is split evenly under the doctrine of comparative commercial fault."
        ],
        ans: 2,
        exp: "Normally, in an FOB Origin (Shipment) contract, risk passes when the goods are tendered to the carrier. HOWEVER, under UCC § 2-510, if a tender of goods so fails to conform to the contract as to give a right of rejection (shipping defective/unsafe lasers), the risk of loss remains on the SELLER until cure or acceptance. Thus, Manufacturer bears the risk."
    },
    {
        id: 11,
        topic: "Performance / Revocation of Acceptance (Latent Defect)",
        fp: "Manufacturer agrees to sell 100 specialized medical lasers to Clinic. The contract states the shipping terms as 'FOB Manufacturer's Plant.' Manufacturer packages 100 extremely defective lasers that fail basic safety checks and hands them over to an independent commercial freight carrier. During transit, the carrier's truck is destroyed in a massive, unavoidable accident.\n\nAssume Manufacturer shipped perfect-looking lasers. Clinic officially accepted them and installed them. Three weeks later, a severe latent micro-fracture deep inside the internal casing—which was impossible to see during standard inspection—causes the lasers to fail entirely. Clinic notifies Manufacturer it is revoking its acceptance.",
        q: "Was the Clinic's revocation of acceptance legally valid?",
        opts: [
            "No, because physical installation permanently waives all subsequent rejection rights.",
            "Yes, but only if the clinic had explicitly negotiated an extended commercial warranty.",
            "No, because the risk of all latent manufacturing defects shifts unconditionally to the buyer upon formal acceptance.",
            "Yes, because a buyer may revoke acceptance if a non-conformity substantially impairs the value of the goods and the acceptance was reasonably induced by the extreme difficulty of discovering a latent defect."
        ],
        ans: 3,
        exp: "Under UCC § 2-608, a buyer may revoke their prior acceptance of goods if a non-conformity substantially impairs the value of the goods to the buyer AND the acceptance was reasonably induced either by the extreme difficulty of discovery before acceptance (a latent defect) or by the seller's assurances."
    },
    {
        id: 12,
        topic: "Performance / Risk of Loss After Revocation (UCC 2-510(2))",
        fp: "Manufacturer agrees to sell 100 specialized medical lasers to Clinic. The contract states the shipping terms as 'FOB Manufacturer's Plant.' Manufacturer packages 100 extremely defective lasers that fail basic safety checks and hands them over to an independent commercial freight carrier. During transit, the carrier's truck is destroyed in a massive, unavoidable accident.\n\nImmediately after Clinic validly revokes acceptance due to the latent defect, a freak flood destroys the shattered lasers entirely while they are sitting in Clinic's facility. Clinic's commercial insurance completely denies the claim, covering 0% of the damage.",
        q: "Who bears the risk of loss for the destroyed lasers?",
        opts: [
            "The buyer, because the goods were located on the buyer's physical premises.",
            "The seller bears the risk of loss to the extent of any deficiency in the buyer's effective insurance coverage.",
            "The risk is split evenly under comparative fault.",
            "The seller bears the absolute risk of loss regardless of any insurance policies held by the buyer."
        ],
        ans: 1,
        exp: "This tests a specific, advanced UCC rule. Under UCC § 2-510(2), where a buyer rightfully revokes acceptance, they may, to the extent of any deficiency in their effective insurance coverage, treat the risk of loss as having rested on the SELLER from the beginning. Since Clinic's insurance covers 0%, Manufacturer (Seller) bears 100% of the risk."
    },
    // FACT PATTERN 5 (Q13-Q15)
    {
        id: 13,
        topic: "Performance / Demand for Assurances (UCC 2-609)",
        fp: "Supplier agrees to deliver 10,000 yards of silk to Designer on November 1. On October 1, Designer reads a verified Wall Street Journal article detailing Supplier's imminent bankruptcy and total supply chain collapse. Designer immediately emails a written demand for adequate assurances and suspends her upcoming scheduled advance payment.",
        q: "Was Designer legally justified in suspending her payment and demanding assurances?",
        opts: [
            "No, because the designer must wait until the November 1 deadline to establish an actual breach.",
            "No, because rumors or newspaper articles can never serve as the basis for suspending a commercial contract.",
            "Yes, because under both common law and the UCC, highly credible mainstream reports of impending bankruptcy provide objectively reasonable grounds for commercial insecurity, validating the demand and suspension.",
            "Yes, but the demand must be officially filed with the municipal court clerk."
        ],
        ans: 2,
        exp: "Under both the Restatement and UCC § 2-609, if a party has 'reasonable grounds for insecurity' regarding the other party's performance (such as reading credible mainstream reports of severe financial/supply distress), they may demand adequate assurances of performance in writing and suspend their own performance while waiting."
    },
    {
        id: 14,
        topic: "Performance / Anticipatory Repudiation (Failure to Assure)",
        fp: "Supplier agrees to deliver 10,000 yards of silk to Designer on November 1. On October 1, Designer reads a verified Wall Street Journal article detailing Supplier's imminent bankruptcy and total supply chain collapse. Designer immediately emails a written demand for adequate assurances and suspends her upcoming scheduled advance payment.\n\nOn October 5, Supplier replies to the demand: 'Don't worry, I'll try my best to figure it out.' Supplier provides no other evidence or financial documentation.",
        q: "What is the legal effect of Supplier's October 5 response?",
        opts: [
            "It operates as a mutual rescission of the original contract.",
            "It has no legal effect until the November 1 deadline officially expires.",
            "It transfers the absolute burden of performance to the buyer.",
            "The vague, non-committal response fails to provide adequate assurance of due performance under commercial standards, legally functioning as an anticipatory repudiation."
        ],
        ans: 3,
        exp: "When a party makes a justified demand for adequate assurances, the other party must provide assurances that are 'adequate under the circumstances.' A vague, non-committal statement like 'I'll try my best' is inadequate, especially when facing verified bankruptcy reports. Failure to provide adequate assurances within a reasonable time is treated as an anticipatory repudiation of the contract."
    },
    {
        id: 15,
        topic: "Performance / Retraction of Anticipatory Repudiation (Cover)",
        fp: "Supplier agrees to deliver 10,000 yards of silk to Designer on November 1. On October 1, Designer reads a verified Wall Street Journal article detailing Supplier's imminent bankruptcy and total supply chain collapse. Designer immediately emails a written demand for adequate assurances and suspends her upcoming scheduled advance payment.\n\nAssume Supplier explicitly repudiated on October 1. On October 10, Designer signed a binding contract with a substitute manufacturer to cover the silk. On October 11, Supplier emailed: 'Bankruptcy avoided. I retract my repudiation and will deliver on November 1.'",
        q: "Was Supplier's October 11 retraction legally valid?",
        opts: [
            "No, because the aggrieved party materially changed their position in detrimental reliance on the repudiation by securing a substitute commercial vendor.",
            "Yes, because written communications inherently override oral or constructive repudiations.",
            "Yes, because the retraction occurred prior to the designated November 1 deadline.",
            "No, because anticipatory repudiations are completely irrevocable once placed in writing."
        ],
        ans: 0,
        exp: "A party can retract an anticipatory repudiation before their performance is due, UNLESS the aggrieved party has canceled the contract, materially changed their position, OR indicated they consider the repudiation final. Because Designer materially changed position by obtaining substitute goods (cover) on October 10, Supplier's power to retract was permanently extinguished."
    },
    // FACT PATTERN 6 (Q16-Q18)
    {
        id: 16,
        topic: "Remedies / Lost Volume Seller (UCC 2-708(2))",
        fp: "High-volume retail Boat Dealer sells standard, mass-produced speedboats. Customer signs a contract to buy one sedan for $30,000. Customer breaches and refuses to pay. Dealership immediately resells the exact same boat to another buyer for the exact same price of $30,000. Dealership has 50 more identical boats in inventory.",
        q: "Can Dealership recover expectation damages from Customer despite the successful resale?",
        opts: [
            "No, because the dealership successfully mitigated all actual financial loss through the subsequent resale.",
            "No, because double recovery is strictly prohibited by commercial jurisprudence.",
            "Yes, as a 'lost volume seller,' the dealer is entitled to the lost profit from the breached sale because they would have realized two separate sales and two profits if the buyer had not breached.",
            "Yes, but the remedy is strictly limited to nominal administrative fees."
        ],
        ans: 2,
        exp: "Under UCC § 2-708(2), if the standard measure of damages is inadequate to put the seller in as good a position as performance would have done, a 'lost volume seller' (one with unlimited supply) can recover their lost profit. Had Customer not breached, Dealership would have sold TWO boats and made TWO profits, not one."
    },
    {
        id: 17,
        topic: "Remedies / Liquidated Damages (Penalty)",
        fp: "High-volume retail Boat Dealer sells standard, mass-produced speedboats. Customer signs a contract to buy one sedan for $30,000. Customer breaches and refuses to pay. Dealership immediately resells the exact same boat to another buyer for the exact same price of $30,000. Dealership has 50 more identical boats in inventory.\n\nAssume the original $30,000 contract contained a clause stating: 'If Customer breaches, Customer must pay a $50,000 penalty immediately.' Customer's breach actually caused Dealership $2,000 in harm.",
        q: "Is the $50,000 liquidated damages clause enforceable?",
        opts: [
            "Yes, because sophisticated parties freely agreed to the terms.",
            "Unenforceable because the amount is grossly disproportionate to actual harm and functions as a punitive penalty rather than a reasonable forecast.",
            "Yes, because vehicle depreciation is notoriously difficult to accurately appraise.",
            "No, because it was not explicitly approved by a judicial officer prior to the breach."
        ],
        ans: 1,
        exp: "Liquidated damages clauses are only enforceable if actual damages were difficult to estimate at formation AND the specified amount is a reasonable forecast of compensatory damages. A $50,000 penalty on a $30,000 contract is grossly disproportionate to any actual harm, making it an unenforceable penalty clause designed merely to punish."
    },
    {
        id: 18,
        topic: "Remedies / Specific Performance (Unique Goods)",
        fp: "High-volume retail Boat Dealer sells standard, mass-produced speedboats. Customer signs a contract to buy one sedan for $30,000. Customer breaches and refuses to pay. Dealership immediately resells the exact same boat to another buyer for the exact same price of $30,000. Dealership has 50 more identical boats in inventory.\n\nAssume instead a private Collector contracted to buy a one-of-a-kind historic painting from Art Gallery. The contract contained a $5,000 liquidated damages clause. Art Gallery breaches and refuses to hand over the painting. Collector sues for specific performance.",
        q: "Does the liquidated damages clause prevent the court from ordering specific performance?",
        opts: [
            "No, the presence of a liquidated damages clause does not automatically bar specific performance unless the contract explicitly provides that liquidated damages are the sole and exclusive remedy.",
            "Yes, because monetary damages were explicitly pre-calculated and agreed upon by sophisticated commercial parties.",
            "Yes, because liquidated damages inherently establish an adequate remedy at law, barring all equitable relief.",
            "No, because artistic works are categorically excluded from monetary limitations."
        ],
        ans: 0,
        exp: "A common misconception is that a liquidated damages clause precludes specific performance because it provides an 'adequate remedy at law.' However, modern contract law (and the UCC) holds that unless a contract explicitly states that liquidated damages are the SOLE AND EXCLUSIVE remedy, a buyer can still seek specific performance for unique goods."
    },
    // FACT PATTERN 7 (Q19-Q20)
    {
        id: 19,
        topic: "Performance / Express Conditions vs Substantial Performance",
        fp: "Builder is hired to construct a patio. The contract states: 'It is an EXPRESS CONDITION precedent to payment that Builder exclusively uses Cedar wood.' Builder accidentally and innocently uses Redwood, which is visually identical and equally durable. Owner discovers this and refuses to pay the final balance.",
        q: "Is Owner legally obligated to pay the balance?",
        opts: [
            "Yes, under the doctrine of substantial performance, because the breach was trivial and unintentional.",
            "The buyer's duty to pay is legally excused because express conditions require strict, literal compliance, unlike constructive conditions.",
            "Yes, because the materials were identical in quality, resulting in zero diminution in value.",
            "No, because the perfect tender rule explicitly applies to all residential construction agreements."
        ],
        ans: 1,
        exp: "Unlike constructive conditions (which are satisfied by substantial performance), express conditions (using magic words like 'expressly conditioned on') require strict, 100% literal compliance. Failure to strictly comply excuses the other party's performance, though modern courts occasionally excuse them to prevent extreme forfeiture."
    },
    {
        id: 20,
        topic: "Performance / Prevention Doctrine",
        fp: "Builder is hired to construct a patio. The contract states: 'It is an EXPRESS CONDITION precedent to payment that Builder exclusively uses Cedar wood.' Builder accidentally and innocently uses Redwood, which is visually identical and equally durable. Owner discovers this and refuses to pay the final balance.\n\nAssume Builder tried to buy Cedar. However, Owner secretly paid the only local lumberyard to refuse to sell Cedar to Builder, forcing Builder to use Redwood. Owner then refused to pay.",
        q: "Must Owner pay for the patio?",
        opts: [
            "No, because express conditions require strict compliance regardless of external sabotage.",
            "Yes, but only under the doctrine of substantial performance.",
            "No, because the builder failed to secure an alternate supply chain.",
            "The condition is legally excused under the prevention doctrine because the owner wrongfully hindered the occurrence of the condition in bad faith, forcing the owner to pay."
        ],
        ans: 3,
        exp: "Under the prevention doctrine, if a party whose duty is subject to a condition wrongfully (in bad faith) prevents or hinders the occurrence of that condition (like bribing the supplier to block the sale of the required wood), the condition is legally excused. The Owner must pay."
    },
    // FACT PATTERN 8 (Q21-Q23)
    {
        id: 21,
        topic: "Defenses / Infancy & Quasi-Contract for Necessaries",
        fp: "Sam, a 17-year-old college student, signs a six-month lease for an apartment near campus, paying $1,000 per month. The age of majority is 18. Sam lives there and pays rent for three months, then decides he wants to move back home. He attempts to disaffirm the lease and demands all his rent money back. The landlord sues for the fair market value of the three months Sam actually lived there.",
        q: "Can the landlord recover for the time Sam already lived in the apartment?",
        opts: [
            "No, because contracts with minors are entirely unenforceable and void ab initio.",
            "Yes, but only if the minor intentionally misrepresented their age during the application process.",
            "Yes, because shelter is considered a 'necessary,' and a minor is liable in quasi-contract for the reasonable value of necessaries actually furnished to them prior to disaffirmance.",
            "No, because landlords assume the strict absolute risk of non-payment when executing agreements with unemancipated youth."
        ],
        ans: 2,
        exp: "While a minor can disaffirm a contract, they remain liable in quasi-contract (restitution) for the reasonable, fair market value of 'necessaries' (food, clothing, shelter, medical care) that were actually furnished to them prior to disaffirmance. Shelter is a necessary, so the landlord recovers."
    },
    {
        id: 22,
        topic: "Defenses / Infancy Ratification by Conduct",
        fp: "Sam, a 17-year-old college student, signs a six-month lease for an apartment near campus, paying $1,000 per month. The age of majority is 18. Sam lives there and pays rent for three months, then decides he wants to move back home. He attempts to disaffirm the lease and demands all his rent money back. The landlord sues for the fair market value of the three months Sam actually lived there.\n\nAssume instead that Sam turned 18 halfway through the lease. He continued living in the apartment and paying rent for two full months after his 18th birthday before attempting to disaffirm.",
        q: "Has Sam legally ratified the lease?",
        opts: [
            "Yes, because retaining significant benefits or exercising continued dominion over the property for an unreasonable time after reaching the age of majority constitutes an implied ratification.",
            "No, because he formally vacated the premises prior to the expiration of the full six-month term.",
            "No, because mere physical property retention does not constitute affirmative financial assent.",
            "Yes, but only if he signed a supplemental written addendum."
        ],
        ans: 0,
        exp: "A minor can disaffirm a contract, but if they fail to do so within a reasonable time after turning 18, or if they continue to retain the benefits of the contract (like living there and paying rent), they impliedly ratify the contract by their conduct and permanently lose the power to disaffirm."
    },
    {
        id: 23,
        topic: "Defenses / Infancy & Misrepresentation of Age",
        fp: "Sam, a 17-year-old college student, signs a six-month lease for an apartment near campus, paying $1,000 per month. The age of majority is 18. Sam lives there and pays rent for three months, then decides he wants to move back home. He attempts to disaffirm the lease and demands all his rent money back. The landlord sues for the fair market value of the three months Sam actually lived there.\n\nAssume Sam used a highly sophisticated fake ID to convince the landlord he was 22. Three months in, Sam trashes the apartment, moves out, and disaffirms based on infancy.",
        q: "Does Sam's intentional misrepresentation of his age prevent him from disaffirming the contract under the majority common law rule?",
        opts: [
            "Yes, because fraudulent inducement absolutely strips a minor of all equitable incapacity protections.",
            "Yes, because executing a lease agreement legally emancipates a minor.",
            "No, because landlords bear strict absolute liability when verifying the identity of prospective tenants.",
            "In most jurisdictions, the minor may still legally disaffirm the contract, although the landlord may independently pursue a tort claim for fraud or seek equitable restitution."
        ],
        ans: 3,
        exp: "At common law and in the majority of jurisdictions, a minor's misrepresentation of age does NOT prevent them from disaffirming a contract. The contract remains voidable by the minor. However, to prevent severe injustice, many modern courts allow the defrauded adult to sue the minor in tort for deceit/fraud, or require the minor to pay equitable restitution for the damage."
    },
    // FACT PATTERN 9 (Q24-Q25)
    {
        id: 24,
        topic: "Formation / Intersecting Dispatches (Mailbox Rule)",
        fp: "On Monday, Xavier mails an offer to Yolanda. On Wednesday, Yolanda receives the offer. On Thursday morning, Yolanda mails a letter of rejection to Xavier. On Thursday afternoon, Yolanda changes her mind and mails a letter of acceptance to Xavier. Xavier receives the acceptance on Friday, and the rejection on Saturday.",
        q: "Is a legally binding contract formed?",
        opts: [
            "The rejection controls, because it instantly terminates the power of acceptance upon physical dispatch.",
            "Yes, because when an offeree mails a rejection followed by an acceptance, the standard mailbox rule is suspended, and whichever communication is actually received first by the offeror legally controls the outcome.",
            "The acceptance controls, because the mailbox rule strictly prioritizes affirmative commercial assent.",
            "Neither controls, because sending conflicting documents voids the initial offer entirely."
        ],
        ans: 1,
        exp: "When an offeree mails a rejection and then changes their mind and mails an acceptance, the standard mailbox rule (acceptance effective on dispatch) is suspended. Instead, a 'race to the offeror's mailbox' occurs: whichever letter is received FIRST by the offeror controls. Since the acceptance arrived first on Friday, a contract is formed."
    },
    {
        id: 25,
        topic: "Formation / UCC Firm Offer Limit",
        fp: "On Monday, Xavier mails an offer to Yolanda. On Wednesday, Yolanda receives the offer. On Thursday morning, Yolanda mails a letter of rejection to Xavier. On Thursday afternoon, Yolanda changes her mind and mails a letter of acceptance to Xavier. Xavier receives the acceptance on Friday, and the rejection on Saturday.\n\nAssume instead Xavier is a merchant selling servers. Xavier sends a signed, written offer to Yolanda stating: 'I offer to supply 500 servers. I guarantee this offer will be held open for six months.' Yolanda pays no consideration. In month four, Xavier formally revokes the offer. In month five, Yolanda faxes an acceptance.",
        q: "Was Xavier's month-four revocation legally effective?",
        opts: [
            "No, because the explicit inclusion of a deadline generates an irrebuttable presumption of mutual assent.",
            "No, because written promises by merchants bypass all traditional common law consideration constraints indefinitely.",
            "The revocation was effective because under the UCC firm offer rule, the maximum period of irrevocability without independent consideration is strictly limited to three months.",
            "Yes, because the six-month time limit violated standard federal antitrust regulations."
        ],
        ans: 2,
        exp: "Under UCC § 2-205 (Firm Offer), a merchant's signed, written offer assuring it will be held open is irrevocable without consideration. However, the period of irrevocability cannot exceed three months (90 days). Because the revocation occurred in month four, after the 3-month statutory limit expired, the offer had become revocable, making the revocation effective."
    }
];
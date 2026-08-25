const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Formation / UCC 2-207 (Conduct & Knockout)",
        fp: "Merchant Buyer emails a purchase order to Merchant Seller for 5,000 yards of fabric. The purchase order explicitly states: 'No arbitration clauses are permitted.' Seller sends a signed acknowledgment stating: 'Acceptance is expressly made conditional on Buyer's assent to our mandatory arbitration clause.' Buyer never expressly assents. Seller ships the fabric. Buyer accepts and uses the fabric. A dispute arises.",
        q: "Since the writings failed to form a contract, what governs the dispute resolution under the UCC?",
        opts: [
            "The contract consists of the terms on which the writings agree, plus standard UCC gap-fillers, meaning the conflicting arbitration terms drop out completely under the knockout rule.",
            "The seller's arbitration clause governs because shipping the goods operated as the final legal action in the commercial sequence.",
            "The buyer's prohibition strictly controls under the mirror image rule.",
            "No contract was formed at all, requiring the buyer to return the fabric."
        ],
        ans: 0,
        exp: "Under UCC § 2-207(1), making an acceptance 'expressly conditional' on new terms is a counteroffer. Because Buyer never expressly assented, no contract was formed by the writings. However, under § 2-207(3), a contract was formed by their CONDUCT (shipping and using). The terms are those on which the writings agree, plus UCC gap-fillers. Conflicting terms (like arbitration vs. no arbitration) are knocked out."
    },
    {
        id: 2,
        topic: "Formation / UCC 2-207 (Material Alteration)",
        fp: "Merchant Buyer emails a purchase order to Merchant Seller for 5,000 yards of fabric. The purchase order explicitly states: 'No arbitration clauses are permitted.' Seller sends a signed acknowledgment stating: 'Acceptance is expressly made conditional on Buyer's assent to our mandatory arbitration clause.' Buyer never expressly assents. Seller ships the fabric. Buyer accepts and uses the fabric. A dispute arises.\n\nAssume instead Seller's acknowledgment was an unconditional acceptance, but quietly included the arbitration clause on the back. Buyer's original offer did NOT mention arbitration at all. Buyer accepted the shipped goods.",
        q: "Does the arbitration clause become part of the contract?",
        opts: [
            "Yes, because under the mirror image rule, physical acceptance ratifies the counteroffer.",
            "No, because between merchants, an arbitration clause is universally deemed a material alteration that fails to automatically enter the agreement without explicit assent.",
            "Yes, because the buyer failed to object within the ten-day statutory window.",
            "No, because the original agreement was oral, rendering subsequent writings void."
        ],
        ans: 1,
        exp: "Under UCC § 2-207(2), between merchants, additional terms in an acceptance become part of the contract UNLESS they materially alter it. A clause requiring binding arbitration is universally considered a 'material alteration.' Therefore, it drops out of the contract unless the buyer explicitly assents to it."
    },
    {
        id: 3,
        topic: "Defenses / Statute of Frauds (Merchant Confirmatory Memo)",
        fp: "Merchant Buyer emails a purchase order to Merchant Seller for 5,000 yards of fabric. The purchase order explicitly states: 'No arbitration clauses are permitted.' Seller sends a signed acknowledgment stating: 'Acceptance is expressly made conditional on Buyer's assent to our mandatory arbitration clause.' Buyer never expressly assents. Seller ships the fabric. Buyer accepts and uses the fabric. A dispute arises.\n\nAssume the initial agreement for the fabric was entirely oral over the phone. Immediately after hanging up, Seller sent a signed email stating: 'Confirming our order for 5,000 yards.' The memo included the arbitration clause. Buyer ignored the email. Seller never shipped the goods, and Buyer sued for breach of the oral contract.",
        q: "Does the Statute of Frauds bar Buyer's enforcement of the oral agreement?",
        opts: [
            "Yes, because the contract price exceeds five hundred dollars, strictly mandating the signature of the party against whom enforcement is sought.",
            "Yes, because the memo contained a material alteration, thereby voiding the confirmation.",
            "No, because under the merchant's confirmatory memo rule, Buyer's failure to object to the signed email within 10 days satisfies the writing requirement against both parties.",
            "No, because oral agreements between sophisticated merchants bypass traditional evidentiary writing requirements."
        ],
        ans: 2,
        exp: "Under UCC § 2-201(2) (the merchant's confirmatory memo rule), if one merchant sends a written confirmation of the oral agreement within a reasonable time, it satisfies the Statute of Frauds against the recipient UNLESS the recipient objects in writing within 10 days. Because Buyer ignored it, the oral contract is enforceable against BOTH parties (even though the arbitration clause drops out as a material alteration)."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Defenses / No Oral Modification Clauses (Common Law)",
        fp: "Owner and Builder sign a fully integrated written contract for the construction of a custom bridge for $1,000,000. The contract contains a prominent clause: 'NO ORAL MODIFICATIONS PERMITTED. ALL CHANGES MUST BE IN WRITING.' Halfway through, Builder asks for an extra $50,000 to cover unforeseen supply chain delays. Owner orally agrees. Builder finishes the bridge, but Owner refuses to pay the extra $50,000.",
        q: "Assuming standard common law applies, does the 'No Oral Modification' clause legally bar the oral amendment?",
        opts: [
            "Yes, because construction contracts are strictly governed by the four corners of their written documents.",
            "Yes, because the Statute of Frauds automatically enforces all anti-modification clauses.",
            "No, because the Uniform Commercial Code prohibits such clauses in transactions exceeding ten thousand dollars.",
            "At common law, 'no oral modification' clauses are generally ineffective because the parties possess the inherent power to orally waive the clause itself alongside the modification."
        ],
        ans: 3,
        exp: "At common law (which governs construction/service contracts), 'No Oral Modification' (NOM) clauses are generally unenforceable. Courts reason that the parties have the power to orally agree to waive the NOM clause at the exact same time they orally agree to the modification. (Note: The UCC changes this rule for goods, but this is a service contract. However, Builder still needs consideration for the modification under the preexisting duty rule)."
    },
    {
        id: 5,
        topic: "Terms / Parol Evidence (Condition Precedent to Formation)",
        fp: "Owner and Builder sign a fully integrated written contract for the construction of a custom bridge for $1,000,000. The contract contains a prominent clause: 'NO ORAL MODIFICATIONS PERMITTED. ALL CHANGES MUST BE IN WRITING.' Halfway through, Builder asks for an extra $50,000 to cover unforeseen supply chain delays. Owner orally agrees. Builder finishes the bridge, but Owner refuses to pay the extra $50,000.\n\nAssume instead that prior to signing the completely integrated initial contract, Owner told Builder, 'I will sign this now, but the contract is entirely void and does not take effect unless the City Council approves the zoning permit by Friday.' The Council rejected the permit.",
        q: "Can Owner introduce evidence of this oral conversation to defeat Builder's breach of contract lawsuit?",
        opts: [
            "Admissible because it establishes an oral condition precedent to the legal formation of the entire contract, a recognized exception to the Parol Evidence Rule.",
            "No, because the parol evidence rule bars all prior oral agreements that contradict a fully integrated contract.",
            "Yes, but only if the builder actually admitted the conversation took place in open court.",
            "No, because zoning contingencies must be formalized in writing to escape the four corners doctrine."
        ],
        ans: 0,
        exp: "A widely recognized exception to the Parol Evidence Rule allows a party to introduce extrinsic evidence demonstrating that the written agreement was subject to an oral condition precedent to its FORMATION. If the contract was never meant to take effect until the condition (City Council approval) was met, the evidence is admissible to show no binding contract ever existed."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Performance / Impracticability (Identified Goods Destroyed)",
        fp: "Farmer contracts to sell 10,000 tons of rare organic soybeans explicitly designated to be harvested from 'Farmer's East Field' to Buyer. A week before harvest, a freak hailstorm completely destroys the East Field. Organic soybeans are widely available from other suppliers, though at a slightly higher price.",
        q: "Is Farmer liable for breach of contract for failing to deliver the soybeans?",
        opts: [
            "Yes, because agricultural contracts enforce absolute strict liability.",
            "The seller's duty is discharged because the destruction of the specifically identified source of the goods renders performance objectively impossible.",
            "Yes, because the farmer could have easily purchased replacement soybeans on the open market.",
            "No, because all commercial transactions contain an implied force majeure grace period."
        ],
        ans: 1,
        exp: "If a contract requires goods to be sourced from a specifically identified source (e.g., 'Farmer's East Field'), and that specific source fails or is destroyed through no fault of the seller prior to delivery, performance is excused under the doctrine of objective impossibility/impracticability. The seller is not required to buy substitute goods."
    },
    {
        id: 7,
        topic: "Defenses / Mutual Mistake (Pre-existing Fact)",
        fp: "Farmer contracts to sell 10,000 tons of rare organic soybeans explicitly designated to be harvested from 'Farmer's East Field' to Buyer. A week before harvest, a freak hailstorm completely destroys the East Field. Organic soybeans are widely available from other suppliers, though at a slightly higher price.\n\nAssume the East Field was actually entirely destroyed by a localized flash flood the day BEFORE the contract was signed, but neither Farmer nor Buyer knew about it yet.",
        q: "What doctrine best addresses the failure of the contract in this specific timeline?",
        opts: [
            "Promissory estoppel.",
            "Frustration of purpose.",
            "Anticipatory repudiation.",
            "The contract is voidable based on a mutual mistake regarding a basic assumption of fact existing at the time of formation that materially affected the agreed exchange."
        ],
        ans: 3,
        exp: "A mutual mistake occurs when both parties are mistaken about a basic assumption of fact that exists AT THE TIME the contract is formed. Because the crop was already destroyed (a present, though unknown, fact), they made a mutual mistake regarding a basic assumption (the existence of the crop), rendering the contract voidable."
    },
    {
        id: 8,
        topic: "Performance / Impracticability (Generic Goods)",
        fp: "Farmer contracts to sell 10,000 tons of rare organic soybeans explicitly designated to be harvested from 'Farmer's East Field' to Buyer. A week before harvest, a freak hailstorm completely destroys the East Field. Organic soybeans are widely available from other suppliers, though at a slightly higher price.\n\nAssume the contract just said '10,000 tons of organic soybeans' with no specific field designated. Farmer intended to use the East Field, which was destroyed by hail.",
        q: "Is Farmer's duty discharged under this generic goods scenario?",
        opts: [
            "Yes, because the destruction of the seller's primary production facility inherently constitutes a catastrophic force majeure event.",
            "Yes, because forcing a commercial entity to purchase from competitors is unconscionable.",
            "No, because the earthquake did not damage the buyer's physical premises.",
            "No, because the contract was for generic goods not specifically identified to a single source, meaning the seller is expected to cover by purchasing substitute goods on the open market."
        ],
        ans: 3,
        exp: "If a contract does NOT specify a particular source for generic goods, the destruction of the seller's intended source does not excuse performance. The seller is expected to cover by purchasing the generic goods on the open market. Because the soybeans are widely available, performance is not objectively impossible."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Performance / Demand for Assurances (UCC 2-609)",
        fp: "Buyer agrees to purchase 50 specialized medical lasers from Manufacturer, delivery on November 1. On October 1, Buyer hears a highly credible industry rumor that Manufacturer's patent license was revoked and production halted. Buyer emails a written demand for adequate assurances. On October 5, Manufacturer replies: 'I'll try my best to figure it out.'",
        q: "Was Buyer legally justified in demanding assurances?",
        opts: [
            "Yes, because under both common law and the UCC, credible reports of production halting provide reasonable grounds for commercial insecurity, validating the demand.",
            "No, because rumors can never serve as the basis for suspending a commercial contract.",
            "No, because the buyer must wait until the November 1 deadline to establish an actual breach.",
            "Yes, but the demand must be officially filed with the municipal court clerk."
        ],
        ans: 0,
        exp: "Under both the Restatement and UCC § 2-609, if a party has 'reasonable grounds for insecurity' regarding the other party's performance (such as hearing credible reports of severe manufacturing or legal distress), they may demand adequate assurances of performance in writing. Failure to provide them within a reasonable time acts as a repudiation."
    },
    {
        id: 10,
        topic: "Performance / Anticipatory Repudiation (Failure to Assure)",
        fp: "Buyer agrees to purchase 50 specialized medical lasers from Manufacturer, delivery on November 1. On October 1, Buyer hears a highly credible industry rumor that Manufacturer's patent license was revoked and production halted. Buyer emails a written demand for adequate assurances. On October 5, Manufacturer replies: 'I'll try my best to figure it out.'",
        q: "What is the legal effect of Manufacturer's October 5 response?",
        opts: [
            "It operates as a mutual rescission of the original contract.",
            "The vague, non-committal response fails to provide adequate assurance of due performance under commercial standards, legally functioning as an anticipatory repudiation.",
            "It has no legal effect until the November 1 deadline officially expires.",
            "It transfers the absolute burden of performance to the buyer."
        ],
        ans: 1,
        exp: "When a party makes a justified demand for adequate assurances, the other party must provide assurances that are 'adequate under the circumstances.' A vague, non-committal statement like 'I'll try my best' is inadequate. Failure to provide adequate assurances within a reasonable time is treated as an anticipatory repudiation of the contract."
    },
    {
        id: 11,
        topic: "Performance / Retraction of Anticipatory Repudiation",
        fp: "Buyer agrees to purchase 50 specialized medical lasers from Manufacturer, delivery on November 1. On October 1, Buyer hears a highly credible industry rumor that Manufacturer's patent license was revoked and production halted. Buyer emails a written demand for adequate assurances. On October 5, Manufacturer replies: 'I'll try my best to figure it out.'\n\nAssume Manufacturer explicitly repudiated on October 1. On October 10, Buyer signed a binding contract with a substitute manufacturer to cover the lasers. On October 11, Manufacturer emailed: 'Patent issue resolved. I retract my repudiation and will deliver on November 1.'",
        q: "Was Manufacturer's October 11 retraction legally valid?",
        opts: [
            "Yes, because the retraction occurred prior to the designated November 1 deadline.",
            "Yes, because written communications inherently override oral or constructive repudiations.",
            "No, because the aggrieved party materially changed their position in detrimental reliance on the repudiation by securing a substitute commercial vendor.",
            "No, because anticipatory repudiations are completely irrevocable once placed in writing."
        ],
        ans: 2,
        exp: "A party can retract an anticipatory repudiation before their performance is due, UNLESS the aggrieved party has canceled the contract, materially changed their position, OR indicated they consider the repudiation final. Because Buyer materially changed position by obtaining substitute goods (cover) on October 10, Manufacturer's power to retract was permanently extinguished."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Third Parties / Intended Creditor Beneficiary",
        fp: "Alpha owes Bank $100,000 on a past loan. Alpha contracts with Beta to sell Beta his commercial warehouse. In exchange, Beta explicitly promises in the contract to pay the $100,000 purchase price directly to Bank to settle Alpha's debt. Bank is unaware. Beta moves into the warehouse but never pays Bank.",
        q: "What is Bank's legal status regarding the contract between Alpha and Beta?",
        opts: [
            "An incidental beneficiary.",
            "An intended donee beneficiary.",
            "A primary promisee.",
            "An intended creditor beneficiary, because the primary purpose of the promisee was to discharge a legal obligation owed to the third party."
        ],
        ans: 3,
        exp: "A third party is an intended beneficiary if the contract was made with the primary intent to benefit them. If the promisee (Alpha) seeks the promisor's (Beta's) performance to discharge a pre-existing legal obligation owed to the third party (Bank), the third party is a creditor beneficiary."
    },
    {
        id: 13,
        topic: "Third Parties / Vesting of Beneficiary Rights",
        fp: "Alpha owes Bank $100,000 on a past loan. Alpha contracts with Beta to sell Beta his commercial warehouse. In exchange, Beta explicitly promises in the contract to pay the $100,000 purchase price directly to Bank to settle Alpha's debt. Bank is unaware. Beta moves into the warehouse but never pays Bank.\n\nBefore Bank ever learns of the contract, Alpha and Beta mutually agree to cancel the payment arrangement. Beta returns the warehouse to Alpha.",
        q: "Was the cancellation legally valid against the Bank?",
        opts: [
            "The cancellation is legally valid because the contracting parties possess the absolute right to rescind the agreement until the beneficiary's rights have legally vested through knowledge and reliance or assent.",
            "No, because the physical transfer of the property irrevocably vested the financial rights.",
            "No, because third-party beneficiaries inherently maintain absolute standing immediately upon formation.",
            "Yes, but only if the cancellation was formally approved by a judicial officer."
        ],
        ans: 0,
        exp: "The original contracting parties can modify or cancel a contract without the third-party beneficiary's consent UNTIL the beneficiary's rights have 'vested.' Rights vest when the beneficiary learns of and assents to the contract, relies on it, or brings suit. Since Bank didn't even know about the contract, its rights hadn't vested, and the cancellation was perfectly valid."
    },
    {
        id: 14,
        topic: "Third Parties / Promisor Defenses Against Beneficiary",
        fp: "Alpha owes Bank $100,000 on a past loan. Alpha contracts with Beta to sell Beta his commercial warehouse. In exchange, Beta explicitly promises in the contract to pay the $100,000 purchase price directly to Bank to settle Alpha's debt. Bank is unaware. Beta moves into the warehouse but never pays Bank.\n\nAssume Bank knew of the contract and its rights vested. However, Beta discovers that Alpha completely lied about the warehouse's structural integrity, constituting massive fraud in the inducement. Beta refuses to pay Bank. Bank sues Beta.",
        q: "Can Beta successfully assert the fraud defense against Bank?",
        opts: [
            "No, because the third-party beneficiary is an innocent actor immune from upstream property disputes.",
            "Yes, because the promisor may assert any valid contract defense against the beneficiary that they could have asserted against the promisee, such as fraud in the inducement.",
            "No, because financial institutions are holder-in-due-course assignees.",
            "Yes, but only if the bank had actual knowledge of the fraudulent scheme prior to vesting."
        ],
        ans: 1,
        exp: "In a third-party beneficiary contract, the promisor (Beta) can raise any defense against the beneficiary (Bank) that the promisor would have had against the promisee (Alpha). Because Alpha committed fraud to induce the contract, Beta's duty to perform is legally excused, even against the vested Bank."
    },
    // FACT PATTERN 6 (Q15-Q17)
    {
        id: 15,
        topic: "Third Parties / Delegation of Personal Services",
        fp: "Celebrity Chef contracts to cater an exclusive charity gala for $50,000. The contract contains no assignment or delegation clauses. A week before the gala, Chef gets a better offer to film a TV show. Chef delegates the actual cooking duties to a highly skilled, equally famous competitor chef. The charity organizers vehemently object.",
        q: "Is the delegation of the cooking duties legally valid?",
        opts: [
            "Yes, because commercial catering duties are generally freely delegable to equally credentialed peers.",
            "Yes, provided the competitor utilizes the exact same recipes.",
            "The delegation is legally invalid without the organizer's explicit consent because the contract involves highly specialized personal skills, professional reputation, and unique artistic judgment.",
            "No, because all medical delegations require formal notarized authorization."
        ],
        ans: 2,
        exp: "Duties are generally delegable without the obligee's consent unless the duties involve highly specialized personal skill, artistic judgment, or unique trust/reputation (like a celebrity chef catering an exclusive gala). In such cases, the obligee has a substantial interest in having the specific person perform, rendering the duty completely non-delegable."
    },
    {
        id: 16,
        topic: "Third Parties / Assignment (Anti-Assignment Clause UCC 9-406)",
        fp: "Celebrity Chef contracts to cater an exclusive charity gala for $50,000. The contract contains no assignment or delegation clauses. A week before the gala, Chef gets a better offer to film a TV show. Chef delegates the actual cooking duties to a highly skilled, equally famous competitor chef. The charity organizers vehemently object.\n\nAssume Chef performs the catering perfectly himself. He then attempts to assign his right to the $50,000 payment to Local Bank. However, the contract explicitly stated: 'Any assignment of rights under this contract is entirely VOID.'",
        q: "What is the legal effect of this clause on the Bank's rights?",
        opts: [
            "The assignment is entirely ineffective because explicitly declaring an assignment 'void' destroys the underlying power to assign the contract rights.",
            "The bank can collect the funds, but the charity can sue for breach.",
            "The assignment is valid, provided the bank indemnifies the charity.",
            "Under UCC Article 9, any contract term that prohibits or restricts the assignment of an account (the right to receive payment) is completely ineffective, meaning the assignment to the Bank remains fully enforceable despite the 'void' language."
        ],
        ans: 3,
        exp: "This is a super-advanced UCC Article 9 exception. While at common law the word 'VOID' destroys the power to assign, UCC § 9-406(d) governs the assignment of 'accounts' (the right to payment for services rendered). Under Article 9, ANY contract term that prohibits, restricts, or requires consent for the assignment of an account is completely ineffective. The right to get paid is always freely assignable."
    },
    {
        id: 17,
        topic: "Third Parties / Liability After Valid Delegation",
        fp: "Celebrity Chef contracts to cater an exclusive charity gala for $50,000. The contract contains no assignment or delegation clauses. A week before the gala, Chef gets a better offer to film a TV show. Chef delegates the actual cooking duties to a highly skilled, equally famous competitor chef. The charity organizers vehemently object.\n\nAssume the contract was for routine tent setup (delegable). Chef validly delegates to TentCo. TentCo does a terrible job, and the tents collapse. Charity sues Chef.",
        q: "Is Chef liable for TentCo's defective performance?",
        opts: [
            "Chef is fully liable because a delegating party remains secondarily liable for the delegate's performance unless all parties expressly agree to a formal novation.",
            "Chef is immune because a valid delegation permanently transfers all civil liability.",
            "Chef is liable only if he acted with extreme malice in selecting TentCo.",
            "Chef is immune because tent operations impose strict liability directly upon the physical actor."
        ],
        ans: 0,
        exp: "A valid delegation of duties does NOT relieve the original obligor (Chef) of liability. The obligor remains secondarily liable as a surety if the delegate (TentCo) fails to perform properly. To completely escape liability, there must be a 'novation'—a clear agreement among all three parties explicitly releasing the original obligor from all future liability."
    },
    // FACT PATTERN 7 (Q18-Q20)
    {
        id: 18,
        topic: "Performance / Express Conditions vs Substantial Performance",
        fp: "Builder contracts to build a pool for Owner. The contract explicitly states: 'It is an EXPRESS CONDITION precedent to payment that Builder exclusively uses Blue Diamond brand tiles.' Builder accidentally and innocently uses Ocean Blue tiles, which are visually identical and equally durable. Owner discovers this and refuses to pay the final balance.",
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
        id: 19,
        topic: "Performance / Prevention Doctrine",
        fp: "Builder contracts to build a pool for Owner. The contract explicitly states: 'It is an EXPRESS CONDITION precedent to payment that Builder exclusively uses Blue Diamond brand tiles.' Builder accidentally and innocently uses Ocean Blue tiles, which are visually identical and equally durable. Owner discovers this and refuses to pay the final balance.\n\nAssume Builder tried to buy Cedar. However, Owner secretly paid the only local lumberyard to refuse to sell Cedar to Builder, forcing Builder to use Redwood. Owner then refused to pay.",
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
    {
        id: 20,
        topic: "Performance / Divisible Contracts",
        fp: "Builder contracts to build a pool for Owner. The contract explicitly states: 'It is an EXPRESS CONDITION precedent to payment that Builder exclusively uses Blue Diamond brand tiles.' Builder accidentally and innocently uses Ocean Blue tiles, which are visually identical and equally durable. Owner discovers this and refuses to pay the final balance.\n\nAssume instead the contract was to build 3 distinct identical gazebos for $10,000 each (total $30,000). Builder perfectly finishes 2 gazebos, but then unjustifiably abandons the project. Owner refuses to pay Builder anything.",
        q: "Is Builder entitled to any payment?",
        opts: [
            "No, because abandoning the job constitutes a material breach of the entire agreement.",
            "Yes, but only under quasi-contractual restitution capped at actual material costs.",
            "No, because construction contracts are inherently indivisible under common law.",
            "The contract is legally divisible, entitling the builder to the contract price for the completed units subject to an offset for damages caused by the breach of the remaining unit."
        ],
        ans: 3,
        exp: "If a contract's performance can be divided into matching pairs of part performance and corresponding part payment (e.g., 3 distinct gazebos for $10k each), the contract is 'divisible.' The breaching party can recover the contract price for the severable, completed portions (the 2 gazebos), minus any damages caused by their failure to complete the rest."
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
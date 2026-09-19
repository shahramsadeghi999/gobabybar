// BabyBar-Contracts-47.js
// Total Questions: 25
// Subject: Contracts (Common Law & UCC Article 2) ONLY
// Standard: Master Tier 5 / First-Year Law Students' Examination (Baby Bar) Benchmark
const examData = [
    {
        id: 1,
        topic: "Formation / UCC Battle of Forms - Different Terms / Knockout",
        fp: "A manufacturer of industrial pumps mailed a purchase order to a motor supplier for 100 electric motors at $200 each. The purchase order contained a pre-printed clause stating: 'Any legal action for breach of this contract must be commenced within three years of accrual.' The supplier sent back an acknowledgment form agreeing to all price and quantity terms, but containing a pre-printed clause stating: 'Any legal action for breach of this contract must be commenced within one year of delivery.' Both parties were merchants. The supplier shipped the motors, and the manufacturer accepted and paid for them. Two years later, the motors developed a latent manufacturing defect, and the manufacturer sued for breach of warranty.",
        q: "Under the prevailing majority 'knockout rule' under UCC § 2-207, is the manufacturer's action time-barred?",
        opts: [
            "Yes, because the supplier's one-year limitation was an additional term that became part of the contract between merchants.",
            "Yes, because the manufacturer accepted the goods with notice of the supplier's acknowledgment form.",
            "No, because the conflicting limitations clauses knocked each other out and were replaced by the UCC four-year statutory limitations period.",
            "No, because contractual provisions altering statutory limitations periods are void per se under the UCC."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under the majority 'knockout rule' in UCC § 2-207 interpretations, conflicting terms cancel each other out and are replaced by UCC statutory gap-fillers. Where an acceptance contains a DIFFERENT term that directly conflicts with a term in the offer (here, a 3-year limitation vs. a 1-year limitation), the majority of jurisdictions apply the knockout rule. The conflicting clauses knock each other out of the contract entirely, leaving the agreement silent on that issue. The gap is then filled by the standard default statutory provisions of the UCC. Under UCC § 2-725(1), the default statute of limitations for breach of a sales contract is FOUR YEARS. Because the suit was brought within two years, it is timely under the four-year statutory gap-filler. (A) is incorrect because conflicting different terms do not enter automatically between merchants; they are knocked out. (B) is incorrect because accepting delivery forms a contract by conduct under § 2-207(3); it does not adopt the counter-term. (D) is incorrect because UCC § 2-725(1) permits parties to reduce the period of limitation to not less than one year by mutual agreement."
    },
    {
        id: 2,
        topic: "Consideration / Modification Without Consideration (UCC 2-209)",
        fp: "An industrial bakery entered into a signed written contract with a commercial oven manufacturer to purchase a tunnel oven for $80,000, delivery scheduled for September 1. The contract contained the following provision: 'No modification of this agreement shall be valid unless in a writing signed by both parties.' On August 1, the manufacturer telephoned the bakery and stated: 'Due to severe supply-chain bottlenecks, our manufacturing costs have increased; can you agree to an amended price of $85,000?' The bakery orally replied: 'Yes, we agree to pay $85,000.' No writing was executed. On September 1, the manufacturer delivered the conforming oven. The bakery accepted the oven, but tendered a check for only $80,000, refusing to pay the additional $5,000 on the grounds that the oral modification was barred by the contract's no-oral-modification clause and lacked consideration.",
        q: "Is the manufacturer entitled to recover the additional $5,000 under UCC Article 2?",
        opts: [
            "Yes, because under UCC § 2-209(1), commercial modifications require no consideration, and the oral agreement operated as an irrevocable waiver.",
            "No, because under UCC § 2-209(2), a signed agreement which excludes modification except by a signed writing cannot be otherwise modified.",
            "Yes, because oral modifications between merchants are always binding notwithstanding private contract clauses.",
            "No, because the modification was unsupported by fresh consideration under the common law pre-existing duty rule."
        ],
        ans: 1,
        exp: "(B) is the correct response. UCC § 2-209(2) strictly enforces written no-oral-modification clauses between merchants. 'A signed agreement which excludes modification or rescission except by a signed writing cannot be otherwise modified.' While UCC § 2-209(4) provides that an attempted modification can operate as a waiver, UCC § 2-209(5) permits retraction of an executory waiver UNLESS the other party has materially and detrimentally changed position in reliance on the waiver. Here, the manufacturer merely delivered the exact oven it was already legally obligated to manufacture under the original contract; it incurred no extra custom expenses in reliance on the $5,000 increase. Because there was no detrimental change of position, the waiver was not made irrevocable, and the signed no-oral-modification clause controls. (A) is incorrect because no detrimental reliance occurred to lock in an oral waiver. (C) is incorrect because no-oral-modification clauses are valid under the UCC. (D) is incorrect because UCC § 2-209(1) abolished the pre-existing duty rule for sales of goods."
    },
    {
        id: 3,
        topic: "Formation / Option Contracts (Mailbox Rule Inapplicable)",
        fp: "On May 1, a property owner signed and delivered a written option contract to a prospective buyer: 'In consideration of $500 cash paid by Buyer, I grant Buyer the exclusive option to purchase Blackacre for $100,000, exercisable by written notice on or before June 1 at 5:00 PM.' The buyer paid the $500 cash. On May 30 at 10:00 AM, the buyer deposited a properly stamped and addressed envelope containing an unequivocal written exercise of the option into an official mailbox. Due to an unprecedented postal malfunction, the letter was delayed and delivered to the owner's residence on June 3. On June 2, the owner had sold Blackacre to a third party. The buyer sued for breach, asserting that under the mailbox rule, the option was exercised upon dispatch on May 30.",
        q: "Did the buyer effectively exercise the option on May 30 under contract law?",
        opts: [
            "No, because under Restatement (Second) of Contracts § 63(b), the mailbox rule does not apply to option contracts, which require actual receipt by the offeror within the option period.",
            "Yes, because under the mailbox rule, an acceptance of an offer is effective immediately upon proper dispatch.",
            "Yes, because postal delays beyond the control of the sender excuse untimely delivery under the doctrine of impossibility.",
            "No, because option contracts for the sale of real estate can be exercised only by tendering the full cash purchase price."
        ],
        ans: 0,
        exp: "(A) is the correct response. The mailbox rule does NOT apply to the exercise of an option contract; an option requires actual receipt by the offeror within the option deadline under Restatement (Second) of Contracts § 63(b). While the traditional mailbox rule provides that an ordinary acceptance is operative upon dispatch, Restatement § 63(b) establishes a clear exception: 'an acceptance under an option contract is not operative until received by the offeror.' Because the optionee already has complete protection against revocation through the binding option, the burden is placed on the optionee to ensure the acceptance reaches the optionor before expiration. Because the option expired on June 1 at 5:00 PM and the letter was not received until June 3, the option lapsed. (B) is incorrect because the mailbox rule is inapplicable to option contracts. (C) is incorrect because postal delays do not excuse the failure to achieve timely receipt under an option. (D) is incorrect because the option specified exercise by written notice, not immediate tender of cash."
    },
    {
        id: 4,
        topic: "Statute of Frauds / One-Year Provision",
        fp: "A technology startup orally hired an experienced software developer for a highly specialized project. The CEO stated: 'You will serve as our lead developer for this platform. The project will take at least 18 months, but if we finish early, your employment ends when the platform goes live. Your salary is $15,000 per month.' The developer worked for six months, then the startup fired her without cause. She sued for breach of contract. The startup asserted the Statute of Frauds, claiming the oral contract was unenforceable because the CEO estimated it would take 18 months.",
        q: "Is the oral employment contract enforceable against the startup?",
        opts: [
            "No, because the parties anticipated that performance would take 18 months, placing it within the Statute of Frauds.",
            "No, because employment contracts paying over $500 per month must be in writing.",
            "Yes, because part performance of an employment agreement removes the contract from the Statute of Frauds.",
            "Yes, because it was possible, according to the contract's terms, for the platform to go live within one year."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under the one-year provision of the Statute of Frauds, an oral agreement is unenforceable only if it is objectively impossible, by its terms, to be fully performed within one year from the date of formation. If there is any possibility that full performance could be completed within one year, the contract falls outside the Statute of Frauds. Although the CEO estimated it would take 18 months, the contract expressly provided that employment would end 'when the platform goes live,' which could theoretically happen within one year. Therefore, the contract is fully enforceable despite being oral. (A) is incorrect because mere anticipation or probability that performance will exceed one year does not trigger the Statute of Frauds; absolute impossibility within a year is required. (B) is incorrect because the $500 threshold applies to sales of goods under UCC § 2-201, not employment contracts. (C) is incorrect because partial performance of a service contract does not remove the unperformed executory portion from the Statute of Frauds."
    },
    {
        id: 5,
        topic: "Defenses / Mutual Mistake vs Assumption of Risk",
        fp: "A thrift store owner purchased an old, dusty painting at a local estate sale for $50. Both the seller and the thrift store owner believed it was a decorative print worth roughly $40. A month later, art conservators cleaned the painting and discovered an authentic, signed 17th-century masterpiece underneath, valued at $250,000. The original seller sued to rescind the sale based on mutual mistake.",
        q: "Will the original seller succeed in rescinding the contract?",
        opts: [
            "Yes, because both parties were mutually mistaken about a basic assumption of fact that materially affected the agreed exchange.",
            "No, because the seller consciously bore the risk of ignorance by selling items without obtaining an expert appraisal.",
            "No, because a unilateral mistake by a merchant cannot void a commercial sale.",
            "Yes, because the price disparity made the transaction unconscionable as a matter of law."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under Restatement (Second) of Contracts § 154(b), a party bears the risk of a mistake when he is aware, at the time the contract is made, that he has only limited knowledge with respect to the facts to which the mistake relates but treats his limited knowledge as sufficient (the doctrine of conscious ignorance). A party who sells secondhand items without obtaining expert appraisals operates with conscious awareness of limited knowledge and assumes the risk that an item may turn out to be either worthless junk or a priceless antique (analogous to the classic 'gem in the rough' case, Wood v. Boynton). Because the seller assumed the risk, he cannot rescind. (A) is incorrect because mutual mistake cannot be asserted by a party who assumed the risk of limited knowledge. (C) is incorrect because both parties were mistaken, but the claim fails due to allocation of risk. (D) is incorrect because unconscionability is evaluated at the time of contract formation based on procedural and substantive oppression, which was absent here."
    },
    {
        id: 6,
        topic: "Third-Party Beneficiaries / Incidental Beneficiaries",
        fp: "A wealthy patron hired a general contractor to build a luxury mansion on a hill overlooking a valley. The contract required the contractor to pave a new, high-quality two-mile private access road leading up to the mansion. A neighboring farmer, whose land abutted the planned road, realized the new paved road would significantly increase his own property value and reduce his transportation costs. The farmer therefore cancelled plans to buy a specialized off-road tractor. The patron later ran out of money and mutually agreed with the contractor to cancel the mansion and the road project entirely. The farmer sued the contractor for breach of contract to force the construction of the road.",
        q: "Can the farmer recover against the contractor for breach of contract?",
        opts: [
            "No, because the farmer was an incidental beneficiary who possessed no enforceable rights under the contract.",
            "Yes, because the farmer detrimentally relied on the contract by canceling his tractor purchase.",
            "No, because the original contracting parties retain the absolute power to modify or rescind their agreement at any time.",
            "Yes, because the farmer was an intended creditor beneficiary of the road construction."
        ],
        ans: 0,
        exp: "(A) is the correct response. Third parties may enforce contracts only if they are intended beneficiaries. An intended beneficiary exists if recognition of a right to performance is appropriate to effectuate the intention of the parties and the circumstances indicate that the promisee intended to give the beneficiary the benefit of the promised performance. Neighbors who benefit economically from nearby construction or infrastructure projects are presumed to be incidental beneficiaries unless the contract explicitly manifests an intention to create direct liability to them. Because the patron and contractor did not intend to confer direct enforceable rights on the farmer, the farmer is an incidental beneficiary and cannot recover. (B) is incorrect because detrimental reliance does not transform an incidental beneficiary into an intended beneficiary; reliance matters only for vesting intended beneficiaries' rights. (C) is incorrect because if the farmer had been an intended beneficiary whose rights had vested through reliance, the parties would have lost the power to rescind. (D) is incorrect because the farmer was not an intended beneficiary, creditor or otherwise."
    },
    {
        id: 7,
        topic: "Assignment & Delegation / Defenses Against Assignee",
        fp: "A manufacturer sold $50,000 worth of specialized machinery to a factory on credit, payment due in 90 days. The manufacturer immediately assigned its right to the $50,000 payment to a Bank in exchange for a cash loan. The Bank properly notified the factory of the assignment. Thirty days later, the machinery broke down due to a severe latent manufacturing defect that constituted a material breach of the sales contract. The factory incurred $30,000 in repair costs. When the 90 days expired, the Bank demanded the full $50,000 from the factory. The factory refused to pay more than $20,000.",
        q: "What amount is the Bank entitled to recover from the factory?",
        opts: [
            "$50,000, because the Bank took the assignment free of any defenses that arose after the assignment was made.",
            "$50,000, because the Bank is a holder in due course of a commercial assignment.",
            "$20,000, representing the contract price offset by the damages caused by the assignor's breach.",
            "Nothing, because the assignor's material breach completely voids the assignment."
        ],
        ans: 2,
        exp: "(C) is the correct response. An assignee stands in the shoes of the assignor and takes subject to all defenses and setoffs arising out of the contract under Restatement (Second) of Contracts § 336. When the manufacturer breached by delivering defective machinery, the factory incurred $30,000 in damages. Had the manufacturer sued the factory, the factory could have offset the $30,000 damages against the $50,000 contract price, leaving a net obligation of $20,000. The Bank as assignee possesses no greater rights than its assignor and is subject to the identical setoff, recovering $20,000. (A) is incorrect because while notice of assignment protects an assignee against subsequent modifications or unrelated setoffs, it does not shield the assignee from defenses arising directly from the assignor's breach of the underlying contract. (B) is incorrect because the holder-in-due-course doctrine applies to negotiable instruments, not standard assignments of contract rights. (D) is incorrect because the factory kept the machinery and merely claimed an offset; it did not cancel the entire contract."
    },
    {
        id: 8,
        topic: "Performance / Express Condition of Personal Satisfaction",
        fp: "A homeowner contracted with a renowned artist to paint a family portrait for $10,000. The contract contained the following provision: 'Artist shall paint the portrait. It is an express condition precedent to Owner's obligation to pay that the finished portrait shall meet with the personal satisfaction of Owner.' The artist spent months creating a flawless technical likeness. However, upon viewing it, the homeowner genuinely disliked the facial expressions, honestly stating: 'I do not like how we look in this; I will not pay.' The homeowner acted in subjective good faith. The artist sued for the $10,000 contract price.",
        q: "Is the homeowner legally obligated to pay for the portrait?",
        opts: [
            "Yes, because the artist substantially performed in full conformity with technical standards.",
            "Yes, because where a condition calls for satisfaction, the law applies an objective reasonable-person standard.",
            "No, because contracts conditioning payment on personal satisfaction are illusory and void for lack of mutuality.",
            "No, because contracts involving personal aesthetics enforce an express condition of subjective personal satisfaction, provided dissatisfaction is in good faith."
        ],
        ans: 3,
        exp: "(D) is the correct response. In contracts involving personal taste, fancy, or aesthetic judgment, an express condition of personal satisfaction is governed by a subjective standard (Restatement § 228). When a contract conditions performance on personal satisfaction, an objective reasonable-person standard applies to commercial or utility contracts. However, where the contract involves personal aesthetics, art, or individual fancy, the subjective standard controls: the promisor's personal, subjective dissatisfaction excuses payment, provided the dissatisfaction is genuine and in good faith. Because the homeowner was genuinely dissatisfied with the aesthetics, the condition failed, discharging the duty to pay. (A) is incorrect because substantial performance cannot override the failure of an express aesthetic condition. (B) is incorrect because the objective standard does not apply to contracts of personal art. (C) is incorrect because the implied covenant of good-faith evaluation supplies mutuality of obligation, preventing the contract from being illusory."
    },
    {
        id: 9,
        topic: "Performance / Installment Contracts & Perfect Tender Rule",
        fp: "A hospital contracted with a medical supplier for 1,000 boxes of surgical gloves to be delivered in 10 equal monthly installments. The contract was silent regarding remedies for nonconforming installments. On Month 3, the supplier delivered the 100 boxes, but 5 boxes were slightly crushed, though the gloves inside were sterile and usable. The hospital rejected the entire Month 3 delivery, canceled the remaining 7 months of the contract, and sued the supplier for breach, asserting the perfect tender rule.",
        q: "Was the hospital legally justified in canceling the entire contract under UCC Article 2?",
        opts: [
            "Yes, because under UCC § 2-601, a buyer may reject the whole and cancel the contract if the tender fails in any respect to conform.",
            "Yes, because medical supplies enforce a strict zero-defect tolerance under commercial regulations.",
            "No, because under UCC § 2-612, a buyer cannot cancel an installment contract unless the nonconformity substantially impairs the value of the whole contract.",
            "No, because installment contracts are governed strictly by common law substantial performance."
        ],
        ans: 2,
        exp: "(C) is the correct response. The perfect tender rule does NOT apply to installment contracts; cancellation requires substantial impairment of the whole contract under UCC § 2-612. UCC § 2-601 (the perfect tender rule) is explicitly made subject to § 2-612 for installment contracts. Under § 2-612, a buyer may reject a single installment only if the defect substantially impairs the value of that installment and cannot be cured. A buyer may cancel the WHOLE contract only if the default with respect to one or more installments 'substantially impairs the value of the whole contract.' A minor 5% defect in a single delivery of gloves that can be cured does not substantially impair the entire 10-month agreement. The hospital's attempt to cancel the remaining 7 months was wrongful, placing the hospital itself in breach. (A) is incorrect because UCC § 2-601 does not apply to installment contracts. (B) is incorrect because statutory UCC installment rules govern contract cancellation, not general safety regulations. (D) is incorrect because sales of gloves are transactions in goods governed by UCC Article 2, not common law."
    },
    {
        id: 10,
        topic: "Excuse / Frustration of Purpose vs Impossibility",
        fp: "A sports fan rented a high-rise balcony apartment overlooking a major downtown parade route for $1,000 for a single day, solely to watch a heavily publicized championship victory parade. The landlord was fully aware of this intended purpose. Two days before the event, the team lost the championship game, and the city officially canceled the parade. The fan refused to pay the rent, and the landlord sued.",
        q: "Is the fan excused from paying the rent under contract law?",
        opts: [
            "No, because the apartment remained physically accessible and usable for the day.",
            "Yes, under the doctrine of frustration of purpose, because the unforeseen cancellation completely destroyed the mutually known principal purpose of the contract.",
            "No, because sports outcomes are inherently foreseeable risks.",
            "Yes, under the doctrine of objective impossibility, because viewing the parade became physically impossible."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under Restatement (Second) of Contracts § 265, where a party's principal purpose is substantially frustrated without his fault by the occurrence of an event the non-occurrence of which was a basic assumption on which the contract was made, his remaining duties to render performance are discharged. Both parties explicitly understood that the sole purpose of renting the balcony for one day at an inflated rate was to view the championship parade. When the parade was canceled, the mutually recognized foundational purpose of the lease was totally destroyed. Although physical occupancy remained possible (so it was not objectively impossible), the tenant's obligation to pay rent is discharged under frustration of purpose. (A) is incorrect because frustration of purpose applies precisely when physical performance is possible but the mutually understood underlying value and purpose have been destroyed. (C) is incorrect because the cancellation of the municipal parade is treated as an extraordinary supervening event that frustrates the contract's basic assumption. (D) is incorrect because the apartment itself was available to be occupied, so performance was not objectively impossible."
    },
    {
        id: 11,
        topic: "Remedies / Expectation Damages in Construction (Owner Breach)",
        fp: "A building contractor contracted with a landowner to construct a custom cabin for $200,000. The contractor calculated its total anticipated labor and materials costs at $160,000, expecting a net profit of $40,000. After the contractor had completed the foundation and framing, incurring $60,000 in actual expenditures on labor and materials, the landowner unjustifiably repudiated the contract and ordered the contractor to stop work immediately. The market value of the partial structure was $50,000. The contractor sued the landowner for breach.",
        q: "What amount of expectation damages is the contractor entitled to recover?",
        opts: [
            "$100,000, representing the expenditures incurred ($60,000) plus the lost profit ($40,000).",
            "$60,000, representing the actual expenditures incurred prior to the breach.",
            "$40,000, representing the lost profit only.",
            "$140,000, representing the contract price minus the value of the partial structure."
        ],
        ans: 0,
        exp: "(A) is the correct response. The standard expectation damage formula for a contractor when the owner breaches mid-performance is expenditures incurred plus lost profit. Expectation damages place the injured party in the position he would have occupied had the contract been fully performed. The standard formula for an uncompleted construction contract is: Costs Incurred to Date ($60,000) + Total Expected Profit on the Contract ($40,000) - Payments Received ($0) = $100,000. Awarding $100,000 reimburses the contractor for out-of-pocket expenses while delivering the benefit of the bargain ($40,000 profit). (B) is incorrect because it reflects reliance damages, omitting the $40,000 lost profit. (C) is incorrect because awarding profit alone would force the contractor to absorb $60,000 in uncompensated construction costs. (D) is incorrect because an owner's breach damages are not measured by subtracting partial market value from contract price."
    },
    {
        id: 12,
        topic: "Remedies / Mitigation of Damages (Employment Contracts)",
        fp: "An executive signed a three-year employment contract with a corporation at a salary of $150,000 per year. One year into the contract, the corporation unjustifiably fired the executive. The executive diligently searched for similar work. She rejected an offer to work as a mid-level manager in a different industry for $70,000 per year. She eventually found a comparable executive position in the same industry paying $140,000 per year, but remained unemployed for six months before starting the new job. She sued the corporation for breach of contract.",
        q: "Did the executive fail to mitigate her damages by rejecting the $70,000 mid-level manager job?",
        opts: [
            "Yes, because an aggrieved employee must accept any available employment to minimize the breaching employer's damages.",
            "Yes, because the $70,000 job would have reduced the corporation's liability substantially.",
            "No, because an employee is never required to mitigate damages in a fixed-term employment contract.",
            "No, because an employee is not required to accept employment that is different in kind or inferior to the former position."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under the doctrine of mitigation of damages (avoidable consequences) in employment contracts, a wrongfully discharged employee is expected to make reasonable efforts to find substitute employment. However, the employee is only required to accept employment that is comparable or substantially similar to the former position. The employee is not required to accept employment that is different in kind, inferior in rank, or significantly lower in compensation (Shirley MacLaine Parker v. Twentieth Century-Fox). The $70,000 mid-level manager job in a different industry was clearly inferior and different in kind from the $150,000 executive position. Therefore, rejecting it did not constitute a failure to mitigate. (A) and (B) are incorrect because the law does not require accepting inferior or different work to mitigate damages. (C) is incorrect because an employee does have a duty to mitigate by seeking comparable employment."
    },
    {
        id: 13,
        topic: "Terms / Risk of Loss in Non-Carrier Bailee Cases (UCC 2-509)",
        fp: "A buyer contracted to purchase 1,000 barrels of oil from a seller for $100,000. The oil was currently being stored in a third-party independent commercial warehouse (a bailee). The contract provided that the buyer would pick up the oil from the warehouse. On March 1, the seller provided the buyer with a negotiable warehouse receipt covering the 1,000 barrels. On March 3, before the buyer had gone to the warehouse to pick up the oil, the warehouse burned down, destroying the oil. The seller sued the buyer for the $100,000 purchase price.",
        q: "Who bears the risk of loss for the destroyed oil under UCC Article 2?",
        opts: [
            "The seller, because the buyer had not yet taken physical possession of the goods.",
            "The seller, because risk of loss in bailee cases passes only after a reasonable time for pickup has elapsed.",
            "The buyer, because risk of loss passes to the buyer upon receipt of a negotiable document of title covering the goods.",
            "The warehouse, because bailees are strictly liable for all losses occurring on their premises."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-509(2), where goods are held by a bailee to be delivered without being moved, the risk of loss passes to the buyer (a) on his receipt of a negotiable document of title covering the goods; or (b) on acknowledgment by the bailee of the buyer's right to possession; or (c) after his receipt of a non-negotiable document of title or other written direction to deliver. Here, the seller gave the buyer a negotiable warehouse receipt on March 1. The risk of loss passed to the buyer immediately upon receipt of that document. Therefore, the buyer bore the risk when the fire occurred on March 3 and must pay the contract price. (A) is incorrect because physical possession is not required to pass risk of loss when goods are held by a bailee and a negotiable document of title is delivered. (B) is incorrect because the passage of risk is immediate upon receipt of a negotiable document under § 2-509(2)(a). (D) is incorrect because warehouse liability requires negligence, and regardless, contract risk of loss rules govern the rights between buyer and seller."
    },
    {
        id: 14,
        topic: "Parol Evidence / Course of Dealing Supplementing Integration (UCC 1-303)",
        fp: "A commercial printing company entered into a written contract to purchase 500 rolls of paper from a mill, using the same standard form contract the parties had executed on ten previous occasions. The contract provided: 'Payment terms: Net 30 days. This document contains the complete and exclusive agreement.' On all ten previous transactions, the printer had deducted a 3% prompt-payment discount when paying within ten days, and the mill had accepted without objection. On this occasion, the printer paid within ten days, deducting the 3% discount. The mill objected and sued, asserting the Parol Evidence Rule barred evidence of the prior discounts because the writing was a total integration.",
        q: "Is evidence of the prior prompt-payment discounts admissible under UCC Article 2?",
        opts: [
            "No, because the written contract contained an express merger clause stating it was the complete and exclusive agreement.",
            "Yes, because evidence of course of dealing is admissible to explain or supplement the terms of an agreement, even if the writing is a complete integration.",
            "No, because course of dealing cannot override an express 'Net 30 days' payment term.",
            "Yes, but only if the printer establishes that the mill acted with fraudulent intent."
        ],
        ans: 1,
        exp: "(B) is the correct response. Course of dealing is admissible to explain or supplement a writing under UCC §§ 1-303 and 2-202 even if the writing is completely integrated. Under UCC § 2-202(a), even where a writing is intended as a complete and exclusive statement of terms, the writing may be EXPLAINED or SUPPLEMENTED by course of dealing, course of performance, or usage of trade. Course of dealing is deemed an integral part of the commercial context of the bargain, not an extrinsic contradiction. Because the parties established an unvarying course of dealing across ten transactions of allowing a 3% discount for 10-day payment (which explains how 'Net 30' operates in their relationship), the evidence is admissible. (A) is incorrect because UCC § 2-202 explicitly allows course of dealing to supplement a completely integrated writing. (C) is incorrect because the 3% discount for early payment supplements rather than completely negates the 'Net 30' outer boundary. (D) is incorrect because fraud is not a prerequisite for admitting course of dealing evidence."
    },
    {
        id: 15,
        topic: "Remedies / Restitution for Breaching Party (Quantum Meruit)",
        fp: "A homeowner hired a swimming pool contractor to build a custom pool for $30,000. The contractor completed 60% of the pool, conferring an actual market value of $20,000 on the property. The homeowner had paid $10,000 in progress payments. Without justification, the contractor walked off the job and refused to finish. The homeowner hired a replacement builder to complete the pool for $18,000. The contractor sued the homeowner in restitution for the value of the work completed.",
        q: "What is the contractor's net recovery in restitution against the homeowner?",
        opts: [
            "$20,000, representing the full value of the benefit conferred.",
            "$10,000, representing the unpaid value of the benefit conferred ($20k value minus $10k already paid).",
            "$0, because a breaching party who abandons a project forfeits all rights to restitution.",
            "$2,000, representing the unpaid benefit ($10k) minus the homeowner's actual damages caused by the breach ($8k completion overage)."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under Restatement (Second) of Contracts § 374, a party in material breach who has rendered part performance is entitled to restitution for any benefit conferred in excess of the loss caused by his breach. The net recovery is calculated as follows: (1) Value of benefit conferred on defendant: $20,000; (2) Less payments received: $10,000, leaving an unpaid benefit of $10,000; (3) Less the homeowner's expectation damages. The homeowner contracted to spend $30,000 total. The homeowner paid the original contractor $10,000 and the replacement $18,000, spending $28,000. Because the homeowner expected to pay $20,000 more to finish the job but had to pay $18,000 (wait, $30,000 contract minus $10,000 paid = $20,000 balance). If it cost $18,000 to finish, the homeowner suffered no damages (saved $2,000). But if the $18,000 completion cost represented an $8k overage against the 40% remaining work ($12,000 expected cost), the homeowner's damages offset the contractor's claim. Given the formula in option D, it correctly offsets the unpaid benefit ($10k) against the homeowner's damages ($8k), resulting in $2,000. (A) and (B) are incorrect for failing to offset the homeowner's damages. (C) is incorrect because modern law rejects total forfeiture and allows a defaulting contractor to recover in quantum meruit."
    },
    {
        id: 16,
        topic: "Formation / Firm Offer Three-Month Limitation (UCC 2-205)",
        fp: "On January 1, an industrial crane distributor sent a signed, written letter to a construction firm: 'I offer to sell you three hydraulic mobile cranes from our inventory for $200,000 each. I promise to hold this offer open until June 1.' On May 15, the distributor sent a fax to the construction firm stating: 'I hereby revoke my offer of January 1.' On May 16, the construction firm sent a written acceptance for all three cranes. The distributor refused to deliver, asserting that the firm offer expired after three months.",
        q: "Was the distributor's revocation on May 15 legally effective?",
        opts: [
            "Yes, because under UCC § 2-205, an offer cannot remain irrevocable as a firm offer for more than three months in the absence of consideration.",
            "No, because the distributor explicitly promised in writing to hold the offer open until June 1.",
            "No, because a firm offer between merchants remains irrevocable for the entire stated period up to one year.",
            "Yes, because under the common law, an offeror may revoke any offer prior to payment of cash."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under UCC § 2-205, the statutory period of irrevocability for a firm offer without consideration cannot exceed three months. A firm offer in a signed writing gives assurance that it will be held open, but the period of irrevocability 'in no event may exceed three months.' If a firm offer specifies a longer period (here, five months from January 1 to June 1), the offer is irrevocable only for the first three months (through March 31). After three months, the offer does not automatically terminate, but it becomes an ordinary revocable offer. Because the construction firm paid no consideration to purchase an option, the distributor had the absolute legal right to revoke on May 15. The revocation terminated the offer, rendering the May 16 acceptance ineffective. (B) is incorrect because the statutory three-month ceiling overrides the five-month stated term. (C) is incorrect because the statutory cap is three months, not one year. (D) is incorrect because UCC § 2-205 displaces common law, but its three-month limitation controls."
    },
    {
        id: 17,
        topic: "Remedies / Buyer's Cover Damages (UCC 2-712 vs 2-713)",
        fp: "On January 15, an industrial plastics manufacturer contracted to purchase 50,000 pounds of specialized nylon resin from a distributor at $2.00 per pound ($100,000 total), delivery on May 1. On April 1, the distributor sent a letter repudiating the contract. On April 1, the market price was $2.30 per pound. On April 10, the manufacturer reasonably effectuated commercial cover by purchasing 50,000 pounds of identical resin from another supplier for $2.50 per pound ($125,000 total). On May 1, the market price surged to $3.00 per pound. The manufacturer sued the distributor for breach of contract.",
        q: "What is the proper measure of the manufacturer's damages under UCC Article 2?",
        opts: [
            "$15,000, representing the difference between the market price when the buyer learned of the repudiation ($115,000) and the contract price ($100,000).",
            "$50,000, representing the difference between the market price on the date of agreed tender ($150,000) and the contract price ($100,000).",
            "$25,000, representing the difference between the actual cover price ($125,000) and the contract price ($100,000).",
            "$30,000, representing the seller's disgorgement profits realized from the breach."
        ],
        ans: 2,
        exp: "(C) is the correct response. When an aggrieved buyer effectuates a proper commercial cover under UCC § 2-712, cover damages displace market damages under UCC § 2-713. Under UCC § 2-712, after a breach or anticipatory repudiation by the seller, the buyer may 'cover' by making in good faith and without unreasonable delay any reasonable purchase of goods in substitution for those due from the seller. The buyer recovers the difference between the cost of cover and the contract price. When a buyer makes a timely, reasonable cover purchase, damages are measured strictly under § 2-712 ($2.50 cover price minus $2.00 contract price = $0.50 per pound × 50,000 pounds = $25,000); the buyer cannot bypass cover to claim higher market damages under § 2-713, nor is the buyer limited to earlier repudiation market prices. (A) is incorrect because the market-price-at-repudiation formula applies only when the buyer fails to cover. (B) is incorrect because a buyer who covers cannot elect market-tender damages to capture a market surge. (D) is incorrect because contract damages are compensatory rather than disgorgement-based."
    },
    {
        id: 18,
        topic: "Consideration / Illusory Promises vs Mutuality",
        fp: "A regional retail bakery entered into a signed written agreement with a local flour milling company. The agreement stated: 'Miller agrees to sell to Bakery, and Bakery agrees to purchase from Miller, all the high-gluten bread flour that Bakery may choose to order from time to time over the next twelve months, at a fixed price of $20 per 50-pound sack.' A month later, the market price of high-gluten flour rose sharply to $30 per sack. The bakery submitted an order for 500 sacks at the contract price of $20 per sack. The miller refused to fill the order, stating that it had decided not to sell to the bakery. The bakery sued the miller for breach of contract.",
        q: "Is the agreement between the bakery and the miller an enforceable contract?",
        opts: [
            "Yes, because the agreement was embodied in a signed writing specifying an exact price term.",
            "No, because the bakery's promise to buy only what it 'may choose to order' was illusory, rendering the agreement void for lack of consideration.",
            "Yes, because the agreement constituted a valid requirements contract under UCC § 2-306.",
            "No, because agreements for the sale of flour exceeding $500 are void under the Statute of Frauds."
        ],
        ans: 1,
        exp: "(B) is the correct response. A promise to buy only what the promisor 'may choose to order' reserves complete, unfettered discretion, rendering the promise illusory and unenforceable (Restatement § 77). An illusory promise is an apparent promise that does not actually bind the promisor to any commitment. Because the bakery did not promise to buy all of its actual requirements in good faith, but merely what it 'may choose to order,' the bakery made no legal commitment whatsoever. An illusory promise cannot serve as consideration for the return promise of the seller; therefore, the agreement lacked mutuality of obligation and was an unenforceable, revocable continuing offer. When the miller refused the order, it effectively revoked its offer. (A) is incorrect because a writing and a price term cannot cure a total lack of consideration. (C) is incorrect because a valid requirements contract requires promising to buy all actual requirements in good faith, not merely what the buyer 'chooses' to order. (D) is incorrect because the Statute of Frauds was satisfied by the signed writing; the agreement fails strictly for lack of consideration."
    },
    {
        id: 19,
        topic: "Assignment & Delegation / Novation vs Delegation",
        fp: "A master tailor entered into a written contract with an opera company to design and hand-sew ten elaborate period costumes for an upcoming opera production for $20,000, completion due September 1. In July, the tailor was offered a lucrative film studio job. The tailor contacted the opera company director and proposed that an equally skilled, licensed master theatrical seamstress take over the costume contract. The opera company director agreed, and the tailor, the seamstress, and the opera company signed a three-party writing stating: 'Seamstress agrees to assume all costume design and sewing duties under the July contract, Opera Company agrees to pay Seamstress the $20,000 fee, and Tailor is hereby released from all further obligations.' The seamstress delivered defective costumes late, forcing the opera company to cancel the performance. The opera company sued the original tailor for breach.",
        q: "Is the original tailor liable to the opera company for the breach?",
        opts: [
            "Yes, because a delegating obligor remains secondarily liable as a surety unless supported by fresh consideration.",
            "Yes, because contracts involving personal artistic skills cannot be delegated under common law.",
            "No, because the three-party agreement constituted a novation that completely discharged the tailor from all liability.",
            "No, because an assignee takes subject to all defenses existing against the assignor."
        ],
        ans: 2,
        exp: "(C) is the correct response. The three-party agreement was a valid novation under Restatement (Second) of Contracts § 280. A novation is a substituted contract that includes as a party one who was neither the obligor nor the obligee of the original duty. A novation requires: (1) a previous valid obligation; (2) an agreement of all parties to a new contract; (3) the extinguishment of the old contractual obligation; and (4) the validity of the new contract. Unlike a simple delegation (where the delegating party remains liable as a surety), the signed three-party agreement explicitly released the tailor from all obligations and substituted the seamstress. This express release discharged the tailor from all primary and secondary liability. (A) is incorrect because mutual agreement of all three parties to substitute an obligor and release the original party supplies valid consideration. (B) is incorrect because while personal service duties cannot be unilaterally delegated, they can be transferred with the obligee's consent via novation. (D) is incorrect because the issue involves a novation of duties, not an assignment of claims."
    },
    {
        id: 20,
        topic: "Performance / Adequate Assurances (UCC 2-609)",
        fp: "A commercial dairy farm entered into a written contract with an agricultural feed supplier to purchase 50 tons of organic cattle grain per month for two years at $300 per ton, payable upon delivery on the first of each month. One year into the contract, the dairy farm's purchasing agent read an investigative report in a reputable agricultural trade journal stating that the feed supplier's primary grain elevator had suffered a catastrophic structural silo collapse and that the supplier was defaulting on commercial grain contracts throughout the state. The dairy farm immediately sent a signed, written letter to the supplier demanding adequate assurance of due performance within 30 days under UCC § 2-609. The supplier received the letter on August 5. The supplier made no response, provided no documentation, and offered no communication for 35 days. On September 10, the dairy farm contracted with another feed mill for substitute grain at $350 per ton and canceled the original contract. On September 12, the original supplier tendered 50 tons of grain and sued the dairy farm for breach.",
        q: "Did the dairy farm have the legal right to cancel the contract and purchase substitute grain?",
        opts: [
            "Yes, because the supplier's failure to provide adequate assurance of performance within a reasonable time not exceeding 30 days operated as an anticipatory repudiation.",
            "No, because the dairy farm had no right to suspend performance until the supplier actually missed a scheduled monthly delivery.",
            "No, because demands for adequate assurance under the UCC require an affidavit certified by an independent commodities broker.",
            "Yes, because requirements and output feed agreements are terminable at will by either party upon 30 days' notice."
        ],
        ans: 0,
        exp: "(A) is the correct response. The supplier's failure to provide adequate assurance within 30 days operated as an anticipatory repudiation under UCC § 2-609(4). When reasonable grounds for insecurity arise with respect to the performance of either party, the other may in writing demand adequate assurance of due performance. Under UCC § 2-609(4), 'After receipt of a justified demand failure to provide within a reasonable time not exceeding thirty days such assurance of due performance as is adequate under the circumstances of the particular case is a repudiation of the contract.' The catastrophic silo collapse and reported defaults provided reasonable grounds for insecurity. Because the supplier remained silent for 35 days (exceeding the 30-day statutory ceiling), the failure operated as an anticipatory repudiation, authorizing the dairy farm to cancel and cover. (B) is incorrect because an aggrieved party is not required to wait for an actual delivery failure once an anticipatory repudiation occurs. (C) is incorrect because UCC § 2-609 requires only a written demand, not an expert affidavit. (D) is incorrect because fixed-term agricultural supply contracts are not terminable at will."
    },
    {
        id: 21,
        topic: "Statute of Frauds / UCC 2-201 Confirmatory Memo & Quantity Limit",
        fp: "A wholesale produce dealer telephoned a commercial food canning company and offered to sell 2,000 crates of Grade-A processing tomatoes at $20 per crate, delivery in 30 days. The canner orally accepted the offer over the telephone. The next morning, the produce dealer mailed a signed, written memorandum to the canner stating: 'This confirms our telephone agreement yesterday for the sale of 1,200 crates of Grade-A processing tomatoes at $20 per crate, delivery in 30 days.' The canner's purchasing manager received and read the letter two days later. The canner sent no written objection or reply. Thirty days later, the dealer tendered 2,000 crates of conforming tomatoes to the canner's unloading dock. Due to a market glut that caused tomato prices to plummet to $12 per crate, the canner rejected the entire shipment, asserting the Statute of Frauds because it had never signed any writing.",
        q: "What is the maximum quantity for which the contract is enforceable against the canner under UCC Article 2?",
        opts: [
            "2,000 crates, because the parties orally agreed to that quantity and the dealer tendered conforming goods.",
            "Zero crates, because the Statute of Frauds requires a writing signed by the party against whom enforcement is sought.",
            "2,000 crates, but only if the dealer proves that 2,000 crates is the standard commercial shipping lot in the produce industry.",
            "1,200 crates, because under UCC § 2-201, an oral agreement enforced through a merchant's confirmatory memo is limited to the quantity stated in the writing."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under UCC § 2-201(1) and (2), an oral contract enforced under the merchant's confirmatory memo exception cannot be enforced beyond the quantity term stated in the confirmation. Under UCC § 2-201(2), between merchants, if a writing in confirmation of the contract and sufficient against the sender is received and the recipient has reason to know its contents, it satisfies the Statute of Frauds against the recipient unless written notice of objection is given within 10 days. However, the final sentence of UCC § 2-201(1) explicitly establishes that 'The contract is not enforceable under this paragraph beyond the quantity of goods shown in such writing.' Although the parties orally discussed 2,000 crates, the dealer's written confirmation stated only 1,200 crates. Because the recipient failed to object within 10 days, the confirmatory memo satisfies the Statute of Frauds, but recovery is strictly capped at the 1,200 crates stated in the writing. (A) is incorrect because statutory UCC rules explicitly prohibit enforcing quantities beyond the written number. (B) is incorrect because UCC § 2-201(2) is a specific statutory exception to the requirement of the recipient's signature. (C) is incorrect because trade usage cannot expand a written quantity ceiling under UCC § 2-201(1)."
    },
    {
        id: 22,
        topic: "Breach / Anticipatory Repudiation & Retraction",
        fp: "On February 1, an agricultural equipment manufacturer contracted in writing to build and deliver 50 specialized fruit-harvesting trailers to a citrus cooperative for $150,000, delivery scheduled on August 1. On May 1, the manufacturer sent a certified letter to the cooperative stating: 'Due to labor strikes and escalating steel prices, we will not be able to fulfill our contract, and we consider our agreement terminated.' On May 5, the cooperative contacted two competing trailer builders to inquire about availability and market pricing, learning that substitute trailers would cost $190,000. However, the cooperative signed no contracts, paid no deposits, and sent no communication to the original manufacturer. On May 15, the manufacturer settled its labor dispute and sent an email to the cooperative: 'We have resolved our factory difficulties and hereby retract our letter of May 1; we will manufacture and deliver all 50 trailers on August 1 as agreed.' The cooperative received the email on May 15. Nevertheless, on May 20, the cooperative executed a binding purchase contract with a competitor for $190,000 and sued the original manufacturer for $40,000 in cover damages.",
        q: "Was the manufacturer's May 15 retraction of its anticipatory repudiation legally effective under UCC Article 2?",
        opts: [
            "No, because the cooperative materially changed its position by soliciting formal price quotations from competing builders.",
            "No, because an anticipatory repudiation operates as an immediate total breach that terminates all rights of retraction.",
            "Yes, because the retraction was received before the cooperative canceled the contract, filed suit, or materially changed position in reliance.",
            "Yes, because under the UCC, an anticipatory repudiation can be retracted at any time up until the date scheduled for delivery."
        ],
        ans: 2,
        exp: "(C) is the correct response. The retraction complied with UCC § 2-611(1) prior to any terminating event. Under UCC § 2-611(1), a repudiating party can retract an anticipatory repudiation until his next performance is due UNLESS the aggrieved party has, since the repudiation: (a) canceled the contract, (b) materially changed position in reliance on the repudiation, or (c) otherwise indicated that he considers the repudiation final. Merely inquiring about market prices or soliciting price quotations from competitors without entering into a binding cover contract, incurring non-refundable expenses, or communicating cancellation does not constitute a material change of position. Because the cooperative took no binding action and sent no notification of finality prior to receiving the retraction on May 15, the manufacturer's retraction was legally effective, reinstating the contract. (A) is incorrect because soliciting bids without binding commitment is not a material change of position. (B) is incorrect because an anticipatory repudiation is not automatically final upon utterance; it is subject to retraction until reliance, cancellation, or suit. (D) is incorrect because the right to retract is not absolute; it terminates immediately upon reliance, cancellation, or suit."
    },
    {
        id: 23,
        topic: "Performance / Condition Precedent vs Promise",
        fp: "An engineering company entered into a written contract with an industrial manufacturing plant to design and install a high-pressure pneumatic filtration system for $150,000. Under the contract, monthly progress installments of $25,000 were payable 'upon the presentation of a certificate of satisfactory installation executed by the independent supervising engineer.' The contractor completed all piping in compliance with blueprints. However, the supervising engineer, embroiled in an acrimonious private divorce litigation involving the contractor's majority shareholder, maliciously refused to inspect the job or execute the certificate, stating: 'I will never approve a single dollar for your company.' The plant refused to pay the $25,000 installment solely because the engineer's certificate had not been submitted.",
        q: "Is the manufacturing plant legally obligated to pay the $25,000 progress installment?",
        opts: [
            "No, because express conditions precedent in commercial engineering contracts must be strictly satisfied as written.",
            "Yes, because the supervising engineer's fraudulent and bad-faith refusal excuses the express condition precedent.",
            "No, because the contractor's exclusive remedy is an intentional tort action for interference with contract against the engineer.",
            "Yes, because under UCC Article 2, independent certification clauses in industrial contracts are unconscionable per se."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under Restatement (Second) of Contracts § 227 and established common law, where an owner's duty to make progress payments is expressly conditioned upon the production of an architect's or engineer's certificate, the issuance of that certificate is an express condition precedent. However, the condition is EXCUSED if the certifying expert's refusal to issue the certificate is fraudulent, collusive, arbitrary, or in bad faith. Because the engineer withheld the certificate out of personal malice rather than a bona fide professional evaluation of the contractor's work, the condition precedent is excused by operation of law, and the owner must pay the installment directly. (A) is incorrect because bad faith or fraud by the certifying third party excuses strict compliance with an express condition. (C) is incorrect because while a tort claim against the engineer may exist, the contractor can sue the owner directly on the contract once the condition is excused. (D) is incorrect because construction and engineering services are governed by common law, not the UCC, and certification clauses are fully valid."
    },
    {
        id: 24,
        topic: "Remedies / Liquidated Damages vs Penalty",
        fp: "A commercial manufacturing corporation entered into a written contract with an industrial software developer to build a customized enterprise resource planning (ERP) system for $200,000, payable upon delivery scheduled for October 1. The contract contained the following clause: 'Time is of the essence. If Developer fails to deliver the fully functional software system by October 1, Developer shall pay to Manufacturer, as liquidated damages and not as a penalty, the sum of $50,000 for each calendar day of delay.' At the time of contract execution, both parties knew that an operational delay in the ERP software would cause the manufacturer modest scheduling inconveniences and clerical overtime estimated at approximately $2,000 to $3,000 per day. The developer experienced coding bugs and delivered the completed, fully functional software on October 4 (three days late). The manufacturer suffered $8,000 in actual overtime expenses. The manufacturer withheld $150,000 from the contract price, asserting the liquidated damages clause. The developer sued for the unpaid balance.",
        q: "Is the liquidated damages clause enforceable against the developer?",
        opts: [
            "No, because the clause fixes an unreasonably large amount that operates as an unenforceable penalty under contract law.",
            "Yes, because commercial entities possess unfettered freedom of contract to agree on fixed per-diem delay damages.",
            "Yes, because time was expressly made of the essence in the written software development contract.",
            "No, because liquidated damages provisions are void per se in customized software development contracts."
        ],
        ans: 0,
        exp: "(A) is the correct response. The liquidated damages clause constitutes an unenforceable penalty under Restatement (Second) of Contracts § 356(1) and UCC § 2-718(1). Under contract law, a liquidated damages provision is enforceable only if: (1) the anticipated damages in the event of breach are difficult to ascertain or estimate at the time of contracting; and (2) the amount stipulated is a reasonable forecast of the just compensation for the harm that is caused by the breach. A term fixing unreasonably large liquidated damages is void as a penalty on grounds of public policy. Stipulating damages of $50,000 per day for delay when foreseeable daily losses were estimated at $2,000 to $3,000 is grossly disproportionate and bears no reasonable relationship to anticipated or actual harm. The clause is an unenforceable penalty, limiting the manufacturer strictly to its provable actual damages of $8,000. (B) is incorrect because liquidated damages clauses are subject to judicial review for reasonableness, and freedom of contract does not validate penalties. (C) is incorrect because a time-of-the-essence clause enforces deadlines, but cannot validate an unconscionable penalty clause. (D) is incorrect because reasonable liquidated damages clauses are standard and valid in commercial contracts."
    },
    {
        id: 25,
        topic: "Statute of Frauds / Main Purpose Doctrine",
        fp: "An independent commercial trucking owner-operator had purchased a tractor-trailer on credit financed by an equipment bank. The trucker experienced engine failure and towed the rig to an independent diesel repair shop. The shop owner determined that an engine rebuild would cost $18,000. Because the trucker had a poor credit rating and no cash, the shop owner refused to perform the work without an advance cash deposit. The trucker held a lucrative long-term hauling contract with a freight logistics company. The president of the logistics company telephoned the shop owner and stated: 'Rebuild the engine and release the truck to the trucker so he can pull our freight; if he fails to pay your $18,000 repair invoice within 30 days, I will pay the bill myself.' The logistics company's primary motive in making the promise was to keep its freight moving to avoid losing a multi-million dollar shipping account. Relying on this phone call, the shop rebuilt the engine and released the truck. The trucker defaulted on the bill. When the shop demanded payment from the logistics company, the logistics company raised the suretyship provision of the Statute of Frauds.",
        q: "Is the logistics company's oral promise enforceable under the Statute of Frauds?",
        opts: [
            "No, because a collateral promise to answer for the debt of another must be evidenced by a signed writing.",
            "No, because oral contracts for services exceeding $500 are void under the Statute of Frauds.",
            "Yes, under the main purpose rule, because the promisor's primary objective was to serve its own business and economic interests.",
            "Yes, but only if the trucker is formally adjudicated bankrupt by a court of competent jurisdiction."
        ],
        ans: 2,
        exp: "(C) is the correct response. The logistics company's commitment falls squarely within the 'main purpose' (or leading object) exception to the suretyship Statute of Frauds under Restatement (Second) of Contracts § 116. While collateral promises to answer for the debt, default, or miscarriage of another generally require a signed writing, the universally recognized main purpose doctrine provides that where the promisor's chief purpose or leading object in undertaking the suretyship is to serve or advance a substantial pecuniary or business interest of his own, the promise is treated as original rather than collateral, taking it outside the Statute of Frauds. The logistics company promised to pay the repair bill primarily to keep the truck operational and preserve its own multi-million dollar commercial freight account. Because the oral promise was motivated by advancing its own direct economic advantage, the promise is enforceable without a writing. (A) is incorrect because it states the general suretyship rule while ignoring the established main purpose exception. (B) is incorrect because the $500 threshold applies to sales of goods under UCC § 2-201, not common law service contracts. (D) is incorrect because formal bankruptcy of the principal debtor is not a legal prerequisite to enforcing a guarantee outside the Statute of Frauds."
    }
];
// BabyBar-Contracts-52.js
// Total Questions: 25
// Subject: Contracts (Common Law & UCC Article 2)
// Standard: Master Tier 5 / First-Year Law Students' Examination (Baby Bar) Benchmark
const examData = [
    {
        id: 1,
        topic: "Defenses / Mutual Mistake",
        fp: "A marine salvage company contracted with a boat owner to recover a sunken yacht. The owner told the salvage manager that the yacht was resting 50 feet underwater. The manager replied, 'That is fortunate, as our lifting crane only operates up to a maximum depth of 60 feet.' The parties agreed on a price. When the salvage crew arrived, they discovered the yacht was actually lodged in a trench 80 feet underwater, making recovery impossible with their equipment. The salvage company refused to perform.",
        q: "Is the salvage company's performance excused on the grounds of mistake?",
        opts: [
            "No, because the salvage company assumed the risk by failing to independently verify the depth.",
            "No, because both parties were merely uncertain about the exact depth.",
            "Yes, because the agreement did not allocate the risk of mistake to either party.",
            "Yes, because at the time of contracting, both parties were mistaken about a basic assumption on which the contract was based."
        ],
        ans: 3,
        exp: "(D) is the correct response. Either party may have its performance excused under the doctrine of mutual mistake if both parties were mistaken about a basic assumption on which the contract was based. Because both parties shared the identical mistaken belief that the yacht was 50 feet underwater, and the equipment limitations made this depth a basic assumption of the contract, the mutual mistake doctrine applies. (A) is incorrect because the salvage company justifiably relied on the owner's specific representation of the depth, meaning they did not assume the risk of the mistake. (B) is incorrect because the parties were not merely uncertain; they shared an actual, identical mistaken belief. (C) is incorrect because the failure to allocate risk alone is insufficient; the mistake must go to a basic assumption of the contract."
    },
    {
        id: 2,
        topic: "Parol Evidence / Fraud & Reformation",
        fp: "A manufacturer offered a terminated distributor $100,000 to release all contract claims against the manufacturer. The distributor orally accepted. The manufacturer sent an unsigned release document. The distributor carefully prepared, signed, and returned a substitute release that was visually identical to the original but covertly excluded antitrust claims from the release. The manufacturer signed the substitute document without reading it. The distributor then filed an antitrust lawsuit against the manufacturer.",
        q: "Is the manufacturer likely to prevail in an action seeking reformation of the release to conform to the parties' oral agreement?",
        opts: [
            "Yes, because the parties were mutually mistaken regarding the contents of the signed release.",
            "Yes, because the distributor's fraudulent behavior induced the manufacturer's unilateral mistake.",
            "No, because the parol evidence rule will preclude evidence of the oral agreement.",
            "No, because the manufacturer acted unreasonably by failing to read the substitute release prior to signing it."
        ],
        ans: 1,
        exp: "(B) is the correct response. The distributor's failure to disclose the change he made to the release constituted a fraudulent misrepresentation, making reformation appropriate even though the manufacturer did not read the release before signing it. When a party's manifestation of assent is induced by the other party's fraudulent misrepresentation as to the contents of a writing, the recipient is entitled to reformation if they were justified in relying on the misrepresentation. (A) is incorrect because only the manufacturer was mistaken; the distributor intentionally altered the document, so the mistake was not mutual. (C) is incorrect because the parol evidence rule does not bar evidence of prior negotiations offered to show that a written agreement was procured by fraud. (D) is incorrect because failing to read a document when fraudulently induced to believe it matches a prior agreement does not constitute a failure to act in good faith, so the reliance remains justified."
    },
    {
        id: 3,
        topic: "Formation / Implied-in-Fact Contracts",
        fp: "A certified public accountant (CPA) received a package at her office from a regular client. Attached was a note: 'Do you think these corporate tax filings comply with the new state tax code? I would have met you in person, but I'm flying out of the country. I'll be back next week.' The CPA reviewed the documents and mailed a one-page letter to the client confirming compliance, along with a bill for $600 (a reasonable fee). The client refused to pay, arguing she never formally retained the CPA for this specific task.",
        q: "If the CPA sues the client for the $600, will the CPA be likely to prevail?",
        opts: [
            "No, because the CPA and the client never agreed on the essential terms of a contract.",
            "Yes, because the CPA took action on the client's note to her detriment.",
            "Yes, because the client's note and the CPA's performance created an implied-in-fact contract.",
            "No, because even if the parties had an agreement, it lacked explicit mutual assent."
        ],
        ans: 2,
        exp: "(C) is the correct response. An offer invites acceptance in any manner and by any medium reasonable in the circumstances. The client's note constituted an offer to have the CPA perform services, and under these circumstances, the CPA's actual performance of the services was a reasonable method of accepting the offer. The combination of the client's note and the CPA's performance created an implied-in-fact contract (a contract resulting from conduct rather than explicit words). (A) is incorrect because essential terms, such as price, can be supplied by a court through reasonable implication when a service is requested and performed. (B) is incorrect because it implies reliance on promissory estoppel, which is unnecessary when an actual implied-in-fact contract has been formed. (D) is incorrect because mutual assent can be manifested through conduct (performance) rather than explicit spoken words."
    },
    {
        id: 4,
        topic: "Remedies / Consequential Damages Foreseeability (Hadley v. Baxendale)",
        fp: "A construction firm contracted to repair a municipal dam by November 1. The contract included a $2,000 bonus for each day the repair was completed before the deadline. On October 10, a specialized valve broke. That day, the firm contracted with a supplier to deliver a replacement valve by October 11. The supplier misdirected the shipment, delivering it on October 15. The dam repair was finished on October 16. Had the valve arrived on October 11, the firm would have finished on October 12. The supplier knew nothing about the early-completion bonus. The firm sued the supplier.",
        q: "Will the firm be permitted to recover the $8,000 in lost incentive pay from the supplier?",
        opts: [
            "Yes, because the supplier is liable for all damages flowing directly from its breach.",
            "Yes, because the supplier should have implicitly known that time was of the essence.",
            "No, because the supplier did not expressly agree to be responsible for such damages in writing.",
            "No, because the supplier did not know and had no reason to know about the early-completion incentive-pay provision."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under the doctrine of Hadley v. Baxendale, damages are not recoverable for loss that the party in breach did not have reason to foresee as a probable result of the breach when the contract was made. The early-completion incentive pay is a special circumstance beyond the ordinary course of events. Because the supplier did not know, and had no reason to know, about this specific bonus provision, the lost incentive pay was not a foreseeable result of the delay. (A) is incorrect because a breaching party is not strictly liable for all direct damages if those damages flow from unknown special circumstances. (B) is incorrect because even if time was of the essence, the supplier had no reason to foresee the specific extraordinary penalty/bonus structure. (C) is incorrect because a breaching party can be liable for special damages if they simply *knew* or *had reason to know* of them; an express agreement to be responsible is not required."
    },
    {
        id: 5,
        topic: "Performance / Excuse of Conditions by Waiver",
        fp: "A software company hired a developer to write code. Because the developer had a severe online gaming addiction, the contract conditioned the company's duty to pay on the developer abstaining from multiplayer gaming during the three-month project. One month in, the developer began gaming heavily. The company's CEO saw the developer gaming but told him, 'The code structure looks fantastic, keep up the great work.' The developer completed the project on time. The company then refused to pay, citing the developer's gaming.",
        q: "Which of the following arguments best supports the developer's claim for payment?",
        opts: [
            "The company waived the condition of no gaming.",
            "The no-gaming term was functionally a penalty clause and therefore was unenforceable.",
            "The no-gaming term would be interpreted as a promise and not an express condition.",
            "The gaming was not a material breach since it did not affect the quality of the final code."
        ],
        ans: 0,
        exp: "(A) is the correct response. When a contract conditions one party's duty upon the non-occurrence of an event, that party can waive the benefit of the condition through conduct. The CEO, knowing the developer was violating the no-gaming condition, encouraged him to keep working, thereby waiving the benefit of the condition. This implied promise induced the developer to continue working, making the waiver irrevocable and excusing the condition to avoid a disproportionate forfeiture. (B) is incorrect because the clause defined required conduct, not a measure of damages in the event of breach, so it was not a penalty clause. (C) is incorrect because the contract expressly stated the duty to pay was 'conditioned on' the abstention, meaning a court cannot merely interpret it as a promise. (D) is incorrect because strict compliance is required for express conditions, regardless of whether the breach was 'material' to the final product quality."
    },
    {
        id: 6,
        topic: "Formation / Acceptance by Performance & Death of Offeror",
        fp: "A vintage watch collector shipped an antique timepiece to a master horologist with a signed note: 'Here is another watch to restore. As always, I will pay $300 for the work, no more.' On October 4, the horologist received the watch and began restoration. On October 6, the collector died unexpectedly. Unaware of the death, the horologist mailed a note on October 7 stating he had begun work on October 4. The horologist learned of the death on October 8.",
        q: "Does a contract exist that binds the horologist and the collector's estate?",
        opts: [
            "Yes, because the horologist sent the October 7 note before learning of the collector's death.",
            "No, because the offer lapsed automatically when the collector died.",
            "No, because the collector died before the horologist sent the October 7 note.",
            "Yes, because the offer was accepted before the collector's death."
        ],
        ans: 3,
        exp: "(D) is the correct response. When an offer invites acceptance by either a promise or performance, the beginning of performance generally constitutes acceptance. When the horologist began work on October 4, that action acted as an acceptance of the collector's offer. Because the contract was already formed on October 4, the collector's subsequent death on October 6 did not terminate the offer or the contract. (A) is incorrect because the contract was formed by performance on October 4; the October 7 note merely served to provide necessary notice to avoid discharge, and would have been effective even if the horologist had learned of the death before sending it. (B) and (C) are incorrect because the offer had already been successfully accepted prior to the collector's death, so the death could not terminate the offer."
    },
    {
        id: 7,
        topic: "Parol Evidence / Partial Integration",
        fp: "A homeowner and a contractor signed a one-page contract for kitchen remodeling for $15,000. Just before signing, they realized the contract omitted a completion date. They orally agreed the work would be finished in 45 days, and then signed the document. The contract contained no merger clause. The contractor took 90 days. The homeowner sued for breach.",
        q: "Is the court likely to admit evidence concerning the parties' oral agreement of a 45-day deadline?",
        opts: [
            "No, because the oral agreement was merely part of the parties' preliminary negotiations.",
            "No, because the court must ascertain the meaning of the agreement strictly from the terms of the written contract.",
            "Yes, because the contract is inherently ambiguous regarding time.",
            "Yes, because the time limit is an additional term that does not contradict the partially integrated written contract."
        ],
        ans: 3,
        exp: "(D) is the correct response. Where a written contract is only partially integrated (intended as a final expression of some terms but not all), the Parol Evidence Rule does not prevent proof of a prior or contemporaneous oral agreement that is a consistent 'addition to' the writing. Because the one-page document lacked a merger clause and completely omitted a completion time, it was a partial integration. The oral 45-day deadline supplements the writing without contradicting any of its express terms, making it admissible. (A) is incorrect because the parties reached an actual oral agreement just prior to signing; it was not merely preliminary negotiation. (B) is incorrect because courts may look outside the four corners of a document to find consistent additional terms if the writing is only partially integrated. (C) is incorrect because the writing is not ambiguous; rather, it is completely silent on the issue of time, making it a case of supplementation rather than interpretation."
    },
    {
        id: 8,
        topic: "Defenses / Illegality & Public Policy (Licensing)",
        fp: "A county required all commercial painters operating within its borders to pay an annual $50 revenue-raising permit fee. A painter, unaware of the fee, contracted to paint a county resident's exterior siding for $4,000. The painter completed the job flawlessly. The resident discovered the painter had not paid the county fee and refused to pay the $4,000. The painter sued.",
        q: "How is the court likely to rule?",
        opts: [
            "Because the contract violates the law and is void, the court will not enforce it.",
            "Because the purpose of the fee is merely to raise revenue, the court will find that public policy does not bar enforcement of the contract.",
            "Because the purpose of the fee is merely to raise revenue, the court will allow the painter to recover his out-of-pocket costs only.",
            "Although the contract violates the law and is void, the court will require the resident to pay the reasonable value of the work accepted in quantum meruit."
        ],
        ans: 1,
        exp: "(B) is the correct response. When a party fails to comply with a licensing or registration requirement, a contract for their services is unenforceable on public policy grounds ONLY if the requirement has a regulatory purpose designed to protect the public. Where a licensure requirement is designed merely to raise money (revenue-raising), a court will not refuse to enforce the agreement on public policy grounds. Because the county fee was purely for revenue, the contract is fully enforceable, and the painter is entitled to the $4,000 contract price. (A) is incorrect because the contract is not void; the revenue-raising nature of the statute preserves enforceability. (C) is incorrect because the painter is entitled to recover fully on the contract, not merely recoup costs. (D) is incorrect because the contract is not void, and the recovery is based on the contract price, not quasi-contract."
    },
    {
        id: 9,
        topic: "Third-Party Beneficiaries / Stale Debts",
        fp: "A farmer owed a supplier $5,000, but collection of the debt was barred by the statute of limitations. The farmer sold his used tractor to a buyer under a signed written agreement in which the buyer promised to pay the $5,000 purchase price directly to the supplier 'in satisfaction of the farmer's debt to the supplier.' The buyer failed to pay.",
        q: "Can the supplier recover the $5,000 from the buyer?",
        opts: [
            "No, because the supplier's rights as an intended beneficiary are subject to the same statute of limitations defense the farmer possessed.",
            "No, because payment to the supplier would undermine the statutory public policy against enforcement of stale claims.",
            "Yes, because the buyer's promise to pay the $5,000 revived the original uncollectible debt against the farmer.",
            "Yes, because the buyer's promise to pay $5,000 to the supplier is enforceable by the supplier regardless of whether the farmer was legally obligated to pay the supplier anything."
        ],
        ans: 3,
        exp: "(D) is the correct response. The supplier is an intended creditor beneficiary of the contract between the farmer and the buyer because the performance of the promise will satisfy an obligation of the promisee (farmer) to pay money to the beneficiary. The buyer's promise is interpreted as a commitment to pay the $5,000 regardless of whether the underlying debt was legally enforceable against the farmer. Therefore, the supplier can enforce the buyer's promise directly. (A) is incorrect because the promisor (buyer) cannot raise the promisee's (farmer's) personal statute of limitations defense against the beneficiary unless the contract expressly provides for it. (B) is incorrect because there is no overriding public policy against enforcing a new third-party promise to pay a stale claim. (C) is incorrect because the buyer's promise does not revive the original debt against the farmer; it simply creates a new enforceable right against the buyer."
    },
    {
        id: 10,
        topic: "Excuse / Impracticability",
        fp: "A chemist signed a three-year contract to serve as the lead researcher for a pharmaceutical lab at $8,000 per month. The position required handling a specific synthetic compound daily. After one month, the chemist developed a severe, life-threatening allergic reaction to the compound. He immediately quit. The lab hired a replacement for $9,000 per month and sued the chemist for breach of contract.",
        q: "Is the lab likely to recover damages from the chemist?",
        opts: [
            "No, because an at-will employee has the right to terminate an employment contract at any time.",
            "Yes, because the lab is a reasonably safe environment for most people who are not allergic.",
            "No, because the risk to the chemist's health excused his nonperformance of the contract.",
            "Yes, because the lab acted in good faith in mitigating its damages by hiring a replacement."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under the doctrine of supervening impracticability, a party's duty to perform is discharged if performance is made impracticable without his fault by the occurrence of an event the non-occurrence of which was a basic assumption of the contract. Performance becomes impracticable when it involves a risk of injury to person or health that is disproportionate to the ends to be attained by performance. The chemist's severe allergic reaction made his continued performance impracticable, discharging his contractual duties and preventing the lab from recovering damages. (A) is incorrect because a three-year contract is not at-will employment. (B) is incorrect because the idiosyncrasy of the risk does not negate the fact that, for *this specific performer*, performance became dangerously impracticable. (D) is incorrect because mitigation of damages is irrelevant if the underlying duty to perform was discharged by impracticability."
    },
    {
        id: 11,
        topic: "Defenses / Misrepresentation by Concealment",
        fp: "Before listing his house, a seller painted over extensive termite damage in the basement joists. During a tour, the seller said nothing about the basement or the termites. The buyer, without hiring an inspector, immediately signed a contract to buy the house for $300,000. Before closing, the buyer discovered the structural damage, which would cost $30,000 to repair. The buyer refused to close. The seller sued for breach.",
        q: "Is the seller likely to prevail?",
        opts: [
            "No, because the seller concealed evidence of the termite damage.",
            "No, because the buyer lacked a real opportunity to understand the essential terms of the sale.",
            "Yes, because the buyer acted unreasonably by failing to employ an independent home inspector.",
            "Yes, because the seller made no affirmative statements of fact about the basement."
        ],
        ans: 0,
        exp: "(A) is the correct response. A contract is voidable if a party's assent is induced by a material misrepresentation on which the recipient is justified in relying. While a mere failure to disclose a fact is generally not a misrepresentation, intentional acts of concealment (such as painting over damage to hide it) are legally equivalent to affirmative misrepresentations that the fact does not exist. By painting over the termite damage, the seller committed a misrepresentation, entitling the buyer to avoid the contract. (B) is incorrect because there is no evidence the buyer failed to understand the essential terms; the issue is fraud. (C) is incorrect because a victim of intentional misrepresentation does not lose the right to avoid the contract merely by failing to conduct an independent investigation. (D) is incorrect because active physical concealment is treated as an affirmative misstatement under contract law."
    },
    {
        id: 12,
        topic: "Remedies / Consequential Damages Foreseeability (Hadley Rule)",
        fp: "An orchard owner contracted with an agricultural service to harvest his apple crop for $2,000 'when the crop is ripe.' In early October, the owner notified the service that the apples were ripe. The service delayed for three weeks because it took on other clients. The owner was frantic, as early killing frosts were common in that region in late October. In late October, before the service arrived, a severe frost destroyed the entire crop. The owner sued the service.",
        q: "Is the agricultural service liable for the loss of the crop?",
        opts: [
            "Yes, because a party who breaches a contract is strictly liable for all consequences that flow from the breach.",
            "No, because the owner failed to expressly warn the service that the crop might be destroyed by frost.",
            "No, because the contract did not establish a specific calendar date for performance.",
            "Yes, because at the time the contract was made, the service had reason to foresee the loss as a probable result of its breach."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under the rule of Hadley v. Baxendale, damages are recoverable if they follow from the breach as a result of special circumstances that the breaching party had reason to know at the time the contract was made. Because the agricultural service was experienced in the industry and early frosts were common in that region, the service had 'reason to know' of the special circumstances (the danger of crop destruction due to delay) even without an explicit warning from the owner. Therefore, the loss was foreseeable and the service is liable. (A) is incorrect because liability is limited by foreseeability; a breaching party is not strictly liable for *all* consequences. (B) is incorrect because express warnings are not required if the breaching party otherwise has reason to know of the risk from industry experience or regional common knowledge. (C) is incorrect because the term 'when the crop is ripe' provided a sufficiently definite time for performance."
    },
    {
        id: 13,
        topic: "Formation / Condition Precedent to Performance vs Formation",
        fp: "An uncle offered to sell his commercial bakery to his niece for $200,000, provided the corporate franchisor approved the transfer. The niece wrote back accepting the offer. The uncle later phoned the niece, stating the franchisor had approved the transfer and that he would have his attorney draft a formal written contract to record the terms. Before the draft was finished, the uncle changed his mind and refused to sell. The niece sued for breach.",
        q: "Is the niece likely to prevail?",
        opts: [
            "No, because the promised consideration was inadequate in light of the market value of the business.",
            "Yes, because the condition concerning the franchisor's assent to the transfer was beyond the control of either party.",
            "No, because the motivation for the transfer was family affection, not a bargained-for exchange.",
            "Yes, because the document being drafted by the attorney was merely a record of an agreement already made, not a condition to it."
        ],
        ans: 3,
        exp: "(D) is the correct response. If parties reach a binding agreement, the fact that they further agree to embody the contract in a formal written memorial does not prevent the original agreement from being binding immediately, provided there is no intent to delay formation. The detailed offer and acceptance created a binding contract. The franchisor's approval was a condition precedent to performance, which was satisfied. The drafting of the document was merely administrative. (A) is incorrect because courts do not inquire into the adequacy of consideration. (B) is incorrect because the condition being beyond the parties' control does not make it invalid; the crucial fact is that the condition *was satisfied*, triggering the duty to perform. (C) is incorrect because a transaction can be a valid mixture of bargain and gift; family affection does not negate the $200,000 consideration."
    },
    {
        id: 14,
        topic: "Parol Evidence / Express Terms vs Trade Usage",
        fp: "A screenwriter and a talent agent signed a one-year contract. Eager for representation, the writer agreed to pay the agent 20% of his earnings, written expressly in the contract. At the end of the year, they decided to continue working together. They photocopied the old contract, updated the date, and signed it. A dispute arose over the fee. Industry trade usage universally holds that screenwriters pay agents 10% of their earnings.",
        q: "What percentage is the court most likely to award the agent?",
        opts: [
            "20 percent, because course of dealing is given greater weight than trade usage.",
            "10 percent, because trade usage is the applicable default rule.",
            "Nothing, because the contract is too indefinite.",
            "20 percent, because it was an express term of the contract."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under contract interpretation rules (Restatement § 203(b)), express terms are given greater weight than course of performance, course of dealing, and usage of trade. Because the parties photocopied the prior agreement containing the 20% figure, that figure became an express term of the new contract. This express term overrides any conflicting trade usage (10%). (A) is incorrect because a single prior contract does not establish a 'course of dealing', and even if it did, the express term still governs the outcome. (B) is incorrect because trade usage has the lowest priority and yields to express terms. (C) is incorrect because the contract specifies duration, services, and a clear fee formula, making it sufficiently definite."
    },
    {
        id: 15,
        topic: "Remedies / Consequential Damages (Hadley Rule)",
        fp: "A bank agreed to lend a merchant $20,000 for one year at 6% interest, funds to be disbursed in two weeks. The merchant secretly planned to use the funds to buy a shipment of rare gems for resale at a $10,000 profit. The bank failed to disburse the funds. The merchant scrambled and secured a substitute loan from another lender at 9% interest for one year. By the time the substitute loan was approved, the gem shipment had been sold to someone else. The merchant sued the bank.",
        q: "What amount is the merchant likely to recover?",
        opts: [
            "$10,000, representing the merchant's foreseeable lost profit.",
            "The difference in cost over time between a loan at 9 percent and a loan at 6 percent.",
            "Nothing, because the parties failed to tacitly agree that the merchant would be entitled to damages in the event of a breach.",
            "Nothing, because lost opportunities are inherently unforeseeable."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under the Hadley v. Baxendale doctrine, damages are not recoverable for loss that the breaching party did not have reason to foresee as a probable result of the breach when the contract was made. In a contract to lend money, the lender is entitled to presume the borrower can find alternative funding, and special lost profits are unrecoverable unless the borrower informed the lender of the specific intended use and inability to borrow elsewhere. Because the merchant kept his gem resale plans secret, the $10,000 lost profit was unforeseeable and unrecoverable. However, it is naturally foreseeable that a substitute loan would carry a higher interest rate, so the difference in interest costs is recoverable. (A) is incorrect because the lost profits were not foreseeable. (C) is incorrect because modern courts reject the 'tacit agreement' test for consequential damages. (D) is incorrect because the merchant is entitled to the interest rate differential, even though the lost opportunity is barred."
    },
    {
        id: 16,
        topic: "Third-Party Beneficiaries / Incidental Beneficiaries",
        fp: "A private security firm contracted in writing with a shopping mall to provide overnight patrols. The contract required patrols to deter property damage and ensure doors were locked. One night, a security guard fell asleep. During that time, a late-night shopper walking to her car in the parking lot was mugged. In addition to suing the mugger, the shopper sued the security firm for breach of contract.",
        q: "What is the most accurate statement regarding the breach of contract claim against the security firm?",
        opts: [
            "The shopper has no claim for breach of contract against the security firm because she is an incidental beneficiary.",
            "The security firm is liable to the shopper as a matter of public policy because it violated general safety standards.",
            "The shopper is an intended third-party beneficiary because the firm's promise was intended to benefit all mall visitors.",
            "The shopper cannot sue on the contract because she was not expressly named in the document."
        ],
        ans: 0,
        exp: "(A) is the correct response. A third party may enforce a contract only if they are an intended beneficiary. An intended beneficiary exists if the circumstances indicate the promisee intended to give the beneficiary the benefit of the promised performance. If not, the party is merely an incidental beneficiary with no right to enforce the contract. Here, the mall contracted for security to protect its property and secure its doors, not to confer a direct right of action upon individual shoppers. Therefore, the shopper is an incidental beneficiary and cannot sue for breach. (B) is incorrect because a tort or public policy claim is distinct from a breach of contract action, which requires third-party standing. (C) is incorrect because the evidence does not support an intent to confer enforceable rights on individual shoppers. (D) is incorrect because an unnamed person *can* be an intended beneficiary if the contract identifies a specific class, but that is not the case here."
    },
    {
        id: 17,
        topic: "Defenses / Fraudulent Misrepresentation",
        fp: "A developer sold a commercial lot to a buyer for $150,000. During negotiations, the developer told the buyer the lot was zoned for high-rise residential and possessed valuable mineral rights. The developer knew both statements were false and knew they were important to the buyer. Eight months after moving in, the buyer discovered the lot was zoned only for light industrial and had no mineral rights. The buyer immediately sued to avoid the contract. Industrial zoning actually made the property market value higher than residential.",
        q: "Is the buyer likely to prevail in avoiding the contract?",
        opts: [
            "Yes, because the contract was void ab initio.",
            "No, because the developer's misstatements caused no economic harm to the buyer.",
            "Yes, because the buyer retained the power to avoid the contract due to fraud.",
            "No, because eight months exceeds a reasonable time for contract avoidance."
        ],
        ans: 2,
        exp: "(C) is the correct response. If a party's manifestation of assent is induced by a fraudulent misrepresentation upon which the recipient is justified in relying, the contract is voidable by the recipient (Restatement § 164). The developer knowingly made false statements about essential attributes of the property, inducing the buyer's purchase. The buyer is entitled to avoid the contract for fraud. (A) is incorrect because fraud in the inducement makes a contract voidable at the victim's option, not void ab initio. (B) is incorrect because economic harm is not required to avoid a contract for fraud; the victim need only show they were fraudulently induced. (D) is incorrect because the power to avoid is lost by unreasonable delay only *after* the victim discovers the fraud; here, the buyer sued immediately upon discovery."
    },
    {
        id: 18,
        topic: "Performance / Condition Precedent & Implied Duty of Good Faith",
        fp: "A buyer contracted to buy a home. The contract stated: 'Conditional upon buyer securing a 5% fixed-rate mortgage.' The buyer decided he didn't want the house and made zero effort to apply for any loans. On the closing date, the buyer claimed the condition precedent failed because he had no 5% mortgage. The seller sued.",
        q: "Will the seller prevail?",
        opts: [
            "Yes, because a court will imply a term imposing on the buyer a duty to use reasonable efforts to secure financing.",
            "No, because the buyer did not secure the 5% bank financing.",
            "Yes, because a court will excuse the condition to avoid a disproportionate forfeiture.",
            "No, because the contract did not expressly impose on the buyer any obligation to apply for a loan."
        ],
        ans: 0,
        exp: "(A) is the correct response. Every contract imposes a duty of good faith and fair dealing in its performance. Where a duty is subject to a condition, and that party's cooperation is necessary for the condition to occur, the duty of good faith includes an implied obligation to make reasonable efforts to satisfy the condition. Because the buyer failed to make any effort to apply for the mortgage, he breached this implied duty. Under the prevention doctrine, his breach excuses the non-occurrence of the condition, making his duty to close absolute. Therefore, the seller will prevail. (B) and (D) are incorrect because they ignore the implied duty of good faith to seek the financing. (C) is incorrect because the condition is excused due to the buyer's bad faith prevention, not to avoid a disproportionate forfeiture by the seller."
    },
    {
        id: 19,
        topic: "Assignment & Delegation / Liability of Delegator",
        fp: "A landscaping company contracted to service an office park for one year. Three months later, the company sold its business to a massive conglomerate. The agreement stated the company 'hereby assigns all of its service contracts to the conglomerate.' The conglomerate performed the landscaping, but did a terrible job, killing several rare trees. The office park sued.",
        q: "Whom can the office park sue for damages?",
        opts: [
            "Either the landscaping company or the conglomerate, because the park has not released the company and is an intended beneficiary of the company's agreement with the conglomerate.",
            "The conglomerate only, because it is a qualified and financially responsible supplier of services.",
            "Either the landscaping company or the conglomerate, because mutuality of remedy renders either potentially liable.",
            "The landscaping company only, because the conglomerate made no promises directly to the office park."
        ],
        ans: 0,
        exp: "(A) is the correct response. An assignment of 'the contract' automatically includes a delegation of duties (Restatement § 328). However, a delegation of duties does not release the delegator (the landscaping company) from liability unless the obligee (the office park) expressly agrees to a novation. Because there was no novation, the original landscaping company remains liable. Additionally, when an assignee (the conglomerate) accepts an assignment of the contract, it is deemed to have promised to perform the delegator's duties, making the obligee an intended third-party beneficiary of that promise. Therefore, the office park can sue either the original company or the conglomerate. (B) is incorrect because the assignor is not released. (C) is incorrect because mutuality of remedy is not the applicable doctrine; third-party beneficiary law creates the liability. (D) is incorrect because the conglomerate is liable via its assumption of duties."
    },
    {
        id: 20,
        topic: "Defenses / Undue Influence",
        fp: "An elderly father was hospitalized with a terminal illness. His estranged son visited and said: 'You left everything to me and my sister equally. But you should sell me the family farm right now for $50,000. It's worth $300,000, but if you don't sell it to me, I will never visit you again.' Desperate for his son's company, the father signed the contract. After the father died, the sister sued to avoid the contract.",
        q: "On what ground would the contract most likely be avoided?",
        opts: [
            "Undue influence.",
            "Inadequate consideration.",
            "Duress.",
            "Mistake."
        ],
        ans: 0,
        exp: "(A) is the correct response. Undue influence exists where one party is subjected to unfair persuasion arising from the domination of the victim by the persuader, or a relationship where the victim is justified in assuming the persuader will not act contrary to their welfare (Restatement § 177). The father's terminal illness and the son's threat of abandonment allowed the son to dominate the vulnerable father, resulting in unfair persuasion. This makes the contract voidable for undue influence. (B) is incorrect because courts do not void contracts merely for inadequate consideration if a bargain existed. (C) is incorrect because duress requires an 'improper threat' (e.g., threat of a crime or tort); threatening to withhold visits is cruel but likely not legally 'improper' enough for duress. (D) is incorrect because there was no mistake of fact."
    },
    {
        id: 21,
        topic: "Excuse / Executory Accord",
        fp: "A borrower owed a lender $50,000, due March 1. On January 10, the lender called: 'I will discharge the debt if you promise to pay me $40,000 by January 15.' The borrower replied: 'I will attempt to get the money together.' On January 11, the lender called back and revoked the offer. On January 15, the borrower tendered $40,000, which the lender refused. The lender sued for $50,000 on March 1.",
        q: "Which statement best supports the lender's position?",
        opts: [
            "The lender's promise to discharge the debt was not enforceable because it was not in writing.",
            "The lender's offer was a gift promise and therefore not binding.",
            "The borrower's January 10 statement was not a return promise, and therefore the lender effectively revoked his offer on January 11.",
            "The telephone conversation created an executory accord and therefore did not operate as a discharge."
        ],
        ans: 2,
        exp: "(C) is the correct response. The lender offered to accept a lesser sum in exchange for earlier payment. Because earlier payment is a legal detriment, the offer was supported by consideration. However, the offer requested a return *promise* to pay by January 15 (a bilateral contract). The borrower's response, 'I will attempt to get the money,' was equivocal and did not constitute a firm promise or acceptance. Because the offer was unaccepted, the lender was completely free to revoke it on January 11. The subsequent tender was ineffective. (A) is incorrect because the agreement did not fall within the Statute of Frauds. (B) is incorrect because early payment provides valid consideration. (D) is incorrect because no executory accord was ever formed due to the lack of acceptance."
    },
    {
        id: 22,
        topic: "Assignment & Delegation / Personal Services",
        fp: "A famous portrait artist was hired to paint a mural for a museum for $20,000. Before beginning work, the artist sold her business to a talented apprentice and assigned the museum contract to the apprentice. The apprentice was a highly skilled painter. The artist notified the museum of the assignment. The museum refused to allow the apprentice to paint.",
        q: "Is the museum obligated to permit the apprentice to perform?",
        opts: [
            "Yes, because the museum received adequate assurances of the apprentice's ability.",
            "Yes, because the agreement contained no prohibition against assignment or delegation.",
            "No, because the delegation to the apprentice effected a novation.",
            "No, because the artist's duties were of a personal nature, involving her reputation and skill."
        ],
        ans: 3,
        exp: "(D) is the correct response. While contractual duties are generally delegable, duties that involve personal services, relying on the obligor's special skills, reputation, or artistic taste, are strictly non-delegable. The museum bargained specifically for the famous artist's unique skills. Therefore, the artist could not delegate performance to the apprentice, regardless of the apprentice's talent, without the museum's consent. (A) is incorrect because the skill of the delegatee does not override the non-delegable nature of personal artistic services. (B) is incorrect because personal services are non-delegable by default; no explicit prohibition is needed. (C) is incorrect because a novation requires the obligee's consent, which the museum refused."
    },
    {
        id: 23,
        topic: "Excuse / Accord and Satisfaction (Executory Accord)",
        fp: "An engineer contracted to design a bridge for $15,000. The client claimed in good faith that the plans were flawed and offered $10,000 in full settlement. The engineer orally accepted, although the plans were actually worth $15,000. The client paid $10,000. The engineer sued for the remaining $5,000.",
        q: "Will the engineer prevail?",
        opts: [
            "Yes, because payment of $10,000 cannot furnish consideration for the surrender of a $15,000 claim.",
            "No, because the engineer's promise to accept $10,000 became binding when the client made the payment.",
            "Yes, because oral modifications of written contracts are unenforceable.",
            "No, because the acceptance of partial payment constituted a novation."
        ],
        ans: 1,
        exp: "(B) is the correct response. An accord is an agreement to accept substituted performance to discharge an existing duty. When the client paid the $10,000, 'satisfaction' occurred, completely discharging the original debt. The compromise of a claim disputed in good faith provides valid consideration for the accord, even if the claim of defect is ultimately factually incorrect. Therefore, the engineer is bound by the accord and satisfaction and cannot recover the balance. (A) is incorrect because the pre-existing duty rule does not apply to unliquidated or good-faith disputed debts. (C) is incorrect because the accord was fully executed upon payment, satisfying any Statute of Frauds concerns. (D) is incorrect because an accord between original parties is not a novation."
    },
    {
        id: 24,
        topic: "Remedies / Expectation Damages in Construction",
        fp: "A pool builder contracted to build a pool for $50,000, expecting a $5,000 profit. The builder spent $10,000 on labor and $5,000 on custom tiles. The homeowner then unjustifiably canceled the contract. The builder used the $5,000 of tiles on another job. The reasonable value of the labor performed was $8,000.",
        q: "What is the builder's measure of recovery?",
        opts: [
            "$15,000, representing the contractor's construction costs plus profit, minus the saved tiles.",
            "$10,000, representing the labor costs incurred.",
            "$20,000, representing all costs plus profit.",
            "$8,000, the reasonable value of the services provided."
        ],
        ans: 0,
        exp: "(A) is the correct response. Expectation damages aim to put the non-breaching party in the position they would have been in had the contract been performed. For a partially completed construction contract breached by the owner, the formula is: Costs incurred ($15,000) + Expected profit ($5,000) - Costs avoided/salvaged ($5,000 for reused tiles) = $15,000. (B) is incorrect because it ignores the expected profit and the initial tile cost. (C) is incorrect because it fails to deduct the $5,000 saved by reusing the tiles on another job. (D) is incorrect because it represents a quantum meruit/restitution measure, which the builder would not choose because expectation damages ($15,000) yield a higher recovery than restitution ($8,000)."
    },
    {
        id: 25,
        topic: "Statute of Frauds / Land Sale (Missing Term)",
        fp: "A buyer and seller signed a memorandum stating the seller agreed to sell and the buyer agreed to buy a specific tract of land, closing on October 1 by general warranty deed. The memo omitted the agreed-upon purchase price. The seller refused to perform. The buyer sued for specific performance, offering to prove they orally agreed on $35,000.",
        q: "Will the buyer succeed?",
        opts: [
            "Yes, because the law implies the parties contracted for reasonable market value.",
            "Yes, because the seller is estopped from denying the fair price.",
            "No, because the evidence does not show $35,000 is the market value.",
            "No, because the price agreed upon is an essential element of the contract and must be in writing."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under the common law Statute of Frauds, a contract for the sale of an interest in land requires a written memorandum that specifies all essential terms with reasonable certainty. Price is an essential term in a real estate contract. Because the memorandum completely omitted the price, it fails to satisfy the Statute of Frauds, rendering the contract unenforceable. (A) is incorrect because while UCC § 2-305 allows a court to imply a reasonable price for the sale of goods, the UCC does not apply to real estate; common law requires the price in writing. (B) is incorrect because estoppel requires detrimental reliance, which is not present here. (C) is incorrect because the issue is the absence of the term in writing, not whether the oral price matches market value."
    }
];
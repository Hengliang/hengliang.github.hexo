---
title: 'MySQL索引最佳实践'
date: 2016-09-12 19:52:38
tags:
  - programming
  - mysql
---

Index
Primary Key
Index - Unique, BTree
Compound Index

非预期
Select -> Where, GroupBy, OrderBy

其他
对Insert,Update,Delete的影响

- long serialVersionUID
/** The service this ticket is valid for. */
- private Service service
/** Is this service ticket the result of a new login. */
- boolean fromNewLogin
- Boolean grantedTicketAlready


<bean id="serviceTicketExpirationPolicy" class="org.jasig.cas.ticket.support.MultiTimeUseOrTimeoutExpirationPolicy"
          c:numberOfUses="1" c:timeToKill="${st.timeToKillInSeconds:5}" c:timeUnit-ref="SECONDS"/>

<!-- TicketGrantingTicketExpirationPolicy: Default as of 3.5 -->
<!-- Provides both idle and hard timeouts, for instance 2 hour sliding window with an 8 hour max lifetime -->
<bean id="grantingTicketExpirationPolicy" class="org.jasig.cas.ticket.support.TicketGrantingTicketExpirationPolicy"
      p:maxTimeToLiveInSeconds="${tgt.maxTimeToLiveInSeconds:2592000}"
      p:timeToKillInSeconds="${tgt.timeToKillInSeconds:2592000}"/>

<action-state id="realSubmit">
    <evaluate
        expression="authenticationViaFormAction.submit(flowRequestContext, flowScope.credentials, messageContext)"/>
    <!--
    To enable LPPE on the 'warn' replace the below transition with:
    <transition on="warn" to="passwordPolicyCheck" />

    CAS will attempt to transition to the 'warn' when there's a 'renew' parameter
    and there exists a ticketGrantingId and a service for the incoming request.
    -->
    <transition on="warn" to="warn"/>
    <!--
        To enable LPPE on the 'success' replace the below transition with:
        <transition on="success" to="passwordPolicyCheck" />
      -->
    <transition on="success" to="sendTicketGrantingTicket"/>
    <transition on="error" to="generateLoginTicket"/>
    <transition on="accountDisabled" to="casAccountDisabledView"/>
    <transition on="mustChangePassword" to="casMustChangePassView"/>
    <transition on="accountLocked" to="casAccountLockedView"/>
    <transition on="badHours" to="casBadHoursView"/>
    <transition on="badWorkstation" to="casBadWorkstationView"/>
    <transition on="passwordExpired" to="casExpiredPassView"/>
</action-state>